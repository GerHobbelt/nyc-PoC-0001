
import assert from 'assert';



//import demo from '../index.js';
import demo from '../lib/modern.js';


describe('demo', () => {
	it('is supposed to fail, but once fixed, all tests should pass', () => {
		assert.ok(true, 'pass!');
	});

	it('and again', () => {
		assert.strictEqual(demo('a/b/c'), 'a/b');
	});

	it('... and again: pass', () => {
		assert.throws(() => {
			demo(null);
		}, /The "path" argument/);
	});
});
