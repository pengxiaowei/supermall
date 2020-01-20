<template>
  <div class="category">
    <h1>商品列表</h1>
    <el-button @click="$router.push('/categories-create')">新建</el-button>
    <el-table :data="categories">
      <el-table-column prop="name" label="分类名" width="140">
      </el-table-column>
      <el-table-column prop="updated_at" label="更新时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="$router.push(`/categories-edit/${scope.row._id}`)"
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
      categories: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("categories");
      this.categories = res.data.data;
    },
    async remove(row) {
      this.$confirm(`是否确认删除${row.name}?`, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.delete(`categories/${row._id}`);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetch();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.fetch();
  }
};
</script>
