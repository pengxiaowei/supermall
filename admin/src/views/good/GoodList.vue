<template>
  <div class="goods">
    <h1>商品列表</h1>
    <el-button @click="$router.push('/goods/create')">新建</el-button>
    <el-table :data="goods">
      <el-table-column prop="title" label="标题" width="140"> </el-table-column>
      <el-table-column prop="img" label="图片" width="120"> </el-table-column>
      <el-table-column prop="updated_at" label="更新时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      goods: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("goods");
      this.goods = res.data.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>
