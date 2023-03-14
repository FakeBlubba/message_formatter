import emoji from 'node-emoji';

//  TODO    RINOMINARE CARTELLA MODULI
export class BulletTextsGenerator {
    constructor(text, context) {
      this.text = text;
      this.context = context; //e.g.: 'warning', 'location', 'time'
    }
  
    //  Restituisce il testo
    static getText = () => {
      return BulletTextsGenerator.text;
    };
  
    //  Restituisce il contesto
    static getContext = () => {
      return BulletTextsGenerator.context;
    };
  
    //  Aggiorna il testo
    static setText = (newText) => {
      BulletTextsGenerator.text = newText;
    };
  
    //  Aggiorna il contesto
    static setContext = (newContext) => {
      BulletTextsGenerator.context = newContext;
    };
  
    //  Aggiorna tutte le proprietà della classe
    static setContextAndText = (newContext, newText) => {
      BulletTextsGenerator.setContext(newContext);
      BulletTextsGenerator.setText(newText);
    };  


   //  Restituisce la concatenazione dei tre parametri
    static combineLink = (protocol, address, port) => {
        return `${protocol}://${address}:${port}`;
    };


    //  Dato il parametro restituisce l'emoji in questione
    static getEmoji = () => {
        const context = BulletTextsGenerator.getContext();
        return emoji.emojify(`:${context}:`);
    };


    //  Genera un elenco puntato del tipo "🖤: non amo le minoranze"
    static generateBulletItem = (text, context) => {
        BulletTextsGenerator.setContextAndText(context, text);
        const emojiToUse = BulletTextsGenerator.getEmoji();
        return `${emojiToUse}: ${text}`;
    };


    //  Aggiorna l'oggetto BulletTextsGenerator con un generico elemento
    static generateMiscText = (newContext) => {
    
        const output = BulletTextsGenerator.preprocessPunctuation();
        BulletTextsGenerator.setContextAndText(newContext, BulletTextsGenerator.toBold(output));
    };


    //  Aggiorna l'oggetto BulletTextsGenerator con la stringa sui vestiti
    static generateClothesText = (clothes) => {

        let output;
    
        switch(clothes) {
            case 0:
                output = BulletTextsGenerator.preprocessPunctuation('Effetti al completo');
                BulletTextsGenerator.setContextAndText('t-shirt', BulletTextsGenerator.toBold(output));
                break;

            case 1:
                output = BulletTextsGenerator.preprocessPunctuation('Placca e feluca');
                BulletTextsGenerator.setContextAndText('necklace', BulletTextsGenerator.toBold(output));
                break;

            case 2:
                output = BulletTextsGenerator.preprocessPunctuation('Niente effetti');
                BulletTextsGenerator.setContextAndText('underwear', BulletTextsGenerator.toBold(output));
                break;

            default:
                break;

        }
    };


    //  Aggiorna l'oggetto BulletTextsGenerator con la descrizione dell'utente
    static generateDescriptionText = () => {

        const description = BulletTextsGenerator.preprocessPunctuation();
        BulletTextsGenerator.setText(description);

    };


    //  Aggiorna l'oggetto BulletTextsGenerator con il link di della location
    static generateLocationText = (LocationFinderObject) => {

        const input = BulletTextsGenerator.toBold(LocationFinderObject.getUserInput());
        const locationLink = BulletTextsGenerator.toBold(LocationFinderObject.generateLink());
        BulletTextsGenerator.setContextAndText('location', `${input} - ${locationLink}.`);
    };

    //  aggiorna l'oggetto BulletTextsGenerator contestualmente al fatto che esista un orario o una data
    static generateDateAndTimeText = (DateConverterObject) => {
        
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

    //  Sistema la punteggiatura
    static preprocessPunctuation = () => {

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
    static toBold = (toBold) => {
        return `*${toBold}*`;
    };

    // Formatta il testo in corsivo per WhatsApp
    static toItalic = (toItalic) => {
        return `_${toItalic}_`;
    };








}