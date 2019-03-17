export default{
    changeCity(state,city){
        state.city = city
        // localStorage.city = city
        try{
            localStorage.city = city 
        }catch(e){}
    }
}