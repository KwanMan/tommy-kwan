.PHONY: build release

build:
	rm -rf dist
	jetpack build
	cp ./src/index.html ./dist/index.html

release: build
	rm -rf tommy-kwan
	cp -r ./dist ./tommy-kwan
	cd tommy-kwan && now --public

