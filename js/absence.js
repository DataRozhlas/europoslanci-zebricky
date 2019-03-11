$(document).ready(function() {
    $('#absence').DataTable( {
        "ajax" : "https://data.irozhlas.cz/europoslanci-zebricky/js/absence.json",
        "columnDefs": [
            { "targets" : 0,
              "data": "i",
              "render": function ( data, type, row, meta ) {
                return meta.row + 1 + '. <img src="https://data.irozhlas.cz/europoslanci-zebricky/foto/' + data + '.jpg" class="portret">';
            }
            },
            { "targets" : 1,
                "data": "n",
                "render": function ( data, type, row, meta ) {
                    return '<a href="http://www.europarl.europa.eu/meps/cs/' + row.i + '" target="_blank">' + data + '</a>';
                } 
            },
            { "targets" : 2,
                "data": "c"
            },
            { "targets" : 3,
                "data": "e",
                "render": function ( data, type, row, meta ) {
                    return data + ' %';
                }
            }         
        ],
        "language" : {
            "url" : "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Czech.json"
        }
    } );
} );