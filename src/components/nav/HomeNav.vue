<template>
  <div>
    <div class="nav-item">
      <ul>
        <li v-for="(item,index) in nav" :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="nav-body">
      <!-- 侧边导航 -->
      <div class="nav-side" ref="navSide">
        <ul>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item"><b>新鲜水果</b></span><br/>
            <span class="nav-side-item">草莓</span>|
            <span class="nav-side-item">水蜜桃</span>|
            <span class="nav-side-item">车厘子</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item"><b>海鲜水产</b></span><br/>
            <span class="nav-side-item">海鲜礼盒</span>|
            <span class="nav-side-item">鱼类</span>|
            <span class="nav-side-item">贝类</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item"><b>精选肉类</b></span><br/>
            <span class="nav-side-item">鸡翅</span>|
            <span class="nav-side-item">猪肋排</span>|
            <span class="nav-side-item">牛排</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
            <span class="nav-side-item"><b>冷饮冻食</b></span><br/>
            <span class="nav-side-item">酸奶</span>|
            <span class="nav-side-item">冰淇淋</span>|
            <span class="nav-side-item">牛奶</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
            <span class="nav-side-item"><b>蔬菜蛋品</b></span><br/>
            <span class="nav-side-item">水培蔬菜</span>|
            <span class="nav-side-item">玉米</span>|
            <span class="nav-side-item">蛋品</span>
          </li>
        </ul>
      </div>
      <div class="nav-content">
        <!-- 幻灯片 -->
        <div>
          <Carousel autoplay loop>
              <CarouselItem  v-for="(item, index) in marketing.CarouselItems" :key="index">
                <router-link to="/goodsList">
                  <img :src="item">
                </router-link>
              </CarouselItem>
          </Carousel>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="detail-item-panel panel-1" :duration="{ enter: 100, leave: 100 }" v-show="panel1" @mouseenter="showDetail(1)" ref="itemPanel1" @mouseleave="hideDetail(1)">
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData1.navTags" :key="index">{{item}} > </span>
        </div>
        <ul>
          <li v-for="(items, index) in panelData1.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link to="/goodsList" v-for="(item, subIndex) in items.tags" :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="fade">
      <div class="detail-item-panel panel-2" :duration="{ enter: 100, leave: 100 }" v-show="panel2" @mouseenter="showDetail(2)" ref="itemPanel2" @mouseleave="hideDetail(2)">
        <div class="nav-detail-item">
          <span v-for="(item, index) in panelData2.navTags" :key="index">{{item}} > </span>
        </div>
        <ul>
          <li v-for="(items, index) in panelData2.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link to="/goodsList" v-for="(item, subIndex) in items.tags" :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import store from '@/vuex/store';
import { mapState } from 'vuex';
export default {
  name: 'HomeNav',
  data () {
    return {
      panel1: false,
      panel2: false,
      nav: [
        '生鲜首页',
        '东家菜',
        '优选100',
        '试吃',
        '企业购'
      ],
      panelData1: {
        classNav: [
          {
            title: '热销水果',
            tags: [ '苹果', '葡萄/提子', '奇异果/猕猴桃', '橙子', '梨', '蓝莓', '柠檬', '百香果', '火龙果', '椰青', '更多' ]
          },
          {
            title: '时令水果',
            tags: [ '柚子', '冬枣', '车厘子/樱桃', '水蜜桃', '杏', '李子', '香瓜', '哈密瓜', '西瓜', '枇杷', '杨梅', '草莓', '橘柑' ]
          },
          {
            title: '热带鲜果',
            tags: [ '芒果', '菠萝/凤梨', '榴莲', '香蕉', '百香果', '山竹', '木瓜', '释迦', '龙眼', '牛油果', '菠萝蜜', '椰子' ]
          },
          {
            title: '知名品牌',
            tags: [ '佳沛', '都乐', '佳农', '怡颗莓', '宏辉果蔬', '新奇士', '爱奇果', '珍享', '展卉' ]
          },
          {
            title: '地标水果',
            tags: [ '山东网纹瓜', '百色芒果', '洛川苹果', '新疆哈密瓜', '阿克苏苹果', '烟台红富士', '沾化冬枣' ]
          },
          {
            title: '新奇特',
            tags: [ '红心猕猴桃', '丑苹果', '黄心西瓜', '蛇皮果', '鲜核桃', '软籽石榴', '秋月梨', '有机水果', '鲜果礼盒' ]
          }
        ]
      },
      panelData2: {
        classNav: [
          {
            title: '猪肉',
            tags: [ '肋排', '猪蹄', '五花肉', '汤骨', '猪肘', '梅花肉片', '猪排', '里脊', '猪腿肉', '猪肉馅', '脊骨' ]
          },
          {
            title: '牛肉',
            tags: [ '牛排', '牛腩', '牛腱子', '牛里脊', '牛肉片', '牛尾', '牛肋条', '牛蹄筋', '牛肉串', '牛骨' ]
          },
          {
            title: '羊肉',
            tags: [ '羊肋排', '羊肉卷', '羊腿', '羊蝎子', '羊肉块', '羊肉串', '羊杂', '西式羊排', '羊肉馅' ]
          },
          {
            title: '鸡肉',
            tags: [ '鸡翅', '整鸡', '鸡胸肉', '鸡腿', '鸡爪', '鸡肉块', '鸡胗', '鸡柳', '鸡排', '老母鸡' ]
          },
          {
            title: '鸭肉',
            tags: [ '鸭腿', '鸭胸', '鸭胗', '鸭掌', '鸭舌', '鸭翅', '老鸭' ]
          },
          {
            title: '地标产品',
            tags: [ '内蒙古牛羊肉', '宁夏羊肉', '北京油鸡', '台湾烤肠', '宣威火腿', '哈尔滨红肠' ]
          },
          {
            title: '新奇特',
            tags: [ '鹅肉', '鸽肉', '知了猴', '蚕蛹', '鹿肉', '火鸡', '年肉礼盒', '野鸡' ]
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(['marketing'])
  },
  methods: {
    showDetail (index) {
      index === 1 ? (this.panel1 = true) : (this.panel2 = true);
    },
    hideDetail (index) {
      index === 1 ? (this.panel1 = false) : (this.panel2 = false);
    }
  },
  mounted () {
    this.$refs.itemPanel1.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel2.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
    this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
  },
  updated () {
    this.$refs.itemPanel1.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel2.style.left =
      this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
    this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
    this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
  },
  store
};
</script>

<style scoped>
.nav-item {
  width: 680px;
  height: 36px;
  margin: 0px auto;
}
.nav-item ul {
  list-style: none;
  margin-left: 15px;
}
.nav-item li {
  float: left;
  font-size: 14px;
  margin-left: 30px;
  width: 80px;
}
.nav-item a {
  text-decoration: none;
  color: #555555;
}
.nav-item a:hover {
  color: #d9534f;
}
/*大的导航信息，包含导航，幻灯片等*/
.nav-body {
  width: 1020px;
  height: 400px;
  margin: 0px auto;
}
.nav-side {
  width: 200px;
  height: 100%;
  padding: 0px;
  color: #fff;
  float: left;
  background-color: #fff;
}
.nav-side ul {
  width: 100%;
  padding: 0px;
  padding-top: 0px;
  list-style: none;
}
.nav-side li {
  padding: 7.5px;
  padding-left: 15px;
  font-size: 14px;
  color: black;
  line-height: 30px;
}
.nav-side li:hover {
  background: #999395;
}
.nav-side-item:hover {
  cursor: pointer;
  color: #c81623;
}

/*导航内容*/
.nav-content {
  width: 792px;
  margin-left: 15px;
  overflow: hidden;
  float: left;
}
/*导航图片*/
.nav-show-img {
  margin-top: 10px;
  float: left;
}
.nav-show-img:nth-child(2) {
  margin-left: 12px;
}
/*显示商品*/
.content {
  width: 100%;
}
/*显示商品详细信息*/
.detail-item-panel {
  width: 815px;
  height: 400px;
  background-color: #fff;
  position: absolute;
  top: 168px;
  left: 389px;
  z-index: 999;
}
.nav-detail-item {
  margin-left: 26px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #eee;
}
.nav-detail-item span {
  padding: 6px;
  padding-left: 12px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6e6568;
}
.nav-detail-item span:hover {
  margin-left: 15px;
  background-color: #f44336;
}
.detail-item-panel ul {
  list-style: none;
}
.detail-item-panel li {
  line-height: 50px;
  margin-left: 40px;
}
.detail-item-title {
  padding-right: 6px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  color: #555555;
}
.detail-item-title:hover {
  color: #d9534f;
}
.detail-item-row a {
  color: #555555;
}
.detail-item{
  font-size: 14px;
  padding-left: 12px;
  padding-right: 8px;
  cursor: pointer;
  border-left: 1px solid #ccc;
}
.detail-item:hover {
  color: #d9534f;
}
</style>
