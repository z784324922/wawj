<template>
   <section class="section">
       <div class="mine">
           <div class="mine-top">我的</div>
           <div class="mine-main">
                <div class="user c333">
                    <p v-show="show">{{user}}
                        <span @click="cancel">注销</span>
                    </p>
                    <div v-show="!show">
                        <div class="mine-register unlogin" @click="jump('register')">
                            注册
                        </div>
                        <div class="mine-login unlogin" @click="jump('login')">
                            登录
                        </div>
                    </div>
                </div>
                <div class="mainbox">
                    <p>
                        <i class="iconfont icon-xiaoxi c2dbae8"></i>
                        <span class="c5c5c">消息</span>
                        <i class="iconfont icon-enter"></i>
                        </p>
                </div>
               <div class="mainbox">
                   <p>
                       <i class="iconfont icon-liulanjilu cf277"></i>
                       <span class="c5c5c">浏览记录</span>
                       <i class="iconfont icon-enter"></i>
                    </p>
                    <p>
                       <i class="iconfont icon-hetongchaxun c72c0"></i>
                       <span class="c5c5c">合同查询</span>
                       <i class="iconfont icon-enter"></i>
                    </p>
               </div>
               <div class="mainbox">
                   <p>
                       <i class="iconfont icon-tuoguan c19b2"></i>
                       <span class="c5c5c">我要委托</span>
                       <i class="iconfont icon-enter"></i>
                    </p>
                    <p>
                       <i class="iconfont icon-fangdaijisuanqi cf277"></i>
                       <span class="c5c5c">房贷计算器</span>
                       <i class="iconfont icon-enter"></i>
                    </p>
               </div>
               <div class="mainbox">
                   <p>
                       <i class="iconfont icon-ttpodicon cecc63f"></i>
                       <span class="c5c5c">设置</span>
                       <i class="iconfont icon-enter"></i>
                    </p>
               </div>
           </div>
       </div>
   </section>
</template>

<script>
import router from "../views/router"
import {mapState,mapActions} from "vuex";
export default {
    data(){
        return {
            show:true,
            user:""
        }
    },
    computed:mapState({
        // ifshow:"show",
        // user:"username"
    }),
    methods:{
        ...mapActions([
            "jump",
            "goback"
            ]  
        ),
        cancel(){
            localStorage.clear();
            router.push("/index/mine");
        },
    },
    mounted(){
        if(localStorage.username){
            this.user = localStorage.username;
        }else{
            this.show = false;
        }
    },
}
</script>

<style scoped>
    
</style>
