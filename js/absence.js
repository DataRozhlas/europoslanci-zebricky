$(document).ready(function() {
    $('#absence').DataTable( {
        "ajax": "https://data.irozhlas.cz/europoslanci-zebricky/js/absence.json",
        "columns": [
            { "data": "n" },
            { "data": "c" },
            { "data": "p" },
            { "data": "g" }
        ]
    } );
} );