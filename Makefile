test:
	@./node_modules/.bin/mocha -c -u bdd --compilers coffee:coffee-script

.PHONY: test
