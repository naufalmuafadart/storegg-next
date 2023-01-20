import callAPI from '../config/api';
import { CheckoutTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getFeaturedGame() {
  const url = `${ROOT_API}/${API_VERSION}/players/landingpage`;

  const response = await callAPI({
    url,
    method: 'GET',
    data: null,
  });
  return response;
}

export async function getDetailVoucher(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/players/${id}/detail`;

  const response = await callAPI({
    url,
    method: 'GET',
    data: null,
  });
  return response;
}

export async function getGameCategory() {
  const url = `${ROOT_API}/${API_VERSION}/players/category`;

  const response = await callAPI({
    url,
    method: 'GET',
    data: null,
  });
  return response;
}

export async function setCheckout(data: CheckoutTypes) {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`;

  const response = await callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
  return response;
}
