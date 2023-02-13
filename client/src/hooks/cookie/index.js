import Cookies from 'js-cookie'

export const cookieSet = (values) => {
    Cookies.set(process.env.REACT_APP_COOKIE_NAME, values, { expires: 365 })
}

export const cookieRemove = () => {
    Cookies.remove(process.env.REACT_APP_COOKIE_NAME)
}

export const cookieGet = () => {
  return Cookies.get(process.env.REACT_APP_COOKIE_NAME) || false
}
