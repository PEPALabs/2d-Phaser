import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core'

type ExtendedCustomColors = DefaultMantineColor | 'primary' | 'secondary'

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>
  }
}
