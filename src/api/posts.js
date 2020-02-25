import axios from 'axios';

export const posts = axios.get('/user/12345').then(function(response) {
	console.log(response);
});
