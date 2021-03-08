FROM node:17-alpine3.14

WORKDIR /app

ADD ./run.sh /scripts/run.sh
RUN chmod +x /scripts/*

USER node

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

WORKDIR /app

RUN npm install -g npm@latest

EXPOSE 3000

CMD ["/bin/sh", "/scripts/run.sh"]
