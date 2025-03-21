#!/bin/bash

# FTP server details
FTP_HOST="ftpupload.net"
FTP_USER="if0_38572404"
FTP_PASS="siLdN0HWtfJ4"
FTP_PATH="htdocs/"

# Build the site
echo "Building the site..."
npm run build

# Create lftp script
echo "Creating lftp script..."
cat > ftp_commands.txt << EOL
# Set transfer mode to binary
set ftp:ssl-allow no
set ssl:verify-certificate no

# Connect to server
open -u $FTP_USER,$FTP_PASS $FTP_HOST

# Clear the target directory
mirror -R --delete-first out/ $FTP_PATH

# Exit
bye
EOL

# Run lftp with the script
echo "Uploading files..."
lftp -f ftp_commands.txt

# Clean up
rm ftp_commands.txt

echo "Deployment complete!" 