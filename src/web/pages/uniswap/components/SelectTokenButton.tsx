import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  Chip,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
  UnstyledButton
} from '@mantine/core'
import { useDisclosure, useInputState } from '@mantine/hooks'
import {
  IconChevronDown,
  IconCurrencyBitcoin,
  IconCurrencyEthereum,
  IconSearch
} from '@tabler/icons-react'

const tokens = [
  { name: 'Ether', unit: 'ETH', icon: IconCurrencyEthereum },
  { name: 'Wrapped BTC', unit: 'WBTC', icon: IconCurrencyBitcoin }
]

const SelectTokenButton = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>()

  const currentToken = tokens[selectedIndex]

  const [opened, handlers] = useDisclosure(false)

  const [searchText, setSearchText] = useInputState('')

  const searchResult = tokens.filter(token =>
    searchText.trim() === ''
      ? true
      : token.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  )

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
    handlers.close()
  }

  return (
    <>
      {currentToken ? (
        <Button
          radius="lg"
          compact
          leftIcon={<currentToken.icon size="1rem" />}
          rightIcon={<IconChevronDown size="1rem" />}
          onClick={handlers.open}>
          {currentToken.unit}
        </Button>
      ) : (
        <Button
          color="pink"
          radius="lg"
          compact
          onClick={handlers.open}
          rightIcon={<IconChevronDown size="1rem" />}>
          Select Toekn
        </Button>
      )}

      <Modal
        opened={opened}
        onClose={handlers.close}
        centered
        title="Select a token">
        <Card.Section withBorder inheritPadding py="xs">
          <Stack>
            <TextInput
              icon={<IconSearch />}
              variant="filled"
              placeholder="Search name or paste address"
              value={searchText}
              onChange={setSearchText}
            />
            <Group>
              {tokens.map((token, index) => (
                <Chip
                  key={token.name}
                  checked={index === selectedIndex}
                  variant="light"
                  onClick={() => {
                    handleSelect(index)
                  }}>
                  <token.icon size="1rem" />
                  {token.unit}
                </Chip>
              ))}
            </Group>
          </Stack>
        </Card.Section>
        <Card.Section>
          {searchResult.length > 0 ? (
            <Stack spacing={0}>
              {searchResult.map((token, index) => (
                <UnstyledButton
                  key={token.name}
                  p="xs"
                  sx={theme => ({
                    ...theme.fn.hover({
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[5]
                          : theme.colors.gray[0]
                    })
                  })}
                  onClick={() => {
                    handleSelect(index)
                  }}>
                  <Group>
                    <token.icon />
                    <Box>
                      <Text>{token.name}</Text>
                      <Text size="xs" color="dimmed">
                        {token.unit}
                      </Text>
                    </Box>
                  </Group>
                </UnstyledButton>
              ))}
            </Stack>
          ) : (
            <Text align="center">No results found.</Text>
          )}
        </Card.Section>
      </Modal>
    </>
  )
}

export default SelectTokenButton
