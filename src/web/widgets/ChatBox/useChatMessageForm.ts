import { useForm } from '@mantine/form'
import useGameStore from '../../../data/useGameStore'
import sendSceneEvent from '../../../multiplayer/sendSceneEvent'

const useChatMessageForm = () => {
  const form = useForm({
    initialValues: {
      message: ''
    }
  })

  const handleSubmit = form.onSubmit(values => {
    const sceneData = useGameStore.getState().sceneData

    if (sceneData) {
      sendSceneEvent({
        event: 'send_scene_message',
        message: {
          senderId: sceneData.playerId,
          content: values.message
        },
        sceneKey: sceneData.sceneKey
      })

      form.reset()
    }
  })

  return { form, handleSubmit }
}

export default useChatMessageForm
