<template>
<div>
  <header class="headers">
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
.headers{
  width:100%;
  height:50px;
  background:#e54847;
  border-bottom:1px solid #f00;
  position:fixed;
  top:0px;
  left:0px;
}
.headers h1{
  font-size:18px;
  text-align: center;
  line-height:50px;
  margin-top:0px;
  color:#fff;
  }

</style>

