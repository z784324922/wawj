
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:7700"; 
axios.defaults.baseURL = "http://119.23.238.121:7700"; 


export default {
    jump({commit},preload){
        commit("JUMP",preload);
    },
    getBanner({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("getBanner",json);
            })
    },
    getErshou({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("getErshou",json);
            })
    },
    getTenement({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("getTenement",json);
            })
    },
    getJson({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("JSON",json);
            })
    },
    goback({commit}){
        commit("GOBACK");
    },
    getDetail({commit},url){
        axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            commit("GETDETAIL",json);
        })
    }
}