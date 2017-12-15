<template>
    <section class="section">
        <div class="detail">
            <div class="detail-box">
                <div class="detail-top">
                    <div  @click="goback" class="rbtn"><</div>
                    <div></div>
                    <div class="swiper-container" id="main-swiper">
                        <div class="fanhui"></div>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(ba,i) in chouse.imgs" :key="i">
                                <img :src="'http://image.5i5j.com/picture/'+ba.img" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="address">
                    <p class="conmmunityname">{{chouse.conmmunityname}}</p>
                    <p class="communityaddress">{{chouse.communityaddress}}</p>
                </div>
                <div class="jieshao">
                    <div>
                        <p>售价</p>
                        <p>{{chouse.price}}万</p>
                    </div>
                    <div>
                        <p>户型</p>
                        <p>{{chouse.bedroom}}室{{chouse.livingroom}}厅</p>
                    </div>
                    <div>
                        <p>建筑面积</p>
                        <p>{{chouse.buildarea}}m<sup>2</sup></p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
import router from "./router.js";
import {mapState,mapActions} from "vuex";
export default {
    computed:mapState({
        chouse:"house",
        
    }),
    methods:{
        ...mapActions([
            "getDetail",
            "goback"
        ])
    },
    mounted(){
        var that = this;
        this.getDetail("/detail?id="+"170228413"); 
        setTimeout(function(){
            that.chouse.imgs = JSON.parse(that.chouse.imgs); 
        },500)
        
        this.$nextTick(()=>{
            setTimeout(function(){
                this.mySwiper = new Swiper(".swiper-container",{
                    autoplay: 5000,
                    speed:500,
                    resistanceRatio : 0,
                    loop:true
                });
            },1000)    
        })
    }
}   
</script>

<style scoped>

</style>
