#!/bin/bash

composer install
cd web/themes/custom/western-up
yarn
yarn build
cd ../../../..
yarn import-data
yarn confim
lando drush uli
