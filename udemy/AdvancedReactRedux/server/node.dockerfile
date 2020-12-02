FROM node:latest

ENV NODE_ENV=development 
ENV PORT=3090

COPY . /var/www
WORKDIR /var/www

RUN npm install --silent

EXPOSE $PORT

ENTRYPOINT ["npm", "run", "dev"]