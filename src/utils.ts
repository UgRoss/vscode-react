import { readFile, readdir, writeFile, write } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

export const readFileAsync = (fileName: string) => promisify(readFile)(fileName, 'utf8');
export const readdirAsync = (dirName: string) => promisify(readdir)(dirName, 'utf8');
export const writeFileAsync = (fileName: string, data: string) =>
  promisify(writeFile)(fileName, data, { encoding: 'utf8' });

export const getAllFilesInDir = async (dirPath: string): Promise<string[]> => {
  const files = await readdirAsync(dirPath);
  return files.map((f: string) => join(dirPath, f));
};

export const getFilesContent = async (filesPaths: string[]): Promise<string[]> => {
  return Promise.all(
    filesPaths.map(async filePath => {
      const fileContent = await readFileAsync(filePath);
      return fileContent.toString();
    })
  );
};

export const getSnippetsFromFolder = async (folderPath: string) => {
  const filesPaths = await getAllFilesInDir(folderPath);
  const filesContent = await getFilesContent(filesPaths);
  const snippetsObj = filesContent.reduce(
    (acc, fileContent) => ({ ...acc, ...JSON.parse(fileContent) }),
    {}
  );
  return snippetsObj;
};
