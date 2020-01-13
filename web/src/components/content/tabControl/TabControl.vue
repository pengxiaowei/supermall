<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{ active: i === currentIndex }"
      v-for="(item, i) in titles"
      :key="i"
      @click="itemClick(i)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: Array
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(i) {
      this.currentIndex = i;
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  justify-content: space-around;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-tint);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
