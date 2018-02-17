FROM node:8

RUN mkdir -p /app
WORKDIR /app
ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock
RUN yarn install
ADD . /app
RUN make build

EXPOSE 1234

ENTRYPOINT [ "make", "start" ]
