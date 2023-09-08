import { useForm } from '@mantine/form'
import useSceneDataStore from '../../../multiplayer/useSceneDataStore'
import { sendEvent } from '../../../multiplayer/socket'

const useChatMessageForm = () => {
  const form = useForm({
    initialValues: {
      message: ''
    }
  })

  const handleSubmit = form.onSubmit(values => {
    const sceneData = useSceneDataStore.getState()

    if (sceneData) {
      sendEvent({
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
