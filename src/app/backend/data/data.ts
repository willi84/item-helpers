import { ITEM } from './../types/index.d';
import { DATA_PATH } from './../config';
import { getFileList, readFile } from './../fs/fs';

const slugify = require('slugify');

const toSlug = name => slugify(name).toLocaleLowerCase();
export const getProjects = (category: string) => {
    const folder =`${DATA_PATH}/${category}`;
    // console.log(folder);
    const files = getFileList(folder).filter(file => file.indexOf('.json') !== -1);
    const projects = {};
    files.forEach((file:string) => {
        const data = readFile(`${DATA_PATH}/${category}/${file}`);
        // TODO: try/catch und parse Array
        // TODO: sanity
        const project: ITEM = JSON.parse(data);
        const name = file.replace('.json', ''); // TODO: common name syntax by function
        project['slug'] = toSlug(name);
        projects[name] = project;
    });
    // console.log(projects);
    return projects;
}