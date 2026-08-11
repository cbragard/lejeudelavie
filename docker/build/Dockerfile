FROM node:24-alpine AS builder

ENV NODE_ENV=production
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN mkdir -p /app
ADD . /app

WORKDIR /app

RUN mkdir /home/node/.npm-global
RUN npm install -g npm@12.0.2
# npm ci installs the exact package-lock.json tree; --include=dev is required because NODE_ENV=production
# would otherwise drop the devDependencies that `npm run build` needs.
RUN npm ci --include=dev
RUN npm run build

# ----------------------------------------

FROM nginx:1.31-alpine AS runner

ENV NODE_PORT=3003

COPY --from=builder /app/dist/ /usr/share/nginx/html/
COPY ./docker/build/config/nginx.conf /etc/nginx/conf.d/default.conf

# Run the whole container as the built-in non-root `nginx` user (UID/GID 101) instead of root.
# Static SPA on port 3003 (>1024, no root needed to bind). Move the pid to /tmp, drop the `user`
# directive (a non-root master can't setuid), and make nginx's writable dirs (cache, conf.d, html)
# nginx-owned. Access/error logs already go to stdout/stderr (the nginx:alpine image symlinks them),
# so no log-file or bind-mount ownership change is needed.
RUN sed -i 's|^user .*|# &|; s|/var/run/nginx.pid|/tmp/nginx.pid|; s|/run/nginx.pid|/tmp/nginx.pid|' /etc/nginx/nginx.conf \
 && chown -R nginx:nginx /var/cache/nginx /var/log/nginx /usr/share/nginx/html /etc/nginx/conf.d
USER nginx

EXPOSE 3003

CMD ["nginx", "-g", "daemon off;"]
