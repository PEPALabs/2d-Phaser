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
  Space
} from '@mantine/core'

const LoginPage = () => {
  // TODO: add connect wallet to button here

  // TODO: solve input speed slow issue

  return (
    <Container size={420}>
      <Space h={100} />
      <Paper p="xl" radius="md" w={400}>
        <Title color="blue">Welcome to PEPA</Title>
        <Anchor size="xs" color="dimmed">
          Don't have an account?{' '}
          <Text span color="blue">
            Sign up
          </Text>
        </Anchor>
        <Box component="form" mt="xl">
          <Stack>
            <TextInput placeholder="Your email" label="Email" withAsterisk />
            <PasswordInput
              placeholder="Your password"
              label="Password"
              withAsterisk
            />
          </Stack>
          <Stack mt="xl">
            <Group position="apart">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth>Login</Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  )
}

export default LoginPage