<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">option A</mt-tab-item>
      <mt-tab-item id="2">option B</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell>2222</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell>333333</mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {}
};
</script>
<style scoped>
    body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: .28em;
    line-height: 1;
    color: #333;
    background-color: #f8f8f8;
}
</style>