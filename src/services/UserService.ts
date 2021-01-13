import axios from 'axios'
import { User } from '../models/User'
import { generateUrl, USERS_URL, USER_URL } from '../routing/Routes'

export function getUsers() {
    return axios.get<User[]>(USERS_URL);
}

export function getUser(userId: string) {
    return axios.get<User>(generateUrl(USER_URL, userId));
}