import { serverManager } from "./modules/serverManager.js";
import { textManager } from "./modules/textManager.js";

//  Creazione istanza di server
const server = new serverManager('http', 'localhost', 3000);

//  Accensione del server
server.run('./index.html', './public/');

let txt = new textManager('', '');

txt.generateDateAndTimeText(17, 10, 1998, 10, 56);

console.log(txt.getText());