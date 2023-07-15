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
  Space,
  Center,
  createStyles,
  rem,
} from '@mantine/core'


const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: rem(4),
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

  }
});

const ResourcePage = () => {
  
  const { classes } = useStyles();

  return (
    <Container size={420}>
      <Center className="h-full">
        
        <Space h={100} />
        <Paper p="xl" radius="md" w={400} className={classes.wrapper}>
          <div>
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
          </div>

          <div>
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

          </div>
        </Paper>
      
      </Center>
    </Container>
  )
}

export default ResourcePage