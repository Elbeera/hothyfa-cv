#!/bin/bash
set -e

cd /home/ubuntu/hothyfa-cv

pm2 start npm --name "hothyfa-cv" -- start
pm2 save