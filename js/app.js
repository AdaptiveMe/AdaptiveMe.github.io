
$(document).ready(function () {

    if ( $.fn.dataTable.isDataTable( '#table-build' ) ) {
        $('#table-build').DataTable();
    } else {
        $('#table-build').DataTable({
            "paging": false,
            "ordering": true,
            "info": false,
            "searching": true,
            "order": [[ 1, "asc" ]]
        });
    }

    if ( $.fn.dataTable.isDataTable( '#table-projects' ) ) {
        $('#table-projects').DataTable();
    } else {
        $('#table-projects').DataTable({
            "paging": false,
            "ordering": true,
            "info": false,
            "searching": true,
            "order": [[ 1, "asc" ]]
        });
    }

    if ( $.fn.dataTable.isDataTable( '#seo' ) ) {
        $('#table-seo').DataTable();
    } else {
        $('#table-seo').DataTable({
            "paging": false,
            "ordering": true,
            "info": true,
            "searching": true,
            "order": [[ 0, "asc" ]]
        });
    }




    $('.diagram').each(function(i, obj) {
        $(obj).sequenceDiagram({theme: 'hand'});
    });
});
