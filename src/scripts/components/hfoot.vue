<template>
    <footer>
        <div v-for="(foot,i) in hfoot" :key="i">
            <router-link  :to="{name:foot.name}">
                <i class="iconfont" v-html="foot.icon"></i>
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
    </footer>
</template>

<script>
import {mapState} from "vuex";
export default {
	computed:{
		...mapState([
			"hfoot"
		])
	}
}
</script>

<style scoped lang="less">
footer{
	position: absolute;
	bottom: 0;
	width:100%;
	height:140px;
	background:#fff;
	display:flex;
    align-items: center;
    justify-content: space-around;
    z-index:100;
    border-top:1px solid #d7d7d7;
	div{
		height:140px;
		display: flex;
		flex-direction: column;
    	align-items: center;
		a{
			display: block;
			width:100%;
			height:100%;
			display:flex;
			flex-direction:column;
			box-sizing:border-box;
			padding:6px 0;
			text-align:center;
			font-family:"微软雅黑";
			color:#999;
			i{
				margin-top: 20px;
				margin-bottom: 10px;
				width:100%;
				height:45px;
				line-height:45px;
				font-size:52px !important;
			}
			span{
				width:100%;
				height:35px;
				line-height:35px;
				font-size:26px;
			}
		}
		.router-link-active{
			color:#00abeb;
		    border-color:#00abeb;
		}
		.ft-active-1{
			color:#00abeb;
			border-color:#00abeb;
		}
	}
}
</style>