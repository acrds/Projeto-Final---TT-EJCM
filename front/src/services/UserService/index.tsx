import api from '../api';

export default{
    async listUser(){
        try {
            const response =await api.get('users');
            return response;
        }catch(err){
            console.log(err);
        }
    },

    async showUser(user_id:any){
        try {
            const response = await api.get(`users/${user_id}`);
            return response;
        }catch(err){
            console.log(err);
    }
}};