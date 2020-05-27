<template>
    <Form>
            <Input type="text" v-model="province" placeholder="省市">
            </Input>
            <Input type="text" v-model="major" placeholder="专业">
            </Input>
            <Button type="primary" @click="search">查询</Button>
    </Form>
</template>
<script>
import Vue from 'vue'
import { Form ,Button ,Input ,FormItem} from 'iview';
const arr = [Button ,Input ,Form ,FormItem]
arr.map((e)=>{  //动态生成全局组件
   Vue.component(e.name, e);
})
export default {
        methods: {
		search(){
		    this.$http.get("/api/pyth",{params:{province:this.province,major:this.major}});
			}
                    }
            }
</script>
