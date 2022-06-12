oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g terra-cd
$ terra-cd COMMAND
running command...
$ terra-cd (--version)
terra-cd/0.0.0 darwin-arm64 node-v16.15.1
$ terra-cd --help [COMMAND]
USAGE
  $ terra-cd COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`terra-cd hello PERSON`](#terra-cd-hello-person)
* [`terra-cd hello world`](#terra-cd-hello-world)
* [`terra-cd help [COMMAND]`](#terra-cd-help-command)
* [`terra-cd plugins`](#terra-cd-plugins)
* [`terra-cd plugins:install PLUGIN...`](#terra-cd-pluginsinstall-plugin)
* [`terra-cd plugins:inspect PLUGIN...`](#terra-cd-pluginsinspect-plugin)
* [`terra-cd plugins:install PLUGIN...`](#terra-cd-pluginsinstall-plugin-1)
* [`terra-cd plugins:link PLUGIN`](#terra-cd-pluginslink-plugin)
* [`terra-cd plugins:uninstall PLUGIN...`](#terra-cd-pluginsuninstall-plugin)
* [`terra-cd plugins:uninstall PLUGIN...`](#terra-cd-pluginsuninstall-plugin-1)
* [`terra-cd plugins:uninstall PLUGIN...`](#terra-cd-pluginsuninstall-plugin-2)
* [`terra-cd plugins update`](#terra-cd-plugins-update)

## `terra-cd hello PERSON`

Say hello

```
USAGE
  $ terra-cd hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/tetrash/terra-cd/blob/v0.0.0/dist/commands/hello/index.ts)_

## `terra-cd hello world`

Say hello world

```
USAGE
  $ terra-cd hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `terra-cd help [COMMAND]`

Display help for terra-cd.

```
USAGE
  $ terra-cd help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for terra-cd.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `terra-cd plugins`

List installed plugins.

```
USAGE
  $ terra-cd plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ terra-cd plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `terra-cd plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ terra-cd plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ terra-cd plugins add

EXAMPLES
  $ terra-cd plugins:install myplugin 

  $ terra-cd plugins:install https://github.com/someuser/someplugin

  $ terra-cd plugins:install someuser/someplugin
```

## `terra-cd plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ terra-cd plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ terra-cd plugins:inspect myplugin
```

## `terra-cd plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ terra-cd plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ terra-cd plugins add

EXAMPLES
  $ terra-cd plugins:install myplugin 

  $ terra-cd plugins:install https://github.com/someuser/someplugin

  $ terra-cd plugins:install someuser/someplugin
```

## `terra-cd plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ terra-cd plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ terra-cd plugins:link myplugin
```

## `terra-cd plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ terra-cd plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ terra-cd plugins unlink
  $ terra-cd plugins remove
```

## `terra-cd plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ terra-cd plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ terra-cd plugins unlink
  $ terra-cd plugins remove
```

## `terra-cd plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ terra-cd plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ terra-cd plugins unlink
  $ terra-cd plugins remove
```

## `terra-cd plugins update`

Update installed plugins.

```
USAGE
  $ terra-cd plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
