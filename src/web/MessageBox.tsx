import React, { ReactElement,  } from 'react'
import { useState } from 'react';

type MessageProps={
    message:any
    onDone: Function
}

const MessageBox:React.FC<MessageProps> = ({ message, onDone }) => {
	return (<div id="message" className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{message}</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </div>
        );
}


export default MessageBox