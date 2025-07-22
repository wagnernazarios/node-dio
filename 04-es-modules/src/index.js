// import  connectToDatabase  from "./utils/database.mjs";

// exportar tudo 
// import * as database from "./utils/database.mjs";

// destructuring
import { connectToDatabase, disconnetDatabase, databaseType } from "./utils/database.mjs";
connectToDatabase('users');
disconnetDatabase();
