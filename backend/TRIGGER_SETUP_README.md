# Auto-Register Trigger Setup

## Single SQL File for Trigger Setup

**File to use:** `setup_auto_register_trigger.sql`

This is the **only SQL file** you need to run to set up the auto-register trigger.

## What It Does

This trigger automatically sets `isRegistered = true` when a student's password is set for the first time during login.

## How to Run

### Option 1: Using Prisma (Recommended)

```bash
cd backend
npx prisma db execute --file setup_auto_register_trigger.sql --schema prisma/schema.prisma
```

### Option 2: Using psql

```bash
psql $DATABASE_URL -f backend/setup_auto_register_trigger.sql
```

### Option 3: Direct Database Connection

- Open your database client (pgAdmin, DBeaver, NeonDB, etc.)
- Connect to your database
- Open and execute `setup_auto_register_trigger.sql`

## Features

✅ **Safe to run multiple times** - Drops existing triggers first  
✅ **Allows manual updates** - You can manually change `isRegistered` in the database  
✅ **Only activates on password changes** - Won't interfere with other field updates  
✅ **Case-sensitive handling** - Properly handles camelCase column names  
✅ **Includes verification** - Shows success/failure status after execution

## What Gets Created

1. **Function**: `auto_set_registered()` - The trigger logic
2. **Trigger**: `trigger_auto_set_registered` - Fires BEFORE UPDATE on Student table

## Verification

After running the script, you should see:

- ✅ Success messages for trigger and function creation
- ✅ Final status showing "Setup Complete"

## Troubleshooting

If you see errors:

1. Make sure you have proper database permissions
2. Check that the Student table exists
3. Verify the column name is `isRegistered` (camelCase)

## Migration File

The same trigger is also available in:

- `prisma/migrations/20251116013151_auto_register_trigger/migration.sql`

This is used by Prisma migrations, but for manual setup, use `setup_auto_register_trigger.sql`.
