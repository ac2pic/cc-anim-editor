<template>
    <div class="container">

        <div>
            <NamedSheet v-for="(sheet, name) in theNamedSheets" :key="name" :value="sheet"
                v-bind:name="name"
                @update:name ="onNameChange"
                
                :src.sync="sheet.src"

                :offX.sync="sheet.offX"

                :offY.sync="sheet.offY"
                :width.sync="sheet.width"
                :height.sync="sheet.height"

                :xCount.sync="sheet.xCount"
            />
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
import NamedSheet from './NamedSheet.vue';
export default {
    name : 'MultiDirAnimation',
    props : ['namedSheets'],
    components : {
        NamedSheet
    },
    data() {
        return {
            theNamedSheets: this.namedSheets
        };
    },
    methods : {
        onNameChange(newName, oldName) {
            this.$set(this.theNamedSheets, newName, this.theNamedSheets[oldName]);
            this.$delete(this.theNamedSheets, oldName);
        }
    }
}

</script>