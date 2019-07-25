
import { expectType } from 'tsd';
import validateMail = require('.');

expectType<Boolean>(validateMail('me@example.com'));