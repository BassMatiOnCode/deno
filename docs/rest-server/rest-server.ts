import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 8000;

/*
const customers = [
	{ id : "1" , name : "Alfreds Futterkiste" , address : "Obere Str. 57, Berlin, 12209, Germany"  } ,
	{ id : "2" , name : "Ana Trujillo Emparedados y helados" , address : "Avda. de la Constitución 2222, México D.F., 05021, Mexico"  } ,
	{ id : "3" , name : "Berglunds snabbköp" , address : "Berguvsvägen  8, Luleå, S-95822, Sweden"  } ,
	{ id : "4" , name : "Du monde entier" , address : "67 rue des Cinquante Otages, Nantes, 44000, France"  }
	] ;
*/

const app = new Application( );

const router = new Router( );

router.get( "/", ( ctx ) => {
	ctx.response.body = "Root GET" ;
	} ) 
.get( "/customer", ( ctx ) => {
	ctx.response.body = "Get all customers" ;
	} )
.post( "/customer", ( ctx ) => {
	ctx.response.body = `Create a new customer` ;
	} ) 
.get( "/customer/:id", ( ctx ) => {
	ctx.response.body = `Get customer ${ctx.params.id}` ;
	} )
.put( "/customer/:id", ( ctx ) => {
	ctx.response.body = `Update customer ${ctx.params.id}` ;
	} ) 
.delete( "/customer/:id", ( ctx ) => {
	ctx.response.body = `Delete customer ${ctx.params.id}` ;
	} ) ;

app.use( router.allowedMethods( ));
app.use( router.routes( ));

app.addEventListener( "listen", ( ) => {
	console.log( `Listening on: localhost:${port}` ) ;
	} ) ;

await app.listen( { port } ) ;
