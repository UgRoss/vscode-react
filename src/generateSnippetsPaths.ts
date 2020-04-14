import { writeFile } from 'fs';
import { spawn } from 'child_process';
import { getSnippetsFromFolder, writeFileAsync } from './utils';

import {
  ROOT_DIR,
  GENERAL_SNIPPETS_DIR,
  JS_SNIPPETS_DIR,
  TS_SNIPPETS_DIR,
  ALL_REACT_LANGUAGES,
  JS_REACT_LANGUAGES,
  TS_REACT_LANGUAGES,
} from './constants';

const init = async () => {
  const generalSnippets = await getSnippetsFromFolder(GENERAL_SNIPPETS_DIR);
  const jsSnippets = await getSnippetsFromFolder(JS_SNIPPETS_DIR);
  const tsSnippets = await getSnippetsFromFolder(TS_SNIPPETS_DIR);

  writeFileAsync(
    ROOT_DIR + '/build/javascript.json',
    JSON.stringify({ ...generalSnippets, ...jsSnippets })
  );

  writeFileAsync(
    ROOT_DIR + '/build/typescript.json',
    JSON.stringify({ ...generalSnippets, ...tsSnippets })
  );
};

init();
