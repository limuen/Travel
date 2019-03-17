<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" placeholder="输入城市名或拼音" class="search-input">
        </div>
        <div 
            class="search-content" 
            ref="search"
            v-show="keyword"
        >
            <ul>
                <li 
                    v-for="item in CityList" 
                    class="search-item border-bottom"
                    :key="item.id"
                    @click="handlecity(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNodata">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
    import {mapMutations} from 'vuex'
    import Bscroll from 'better-scroll'
    export default {
        name: 'CitySearch',
        props:{
            list:Object
        },
        data(){
            return{
                keyword:'', //输入框
                CityList:[], 
                timer : null //节流
            }
        },
        watch:{
            // 节流函数
            keyword(){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyword){
                    this.CityList=[]
                    return
                }
                this.timer = setTimeout(()=>{
                    const result = [];
                    for(let i in this.list){
                        this.list[i].forEach((value)=>{
                            if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
                                result.push(value)
                            }
                        })
                    }
                    this.CityList = result;
                },100)
            }
        },
        mounted(){
            this.scroll = new Bscroll(this.$refs.search)
        },
        computed:{
            hasNodata(){
                return !this.CityList.length
            }
        },
        methods:{
            handlecity(city){
                // console.log(111)
                // 城市点击完以后跳转首页
                // 第一种写法
                // this.$store.commit('changeCity',city);
                this.changeCity(city)
                this.$router.push('/')
                // alert(city)
            },
            ...mapMutations(['changeCity'])
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .search
     height .72rem
     background $bgColor
     padding 0 .1rem
     .search-input
      box-sizing border-box
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      border-radius .06rem
      color #666
      padding 0 .1rem
    .search-content
     overflow hidden
     position absolute
     left 0
     top 1.58rem
     right 0
     bottom 0
     background #eee
     z-index 1
     .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background #fff
</style>