<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu ref="side_menu" :active-name="activeName" theme="dark" width="auto" :class="menuitemClasses" @on-select='letsGo' @on-open-change='setOpen' accordion>
                    <div class='logo flex alic'>
                        <span class='fz18 ml10 flex1'>考研数据爬取及可视化分析系统</span>
                    </div>
                    <Submenu name="目录">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>功能</span>
                        </template>
			<MenuItem name="Li-3" to="/li-3" @click.native='go("点击爬取" ,"Li-3")'>
                            <Icon type="ios-flower"></Icon>
                            <span>爬虫</span>
                        </MenuItem>
                        <MenuItem name="Li-1" to="/li-1" @click.native='go("表格" ,"Li-1")'>
                            <Icon type="ios-flower"></Icon>
                            <span>表格</span>
                        </MenuItem>
                        <MenuItem name="Li-2" to="/li-2" @click.native='go("招生院校-拟招人数图" ,"Li-2")'>
                            <Icon type="ios-flower"></Icon>
                            <span>柱形图</span>
                        </MenuItem>
                        <MenuItem name="Li-4" to="/li-4" @click.native='go("扇形图" ,"Li-4")'>
                            <Icon type="ios-flower"></Icon>
                            <span>扇形图</span>
                        </MenuItem>
                        <MenuItem name="Li-211" to="/li-211" @click.native='go("211/985/双非拟招人数" ,"Li-211")'>
                            <Icon type="ios-flower"></Icon>
                            <span>211/985招生人数</span>
                        </MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar flex alic justs">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" class='ml20' type="navicon-round" size="24"></Icon>
                    <div class='flex1 flex justs ml20'>
                        <Breadcrumb :style="{margin: '24px 0'}">
                            <BreadcrumbItem v-for="item in breadcrumbItem" >{{item}}</BreadcrumbItem>
                        </Breadcrumb>
                        <ul class='flex alic inline'>
                        </ul>
                    </div>
                    
                    
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                      <!-- 路由匹配到的组件将渲染在这里 -->
                      <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import { Layout, Sider ,Menu ,MenuItem ,Icon ,Header ,Content ,Submenu ,Breadcrumb ,BreadcrumbItem} from 'iview';

const arr = [Layout, Sider ,Menu ,MenuItem ,Icon ,Header ,Content ,Submenu ,Breadcrumb ,BreadcrumbItem] 
arr.map((e)=>{  //动态生成全局组件
   Vue.component(e.name, e);
})

export default {
  name: 'App',
  data () {
      return {
          isCollapsed: false,
          open:[],
          openItem:[],
          activeName:localStorage.getItem('activeName') ? localStorage.getItem('activeName') : 'ZhongKui'
      }
  },
  created() {
      let open = localStorage.getItem('open') ? JSON.parse(localStorage.getItem('open')) : [];
      let openItem = localStorage.getItem('openItem') ? JSON.parse(localStorage.getItem('openItem')) : [];
      this.open = open;
      this.openItem = openItem;
  },
  computed: {
      rotateIcon () {
          return [
              'menu-icon',
              this.isCollapsed ? 'rotate-icon' : ''
          ];
      },
      menuitemClasses () {
          return [
              'menu-item',
              this.isCollapsed ? 'collapsed-menu' : ''
          ]
      },
      breadcrumbItem(){
          return this.open.concat(this.openItem)
      }
      
  },
  methods: {
      collapsedSider () {
          this.$refs.side1.toggleCollapse();
      },
      setOpen(e){
        console.log("展开的Submenu name",e)
        this.openItem = []
        this.open = []
        let arr = []
        if(e[0]){
            arr.push(e[0])
        }
        this.open = arr 
        localStorage.setItem('open',JSON.stringify(arr))
      },
      go(e ,name ,flag){
        console.log("选中的MentItem name",e)
        this.openItem = []
        if(flag){
            this.open = []
            localStorage.setItem('open',[])
        }
        let arr = []
        arr.push(e)
         console.log(arr)
        this.openItem = arr
        localStorage.setItem('openItem',JSON.stringify(arr))
        localStorage.setItem('activeName',name); //解决刷新后，选中状态，恢复默认
        console.log("openItem",JSON.parse(localStorage.getItem('openItem')))
      },
      letsGo(e){
        
        this.$router.push({
                name:e   
            })
        
      }
  }
}

</script>

<style scoped>
.logo{
    padding: 14px 24px;
    position: relative;
    z-index: 1;
    transition: all .2s ease-in-out;
    color: #fff;
    font-size: 14px;
}
/*强行变成ant design pro 风格*/
.ivu-layout-sider{background:#002140;} 
.ivu-menu-dark{background:#002140;}
.ivu-menu-dark,.ivu-menu-vertical,.ivu-menu-opened{background:#002140!important;}
.layout >>> .ivu-menu-submenu-title-icon{left:-4px} /* 设置scoped后，无法修改子组件样式 >>>用来修改子组件样式*/
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){background:#2d8cf0 !important;color:#fff!important;}
.ivu-layout-content{ min-height:max-content;}
    .layout{
        /* border: 1px solid #d7dde4; */
        background: #f5f7f9;
        position: relative;
        /* border-radius: 4px; */
        overflow: hidden;
    }
    .ivu-layout,.ivu-layout-has-sider{ height:100vh;}
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
