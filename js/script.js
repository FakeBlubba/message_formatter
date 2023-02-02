renameExercise("Formattatore di messaggi per presenze", 'Questo è uno strumento per aiutare alla formattazione e alla creazione dei messaggi da inoltrare per chiedere presenze');
/*  Animazione per il dropdown menu */
writeCode();

document.querySelectorAll('.dropdown-menu li').forEach(function(element) {
  element.addEventListener('click', function() {
  let parent = this.closest('.dropdown');
  let input = parent.querySelector('input');
  });
  });


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
 


/*  document.querySelectorAll('.dropdown-menu li').forEach(function(element) {
    element.addEventListener('click', function() {
      let parent = this.closest('.dropdown');
      let input = parent.querySelector('input');
      let type_event = input.value;
      return type_event;
    });
  });*/
  
    
  
  $('#ename').focusout(function() {
    type_event = $(this).val();
  });


  $('#edescription').focusout(function() {
    description_event = $(this).val();
  });

  $('#etime').focusout(function() {
    time_event = String($(this).val());
  });

  $('#edate').focusout(function() {
    date_event = $(this).val();
  });

  $('#mapInput').focusout(function() {
    map_event = $(this).val();
  });
/*



  $("*").change(function() {
    output_message = "*" + type_event + "*\n" + "_" + description_event + "_\n📅: *" + date_event + " alle ore: " + time_event + "*\n📍: *";
    $('#code_block').html(output_message);

  });

  //output_message = "*" + type_event + "*\n" + "_" + description_event + "_\n📅: *" + date_event + " alle ore: " + time_event + "*\n📍: *" + mapInput;
  output_message = "*TIPO :" + type_event + "*\n";
  $('#code_block').html(output_message);
*/