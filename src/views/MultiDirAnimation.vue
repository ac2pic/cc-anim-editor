<template>
    <div>
        <div class="tabs is-centered">
            <ul v-on:click="changeActive()">
                <li ref="named" class="is-active"><a v-on:click="setIndex(0)">NamedSheets</a></li>
                <li ref="config"><a v-on:click="setIndex(1)">Configuration</a></li>
            </ul>
        </div> 
        <div v-if="index === 0">
            <NamedSheet v-for="(sheet, name) in theNamedSheets" :key="name" :value="sheet"
                :name="name"
                @update:name ="onNameChange"
                

                :activeSheetName="activeSheetName"

                :src.sync="sheet.src"

                :offX.sync="sheet.offX"

                :offY.sync="sheet.offY"
                :width.sync="sheet.width"
                :height.sync="sheet.height"

                :xCount.sync="sheet.xCount"

                @selected="onSelectNamedSheet"
            />
            <div class="card no-select has-background-grey-light">
                <header class="card-header-title">
                    <a v-on:click="addNamedSheet">+</a>
                </header>
            </div>
        </div>

        <div v-if="index === 1">
            <AnimationConfig v-for="(config, index) in theAnimationConfig" :key="index" :value="config"
                :name="config.name"
                :time="config.time"
                :sheetList="theNamedSheets"
            />
        </div>
    </div>
</template>

<script>
import NamedSheet from './NamedSheet.vue';
import AnimationConfig from './AnimationConfig.vue';;
export default {
    name : 'MultiDirAnimation',
    props : ['namedSheets'],
    components : {
        NamedSheet,
        AnimationConfig
    },
    data() {
        return {
            index : 0,
            activeSheetName : "",
            theNamedSheets: this.namedSheets,
            theAnimationConfig : [{
                name : "walk",
                time : 0.25
            }]
        };
    },
    methods : {
        onSelectNamedSheet(name) {
            if(this.activeSheetName === name) {
                this.activeSheetName = "";
            } else {
                this.activeSheetName = name;
            }
        },
        addNamedSheet() {
            let index = 0;
            const baseName = "Untitled";
            let newName = baseName;
            let keys = Object.keys(this.theNamedSheets);
            while(keys.indexOf(newName) >= 0) {
                index++;
                            
                newName = baseName + (index ? index : "");
            }
            this.$set(this.theNamedSheets, newName, {});

        },
        changeActive() {

                if(this.index === 0) {
                    this.$refs.named.className = "is-active"
                    this.$refs.config.className = ""                    
                } else {
                    this.$refs.named.className = ""
                    this.$refs.config.className = "is-active"                       
                }
        },
        setIndex(index){
            this.index = index;
        },
        onNameChange(newName, oldName) {
            this.$set(this.theNamedSheets, newName, this.theNamedSheets[oldName]);
            this.$delete(this.theNamedSheets, oldName);
        }
    }
}

</script>