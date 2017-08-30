The https://graphql-training.com/ website for GraphQL Training
=====================================================================

Building
--------

```bash
yarn install --force # Because we sometimes get issues with sharp
yarn run develop
```

Troubleshooting
---------------

Gatsby sometimes goes wrong/gets confused. First port of call is to kill it,
then clear the `.cache` and `public` folders:

```bash
rm -Rf .cache public
```
