$(document).ready(function() {
let absence = $('#absence').DataTable( {
        "ajax" : "https://data.irozhlas.cz/europoslanci-zebricky/js/absence.json",
        "columnDefs": [
            { "targets" : 0,
              "data": "i",
              "render": function ( data, type, row, meta ) {
                return meta.row + 1 + '. <img src="https://data.irozhlas.cz/europoslanci-zebricky/foto/' + data + '.jpg" class="portret">';
            },
            "responsivePriority" : 2
            },
            { "targets" : 1,
                "data": "n",
                "render": function ( data, type, row, meta ) {
                    return '<a href="http://www.europarl.europa.eu/meps/cs/' + row.i + '" target="_blank">' + data + '</a>';
                },
                "responsivePriority" : 1
            },
            { "targets" : 2,
                "data": "c"
            },
            { "targets" : 3,
                "data": "e",
                "render": function ( data, type, row, meta ) {
                    return data + ' %';
                },
                "responsivePriority" : 3
            },
            { "targets" : 4,
                "data" : "s",
                "render" : function (data, type, row, meta) {
                    if (row.s == 0) {return 'účast na ' + row.a + ' zasedání z ' + row.pr;}
                    else {return 'účast na ' + row.a + ' zasedání z ' + row.pr + ', ' + row.s + ' absencí omluveno';}
                }
            },
            { "targets" : 5,
                "data": "g"
            },
            { "targets" : 6,
                "data": "p"
            }        
        ],
        "order": [[ 3, "desc" ]],
        "responsive" : true,
        "language" : {
            "url" : "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Czech.json"
        }
    } );

absence.search("Česko").draw();

$("#absence-cesi").click(function() {
    absence.search("Česko").draw();
});

$("#absence-vsichni").click(function() {
    absence.search("").draw();
});

});
