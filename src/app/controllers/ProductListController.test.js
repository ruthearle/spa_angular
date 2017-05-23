import test from 'tape';
import { ProductListController } from './ProductListController';

test('ProductListController', (t) => {
  t.equal(typeof ProductListController, 'function')

  t.test('title() returns a "hello"', (assert) => {
    const prodListCont = new ProductListController('hello')
    assert.equal(prodListCont.title, 'hello')
    assert.test('title() returns a string', (expect) => {
      expect.equal(typeof prodListCont.title, 'string');
      expect.end()
    });
    assert.end();
  });

  t.test('price() returns the price to two decimal places', (assert) => {
    const prodListCont = new ProductListController('', 2)
    assert.equal(prodListCont.price, 2.00)
    assert.test('price() returns a number', (expect) => {
      expect.equal(typeof prodListCont.price, 'number');
      expect.end();
    });
    assert.end()
  });

  t.test('quantity() returns the number 2', (assert) => {
    const prodListCont = new ProductListController('', 0, 'description', 2)
    assert.equal(prodListCont.quantity, 2)
    assert.test('quantity() returns a number', (expect) => {
      expect.equal(typeof prodListCont.quantity, 'number');
      expect.end();
    });
    assert.end()
  });

  t.test('colour() returns a the colour', (assert) => {
    sentaient
    const prodListCont = new ProductListController('', 0, 'description', 2, 'black')
    assert.equal(prodListCont.colour, 'black')
    assert.test('colour() returns a string', (expect) => {
      expect.equal(typeof prodListCont.colour, 'string');
      expect.end();
    });
    assert.end()
  });
  t.end();
});
