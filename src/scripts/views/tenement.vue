<template>
    <section class="section">
        <div class="house">
            <div class="house-box">
                <div class="house-search">
                    <div>
                        <router-link  :to="{name:'home'}">
                            <a class="return"><img :src="src"></a>
                        </router-link>
                        <div>
                            <i class="iconfont icon-conversation_icon"></i>
                        </div>
                        <h1>
                            <i class="iconfont icon-sousuo3 cb5b5"></i>
                            <input type="text" placeholder="请输入小区名或商圈">
                        </h1>
                    </div>
                </div>
                <div class="house-showbox">
                    <div class="house-show"  v-for="(fangzi,i) in chouse" :key="i">
                        <div class="imgbox">
                            <img :src="'http://image.5i5j.com/picture/slpic/l/'+fangzi.imgurl+'.jpg'" alt="">
                        </div>
                        <div class="right">
                            <p class="p1">{{chouse[i].housetitle}}</p>
                            <p class="p2">
                                <span><i>{{chouse[i].bedroom}}室{{chouse[i].livingroom}}厅  {{chouse[i].buildarea}}m</i> <sup>2</sup> <i>{{chouse[i].heading}}</i> </span>
                                <span>{{chouse[i].price}}/月</span>
                            </p>
                            <p class="p3">
                                <span>{{chouse[i].sqname}} • {{chouse[i].conmmunityname}}</span>
                                <span>{{chouse[i].rentmodename}}</span>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    </section>
  
</template>

<script>
import p1 from "../../assets/images/jt2.png"
import { Indicator } from 'mint-ui';
import {mapState,mapActions} from "vuex";
export default {
    data(){
        return {
            src:p1,
        }
    },
    computed:mapState({
        chouse:"json"
    }),
    // computed:{
    //     ...mapState([
    //         "json"
	// 	])
    // },
    methods:{
        ...mapActions([
            "getJson"
        ]),
    },
    mounted(){
        this.getJson("http://119.23.238.121:7700/tenement"); 
    }
}
</script>

<style>

</style>