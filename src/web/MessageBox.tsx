import React from 'react'

type MessageProps = {
  message: any
  onDone: Function
}

const MessageBox: React.FC<MessageProps> = ({ message }) => {
  return (
    <div id="message" className="max-w-sm overflow-hidden rounded shadow-lg">
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{message}</div>
        <p className="text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  )
}

export default MessageBox
