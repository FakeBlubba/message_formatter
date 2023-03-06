import { dateManager } from './dateManager.js';
import emoji from 'node-emoji';

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
    };

    //  Aggiorna il testo
    setText = (newText) => {
        this.text = newText;
    };

    //  Aggiorna il contesto
    setContext = (newContext) => {
        this.context = newContext;
    };

    //  Aggiorna tutte le proprietà della classe
    setContextAndText = (newContext, newText) => {
        this.setContext(newContext);
        this.setText(newText);
    };


    //  Restituisce la concatenazione dei tre parametri
    combineLink = (protocol, address, port) => {
        return `${protocol}://${address}:${port}`;
    };


    //  Dato il parametro restituisce l'emoji in questione
    getEmoji = () => {
        const context = this.getContext();
        return emoji.emojify(`:${context}:`);
    };


    //  Genera un elenco puntato del tipo "🖤: non amo le minoranze"
    generateBulletItem = () => {
        const text = this.getText();
        const emojiToUse = this.getEmoji();
        return `${emojiToUse}: ${text}`;
    };


    //  aggiorna l'oggetto textManager contestualmente al fatto che esista un orario o una data
    generateDateAndTimeText = (dayNumber = '', monthNumber = '', year = '', hour = '', minutes = '') => {
        
        //  Oggetto contenente le info sulla data e sull'orario
        const dm = new dateManager(dayNumber, monthNumber, year, hour, minutes);

        const date = dm.getDateString();  //  e.g. 'Lunedì 15 maggio' OR ''
        const time = dm.getTimeString();  //  e.g. '15:09' OR ''

        //  Se c'è sia la data sia l'orario
        if(date !== '' && time !== '') {
            this.setContextAndText('date', `${date} alle ${time}.`)
        }
        
        //  Se c'è solo la data
        else if(time !== '') {
            this.setContextAndText('date', `${date}.`)
        } 
        
        //  Se c'è solo il tempo
        else if(date!== '') {
            this.setContextAndText('clock', `Alle ${time}.`)
        }  
        
        //  Se non c'è né data né tempo
        else {
            return '';
        }
    };
}