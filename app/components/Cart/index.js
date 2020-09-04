import React from 'react';

import { Button } from 'components/_ui-elements';
import { ShoppingCart } from '@material-ui/icons';

export default function Cart() {
  return (
    <Button>
      <ShoppingCart />
    </Button>
  );
}
