import api from '../api';

export default{
    async createShopList(){
        try {
            const response = await api.post('/shopLists')
            return response;
        }catch(err){
            console.log(err)
        }


    },
    async listShopList(user_id:any){
        try {
            const response =await api.post(`/putShopList/:${user_id}`);
            return response;
        }catch(err){
            console.log(err);
        }
    },

    // async showShopList(shoplist_id:any){
    //     try {
    //         const response = await api.get(`/shopLists/${shoplist_id}`);
    //         return response;
    //     }catch(err){
    //         console.log(err);
    // }
};