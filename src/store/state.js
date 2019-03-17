let defaulcity = '杭州'

try{
    if(localStorage.city){
        defaulcity = localStorage.city
    }
}catch(e){}

export default {
    city: defaulcity
}