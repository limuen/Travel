<template>
    <div>
        <div @click="ClickAlertC" class="Click-Content">点击我我我我我我</div>
    </div>
</template>

<script>
    export default {
        name:'ClickName',
        methods:{
            ClickAlertC(){
                alert(111)
                // console.log('1111111')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .Click-Content
     position absolute
     left 0
     top 0
     z-index 999

</style>