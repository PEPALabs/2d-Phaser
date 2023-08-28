import { z } from 'zod'
import { useForm, zodResolver } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import userAPI from '../../apis/userAPI'
import regex from '../../shared/regex'

const signupFormSchema = z
  .object({
    name: z.string().regex(regex.userName, {
      message:
        'Your name must be between 4 and 16 characters and contain only alphanumerics, dashes and underscores. '
    }),
    email: z.string().email({ message: 'Please enter a valid email.' }),
    password: z.string().regex(regex.password, {
      message:
        'Your password must be between 6 and 12 characters and contains only alphanumerics.'
    }),
    repeatPassword: z.string().regex(regex.password, {
      message:
        'Your password must be between 6 and 12 characters and contains only alphanumerics.'
    })
  })
  .refine(data => data.password === data.repeatPassword, {
    message: 'Repeated password and password inconsistency.',
    path: ['repeatPassword']
  })

type LoginFormData = Required<z.infer<typeof signupFormSchema>>

const useSignupForm = () => {
  const form = useForm<LoginFormData>({
    validate: zodResolver(signupFormSchema),
    validateInputOnBlur: true,
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  })

  const navigate = useNavigate()

  const signupMutation = useMutation({
    ...userAPI.signup(),
    onSuccess() {
      notifications.show({
        color: 'green',
        message: 'sign up was successful'
      })

      navigate('/login')
    }
  })

  const handleSubmit = form.onSubmit(values => {
    signupMutation.mutate(values)
  })

  const isPending = signupMutation.isPending

  return { form, handleSubmit, isPending }
}

export default useSignupForm
