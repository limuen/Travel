<template>
    <div>
        <div class="recommend-title">
            周末去哪儿
        </div>
        <ul>
            <li class="recommend-itme border-bottom" v-for="item in list" :key="item.id">
                <div class="item-img-warper">
                        <img :src="item.imgUrl" class="item-img" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="itme-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
    
</template>

<script>
    export default {
        name: 'weekend',
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
    .item-img-warper
     overflow hidden
     height 0
     padding-bottom 37.09%
     .item-img
      width 100%
    .item-info
     padding .1rem
     .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
     .itme-desc 
      line-height .4rem
      color #ccc
      ellipsis()
</style>