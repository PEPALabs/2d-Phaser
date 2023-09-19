import React from 'react'
import { Container, Title, Button, AppShell, Stack, Code } from '@mantine/core'
import { useNavigate, useRouteError } from 'react-router-dom'

const AppErrorBoundary = () => {
  const error = useRouteError() as Error

  const navigate = useNavigate()

  const refreshPage = () => {
    navigate(0)
  }

  return (
    <AppShell>
      <Container className="h-full">
        <Stack className="h-full" justify="center" align="center">
          <Title>Something bad just happened...</Title>
          <Code>{error.message}</Code>
          <Button size="md" onClick={refreshPage}>
            Refresh the page
          </Button>
        </Stack>
      </Container>
    </AppShell>
  )
}

export default AppErrorBoundary
