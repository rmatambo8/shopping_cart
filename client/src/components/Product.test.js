import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Product  from './Product';

test('product has title', ()=> {
  const props = {
    product: {
      id: 1,
      title: "Iphone",
      price: 20,
      quantity: 10,
    },
    addItem: () => {},
    removeItem: () => {},
    removeItem: () => {},
    removeProduct: () => {},
    onProductChange: () => {},
  }

  const product = render(<Product {...props} />);

  expect(product.container).toHaveTextContent("Iphone");
});
