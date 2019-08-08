<template>
<div>
  <header class="header">
    <h1>{{title}}</h1>
  </header>
  </div>
</template>
<script>
export default {
    props:{
      title:{
        type:String,
        default:"猫眼影院"
      }
    }
}
</script>

<style scoped>
.header{
  width:100%;
  height:50px;
  background:#ddd;
  border-bottom:1px solid #f00;
  position:fixed;
  top:0px;
  left:0px;
}
.header h1{
  font-size:18px;
  text-align: center;
  line-height:50px;
  margin-top:0px
  }

</style>

