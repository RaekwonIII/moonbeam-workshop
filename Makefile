process: migrate
	@node -r dotenv/config lib/processor.js


serve:
	@npx squid-graphql-server


migrate:
	@npx sqd db:migrate


migration:
	@npx sqd db:create-migration Data


build:
	@npm run build


codegen:
	@npx sqd codegen



typegen: moonriverVersions.json
	@npx squid-substrate-typegen typegen.json


moonriverVersions.json:
	@make explore


explore:
	@npx squid-substrate-metadata-explorer \
		--chain wss://wss.api.moonriver.moonbeam.network \
		--archive https://moonriver-beta.indexer.gc.subsquid.io/v4/graphql \
		--out moonriverVersions.json

up:
	@docker-compose up -d


down:
	@docker-compose down


.PHONY: process serve start codegen migration migrate up down
