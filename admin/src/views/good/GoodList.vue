<template>
  <div class="goods">
    <h1>商品列表</h1>
    <el-button @click="$router.push('/goods-create')">新建</el-button>
    <el-table :data="goods">
      <el-table-column prop="title" label="标题" width="140"> </el-table-column>
      <el-table-column prop="img" label="图片" width="120">
        <template slot-scope="scope">
          <img :src="scope.row.img" width="80rem" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="updated_at" label="更新时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="$router.push(`/goods-edit/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="remove(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
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
    },
    async remove(row) {
      this.$confirm(`是否确认删除${row.title}?`, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`goods/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>
