const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom1 = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document1 = dom1.window.document;

const div1 = document1.createElement("div");
document1.body.appendChild(div1);

const p1_1 = document1.createElement("p");
p1_1.textContent = "Ciao";
div1.appendChild(p1_1);

const p1_2 = document1.createElement("p");
p1_2.textContent = "Mondo";
div1.appendChild(p1_2);

console.log(dom1.serialize());
