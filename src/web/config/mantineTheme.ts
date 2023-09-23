import { MantineColorsTuple, createTheme } from '@mantine/core'

const primary: MantineColorsTuple = [
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

const secondary: MantineColorsTuple = [
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

const mantineTheme = createTheme({
  fontFamily: 'Comic Neue, cursive',
  defaultRadius: 'md',
  primaryColor: 'primary',
  primaryShade: 5,
  colors: { primary, secondary }
})

export default mantineTheme
