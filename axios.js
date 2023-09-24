import axios from 'axios';

const baseURL = 'https://assessmentdmrn-default-rtdb.firebaseio.com/';

const instance = axios.create({ baseURL });

instance.converter = (data) => {
    const ids = Object.keys(data);
    const objs = Object.values(data);
    const dados = objs.map((obj, index) => {
        return { id: ids[index], ...obj };
    });

    return dados; 
};

export default instance;
