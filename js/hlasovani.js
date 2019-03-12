$(document).ready(function() {
    let hlasovani = $('#hlasovani').DataTable( {
            "ajax" : "https://data.irozhlas.cz/europoslanci-zebricky/js/hlasovani.json",
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
                        return '<a href="http://www.mepranking.eu/8/mep.php?id=' + row.i + '#mep" target="_blank">' + data + '</a>';
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
                        if (row.s == 0) {return 'účast při ' + row.a + ' hlasování z ' + row.pr;}
                        else {return 'účast při ' + row.a + ' hlasování z ' + row.pr + ', ' + row.s + ' absencí omluveno';}
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
            "pageLength": 25,
            "language" : {
                "url" : "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Czech.json"
            }
        } );
    
    hlasovani.search("Česko").draw();
    
    $("#hlasovani-cesi").click(function() {
        hlasovani.search("Česko").draw();
    });
    
    $("#hlasovani-vsichni").click(function() {
        hlasovani.search("").draw();
    });
    
    });
    