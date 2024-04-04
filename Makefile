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

.PHONY: start-nextjs
start-nextjs:
	echo "Spinning up the Next.js web app in a docker container"
	docker compose up nextjs -d
	echo "The dotnet Next.js web app is up"

.PHONY: stop
start-nextjs:
	echo "Shutting down containers"
	docker compose down
	echo "Shut down containers"

.PHONY: generate-api-client-typescript
generate-api-client-typescript:
	echo "Generate the Todo API client Typescript library"
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