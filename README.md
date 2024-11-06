# Electron + Sqlite3 + Prisma

An Electron application with `better-sqlite3` and `prisma`.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn dev
```

### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```

## The Database

Prisma handles pretty much anything you need to get things running.

## Renaming the database

By default, the application database is called `data.db`.
It is referenced in `src/main/database.ts`, `prisma/schema.prisma`, and `electron.vite.config.ts`.
If you're renaming the database, make sure to update these files.

## Schema

Define your schema in `prisma/schema.prisma`, then run `yarn prisma migrate dev` to generate the database file. You
don't need to create a database file beforehand.

## Client

All you need to do is import the `@prisma/client`, I've created a `src/main/database.ts` file for you.
Simply run `yarn dev` and you'll see `[ { id: 1, email: 'jdoe@gmail.com', name: 'John Doe' } ]` in the console!

## Shipping the database

I use [Hydraulic Conveyor](https://conveyor.hydraulic.dev/15.1/), so things work differently for me.
Most people use something like Electron Forge, and I've never used Electron Builder.

All you need to do is make sure you grab the appropriate files to unpack,
Prisma requires its [Query Engine](https://www.prisma.io/docs/orm/more/under-the-hood/engines)
(`query_engine-windows.dll.node` for windows) and its Schema Engine (`schema-engine-windows.exe` for windows).
The included files *will* depend greatly on the OS you're shipping to.

Unfortunately, my software is only built for Windows, so I can't help with other OS issues.
