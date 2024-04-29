FROM node:21-alpine3.18
WORKDIR /code
COPY ./* /code/

RUN npm install

CMD node index.js
