# The Movie DB - Create React App

## Movie App URL

### [https://the-movie-db-jasmo2.herokuapp.com/](https://the-movie-db-jasmo2.herokuapp.com/)

On the branch [virtualize-list](https://github.com/jasmo2/themoviedb/tree/virtualize-list) you can find the implementation with Virtual list for popular Movies section.

Virtualize List deploy version: [the-movie-db-jasmo2-vitualize.herokuapp.com](https://the-movie-db-jasmo2-vitualize.herokuapp.com/)

##### Requirements, Markdown

[REQUIREMENTS](./requirements.md)

Using 3v version **api.themoviedb**.

Redux, is use here to handle async aoi call and sync app-state. Due to, its optimisations is better than set it on a Context.

## Start the project

- Go to [themoviesdb.com](themoviesdb.com) and create an account. Go to Settings and API and create and key

- create a `.env` file in the project and set the APIKey as well as others keys:

```
REACT_APP_API_KEY="the movies db apikey"
NODE_ENV=development
SKIP_PREFLIGHT_CHECK=true
```

- `yarn install` to install all dependencies.

- `yarn start` to run the project.
