import { writeFile } from './../fs/fs';
import { LOG } from './../../_shared/log/log';
import { getProjects } from './../data/data';
import { DATA_PATH } from './../config';

export const main = () => {
    const category = 'test';
    const folder =`${DATA_PATH}`; ///${category}`;
    const msg: string = 'success';
    const projects = getProjects(category);
    // TODO: when files or path is empty
    const data = {};
    data[category] = [];
    const keys = Object.keys(projects);
    keys.forEach(key => {
        const item = projects[key];
        data[category].push(item);
    });
    writeFile(`${folder}/data.json`, data);
    return msg;

}