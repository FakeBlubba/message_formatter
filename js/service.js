var dropdown_value = '';

function renameExercise (toTitle, toDesc) {
  var headTitle = document.getElementById('exTitle');
  var codeTitle = document.getElementById('exHTitle');
  var desc = document.getElementById('exDesc');
  headTitle.innerHTML = toTitle;
  codeTitle.innerHTML = toTitle;
  desc.innerHTML = toDesc + '.';
}

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



/*  todo va rifatto col queryselector */
function getValueFromId(id_string) {

  object_needed =  document.getElementById(id_string)
  return object_needed.value;

}


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

function writeCode() {
  
  var button = document.getElementById('enter');
  var codeBlock = document.getElementById('code_block')

  button.addEventListener("click", function(){ 
    var event_name = getValueFromId('ename')
    var edescription = getValueFromId('edescription');
    var etime = getValueFromId('etime');
    var edate = getValueFromId('edate');
    var eaddress = getValueFromId('mapInput');
    var eprice = getValueFromId('eprice');


    edescription ? description_text = edescription + ".<br /> <br />": description_text = ''
    etime ? time_and_date_text = "🕒 Alle *" + etime + "* del *" + edate + ".*<br />": time_and_date_text = ''
    eaddress ? address_text = "📍 *" + eaddress + ".*<br />": address_text = ''
    eprice ? price_text = "💸 *€" + eprice + "*<br />" : price_text = ''

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

function getCode() {
  return document.getElementById('code_block').textContent;
}

document.getElementById('code_block').addEventListener('click', function() {


  const textarea = document.createElement("textarea");
  textarea.value = getCode();
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  console.log("Codice copiato nella clipboard.");
})