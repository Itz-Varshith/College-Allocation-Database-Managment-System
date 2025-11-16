-- ============================================================================
-- Auto-Register Trigger Migration
-- ============================================================================
-- This migration creates a PostgreSQL trigger that automatically sets 
-- isRegistered = true when a student's password is set for the first time.
-- ============================================================================

-- Step 1: Drop any existing triggers and functions
DROP TRIGGER IF EXISTS trigger_auto_set_registered ON "Student";
DROP TRIGGER IF EXISTS auto_set_registered ON "Student";
DROP FUNCTION IF EXISTS auto_set_registered() CASCADE;

-- Step 2: Create the trigger function
-- IMPORTANT: 
-- 1. Use NEW (uppercase) - lowercase 'new' will cause Prisma errors
-- 2. Use quoted identifiers for column names (NEW."isRegistered") to handle case sensitivity
-- 3. Only activate when password field is actually being changed (allows manual isRegistered updates)
CREATE OR REPLACE FUNCTION auto_set_registered()
RETURNS TRIGGER AS $$
BEGIN
    -- Only proceed if password field is actually being changed
    -- This allows manual updates to isRegistered without trigger interference
    IF (OLD.password IS DISTINCT FROM NEW.password) THEN
        -- Password is being set or changed
        -- Check if password is not null/empty and student is not registered
        IF NEW.password IS NOT NULL 
           AND NEW.password != '' 
           AND (NEW."isRegistered" = false OR NEW."isRegistered" IS NULL) THEN
            -- Automatically set isRegistered to true when password is set
            NEW."isRegistered" := true;
        END IF;
    END IF;
    -- If password is NOT being changed, do nothing - allow all other field updates
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 3: Create the trigger
CREATE TRIGGER trigger_auto_set_registered
    BEFORE UPDATE ON "Student"
    FOR EACH ROW
    EXECUTE FUNCTION auto_set_registered();

