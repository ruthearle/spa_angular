import test from 'tape';
import { ProductListService } from './ProductListService';

let service;

test.only('ProductListService', (t) => {
  service = ProductListService;

  t.equal(typeof service, 'function');

  t.test('gets a list of products', (assert) => {
    const products = [{
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
    }]
    assert.equal(service.allProducts(), products)
    assert.end();
  });

  t.end();
});
