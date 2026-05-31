FROM node:24-alpine AS builder

ENV NODE_ENV=production
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN mkdir -p /app
ADD . /app

WORKDIR /app

RUN mkdir /home/node/.npm-global
RUN npm install -g npm@latest
RUN npm install --production=false
RUN npm run build

# ----------------------------------------

FROM nginx:1.27-alpine AS runner

ENV NODE_PORT=3003

COPY --from=builder /app/dist/ /usr/share/nginx/html/
COPY ./docker/build/config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3003

CMD ["nginx", "-g", "daemon off;"]
