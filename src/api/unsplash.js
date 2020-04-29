import axios from 'axios';

export default axios.create({
baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID Mb0o4j0o1xZWdbBpjgiXtY1rWaXgNOC0TEBAo0RqqCk'
        }
})