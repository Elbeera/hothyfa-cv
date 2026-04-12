#!/bin/bash
set -e

export PATH=$PATH:/usr/bin

cd /home/ubuntu/hothyfa-cv || exit 1

pm2 start npm --name "hothyfa-cv" -- start
pm2 save