import test from 'tape';
import { ProductListService } from './ProductListService';

test('ProductListService', (t) => {
  t.plan(1)

  t.equal(typeof ProductListService, 'function');

  t.end();
});
