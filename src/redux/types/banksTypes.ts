export type banks = {
  "bankName": string,
  "description": string,
  "age": number,
  "url": string
}

export type BankState = {
  banks: banks[] | null
  has_data: boolean 
}