import axios from 'axios';


const basePath = 'https://dogapi.dog/api/v2/breeds';

export default {
    basePath,
    list: async () => {
        const { data } = await axios.get(`${basePath}`)
        return data.data;
    },
    getDog: async (id) => {
        const { data } = await axios.get(`${basePath}/${id}`);
        return data.data;
    }
}