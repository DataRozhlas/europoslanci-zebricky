$(document).ready(function() {
    $('#absence').DataTable( {
        "ajax": "js/absence.json",
        "columns": [
            { "data": "n" },
            { "data": "c" },
            { "data": "g" },
            { "data": "e" }
        ]
    } );
} ); 

