from ubuntu:18.04

run apt-get update
run apt-get install -y software-properties-common

# run apt-add-repository ppa:dotz/nginx-with-push-stream-module
run apt-add-repository ppa:certbot/certbot
run apt-get update

run apt-get install -y nginx
run apt-get install -y python-certbot-nginx

run apt-get install -y ranger
run apt-get install -y vim

stopsignal SIGTERM
cmd ["nginx", "-g", "daemon off;"]
expose 443
expose 80
