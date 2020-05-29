<template>
    <Form>
            <Input type="text" v-model="province" placeholder="省市">
            </Input>
            <Input type="text" v-model="major" placeholder="专业">
            </Input>
            <Button type="primary" @click="search">点击爬取数据</Button>
           <br>研招网专业编码对照<br>
           <br>0101哲学<br>
           <br>0201理论经济学<br>
           <br>0202应用经济学<br>
           <br>0251金融<br>
           <br>0252应用统计<br>
           <br>0253税务<br>
           <br>0254国际商务<br>
           <br>0255保险<br>
           <br>0256资产评估<br>
           <br>0257审计<br>
           <br>0270统计学<br>
           <br>0301法学<br>
           <br>0302政治学<br>
           <br>0303社会学<br>
           <br>0304民族学<br>
           <br>0305马克思主义理论<br>
           <br>0306公安学<br>
           <br>0351法律<br>
           <br>0352社会工作<br>
           <br>0353警务<br>
           <br>0401教育学<br>
           <br>0402心理学<br>
           <br>0403体育学<br>
           <br>0451教育<br>
           <br>0452体育<br>
           <br>0453汉语国际教育<br>
           <br>0454应用心理<br>
           <br>0501中国语言文学<br>
           <br>0502外国语言文学<br>
           <br>0503新闻传播学<br>
           <br>0551翻译<br>
           <br>0552新闻与传播<br>
           <br>0553出版<br>
           <br>0601考古学<br>
           <br>0602中国史<br>
           <br>0603世界史<br>
           <br>0651文物与博物馆<br>
           <br>0701数学<br>
           <br>0702物理学<br>
           <br>0703化学<br>
           <br>0704天文学<br>
           <br>0705地理学<br>
           <br>0706大气科学<br>
           <br>0707海洋科学<br>
           <br>0708地球物理学<br>
           <br>0709地质学<br>
           <br>0710生物学<br>
           <br>0711系统科学<br>
           <br>0712科学技术史<br>
           <br>0713生态学<br>
           <br>0714统计学<br>
           <br>0771心理学<br>
           <br>0772力学<br><br>0773材料科学与工程<br><br>0774电子科学与技术<br><br>0775计算机科学与技术<br><br>0776环境科学与工程<br>0777生物医学工程<br><br>0778基础医学<br>0779公共卫生与预防医学<br><br>0780药学<br>0781中药学<br><br>0782医学技术<br><br>0783护理学<br><br>0801力学<br><br>0802机械工程<br><br>0803光学工程<br><br>0804仪器科学与技术<br><br>0805材料科学与工程<br><br>0806冶金工程<br><br>0807动力工程及工程热物理<br><br>0808电气工程<br>0809电子科学与技术<br>0810信息通信工程<br><br>0811控制科学与工程<br>0812计算机科学与技术<br><br>0813建筑学<br><br>0814土木工程<br><br>0815水利工程<br>0816测绘科学与技术<br>0817化学工程与技术<br>0818地质资源与地质工程<br>0819矿业工程<br>0820石油与天然气工程<br>0821纺织科学与工程<br>0822轻工技术与工程<br>0823交通运输工程<br>0824船舶与海洋工程<br>0825航空宇航科学与技术<br>0826兵器科学与技术<br>0827核科学与技术<br>0828农业工程<br>0829林业工程<br>0830环境科学与工程<br>0831生物医学工程<br>0832食品科学与工程<br>0833城乡规划学<br>0834风景园林学<br>0835软件工程<br>0836生物工程<br>0837安全科学与工程<br>0838公安技术<br>0839网络空间安全<br>0835建筑学<br>0853城市规划<br>0854电子信息<br>0855机械<br>0856材料与化工<br>0857资源与环境<br>能源动力<br>0859土木水利<br>0860生物与医药<br>0861交通运输<br>0870科学技术史<br>0871管理科学与工程<br>0872设计学<br>0901生物学<br>0902园艺学<br>0903农业资源与环境<br>0904植物保护<br>0905畜牧学<br>0906兽医学<br>0907林学<br>0908水产<br>0909草学<br>0951农业<br>0952兽医<br>0953风景园林<br>    </Form>

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
