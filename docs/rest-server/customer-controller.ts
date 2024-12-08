//  customer-controller.ts    usp    2022-04-02

import { RouterContext } from "https://deno.land/x/oak/mod.ts" ;
import { customers } from "./customer.ts" ;

export const getCustomers = ( { response }: RouterContext ) => {
	response.body = customers ;
	}
