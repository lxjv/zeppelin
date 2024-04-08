build:
  echo "Now building Zeppelin!"
  npx @11ty/eleventy

start:
  echo "Starting Zeppelin's dev server now!"
  ELEVENTY_ENV=dev npx @11ty/eleventy --serve

purge:
  echo "Purging build folder and starting Zeppelin's dev server!"
  rm -rf ./public
  ELEVENTY_ENV=dev npx @11ty/eleventy --serve

debug:
  DEBUG=Eleventy* npx @11ty/eleventy --dryrun

deploy:
	ssh eclipse /opt/sites/laker.tech/deploy.sh
