
function flatten(jsonObject, jsonObjectCopy = {}, flattenObjectsArr = []) {
    let sub = null;
    if(jsonObject.SUB) {
        sub = [].concat(jsonObject.SUB);
        delete jsonObject.SUB;
    }
    let newObj = Object.assign({}, jsonObject, jsonObjectCopy);
    
    if(!sub) {
        flattenObjectsArr.push(newObj);
    } else {
        for(let object of sub) {
            flatten(object, newObj, flattenObjectsArr);
        }
    }
}

export default class ObjectHelper {
    static flatten(jsonData) {
        let jsonCopy = JSON.parse(JSON.stringify(jsonData));
        let all = [];

        jsonCopy.DOCTYPE && (delete jsonCopy.DOCTYPE);
        jsonCopy.namedSheets && (delete jsonCopy.namedSheets);
    
        flatten(jsonCopy, {}, all);
        return all;
    }
};


