import { z } from 'zod'
import { useForm, zodResolver } from '@mantine/form'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import userAPI from '../../apis/userAPI'
import regex from '../../shared/regex'
import useAuthStore from '../../shared/useAuthStore'

const loginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().regex(regex.password, {
    message:
      'Your password must be between 6 and 12 characters and contains only alphanumerics.'
  })
})

type LoginFormData = Required<z.infer<typeof loginFormSchema>>

const useLoginForm = () => {
  const form = useForm<LoginFormData>({
    validate: zodResolver(loginFormSchema),
    validateInputOnBlur: true,
    initialValues: {
      email: '',
      password: ''
    }
  })

  const navigate = useNavigate()

  const loginMutation = useMutation({
    ...userAPI.login(),
    onSuccess(data) {
      useAuthStore.setState(data)

      navigate('/home')
    }
  })

  const handleSubmit = form.onSubmit(values => {
    loginMutation.mutate(values)
  })

  const isPending = loginMutation.isPending

  return { form, handleSubmit, isPending }
}

export default useLoginForm
