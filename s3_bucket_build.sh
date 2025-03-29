#!/bin/bash

# Set variables
BUCKET_NAME="pandam-website-dev"
REGION="ap-southeast-2"

# Build the React app
echo "Building React app..."
npm run build

# Create S3 bucket
echo "Creating S3 bucket..."
aws s3 mb s3://$BUCKET_NAME --region $REGION

# Allow public access
echo "Enabling public access..."
aws s3api put-public-access-block --bucket $BUCKET_NAME --public-access-block-configuration BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false

# Enable static website hosting
echo "Enabling website hosting..."
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document index.html

# Set public bucket policy
echo "Applying bucket policy..."
cat <<EOT > bucket-policy.json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOT
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json