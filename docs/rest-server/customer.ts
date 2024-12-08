//  customer.ts    usp    2022-04-02
//  Implements the customer interface.

export interface Customer {
	id : number ;
	uc : number ;
	name : string ;
	address : string ;
	}

export const customers: Customer[] = [
	{	id : 1, uc : 1, name : "Alfreds Futterkiste", address : "D-1000 Berlin" },
	{	id : 2, uc : 1, name : "Müllers Gemüseladen", address : "D-5000 Köln" },
	{	id : 3, uc : 1, name : "Meier KG", address : "D-3000 Hannover" },
	{	id : 4, uc : 1, name : "Schulze GmbH", address : "D-8000 München" }
	] ;