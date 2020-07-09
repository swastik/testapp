import sum from 'testapp/utils/sum';
import { module, test } from 'qunit';

module('Unit | Utility | sum', function() {
  test('it works', function(assert) {
    let result = sum(5, 5);
    assert.equal(result, 10);
  });
});
