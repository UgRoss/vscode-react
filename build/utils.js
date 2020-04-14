"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const util_1 = require("util");
exports.readFileAsync = (fileName) => util_1.promisify(fs_1.readFile)(fileName, 'utf8');
exports.readdirAsync = (dirName) => util_1.promisify(fs_1.readdir)(dirName, 'utf8');
exports.writeFileAsync = (fileName, data) => util_1.promisify(fs_1.writeFile)(fileName, data, { encoding: 'utf8' });
exports.getAllFilesInDir = (dirPath) => __awaiter(void 0, void 0, void 0, function* () {
    const files = yield exports.readdirAsync(dirPath);
    return files.map((f) => path_1.join(dirPath, f));
});
exports.getFilesContent = (filesPaths) => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all(filesPaths.map((filePath) => __awaiter(void 0, void 0, void 0, function* () {
        const fileContent = yield exports.readFileAsync(filePath);
        return fileContent.toString();
    })));
});
exports.getSnippetsFromFolder = (folderPath) => __awaiter(void 0, void 0, void 0, function* () {
    const filesPaths = yield exports.getAllFilesInDir(folderPath);
    const filesContent = yield exports.getFilesContent(filesPaths);
    const snippetsObj = filesContent.reduce((acc, fileContent) => (Object.assign(Object.assign({}, acc), JSON.parse(fileContent))), {});
    return snippetsObj;
});
