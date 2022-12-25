# ESLint

[ESLint](https://eslint.org/) is a tool that helps to identify and automatically fix problems with your JavaScript code. It can check for issues such as syntax errors, missing semicolons, and other potential problems that can affect the quality and correctness of your code.

Using ESLint can help you catch and fix issues in your code before you deploy it, which can save you time and effort in the long run. It can also help you ensure that your code adheres to a **consistent style**, which can make it easier for other developers to read and understand.

There are several reasons why enforcing code style is important:

Consistency: Code style helps to ensure that the codebase is consistent and easy to read. When everyone on a team follows the same style guide, it becomes easier for new team members to understand and work with the code, and it also makes it easier for team members to review and maintain the code.

Maintainability: Code that follows a consistent style is easier to maintain. It is easier to spot problems and make changes when the code is structured in a predictable way.

Collaboration: Code style guidelines help to establish a common language and set of conventions that can facilitate collaboration and communication within a team.

Professionalism: Adhering to a code style shows professionalism and attention to detail. It demonstrates that the team values quality and takes pride in their work.

Overall, enforcing code style helps to improve the quality, maintainability, and collaboration within a team, and it helps to establish a sense of professionalism.

## Setup

To setup the configuration file run:

```bash
npm init @eslint/config
```

Executing the aforementioned command will prompt a series of questions that will be used to create an ESLint configuration file. Since our primary focus is managing a straightforward static website comprising HTML, CSS, and JavaScript files, we will keep the configuration simple.

How would you like to use ESLint?

```txt
To check syntax, find problems, and enforce code style
```

What type of modules does your project use?

```txt
JavaScript modules (import/export)
```

Which framework does your project use?

```txt
None of these
```

Does your project use TypeScript?

```txt
No
```

Where does your code run?

```txt
Browser
```

How would you like to define a style for your project?

```txt
Use a popular style guide
```

Which style guide do you want to follow?

```txt
Airbnb: https://github.com/airbnb/javascript
```

What format do you want your config file to be in?

```txt
JavaScript
```

Your initial configuration:

```js
// .eslintrc.js
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {},
};
```

## Ignoring Files & Directories

The .eslintignore file is a configuration file used by the ESLint tool to specify which files and directories should be excluded from linting. When ESLint is run, it will skip any files or directories listed in the .eslintignore file. This can be useful if there are certain files or directories that you do not want to be checked for style or syntax errors.

For example, you might want to exclude files in the node_modules directory from linting, as these are often generated automatically and may not adhere to your project's style guidelines. You can specify this by adding the following line to your .eslintignore file:

```
node_modules/
```

You can also use wildcards to exclude multiple files or directories at once. For example, the following line would exclude all files with the .min.js extension:

```
\*.min.js
```

Overall, the .eslintignore file can be useful for excluding certain files or directories from linting, which can save time and reduce clutter when running the ESLint tool.

## Integrating with Prettier

To integrate ESLint with Prettier, you will need to do the following:

Install the necessary packages:

```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
```

Update the `.eslintrc.js` file in the root directory of your project and add the following configuration:

```js
    //...
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    //...
    rules: {
        'prettier/prettier': 'error',
    },
    //...
```

Resulting file:

```js
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
    },
};
```
