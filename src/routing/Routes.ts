export const BASE_URL = process.env.REACT_APP_API_URL

// BACK
export const USERS_URL: string = `${BASE_URL}/users`
export const USER_URL: string = `${BASE_URL}/users/:id`

// WEB
export const HOME_URL: string = '/'
export const USER_DETAIL_URL: string = '/user/:id'

export function generateUrl(url: string, value: string) {
    return url.replace(':id', value)
}
