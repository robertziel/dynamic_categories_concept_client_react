import produce from 'immer';

import { ADD_TO_CART } from './constants';

export const initialState = {
  cart: [],
};

const cartProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TO_CART:
        draft.cart = [...state.cart, action.item];
        break;
    }
  });

export default cartProviderReducer;
