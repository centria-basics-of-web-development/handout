const fs = require('fs');
const wwwRoot = 'www';
const dataRoot = 'data';

let uiController = {
    get: async (fileName, resolve, reject) => {
        // Return HTML
        const filePath = `${wwwRoot}/${fileName}`;
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }
}

let dataController = {
    getData: function(resolve, reject) {
        const filePath = `${dataRoot}/data.json`;
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }
}

module.exports = {
    uiController,
    dataController
};