import { create } from 'zustand'

const useMessageStore = create((set) => ({
  message: {},
  addSender: (name) => set((state) => ({ message: { ...state.message, name: "" } })),
    addMessage: (name, message) => set((state) => {
        if(name in state.message) 
        {
            var temp = { message: { ...state.message} };
            temp.message[name] = message;
            return temp;
        }
            return { message: { ...state.message, name: message } }
        }
    )
}))

export default useMessageStore;