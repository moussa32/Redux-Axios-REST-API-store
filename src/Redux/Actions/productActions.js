import { ActionTypes as type } from '../Constants/actions-type';

export const setProducts = (products) => {
  return {
    type: type.SET_PRODUCT,
    payload: products
  }
}

export const selectedProduct = (product) => {
  return {
    type: type.SELECTED_PRODUCT,
    payload: product
  }
}