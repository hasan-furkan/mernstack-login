import Cookies from 'js-cookie'

export const cookieSet = (values) => {
    Cookies.set('token', values, { expires: 365 })
}

export const cookieRemove = () => {
    Cookies.remove('token')
}

export const cookieGet = () => {
    Cookies.get('token')
}
