jQuery(document).ready(function($) {
  
  var wW = $(window).width();

  if((wW >= 799) && (wW <= 1500)){
    var gridWidth = wW * 0.8;
    var gutters = (wW - gridWidth) / 2;
    var halfGrid = gridWidth / 2;

    $('.col-6.in-grid-txt-col').css('max-width', halfGrid);
    console.log(halfGrid);
  } 
  else if(wW >= 1500){
    var gridWidth = 1200;
    var gutters = (wW - gridWidth) / 2;
    var halfGrid = gridWidth / 2;

    $('.col-6.in-grid-txt-col').css('max-width', halfGrid);
  }

  if(wW >= 600){
    careersBlock = $('.careers-block-1').outerHeight();
    careersTabTitle = $('.accordion-tab-title').outerHeight();
    careersTabs = (careersTabTitle * 3) + 10;
    careersTabContent = careersBlock - careersTabs;

    console.log(careersBlock);
    console.log(careersTabTitle);
    console.log(careersTabs);
    console.log(careersTabContent);

    $('.accordion-content-inner').css('min-height', careersTabContent);
  }

  $(window).resize(function(event) {
    wW2 = $(window).width();

    if((wW2 >= 799) && (wW2 <= 1500)){
      var gridWidth = wW2 * 0.8;
      var gutters = (wW2 - gridWidth) / 2;
      var halfGrid = gridWidth / 2;

      $('.col-6.in-grid-txt-col').css('max-width', halfGrid);
    } 
    else if(wW2 >= 1500){
      var gridWidth = 1200;
      var gutters = (wW2 - gridWidth) / 2;
      var halfGrid = gridWidth / 2;

      $('.col-6.in-grid-txt-col').css('max-width', halfGrid);
    }
    else{
      $('.col-6.in-grid-txt-col').css('max-width', 'none');
    }

    if(wW2 >= 600){
      careersBlock2 = $('.careers-block-1').outerHeight();
      careersTabTitle2 = $('.accordion-tab-title').outerHeight();
      careersTabs2 = (careersTabTitle2 * 3) + 10;
      careersTabContent2 = careersBlock2 - careersTabs2;

      console.log(careersBlock2);
      console.log(careersTabTitle2);
      console.log(careersTabs2);
      console.log(careersTabContent2);

      $('.accordion-content-inner').css('min-height', careersTabContent2);
    } else{
      $('.accordion-content-inner').removeAttr('style');
    }
  });
});