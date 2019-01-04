import test from 'ava';
import valid from '.';

test('Test', t => {
	t.is(valid('test@email.com'), true);
	t.is(valid('test @email.com'), false);
});