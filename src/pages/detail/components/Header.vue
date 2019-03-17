<template>
    <div>
        <router-link 
            class="header-abs"
            tag="div"
            to="/"
            v-show="showAbs"
        >
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div 
            class="header-fixed"
            v-show="!showAbs"
            :style="opacityStyle"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
        
    </div>
    
</template>

<script>
    export default {
        name: 'DetailHeader',
        data(){
            return{
                showAbs:true,
                opacityStyle:{
                    opacity:0
                }
            }
        },
        methods:{
            handleScroll(){
                // console.log('scroll')
                // console.log(document.documentElement.scrollTop)
                const top = document.documentElement.scrollTop;
                if(top>55){
                    let opacity = top / 110;
                    opacity = opacity  > 1 ? 1 : opacity;
                    this.opacityStyle = {
                        opacity
                    }
                    this.showAbs = false;
                }else{
                    this.showAbs = true;
                }
            }
        },
        activated(){
            window.addEventListener('scroll',this.handleScroll)
        },
        deactivated(){
            window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .header-abs
      position absolute
      left .2rem
      top .2rem
      width .8rem
      height .8rem
      border-radius .4rem
      text-align center
      line-height .8rem
      background rgba(0,0,0,.8)
      .header-abs-back
        color #ffffff
        font-size .4rem
    .header-fixed
        position fixed
        left 0
        top 0
        right 0
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #ffffff
        background $bgColor
        font-size .32rem
        z-index 2
        .header-fixed-back
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem 
            color #ffffff
</style>