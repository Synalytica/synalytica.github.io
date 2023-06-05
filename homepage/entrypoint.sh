#!/bin/sh
# determine development/production

if [ "$DEBUG" = 1 ]; then
    npm run-script dev
else
    npm run-script build \
        && npx quasar serve dist/spa
fi
