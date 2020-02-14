var Contatos = function() {
	var runContatosValidator = function() {
		var form = $('#contatos');
		var errorHandler = $('.errorHandler', form);
		form.validate({
			rules : {
				username : {
					minlength : 2,
					required : true
				},
				password : {
					minlength : 6,
					required : true
				}
			},
			submitHandler : function(form) {
				var dados = $( form ).serialize();

				$.ajax({
					type: "POST",
					url: "../backend/index.php/contatos/store",
					data: dados,
					dataType: "json",
					success: function( data )
					{
						if (data.say == 'ok'){
							alert( 'Salvo Com Sucesso!!!!');
							window.location.reload();

						} else if (data.say == 'dup'){
							alert( 'Email Duplicado');

						} 
					}
				});
			},
			invalidHandler : function(event, validator) {//display error alert on form submit
				errorHandler.show();
			}
		});
	};
	$(function() {
		$.ajax({
			type: "GET",
			url: "../backend/index.php/login/verifica_login",
			dataType: "json",
			success: function( data )
			{
				if (data.say == 'login'){
					
					window.location.href = 'login_login.html';

				} 
			}
		});
	});
	var setContagens = function(){

		

		var TableContagens = $('#TBContatos').DataTable({
			"oLanguage": {
				"sUrl":  "../frontend/assets/plugins/DataTables/examples/examples_support/de_DE.txt"
			},
			"bProcessing": true,
			"sAjaxSource":  "../backend/index.php/contatos/listagem/" ,
			"aoColumns": [
				{"mData": "nome"}, 
				{"mData": "email"}, 
				{"mData": "telefone"},
				{"mData": "empresa"},
				{"mData": "acao"}
				]
		});
		$.fn.abrirSub = function(el,functionShow) {
			if (el == undefined) el = '#subnovo';

			var customOptions = new Object;
			customOptions.content = el;
			customOptions.startFrom = 'right';
			customOptions.onShow = functionShow;
			$.subview(customOptions);
		}
		
		$('body').on('click', '.editar', function(event) {
			
				var id = $(this).data('id');


				$.ajax({
					type: "POST",
					url: "../backend/index.php/contatos/edit/"+id,
					dataType: "json",
					success: function( data )
					{
						$('#nome').val(data.nome);
						$('#email').val(data.email);
						$('#telefone').val(data.telefone);
						$('#empresa').val(data.empresa);
						$('#id').val(data.id);
						$.fn.abrirSub('#subnovo');
					}
				});

		});
		$('body').on('click', '#BTsubnovoView', function(event) {
			
			$('#nome').val('');
			$('#email').val('');
			$('#telefone').val('');
			$('#empresa').val('');
			$('#id').val('');

		});
		$('body').on('click', '.delete', function(event) {

			var id = $(this).data('id');


				$.ajax({
					type: "POST",
					url: "../backend/index.php/contatos/delete/"+id,
					dataType: "json",
					success: function( data )
					{
						alert('Deletado Com Sucesso');
						window.location.reload();
					}
				});

		});
		$('body').on('click', '#logout', function(event) {

			var id = $(this).data('id');


				$.ajax({
					type: "POST",
					url: "../backend/index.php/login/logout/",
					dataType: "json",
					success: function( data )
					{
						window.location.href = 'login_login.html';
					}
				});

		});
		
		
	}
	return {
		//main function to initiate template pages
		init : function() {
			runContatosValidator();
			setContagens();
		}
	};
}();
