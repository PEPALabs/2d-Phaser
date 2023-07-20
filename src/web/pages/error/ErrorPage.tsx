import React from 'react'
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  rem,
  Center
} from '@mantine/core'
import { Link } from 'react-router-dom'

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80)
  },
  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120)
    }
  },
  title: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32)
    }
  },
  description: {
    maxWidth: rem(500),
    margin: 'auto',
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`
  }
}))

const ErrorPage = () => {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title} align="center">
        You have found a secret place.
      </Title>
      <Text
        className={classes.description}
        color="dimmed"
        size="lg"
        align="center"
        mt="xl">
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Center>
        <Button variant="subtle" size="md" component={Link} to="/">
          Take me back to home page
        </Button>
      </Center>
    </Container>
  )
}

export default ErrorPage
