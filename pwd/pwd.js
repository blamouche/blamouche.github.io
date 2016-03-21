$(function(){
	generatePwd();
	$('#opt_caracteres').prop('checked',false);
	$('#opt_caracteres').change(function() {
		generatePwd();
	});
	$('#opt_chiffres').prop('checked',false);
	$('#opt_chiffres').change(function() {
		generatePwd();
	});
	$('#opt_nb').change(function() {
		generatePwd();
	});
});

function generatePwd(){
	var randomstring = '';
	var lettres = getChain();
	var j = 1;
	if ($('#opt_caracteres').prop('checked')){
		j++;
	}
	if ($('#opt_chiffres').prop('checked')){
		j++
	}
	for(i=0;i < $('#opt_nb').val();i++){
		randomstring += lettres.charAt(Math.random() * 52 * j);
	}
	$('#pwd').html(randomstring);
}


function getChain(){
	var lettres = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyzAaBb";
	if ($('#opt_caracteres').prop('checked')){
		lettres += "!#?.&[(=+-*)]!#?.&[(=+-*)]!#?.&[(=+-*)]!#?.&[(=+-*)]";
	}
	if ($('#opt_chiffres').prop('checked')){
		lettres += "1234567891234567891234567891234567891234567891234567";
	}
	return lettres;
}



