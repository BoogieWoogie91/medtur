//burger button and modal variables
var burgerButtonWrap = document.getElementById('burgerButtonWrap');
var burgerModal = document.getElementById('burgerModal');
var burgerBase = document.getElementById('burgerBase');

//slider button Variables(consultFormModal Call)
var plusButton = document.getElementById('plusButton');
var cover = document.getElementById('cover');

//consultFormModal id's
var headerFormCall = document.getElementById('headerCounsultButton');
var callFormFromBurger = document.getElementById('callFormFromBurger');
var formModal = document.getElementById('formModal');
var formClose = document.getElementById('formClose');
var nameWrap = document.getElementById('nameWrap');
var phoneWrap = document.getElementById('phoneWrap');
var name = document.getElementById('name');
var phone = document.getElementById('phone');

//consultFormBlock id's
var nameWrapAgain = document.getElementById('nameWrapAgain');
var phoneWrapAgain = document.getElementById('phoneWrapAgain');
var nameAgain = document.getElementById('nameAgain');
var phoneAgain = document.getElementById('phoneAgain');

//Avi Hefec form id's
var subToAvi = document.getElementById('subToAvi');
var formModalAvi = document.getElementById('formModalAvi');
var formCloseAvi = document.getElementById('formCloseAvi');
var nameWrapAvi = document.getElementById('nameWrapAvi');
var phoneWrapAvi = document.getElementById('phoneWrapAvi');
var nameAvi = document.getElementById('nameAvi');
var phoneAvi = document.getElementById('phoneAvi');

//Ilan Ron form id's
var subToIlan = document.getElementById('subToIlan');
var formModalIlan = document.getElementById('formModalIlan');
var formCloseIlan = document.getElementById('formCloseIlan');
var nameWrapIlan = document.getElementById('nameWrapIlan');
var phoneWrapIlan = document.getElementById('phoneWrapIlan');
var nameIlan = document.getElementById('nameIlan');
var phoneIlan = document.getElementById('phoneIlan');

//Victoria Neyman form id's
var subToVictoria = document.getElementById('subToVictoria');
var formModalVictoria = document.getElementById('formModalVictoria');
var formCloseVictoria = document.getElementById('formCloseVictoria');
var nameWrapVictoria = document.getElementById('nameWrapVictoria');
var phoneWrapVictoria = document.getElementById('phoneWrapVictoria');
var nameVictoria = document.getElementById('nameVictoria');
var phoneVictoria = document.getElementById('phoneVictoria');

//Andgey Nado form id's
var subToAndgey = document.getElementById('subToAndgey');
var formModalAndgey = document.getElementById('formModalAndgey');
var formCloseAndgey = document.getElementById('formCloseAndgey');
var nameWrapAndgey = document.getElementById('nameWrapAndgey');
var phoneWrapAndgey = document.getElementById('phoneWrapAndgey');
var nameAndgey = document.getElementById('nameAndgey');
var phoneAndgey = document.getElementById('phoneAndgey');

//clinics slider id's
var hahayalBtn = document.getElementById('hahayalBtn');
var shibaBtn = document.getElementById('shibaBtn');
var gercliyaBtn = document.getElementById('gercliyaBtn');
var clinicsSlideHahayal = document.getElementById('clinicsSlideHahayal');
var clinicsSlideShiba = document.getElementById('clinicsSlideShiba');
var clinicsSlideGercliya = document.getElementById('clinicsSlideGercliya');

//4 steps form id's
var fourStepsFormNameWrap = document.getElementById('fourStepsFormNameWrap');
var fourStepsFormPhoneWrap = document.getElementById('fourStepsFormPhoneWrap');
var fourStepsFormName = document.getElementById('fourStepsFormName');
var fourStepsFormPhoneWrap = document.getElementById('fourStepsFormPhoneWrap');

//feedback card_1 slider button Variables(consultFormModal Call)
var feedBackButton_1 = document.getElementById('feedBackButton_1');
var feedBackCover_1 = document.getElementById('feedBackCover_1');
var closeFeedBackModal_1 = document.getElementById('closeFeedBackModal_1');

//feedback card_2 slider button Variables(consultFormModal Call)
var feedBackButton_2 = document.getElementById('feedBackButton_2');
var feedBackCover_2 = document.getElementById('feedBackCover_2');
var closeFeedBackModal_2 = document.getElementById('closeFeedBackModal_2');

//feedback card_3 slider button Variables(consultFormModal Call)
var feedBackButton_3 = document.getElementById('feedBackButton_3');
var feedBackCover_3 = document.getElementById('feedBackCover_3');
var closeFeedBackModal_3 = document.getElementById('closeFeedBackModal_3');

//feedback card_4 slider button Variables(consultFormModal Call)
var feedBackButton_4 = document.getElementById('feedBackButton_4');
var feedBackCover_4 = document.getElementById('feedBackCover_4');
var closeFeedBackModal_4 = document.getElementById('closeFeedBackModal_4');

//call me form id's
var callMePhoneWrap = document.getElementById('callMePhoneWrap');
var callMePhone = document.getElementById('callMePhone');

//downloadForm ID's
var downloadButton = document.getElementById('downloadButton');
var formModalAdvise = document.getElementById('formModalAdvise');
var formCloseDownload = document.getElementById('formCloseDownload');

// download form call
downloadButton.addEventListener("click", function() {
  classToggler(formModalAdvise, 'activeFormModal');
});

formCloseDownload.addEventListener("click", function() {
  classToggler(formModalAdvise, 'activeFormModal');
});


//burger menu call
burgerButtonWrap.addEventListener("click", function() {
    classToggler (burgerBase, 'activeBurger');
    classToggler (burgerModal, 'burgerModalActive');
});

//consultFormModal call from burger modal
callFormFromBurger.addEventListener("click", function() {
    classToggler(plusButton, 'activePlusButton');
    classToggler(cover, 'activeCover');
    classToggler(formModal, 'activeFormModal');
});

//consultFormModal call from header(desktop)
headerFormCall.addEventListener("click", function() {
    classToggler(plusButton, 'activePlusButton');
    classToggler(cover, 'activeCover');
    classToggler(formModal, 'activeFormModal');
});

//consultFormModal call from with slider button
plusButton.addEventListener("click", function() {
    classToggler(plusButton, 'activePlusButton');
    classToggler(cover, 'activeCover');
    classToggler(formModal, 'activeFormModal');
});

//consultFormModal close
formClose.addEventListener("click", function() {
    classToggler(plusButton, 'activePlusButton');
    classToggler(cover, 'activeCover');
    classToggler(formModal, 'activeFormModal');
});

//consultFormModal name input clear
document.getElementById('name').addEventListener("focus", function() {
    nameWrap.classList.remove('error');
});

//consultFormModal phone input clear
document.getElementById('phone').addEventListener("focus", function() {
    phoneWrap.classList.remove('error');
});




//consultFormBlock name input clear
document.getElementById('nameAgain').addEventListener("focus", function() {
    nameWrapAgain.classList.remove('error');
});

//consultFormBlock phone input clear
document.getElementById('phoneAgain').addEventListener("focus", function() {
    phoneWrapAgain.classList.remove('error');
});




//avi hefec form call
subToAvi.addEventListener("click", function() {
    classToggler(formModalAvi, 'activeFormModal');
});

//avi hefec form close
formCloseAvi.addEventListener("click", function() {
    classToggler(formModalAvi, 'activeFormModal');
});

//avi hefec name input clear
document.getElementById('nameAvi').addEventListener("focus", function() {
    nameWrapAvi.classList.remove('error');
});

//avi hefec name phone clear
document.getElementById('phoneAvi').addEventListener("focus", function() {
    phoneWrapAvi.classList.remove('error');
});




//ilan ron form call
subToIlan.addEventListener("click", function() {
    classToggler(formModalIlan, 'activeFormModal');
});

//ilan ron form close
formCloseIlan.addEventListener("click", function() {
    classToggler(formModalIlan, 'activeFormModal');
});

//ilan ron name input clear
document.getElementById('nameIlan').addEventListener("focus", function() {
    nameWrapIlan.classList.remove('error');
});

//ilan ron phone input clear
document.getElementById('phoneIlan').addEventListener("focus", function() {
    phoneWrapIlan.classList.remove('error');
});




//victoria neyman form call
subToVictoria.addEventListener("click", function() {
    classToggler(formModalVictoria, 'activeFormModal');
});

//victoria neyman form close
formCloseVictoria.addEventListener("click", function() {
    classToggler(formModalVictoria, 'activeFormModal');
});

//victoria neyman name input clear
document.getElementById('nameVictoria').addEventListener("focus", function() {
    nameWrapVictoria.classList.remove('error');
});

//victoria neyman phone input clear
document.getElementById('phoneVictoria').addEventListener("focus", function() {
    phoneWrapVictoria.classList.remove('error');
});





//andgey nado form call
subToAndgey.addEventListener("click", function() {
    classToggler(formModalAndgey, 'activeFormModal');
});

//andgey nado form close
formCloseAndgey.addEventListener("click", function() {
    classToggler(formModalAndgey, 'activeFormModal');
});

//andgey nado name input clear
document.getElementById('nameAndgey').addEventListener("focus", function() {
    nameWrapAndgey.classList.remove('error');
});

//andgey nado phone input clear
document.getElementById('phoneAndgey').addEventListener("focus", function() {
    phoneWrapAndgey.classList.remove('error');
});




//clinic slider hahayal action
hahayalBtn.addEventListener("click", function() {
    hahayalBtn.classList.add('activeButton');
    shibaBtn.classList.remove('activeButton');
    gercliyaBtn.classList.remove('activeButton');

    clinicsSlideHahayal.classList.add('slideShow');
    clinicsSlideHahayal.classList.remove('slideAway');

    clinicsSlideShiba.classList.add('slideAway');
    clinicsSlideShiba.classList.remove('slideShow');

    clinicsSlideGercliya.classList.add('slideAway');
    clinicsSlideGercliya.classList.remove('slideShow');
});

//clinic slider shiba action
shibaBtn.addEventListener("click", function() {
    hahayalBtn.classList.remove('activeButton');
    shibaBtn.classList.add('activeButton');
    gercliyaBtn.classList.remove('activeButton');

    clinicsSlideHahayal.classList.add('slideAway');
    clinicsSlideHahayal.classList.remove('slideShow');

    clinicsSlideShiba.classList.add('slideShow');
    clinicsSlideShiba.classList.remove('slideAway');

    clinicsSlideGercliya.classList.add('slideAway');
    clinicsSlideGercliya.classList.remove('slideShow');
});

//clinic slider gercliya action
gercliyaBtn.addEventListener("click", function() {
    hahayalBtn.classList.remove('activeButton');
    shibaBtn.classList.remove('activeButton');
    gercliyaBtn.classList.add('activeButton');

    clinicsSlideHahayal.classList.add('slideAway');
    clinicsSlideHahayal.classList.remove('slideShow');

    clinicsSlideShiba.classList.add('slideAway');
    clinicsSlideShiba.classList.remove('slideShow');

    clinicsSlideGercliya.classList.add('slideShow');
    clinicsSlideGercliya.classList.remove('slideAway');
});

//4 steps form name input clear
document.getElementById('fourStepsFormName').addEventListener("focus", function() {
    fourStepsFormNameWrap.classList.remove('error');
});

//4 steps form phone input clear
document.getElementById('fourStepsFormPhone').addEventListener("focus", function() {
    fourStepsFormPhoneWrap.classList.remove('error');
});


//burger modal close
function modalClose() {
    classToggler (burgerBase, 'activeBurger');
    classToggler (burgerModal, 'burgerModalActive');
};

//form modal call
function modalCall() {
    classToggler(cover, 'activeCover');
    classToggler(formModal, 'activeFormModal');
};

//pattern to toggle classes
function classToggler (elemID, elemCl) {
    elemID.classList.toggle(elemCl);
};

//accordion action
var acc = document.getElementsByClassName("accordion");
    var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


//slick js params
$(document).ready(function(){
  $('.feedBackSlider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><div class="sliderArrow"></div></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"><div class="sliderArrow"></div></button>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    },

    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }
  ]
});
});


//feedbackCard_1 modal call
feedBackButton_1.addEventListener("click", function() {
    classToggler(feedBackButton_1, 'activePlusButton');
    classToggler(feedBackCover_1, 'activeCover');
    classToggler(feedBackModal_1, 'feedBackModalActive');
});

//feedbackCard_1 modal close
closeFeedBackModal_1.addEventListener("click", function() {
    classToggler(feedBackButton_1, 'activePlusButton');
    classToggler(feedBackCover_1, 'activeCover');
    classToggler(feedBackModal_1, 'feedBackModalActive');
});

//feedbackCard_2 modal call
feedBackButton_2.addEventListener("click", function() {
    classToggler(feedBackButton_2, 'activePlusButton');
    classToggler(feedBackCover_2, 'activeCover');
    classToggler(feedBackModal_2, 'feedBackModalActive');
});

//feedbackCard_2 modal close
closeFeedBackModal_2.addEventListener("click", function() {
    classToggler(feedBackButton_2, 'activePlusButton');
    classToggler(feedBackCover_2, 'activeCover');
    classToggler(feedBackModal_2, 'feedBackModalActive');
});

//feedbackCard_3 modal call
feedBackButton_3.addEventListener("click", function() {
    classToggler(feedBackButton_3, 'activePlusButton');
    classToggler(feedBackCover_3, 'activeCover');
    classToggler(feedBackModal_3, 'feedBackModalActive');
});

//feedbackCard_3 modal close
closeFeedBackModal_3.addEventListener("click", function() {
    classToggler(feedBackButton_3, 'activePlusButton');
    classToggler(feedBackCover_3, 'activeCover');
    classToggler(feedBackModal_3, 'feedBackModalActive');
});

//feedbackCard_4 modal call
feedBackButton_4.addEventListener("click", function() {
    classToggler(feedBackButton_4, 'activePlusButton');
    classToggler(feedBackCover_4, 'activeCover');
    classToggler(feedBackModal_4, 'feedBackModalActive');
});

//feedbackCard_4 modal close
closeFeedBackModal_4.addEventListener("click", function() {
    classToggler(feedBackButton_4, 'activePlusButton');
    classToggler(feedBackCover_4, 'activeCover');
    classToggler(feedBackModal_4, 'feedBackModalActive');
});




//call me form input clear
document.getElementById('callMePhone').addEventListener("focus", function() {
    callMePhoneWrap.classList.remove('error');
});

$(window).scroll(function() {
          var height = $(window).scrollTop();

          /*Если сделали скролл на 100px задаём новый класс для header*/
          if(height > 40){
              $('#rowTobeHidden').addClass('hidden');
          } else {
              /*Если меньше 100px удаляем класс для header*/
              $('#rowTobeHidden').removeClass('hidden');
          }
      });

$(window).scroll(function() {
          var height = $(window).scrollTop();

          /*Если сделали скролл на 100px задаём новый класс для header*/
          if(height > 40){
              $('#rowTobeHidden_2').addClass('hidden');
          } else {
              /*Если меньше 100px удаляем класс для header*/
              $('#rowTobeHidden_2').removeClass('hidden');
          }
      });