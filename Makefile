.PHONY: build release

build:
	rm -rf dist
	jetpack build
	cp ./src/index.html ./dist/index.html

release: build
	cp ./now.json ./dist/now.json
	cd dist && now deploy --public
	now alias
	now remove tommy-kwan --safe --yes
	rm -f ./dist/now.json
