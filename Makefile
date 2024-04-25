.PHONY: start-db
start-db:
	echo "Spinning up the database in a docker container"
	docker compose up db -d
	echo "Database is up"

.PHONY: start-backend
start-backend:
	echo "Spinning up the dotnet backend service in a docker container"
	docker compose up backend -d
	echo "The dotnet backend is up"

.PHONY: build-backend
build-backend:
	echo "Building the dotnet backend service docker container"
	docker compose build backend
	echo "Built the dotnet backend service docker container"

.PHONY: start-nextjs
start-nextjs:
	echo "Spinning up the Next.js web app in a docker container"
	docker compose up nextjs -d
	echo "The Next.js web app is up"

.PHONY: build-nextjs
build-nextjs:
	echo "Building the Next.js web app docker container"
	docker compose build nextjs
	# docker compose build nextjs --no-cache --progress=plain
	echo "Built the Next.js web app docker container"

.PHONY: stop
stop:
	echo "Shutting down containers"
	docker compose down
	echo "Shut down containers"

.PHONY: start
start:
	echo "Starting up containers"
	make start-db
	make start-backend
	make start-nextjs
	echo "Containers started"
	
.PHONY: generate-api-client-ts
generate-api-client-ts:
	echo "Generate the Todo API client Typescript library"
	rm -rf ./api-clients/ts-api
	docker compose run --rm generate-api-client-typescript
	echo "Finished generating the Todo API client Typescript library"

.PHONY: generate-api-client-python
generate-api-client-python:
	echo "Generate the Todo API client Python library"
	docker compose run --rm generate-api-client-python
	echo "Finished generating the Todo API client Python library"

.PHONY: generate-api-client-html-docs
generate-api-client-html-docs:
	echo "Generate the Todo API client html documentation"
	docker compose run --rm generate-api-client-html-docs
	echo "Finished generating the Todo API client html documentation"

.PHONY: install-api-client-ts
install-api-client-ts:
	echo "'Installing' the Todo API client Typescript library module"
	rm -rf ./frontends/nextjs/todo-app/ts-api
	rm -rf ./frontends/nextjs/todo-app/node_modules
	rm -rf ./frontends/nextjs/todo-app/package-lock.json
	cp -r ./api-clients/ts-api ./frontends/nextjs/todo-app
	touch ./frontends/nextjs/todo-app/ts-api/package.json
	cat ./api-client-resources/package.json > ./frontends/nextjs/todo-app/ts-api/package.json
	cd ./frontends/nextjs/todo-app && npm install ./ts-api --install-links
	echo "Finished 'Installing' the Todo API client Typescript library module"