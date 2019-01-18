import NamedSheetModel from './NamedSheetModel';
import AnimationConfigModel from './AnimationConfigModel';
import ObjectHelper from '../utils/ObjectHelper';

export default class MultiDirAnimation {
    static fromJSON(jsonData) {
        let instance = new MultiDirAnimation();
        if(jsonData.DOCTYPE === "MULTI_DIR_ANIMATION") {
            let namedSheetModel = new NamedSheetModel();
            namedSheetModel.load(jsonData.namedSheets);
            
            let animConfig = ObjectHelper.flatten(jsonData); 

            let animConfigModel = new AnimationConfigModel();
            animConfigModel.load(animConfig);

            
        }
        return instance;
    }

    constructor(namedSheets, animConfig) {
        this.namedSheets = namedSheets;
        this.animConfig = animConfig;
    }


};


