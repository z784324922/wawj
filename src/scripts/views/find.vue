<template>
   <section class="section">
       <h1>聊天功能开发中</h1>
        <Display></Display>
        <Counter></Counter>
   </section>
</template>

<script>
import Display from "../components/display.vue";
import Counter from "../components/counter.vue";
export default {
    components:{
        Display,
        Counter
    }
}
</script>

<style>

</style>
