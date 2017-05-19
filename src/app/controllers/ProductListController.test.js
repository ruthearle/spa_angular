import test from 'tape';
import { ProductListController } from './ProductListController';

test('ProductListController', (t) => {
  t.equal(typeof ProductListController, 'function')

  t.test('title() returns "Hello"', (assert) => {
    const prodListCont = new ProductListController('hello')
    assert.equal(prodListCont.title, 'hello')
    assert.end();
  });

  t.test('price() returns a number', (assert) => {
    const prodListCont = new ProductListController('', 2)
    assert.equal(prodListCont.price, 2)
    assert.end()
  });

  t.test('description() returns a string', (assert) => {
    const prodListCont = new ProductListController('', 0, 'description')
    assert.equal(prodListCont.description, 'description')
    assert.end()
  });

  t.test('quantity() returns a number', (assert) => {
    const prodListCont = new ProductListController('', 0, 'description', 2)
    assert.equal(prodListCont.quantity, 2)
    assert.end()
  });
  t.end();
});
