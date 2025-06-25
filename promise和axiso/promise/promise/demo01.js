class Promise {
    constructor(executor) {
        //添加属性
        this.PromiseState = 'pending'
        this.PromiseResult = null
        this.callbacks = [];

        //保存实例对象this的值
        const self = this;
        function resolve(data) {
            //设置状态只能修改一次
            if (self.PromiseState !== 'pending') return;
            //1、修改对象的状态(promiseState)
            self.PromiseState = 'fulfilled';
            //2、设置对象的结果值(promiseResult)
            self.PromiseResult = data;

            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onResolved(data);
                })
            })
        }
        function reject(data) {
            if (self.PromiseState !== 'pending') return;

            //1、修改对象的状态(promiseState)
            self.PromiseState = 'rejected';


            //2、设置对象的结果值(promiseResult)
            self.PromiseResult = data;

            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onRejected(data);
                })
            })
        }
        //同步调用【执行器函数】

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }
    then(onResolved, onRejected) {
        const self = this;
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason;
            }
        }
        if (typeof onResolved !== 'function') {
            onResolved = value => value;
        }

        return new Promise((resolve, reject) => {
            function callback(type) {
                try {
                    let result = type(self.PromiseResult);
                    if (result instanceof Promise) {
                        result.then(v => {
                            resolve(v)
                        }, r => {
                            reject(r)
                        })
                    } else {
                        resolve(result)
                    }
                } catch (e) {
                    reject(e)
                }
            }
            //调用回调函数

            if (this.PromiseState === 'fulfilled') {
                setTimeout(() => {
                    callback(onResolved);
                })
            }

            if (this.PromiseState === 'rejected') {
                setTimeout(() => {
                    callback(onRejected);
                })
            }

            if (this.PromiseState === 'pending') {
                //保存回调函数
                this.callbacks.push({
                    onResolved: function () {
                        // onResolved();
                        callback(onResolved);
                    },
                    onRejected: function () {
                        // onRejected();
                        callback(onRejected);

                    }
                })
            }
        })




    }

    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

   static reject(value) {
        return new Promise((resolve, reject) => {
            reject(value);
        })
    }

  static  resolve(value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })

            } else {
                resolve(value);
            }
        })
    }
   static all(promise) {
        return new Promise((resolve, reject) => {
            let arr = [];
            let count = 0;
            for (let i = 0; i < promise.length; i++) {
                promise[i].then(res => {
                    count++;
                    arr[i] = res;
                    if (count === promise.length) {
                        resolve(arr);
                    }
                }, r => {
                    reject(r);
                })
            }
        })
    }

   static race(promise) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promise.length; i++) {
                promise[i].then(res => {
                    resolve(res);
                }, r => {
                    reject(r);
                })
            }
        })
    }



}













