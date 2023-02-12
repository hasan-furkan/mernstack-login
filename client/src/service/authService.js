import axios from "axios";

const headers = {
  'Content-Type': 'application/json',
}

export const registerService = async (values) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, values, {
    headers: headers
  })
}

export const loginService = async (values) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, values, {
    headers: headers
  })
}
