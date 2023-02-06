//  Variabili globali
let dropdown_value = '';
let effettiValue = ''
let ids = ['ename', 'edescription', 'etime', 'edate', 'mapInput', 'eprice', 'enter', 'res', 'code_block', 'progress-container'];


// Modifica il titolo e la descrizione della pagina
function renameExercise (toTitle, toDesc) {
  var headTitle = document.getElementById('exTitle');
  var codeTitle = document.getElementById('exHTitle');
  var desc = document.getElementById('exDesc');
  headTitle.innerHTML = toTitle;
  codeTitle.innerHTML = toTitle;
  desc.innerHTML = toDesc + '.';
}

/* Restituisce il l'attributo "value" dell'elemento 
in cui si specifica l'id */
function getValueFromId(id_string) {
  object_needed =  document.getElementById(id_string)
  return object_needed.value;

}

//  Nasconde tutti i campi di inserimento
function hideAllInputFields() {

  for (let id of ids) {
    document.getElementById(id).style.display = 'none';
  }
}

// data la lista di id e una lista di id da escludere mantiene oscurati i display che non vanno
function showSpecificInputFields(idsToFind, idsToExclude) {
  for (let id of idsToFind) {
    const shouldShow = idsToExclude.indexOf(id) === -1;
    shouldShow ? document.getElementById(id).style.display = 'block' : null;
  }
}

// Effettua un refresh dei campi di inserimento selezionati
function refreshSelectedInputFields(idsToShow, idsToExclude) {
  hideAllInputFields();
  showSpecificInputFields(idsToShow, idsToExclude);
}
 
//  Mostra selettivamente i campi di inserimento 
function showInputs() {

  // Crea un array di eccezioni comuni
  let commonExclusions = [ids[0], ids[5], ids[8]];

  // Crea un array di casi che hanno le stesse esclusioni
  let casesWithCommonExclusions = ['vola', 'corno', 'popolo', 'questua'];
  // Crea un array di casi con solo un'esclusione
  let casesWithOnlyCodeExclusion = ['cena', 'estero'];

  // Verifica se il valore di dropdown_value corrisponde a uno dei casi con esclusioni comuni
  for (let caseValue of casesWithCommonExclusions) {
    if (dropdown_value === caseValue) {
      refreshSelectedInputFields(ids, commonExclusions);
      return;
    }
  }

  // Verifica se il valore di dropdown_value corrisponde a uno dei casi con solo un'esclusione
  for (let caseValue of casesWithOnlyCodeExclusion) {
    if (dropdown_value === caseValue) {
      refreshSelectedInputFields(ids, [ids[8]]);
      return;
    }
  }

  // Verifica se il valore di dropdown_value corrisponde e 'evento' ed esclude price
  if (dropdown_value === 'evento') {
    refreshSelectedInputFields(ids, [ids[5], ids[9]]);
    return;
  } else if(dropdown_value === 'letti') {
    refreshSelectedInputFields(ids, [ids[0], ids[2], ids[4], ids[5], ids[9]]);
    return;
  }

  // Valore predefinito
  hideAllInputFields();
}


//  Genera il codice whatsapp, in base ai valori inseriti dall'utente
async function writeCode() {
  
  /*  Selezionamento oggetti per fare output  */
  const button = document.getElementById(ids[6]);
  const codeBlock = document.getElementById(ids[8]);

  /*  Listener che si attiva al click sul pulsante a fine form  */
  button.addEventListener("click", async function(){ 

    /*  Valori dei vari input dell'utente  */
    const values = getAllValues(ids)

    const eventType = dropdown_value;
    
    /*  Gestione e composizione dei campi di inserimento dell'utente */
    switch (eventType) {
      case "vola":
        await displayVolaEvent(codeBlock, values);
        break;

      case "popolo":
        await displayRiunionePopoloEvent(codeBlock, values);
        break;

      case "questua":
        await displayQuestuaEvent(codeBlock, values);
        break;

      case "corno":
        await displayCornoEvent(codeBlock, values);
        break;

      case "cena":
        await displayDinnerEvent(codeBlock, values);
        break;

      case "evento":
        await displayRegularEvent(codeBlock, values);
        break;

      case "estero":
        await displayTripEvent(codeBlock, values);
        break;

      case "letti":
        await displayRichiestaPostiLetto(codeBlock, values);
        break;
        
      default:
        button.value = "Compila qualcosa!";
        break;
    }
  });
}

function isAndroidBrowser() {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

function breakLineFormatter(isAndroid) {
  if (isAndroid == false) {
    return "<br />";
  } else {
    return `\n`;
  }
}

// FUNZIONI PER LA CREAZIONE DI CODICE NEI VARI CASES DI writeCode()
// Crea il codice per gli eventi di vola
async function displayVolaEvent(codeBlock, values) {
  const descriptionText = buildDescriptionText(values.edescription);
  const timeAndDateText = buildTimeAndDateText(values);
  const clothesText = buildClothesText(effettiValue);
  const addressText = await buildAddressText(values.mapInput);
  
  breakLine = breakLineFormatter(isAndroidBrowser());

  codeBlock.style.display = "block";
  codeBlock.innerHTML = `
    🎺 *RIUNIONE DI V.O.L.A.* 🎺 ${breakLine}${descriptionText}${breakLine}${breakLine}${timeAndDateText}${breakLine}${addressText}${breakLine}${clothesText}`;
}

async function displayRiunionePopoloEvent(codeBlock, values) {
  const descriptionText = buildDescriptionText(values.edescription);
  const timeAndDateText = buildTimeAndDateText(values);
  const addressText = await buildAddressText(values.mapInput);
  const clothesText = buildClothesText(effettiValue);

  breakLine = breakLineFormatter(isAndroidBrowser());

  codeBlock.style.display = "block";
  codeBlock.innerHTML = `
    🐑 *RIUNIONE POPOLO* 🐑 ${breakLine}${descriptionText}${breakLine}${breakLine}${timeAndDateText}${breakLine}${addressText}${breakLine}${clothesText}`;
}

async function displayQuestuaEvent(codeBlock, values) {
  const descriptionText = buildDescriptionText(values.edescription);
  const timeAndDateText = buildTimeAndDateText(values);
  const addressText = await buildAddressText(values.mapInput);
  const clothesText = buildClothesText(effettiValue);

  breakLine = breakLineFormatter(isAndroidBrowser());

  codeBlock.style.display = "block";
  codeBlock.innerHTML = `
  💰 *QUESTUA* 💰 ${breakLine}${descriptionText}${breakLine}${breakLine}${timeAndDateText}${breakLine}${addressText}${breakLine}${clothesText}`;
}

// Crea il codice per gli eventi di Corno
async function displayCornoEvent(codeBlock, values) {
  const descriptionText = buildDescriptionText(values.edescription);
  const timeAndDateText = buildTimeAndDateText(values);
  const addressText = await buildAddressText(values.mapInput);
  const clothesText = buildClothesText(effettiValue);

  breakLine = breakLineFormatter(isAndroidBrowser());

  codeBlock.style.display = "block";
  codeBlock.innerHTML = `
    🐂 *RIUNIONE DEL CORNUS* 🐂${breakLine}${descriptionText}${breakLine}${breakLine}${timeAndDateText}${breakLine}${addressText}${breakLine}${clothesText}`;
}

// Crea il codice per le cene
async function displayDinnerEvent(codeBlock, values) {
  const descriptionText = buildDescriptionText(values.edescription);
  const timeAndDateText = buildTimeAndDateText(values);
  const addressText = await buildAddressText(values.mapInput);
  const priceText = buildPriceText(values.mapInput);
  const clothesText = buildClothesText(effettiValue);

  breakLine = breakLineFormatter(isAndroid);


  codeBlock.style.display = "block";
  codeBlock.innerHTML = `
    🍽️ *CENA ${values.ename}* 🍽️${breakLine}${descriptionText}${breakLine}${breakLine}${timeAndDateText}${breakLine}${addressText}${breakLine}${priceText}${breakLine}${clothesText}`;
}

// Crea il codice per gli eventi generici
async function displayRegularEvent(codeBlock, values) {
  const descriptionText = buildDescriptionText(values.edescription);
  const timeAndDateText = buildTimeAndDateText(values);
  const addressText = await buildAddressText(values.mapInput);
  const clothesText = buildClothesText(effettiValue);

  breakLine = breakLineFormatter(isAndroidBrowser());

  codeBlock.style.display = "block";
  codeBlock.innerHTML = `
  📅 *${values.ename}* 📅${breakLine}${descriptionText} ${breakLine}${breakLine}${timeAndDateText} ${breakLine}${addressText}${breakLine}${clothesText}`;
  }
  
// Crea il codice per gli esteri
async function displayTripEvent(codeBlock, values) {
  const descriptionText = buildDescriptionText(values.edescription);
  const timeAndDateText = buildTimeAndDateText(values);
  const addressText = await buildAddressText(values.mapInput);
  const clothesText = buildClothesText(effettiValue);

  breakLine = breakLineFormatter(isAndroidBrowser());

  codeBlock.style.display = "block";
  codeBlock.innerHTML = `🛫 *ESTERO: ${values.ename}* 🛫${breakLine}${descriptionText}${breakLine}${breakLine}${timeAndDateText}${breakLine}${addressText}${breakLine}${clothesText}`;
  }

async function displayRichiestaPostiLetto(codeBlock, values) {
  const descriptionText = buildDescriptionText(values.edescription);
  const timeAndDateText = buildTimeAndDateText(values);  
  breakLine = breakLineFormatter(isAndroidBrowser());
  const clothesText = buildClothesText(effettiValue);

  codeBlock.style.display = "block";
  codeBlock.innerHTML = `🛌 *RICHIESTA POSTI LETTO* 🛌${breakLine}${descriptionText}${breakLine}${breakLine}${timeAndDateText}${breakLine}${addressText}`;

}

//  FUNZIONI DI SUPPORTO PER QUELLE DI DISPLAY
//  Restituisce tutti i valori degli id
function getAllValues(idStrings) {
  let values = {};
  for (let idString of idStrings) {
    values[idString] = getValueFromId(idString);
  }
  return values;
}
  
//  Restituisce la stringa con la descrizione
function buildDescriptionText(description) {
  return description ? `${description}.` : '';
}

function buildDateText(date) {
  return date ? `${dateToDayName(date)} ${getDateDayNumber(date)} ${dateToMonthName(date)}` : '';
}

function buildTimeText(time) {
  return time ? `🕒 Alle *${time}*` : '';
}
//  Restituisce, compone e formatta la stringa con la data e il tempo
function buildTimeAndDateText(values) {
  let timeText = buildTimeText(values.etime);
  let dateText = buildDateText(values.edate);
  let timeAndDateText = '';

  if (timeText && dateText) {
    timeAndDateText = `${timeText} di *${dateText}*.`;
  } else if (timeText) {
    timeAndDateText = `${timeText}.`;
  } else if (dateText) {
    timeAndDateText = `🕒 In data *${dateText}.*`;
  }

  return timeAndDateText;
}

// Restituisce la stringa con l'indirizzo formattato
async function buildAddressText(address) {
  const link = await getLink(address);
  link != '' ? text = `📍 *${address}* (${link}).` : text = ``;
  return text;

}

//  Restituisce la stringa con il testo formattata
function buildPriceText(price) {
  return price ? `💸 *€${price}*.` : '';
}

function buildClothesText(clothes) {
  switch(clothes) {
    case 'Effetti al completo':
      return `👕 *EFFETTI AL COMPLETO.*`;

    case 'Placca e Feluca':
      return `📿 *PLACCA E FELUCA.*`;
    
    case 'Niente Effetti':
    return `🩲 *NIENTE EFFETTI.*`;

    default:
      return '';
  }
}

//  Restituisce il codice composto e incollato all'interno del blocco code 
function getCode() {
  return document.getElementById('code_block').textContent;
}


//  GESTIONE DEGLI INDIRIZZI

//  Dato un indirizzo ne restituisce le coordinate
async function getCoordinates(location) {
  if(location != '') {
  const locationEncoded = encodeURIComponent(location);
  const response = await fetch(`https://nominatim.openstreetmap.org/search?street=${locationEncoded}&format=json`);
  const data = await response.json();
  const lat = data[0].lat;
  const lon = data[0].lon;
  return [lat,lon];
  } else {
    return null;
  }

}

//  Date le coordinate in entrata viene restituito il link Google avente quei dati
function generateLinkFromCoordinates(coordinates) {
  if (coordinates != null) {
    return `https://www.google.com/maps/place/${coordinates[0]},${coordinates[1]}`;
  }
  return ''
}

async function getLink(location) {
  const coordinates = await getCoordinates(location);
  return generateLinkFromCoordinates(coordinates);
}

//  GESTIONE DELLE DATE
/*  Restituisce il nome del giorno in base alla data */
function dateToDayName(dateToChange) {
  var days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  var date = new Date(dateToChange);
  return days[date.getDay()];
}

//  Restituisce il mese sotto forma di stringa e non di numero
function dateToMonthName(dateToChange) {
  var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  var date = new Date(dateToChange);
  return months[date.getMonth()];
}

//  Restituisce il numero del giorno
function getDateDayNumber(dateToChange) {
  var date = new Date(dateToChange);
  const dayNumber = date.getDate();
  return dayNumber;
}

//  Listeners

//  Listener del dropdown menu che restituisce il valore selezionato
setInterval(function () {
  // Listener del dropdown menu che restituisce il valore selezionato
  document.querySelectorAll('.dropdown-menu li').forEach(function(element) {
    element.addEventListener('click', function() {
      let parent = this.closest('.dropdown');
      let input = parent.querySelector('input');
      dropdown_value = input.value;
      showInputs();
      });
    });
  }, 300);


//  Listener  che copia il codice negli appunti al click sul codice
document.getElementById('code_block').addEventListener('click', function() {
  const textarea = document.createElement("textarea");
  textarea.value = getCode();
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  console.log("Codice copiato nella clipboard.");
})

//  Listener del dropdown menu che ne permette il funzionamento
$('.dropdown').click(function() {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function() {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function() {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

document.getElementById('progress-container').addEventListener('click', function(event) {
  const progressContainer = document.getElementById("progress-container");
  const progressBar = document.getElementById("progress-bar");
  const output = document.getElementById("output");

  let currentProgress = 0;
  const progressStep = 50;
  
  const clickPosition = event.pageX -  progressContainer.offsetLeft;
  const progressWidth = progressContainer.offsetWidth;
  currentProgress = Math.round(clickPosition / progressWidth * 100 / progressStep) * progressStep;


  if (currentProgress == 100) {
    currentProgress = 90.5;
  } else if (currentProgress >= 0 & currentProgress <= 25) {
    currentProgress = 2.5;
  } else {
    currentProgress = 46.5
  }

  output.style.visibility = "visible";
  output.style.left = currentProgress + "%";
  effettiValue = updateOutput(currentProgress);
});


function updateOutput(currentProgress) {
  const selector = document.getElementById('output');
  let output_message = selector.children[1];
  let message;
  if (currentProgress >= 0 && currentProgress < 25) {
    message = "Niente Effetti";
  } else if (currentProgress >= 25 && currentProgress < 75) {
    message = "Placca e Feluca";
  } else if (currentProgress >=75 && currentProgress <= 100){
    message = "Effetti al completo";
  }
  output_message.innerHTML = `${message}`;
  return message;
}



