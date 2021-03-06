import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useEffect, useState } from 'react'; 

interface Data {
    token: string;
    setToken: any;
    signed: boolean;
}

export const AuthContext = createContext<Data>({} as Data);

const AuthProvider = (props:any) => {

    const [authorization, setAuthorization] = useState('');
    const [ token, setToken] = useState();
    const [checkLogIn, setCheckLogIn] = useState(false);

    const user_token = async () => {
        let token = '';
        try{
            const value = await AsyncStorage.getItem('token');
            if(value !== null) {
                token = 'Bearer '.concat(value);
                return token;
            }
        }   catch(e) {
            console.log('Sem token');
        }
        return token;
    }

    function checkIsLoggedIn() {
        if(authorization) {
            setCheckLogIn(true);
        }else {
            setCheckLogIn(false);
        }
    }

    useEffect(() => {
        user_token().then((value) => setAuthorization(value));
    },[]);

    useEffect(() => {
        checkIsLoggedIn();
    },[authorization, checkLogIn])
    
    return(
        <AuthContext.Provider value = {{token: authorization, setToken: setAuthorization, signed: checkLogIn}} >
            {props.children}
        </AuthContext.Provider>
    );
} 

export default AuthProvider;