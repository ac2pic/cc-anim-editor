class NamedSheet {
	static fromNameSheet(namedSheets, key) {
		const tileSheet = namedSheets[key];
		const src = tileSheet.src;
		const offX = tileSheet.offX || 0;
		const offY = tileSheet.offY || 0;
		const width = tileSheet.width || 32;
		const height = tileSheet.height || 32;
		const xCount = tileSheet.xCount;
		return new NamedSheet(src,offX, offY, width, height, xCount);
		
	}
	constructor(src = "", offX = 0, offY = 0, width = 32, height = 32, xCount = undefined) {
		this.src = src;
		this.offX = offX;
		this.offY = offY;
		this.width = width;
		this.height = height;
		this.xCount = xCount;
	}
	export() {
		let output = {
            src : this.src,
            offX : this.offX,
            offY : this.offY,
            width : this.width,
            height : this.height
		};
		if(this.xCount) {
			output.xCount = this.xCount;
		}
		return output;
	}
}

module.exports = NamedSheet;