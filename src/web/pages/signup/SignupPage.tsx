import React from 'react'
import {
  Text,
  TextInput,
  PasswordInput,
  Stack,
  Anchor,
  Button,
  Title,
  Paper,
  Container,
  Box,
  Center
} from '@mantine/core'
import { Link } from 'react-router-dom'
import useSignupForm from './useSignupForm'

const SignupPage = () => {
  const { form, handleSubmit, isPending } = useSignupForm()

  return (
    <Container className="h-5/6">
      <Center className="h-full">
        <Paper p="xl" radius="md" w={400}>
          <Title color="primary">Create new account.</Title>
          <Anchor component={Link} size="sm" color="dimmed" to="/login">
            Already have an account?{' '}
            <Text span color="primary">
              Login
            </Text>
          </Anchor>
          <Box component="form" mt="xl" onSubmit={handleSubmit}>
            <Stack>
              <TextInput
                autoComplete="username"
                placeholder="Your Name"
                label="Name"
                withAsterisk
                {...form.getInputProps('name')}
              />
              <TextInput
                autoComplete="email"
                placeholder="Your email"
                label="Email"
                withAsterisk
                {...form.getInputProps('email')}
              />
              <PasswordInput
                autoComplete="new-password"
                placeholder="Your password"
                label="Password"
                withAsterisk
                {...form.getInputProps('password')}
              />
              <PasswordInput
                autoComplete="new-password"
                placeholder="Please repeat your password"
                label=" Repeated password"
                withAsterisk
                {...form.getInputProps('repeatPassword')}
              />
            </Stack>
            <Stack mt="xl">
              <Button type="submit" fullWidth loading={isPending}>
                Sign Up
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Center>
    </Container>
  )
}

export default SignupPage
