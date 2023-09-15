/* import { instantMeiliSearch } from "@meilisearch/instant-meilisearch" */

/* const endpoint = */
  /* process.env.NEXT_PUBLIC_SEARCH_ENDPOINT || "http://127.0.0.1:7700" */

/* const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "test_key" */

/* export const searchClient = instantMeiliSearch(endpoint, apiKey) */

/* export const SEARCH_INDEX_NAME = */
  /* process.env.NEXT_PUBLIC_INDEX_NAME || "products" */


// If you want to use Algolia instead then uncomment the following lines, and delete the above lines
// you should also install algoliasearch - yarn add algoliasearch

// import algoliasearch from "algoliasearch/lite"

// const appId = process.env.NEXT_PUBLIC_SEARCH_APP_ID || "test_app_id"

// const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "test_key"

// export const searchClient = algoliasearch(appId, apiKey)

// export const SEARCH_INDEX_NAME =
//   process.env.NEXT_PUBLIC_INDEX_NAME || "products"


import Searchkit, { SearchkitConfig } from 'searchkit'
import createClient from '@searchkit/instantsearch-client'
import { InstantSearch, SearchBox, Hits, RefinementList, Pagination, RangeInput } from 'react-instantsearch-hooks-web'
  const searchEndpoint = process.env.NEXT_PUBLIC_SEARCH_ENDPOINT || "http://localhost:9200"
  const searchUsername = process.env.NEXT_PUBLIC_SEARCH_USERNAME
  const searchPassword = process.env.NEXT_PUBLIC_SEARCH_PASSWORD
  const config: SearchkitConfig = {
      connection: {
        host: searchEndpoint,
        auth: {
          username: searchUsername,
          password: searchPassword
        }
      },
      search_settings: {
        search_attributes: ['title','description'],
        result_attributes: ['title','description','handle','thumbnail']
      }
    }

   const client = new Searchkit(config)
   export const searchClient = createClient(client)
   export const SEARCH_INDEX_NAME = process.env.NEXT_PUBLIC_INDEX_NAME || "products"

