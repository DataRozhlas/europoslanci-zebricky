$(document).ready(function() {

    hlasovani.search("Česko").draw();
    
    $("#hlasovani-cesi").click(function() {
        hlasovani.search("Česko").draw();
    });
    
    $("#hlasovani-vsichni").click(function() {
        hlasovani.search("").draw();
    });    

});

    
    

    