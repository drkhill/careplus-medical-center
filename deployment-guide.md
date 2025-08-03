# CarePlus HostGator Deployment Guide

## Prerequisites
- HostGator hosting plan that supports Node.js applications
- Database hosting (MySQL/PostgreSQL)
- Domain configured

## Files to Upload
1. All project files (client/, server/, shared/, package.json, etc.)
2. Build the frontend: `npm run build`
3. Upload the built files to your hosting directory

## Environment Variables Needed
```
DATABASE_URL=your_hostgator_database_connection_string
NODE_ENV=production
SESSION_SECRET=your_secure_session_secret
```

## Database Setup
1. Create PostgreSQL or MySQL database in HostGator cPanel
2. Import your schema using the database tools
3. Update DATABASE_URL to point to your HostGator database

## Static Files
- Built frontend files go in public directory
- HostGator will serve these automatically

## Server Configuration
- Ensure your main server file is named correctly (usually index.js)
- Set up proper port configuration for HostGator
- Configure any necessary .htaccess files

## Domain Configuration
- Point your domain to the application directory
- Configure SSL if needed through HostGator