



const FakePromise = require('../Promise');

describe('snapshots/Promise test', () => {
  it('it should be resolved', async () => {
    return new FakePromise((resolve) => {
       setTimeout(() => {
        resolve('Wow, now I resolved.');
      }, 1000);
    }).then(data => {
      expect(data).toBe('Wow, now I resolved.');
      return 'Hey, I changed data here...';
    }).catch(e => {
      // Todo: Function mock here, check the call times | iWuzhi/2020年05月05日11:40:22
      console.log('here shold not call');
    }).then(data => {
      expect(data).toBe('Hey, I changed data here...');
    }).finally(data => {
      expect(data).toBe('Hey, I changed data here...');
    })
  });
})