import test from 'tape';
import { ProductListController } from './controllers/ProductListController';

test('ProductListController', (t) => {
  t.plan(2);

  t.equal(ProductListController.name(), 'Hello')

  t.test('name() returns "Hello"', (assert) => {
    assert.equal(ProductListController.name(), 'Hello')
    assert.end();
  });
  t.end();
});
