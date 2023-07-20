const PUBLIC_URL = 'http://localhost:8080/'
const DEFAULT_IMAGE_URL = PUBLIC_URL + 'assts/guapen.png'
// Quest status: Available (not taken) -> In Progress (taken, not complete) -> completed (complete, rewards available) -> Archived(reward taken)
const messageData = [
  {
    sender: '0x123',
    message: 'Hello'
  },
  {
    sender: 'jack',
    message: 'Plant one seed in the garden'
  },
  {
    sender: 'zack',
    message: 'Hello'
  }
]

export default messageData
