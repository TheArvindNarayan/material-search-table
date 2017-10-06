$( document ).ready(function() {
    
    // Write your custom Javascript codes here...
       $('#check-all').click(function() {console.log("ph-1");
        if ($(this).is(':checked')) {
            $('.check').prop('checked', true);
        } else {
            $('.check').prop('checked', false);
        }
    });



});
