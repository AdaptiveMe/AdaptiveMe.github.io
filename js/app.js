
$(document).ready(function () {


    $('#table-build').DataTable({
        "paging": false,
        "ordering": true,
        "info": false,
        "searching": true,
        "order": [[1, "asc"]]
    });


    $('#table-projects').DataTable({
        "paging": false,
        "ordering": true,
        "info": false,
        "searching": true,
        "order": [[1, "asc"]]
    });


    $('#table-seo').DataTable({
        "paging": false,
        "ordering": true,
        "info": true,
        "searching": true,
        "order": [[0, "asc"]]
    });


    $('.diagram').each(function(i, obj) {
        $(obj).sequenceDiagram({theme: 'hand'});
    });
});
