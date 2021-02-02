export class Company {
  _id: string;
  company: string;
  Category: string;
  email: string;
  password: string;
  }

export class CompanyPages{
   docs: Company[];
   total:number;
   limit:number;
   page:number;
   pages:number
}