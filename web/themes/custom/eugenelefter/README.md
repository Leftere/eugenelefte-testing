# Takeda Base Theme

## Set Up

1. Clone the Takeda Base repository - git@github.com:GAI-DXA/takeda-brands-base-upstream.git
2. copy `example.docksal-local.env` removing the `example.` from the file name.
3. from the project root folder, run `fin init`. This creates the containers, installs Drupal, and installs the Base and Sub-Theme dependencies, and compiles the CSS and JS assets for both.

When the `init` process has completed, get the DB and files via Pantheon.
* On the [Pantheon Dashboard](https://dashboard.pantheon.io/personal-settings/machine-tokens), generate a Terminus Secret Token, and paste the string in the `docksal-local.env`
* Also in `docksal-local.env`, uncomment the `HOSTING_*` vars.
* `fin up` to properly load these new envionment vars
* `fin pull db` and `fin pull files` to... get the db and files
* `fin drush @self cr` to rebuild the Drupal cache
* `chmod -R 777 ./web/sites/default/files` to give Read/Write permissions

## Common FE command-line tasks

* `fin gulp` to run the default watch task, watches for changes to JS, CSS, Twig and other files in the base theme and compiles them in development mode
* `fin gulp build` generates the production ready FE assets
* To modify files in the sub-theme (usually within individual sub-theme repos), navigate to the `/web/themes/custom/tbsd_sub/` folder and run `fin exec npx gulp [watch/build]`.

