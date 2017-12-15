<template>
   <section class="section">
       <div class="layout">
           <router-view></router-view>
           <v-foot></v-foot>
       </div>
   </section>
</template>

<script>
import Hfoot from "../components/hfoot.vue"
export default {
    components:{
        'v-foot':Hfoot
    }
}
</script>

<style>

</style>