FROM node:latest AS builder

WORKDIR /app

COPY . .
COPY package*.json .

RUN npx prisma generate
# RUN npx prisma migrate deploy
RUN npm run build
RUN npm install

EXPOSE 3333

CMD ["npm", "run", "start"]