<template>
  <div id="myChart" :style="{ width: '1200px', height: '500px' }"></div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import {
  Modal,
  Sider,
  Menu,
  MenuItem,
  Icon,
  Header,
  Button,
  Table
} from "iview";
Vue.prototype.$Modal = Modal;

const arr = [Modal, Sider, Menu, MenuItem, Icon, Header, Button, Table];
arr.map(e => {
  //动态生成全局组件
  Vue.component(e.name, e);
});
export default {
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      this.$http
        .get("/api/selectpi") //
        .then(function(res) {
          var i = "";
          //var xlist = new Array();
          //var ylist = new Array();
          //for (i in res.data) {
          //  xlist[i] = res.data[i].name;
            //ylist[i]=res.data[i].招生人数;
          //}
          console.log(res.data);
          // 绘制图表
          myChart.setOption({
            backgroundColor: "#2c343c",

            title: {
              text: "大学招生人数表",
              left: "center",
              top: 20,
              textStyle: {
                color: "#ccc"
              }
            },

            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                colorLightness: [0, 1]
              }
            },
            series: [
              {
                name: "大学",
                type: "pie",
                radius: "55%",
                center: ["50%", "50%"],
                data: res.data.sort(function(a, b) {
                  return a.value - b.value;
                }),
                roseType: "radius",
                label: {
                  color: "rgba(255, 255, 255, 0.3)"
                },
                labelLine: {
                  lineStyle: {
                    color: "rgba(255, 255, 255, 0.3)"
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                },
                itemStyle: {
                  color: "#c23531",
                  shadowBlur: 200,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                },

                animationType: "scale",
                animationEasing: "elasticOut",
                animationDelay: function(idx) {
                  return Math.random() * 200;
                }
              }
            ]
          });
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.drawLine();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
