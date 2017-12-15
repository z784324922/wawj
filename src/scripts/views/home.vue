<template>
   <section class="section">
        <div class="home">
            <div class="home-box">
                <div class="home-search">
                    <div class="home-search-left">
                        <i class="iconfont icon-sousuo3 cb5b5"></i>
                    </div>
                    <div class="home-search-right">
                        <input type="text" placeholder="请输入您要找的房源">
                    </div>
                </div>
                <div class="home-top">
                        <div class="swiper-container" id="main-swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(ba,i) in banner" :key="i">
                                    <img :src="'http://image.5i5j.com/picture/slpic/l/'+ba.imgurl+'.jpg'" alt="">
                                </div>
                                <!-- <div class="swiper-slide">slider1</div>
                                <div class="swiper-slide">slider2</div>
                                <div class="swiper-slide">slider3</div> -->
                            </div>
                        </div>
                </div>
                <div class="home-div">
                    <ul>
                        <li v-for="(ico,i) in homeico" :key="i">
                            <router-link  :to="{name:ico.name}">
                                <div class="ibox">
                                    <i class="iconfont"  v-html="ico.icon"></i>
                                </div>
                            </router-link>
                            <p>{{ico.txt}}</p>
                        </li>
                    </ul>
                </div>
                <div class="h30"></div>
                <div class="home-main">
                    <div class="box160">
                        <div class="left">
                            <p><i class="iconfont icon-99 cb5b5"></i>房价数据</p>
                        </div>
                        <div class="right">
                            <p><i class="iconfont icon-jisuanqi cb5b5"></i>计算器</p>
                        </div>
                    </div>
                    <div class="box110">
                        <div class="left">
                            <i class="iconfont icon-rocket bbc"></i>
                        </div>
                        <div class="center">
                            成都
                        </div>
                        <div class="right">
                            二手房市场详情
                        </div>
                    </div>
                    <div class="box280">
                        <div class="left">
                            <p>最新成交均价<span class="c9393">(元/m<sup>2</sup>)</span></p>
                            <p class="p2"><span class="span1">8937</span></p>
                            
                        </div>
                        <div class="right">
                            <p>月成交量<span class="c9393">(套)</span></p>
                            <p class="p2"><span class="span2">1</span></p>
                        </div>
                    </div>
                    <!-- <div class="serviceImg">
                        <img :src="serviceimg">
                    </div> -->
                </div>
            </div>
       </div>
   </section>
</template>

<script>
import "../utils/swiper-3.3.1.min.js";
import { Indicator } from 'mint-ui';
import axios from "axios";
import {mapState,mapActions} from "vuex";
export default {
    computed:{
		...mapState([
            "banner",
            "homeico",
            "serviceimg"
		])
	},
    methods:{
        ...mapActions([
            "getBanner",
        ]),
        change(idx){
            this.show = (idx==0)?true:false;
            this.changeNavIdx(idx); //store.dispatch.changeNavIdx
        },
        changeIndex(idx){
            this.swiperIndex = idx;
            this.mySwiper.slideTo(idx);

        },
        handleChange(index){
            this.swiperIndex = index;
        },
        loadMore(){
            // ajax.....
            this.loading = true;
        }
    },
    mounted(){
        var that = this;
        this.$nextTick(()=>{
            setTimeout(function(){
                this.mySwiper = new Swiper(".swiper-container",{
                    autoplay: 2000,
                    speed:500,
                    resistanceRatio : 0,
                    loop:true
                });
            },1000)    
        })
        
        this.getBanner("/banner");
    }
 
}
</script>

<style>

</style>
