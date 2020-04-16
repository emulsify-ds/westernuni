# westernuni

[![CircleCI](https://circleci.com/gh/emulsify-ds/westernuni.svg?style=shield)](https://circleci.com/gh/emulsify-ds/westernuni)
[![Dashboard westernuni](https://img.shields.io/badge/dashboard-westernuni-yellow.svg)](https://dashboard.pantheon.io/sites/24da39fb-a1bf-4c0f-b371-6a8da47380a5#dev/code)
[![Dev Site westernuni](https://img.shields.io/badge/site-westernuni-blue.svg)](http://dev-westernuni.pantheonsite.io/)


![Sous featuring Emulsify](https://github.com/fourkitchens/sous-drupal-distro/blob/master/themes/sous_admin/assets/images/Sous.png "Sous featuring Emulsify")

A drupal project with example Emulsify Design system.


Run the following commands to get this project started:

```
lando start
yarn rebuild
```


## Additional Tooling

This package provides some additional tooling to support the build.

### Helper scripts

To use the helper script provided you will need to have `yarn` or `npm` installed. Then just run `yarn <command>` or `npm run <command>`. For example: `yarn import-data`. These commands are bash scripts located in the `./scripts/sous` directory and defined in `package.json`.

#### Configuration management scripts

**confex**

```
yarn confex
```

Export active configuration to the config directory.

**confim**

```
yarn confim
```

Import the configuration to the database.

**import-data**

```
yarn import-data
```

Import a copy of the canonical database backup into your local instance. This assumes the database backup is located in `./reference/db.sql.gz`.

**local-data-bak**

```
yarn local-data-bak
```

Create a local database backup. Saves the backup to the `./reference` directory.

**rebuild**

```
yarn rebuild
```

Rebuild a fresh local instance of your site. Imports the canonical database backup and imports configuration into it.
