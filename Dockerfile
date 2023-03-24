FROM node:16-alpine AS development

WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build


FROM node:16-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn install --production
COPY . .
COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]

