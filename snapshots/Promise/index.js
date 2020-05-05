
/**
* auhtor: iWuzhi
* date: 2020-05-05 10:36:21
*/

/* -------------------------------------------------------------------------- */
/*                                Fake Promise                                */
/* -------------------------------------------------------------------------- */

/**
  eg: new FakePromise((resolve, reject) => {
    setTimeout(() => {
      resolve('Wow, you resolved it.')
    }, 1000);
  }).then(data => {
    console.log(data);  // Wow, you resolved it.
  })
 */


function FakePromise(executor) {
  // store then callbacks wait for resolve call
  this.__thens = [];
  this.__catches = [];
  this.__resolvedData = undefined;

  function asyncListCallHandle(list, data) {
    list.reduce((accData, cur) => {
      // Todo: Async support || eror Handle  | iWuzhi/2020年05月05日12:04:05
      const hData = cur(accData);
      return hData === undefined ? accData : hData;
    }, data);
  }

  const resolve = (data) => {
    asyncListCallHandle(this.__thens, data);
  }
  const reject = (err) => {
    asyncListCallHandle(this.__catches, err);
  }
  executor(resolve, reject);
}

FakePromise.all = function() {}
FakePromise.allSettled = function() {}
FakePromise.any = function() {}
FakePromise.race = function() {}
FakePromise.reject = function() {}
FakePromise.resolve = function() {}

FakePromise.prototype.then = function(cb) {
  // it will not block(while(true) will)
  this.__thens.push(cb);
  return this;
}
FakePromise.prototype.catch = function(cb) {
  this.__catches.push(cb);
  return this;
}
FakePromise.prototype.finally = function(cb) {
  // the last call always be finally
  this.__thens.push(cb);
  this.__catches.push(cb);
  return this;
}

module.exports = FakePromise;