# CarePlus HostGator Deployment Instructions

## What You'll Need

1. **HostGator Hosting Plan**: Ensure you have a plan that supports Node.js applications
2. **Domain**: Your website domain configured in HostGator
3. **Database**: PostgreSQL or MySQL database from HostGator

## Files Built for Deployment

✅ **Frontend built**: `/dist/public/` contains your complete website
✅ **Backend built**: `/dist/index.js` is your server application
✅ **Dependencies**: `package.json` lists all required packages

## Deployment Steps

### Step 1: Export Project from Replit
1. In your Replit interface, look for "Export as ZIP" 
2. Download the complete project files

### Step 2: Upload to HostGator
Upload these key files to your hosting directory:
- `/dist/public/` → Your website's public folder
- `/dist/index.js` → Your main server file
- `package.json` → For installing dependencies
- `.htaccess` → For proper routing and security

### Step 3: Database Setup
1. **Create Database** in HostGator cPanel
2. **Get Connection Details**:
   - Host: Usually `localhost` or provided by HostGator
   - Database name, username, password
3. **Set Environment Variable**:
   ```
   DATABASE_URL=postgresql://username:password@host:port/database_name
   ```

### Step 4: Install Dependencies
In HostGator's terminal/SSH (if available):
```bash
npm install --production
```

### Step 5: Environment Variables
Set these in HostGator's environment settings:
```
NODE_ENV=production
DATABASE_URL=your_database_connection_string
SESSION_SECRET=your_secure_random_string
```

### Step 6: Start Application
Configure HostGator to run:
```bash
node dist/index.js
```

## Important Notes

- **Database Migration**: You may need to recreate your database schema on HostGator
- **File Permissions**: Ensure proper file permissions are set
- **SSL Certificate**: Enable HTTPS through HostGator for security
- **Domain Configuration**: Point your domain to the correct directory

## Alternative: Static Website Only

If HostGator doesn't support Node.js on your plan, you can deploy just the frontend:
1. Upload only the `/dist/public/` files
2. Use `.htaccess` for routing
3. You'll need external API hosting for backend functionality

## Contact HostGator Support

If you encounter issues:
- Ask about Node.js support on your hosting plan
- Request database setup assistance
- Get help with environment variable configuration