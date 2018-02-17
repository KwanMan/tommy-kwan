FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json
ADD yarn.lock /usr/src/app/yarn.lock
RUN yarn install

ADD . /usr/src/app/
RUN make build

EXPOSE 1234

ENTRYPOINT [ "make", "start" ]
