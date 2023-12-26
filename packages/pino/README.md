# `@loggregator/pino-adapter`

Send logs to loggregator using [pino](https://www.npmjs.com/package/pino).

## Install

```
npm i @loggregator/pino-adapter
pnpm add @loggregator/pino-adapter
bun add @loggregator/pino-adapter
yarn add @loggregator/pino-adapter
```

## Usage
An example of using the adapter can be found [here](./example/src/index.ts).

#### Options

When you create your transport through pino, you are able to pass an options object. The following fields can be included in the options object:

| Field | Type | Description |
| --- | --- | --- |
| token | string | The token to use for authentication with loggregator |
| apiURL | string (optional) | The API URL for loggregator, if you have a custom instance. Defaults to the prod hosted version. |

## License

This adapter is licensed under the MIT license. See [LICENSE](./LICENSE) for more details.