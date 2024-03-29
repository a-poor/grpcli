oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @a-poor/grpcli
$ grpcli COMMAND
running command...
$ grpcli (--version)
@a-poor/grpcli/0.0.0 linux-x64 node-v17.6.0
$ grpcli --help [COMMAND]
USAGE
  $ grpcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`grpcli hello PERSON`](#grpcli-hello-person)
* [`grpcli hello world`](#grpcli-hello-world)
* [`grpcli help [COMMAND]`](#grpcli-help-command)
* [`grpcli plugins`](#grpcli-plugins)
* [`grpcli plugins:inspect PLUGIN...`](#grpcli-pluginsinspect-plugin)
* [`grpcli plugins:install PLUGIN...`](#grpcli-pluginsinstall-plugin)
* [`grpcli plugins:link PLUGIN`](#grpcli-pluginslink-plugin)
* [`grpcli plugins:uninstall PLUGIN...`](#grpcli-pluginsuninstall-plugin)
* [`grpcli plugins update`](#grpcli-plugins-update)

## `grpcli hello PERSON`

Say hello

```
USAGE
  $ grpcli hello [PERSON] -f <value>

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

_See code: [dist/commands/hello/index.ts](https://github.com/a-poor/grpcli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `grpcli hello world`

Say hello world

```
USAGE
  $ grpcli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `grpcli help [COMMAND]`

Display help for grpcli.

```
USAGE
  $ grpcli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for grpcli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_

## `grpcli plugins`

List installed plugins.

```
USAGE
  $ grpcli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ grpcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `grpcli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ grpcli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ grpcli plugins:inspect myplugin
```

## `grpcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ grpcli plugins:install PLUGIN...

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
  $ grpcli plugins add

EXAMPLES
  $ grpcli plugins:install myplugin 

  $ grpcli plugins:install https://github.com/someuser/someplugin

  $ grpcli plugins:install someuser/someplugin
```

## `grpcli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ grpcli plugins:link PLUGIN

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
  $ grpcli plugins:link myplugin
```

## `grpcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ grpcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ grpcli plugins unlink
  $ grpcli plugins remove
```

## `grpcli plugins update`

Update installed plugins.

```
USAGE
  $ grpcli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
