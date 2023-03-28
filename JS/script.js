// fonction insrt qui va permettre d'afficher les bons numéros
// puis les afficher au clique dans l'input display
function insrt(num) {
    $('#display').val($('#display').val() + num )
}

function eql() {
    $('#display').val(eval($('#display').val()))
}

function c() {
    $("#display").val('');
}