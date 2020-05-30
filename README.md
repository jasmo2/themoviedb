# The Movie DB - Create React App

##### Requirements, Markdown

[REQUIREMENTS](./requirements.md)

Using 3v version **api.themoviedb**.

The use of Redux is mainly, due to the API.

## Start the project

- Go to [themoviesdb.com](themoviesdb.com) and create an account. Go to Settings and API and create and key

- create a `.env` file in the project and set the APIKey as well as others keys:

```
REACT_APP_API_KEY="the movies db apikey"
NODE_ENV=development
NODE_PATH='./src/'
SKIP_PREFLIGHT_CHECK=true
```

- `yarn install` to install all dependencies.

- `yarn start` to run the project.
