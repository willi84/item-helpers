import * as fs from 'fs'

export const readFile = (path: string) => {
    return fs.readFileSync(path).toString();
}
export const writeFile = (path: string, data: any) => {
    return fs.writeFileSync(path, JSON.stringify(data), {encoding:'utf8',flag:'w'});
}
// TODO: recursive
export const getFileList = (path: string) => {
    return fs.readdirSync(path);
}