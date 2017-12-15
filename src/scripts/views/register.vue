<template>
    <div>
        <header>
        <div>
            <a @click="goback" class="return"><img :src="src"></a>
            <h1>注册</h1>
        </div>
        </header>
        <main>
            <p class="password-text">
                <i class="iconfont icon-shouji1 cb5b5"></i>
                <input type="text" placeholder="请输入手机号" v-model="phone">
            </p>
            <p class="password-text">
                <i class="iconfont icon-tupian cb5b5"></i>
                <input type="text" placeholder="请输入图片验证码" v-model="yanzhen">
                <span id="yanzhen" @click="showCode"></span>
            </p>
            <p class="password-text">
                <i class="iconfont icon-jiesuo cb5b5"></i>
                <input type="password" placeholder="请输入密码" v-model="password">
            </p>
        </main>
        <div class="password-submit-box">
            <button @click="register" disabled="disabled" v-show="show">注册</button>
            <button @click="register" style="background: #00abeb" v-show="!show">注册</button>
        </div>
        <p>
            <input type="checkbox" name="" id="checkbox" class="checkbox" @click="show=!show">
            <label for="checkbox"></label>
            <span>我已经阅读并同意</span>
            <a class="blue">《我爱我家用户使用协议》</a>
        </p>
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
import p1 from "../../assets/images/jt.png"
import { MessageBox } from 'mint-ui';
import router from "./router"
export default {
    data(){
        return {
            src:p1,
            phone:"",
            password:"",
            yanzhen:"",
            show:true,
        }
    },
    computed:{
        ...mapState([
            // "show"
        ])
    },
    methods:{
        ...mapActions([
            "jump",
            "goback"
            ]  
        ),
        showCode(){
            var url = "http://route.showapi.com/932-2?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&length=4&specials=false";
            $.getJSON(url, function(data){
                $("#yanzhen").html('<img src="" id="code"/>');
                $("#code").attr("src", data.showapi_res_body.image)
                        .data("sid", data.showapi_res_body.sid);
            });
        },
        register(){
            var phone = this.phone;
            var password = this.password;
            var _input = this.yanzhen;
            var istrue = true;
            var that = this;
            var _url = "http://route.showapi.com/932-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&checkcode="+ _input +"&sid=" + $("#code").data("sid");

             $.getJSON(_url, function(data){
                if (data.showapi_res_body.valid) {
                    if(phone.length==0){
                        MessageBox('提示', '用户名不能为空');
                        istrue = false;
                    }
                    else if(!/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(phone)){
                        MessageBox('提示', '手机格式错误!');
                        istrue = false;
                    }
                    else if(password.length<6 || password.length>16){
                        MessageBox('提示', '密码不能小于6位或大于16位!');
                        istrue = false;
                    }
                    else if(!/^[a-zA-Z\d_]{6,16}$/.test(password)){
                        MessageBox('提示', '密码只能由字母数字下划线组成!');
                        istrue = false;
                    }
                }
                else {
                        MessageBox('提示', '验证码错误!');
                        istrue = false;
                        that.showCode();
                }
                if(istrue){
                        $.ajax({
                        url:"http://119.23.238.121:7700/user/register",
                        type:"post",
                        data:{
                            username:phone,
                            password:password
                        },
                        success(data){
                            MessageBox('提示', '注册成功');
                            router.push("/login");
                        }
                    });
                }
            })    
        },
        changeshow(){
            // show = !show;
        }
    },
    mounted(){
        var url = "http://route.showapi.com/932-2?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&length=4&specials=false";
        $.getJSON(url, function(data){
            $("#yanzhen").html('<img src="" id="code"/>');
            $("#code").attr("src", data.showapi_res_body.image)
                    .data("sid", data.showapi_res_body.sid);
        });
    }
}
</script>

<style scoped>
    
</style>
