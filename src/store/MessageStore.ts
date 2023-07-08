import { create } from 'zustand'

const useMessageStore = create((set) => ({
  message: {
    "jack": "hello",
  },
    addMessage: (name, message) => set((state) => {
        if(name in state.message) 
        {
            var temp = { message: { ...state.message} };
            temp.message[name] = message;
            return temp;
        }
        return { message: { ...state.message, [name]: message } }
    })
}))

export default useMessageStore;