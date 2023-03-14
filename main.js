import { ServerManager } from "./src/server-manager.js";
import { BulletTextsGenerator } from "./src/bullet-texts-generator.js";

//  Creazione istanza di server
const server = new ServerManager('http', 'localhost', 3000);

//  Accensione del server
server.run('./index.html', './public/');