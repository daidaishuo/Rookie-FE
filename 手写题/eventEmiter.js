class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, callback) {
        if (!this.events[type]) {
            this.events[type] = []
        }
        this.events[type].push(callback)
    }

    emit(type, ...args) {
        this.events.forEach(cb => {
            cb(...args)
        });
    }

    once(type, callback) {
        const once = (...args) => {
            callback(...args)
            this.off(type, callback)
        }
        one.initialCallback = callback;
        this.on(type, once)
    }

    off(eventName, callback) {
        const callbacks = this._events[eventName] || []

        const newCallbacks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback /* 用于once的取消订阅 */)

        this._events[eventName] = newCallbacks;
    }

}