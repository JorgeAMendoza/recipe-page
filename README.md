# My React + TypeScript + Vite Template

<div align="center"><img src="./showcase.gif" width=700 alt="image of desktop preview of the recipe list"></div>

Design, assets, and requirements provided by [Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm).

The goal of this challenge is to create an accessible, semantic, and responsive recipe list page. Though the page could be constructed using nothing but `div`, taking the time to research properly implement semantic HTML will lead to the following.

- Improved web crawling
- Better accessibility
- Better SEO

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development](#development)
- [Conclusion](#conclusion)

## Technologies Used

This application was bootstrapped with [Vite](https://vitejs.dev/guide/), specifically, using the [custom development configuration I created](https://github.com/JorgeAMendoza/vite-react). This project is linted and formatted with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). Please see the `eslintrc.cjs` and `.prettierrc` for the rules implemented. Since the page is relatively simple, I decided to not create a CI/CD pipeline.

Some of the tools used in this web app include:

- [React](https://reactjs.org/), library/framework for building user interfaces.
- [Typescript](https://www.typescriptlang.org/), a superset of Javascript that adds static typing.
- [CSS Modules](https://github.com/css-modules/css-modules)

No other major libraries were used, I wanted to keep this as simple as possible (though I know even using React is a bit overkill, but I wanted to also start using the tempalte I created).

## Installation

Please follow the instructions below to install and run the application locally:

1. Clone the repository to your machine with the command `git clone https://github.com/JorgeAMendoza/recipe-page`.
2. `cd` into the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm run dev` to start the development server.
5. Open `localhost:3000` in your browser to view the application.

To run intergration test, either run `npm run cypress:open` to open the Cypress UI, or `npm run cypress:run` to run the tests in the terminal. Unit test can be run with `npm test`.

## Development

There isn't much to say about the development, the last project I worked on had me focus on my React skills, so I wanted to use this challenge to refresh some of my CSS skills with CSS modules. This challenge also allowed me to review semantic HTML, accessibility, and learn more about using the chrome dev tools to debug accessibility issues.

## Conclusion

From this type of project, there isn't much to take away. Though, it was nice to get a review on some CSS techniques, accessibility tools, and semantic HTML.
