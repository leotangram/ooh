export interface TaxType {
  id: number;
  name: string;
  short_name: string;
  description: string;
  flat: string;
  percentage: string;
}

export interface ChargeType {
  id: number;
  name: string;
  short_name: string;
  description: string;
  percentage: string;
  tax_types: TaxType[];
}

export interface ListConfig {
  id: number;
  contract_version: string;
  minimal_preapproved_amount: string;
  minimal_loan_amount: string;
  loan_duration: number;
  sponsored_preapproved_amount: string;
  sponsored_preapproved_multiplier: string;
  charges_types: ChargeType[];
  maximum_payment_date: Date;
  minimum_value: number;
  maximum_value: number;  
  available_values: number[];
  installments:number
}

export interface CustomerBasicData {
  available_amount: number;
  is_preapproved: boolean;
  configs: ListConfig[];
  rfc:string;
  estimated_disbursement_date: Date;
  group:number;
}

export interface Customer {
  id: number;
  external_id: string;
  group: number;
  basic_data: CustomerBasicData;
}

export interface MoProfile {
  id: number;
  full_name: string;
  identification: string;
  email: string;
  customer: Customer;
}


export interface UserData{
  username:string;
  id:number
}

export class User {
  public token: string;
  public id: number;
  public user: UserData;
  public mo_profile: MoProfile;
  
  private storage: Storage;

  constructor(
    UserInfo?: any, storage?: Storage
  ){

    if (!UserInfo)
      return

    this.mo_profile = <MoProfile> UserInfo.mo_profile;
    this.token = UserInfo.token;
    this.user = UserInfo.user;

    this.storage = storage;

  }

  public decrease_available_amount(amount: number): void{
    this.mo_profile.customer.basic_data.available_amount = this.mo_profile.customer.basic_data.available_amount - amount;
    this.updateLocalStoreUser();
  }

  public get_available_amount(): number {
    return this.mo_profile.customer.basic_data.available_amount;
  }

  public available_amount_is_not_zero(): boolean {
    return this.get_available_amount() > 0.0;
  }

  public is_preapproved(): boolean {
    return this.mo_profile.customer.basic_data.is_preapproved;
  }

  public updateLocalStoreUser() {
    localStorage.setItem("app.user", JSON.stringify(this));
  }
}

