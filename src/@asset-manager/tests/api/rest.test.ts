import { Rest } from '../../services';

describe('running apis', function () {
  test('testing rest api', async function () {
    const res = await Rest.req({ url: 'https://jsonplaceholder.typicode.com/posts/1' });

    expect(res.userId).toBe(1);
  });
});
