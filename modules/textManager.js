import { dateManager } from './dateManager.js';
import emoji from 'node-emoji';
import e from 'express';

export class textManager {
    constructor(text, context) {
        this.text = text
        this.context = context  //e.g.: 'warning', 'location', 'time'
    }

    //  Restituisce il testo
    getText = () => {
        return this.text;
    };

    //  Restituisce il contesto
    getContext = () => {
        return this.context;
    }

    //  Restituisce la concatenazione dei tre parametri
    combineLink = (protocol, address, port) => {
        return `${protocol}://${address}:${port}`;
    };

    //  Dato il parametro restituisce l'emoji in questione
    getEmoji = () => {
        const context = this.getContext();
        return emoji.emojify(`:${context}:`);
    };

    //  Genera un elenco puntato del tipo "🖤 : non amo le minoranze"
    generateBulletItem = () => {
        const text = this.getText();
        const emojiToUse = this.getEmoji();
        return `${emojiToUse}: ${text}`;
    };

    


    
}