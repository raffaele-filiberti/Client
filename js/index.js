$(document).ready(function(){
    $(".button-collapse").sideNav({
        menuWidth: 250,
        draggable: true
    });
    $('a[href="#search"]').click(function(){
        $('.search').addClass('active');
    });
    $('a[href="#search_close"]').click(function(){
        $('.search').removeClass('active');
    });
    $('select').material_select();
    $('ul.tabs').tabs();
    $('#textarea1').trigger('autoresize');
    $('.modal').modal();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 10 // Creates a dropdown of 15 years to control year
    });
    $('input#search').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250'
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
});
