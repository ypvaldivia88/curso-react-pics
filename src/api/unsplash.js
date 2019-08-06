import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID adae5ce694cb00602f4a15c8d787316572179a22098f6e324aa752d545ed6a54'
    }
});