.PHONY: build release

build:
	jetpack build
	cp ./src/index.html ./dist/index.html

release: build
	rm -rf tommy-kwan
	cp -r ./dist ./tommy-kwan
	cd tommy-kwan && now

