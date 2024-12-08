import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const port = 8000;
const app = new Application( );
const router = new Router( );
router.get( "/", ( ctx ) => {
	ctx.response.body = "Root GET" ;
	} )
.post( "/", ( ctx ) => {
	ctx.response.body = "Root POST" ;
	} ) 
.put("/", ( ctx ) => {
	ctx.response.body = "Root PUT" ;
	} ) 
.delete( "/", ( ctx ) => {
	ctx.response.body = "Root DELETE" ;
	} ) ;

app.use( router.allowedMethods( ));
app.use( router.routes( ));

app.addEventListener( "listen", ( ) => {
	console.log( "Listening on port 8000..." ) ;
	} ) ;

await app.listen( { port } ) ;
