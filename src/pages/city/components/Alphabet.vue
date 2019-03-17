<template>
    <ul class="list">
       <li 
            class="item" 
            v-for="item in letters" 
            :key="item"
            :ref="item"
            @touchstart="handleLetterTouchStart"
            @touchmove="handleLetterTouchMove"
            @touchend="handleLetterTouchEnd"
            @click="handleLetterClick"
        >
        {{item}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props:{
            citys:Object
        },
        computed:{
            letters(){
                const letters= []
                for(let i in this.citys){
                    letters.push(i)
                }
                return letters
            }
        },
        data(){
            return{
                touchStatus: false,
                startY:0,
                timer:null
            }
        },
        updated(){
            this.startY = this.$refs['A'][0].offsetTop
        },
        methods:{
            handleLetterClick(e){
                this.$emit('change',e.target.innerText)
                // console.log(e.target.innerText);
            },
            handleLetterTouchStart(){
                this.touchStatus = true
            },
            handleLetterTouchMove(e){
                // console.log(e)
                if(this.touchStatus){
                    // 函数节流
                    if(this.timer){
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(()=>{
                        // 计算出A离顶部蓝色区域多少高度
                        // const StatusY =this.$refs['A'][0].offsetTop
                        // console.log(StatusY)
                        const touchY = e.touches[0].clientY - 79;
                        // console.log(touchY)
                        const index = Math.floor( (touchY - this.startY) / 20) 
                        // console.log(index)
                        if(index>=0 &&index<this.letters.length){
                            this.$emit('change',this.letters[index])
                        }
                    },16)


                    
                }
            },
            handleLetterTouchEnd(){
                this.touchStatus = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .list
      display flex
      flex-direction column
      justify-content center
      position absolute
      top 1.58rem
      right 0
      bottom 0
      width .4rem
      .item
         text-align center
         line-height .4rem
         color $bgColor
</style>