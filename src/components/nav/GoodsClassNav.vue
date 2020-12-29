/*
 * @Author: Gavin
 * @Date: 2018-06-11 11:27:10
 * @Last Modified by: Gavin
 * @Last Modified time: 2018-06-11 12:23:40
 * @Describe: 搜索商品导航标签
 */
<template>
  <div class="item-class-show">
    <Row class="item-class-group" v-for="(items, index) in tagsInfo" :key="index">
      <i-col class="item-class-name" span="3">{{ items.tagName }} : </i-col>
      <i-col class="item-class-select" span="21">
        <span v-for="(item, subIndex) in items.tags" :key="subIndex">{{ item }}</span>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'GoodsClassNav',
  data () {
    return {
      tagsInfo: [
        {
          tagName: '品牌',
          tags: [ '聚怀斋', '都乐(Dole)', '猫山王榴莲', '怡颗莓', '农夫山泉', '佳沛(zespri)', '京觅', '果鲜水香', '御香梅' ]
        },
        {
          tagName: '类别',
          tags: [ '红富士', '爱媛', '脐橙', '嘎啦/加力', '丑橘/不知火', '蛇果', '砂糖桔', '粑粑柑' ]
        },
        {
          tagName: '重量',
          tags: [ '6000g以上', '1000-1999g', '2000-3999g', '4000-5999g', '1000g以下' ]
        },
        {
          tagName: '等级',
          tags: [ '特级', '一级', '二级', '其他' ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.item-class-show {
  margin: 15px auto;
  width: 100%;
}
.item-class-group {
  margin-top: 1px;
  height: 45px;
  border-bottom: 1px solid #ccc;
}
.item-class-group:first-child {
  border-top: 1px solid #ccc;
}
.item-class-name {
  padding-left: 15px;
  line-height: 44px;
  color: #666;
  font-weight: bold;
  background-color: #f3f3f3;
}
.item-class-name:first-child {
  line-height: 43px;
}
.item-class-select span {
  margin-left: 15px;
  width: 160px;
  color: #005aa0;
  line-height: 45px;
  cursor: pointer;
}
</style>
