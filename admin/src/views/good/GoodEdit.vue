<template>
  <div>
    <h1>创建列表</h1>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="商品标题">
        <el-input placeholder="请输入标题"></el-input>
      </el-form-item>
      <!-- <el-upload
        class="avatar-uploader"
        :action="$http.defaults.baseURL + '/upload'"
        :show-file-list="false"
        :on-success="afterUpload"
      >
        <img v-if="model.img" :src="model.img" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload> -->
      <el-form-item>
        <el-button native-type="submit">创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // async fetch() {
    //   const res = await this.$http.get(`goods/${this.id}`);
    //   this.data = res.data.data;
    // }
    // afterUpload(file, fileList) {
    //   this.$set(this.model, "img", file.url);
    // }
  },
  created() {
    // this.fetch()
  }
};
</script>

<style></style>
