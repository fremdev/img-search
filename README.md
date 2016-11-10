# Image Search Abstraction Layer Microservice

## Objectives
1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.

[Full description](https://www.freecodecamp.com/challenges/image-search-abstraction-layer)

[Live Demo](https://img-search-js.herokuapp.com/)

### Example Usage
* https://img-search-js.herokuapp.com/api/search/fish?offset=3
* https://img-search-js.herokuapp.com/api/latest

### Example Output: Search
```
[
  {
    url: "http://i.imgur.com/tOFALkYh.gif",
    snippet: "Who says you can't pet your fish",
    context: "https://imgur.com/tOFALkY"
  },
  {
    url: "http://i.imgur.com/9oLg394.gif",
    snippet: "This Girl Was Surprised by A pregnant Fish (Batoids) that had 12 pups",
    context: "https://imgur.com/9oLg394"
  },

  */ More objects here */
]
```
### Example Output: Latest queries
```
[
  {
    term: "fish",
    when: "2016-11-10T19:27:18.059Z"
  },
  {
    term: "London",
    when: "2016-11-10T19:26:39.560Z"
  },
  {
    term: "lion",
    when: "2016-11-10T18:36:46.503Z"
    },

    */ More objects here */
]
```
