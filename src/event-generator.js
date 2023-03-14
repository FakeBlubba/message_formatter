class EventGenerator {
    constructor(title, description, date, address, price, clothes) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.address = address;
        this.price = price;
        this.clothes = clothes;
    }

    //  Restituisce il valore del titolo
    getTitle = () => {
        return this.title;
    };

    //  Imposta un nuovo valore per il titolo
    setTitle = (newTitle) => {
        this.title = newTitle;
    };

    //  Restituisce il valore della descrizione
    getDescription = () => {
        return this.description;
    };

    //  Imposta un nuovo valore per la descrizione
    setDescription = (newDescription) => {
        this.description = newDescription;
    };

    //  Restituisce il valore di data con orario compreso
    getDate = () => {
        return this.date;
    };

    //  Imposta un nuovo valore per la data e l'orario
    setDate = (date) => {
        this.date = date;
    };

    //  Restituisce il valore dell'indirizzo
    getAddress = () => {
        return this.address;
    };

    //  Imposta il valore dell'indirizzo
    setAddress = (address) => {
        this.address = address;
    };

    //  Restituisce il valore del prezzo
    getPrice = () => {
        return this.price;
    };

    //  Imposta il valore per il prezzo
    setPrice = (price) => {
        this.price = price;
    };

    //  Restituisce il valore dei vestiti
    getClothes = () => {
        return this.clothes;
    };

    //  Imposta il valore dei vestiti
    setClothes = (clothes) => {
        this.clothes = clothes;
    };

    //  Restituisce una stringa con tutte le proprietà

    getOutputCode = () => {
        return `${this.getTitle()}
${this.getDescription()}
${this.getAddress()}
${this.getDate()}
${this.getPrice()}
${this.getClothes()}`;
    };
    
}

 class FreeEvent extends EventGenerator {
    constructor(title, description, date, address, clothes) {
        super(title, description, date, address, "", clothes);
    }
}

export class VolaTemplate extends FreeEvent {
    constructor(description, date, address, clothes) {
        super("🎺 RIUNIONE DI V.O.L.A. 🎺", description, date, address, clothes);
    }
}

export class PopoloTemplate extends FreeEvent {
    constructor(description, date, address, clothes) {
        super("🐑 RIUNIONE POPOLO 🐑", description, date, address, clothes);
    }
}

export class CornusTemplate extends FreeEvent {
    constructor(description, date, address, clothes) {
        super("🐂 RIUNIONE DEL CORNUS 🐂", description, date, address, clothes);
    }
}

export class QuestuaTemplate extends FreeEvent {
    constructor(description, date, address, clothes) {
        super("💰 QUESTUA 💰", description, date, address, clothes);
    }
}


class GenericEventTemplate extends EventGenerator {
    constructor(title, description, date, address, price, clothes) {
        super(title, description, date, address, price, clothes);
    }
}

export class DinnerTemplate extends GenericEventTemplate {
    constructor(title, description, date, address, price, clothes) {
        super(title, description, date, address, price, clothes);
    }
}

export class TravelTemplate extends EventGenerator {
    constructor(title, description, date, address, clothes) {
        super(title, description, date, address, price, clothes);
    }
}


export class BedRequestTemplate extends EventGenerator {
    constructor(description, date, address, clothes) {
        super("RICHIESTA LETTI", description, date, "", "", "");
    }
}