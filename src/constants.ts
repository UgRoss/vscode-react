import path from 'path';

export const ROOT_DIR = path.resolve(__dirname, '../');
export const GENERAL_SNIPPETS_DIR = path.resolve(ROOT_DIR, './snippets/general');
export const JS_SNIPPETS_DIR = path.resolve(ROOT_DIR, './snippets/javascript');
export const TS_SNIPPETS_DIR = path.resolve(ROOT_DIR, './snippets/typescript');
export const OUTPUT_DIR = path.resolve(ROOT_DIR, './build/snippets');

export const JS_REACT_LANGUAGES = ['javascript', 'javascriptreact'];
export const TS_REACT_LANGUAGES = ['typescript', 'typescriptreact'];
export const ALL_REACT_LANGUAGES = [...JS_REACT_LANGUAGES, ...TS_REACT_LANGUAGES];

export const JSON_FILE_REGEX = /\.json$/;
