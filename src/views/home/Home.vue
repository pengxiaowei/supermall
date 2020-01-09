<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in banners" :key="item._id">
        <a :href="item.link">
          <img :src="item.image" style="width:100%;" alt="" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import http from "network/home";
import { getHomeMultidata } from "network/home";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import RecommendView from "./childComps/RecommendView";
export default {
  components: {
    NavBar,
    RecommendView
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      banners: [],
      recommends: [],
      images: []
    };
  },
  methods: {
    async getBanner() {
      const res = await http.getHomeMultidata();
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      this.images = this.banners.map(v => {
        return v.image;
      });
      console.log(res);
    }
  },

  created() {
    // 1.请求多个数据
    this.getBanner();
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.swiper-slide {
}
.swiper-pagination-bullet-active {
  background-color: var(--color-tint);
}
</style>
