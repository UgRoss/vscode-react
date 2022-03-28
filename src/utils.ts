import { readFile, readdir, writeFile, mkdir } from 'fs'
import rimraf from 'rimraf'
import { join } from 'path'
import { promisify } from 'util'
import { JSON_FILE_REGEX } from './constants'

/** Promisify `fs` methods */
export const readFileAsync = (filePath: string): any => promisify(readFile)(filePath, 'utf8')
export const readdirAsync = (dirPath: string): any => promisify(readdir)(dirPath, 'utf8')
export const rimrafAsync = (folderPath: string): any => promisify(rimraf)(folderPath)
export const mkdirAsync = (folderPath: string): any => promisify(mkdir)(folderPath)
export const writeFileAsync = (filePath: string, data: string): any =>
  promisify(writeFile)(filePath, data, { encoding: 'utf8' })

/**
 * Get list if files paths based on directory
 * @param {string} dirPath - path to directory
 *
 * @returns list of files paths inside directory
 */
export const getAllFilesInDir = async (dirPath: string): Promise<string[]> => {
  const files = await readdirAsync(dirPath)
  return files.map((f: string) => join(dirPath, f))
}

/**
 * Get files content based on paths
 * @param {string[]} filesPaths - list of paths to files
 *
 * @returns list of content of each file
 */
export const getFilesContent = async (filesPaths: string[]): Promise<string[]> => {
  return await Promise.all(
    filesPaths.map(async (filePath) => {
      const fileContent = await readFileAsync(filePath)
      return fileContent.toString()
    })
  )
}

/**
 * Get all snippets in object format collected from files in one folder
 * @param {string} folderPath - folder that contains snippets
 *
 *  @returns object with all snippets
 */
export const getSnippetsFromFolder = async (folderPath: string): Promise<{}> => {
  const filesPaths = await getAllFilesInDir(folderPath)
  const jsonFiles = filesPaths.filter((filePath) => JSON_FILE_REGEX.test(filePath))

  const snippetsContent = await getFilesContent(jsonFiles)

  const snippetsObj = snippetsContent.reduce(
    (acc, snippetContent) => ({ ...acc, ...JSON.parse(snippetContent) }),
    {}
  )
  return snippetsObj
}
