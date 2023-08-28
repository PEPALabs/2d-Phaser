import React from 'react'
import {
  Text,
  TextInput,
  PasswordInput,
  Stack,
  Group,
  Anchor,
  Button,
  Title,
  Paper,
  Checkbox,
  Container,
  Box,
  Center
} from '@mantine/core'
import { Link } from 'react-router-dom'
import useLoginForm from './useLoginForm'

const LoginPage = () => {
  // TODO: add connect wallet to button here

  // TODO: solve input speed slow issue

  const { form, handleSubmit, isPending } = useLoginForm()

  return (
    <Container className="h-5/6">
      <Center className="h-full">
        <Paper p="xl" radius="md" w={400}>
          <Title color="primary">Welcome to PEPA</Title>
          <Anchor component={Link} size="sm" color="dimmed" to="/signup">
            Do not have an account yet?{' '}
            <Text span color="primary">
              Sign up
            </Text>
          </Anchor>
          <Box component="form" mt="xl" onSubmit={handleSubmit}>
            <Stack>
              <TextInput
                autoComplete="email"
                placeholder="Your email"
                label="Email"
                withAsterisk
                {...form.getInputProps('email')}
              />
              <PasswordInput
                autoComplete="current-password"
                placeholder="Your password"
                label="Password"
                withAsterisk
                {...form.getInputProps('password')}
              />
            </Stack>
            <Stack mt="xl">
              <Group position="apart">
                <Checkbox label="Remember me" defaultChecked />
                <Anchor component="button" size="sm">
                  Forgot password?
                </Anchor>
              </Group>
              <Button type="submit" fullWidth loading={isPending}>
                Login
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Center>
    </Container>
  )
}

export default LoginPage
