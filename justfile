default: start
# never make destructive actions the default

build:
  echo "Now building Zeppelin!"
  npx @11ty/eleventy

start:
  echo "Starting Zeppelin now!"
  npx @11ty/eleventy --serve

purge:
  echo "Purging build folder and starting Zeppelin!"
  rm -rf ./public
  ELEVENTY_ENV=dev npx @11ty/eleventy --serve

test:
  echo "Now testing Zeppelin!"
  npx @11ty/eleventy --dryrun
  sleep 3
  shellcheck zep.sh
  echo "works lol"

install-cli:
  cp ./zep.sh ~/.local/bin/zep
  echo "installed!"

debug:
  DEBUG=Eleventy* npx @11ty/eleventy --dryrun

#todo ci:
