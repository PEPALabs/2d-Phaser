export interface LoginDTO {
  email: string
  password: string
}

export interface LoginData {
  token: string
}

export interface SignupDTO {
  name: string
  email: string
  password: string
  repeatPassword: string
}
