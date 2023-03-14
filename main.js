//  main.js
import { ServerManager } from "./modules/serverManager.js";

//  Creazione istanza di server
const server = new ServerManager('http', 'localhost', 3000);

//  Accensione del server
server.run('./index.html', './public/');