<template>
  <div>
    <multi-dir-animation 
    :named-sheets.sync="namedSheets"
    />
  </div>
</template>

<script>


import MultiDirAnimation from './views/MultiDirAnimation.vue';
export default {
  components : {
    MultiDirAnimation
  },
  data()  {
    return {
      namedSheets : {
        walk : {
          src : "hi",
          offX : 0,
          offY : 0,
          width : 32,
          height : 32,
          xCount : 5 
        }
      }
    };
  }
}
</script>

<style>
</style>
