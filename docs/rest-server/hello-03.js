import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";

const app = new Application ( ) ;

app.use ( ( ctx ) => {
	console.log( "hello" );
	ctx.response.body = "Hello World!" ;
	} ) ;

console.log( "Listening on port 8000" );
const listener = Deno.listen ( { hostname: "localhost", port: 8000 } ) ;

for await ( const conn of listener ) { ( async ( ) => {
	console.log( "Connect" );
	const requests = Deno.serveHttp( conn ) ;
	for await ( const { request, respondWith } of requests ) {
		console.log( "Request" );
		const response = await app.handle ( request, conn ) ;
		console.log( "response " );
		if ( response ) { console.log( "true" ); respondWith( response ) ; }
	} } ) ; }

