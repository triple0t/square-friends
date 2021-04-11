# Square Friends App

Created for the Square Friends App Challenge

Locate App here:s [https://triple0t.github.io/square-friends/](https://triple0t.github.io/square-friends)



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

```
npm install
npm run
```

## Project Structure

App is in `src`
This contains the whole Application files

`Translation`

You can locate the Translation files here: `*src/locals*`

We currently have support for only **English** and **French**
More can be added by Coping the keys from any of `en.json` or `fr.json` and updating the Array on `*src/components/language-selector.tsx*`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

## Libraries used in this project

- TypeScript for types
- Tailwind CSS for UI styling
- ESLint & Prettier for code formatting and linting
- Craco for customizing Create React App
- Jest for testing
- Axios for networking
- Heroicons for icons
