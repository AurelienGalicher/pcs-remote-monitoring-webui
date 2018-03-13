#!/usr/bin/env bash
set -ex

# serve the app via nginx
mkdir -p /app/logs
sudo nginx -g 'daemon off;' -c /app/nginx.conf
