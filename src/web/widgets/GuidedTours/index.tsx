import React, { MouseEvent, useState } from 'react'
import Joyride, { type CallBackProps, STATUS } from 'react-joyride'
import { Button } from '@mantine/core'
import getSteps from './getSteps'

const GuidedTours = () => {
  const [steps] = useState(() => getSteps())

  const [isRun, setIsRun] = useState(false)

  const handleClickStart = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    setIsRun(true)
  }

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, type } = data
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED]

    if (finishedStatuses.includes(status)) {
      setIsRun(false)
    }
  }

  return (
    <>
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        hideCloseButton
        disableOverlayClose={false}
        showProgress
        showSkipButton
        run={isRun}
        steps={steps}
        styles={{
          options: {
            zIndex: 10000
          }
        }}
      />
      <Button onClick={handleClickStart}>Guided tours</Button>
    </>
  )
}

export default GuidedTours
