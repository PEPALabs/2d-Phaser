import React from 'react'
import { Flex, Image, Pill } from '@mantine/core'

const PlayerCurrency = () => {
  return (
    <Flex align="center">
      <Pill
        size="lg"
        className="border-2 border-solid border-[#4A2E10] bg-white px-4"
        classNames={{
          label: 'text-[#4A2E10] tracking-widest font-bold'
        }}>
        1000
      </Pill>
      <Image
        src="/assets/images/pepa-coin.png"
        alt="PEPA coin"
        className="-m-3 h-12 w-12 rotate-12"
      />
    </Flex>
  )
}

export default PlayerCurrency
