$(document).ready(function () {

	$('.button').click(function () {// открыть по кнопке
		$('.overlay').fadeIn();
	});

	$('.close-popup').click(function () {// закрыть на крестик
		$('.overlay').fadeOut();
	});

	$(document).mouseup(function () {// закрыть по клику вне окна
		$('.overlay').fadeOut();
	});

	$('.img_auto').click(function () {// открыть по клику на картинку
		$('.overlay_new').show();
	});

	$('.close-popup_new').click(function () {	// закрыть на крестик
		$('.overlay_new').hide();
	});


	$('.btn').click(function (e) {// открытие модального окна по кнопке "регистрацяи"
		e.preventDefault();		
		$('.auto').show();
	});

	$('.close-auto').click(function () {
		$('.auto').hide();
		$('.overlay_new').hide();
	});


	// открыть по таймеру 
	$(window).on('load', function () {
		setTimeout(function () {
			if ($('.overlay').hasClass('disabled')) {
				return false;
			} else {

				$(".overlay").fadeIn();
			}
		}, 5000);
	});


	

	// проверка авторизации

	$('.but').click(function (e){
		e.preventDefault();
		
		if ($('.log input').val() == 'test' && $('.pas input').val()== 'test'){
			alert('Авторизация пройдена успешно!');	

			if ($('.log input').val() != '') {
				$('.log input').val('')	} 

			if ($('.pas input').val() != '') {
				$('.pas input').val('')} 
		
				$('.overlay_new').fadeOut();		
		}
		else {
			alert('Вы указали не верные данные!');
			if ($('.log input').val() != '') {
				$('.log input').val('')
			} 

			if ($('.pas input').val() != '') {
				$('.pas input').val('')
			} 
		}
	})





});
