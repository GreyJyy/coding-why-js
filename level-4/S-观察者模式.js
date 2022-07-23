// 当对象之间存在一对多的依赖关系时，对象的状态发生改变，所有依赖它的对象都会收到通知，这就是观察者模式

//被观察者
class Subject {
  constructor() {
    this.observerList = [] //观察者列表
  }

  //主动添加观察者
  addObserver(observer) {
    this.observerList.push(observer)
  }

  //主动通知观察者状态改变
  notifyObserver(message) {
    this.observerList.length === 0
      ? console.log('observer list is empty')
      : this.observerList.forEach(observer => observer.notified(message))
  }

  //移除某些观察者
  removeObserver(observers) {
    observers.forEach(item => {
      const index = this.observerList.findIndex(
        matchedItem => matchedItem.name === item.name
      )
      this.observerList.splice(index, 1)
    })
  }

  //清空观察者列表
  clearObservers() {
    this.observerList = []
  }
}

//观察者
class Observer {
  constructor(name, subject) {
    this.name = name
    if (subject) {
      subject.addObserver(this) //观察者主动申请加入观察者列表
    }
  }

  //当观察到主体状态改变时需要做出的响应
  notified(message) {
    console.log(`${this.name} got message: ${message}`)
  }
}

//test
const dep = new Subject()
const watcher1 = new Observer('watcher1', dep)
const watcher2 = new Observer('watcher2', dep)
const watcher3 = new Observer('watcher3')
dep.notifyObserver('state first change') //watcher1,watcher2
dep.addObserver(watcher3)
dep.notifyObserver('state second change') //watcher1,watcher2,watcher3
dep.removeObserver([watcher1, watcher2])
dep.notifyObserver('state third change') //watcher3
dep.clearObservers()
dep.notifyObserver('state fourth change') //observer list is empty
