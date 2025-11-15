
DROP TRIGGER IF EXISTS trigger_cleanup_withdrawn_allocations ON "Student";
DROP TRIGGER IF EXISTS cleanup_withdrawn_allocations ON "Student";

DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN 
        SELECT trigger_name
        FROM information_schema.triggers
        WHERE event_object_table = 'Student'
        AND trigger_schema NOT IN ('pg_catalog', 'information_schema')
        AND (trigger_name LIKE '%withdraw%' OR trigger_name LIKE '%cleanup%')
    LOOP
        EXECUTE format('DROP TRIGGER IF EXISTS %I ON "Student"', r.trigger_name);
        RAISE NOTICE 'Dropped existing trigger: %', r.trigger_name;
    END LOOP;
END $$;

DROP FUNCTION IF EXISTS cleanup_withdrawn_allocations() CASCADE;

CREATE OR REPLACE FUNCTION cleanup_withdrawn_allocations()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW."current_status" = 'withdrawn' 
       AND (OLD."current_status" IS DISTINCT FROM NEW."current_status") THEN
        
        DELETE FROM "Allocation_Status"
        WHERE "student_id" = NEW."student_id";
        
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_cleanup_withdrawn_allocations
    AFTER UPDATE ON "Student"
    FOR EACH ROW
    WHEN (NEW."current_status" = 'withdrawn' AND OLD."current_status" != 'withdrawn')
    EXECUTE FUNCTION cleanup_withdrawn_allocations();

SELECT 
    'SUCCESS: Withdraw cleanup trigger has been set up' as status,
    trigger_name,
    event_object_table,
    event_manipulation,
    action_timing
FROM information_schema.triggers
WHERE trigger_name = 'trigger_cleanup_withdrawn_allocations';

SELECT 
    'SUCCESS: Trigger function has been created' as status,
    routine_name,
    routine_type
FROM information_schema.routines
WHERE routine_name = 'cleanup_withdrawn_allocations';

SELECT 
    CASE 
        WHEN EXISTS (
            SELECT 1 FROM information_schema.triggers 
            WHERE trigger_name = 'trigger_cleanup_withdrawn_allocations'
        ) AND EXISTS (
            SELECT 1 FROM information_schema.routines 
            WHERE routine_name = 'cleanup_withdrawn_allocations'
        ) THEN 'Setup Complete: Withdraw cleanup trigger is ready to use'
        ELSE 'Setup Failed: Please check for errors above'
    END as final_status;

