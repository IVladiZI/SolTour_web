export interface User {
  userId: string
  userName: string
  password: string
  email: string
  person: Person
  state: boolean
  date: Date
}
export interface Person {
  name: string
  firstLastName: string
  secondLastName: string
  date: Date
  nationality: string
}
