<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in banners" :key="item._id">
        <a :href="item.link">
          <img :src="item.image" style="width:100%;padding-top:44px" alt="" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <recommend-view :recommends="recommends" />
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      :titles="['产品', '服务', '精选']"
    ></tab-control>
    <ul>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import http from "network/home";
import { getHomeMultidata, getHomeGoods } from "network/home";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
export default {
  components: {
    NavBar,
    RecommendView,
    FeatureView,
    TabControl
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
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      banners: [],
      recommends: [],
      images: []
    };
  },
  methods: {
    async getBanner() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        this.images = this.banners.map(v => {
          return v.image;
        });
        // console.log(res);
      });
    },
    getHomeWares() {
      getHomeGoods().then(res => {
        // const page = this.goods[type].page + 1;
        // this.goods[type].list.push(...res.data.list);
        console.log(res);
      });
    }
  },

  created() {
    // 1.请求多个数据
    this.getBanner();

    // 2.请求商品数据
    this.getHomeWares("pop");
    // this.getHomeWares("new");
    // this.getHomeWares("sell");
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.swiper-pagination-bullet-active {
  background-color: var(--color-tint);
}
</style>
