BIN = ./node_modules/.bin

.PHONY: build start deploy

dev:
	$(BIN)/nodemon ./app/server

build:
	NODE_ENV=production $(BIN)/webpack

start:
	NODE_ENV=production node ./app/server

deploy:
	now deploy --public
	# now alias
	# now remove tommy-kwan --safe --yes
