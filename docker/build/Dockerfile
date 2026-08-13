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

FROM node:24-alpine AS runner

ENV NODE_PORT=3003

RUN apk update
RUN apk --no-cache add nginx supervisor

EXPOSE $NODE_PORT

WORKDIR /app

COPY --from=builder /app/dist/ /app/dist/
COPY ./docker/build/config/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/build/config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Run the whole container as the built-in non-root `node` user (UID/GID 1000) instead of root —
# aligned on the fleet-standard pattern (see e-xode/vui). lejeudelavie serves only a static SPA via
# nginx (no node runtime at request time), but sharing one non-root UID across the fleet means one
# deploy-script chown pattern everywhere instead of a per-app special case. Own /app + the nginx
# state/log dirs so the unprivileged nginx (master + worker) can write; supervisord + nginx pidfiles
# move /run → /tmp. The bind-mounted /app/logs must be 1000:1000 on the host (applied by
# deploy.e-xode.lejeudelavie.sh) — access/error logs are now real files under /app/logs, not
# stdout/stderr symlinks.
RUN mkdir -p /app/logs /var/log/nginx && \
    chown -R node:node /app /home/node /var/log/nginx /var/lib/nginx
USER node

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
