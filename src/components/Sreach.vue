<template>
  <div>
    <div class="container">
      <i-input v-model="sreachData" size="large" class="sreach" placeholder="水果生鲜">
        <Button slot="append"  @click="sreach" class='sre'>搜索</Button>
      </i-input>
      <Tag v-for="(item, index) in promotionTags" :key="index" ><span @click="selectTags(index)">{{item}}</span></Tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sreach',
  data () {
    return {
      sreachData: '',
      promotionTags: ['生鲜企采', '方便菜', '橙子', '生蚝', '牛肉']
    };
  },
  methods: {
    selectTags (index) {
      this.sreachData = this.promotionTags[index];
    },
    sreach () {
      this.$router.push({path: '/goodsList', query: { sreachData: this.sreachData }});
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 15px;
  margin: 0px auto;
  margin-bottom: 15px;
  width: 460px;
}
.sreach {
  margin: 5px 0px;
}
.sre{
  background-color: chartreuse;
  width: 60px;
}
</style>
