# GraphQL: Using GraphiQL

## Introduction

Now, with the query and resolver implemented, we need to use it to retrieve the _top n_ most viewed products. By using the **GraphQL IDE**, we can test the query we implemented before.

## GraphiQL

[GraphiQL](https://github.com/graphql/graphiql) is a graphical interactive in-browser GraphQL IDE. Before using the query in the app, it is interesting to test its functionality. To do so, we will reproduce your query usage in the GraphQL IDE.

Exploring the IDE interface, there are three main areas: the coding area, the query variables area and the debug area. Check where each shows up in the interface in the image below.

![image](https://user-images.githubusercontent.com/43679629/83764107-e900ea80-a64f-11ea-969f-116ea896fe2d.png)

## Activity

1. Open the GraphiQL route and type the code below in the coding area:

   ```
   query ($topN: Int) {
     productList(topN: $topN){
       slug
       count
     }
   }
   ```

2. The query that we just declared uses a variable (_topN_). Now we need to declare it in the _Query Variables_ area:

   ```
   {
     "topN": 2
   }
   ```

   > :exclamation: The _Query Variables_ area is below the coding area, to amplify it's area just drag by the title.

3. At last, just click on the _play_ button and check the outcome on the debug area. The query results should look like this:

   ![image](https://user-images.githubusercontent.com/43679629/83763622-4c3e4d00-a64f-11ea-9615-435811d411c6.png)
