import axios from "axios";

const headers = {
  'Content-Type': 'application/json',
}

export const registerService = async (values) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, values, {
    headers: headers
  })
}

export const verificationEmailService = async (token) => {
  return await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/confirmation/${token}`)
}
