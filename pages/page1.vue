<template>
    <div>
      <Component2 />
      <Component1 />
      <Component3 />
      <div class="div1">
      </div>
      <Component6 />
      <div class="div2">

      </div>
      <Component9 />
    </div>
  </template>
  
  <script lang="ts">
  import Component2 from "@/components/component2.vue";
  import Component1 from "@/components/component1.vue";
  import Component3 from "@/components/component3.vue";
  import Component6 from "@/components/component6.vue";
  import Component9 from "@/components/component9.vue";
  
  export default {
  
    components: {
      Component2,
      Component1,
      Component3,
      Component6,
      Component9,
    },
  };
  </script>
  
  <style>

.div1 {
  height: 100px;
  position: relative;
  margin-top: 800px;
}

.div2 {
  height: 100px;
  position: relative;
  margin-top: 1000px;
}


</style>