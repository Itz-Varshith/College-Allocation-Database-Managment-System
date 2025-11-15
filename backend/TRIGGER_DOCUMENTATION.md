# Auto-Register Trigger Documentation

## Overview

A PostgreSQL trigger has been created to automatically set `isRegistered = true` when a student's password is set for the first time during login.

## Trigger Details

### Function: `auto_set_registered()`

- **Type**: BEFORE UPDATE trigger function
- **Table**: `Student`
- **Purpose**: Automatically sets `isRegistered = true` when password is set/changed

### Trigger: `trigger_auto_set_registered`

- **Event**: BEFORE UPDATE
- **Table**: `Student`
- **Timing**: Executes before the UPDATE statement completes

## How It Works

1. **When a student logs in for the first time:**

   - Student enters email and mobile number (as password)
   - Backend hashes the mobile number
   - Backend updates the `password` field in the database
   - **Trigger automatically fires** and sets `isRegistered = true`

2. **Trigger Logic:**
   ```sql
   IF password is being set/changed
   AND isRegistered is currently false
   AND (password was NULL/empty OR password changed)
   THEN set isRegistered = true
   ```

## Migration File

- Location: `prisma/migrations/20251116013151_auto_register_trigger/migration.sql`
- Applied: ✅ Yes

## Code Changes

- **auth.js**: Removed manual `isRegistered: true` update
- The trigger now handles this automatically at the database level

## Benefits

1. **Automatic**: No need to manually set `isRegistered` in code
2. **Reliable**: Database-level enforcement ensures consistency
3. **Safe**: Only sets `isRegistered` when appropriate conditions are met
4. **Maintainable**: Logic is centralized in the database

## Testing

To test the trigger:

1. Find a student with `isRegistered = false` and empty/null password
2. Use the login endpoint with their email and mobile number
3. Check the database - `isRegistered` should be automatically set to `true`

## Verification

Run the verification script:

```bash
npx prisma db execute --file verify_trigger_setup.sql --schema prisma/schema.prisma
```
