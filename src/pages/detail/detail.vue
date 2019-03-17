<template>
    <div>
        <DetailBanner 
            :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"
        ></DetailBanner>
        <DetailHeader></DetailHeader>
        <div class="content">
            <DetailList :list='list'></DetailList>
        </div>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/list'
    import axios from 'axios'
    export default {
        name: 'detail',
        data(){
            return{
                sightName:'',
                bannerImg:'',
                gallaryImgs:[],
                list:[]
            }
        },
        methods:{
            getDetailInfo(){
                axios.get(
                    '/api/detail.json',
                    {
                    params:{
                        id:this.$route.params.id
                    }
                })
                .then(response=>{
                    console.log(response);
                    this.sightName = response.data.data.sightName;
                    this.bannerImg = response.data.data.bannerImg;
                    this.gallaryImgs = response.data.data.gallaryImgs;
                    this.list = response.data.data.categoryList;
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        },
        mounted(){
            this.getDetailInfo()
        },
        components:{
            DetailBanner,
            DetailHeader,
            DetailList
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .content
      height 50rem
</style>