/* eslint-disable import/prefer-default-export */
/* eslint-disable brace-style */
import axios from '../plugins/axios';
/**
 * Function login Make login request
 * @param {String} email
 * @param {String} password
 */
export async function login(email, password) {
	try {
		const response = await axios.post('/auth/login', JSON.stringify({ email, password }));
		// eslint-disable-next-line indent
    return response.data;
	}
	catch (err) {
		console.log(err);
		return Promise.reject(err);
	}
}