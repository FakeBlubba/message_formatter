//  Modulo contenente le classi inerenti al server
import fs from 'fs';
import express from 'express';
import { textManager } from './textManager.js';


// Classe contenente le informazioni del server
export class serverManager {
    constructor(protocol, address, port) {
        this.protocol = protocol;
        this.address = address;
        this.port = port;
    }

    //  Restituisce il protocollo ('http')
    getProtocol = () => {
        return this.protocol;
    };
    
    //  Restituisce l'indirizzo ('localhost:')
    getAddress = () => {
        return this.address;
    };

    // Restituisce la porte (3000)
    getPort = () => {
        return this.port;
    };

    //  Restituisce la concatenazione delle tre proprietà
    getServerURL = () => {
        return `${this.protocol}://${this.address}:${this.port}`;
    }

    
    //  Rendi una data cartella pubblica
    makeFolderPublic(app, folderPath) {
        
        //  Rende pubblica una certa cartella
        app.use(express.static(folderPath));
    }

    //  Avvia il server e stampa nella console il messaggio con l'indirizzo
    startAndDisplayStatus = (app, portToUse) => {
        app.listen(portToUse, () => {
            let text = new textManager(this.getServerURL(), 'warning')
            console.log(text.generateBulletItem());
        });
    }

    //  Gestisce l'homepage
    handleHomepage = (app, homePagePath) => {

        //  Gestisce il contenuto dell'homepage
        app.get('/', (req, res) => {
            
            // Legge il contenuto del file 'index.html
            const index = fs.readFileSync(homePagePath, 'utf-8');
            
            //  Invia il contenuto dell'homepage come richiesta HTTP
            res.send(index);
          });
    }

    //  Avvia il server
    run = (homePagePath, publicFolderPath, portToUse = this.port) => {

        //  Inizializza la variabile dell'applicazione
        const app = express();

        //  Gestisce l'homepage
        this.handleHomepage(app, homePagePath);

        //  Rende pubblica la cartella al percorso publicFolderPath
        this.makeFolderPublic(app, publicFolderPath);

        //  Avvia il server e stampa nella console il messaggio con l'indirizzo
        this.startAndDisplayStatus(app, portToUse)
    }

}