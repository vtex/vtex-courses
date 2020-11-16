# Commerce API course challenge

## Proposal
Now, instead of reusing a Client from the `@vtex/clients` package, **create your own Client** following the steps [of this material](https://www.notion.so/How-to-use-and-create-Clients-on-VTEX-IO-1dbd20c928c642d0ba059d5efbe7874b).

You must create a Client `Search` that must contain **only one method** called `productFullTextSearch` that receives only one string `term`. The Client must call the Search API, returning a list of products resulting from the search for this `term`.

After that, implement a route in your service so that you can test your Client.

**Useful links**
- [Search API documentation](https://developers.vtex.com/reference/search-3)
- [Example Request](https://portal.vtexcommercestable.com.br/api/catalog_system/pub/products/search/?&fq=blouse&an=storecomponents)

**Expected Response**
! [Request Example](https://user-images.githubusercontent.com/18706156/93603134-f4c3b300-f999-11ea-8c0d-626e01a24e14.png)