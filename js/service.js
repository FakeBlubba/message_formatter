//  Variabili globali
var dropdown_value = '';

// Modifica il titolo e la descrizione della pagina
function renameExercise (toTitle, toDesc) {
  var headTitle = document.getElementById('exTitle');
  var codeTitle = document.getElementById('exHTitle');
  var desc = document.getElementById('exDesc');
  headTitle.innerHTML = toTitle;
  codeTitle.innerHTML = toTitle;
  desc.innerHTML = toDesc + '.';
}

/*function getImage(file_name) {
  var path = 'media/';
  var fs = require('fs');
  var files = fs.readdirSync(path + 'file_name');
}*/


/* Restituisce il l'attributo "value" dell'elemento 
in cui si specifica l'id */
function getValueFromId(id_string) {
  object_needed =  document.getElementById(id_string)
  return object_needed.value;

}

//  Nasconde tutti i campi di inserimento
function hideInputs() {
  document.getElementById('ename').style.display = 'none';
  document.getElementById('edescription').style.display = 'none';
  document.getElementById('etime').style.display = 'none';
  document.getElementById('edate').style.display = 'none';
  document.getElementById('mapInput').style.display = 'none';
  document.getElementById('eprice').style.display = 'none';
  document.getElementById('enter').style.display = 'none';
  document.getElementById('res').style.display = 'none';
  document.getElementById('code_block').style.display = 'none';
}

//  Mostra selettivamente i campi di inserimento 
function getInputsShowed() {
  switch (dropdown_value) {
    case 'vola':
      hideInputs();
      

    document.getElementById('edescription').style.display = 'block';
    document.getElementById('etime').style.display = 'block';
    document.getElementById('edate').style.display = 'block';
    document.getElementById('mapInput').style.display = 'block';
    document.getElementById('res').style.display = 'none';
    document.getElementById('enter').style.display = 'block';
    
    break;

    case 'corno':
      hideInputs();
      document.getElementById('edescription').style.display = 'block';
      document.getElementById('etime').style.display = 'block';
      document.getElementById('edate').style.display = 'block';
      document.getElementById('mapInput').style.display = 'block';
      document.getElementById('res').style.display = 'none';
      document.getElementById('enter').style.display = 'block';
      break;


      case 'cena':
        hideInputs();
        document.getElementById('ename').style.display = 'block';
        document.getElementById('edescription').style.display = 'block';
        document.getElementById('etime').style.display = 'block';
        document.getElementById('edate').style.display = 'block';
        document.getElementById('mapInput').style.display = 'block';
        document.getElementById('eprice').style.display = 'block';
        document.getElementById('res').style.display = 'none';
        document.getElementById('enter').style.display = 'block';
        break;


        case 'evento':
          hideInputs();
          document.getElementById('ename').style.display = 'block';
          document.getElementById('edescription').style.display = 'block';
          document.getElementById('etime').style.display = 'block';
          document.getElementById('edate').style.display = 'block';
          document.getElementById('mapInput').style.display = 'block';
          document.getElementById('eprice').style.display = 'block';
          document.getElementById('res').style.display = 'none';
          document.getElementById('enter').style.display = 'block';
          break;

          case 'estero':
            hideInputs();
            document.getElementById('ename').style.display = 'block';
            document.getElementById('edescription').style.display = 'block';
            document.getElementById('etime').style.display = 'block';
            document.getElementById('edate').style.display = 'block';
            document.getElementById('mapInput').style.display = 'block';
            document.getElementById('eprice').style.display = 'block';
            document.getElementById('res').style.display = 'none';
            document.getElementById('enter').style.display = 'block';
            break;
        
      default:
        hideInputs();
        break;
    
  }
}

//  Compone il messaggio in base ai valori inseriti 
function writeCode() {
  
  /*  Selezionamento oggetti per fare output  */
  var button = document.getElementById('enter');
  var codeBlock = document.getElementById('code_block')

  /*  Listener che si attiva al click sul pulsante a fine form  */
  button.addEventListener("click", function(){ 

    /*  Valori dei vari input dell'utente  */
    var event_name = getValueFromId('ename')
    var edescription = getValueFromId('edescription');
    var etime = getValueFromId('etime');
    var edate = getValueFromId('edate');
    var eaddress = getValueFromId('mapInput');
    var eprice = getValueFromId('eprice');

    /*  Gestione dell'errore */
    edescription ? description_text = edescription + ".<br /> <br />": description_text = ''
    etime ? time_and_date_text = "🕒 Alle *" + etime + "* del *" + edate + ".*<br />": time_and_date_text = ''
    eaddress ? address_text = "📍 *" + eaddress + ".*<br />": address_text = ''
    eprice ? price_text = "💸 *€" + eprice + "*<br />" : price_text = ''

    /*  Gestione e composizione dei campi di inserimento dell'utente */
    switch (dropdown_value) {
  case 'vola':

    codeBlock.style.display = 'block';
    codeBlock.innerHTML = "<br />🎺 *RIUNIONE DI V.O.L.A.* 🎺 <br />" + description_text + time_and_date_text + address_text;
    break;

  case 'corno':
    codeBlock.style.display = 'block';
    codeBlock.innerHTML = "🐂 *RIUNIONE DEL CORNUS* 🐂<br />" + description_text + time_and_date_text + address_text;
    break;


  case 'cena':
    codeBlock.style.display = 'block';
    codeBlock.innerHTML = "🍽️ *CENA " + event_name + "* 🍽️<br />" + description_text + time_and_date_text + address_text + price_text;
    break;

  case 'evento':
    codeBlock.style.display = 'block';
    codeBlock.innerHTML = "📆 *" + event_name + "* 📆<br />" + description_text + time_and_date_text + + address_text;
    break;

    case 'estero':
      codeBlock.style.display = 'block';
      codeBlock.innerHTML = "🚐 *ESTERO A " + event_name + "* 🚐<br />" + description_text + time_and_date_text + address_text + price_text;
      break;

  default:
    button.value = "Compila qualcosa!";
} 
  });
}

//  Restituisce il codice composto e incollato all'interno del blocco code 
function getCode() {
  return document.getElementById('code_block').textContent;
}

//  Listeners

//  Listener del dropdown menu che restituisce il valore selezionato
setInterval(function () {
  document.querySelectorAll('.dropdown-menu li').forEach(function(element) {
  element.addEventListener('click', function() {
  getInputsShowed();
  let parent = this.closest('.dropdown');
  let input = parent.querySelector('input');
  dropdown_value = input.value
  });
  });
}, 500);

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