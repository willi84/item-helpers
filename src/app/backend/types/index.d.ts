type DateString = `${number}-${number}-${number}`; 
export type ITEM = {
    "name": String,
    "desc": String,
    "url": String, // TODO: url
    "tags": Array<string>,
    "maintainers":  Array<string>,
    "addedAt": DateString
};
export type ITEMS = {
    [key: string]: ITEM;
};