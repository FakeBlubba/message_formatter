import emoji from 'node-emoji';

//  TODO    Metodi statici
//  TODO    RINOMINARE CARTELLA MODULI
export class BulletTextsGenerator {
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

    
    //  Aggiorna l'oggetto BulletTextsGenerator con un generico elemento
    generateMiscText = (newContext) => {
        
        const output = this.preprocessPunctuation();
        this.setContextAndText(newContext, this.toBold(output));
    };

    
    //  Aggiorna l'oggetto BulletTextsGenerator con la stringa sui vestiti
    generateClothesText = (clothes) => {

        let output;
        
        switch(clothes) {
            case 0:
                output = this.preprocessPunctuation('Effetti al completo');
                this.setContextAndText('t-shirt', this.toBold(output));
                break;

            case 1:
                output = this.preprocessPunctuation('Placca e feluca');
                this.setContextAndText('necklace', this.toBold(output));
                break;

            case 2:
                output = this.preprocessPunctuation('Niente effetti');
                this.setContextAndText('underwear', this.toBold(output));
                break;

            default:
                break;

        }
    };


    //  Aggiorna l'oggetto BulletTextsGenerator con la descrizione dell'utente
    generateDescriptionText = () => {

        const description = this.preprocessPunctuation();
        this.setText(description);

    };


    //  aggiorna l'oggetto BulletTextsGenerator con il link di della location
    generateLocationText = (LocationFinderObject) => {

        const input = this.toBold(LocationFinderObject.getUserInput());
        const locationLink = this.toBold(LocationFinderObject.generateLink());

        this.setContextAndText('location', `${input} - ${locationLink}.`);
    };


    //  aggiorna l'oggetto BulletTextsGenerator contestualmente al fatto che esista un orario o una data
    generateDateAndTimeText = (DateConverterObject) => {
        
        //  Oggetto contenente le info sulla data e sull'orario
        //  const dm = new DateConverter(dayNumber, monthNumber, year, hour, minutes);

        const date = this.toBold(DateConverterObject.getDateString());  //  e.g. 'Lunedì 15 maggio' OR ''
        const time = this.toBold(DateConverterObject.getTimeString());  //  e.g. '15:09' OR ''

        //  Se c'è sia la data sia l'orario
        if(date !== '**' && time !== '**') {
            this.setContextAndText('date', `${date} alle ${time}.`);
        }
        
        //  Se c'è solo la data
        else if(time !== '**') {
            this.setContextAndText('date', `${date}.`);
        } 
        
        //  Se c'è solo il orario
        else if(date !== '**') {
            this.setContextAndText('clock', `Alle ${time}.`);
        }  
    };

        
    /*//  aggiorna tutti i testi
    generateAllTexts = () => {
        this.generateTitle();
    }*/

    //  Sistema la punteggiatura
    preprocessPunctuation = () => {

        const text = this.getText();
        const lastChar = text.charAt(text.length - 1);
  
        if (/[\w']/.test(lastChar)) {

          // se l'ultimo carattere è una lettera, un numero o un apostrofo
          text += ".";

        } else if (lastChar === "." || lastChar === "?") {

          // se l'ultimo carattere è già un punto o un punto interrogativo
          if (text.slice(-2) !== "..") {
            text += ".";
          }
        }
        
        this.setText(text);
    };

    // Formatta il testo in grassetto per WhatsApp
    toBold = (toBold) => {
        return `*${toBold}*`;
    };

    // Formatta il testo in corsivo per WhatsApp
    toItalic = (toItalic) => {
        return `_${toItalic}_`;
    };








}