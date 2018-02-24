# VS Code ES6/ES7 React and Redux Snippets

This extension provide you Javascript and React/Redux snippets in ES7 with babel plugins features for [VS Code](https://code.visualstudio.com/)

## Supported languages (file extensions)

* JavaScript (.js)
* JavaScript React (.jsx)

## Supported syntaxes

* javascript
* typescript
* javascriptreact
* typescriptreact
* jsx

# Snippets List

#### Import

|        Prefix | Method                                                            |
| ------------: | ----------------------------------------------------------------- |
|        `imr→` | `import React from 'react';`                                      |
|       `imrc→` | `import React, { Component } from 'react';`                       |
|       `imrd→` | `import { render } from 'react-dom';`                             |
|       `impt→` | `import PropTypes from 'prop-types';`                             |
|        `imc→` | `import ${1:componentName} from 'components/${1:componentName}';` |
|  `imconnect→` | `import { connect } from 'react-redux';`                          |
| `improvider→` | `import { Provider } from 'react-redux';`                         |
|       `imrr→` | `import { BrowserRouter, Route } from 'react-router-dom';`        |
|       `imnl→` | `import { NavLink } from 'react-router-dom';`                     |
|       `imwr→` | `import { withRouter } from 'react-router-dom';`                  |

#### React

|   Prefix | Method                                   |
| -------: | ---------------------------------------- |
|    `rc→` | `React class component`                  |
|   `rcc→` | `React class component with constructor` |
|   `rcr→` | `React class component with redux`       |
|   `rcf→` | `React functional component`             |
|  `rcfr→` | `React functional component with Redux`  |
|  `rhoc→` | `React Higher-Order component`           |
| `rhocf→` | `React Higher-Order funtional component` |

### PropTypes

|  Prefix | Method                        |
| ------: | ----------------------------- |
|  `rpn→` | `Proptypes number`            |
| `rpnr→` | `Required Proptypes number`   |
|  `rpo→` | `Proptypes object`            |
| `rpor→` | `Required PropTypes object`   |
|  `rpa→` | `PropTypes array`             |
| `rpar→` | `Required PropTypes array`    |
|  `rpb→` | `PropTypes boolean`           |
| `rpbr→` | `Required PropTypes boolean`  |
|  `rpe→` | `PropTypes element`           |
| `rper→` | `Required PropTypes element`  |
|  `rpf→` | `PropTypes function`          |
| `rpfr→` | `Required PropTypes function` |
|  `rps→` | `PropTypes shape`             |
| `rpsr→` | `Required PropTypes shape`    |

### Redux

|      Prefix | Method                                                 |
| ----------: | ------------------------------------------------------ |
|  `reducer→` | `Redux reducer template`                               |
|    `rxmap→` | `Redux mapStateToProps & mapDispatchToProps templates` |
| `rxaction→` | `Redux action template`                                |
