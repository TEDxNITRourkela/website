FROM node:alpine

WORKDIR /app

COPY ./client/package.json /app/

COPY ./client/yarn.lock /app/

RUN npm install yarn -g

RUN cd app && yarn install --frozen-lockfile

COPY ./client /app

RUN yarn build

RUN npm install serve -g

CMD ["serve", "-s", "./app/build/"]
