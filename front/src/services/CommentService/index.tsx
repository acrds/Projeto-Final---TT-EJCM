import api from '../api';

export default{
    async listComment(){
        try {
            const response =await api.get('/products/comments');
            return response;
        }catch(err){
            console.log(err);
        }
    },

    async showComment(comment_id:any){
        try {
            const response = await api.get(`/products/comments/${comment_id}`);
            return response;
        }catch(err){
            console.log(err);
    }
}};