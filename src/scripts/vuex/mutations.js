import router from "../views/router"

export default {
    JUMP(state,preload){
        router.push("/"+preload);
    },
    getBanner(state,data){
        state.banner = data;
    },
    getErshou(state,data){
        state.ershou = data;
    },
    getTenement(state,data){
        state.tenement = data;
    },
    JSON(state,data){
        state.json = data;
    },
    GOBACK(state){
        router.go(-1);
    },
    GETDETAIL(state,data){
        state.house = data;
        console.log(data);
    }
}