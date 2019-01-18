const NamedSheet = require('NamedSheet');

class NamedSheetModel {
	constructor() {
		this.namedSheets = {};
	}
	load(namedSheets) {
		for(let sheetName of Object.keys(namedSheets)) {
			this.namedSheets[sheetName] = NamedSheet.fromNameSheet(namedSheets, sheetName);
		}
    }
    createUniqueName() {
        let key = "Untitled";
        let index = 1;
        let newName = key;
        while(this.namedSheets[newName]) {
            newName = key + index;
        }
        return newName;
    }
	createEmptySheet() {
        let name = this.createUniqueName();
		this.namedSheets[name] = new NamedSheet();
	}
	getNamedSheetByName(name) {
        return this.namedSheets[name];
	}
	export() {
		return {
            namedSheets : this.namedSheets
        };
	}
}


module.exports = NamedSheetModel;
