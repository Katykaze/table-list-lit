import axios from 'axios';
//import formatData from '../../utils/formatData';

const basePath = 'https://dogapi.dog/api/v2/breeds';

export default {
    basePath,
    list: async () => {
        const { data } = await axios.get(`${basePath}`)
        return data.data;
    }
}