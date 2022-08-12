FROM node:latest

WORKDIR /helios

EXPOSE 3000

ENTRYPOINT [ "npm" ]
CMD [ "start" ]