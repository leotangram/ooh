

export interface Loan {

  loan_id: number;
  amount: number;
  contract_version: string; 
  interest_rate: number;
  status: string;
  total_paid_amount: number;
  total_paid_amount_with_taxes: number;
  capital_debt: number;
  interest_debt: number;
  total_debt: number;
  potential_debt: number;
  taken_at: Date; 
  maximum_payment_date: Date;
  completed_at: Date;
  aggregated: true;
  total_cost: number;
  total_debt_with_taxes:number;
  total_capital_paid:number;
  interest_with_taxes: number;
  costandtax: number;
}


export interface TaxType {

  created_at: Date;
  description: string;
  flat: string;
  id: number;
  name: string;
  percentage: string;
  short_name: string;

}

export interface ChargeType {

  created_at: Date;
  description: string;
  flat: number;
  is_initial: boolean;
  id: number;
  name: string;
  percentage: string;
  priority: number;
  short_name: string;
  tax_types: TaxType[];

}

export interface Payment {

  capital_debt: number;
  capital_paid: number;
  date: Date;
  interest_debt: number;
  interest_paid: number;
  post_payment_total_debt: number;
  total_debt: number;
  total_paid: number;
  taxes_debt:number;
  taxes_paid:number;

}


export interface PromoBanner {

  main_text: string;
  show: boolean;
  created_at: Date;

}
