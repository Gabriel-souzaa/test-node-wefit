FROM node:lts-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:lts-alpine AS final

WORKDIR /app

COPY --from=builder ./app/dist ./dist

COPY package*.json .

RUN npm install

CMD ["npm", "run", "start"]