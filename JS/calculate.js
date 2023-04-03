// fonction insrt qui va permettre d'afficher les bons numéros
// puis les afficher au clique dans l'input display
function insrt(num) {
    $('#display').val($('#display').val() + num)
}

//fonction qui permet de faire le calcul avec "eval" puis l'afficher dans le display
function eql() {
    try {
    $('#display').val(eval($('#display').val()))
    }
    catch(err) {
    $('#display').val('ERROR')
    }
}

//fonction pour supprimer la ligne du display en lui indiquand une string vide au clique du c
function c() {
    $("#display").val('');
}

// // function eql() {
// // 	const currentValue = $('#display').val();
// // 	const length = currentValue.length;
// // 	const flag = false;
// // 	const char = currentValue[length-1];
// // 	if(char == '+' || char == '-' || char == '*' || char == '/')
// // 	flag = true;
// // 	if(flag)
// // 		$('#display').val("ERROR!");
// // 	else
// // 		$('#display').val(eval($('#display').val()));
// // }