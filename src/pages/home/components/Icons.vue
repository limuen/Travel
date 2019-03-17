<template>
    
    <div class="Icons">
        <swiper :options="swiperOption" >
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="Icon" v-for="(item,index) in page" :key="index">
                    <div class="Icon-img">
                        <img class="Icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    
</template>

<script>
    export default {
        name: 'Icons',
        props:{
            list:Array
        },
        data(){
            return{
                swiperOption:{
                    autoplaty:false
                }
            }
            
        },
        computed:{
            pages(){
                const pages = [];
                this.list.forEach((item,index)=>{
                    const page = Math.floor(index / 8)
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    @import '~styles/mixins.styl';
    .icons >>>.swiper-container
     height 0
     padding-bottom 50%
    .Icon
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      position relative
      .Icon-img
       position absolute
       left 0
       top 0
       right 0
       bottom .44rem
       box-sizing border-box
       padding .1rem
       .Icon-img-content
        height 100%
        display block
        margin 0 auto
      .icon-desc
       position absolute
       left 0
       right 0
       bottom 0
       height .44rem
       line-height .44rem
       text-align center
       color $DarkColor
       ellipsis()
</style>