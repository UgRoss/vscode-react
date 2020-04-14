const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '../');

const ALL_JS_REACT_LANGUAGES = ['javascript', 'javascriptreact'];
const ALL_TS_REACT_LANGUAGES = ['typescript', 'typescriptreact'];
const ALL_JS_AND_TS_REACT_LANGUAGES = ALL_JS_REACT_LANGUAGES.concat(ALL_TS_REACT_LANGUAGES);

const snippets = [
  // General
  { languages: ALL_JS_AND_TS_REACT_LANGUAGES, path: './snippets/general/imports.json' },
  // { languages: ALL_JS_AND_TS_REACT_LANGUAGES, path: './snippets/general/propTypes.json' },
  { languages: ALL_JS_AND_TS_REACT_LANGUAGES, path: './snippets/general/tests.json' },
  // JS
  { languages: ALL_JS_REACT_LANGUAGES, path: './snippets/javascript/hooks.json' },
  // { languages: ALL_JS_REACT_LANGUAGES, path: './snippets/javascript/react.json' },
  // { languages: ALL_JS_REACT_LANGUAGES, path: './snippets/javascript/redux-react.json' },
  // Typescript
  { languages: ALL_TS_REACT_LANGUAGES, path: './snippets/typescript/hooks.json' },
  // { languages: ALL_TS_REACT_LANGUAGES, path: './snippets/typescript/react.json' },
  // { languages: ALL_TS_REACT_LANGUAGES, path: './snippets/typescript/redux-react.json' },
];

const snippetsConfig = [];
snippets.forEach(({ languages, path }) => {
  languages.forEach(language => {
    snippetsConfig.push({
      language,
      path,
    });
  });
});

const packageRaw = fs.readFileSync(ROOT_DIR + '/package.json');
const package = JSON.parse(packageRaw);
package.contributes.snippets = snippetsConfig;

fs.writeFileSync(ROOT_DIR + '/package.json', JSON.stringify(package));
spawn('prettier', ['package.json', '--write']);
