#!/bin/bash
set -e

cd /home/ubuntu/hothyfa-cv

# Remove stray lockfile if it ever reappears
rm -f /home/ubuntu/package-lock.json

npm run build