# Quickstart

## Deploy

create a new frontend template for medusa
```shell
npx create-next-app -e https://github.com/medusajs/nextjs-starter-medusa medusa-store
```

then create .env.local using the .env.template

copy the files in here to the medusa-store file 

run the frontend for dev using 
```shell
npm run dev
```
and for deployment using 
```shell
npm run start
```

branch location-home does not include search
## Enable elasticsearch
1. store.config.json, set "search":true
{
  "features": {
    "search": true,
    "productModule": false
  }
}

2. configure in .env.local:
NEXT_PUBLIC_SEARCH_ENDPOINT=http://xxxx
NEXT_PUBLIC_SEARCH_USERNAME=xxxx
NEXT_PUBLIC_SEARCH_PASSWORD=xxxx


