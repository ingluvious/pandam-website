#!/bin/bash

# Set variables
BUCKET_NAME="pandam-website-dev"
REGION="ap-southeast-2"

# Build the React app
echo "Building React app..."
npm run build

# Upload files to S3
echo "Uploading files..."
aws s3 sync build/ s3://$BUCKET_NAME/

# Display the website URL
echo "Deployment complete! Access your site at:"
echo "http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"