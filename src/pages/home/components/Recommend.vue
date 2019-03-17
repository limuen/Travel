<template>
    <div>
        <div class="recommend-title">
            热销推荐
        </div>
        <ul>
            <router-link 
                class="recommend-itme border-bottom" 
                v-for="item in list" 
                :key="item.id" 
                tag="li"
                :to="'/detail/' + item.id"
            >
                <img :src="item.imgUrl" class="item-img" alt="">
                
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="itme-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
    
</template>

<script>
    export default {
        name: 'recommend',
        props:{
            list:Array
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
     line-height .8rem
     background #eee
     text-indent .2rem
     margin-top .2rem
    .recommend-itme
     overflow hidden
     display flex
     height 1.9rem
     .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
     flex 1
     padding .1rem
     min-width 0
     .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
     .itme-desc 
      line-height .4rem
      color #ccc
      ellipsis()
     .item-btn
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      margin-top .16rem
      color #fff
      line-height .44rem
</style>