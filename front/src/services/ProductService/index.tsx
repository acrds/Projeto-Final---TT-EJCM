import api from '../api';

export default{
    async listProduct(){
        try {
            const response =await api.get('products');
            return response;
        }catch(err){
            console.log(err);
        }
    },

    async showProduct(product_id:any){
        try {
            const response = await api.get(`products/${product_id}`);
            return response;
        }catch(err){
            console.log(err);
    }
}};
