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
query {
  blockNumber
  accounts
  getBalance(params:["0x1f0dff2d80c4812adaf0c93349b28abaa9a84710"])
}
```

![graphql-playground](https://user-images.githubusercontent.com/1913316/35271739-fb22580c-002a-11e8-9df7-3e513730e362.png)

Or with `curl`:
```bash
curl 'http://localhost:4000/' -H 'Content-Type: application/json' --data-binary '{"query":"query {\n  blockNumber\n  accounts\n  getBalance(params:[\"0x1f0dff2d80c4812adaf0c93349b28abaa9a84710\"])\n}","variables":{},"operationName":null}'
```
