<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, i) in recommends" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="" width="80rem" />
        <div class="title pt-5">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 0.6rem;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  text-align: center;
}
.recommend-item .title {
  font-size: 0.9rem;
  padding-top: 0.6rem;
}
</style>
