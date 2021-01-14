import axios from 'axios'
import { User } from '../models/User'
import { generateUrl, USERS_URL, USER_URL } from '../routing/Routes'
import { parseError } from './ErrorService';

export async function getUsers(): Promise<User[]> {
    try {
        const response = await axios.get<User[]>(USERS_URL)
        return response.data
    } catch (error) {
        throw new Error(parseError(error.response.status))
    }
}

export async function createUser(user: User): Promise<User> {
    try {
        const response = await axios.post<User>(USERS_URL, user)
        return response.data
    } catch (error) {
        throw new Error(parseError(error.response.status))
    }
}

export async function getUser(userId: string): Promise<User> {
    try {
        const response = await axios.get<User>(generateUrl(USER_URL, userId))
        return response.data
    } catch (error) {
        throw new Error(parseError(error.response.status))
    }
}

export async function updateUser(userId: string, user: User): Promise<User> {
    try {
        const response = await axios.put<User>(generateUrl(USER_URL, userId), user)
        return response.data
    } catch (error) {
        throw new Error(parseError(error.response.status))
    }
}

export async function deleteUser(userId: string): Promise<string> {
    try {
        const response = await axios.delete<string>(generateUrl(USER_URL, userId))
        return response.data
    } catch (error) {
        throw new Error(parseError(error.response.status))
    }
}