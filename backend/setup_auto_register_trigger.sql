
DROP TRIGGER IF EXISTS trigger_auto_set_registered ON "Student";
DROP TRIGGER IF EXISTS auto_set_registered ON "Student";
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN 
        SELECT trigger_name
        FROM information_schema.triggers
        WHERE event_object_table = 'Student'
        AND trigger_schema NOT IN ('pg_catalog', 'information_schema')
        AND trigger_name LIKE '%register%'
    LOOP
        EXECUTE format('DROP TRIGGER IF EXISTS %I ON "Student"', r.trigger_name);
        RAISE NOTICE 'Dropped existing trigger: %', r.trigger_name;
    END LOOP;
END $$;

DROP FUNCTION IF EXISTS auto_set_registered() CASCADE;

CREATE OR REPLACE FUNCTION auto_set_registered()
RETURNS TRIGGER AS $$
BEGIN
    IF (OLD.password IS DISTINCT FROM NEW.password) THEN
        IF NEW.password IS NOT NULL 
           AND NEW.password != '' 
           AND (NEW."isRegistered" = false OR NEW."isRegistered" IS NULL) THEN
            NEW."isRegistered" := true;
        END IF;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_auto_set_registered
    BEFORE UPDATE ON "Student"
    FOR EACH ROW
    EXECUTE FUNCTION auto_set_registered();

SELECT 
    'SUCCESS: Auto-register trigger has been set up' as status,
    trigger_name,
    event_object_table,
    event_manipulation,
    action_timing
FROM information_schema.triggers
WHERE trigger_name = 'trigger_auto_set_registered';

SELECT 
    'SUCCESS: Trigger function has been created' as status,
    routine_name,
    routine_type
FROM information_schema.routines
WHERE routine_name = 'auto_set_registered';

SELECT 
    CASE 
        WHEN EXISTS (
            SELECT 1 FROM information_schema.triggers 
            WHERE trigger_name = 'trigger_auto_set_registered'
        ) AND EXISTS (
            SELECT 1 FROM information_schema.routines 
            WHERE routine_name = 'auto_set_registered'
        ) THEN 'Setup Complete: Trigger and function are ready to use'
        ELSE 'Setup Failed: Please check for errors above'
    END as final_status;

