FROM node:20.14.0

WORKDIR /api

COPY . . 

RUN rm -rf node_modules
RUN npm i

CMD ["npm", "start"]

EXPOSE 8080