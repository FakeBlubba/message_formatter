import { ServerManager } from "./src/server-manager.js";

//  Creazione istanza di server
const server = new ServerManager('http', 'localhost', 3000);

//  Accensione del server
server.run('./index.svelte', './public/');