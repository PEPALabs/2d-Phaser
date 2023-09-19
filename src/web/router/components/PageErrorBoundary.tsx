import React from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { Button, Code, Flex, Paper, Stack, Title } from '@mantine/core'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'

const PageErrorBoundary = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ error, resetErrorBoundary }) => (
            <Flex className="h-full w-full" justify="center" align="center">
              <Paper p="lg" radius="md">
                <Stack align="center" justify="center">
                  <Title>Something went wrong</Title>
                  <Code>{error.message}</Code>
                  <Button onClick={() => resetErrorBoundary()}>
                    Try again
                  </Button>
                </Stack>
              </Paper>
            </Flex>
          )}>
          <Outlet />
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default PageErrorBoundary
