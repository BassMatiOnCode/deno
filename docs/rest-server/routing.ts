import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const books = new Map<string, any>();
books.set( "1", {
	id: "1",
	title: "The Hound of the Baskervilles",
	author: "Conan Doyle, Arthur",
	} )
.set( "2", {
	id: "2",
	title: "The Mysterious Affair at Styles",
	author: "Agatha Christie",
	} ) ;

const router = new Router();
router.get("/", (context) => {
    context.response.body = "Hello world!";
	} )
.get( "/book", (context) => {
	context.response.body = Array.from(books.values());
	} )
.get( "/book/:id", (context) => {
	if (books.has( context?.params?.id as string)) {
	context.response.body = books.get(context.params.id as string);
	} } ) ;

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log( "Listening on port 8000" );
await app.listen({ port: 8000 });