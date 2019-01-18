<template>
   <div>
      <div v-if="config.name">
            {{ config.name }}
      </div>
      
      <div v-if="config.time">
         <input v-model.number="config.time" type="number" min="0.001" step="0.001" />   
      </div>
      
      <div v-if="config.repeat !== undefined">
         <input v-model="config.repeat" type="checkbox" /> 
      </div>


      <div>
         <label for="mySelectedSheet">sheet:</label>
         <input list="sheets" id="mySheet" name="mySelectedSheet" />
         <datalist id="sheets">
            <option v-for="(sheet, name) in sheetList" :key="name" :value="name">{{ sheet.src }}</option>
         </datalist>
      </div>

      <div>
         <input type="number" v-model.number="config.dirs" step="1" min="1" max="8" />
      </div>

      <div>
          <input type="number" v-model.number="config.offset.x" step="1"/>
          <input type="number" v-model.number="config.offset.y" step="1"/>
          <input type="number" v-model.number="config.offset.z" step="1"/>
      </div>

   </div>
</template>

<script>
 module.exports = {
    props : [
       "name",
       "time",
       "repeat",
       "frames",
       "flipX",
       "tileOffsets",
       "sheet",
       "dirs",
       "offset",
       "sheetList"
      ],
    data() {
         return {
            config : {
               name : this.name,
               time : this.time,
               repeat : this.repeat || true,
               // Keep internally
               frames : this.frames,
               flipX : this.flipX,
               // I'll just internally keep the offsets
               tileOffsets : this.tileOffsets,
               sheet : this.sheet,
               dirs : this.dirs,
               offset: {
                  x : (this.offset || {x : 0}).x,
                  y : (this.offset || {y : 0}).y,
                  z : (this.offset || {z : 0}).z
               }
            }
         };
    }
 };
</script>