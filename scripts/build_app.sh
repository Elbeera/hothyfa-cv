#!/bin/bash
set -e

cd /home/ubuntu/hothyfa-cv

# Remove stray lockfile if it ever reappears
rm -f /home/ubuntu/package-lock.json

# Public API URL for the AI CV Assistant
export NEXT_PUBLIC_AI_CV_API_URL=http://98.93.23.43:8000

npm run build