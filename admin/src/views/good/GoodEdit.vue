<template>
  <div>
    <h1>创建列表</h1>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="商品标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + 'upload'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.img" :src="model.img" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-input v-model="model.updated_at"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button native-type="submit">创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`goods/${this.id}`, this.model);
      } else {
        res = await this.$http.post("goods", this.model);
      }
      if (res) {
        this.$router.go(-1);
        this.$message({
          message: "保存成功",
          type: "success"
        });
      }
    },
    async fetch() {
      const res = await this.$http.get(`goods/${this.id}`);
      this.model = res.data;
    },
    afterUpload(file) {
      this.$set(this.model, "img", file.url);
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
