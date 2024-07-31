// Test upload multiple files

const request = require('supertest');
const app = require('../index');

describe('Test upload multiple files', () => {
    it('should upload multiple files', async () => {
        const res = await request(app)
            .post('/upload')
            .attach('media', 'test/fixtures/test1.txt')
            .attach('media', 'test/fixtures/test2.txt')
            .attach('media', 'test/fixtures/test3.txt');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Files uploaded successfully.');
    });
})