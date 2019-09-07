// formAjax + errors for modal form
$('#consultForm').submit(function(e) {
  e.preventDefault();
//adding variables for input checks and errors if failed
  var name = $('#name').val(),
      phone = $('#phone').val(),
      problem = $('#problem').val(),

// input wrappers to add error class
      nameWrap = $('#nameWrap'),
      phoneWrap = $('#phoneWrap'),

//regExp variables
      nameRegExp = /^[A-Za-zА-Яа-я\s-]+$/gm,
      phoneRegExp = /^[+0-9]+[ -?][0-9]+[ -?]+[0-9]+[ -?]+[0-9]+[ -?]+[0-9]+$/gm,

//regExp comparing
      nameTrue = name.match(nameRegExp),
      phoneTrue = phone.match(phoneRegExp);

//main if/else statement
//this part of main if/else statement starts if form check was ok
  if ( (phoneTrue != null) && (nameTrue != null ) ) {
//ajax sends all the values to some server
    $.ajax({
      url: "php/send.php",//backend adress
      type: "POST",
      data: {
            name,
            phone,
            problem,
          },
//this ajax statement goes if server responce was ok
      success: function(response) {
          setTimeout(function() {
          $("#consultForm").addClass("consultFormSuccess");
        }, 700);

          setTimeout(function() {
          $("#consultForm").removeClass("consultFormSuccess");
        }, 5000);
      },
//this ajax statement goes if server responce was fucked
      error: function(response) {

      },
    });

//this part of main if/else statement starts if form check has failed
  } else {
    if (phoneTrue == null) {
      phoneWrap.addClass("error");
    }

    if (nameTrue == null ) {
      nameWrap.addClass("error");
    }
  }
});



// formAjax + errors for consult form
$('#consultFormAgain').submit(function(e) {
  e.preventDefault();
//adding variables for input checks and errors if failed
  var name = $('#nameAgain').val(),
      phone = $('#phoneAgain').val(),
      problem = $('#problemAgain').val(),

// input wrappers to add error class
      nameWrap = $('#nameWrapAgain'),
      phoneWrap = $('#phoneWrapAgain'),

//regExp variables
      nameRegExp = /^[A-Za-zА-Яа-я\s-]+$/gm,
      phoneRegExp = /^[+0-9]+[ -?][0-9]+[ -?]+[0-9]+[ -?]+[0-9]+[ -?]+[0-9]+$/gm,

//regExp comparing
      nameTrue = name.match(nameRegExp),
      phoneTrue = phone.match(phoneRegExp);

//main if/else statement
//this part of main if/else statement starts if form check was ok
  if ( (phoneTrue != null) && (nameTrue != null ) ) {
//ajax sends all the values to some server
    $.ajax({
      url: "php/send.php",//backend adress
      type: "POST",
      data: {
            name,
            phone,
            problem,
      },
//this ajax statement goes if server responce was ok
      success: function(response) {
          setTimeout(function() {
          $("#consultFormAgain").addClass("consultFormSuccess");
        }, 700);

          setTimeout(function() {
          $("#consultFormAgain").removeClass("consultFormSuccess");
        }, 5000);
      },
//this ajax statement goes if server responce was fucked
      error: function(response) {

      },
    });

//this part of main if/else statement starts if form check has failed
  } else {
    if (phoneTrue == null) {
      phoneWrap.addClass("error");
    }

    if (nameTrue == null ) {
      nameWrap.addClass("error");
    }
  }
});



// formAjax + errors for Avi Hefec form
$('#consultFormAvi').submit(function(e) {
  e.preventDefault();
//adding variables for input checks and errors if failed
  var name = $('#nameAvi').val(),
      phone = $('#phoneAvi').val(),
      problem = $('#problemAvi').val(),
      doctor = $('#aviNinja').val(),

// input wrappers to add error class
      nameWrap = $('#nameWrapAvi'),
      phoneWrap = $('#phoneWrapAvi'),

//regExp variables
      nameRegExp = /^[A-Za-zА-Яа-я\s-]+$/gm,
      phoneRegExp = /^[+0-9]+[ -?][0-9]+[ -?]+[0-9]+[ -?]+[0-9]+[ -?]+[0-9]+$/gm,

//regExp comparing
      nameTrue = name.match(nameRegExp),
      phoneTrue = phone.match(phoneRegExp);

//main if/else statement
//this part of main if/else statement starts if form check was ok
  if ( (phoneTrue != null) && (nameTrue != null ) ) {
//ajax sends all the values to some server
    $.ajax({
      url: "php/sendDoctors.php",//backend adress
      type: "POST",
      data: {
            name,
            phone,
            problem,
            doctor,
      },
//this ajax statement goes if server responce was ok
      success: function(response) {
          setTimeout(function() {
          $("#consultFormAvi").addClass("consultFormSuccess");
        }, 700);

          setTimeout(function() {
          $("#consultFormAvi").removeClass("consultFormSuccess");
        }, 5000);
      },
//this ajax statement goes if server responce was fucked
      error: function(response) {

      },
    });

//this part of main if/else statement starts if form check has failed
  } else {
    if (phoneTrue == null) {
      phoneWrap.addClass("error");
    }

    if (nameTrue == null ) {
      nameWrap.addClass("error");
    }
  }
});



// formAjax + errors for Ilan Ron form
$('#consultFormIlan').submit(function(e) {
  e.preventDefault();
//adding variables for input checks and errors if failed
  var name = $('#nameIlan').val(),
      phone = $('#phoneIlan').val(),
      problem = $('#problemIlan').val(),
      doctor = $('#ilanNinja').val(),

// input wrappers to add error class
      nameWrap = $('#nameWrapIlan'),
      phoneWrap = $('#phoneWrapIlan'),

//regExp variables
      nameRegExp = /^[A-Za-zА-Яа-я\s-]+$/gm,
      phoneRegExp = /^[+0-9]+[ -?][0-9]+[ -?]+[0-9]+[ -?]+[0-9]+[ -?]+[0-9]+$/gm,

//regExp comparing
      nameTrue = name.match(nameRegExp),
      phoneTrue = phone.match(phoneRegExp);

//main if/else statement
//this part of main if/else statement starts if form check was ok
  if ( (phoneTrue != null) && (nameTrue != null ) ) {
//ajax sends all the values to some server
    $.ajax({
      url: "php/sendDoctors.php",//backend adress
      type: "POST",
      data: {
            name,
            phone,
            problem,
            doctor,
      },
//this ajax statement goes if server responce was ok
      success: function(response) {
          setTimeout(function() {
          $("#consultFormIlan").addClass("consultFormSuccess");
        }, 700);

          setTimeout(function() {
          $("#consultFormIlan").removeClass("consultFormSuccess");
        }, 5000);
      },
//this ajax statement goes if server responce was fucked
      error: function(response) {

      },
    });

//this part of main if/else statement starts if form check has failed
  } else {
    if (phoneTrue == null) {
      phoneWrap.addClass("error");
    }

    if (nameTrue == null ) {
      nameWrap.addClass("error");
    }
  }
});



// formAjax + errors for Victoria Neyman form
$('#consultFormVictoria').submit(function(e) {
  e.preventDefault();
//adding variables for input checks and errors if failed
  var name = $('#nameVictoria').val(),
      phone = $('#phoneVictoria').val(),
      problem = $('#problemVictoria').val(),
      doctor = $('#victoriaNinja').val(),

// input wrappers to add error class
      nameWrap = $('#nameWrapVictoria'),
      phoneWrap = $('#phoneWrapVictoria'),

//regExp variables
      nameRegExp = /^[A-Za-zА-Яа-я\s-]+$/gm,
      phoneRegExp = /^[+0-9]+[ -?][0-9]+[ -?]+[0-9]+[ -?]+[0-9]+[ -?]+[0-9]+$/gm,

//regExp comparing
      nameTrue = name.match(nameRegExp),
      phoneTrue = phone.match(phoneRegExp);

//main if/else statement
//this part of main if/else statement starts if form check was ok
  if ( (phoneTrue != null) && (nameTrue != null ) ) {
//ajax sends all the values to some server
    $.ajax({
      url: "php/sendDoctors.php",//backend adress
      type: "POST",
      data: {
            name,
            phone,
            problem,
            doctor,
      },
//this ajax statement goes if server responce was ok
      success: function(response) {
          setTimeout(function() {
          $("#consultFormVictoria").addClass("consultFormSuccess");
        }, 700);

          setTimeout(function() {
          $("#consultFormVictoria").removeClass("consultFormSuccess");
        }, 5000);
      },
//this ajax statement goes if server responce was fucked
      error: function(response) {

      },
    });

//this part of main if/else statement starts if form check has failed
  } else {
    if (phoneTrue == null) {
      phoneWrap.addClass("error");
    }

    if (nameTrue == null ) {
      nameWrap.addClass("error");
    }
  }
});




// formAjax + errors for Andgey Nado form
$('#consultFormAndgey').submit(function(e) {
  e.preventDefault();
//adding variables for input checks and errors if failed
  var name = $('#nameAndgey').val(),
      phone = $('#phoneAndgey').val(),
      problem = $('#problemAndgey').val(),
      doctor = $('#andgeyNinja').val(),

// input wrappers to add error class
      nameWrap = $('#nameWrapAndgey'),
      phoneWrap = $('#phoneWrapAndgey'),

//regExp variables
      nameRegExp = /^[A-Za-zА-Яа-я\s-]+$/gm,
      phoneRegExp = /^[+0-9]+[ -?][0-9]+[ -?]+[0-9]+[ -?]+[0-9]+[ -?]+[0-9]+$/gm,

//regExp comparing
      nameTrue = name.match(nameRegExp),
      phoneTrue = phone.match(phoneRegExp);

//main if/else statement
//this part of main if/else statement starts if form check was ok
  if ( (phoneTrue != null) && (nameTrue != null ) ) {
//ajax sends all the values to some server
    $.ajax({
      url: "php/sendDoctors.php",//backend adress
      type: "POST",
      data: {
            name,
            phone,
            problem,
            doctor,
      },
//this ajax statement goes if server responce was ok
      success: function(response) {
          setTimeout(function() {
          $("#consultFormAndgey").addClass("consultFormSuccess");
        }, 700);

          setTimeout(function() {
          $("#consultFormAndgey").removeClass("consultFormSuccess");
        }, 5000);
      },
//this ajax statement goes if server responce was fucked
      error: function(response) {

      },
    });

//this part of main if/else statement starts if form check has failed
  } else {
    if (phoneTrue == null) {
      phoneWrap.addClass("error");
    }

    if (nameTrue == null ) {
      nameWrap.addClass("error");
    }
  }
});




// formAjax + errors for 4 steps consult form
$('#fourStepsForm').submit(function(e) {
  e.preventDefault();
//adding variables for input checks and errors if failed
  var name = $('#fourStepsFormName').val(),
      phone = $('#fourStepsFormPhone').val(),
      problem = $('#fourStepsFormProblem').val(),

// input wrappers to add error class
      nameWrap = $('#fourStepsFormNameWrap'),
      phoneWrap = $('#fourStepsFormPhoneWrap'),

//regExp variables
      nameRegExp = /^[A-Za-zА-Яа-я\s-]+$/gm,
      phoneRegExp = /^[+0-9]+[ -?][0-9]+[ -?]+[0-9]+[ -?]+[0-9]+[ -?]+[0-9]+$/gm,

//regExp comparing
      nameTrue = name.match(nameRegExp),
      phoneTrue = phone.match(phoneRegExp);

//main if/else statement
//this part of main if/else statement starts if form check was ok
  if ( (phoneTrue != null) && (nameTrue != null ) ) {
//ajax sends all the values to some server
    $.ajax({
      url: "php/send.php",//backend adress
      type: "POST",
      data: {
            name,
            phone,
            problem,
      },
//this ajax statement goes if server responce was ok
      success: function(response) {
          setTimeout(function() {
          $("#fourStepsForm").addClass("consultFormSuccess");
        }, 700);

          setTimeout(function() {
          $("#fourStepsForm").removeClass("consultFormSuccess");
        }, 5000);
      },
//this ajax statement goes if server responce was fucked
      error: function(response) {

      },
    });

//this part of main if/else statement starts if form check has failed
  } else {
    if (phoneTrue == null) {
      phoneWrap.addClass("error");
    }

    if (nameTrue == null ) {
      nameWrap.addClass("error");
    }
  }
});




// formAjax + errors for call me form
$('#callMeForm').submit(function(e) {
  e.preventDefault();
//adding variables for input checks and errors if failed
  var phone = $('#callMePhone').val(),

// input wrappers to add error class
      phoneWrap = $('#callMePhoneWrap'),

//regExp variables
      phoneRegExp = /^[+0-9]+[ -?][0-9]+[ -?]+[0-9]+[ -?]+[0-9]+[ -?]+[0-9]+$/gm,

//regExp comparing
      phoneTrue = phone.match(phoneRegExp);

//main if/else statement
//this part of main if/else statement starts if form check was ok
  if ( (phoneTrue != null) ) {
//ajax sends all the values to some server
    $.ajax({
      url: "php/sendCallMe.php",//backend adress
      type: "POST",
      data: {
            phone,
      },
//this ajax statement goes if server responce was ok
      success: function(response) {
          setTimeout(function() {
          $("#callMeForm").addClass("consultFormSuccess");
        }, 700);

          setTimeout(function() {
          $("#callMeForm").removeClass("consultFormSuccess");
        }, 5000);
      },
//this ajax statement goes if server responce was fucked
      error: function(response) {

      },
    });

//this part of main if/else statement starts if form check has failed
  } else {
    if (phoneTrue == null) {
      phoneWrap.addClass("error");
    }
  }
});


// formAjax + errors for 4 steps consult form
$('#downloadForm').submit(function(e) {
  e.preventDefault();
//adding variables for input checks and errors if failed
  var name = $('#nameDownload').val(),
      phone = $('#phoneDownload').val(),
      problem = $('#messendgerSelect').val(),

// input wrappers to add error class
      nameWrap = $('#nameWrapDownload'),
      phoneWrap = $('#phoneWrapDownload'),

//regExp variables
      nameRegExp = /^[A-Za-zА-Яа-я\s-]+$/gm,
      phoneRegExp = /^[+0-9]+[ -?][0-9]+[ -?]+[0-9]+[ -?]+[0-9]+[ -?]+[0-9]+$/gm,

//regExp comparing
      nameTrue = name.match(nameRegExp),
      phoneTrue = phone.match(phoneRegExp);

//main if/else statement
//this part of main if/else statement starts if form check was ok
  if ( (phoneTrue != null) && (nameTrue != null ) ) {
//ajax sends all the values to some server
    $.ajax({
      url: "php/send.php",//backend adress
      type: "POST",
      data: {
            name,
            phone,
            problem,
      },
//this ajax statement goes if server responce was ok
      success: function(response) {
          setTimeout(function() {
          $("#downloadForm").addClass("consultFormSuccess");
        }, 700);
      },
//this ajax statement goes if server responce was fucked
      error: function(response) {

      },
    });

//this part of main if/else statement starts if form check has failed
  } else {
    if (phoneTrue == null) {
      phoneWrap.addClass("error");
    }

    if (nameTrue == null ) {
      nameWrap.addClass("error");
    }
  }
});