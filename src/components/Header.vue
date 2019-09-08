<template>
	<div id="header">
		<!-- <div class="back" v-show="showLeft" @click="backClick"> 返回</div> -->
		<slot name='leftView'><div class="back"></div></slot>
		<slot name='titleView'><div class="title">{{titleText}}</div></slot>
		<slot name='rightView'><div class="right"></div></slot>
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: '',
  props: {
    showLeft: Number,
    titleText: String,
    rightText: String
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style scoped="scoped">
	#header{
		display: flex;
		background: linear-gradient(to right, #6F50F5,#C26DFE);
		height: 1.08rem;
		width: 100%;
		color: white;
	}
	.back{
		width: 1.86666rem;
		height: 100%;
		text-align: center;
		line-height: 1.08rem;
		font-size: 0.33333rem;
	}
	.backImage{
		margin-left: -0.93333rem;
		margin-top: 0.346666rem;
		width: 0.18666rem;
		height: 0.373333rem;
	}
	.title{
		width: 6.26666rem;
		height: 100%;
		text-align: center;
		font-size: 0.4rem;
		line-height: 1.08rem;
	}
  .right{
    width: 1.73333rem;
    height: 100%;
    text-align: center;
    padding-right: 0.16rem;
    font-size: 0.4rem;
		line-height: 1.08rem;
		color: white
  }

</style>
