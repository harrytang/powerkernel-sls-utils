# sls-utils
[![Maintainability](https://api.codeclimate.com/v1/badges/7f7ce6f918e9fba52b69/maintainability)](https://codeclimate.com/github/powerkernel/sls-utils/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7f7ce6f918e9fba52b69/test_coverage)](https://codeclimate.com/github/powerkernel/sls-utils/test_coverage)
[![Build Status](https://travis-ci.com/powerkernel/sls-utils.svg?branch=master)](https://travis-ci.com/powerkernel/sls-utils)
[![Dependency Status](https://img.shields.io/david/powerkernel/sls-utils.svg?style=flat-square)](https://david-dm.org/powerkernel/sls-utils)
[![Download Status](https://img.shields.io/npm/dm/@powerkernel/sls-utils.svg?style=flat-square)](https://www.npmjs.com/package/@powerkernel/sls-utils) 

> Power Kernel utils for serverless

## Installation
```
npm install @powerkernel/sls-utils --save
```

## Documentation
Common utils to use with serverless framework

## Available utils
The following utils are svailable:
`response`

Auto add headers
```js
headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
}
```

Success response
```js
response.success = ({ headers = {}, code = 200, data = {} });
```

Failure response
```js
response.failure = ({ headers = {}, code = 500, error = {} });
```

## Complete Example
Here's an example of a serverless function that uses `response` to output the response. 

```js
import { response } from "@powerkernel/sls-utils";

import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success({ data: params.Item});
  } catch (e) {
    return failure({ error: "Something went wrong." });
  }
```

## License

Copyright (c) 2020 Power Kernel

Licensed under the [MIT license](LICENSE).