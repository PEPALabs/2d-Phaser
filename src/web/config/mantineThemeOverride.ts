import { DefaultMantineColor, MantineThemeOverride, Tuple } from '@mantine/core'

type ExtendedCustomColors = DefaultMantineColor | 'primary' | 'secondary'

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}

const primary: Tuple<string, 10> = [
  '#FFF5F5',
  '#FFEAEA',
  '#FFD5D5',
  '#FFC1C1',
  '#FFACAC',
  '#FF9797',
  '#CC7979',
  '#995B5B',
  '#663C3C',
  '#331E1E'
]

const secondary: Tuple<string, 10> = [
  '#FFF9F1',
  '#FFF2E3',
  '#FFE5C7',
  '#FFD9AC',
  '#FFCC90',
  '#FFBF74',
  '#CC995D',
  '#997346',
  '#664C2E',
  '#332617'
]

const mantineThemeOverride: MantineThemeOverride = {
  fontFamily: 'Comic Neue, cursive',
  defaultRadius: 'md',
  primaryColor: 'primary',
  primaryShade: 5,
  colors: { primary, secondary }
}

export default mantineThemeOverride
