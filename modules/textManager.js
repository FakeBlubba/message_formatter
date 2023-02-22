import { dateManager } from './dateManager';
import emoji from 'node-emoji';

export class textManager {
    constructor(text) {
        this.text = text
    }

    //  Restituisce la concatenazione dei tre parametri
    combineLink = (protocol, address, port) => {
        return `${protocol}://${address}:${port}`;
    };

    //  Prende in parametro emoji e testo restituisce una concatenazione di questi due oggetti
    combineEmojiWithText = (textEmoji, text) => {
        let emojiToUse = emoji.get(textEmoji);
        
    } 
    
}