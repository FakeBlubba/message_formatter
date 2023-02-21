import { serverManager } from "./modules/serverData.js";
import { fileInfo } from "./modules/filesData.js";

//  Creazione istanza di server
const server = new serverManager('http', 'localhost', 3000);

//  Accensione del server
server.run('./index.html', './public/');
