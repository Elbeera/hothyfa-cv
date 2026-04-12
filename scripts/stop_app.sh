#!/bin/bash
set -e

export PATH=$PATH:/usr/bin

cd /home/ubuntu/hothyfa-cv || exit 1

pm2 stop hothyfa-cv || true
pm2 delete hothyfa-cv || true

# Kill anything still listening on port 3000
fuser -k 3000/tcp || true
sleep 2