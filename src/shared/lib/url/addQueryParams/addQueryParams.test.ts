import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with params', () => {
        const params = getQueryParams({
            test: 'value',
            q: 'test',
        });
        expect(params).toBe('?test=value&q=test');
    });
    test('test with undefined params', () => {
        const params = getQueryParams({
            test: 'value',
            q: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
