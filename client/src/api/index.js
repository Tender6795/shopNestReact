import { get, post, patch, httpDelete } from './axios';

/* auth requests */
export const login = (body) => post('/auth/login', body);
export const registration = (body) => post('/auth/registration', body);