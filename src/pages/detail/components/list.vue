<template>
    <div>
        <div 
            class="item" 
            v-for="(item,index) of list"
            :key="index"
        >
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div
                class="item-children" 
                v-if="item.children"
            >
                <DetailList :list="item.children"></DetailList>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'DetailList',
        props:{
            list:Array
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .item-children
      padding 0rem .2rem
    .item-title
      line-height .8rem
      font-size .32rem
      padding 0rem .2rem
      .item-title-icon
        position relative
        left .06rem
        top .06rem
        display: inline-block
        width: .36rem
        height: .36rem
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem 3rem
</style>