# microipfs

> dead simple microservice for pinning NFT related data to IPFS

Microipfs is a microservice for adding NFT related data (NFT asset files, metadata json, etc.) to IPFS using [nft.storage](https://nft.storage)

# install

## 1. Install Microipfs

Clone the repo

```
git clone 
```

Install dependencies

```
npm install
```


## 2. Connect with NFT.STORAGE

create an `.env` file inside the microipfs folder and,

- enter `NFT_STORAGE_KEY`: The NFT STORAGE API KEY
- (optional) enter `ALLOWED`: A comma separated string of host HTTP URLs
- (optional) enter `PORT`: The port to run the server from

Example

```
NFT_STORAGE_KEY=<eyJhbCg.....
WHITELIST=https://myapp.com,http://localhost:8080
PORT=3000
```

## 3. Start the server

Start the server

```
npm start
```

# usage

1. pin JSON
2. pin web content

## 1. pin JSON

Pinning a JSON object (NFT metadata) is easy. Simply make a POST request to microipfs:

```
POST /add
HOST: microipfs.com
Content-Type:application/json
Accept:application/json

{
  "name": "my nft",
  "description": "this is my first nft",
  "image": "ipfs://ipfs/....",
}
```

Anything that can be accessed via HTTP can be pinned. Microipfs automatically fetches the URL and pins it to IPFS using NFT.STORAGE

## 2. pin web content

Anything that can be accessed via HTTP can be pinned. Microipfs automatically fetches the URL and pins it to IPFS using NFT.STORAGE
