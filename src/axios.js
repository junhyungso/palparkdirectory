import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://palparkdirectory-default-rtdb.firebaseio.com/'
})

export default instance;