/*
 *  rest-server.ts    2022-04-02   usp
 *  Demonstration of a REST server API with Deno and Oak.
 */

import { Application } from "https://deno.land/x/oak/mod.ts" ;

const PORT = 8000 ;

const app = new Application( );

// Logger
app.use ( async ( ctx, next ) => {
	// Call the next handler on the stack
	await next ( ) ;
	// Retrieve the response time from the header
	const rt = ctx.response.headers.get ( "X-Response-Time" ) ;
	// Log the result to the console and return the response to the client.
	console.log ( `${ctx.request.method} ${ctx.request.url} - ${rt}` ) ; 
	} ) ;

// Timing
app.use ( async ( ctx, next ) => {
	const start = Date.now ( ) ;  // Record the start time
	await next ( ) ;  // call the next handler on the stack
	const duration = Date.now ( ) - start ;  // calculate the duration
	ctx.response.headers.set ( "X-Response-Time" , `${duration}ms` ) ;  // create a response header to record the duration
	} ) ;

// Hello World!
app.use ( ( ctx ) => {
	ctx.response.body = "Hello World!" ;  // Do the job
	} ) ;

// Start the thing
console.log ( `Listening on port ${PORT}...` ) ;
await app.listen ( `localhost:${PORT}` ) ;

