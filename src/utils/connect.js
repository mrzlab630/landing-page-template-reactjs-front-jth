import axios from 'axios';

import { auth } from './authToken';
import {
  dbHost,
  dbPathAuth,
  dbPathRegister,
  dbProtocol,
  dbPort,
} from './../.config/config.development.json';

export const connect = {
  isAuthenticated: false,

  authenticate({ user, password }, callback) {
    // Request API, set token and user.
    axios
      .post(`${dbProtocol}://${dbHost}:${dbPort}/${dbPathAuth}`, {
        identifier: user,
        password: password,
      })
      .then(response => {
        // Handle success.
        // console.debug('User profile', response.data.user);
        // console.debug('User token', response.data.jwt);
        auth.setToken(response.data.jwt, true, 'jwtToken');
        auth.setUserInfo(response.data.user, true, 'jwtUser');
        this.isAuthenticated = true;
        // console.debug(this.isAuthenticated);
        if (callback) callback();
      })
      .catch(error => {
        // Handle error.
        console.debug('An error occurred:', error);
      });
  },

  signout(callback) {
    this.isAuthenticated = false;
    auth.clearToken('jwtToken');
    auth.clearUserInfo('jwtUser');
    if (callback) callback();
  },

  register(values) {
    const { email, password, phone, businessType } = values;
    return axios
      .post(`${dbProtocol}://${dbHost}:${dbPort}/${dbPathRegister}`, {
        email: email,
        phone: phone,
        username: email,
        password: password,
        businessType: businessType
      })
  },
};
