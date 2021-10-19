FROM node:14.16-alpine As builder
RUN mkdir -p /home/app
WORKDIR /home/app
#RUN apk --no-cache add --virtual builds-deps build-base python
#RUN npm config set python /usr/bin/python
#RUN npm i -g npm
COPY package*.json ./
#RUN npm install
#RUN npm rebuild bcrypt --build-from-source
#RUN apk del builds-deps
RUN apk add --no-cache make gcc g++ python && \
    npm install && \
    npm rebuild bcrypt --build-from-source && \
    apk del make gcc g++ python
COPY . .
RUN npm run build

FROM node:14.16-alpine
RUN mkdir -p  /home/app
WORKDIR  /home/app
COPY --from=builder /home/app ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]