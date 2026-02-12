# Shatab.eg Backend - Setup Guide

## Prerequisites

- Node.js 18.18.0 or higher
- PostgreSQL 14 or higher
- npm 10.x

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup PostgreSQL Database

Create a new PostgreSQL database:

```sql
CREATE DATABASE shatab_db;
CREATE USER shatab_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE shatab_db TO shatab_user;
```

### 3. Configure Environment Variables

Update `.env` file with your database credentials:

```env
DATABASE_URL="postgresql://shatab_user:your_password@localhost:5432/shatab_db?schema=public"
```

### 4. Run Database Migration

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Seed Initial Data (Optional)

Create a site owner account:

```bash
npx prisma studio
```

Then manually create a user with role `siteOwner`.

## Running the Application

### Development Mode

```bash
# Start Next.js dev server
npm run dev

# Start Admin panel (in another terminal)
npm run admin
```

- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3001/admin

### Production Mode

```bash
npm run build
npm start
```

## Admin Panel Access

- URL: http://localhost:3001/admin
- Email: admin@gmail.com (from .env)
- Password: 00000000 (from .env)

**⚠️ Change these credentials in production!**

## Database Management

### View Database

```bash
npx prisma studio
```

### Create Migration

```bash
npx prisma migrate dev --name migration_name
```

### Reset Database

```bash
npx prisma migrate reset
```

## API Testing

Use tools like:
- Postman
- Thunder Client (VS Code extension)
- cURL

Example:

```bash
# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "phone": "01012345678",
    "password": "password123",
    "role": "client"
  }'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "01012345678",
    "password": "password123"
  }'
```

## File Structure

```
shatab/
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication
│   │   ├── offers/       # Offers system
│   │   ├── finishing/    # Finishing requests & proposals
│   │   ├── maintenance/  # Maintenance requests
│   │   ├── ratings/      # Ratings system
│   │   ├── donations/    # Donations
│   │   ├── notifications/# Notifications
│   │   ├── content/      # Static content
│   │   ├── users/        # User management
│   │   └── upload/       # File uploads
│   └── ...
├── server/
│   ├── middleware/       # Auth, rate limiting
│   ├── utils/            # File upload, validation, notifications
│   └── admin.js          # AdminJS configuration
├── prisma/
│   └── schema.prisma     # Database schema
├── public/
│   └── uploads/          # Uploaded files
├── docs/
│   └── API.md            # API documentation
└── .env                  # Environment variables
```

## Security Checklist

- [ ] Change default admin credentials
- [ ] Use strong JWT_SECRET
- [ ] Enable HTTPS in production
- [ ] Configure CORS properly
- [ ] Set up rate limiting
- [ ] Enable SQL injection protection (Prisma handles this)
- [ ] Validate all user inputs
- [ ] Sanitize file uploads
- [ ] Use environment variables for secrets
- [ ] Enable security headers (helmet)

## Troubleshooting

### Database Connection Error

```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Test connection
psql -U shatab_user -d shatab_db
```

### Migration Errors

```bash
# Reset and recreate
npx prisma migrate reset
npx prisma migrate dev
```

### Port Already in Use

```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (Windows)
taskkill /PID <PID> /F
```

## Support

For issues or questions, contact the development team.
