export class DateConverter {
    constructor(dayNumber, monthNumber, year, hour, minutes) {
        this.dayNumber = dayNumber;
        this.monthNumber = monthNumber;
        this.year = year;
        this.hour = hour;
        this.minutes = minutes;
    }

    //  Restituisce il numero della giornata
    getDayNumber = () => {
        return this.dayNumber;
    };

    //  Imposta il numero della giornata
    setDayNumber = (newDayNumber) => {
        this.dayNumber = newDayNumber;
    }

    //  Restituisce il numero del mese
    getMonthNumber = () => {
        return this.monthNumber;
    };

    //  Imposta il numero del mese
    setMonthNumber = (newMonthNumber) => {
        this.monthNumber = newMonthNumber;
    }

    //  Restituisce l'anno
    getYear = () => {
        return this.year;
    };

    //  Imposta l'anno
    setYear = (newYear) => {
        this.year = newYear;
    }

    //  Restituisce l'ora
    getHour = () => {
        return this.hour;
      };
    
    //  Imposta l'ora  
    setHour = (newHour) => {
    this.hour = newHour;
    };

    //  Restituisce i minuti
    getMinutes = () => {
    return this.minutes;
    };

    //  Imposta i minuti
    setMinutes = (newMinutes) => {
    this.minutes = newMinutes;
    };

    //  Aggiorna la data con una stringa dal formato DD-MM-YYYY
    updateDate = (dateString) => {
        const dateParts = dateString.split('-');
        setDayNumber(dateParts[0]);
        setMonthNumber(dateParts[1]);
        setYear(dateParts[2]);
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
        const date = new Date(this.getYear(), this.getMonthNumber() - 1, 1);
        return months[date.getMonth()];
    };

    //  Restituisce una stringa con la data se presente
    getDateString = () => {
        const dayNumber = this.getDayNumber();
        const monthNumber = this.getMonthNumber();

        if(dayNumber !== '' && monthNumber !== '') {
            return `${this.getDayName()} ${dayNumber} ${this.getMonthName()}`;
        }

        else {
            return '';
        }
    };

    //  Restituisce una stringa con l'orario se presente
    getTimeString = () => {
        const hour = this.getHour();
        const minutes = this.getMinutes();

        if(hour !== '' && minutes !== '') {
            return `${hour}:${minutes}`; 
        }

        else {
            return '';
        };
    }
}