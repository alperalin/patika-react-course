import axios from 'axios';

async function getData(userId) {
	const userInfo = await axios
		.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
		.then((response) => response.data)
		.catch((error) => console.log(error));

	const userPosts = await axios
		.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
		.then((response) => response.data)
		.catch((error) => console.log(error));

	userInfo['posts'] = [...userPosts];

	return userInfo;
}

export default getData;
