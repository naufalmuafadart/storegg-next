export interface CategoryTypes {
  _id : string,
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BankTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BankTypes[];
}

export interface NominalsTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id : string;
  username : string;
  email : string;
  name : string;
  avatar : string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface HistoryVoucherTopUp {
  category: string;
  coinName: string;
  coinQuantity: string;
  thumbnail: string;
  price: number;
  gameName: string;
}

export interface HistoryPaymentTypes {
  bankName : string;
  name : string;
  noRekening : string;
  type : string;
}

export interface HistoryTransactionTypes {
  _id: string;
  historyVoucherTopUp : HistoryVoucherTopUp;
  value: number;
  status: string;
  accountUser: string;
  tax: number;
  name: string;
  historyPayment: HistoryPaymentTypes;
}

export interface TopUpCategoriesTypes {
  _id: string;
  value: number;
  name: string;
}

interface User2Types {
  _id: string;
  phoneNumber: string;
  name: string;
}

interface GameItem2Types {
  status: string;
  nominals: NominalsTypes[];
  _id: string;
  name: string;
  category: CategoryTypes;
  isFeatured: boolean;
  thumbnail: string;
  user: User2Types;
}

export interface DetailVoucherTypes {
  detail: GameItem2Types;
  payment: PaymentTypes[];
}
