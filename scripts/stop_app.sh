#!/bin/bash
set -e

pm2 stop hothyfa-cv || true
pm2 delete hothyfa-cv || true