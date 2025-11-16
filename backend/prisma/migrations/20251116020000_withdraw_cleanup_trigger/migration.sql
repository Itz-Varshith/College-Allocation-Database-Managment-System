
DROP TRIGGER IF EXISTS trigger_cleanup_withdrawn_allocations ON "Student";
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

