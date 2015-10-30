$(document).ready(function () {
    $('#builds').DataTable({
        "paging": false,
        "ordering": true,
        "info": false,
        "searching": true,
        "order": [[ 1, "asc" ]]
    });
});

$(document).ready(function () {
    $('#projects').DataTable({
        "paging": false,
        "ordering": true,
        "info": false,
        "searching": true,
        "order": [[ 1, "asc" ]]
    });

    $('#seo').DataTable({
        "paging": false,
        "ordering": true,
        "info": true,
        "searching": true,
        "order": [[ 0, "asc" ]]
    });

    $('.diagram').each(function(i, obj) {
        $(obj).sequenceDiagram({theme: 'hand'});
    });
});
