import Phaser from 'phaser'

let instance = null
class EventDispatcher extends Phaser.Events.EventEmitter {
  constructor() {
    super()
    if (!instance) {
      instance = this
    }
    return instance
  }

  static getInstance() {
    if (!instance) {
      instance = new EventDispatcher()
    }
    return instance
  }
}

export default EventDispatcher
