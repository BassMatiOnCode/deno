import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

///  Configuration
const port = 8000;

///  Data
const customers = {
	"1" : {  id : "1" , name : "Alfreds Futterkiste" , address : "Obere Str. 57, Berlin, 12209, Germany"  } ,
	"2" : { id : "2" , name : "Ana Trujillo Emparedados y helados" , address : "Avda. de la Constitución 2222, México D.F., 05021, Mexico"  } ,
	"3" : { id : "3" , name : "Berglunds snabbköp" , address : "Berguvsvägen  8, Luleå, S-95822, Sweden"  } ,
	"4" : { id : "4" , name : "Du monde entier" , address : "67 rue des Cinquante Otages, Nantes, 44000, France"  }
	} ;

///  Implementation

const update = async (context: RouterContext) => {
	if ( ! context.request.hasBody ) {
		context.response.status = 400;
		context.response.body = "invalid error" ;
		return;
		}
	requestBody = await context.request.body().value;

const app = new Application( );
const router = new Router( );
router.get( "/", ( ctx ) => {
	ctx.response.body = "Root GET" ;
	} ) 
.get( "/customer", ( ctx ) => {
	ctx.response.body = customers ;
	} )
.get( "/customer/:id", ( ctx ) => {
	ctx.response.body = customers[ ctx.params.id as keyof typeof customers ] || "undefined" ;
	} )
.post( "/customer", ( ctx ) => {
	ctx.response.body = `Create a new customer` ;
	} ) 
.put( "/customer/:id", async (ctx) => {
	// ctx.response.body = `Update customer ${ctx.params.id}` ;
	let customer = customers[ ctx.params.id as keyof typeof customers ] ;
	if ( ! customer ) ctx.response.body = "not found" ;
	else {
		const data = await ctx.request.body( { type: 'json' } );
		console.log( "data: " + data.type + " " + data.value );
//		if ( data.name ) customer.name = data.name ;
//		if ( data.address ) customer.name = data.address ;
		ctx.response.body = "ok" ;
		}
	} ) 
.delete( "/customer/:id", ( ctx ) => {
	if ( customers[ ctx.params.id as keyof typeof customers ] ) {
		delete customers[ ctx.params.id as keyof typeof customers ] ;
		ctx.response.body = "ok" ;
		}
	else ctx.response.body = "not found" ;
	} ) ;

app.use( router.allowedMethods( ));
app.use( router.routes( ));

app.addEventListener( "listen", ( ) => {
	console.log( "Listening on port 8000..." ) ;
	} ) ;

await app.listen( { port } ) ;
