
SELECT 
    'Trigger Status' as check_type,
    trigger_name,
    event_object_table,
    event_manipulation,
    action_timing
FROM information_schema.triggers
WHERE event_object_table = 'Student'
AND trigger_schema NOT IN ('pg_catalog', 'information_schema')
ORDER BY trigger_name;

SELECT 
    'Function Status' as check_type,
    routine_name,
    routine_type
FROM information_schema.routines
WHERE routine_name IN ('auto_set_registered', 'cleanup_withdrawn_allocations')
ORDER BY routine_name;

SELECT 
    CASE 
        WHEN EXISTS (
            SELECT 1 FROM information_schema.triggers 
            WHERE trigger_name = 'trigger_auto_set_registered'
        ) AND EXISTS (
            SELECT 1 FROM information_schema.triggers 
            WHERE trigger_name = 'trigger_cleanup_withdrawn_allocations'
        ) THEN 'All triggers are set up correctly'
        ELSE 'Some triggers are missing'
    END as final_status;

