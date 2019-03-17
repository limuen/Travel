<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :list="swiperList"></HomeSwiper>
        <HomeIcons :list="iconsList"></HomeIcons>
        <HomeRecommend :list="Recommend"></HomeRecommend>
        <HomeWeekend :list="WeekendList"></HomeWeekend>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: "Home",
  data(){
      return{
          swiperList:[],
          iconsList:[],
          Recommend:[],
          WeekendList:[],
          lastCity:''
      }
  },
  components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
  },
  mounted(){
      console.log('mounted')
      this.getHomeInfo();
      this.lastCity = this.city;
  },
  methods:{
      getHomeInfo(){
          axios.get('/api/index.json?city=' + this.city)
          .then(resp=>{
              console.log(resp);
              if(resp.data.ret && resp.data.data){
                  this.swiperList = resp.data.data.swiperList
                  this.iconsList = resp.data.data.iconList
                  this.Recommend = resp.data.data.recommendList
                  this.WeekendList = resp.data.data.weekendList
              }
          })
          .catch(error=>{
              console.log(error)
          })
      }
  },
  computed:{
      ...mapState(['city'])
  },
  activated(){
      if(this.lastCity !== this.city){
          this.lastCity = this.city
          this.getHomeInfo();
      }
  }
};
</script>

<style>
    .home{
        font-size: 50px;
    }
</style>