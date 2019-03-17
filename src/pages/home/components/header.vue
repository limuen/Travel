<template>
    <div class="header">
        <div class="Header-left">
          <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="Header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题
          </div>
          <router-link to="/City">
            <div class="Header-right">
              <!-- {{this.$store.state.city}} -->
              {{this.city}}
              <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
          </router-link>
        
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "homeheader",
  computed:{
    ...mapState(['city'])
    // ...mapGetters(['doubleCity'])
  }
};
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl';
    .header
      display flex
      line-height $headerHeight
      background $bgColor
      color #fff
      .Header-left
        width .64rem
        float left
        .back-icon
          text-align center
          font-size .4rem
      .Header-right
        min-width 1.04rem
        padding 0 .1rem
        float right
        text-align center
        color #fff
        .arrow-icon
          font-size .24rem
          margin-left -.04rem
      .Header-input
        padding-left .2rem
        flex 1
        height .64rem
        border-radius .1rem
        background #ffffff
        margin-top .12rem
        height .64rem
        margin-left .2rem
        color #ccc
        line-height .64rem
</style>