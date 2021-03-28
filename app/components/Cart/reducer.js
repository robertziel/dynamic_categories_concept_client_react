import produce from 'immer';

import { ADD_TO_CART } from './constants';

export const initialState = {
  cart: {},
};

const cartProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TO_CART:
        const prevAmount = parseInt(draft.cart[action.item.id].amount) || 0;

        draft.cart = state.cart;
        draft.cart[action.item.id] = {
          ...action.item,
          amount: prevAmount + parseInt(action.item.amount),
        };
        break;
    }
  });

export default cartProviderReducer;
