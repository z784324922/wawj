<template>
    <footer>
        <div v-for="(foot,i) in footList" :key="i">
            <router-link  :to="{name:foot.name}">
                <i class="iconfont" v-html="foot.icon"></i>
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
    </footer>
</template>

<script>
import {mapState} from "vuex";
export default {
	computed:{
		...mapState([
			"footList"
		])
	}
}
</script>

