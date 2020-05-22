<template>
  <div class="li-1">
    <h4 class='mb5 pt10 ml10'>{{ msg }}</h4>
    <Table border :loading="loading" :columns="columns7" :data="listLi" class='ml10 mr10 mb10'></Table>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import { Modal, Sider ,Menu ,MenuItem ,Icon ,Header ,Button ,Table } from 'iview';
Vue.prototype.$Modal = Modal; 

const arr = [Modal, Sider ,Menu ,MenuItem ,Icon ,Header ,Button ,Table ] 
arr.map((e)=>{  //动态生成全局组件
   Vue.component(e.name, e);
})

export default {
  name: 'Li-1',
  data () {
    return {
      msg: '考研数据查询系统', 
      columns7: [
          {
              title: '招生单位',
              key: '招生单位'
          },
          {
              title: '院校特性',
              key: '院校特性'
          },
          {
              title: '院系所',
              key: '院系所'
          },
          {
              title: '专业',
              key: '专业'
          },
          {
              title: '研究方向',
              key: '研究方向'
          },
          {
              title: '学习方式',
              key: '学习方式'
          },
          {
              title: '拟招生人数',
              key: '拟招生人数'
          },
          {
              title: '业务课一',
              key: '业务课一'
          },
          {
              title: '业务课二',
              key: '业务课二'
          },
          {
              title: '外语',
              key: '外语'
          },
          {
              title: '政治',
              key: '政治'
          },
          {
              title: '所在地',
              key: '所在地'
          }
      ]
    }
  },
  created:   function(){
    this.getListLi()
  },
  computed: {
    ...mapState(["listLi","loading"])
  },
  methods: {
    ...mapActions(["getListLi"]),
    show (index) {
        this.$Modal.info({
            title: 'User Info',
            content: `age：${this.listLi[index].age}<br>name：${this.listLi[index].name}<br>`
        })
    },
    remove (index) {
        this.listLi.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
