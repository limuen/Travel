<template>
    <div>
      <CityHeader></CityHeader>
      <CitySearch :list="citys" ></CitySearch>
      <CityList 
        :list="citys" 
        :hot="hotCities"
        :letter="letter"
      ></CityList>
      <CityAlphabet 
        :citys="citys" 
        @change="handleLetterChange"
      ></CityAlphabet>
    </div>
</template>

<script>
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/list'
    import CityAlphabet from './components/Alphabet'
    import axios from 'axios'
    export default {
        name: 'City',
        data(){
            return{
                hotCities:[],
                citys:{},
                letter:''
            }
        },
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        mounted(){
            this.getCityInfo()
        },
        methods:{
            getCityInfo(){
                axios.get('/api/city.json')
                .then(resp=>{
                    console.log(resp);
                    if(resp.data.ret && resp.data.data){
                        this.hotCities = resp.data.data.hotCities;
                        this.citys = resp.data.data.cities;
                    }
                })
                .catch(error=>{
                    console.log(error)
                })
            },
            handleLetterChange(letter){
                this.letter = letter
                // console.log(letter);
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>