<template>
  <div>
    <multi-dir-animation 
    :named-sheets.sync="namedSheets"
    />
  </div>
</template>

<script>


import MultiDirAnimation from './views/MultiDirAnimation.vue';

import MultiDirAnimationModel from './model/MultiDirAnimation';

export default {
  components : {
    MultiDirAnimation
  },
  created() {
    this.instance = new MultiDirAnimationModel();
  },
  data()  {
    return {
      instance : null,   
    };
  }
}
</script>

<style>
</style>
