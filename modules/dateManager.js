export class dateManager {
    constructor(dayNumber, monthNumber, year) {
        this.dayNumber = dayNumber;
        this.monthNumber = monthNumber;
        this.year = year;
    }

    //  Restituisce il numero della giornata
    getDayNumber = () => {
        return this.dayNumber;
    };

    //  Restituisce il numero del mese
    getMonthNumber = () => {
        return this.monthNumber;
    };

    //  Restituisce l'anno
    getYear = () => {
        return this.year;
    };

    //  Restituisce il nome in italiano della giornata
    getDayName = () => {
        const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
        const date = new Date(this.dayNumber);
        return days[date.getDay()];
    };

    //  Restituisce il nome in italiano del mese
    getMonthName = () => {
        const months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
        const date = new Date(this.monthNumber);
        return months[date.getMonth()];

    };

    
}