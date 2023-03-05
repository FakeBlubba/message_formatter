import { serverManager } from "./modules/serverManager.js";
import { textManager } from "./modules/textManager.js";

//  Creazione istanza di server
const server = new serverManager('http', 'localhost', 3000);

//  Accensione del server
server.run('./index.html', './public/');
