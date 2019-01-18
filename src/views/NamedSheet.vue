<template>
    <div class="card no-select has-background-grey-light">
        <header class="card-header">
            <div>
                <a v-on:click="onSelect" @contextmenu="function() {}" class="card-header-title">
                {{ name }}
                </a>
            </div>
            <div hidden>
                <input v-model="sheet.name" @keyup.enter="function() {}" class="input is-primary" />
            </div>
        </header>
        <div class="card-content" v-if="activeSheetName === name">
            <div class="field">
                <div class="control">
                    <input v-model="sheet.src" class="input is-primary" type="text" placeholder="src" />
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <input v-model.number="sheet.offX" class="input is-primary" min="0" type="number" placeholder="offX" />
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input v-model.number="sheet.offY" class="input is-primary" min="0" type="number" placeholder="offY" />
                </div>
            </div>						
            <div class="field">
                <div class="control">
                    <input v-model.number="sheet.width" class="input is-primary" min="0" type="number" placeholder="width" />
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input v-model.number="sheet.height" class="input is-primary" min="0" type="number" placeholder="height" />
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input v-model.number="sheet.xCount" class="input is-primary" min="0" type="number" placeholder="xCount" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const fieldUpdate = name => {
        return function(newVal) {
            this.$emit(`update:${name}`, newVal);
        }
    }
    module.exports = {
        props : ["activeSheetName", "name", "src", "offX", "offY", "width", "height", "xCount"],
        data() {
            return {
                sheet : {
                    index : this.index,
                    name : this.name,
                    src : this.src,
                    offX : this.offX,
                    offY : this.offY,
                    width : this.width,
                    height : this.height,
                    xCount : this.xCount
                }
                
            };
        },
        methods : {
            onSelect() {
                this.$emit('selected', this.name);
            }
        },
        watch : {
            "sheet.name" : function(newName, oldName) {
                this.$emit('update:name',newName, oldName);
            },
            "sheet.src" : fieldUpdate("src"),
            "sheet.offX" : fieldUpdate("offX"), 
            "sheet.offY" : fieldUpdate("offY"),     
            "sheet.width" : fieldUpdate("width"),
            "sheet.height" : fieldUpdate("height"),  
            "sheet.xCount" : fieldUpdate("xCount"), 
        }
    }
</script>