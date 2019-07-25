import test from 'ava';
import validateMail from '.';

test('Check valid emails', t => {
	t.is(validateMail('test@email.com'), true);
	t.is(validateMail('test3@email.com'), true);
	t.is(validateMail('test.com@email.com'), true);
	t.is(validateMail('test77777@email.org'), true);
});

test('Check invalid emails', t => {
	t.not(validateMail('test @email.com'), true);
	t.not(validateMail('sometestemail.com'), true);
	t.not(validateMail('sometestemails.com'), true);
	t.not(validateMail('some test@email.com'), true);
	t.not(validateMail('sometest@ema ils.com'), true);
	t.not(validateMail('someinvalid@emailscom'), true);
});
