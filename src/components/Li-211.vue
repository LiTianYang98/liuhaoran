<template>
    <div id="myChart" :style="{width: '1200px', height: '500px'}"></div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import { Modal, Sider ,Menu ,MenuItem ,Icon ,Header ,Button ,Table } from 'iview';
Vue.prototype.$Modal = Modal; 

const arr = [Modal, Sider ,Menu ,MenuItem ,Icon ,Header ,Button ,Table ] 
arr.map((e)=>{  //动态生成全局组件
   Vue.component(e.name, e);
})
export default {
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));

        this.$http.get("/api/select211")//
          .then(function(res){
	    var i = "";
	    var xlist = new Array();
	    var ylist = new Array();
	    for(i in res.data){
		xlist[i]=res.data[i].院校特性;
		ylist[i]=res.data[i].招生人数;
	    }
	    console.log(xlist);
            // 绘制图表
            myChart.setOption({
              tooltip: {},
              xAxis: {
                name: '院校特性',
                data: xlist,
		axisLabel: {  
		   interval:0,  
		   rotate:40  
		}
              },
              yAxis: {},
              series: [{
                name: '招生人数',
                type: 'bar',
                data: ylist
              }]
            });
          })
          .catch(function(err){
            console.log(err);
          })
      }
    },
    mounted(){
      this.drawLine();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
