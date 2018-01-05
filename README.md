<p align='center'>
  <img src='https://user-images.githubusercontent.com/1913316/34625888-595a90b0-f252-11e7-8923-21826ad2d8f6.png' width='200'/>
</p>

> Just a proof-of-concept for now with a few methods implemented!

## Setup
```bash
npm install
```

## Run
```bash
npm start
```

## Try

Test it out on `http://localhost:4000/`:
```js
{
  blockNumber(params:[])
  accounts(params:[])
}
```

![graphql-playground](https://user-images.githubusercontent.com/1913316/34625497-c5fe77e2-f250-11e7-809b-aa2aeca13e02.png)

Or with `curl`:
```bash
curl 'http://localhost:4000/' -H 'Content-Type: application/json' --data-binary '{"query":"{\n  blockNumber(params:[])\n  accounts(params:[])\n}","variables":{},"operationName":null}'
```
