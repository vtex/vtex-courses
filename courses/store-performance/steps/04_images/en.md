# Images

Images are an essential part of a store. It is essential to have photos of very good quality and with excellent resolution, to ensure that the product experience is being passed in the best possible way.

Seeking optimum quality, however, should not be synonymous with wasting bandwidth. It is not necessary, for example, to upload an image of `8000px` in width, in the store it will be rendered on a screen of`600px` in width. What happens in these cases is that the image, once downloaded, is resized by the browser, and the extra resolution is then lost.

## Optimization points

In the Store Framework, there are basically two points at which images can be optimized:

- `product-image`: it is the product image that is shown on your page (pdp);
- `product-summary-image` is the product image that is displayed on shelves and search results;
- `image`: are common images, used for banners, carousels, and _infocards_

If you are responsible for taking care of registering images from a store, be sure to compress them first. This can guarantee a reduction of up to 85% of your weight, without the need to lose quality. A good alternative tool to facilitate this work is to use [Squoosh](https://squoosh.app/).

## Activity

1. On the main page, inspect any of the products on the _New arrivals_ shelf by right-clicking on the top and then clicking on 'Inspect'. It is possible to observe in the code that appears, that there is a waste of resolution, `500px` is being requested as the default value, with only`281px` being used:

   ![image](https://user-images.githubusercontent.com/18701182/93837727-ad6d4900-fc5d-11ea-818c-1f4942f091cf.png)

2. In the `/store/blocks.jsonc` file, then define the`product-image`, specifying its `width`:

   ```diff
   // /store/blocks.jsonc
   {
     ...
     "stack-layout#prodsum": {
       "children": [
         "product-summary-image",
         "product-summary-specification-badges"
       ]
     },
   + "product-summary-image": {
   +   "props": {
   +     "width": 281
   +   }
   + },
     ...
   }
   ```

   Inspecting again, we see that all the shelf images and search results are the correct size:

   <img src="https://user-images.githubusercontent.com/18701182/93838221-481a5780-fc5f-11ea-8d6f-139fac6a2592.png" height=400px></img>

3. To improve CDN _caching_ and ensure that no external images are being loaded, in the `store/blocks/search.jsonc` file, edit the existing `info-card` to update your implementation and do it using an `image`:

   ```diff
   // /store/blocks/search.jsonc
   {
     "flex-layout.row#depBanner": {
       "children": [
   -     "info-card#depbanner"
   +     "image#depbanner"
       ]
     },
   }
   ```

   > To learn more about the definition of _Content Delivery Network_ (CDN), see [this article](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) da Cloudflare.

4. Finally, define the ʻimage#depBanner`:

   ```diff
   {
     ...
   + "image#depbanner": {
   +    "props": {
   +      "src": "assets/electronics.png"
   +    }
   + },
   }
   ```

![image](https://user-images.githubusercontent.com/18701182/93905955-f52db800-fcd1-11ea-9129-065bea80145b.png)

5. We use the `electronics.png` example that was already available in the repository, but any image can be added if inserted into the `/assets` folder. Try accessing a free stock photo portal (such as [Pexels](https://www.pexels.com/)), downloading an image, and compressing it on [Squoosh](https://squoosh.app/). Download the image, add it to the `/assets` folder, and then reference it with the name you added:

```diff
{
  ...
  "image#depbanner": {
    "props": {
-     "src": "assets/electronics.png"
+     "src": "assets/{{sua_imagem}}"
    }
  },
}
```

![image](https://user-images.githubusercontent.com/18701182/93907719-168fa380-fcd4-11ea-8b03-6d864d4aeadd.png)

> Example of 60% reduction in compression with Squoosh
