// для подсчёта кол-ва объектов в массиве
function count(obj) {
  var count = 0; 
  for(var prs in obj)  { 
     if(obj.hasOwnProperty(prs)) count++;
 	  } 
   return count; 
 }

$(document).ready(function(){
	var img_ar=[];
	var img_id = 0;
	$('.gallery a').each(function(){
		img_ar.push($(this));
		$(this).attr('value',img_id++)
	})
	var img_lenght = count(img_ar);

	$('.photo-count').text(img_lenght);
	$('.photo-number span').text(img_lenght);

	$('.gallery a').click(function(e) {
		e.preventDefault();
		var src = $(this).attr('href');
		$('#popup').toggleClass('open');
		$('.popup-img img').attr('src',src);
		var cur_id =parseInt($(this).attr('value'));
		if (cur_id<9) $('.photo-number strong').text('0'+(cur_id+1));
		else $('.photo-number strong').text(cur_id+1);
		$('.popup-img img').attr('value',$(this).attr('value'));
	});

	$('.popup-close').click(function(e) {
		e.preventDefault();
		$('#popup').toggleClass('open');
	});

	$('.arrow-left').click(function(){
		var img_id = parseInt($('.popup-img img').attr('value'));
		img_id--;
		$('.popup-img img').attr('src',img_ar[img_id].context.href);
		$('.popup-img img').attr('value',img_id);
		if (img_id<9) $('.photo-number strong').text('0'+(img_id+1));
		else $('.photo-number strong').html((img_id+1));
	});

	$('.arrow-right').click(function(){
		var img_id = parseInt($('.popup-img img').attr('value'));
		img_id++;
		$('.popup-img img').attr('src',img_ar[img_id].context.href);
		$('.popup-img img').attr('value',img_id);
		if (img_id<9) $('.photo-number strong').text('0'+(img_id+1));
		else $('.photo-number strong').html((img_id+1));
	})


// если высота окна контента меньше минимальной высоты блока слева, время для плитки

 setTimeout(function () {
	var left_height = $('.left-block').height();
	var content_height = $('.content-block').height();
	// console.log(left_height+','+content_height+','+$(window).height())
	if (left_height>content_height) $('.left-block').addClass('not-fx');
	else  $('.left-block').removeClass('not-fx');

                    }, 5000);
             
	
});

$(window).resize(function(){
	var left_height = $('.left-block').height();
	var content_height = $('.content-block').height();
	// console.log(left_height+','+content_height+','+$(window).height())
	if (left_height>content_height) $('.left-block').addClass('not-fx');
	else  $('.left-block').removeClass('not-fx');
	
});
