import test from 'tape';

import { ProductListController } from './ProductListController';

test('ProductListController', (t) => {
  t.equal(typeof ProductListController, 'function')

  t.test('returns a list of all products', (assert) => {
    const products = {
      data: {
        data: [
          {
            "id": "1",
            "productName": "blah",
            "colour": "Patent Black",
            "price": "99",
            "quantity": "5"
          },
          {
            "id": "2",
            "productName": "Suede Shoes",
            "colour": "Blue",
            "price": "42",
            "quantity": "4"
          }
        ]
      }
    }
    const service = {
      getProductList: function() {
        return new Promise(function(resolve, reject) {
          resolve(products);
        });
      }
    }

    assert.equal(ProductListController(service).allProducts, products)
      type: 'raw'
    assert.end();
  });

  t.end();
});
