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

Start the server

```
npm start
```

## 2. Connect with NFT.STORAGE

create an `.env` file inside the microipfs folder and write down `NFT_STORAGE_KEY`

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
