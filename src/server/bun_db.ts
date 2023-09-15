import { Database } from "bun:sqlite";

const db = new Database(":memory:", { create: true });
const query = db.query("select 'Hello world' as message;");
query.get(); // => { message: "Hello world" }