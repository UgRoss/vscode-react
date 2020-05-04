import { getSnippetsFromFolder, writeFileAsync, rimrafAsync, mkdirAsync } from './utils';
import { GENERAL_SNIPPETS_DIR, JS_SNIPPETS_DIR, TS_SNIPPETS_DIR, OUTPUT_DIR } from './constants';

const init = async () => {
  await rimrafAsync(OUTPUT_DIR);
  await mkdirAsync(OUTPUT_DIR);

  const generalSnippetsObj = await getSnippetsFromFolder(GENERAL_SNIPPETS_DIR);
  const jsSnippetsObj = await getSnippetsFromFolder(JS_SNIPPETS_DIR);
  const tsSnippetsObj = await getSnippetsFromFolder(TS_SNIPPETS_DIR);

  writeFileAsync(
    OUTPUT_DIR + '/javascript.json',
    JSON.stringify({ ...generalSnippetsObj, ...jsSnippetsObj })
  );

  writeFileAsync(
    OUTPUT_DIR + '/typescript.json',
    JSON.stringify({ ...generalSnippetsObj, ...tsSnippetsObj })
  );
};

init();
