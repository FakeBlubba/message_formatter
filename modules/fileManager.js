//  Modulo contenente le informazioni dei file
import fs from 'fs';

// Classe che rappresenta le informazioni di un file
export class fileInfo {
    constructor(path, name, extension) {
      this.name = name;
      this.extension = `.${extension}`;
      this.path = `${path}/`;
    }
  
    // Metodo che restituisce il nome del file
    getFileName = () => {
      return this.name;
    };

    //  Restituisce l'estensione
    getExtension = () => {
        return this.extension;
    };

    //  Restituisce il path del file
    getPath = () => {
        return this.path;
    };

    //  Restituisce l'indirizzo completo del file
    getCompletePath = () => {
        return `${this.path}${this.name}${this.extension}`;
    };
}

// Classe che gestisce i percorsi dei file
export class directoryManager {
    constructor(directory) {
        // Imposta il percorso per la cartella da gestire
        this.directory = directory;
    }

    //  Restituisce un array di istanze di file in quella cartella
    scan = () => {
        const files = fs.readdirSync(this.directory);
        return files;
      }

    // Metodo che legge un file e gestisce eventuali errori
    readFileAndHandleErrors = (directoryPath) => {
        // Chiamo il metodo readFile e gli passo come argomento il percorso del file
        return this.readFile(directoryPath)
            // In caso di successo, stampiamo i dati del file e li restituiamo
            .then((data) => {
                console.log(data);
                return data;
            })
            // In caso di errore, stampiamo l'errore e lo lanciamo (throw)
            .catch((error) => {
                console.error(`Codice di errore: ${error}`);
                throw error;
            });
    }

    findFile = (file_name) => {
        files = this.read();
        //  Se non è una cartella
    }
}
  