<template>
    <div class="list" ref="warper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wraper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                        class="button-wraper"
                        v-for="item in hot" 
                        :key="item.id"
                        @click="handlecity(item.name)"
                    >
                        <div class="button" >{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div 
                class="area" 
                v-for="(item,key) in list" 
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div 
                    class="item-list"
                    v-for="innerItem in item"
                    :key="innerItem.id"
                     @click="handlecity(innerItem.name)"
                >
                    <div class="item border-bottom">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    import Bscroll from 'better-scroll'
    export default {
        name: 'CityList',
        props:{
            hot:Array,
            list:Object,
            letter:String
        },
        methods:{
            handlecity(city){
                // actions 异步
                // this.$store.dispatch('changeCity',city)
                // mutaions 同步
                // 第一种写法
                // this.$store.commit('changeCity',city)
                // 第二种写法
                this.changeCity(city)
                this.$router.push('/')
                // alert(city)
            },
            ...mapMutations(['changeCity'])
        },
        computed:{
            ...mapState({
                currentCity:'city'
            })
        },
        mounted(){
            this.scroll = new Bscroll(this.$refs.warper)
        },
        watch:{
            letter(){
                if(this.letter){
                    // 添加下标是因为上边遍历出来的是数组refs也是 
                    const element = this.$refs[this.letter][0]
                    
                    this.scroll.scrollToElement(element)

                }
                
            }
        }
        
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .border-topbottom
     &:before
      border-color #ccc
     &:after
      border-color #ccc
    .border-topbottom
     &:before
      border-color #ccc
    .list
     overflow hidden
     position absolute
     left 0
     top 1.58rem
     right 0
     bottom 0
     .title
      line-height .54rem
      background #eeeeee
      padding-left .2rem
      color #666
      font-size .26rem
     .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wraper
       width 33.33%
       float left
       .button
        margin .1rem
        padding .1rem 0rem
        border-radius .06rem
        text-align center
        border .02rem solid #ccc
     .item-list
      .item
       line-height .76rem
       color #666
       padding-left .2rem
</style>