# Firebase React Template

## Get started

To get started, install node and yarn.

Run yarn:

```
yarn
```

Then run the server:

```
yarn start
```

If you want to use Firebase emulators, follow a tutorial to init firebase using Firebase CLI.
Once you are able to run emulators, you can do:

```
yarn emulators:start
```

To have Functions auto-load, you can run this command in the generated `functions` folder:

```
cd functions
yarn build:watch
```

To deploy functions:

```
cd functions
yarn deploy
```
