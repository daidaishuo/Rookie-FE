// 三、实现一个 task 函数，可以进行时间和工作调度
// [ > … ] 表示调用函数后的打印内容


// > William is notified

// arrange('William').wait(5).do('commit');
// > William is notified
// 等待 5 秒
// > Start to commit

// arrange('William').waitFirst(5).do('push');
// 等待 5 秒
// > Start to push
// > William is notified

class Task {
    constructor(name) {
        this.name = name
        this.task = []
        this.task.push(() => console.log(this.name))
    }
    wait(time) {
        
        this.task.push(() => {
            return new Promise((res) => {
                setTimeout(() => {
                    res()
                }, time * 1000)
            })
        })
        return this;
    }
    waitFirst(time) {
        this.task.unshift(() => {
            return new Promise((res) => {
                setTimeout(() => {
                    res()
                }, time * 1000)
            })
        })
        return this;
    }

    async do(event) {
        this.task.push(() => {
            console.log(`Start to commit ${event}`)
        });
        for (const p of this.task) {
            await p()
        }
        return this
    }
}
let task = new Task('William')

task.wait(5).do('commit');