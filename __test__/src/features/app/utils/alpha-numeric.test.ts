import { alphaNumeric } from '@/features/app/utils/alpha-numeric.util'

it('Alpha numeric function should be return boolean (true)', () => {
	expect(alphaNumeric('abc123')).toBeTruthy()
})

it('Alpha numeric function should be return boolean (false)', () => {
	expect(alphaNumeric('abc123!')).toBeFalsy()
})
