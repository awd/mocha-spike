# TESTS = $(shell find test -name "*_spec.js")

# test:
# 	@./node_modules/.bin/mocha $(TESTS)

# .PHONY: test

test:
	@./node_modules/.bin/mocha -u bdd --compilers coffee:coffee-script -R spec

.PHONY: test
