TESTS = $(shell find test -name "*.html")

test:
	@./node_modules/.bin/mocha-phantomjs $(TESTS)

.PHONY: test
