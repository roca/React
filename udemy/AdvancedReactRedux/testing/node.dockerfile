FROM node:13.12.0-alpine

ENV NODE_ENV=development 
ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

ENV PATH /var/www/node_modules/.bin:$PATH

RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install --silent

EXPOSE $PORT

CMD ["npm", "run", "start"]