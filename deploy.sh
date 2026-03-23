#!/bin/bash

# Deployment script for fikanepal.com using PM2
echo "Starting deployment..."

# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Build the project
npm run build

# Use PM2 to manage the process (Install with: npm install -g pm2)
if command -v pm2 > /dev/null
then
    pm2 delete fikanepal || true
    pm2 start "npm run preview -- --port 8585 --host" --name fikanepal
    pm2 save
else
    echo "PM2 not found. Falling back to nohup..."
    pkill -f "vite preview"
    nohup npm run preview -- --port 8585 --host > deploy.log 2>&1 &
fi

echo "Deployment complete!"
