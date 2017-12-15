<template>
  <section class="section">
    <header>
        <div>
            <a @click="goback" class="return"><img :src="src"></a>
            <a @click="jump('password')" class="password">找回密码</a>
            <h1>{{title}}</h1>
        </div>
    </header>
    <div class="login-banner">
        <img :src="loginbanner">
    </div>
    <main>
        <div class="text-wrap">
            <p>普通登录</p>
        </div>
        <div class="mt25">
            <div class="text-wrap">
                <p>
                    <span>账号</span><input type="text" placeholder="请输入手机号" v-model="phone">
                </p>  
            </div>
            <div class="text-wrap">
                <p>
                    <span>密码</span><input type="password" placeholder="请输入密码" v-model="password">
                </p>
                
            </div>
        </div>
        <div class="login-btn-box">
            <button @click="jump('register')">注册</button>
            <button @click="checklogin">登录</button>
        </div>
    </main>
  </section>
</template>

<script>
import {mapActions} from "vuex";
import { MessageBox } from 'mint-ui';
import p1 from "../../assets/images/jt.png"
import p2 from "../../assets/images/login.png"
import router from "./router"
export default {
    data(){
        return {
            src:p1,
            loginbanner:p2,
            title:"登录",
            phone:"",
            password:""
        }
    },
    methods:{
        checklogin(){
            var that = this;
            $.ajax({
                url:"http://119.23.238.121:7700/user/login",
                type:"post",
                data:{
                    username:this.phone,
                    password:this.password
                },
                success(data){
                    if(data=="登录成功!"){
                        localStorage.username=that.phone;
                        router.push("/index/home");
                    }else{
                        MessageBox('提示', '登录失败');
                    }
                }
            });
        },
        ...mapActions([
            "jump",
            "goback"
            ]  
        )
    },
}
</script>
<style scoped>
    .MessageBox{
        font-size: 45px;
    }
</style>


