#!/bin/bash

# Deployment script for fikanepal.com
echo "Starting deployment..."

# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Build the project
npm run build

# Restart the preview server (or PM2 if using it)
# If using PM2: pm2 restart fikanepal
# Otherwise, killing and restarting:
pkill -f "vite preview"
nohup npm run preview -- --port 8585 --host > deploy.log 2>&1 &

echo "Deployment complete! Site is running on port 8585."
