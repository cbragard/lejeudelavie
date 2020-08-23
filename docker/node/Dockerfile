FROM node:10.17.0-alpine

WORKDIR /app

ADD ./run.sh /scripts/run.sh
RUN chmod +x /scripts/*

EXPOSE 3001

CMD ["/bin/sh", "/scripts/run.sh"]
