# Enreach Chain JS SDK

This is the JavaScript SDK for [Enreach Chain](https://github.com/EnreachNetwork/enreach-chain.git).

## Usage


## Build and Publish

### Update definitions.ts manually

If there're any types changed or added to the chain, need to update the definitions.ts manually.

- `src/interfaces/definitions.ts` - this just exports all the sub-folder definitions in one go
- `src/interfaces/<module>/definitions.ts` - manual type definitions for a specific module

### Get the latest chain metadata

Run the following command to get the latest metadata from the chain
```shell
curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9944
```

### Regenerate the types

Run the following command to regenerate the types based on the latest metadata and updated definitions.ts files
```shell
npm run gen
```

### Build and publish
```shell
npm run pub
```
