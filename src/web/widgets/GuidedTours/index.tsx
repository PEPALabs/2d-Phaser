import React, { MouseEvent, useState } from 'react'
import Joyride, { type CallBackProps, STATUS } from 'react-joyride'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mantine/core'
import getSteps from './getSteps'
import JoyrideTooltip from './JoyrideTooltip'

const GuidedTours = () => {
  const [steps] = useState(() => getSteps())

  const [isRun, setIsRun] = useState(false)

  const navigate = useNavigate()

  const handleClickStart = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    setIsRun(true)
  }

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, step, lifecycle } = data
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED]

    if (step.title === 'Game' && lifecycle === 'ready') {
      navigate('/home')
    }

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
        tooltipComponent={JoyrideTooltip}
        styles={{
          options: {
            zIndex: 10000
          }
        }}
      />
      <Button onClick={handleClickStart} className="tracking-wider">
        Guided tours
      </Button>
    </>
  )
}

export default GuidedTours
