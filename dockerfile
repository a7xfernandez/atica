FROM node:12.13-alpine As builder
RUN mkdir -p /home/app
WORKDIR /home/app
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm config set python /usr/bin/python
RUN npm i -g npm
COPY package*.json ./
RUN npm install
RUN npm rebuild bcrypt --build-from-source
RUN apk del builds-deps
COPY . .
RUN npm run build

FROM node:12.13-alpine
RUN mkdir -p  /home/app
WORKDIR  /home/app
COPY --from=builder /home/app ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]