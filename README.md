# Aro Chain JS SDK

This is the JavaScript SDK for [Aro Chain](https://github.com/AroNetwork/aro-chain.git).

## Usage

Install the package
```javascript
npm install @aro-network/aro-chain-js
```

Import and use with polkadot.js
```javascript
import { ApiPromise, WsProvider } from '@polkadot/api';
import { typesBundleForAroNetwork } from '@aro-network/aro-chain-js';
import { Region } from '@aro-network/aro-chain-js/types/interfaces';

const api = new ApiPromise({
    provider: new WsProvider("ws://localhost:9944"),
    typesBundle: typesBundleForAroNetwork
});

// Create and send a transaction to chain
const tx = api.tx.registry.createRegion(code,name, description);

await tx.signAndSend(keyring.alice, ({events = [], status}) => {});

// Query data from chain
const regions = await api.query.registry.regions.entries();

const allRegions = regions.map(([key, value]) => {
    return value.unwrap().toHuman() as unknown as Region;
});
```

Now it's good to go, also you can get intellisense in the IDE for all the types in the Aro Chain.

## Build and Publish

### Update definitions.ts manually

If there're any types changed or added to the chain, need to update the definitions.ts manually.

- `./types/interfaces/definitions.ts` - this just exports all the sub-folder definitions in one go
- `./types/interfaces/<module>/definitions.ts` - manual type definitions for a specific module

### Get the latest chain metadata

Run the following command to get the latest metadata from the chain, please make sure to run it under the `types` folder
```shell
cd types

curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9944 > metadata.json
```

### Regenerate the types

Run the following command to regenerate the types based on the latest metadata and the manually updated definitions.ts files, please make sure to run it under the `types` folder
```shell
cd types

npm run gen
```

### Build and publish

Run the following command to build and publish the package, please make sure to run it under the root folder
```shell
# Run under the root folder
npm run pub
```
