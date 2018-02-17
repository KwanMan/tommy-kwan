BIN = ./node_modules/.bin

.PHONY: dev clean build start deploy-production deploy-staging

dev:
	$(BIN)/nodemon ./app/server

lint:
	$(BIN)/standard

clean:
	rm -rf ./app/dist

build:
	NODE_ENV=production $(BIN)/webpack

start:
	NODE_ENV=production node ./app/server

deploy-production: lint
	now deploy --public
	now alias
	now remove tommy-kwan --safe --yes

deploy-staging:
	now deploy --public
