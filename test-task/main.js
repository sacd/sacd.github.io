
var elements = document.querySelectorAll('.progress-bar');
Array.prototype.forEach.call(elements, function(el, i){
  var progress = elements[i].getAttribute('data-progress');
  elements[i].children[0].style.width = progress+'%';
  var form = elements[i].parentNode ;
  form.querySelector('.progress-procent').innerHTML = progress+'%';
   form.querySelector('.progress-procent').style.left = progress+'%';

});

document.querySelector('.dec').addEventListener('click', function() { 
	var form = this.parentNode ;
	var count = parseInt(form.querySelector('.num').innerHTML);
	if (count > 1) {
		count--;
		form.querySelector('.num').innerHTML = count;
	} else {
		// if (form.querySelector('.dec').classList)
			  form.querySelector('.dec').classList.add('disable');
		// 	else
		// 	  form.querySelector('.dec').disable += ' ' + disable;
		
		}
}, false);


document.querySelector('.inc').addEventListener('click', function() { 
	var form = this.parentNode ;
	var count = parseInt(form.querySelector('.num').innerHTML);
		count++;
		form.querySelector('.num').innerHTML = count++;
		if (count > 1){
		 // form.querySelector('.num').classList.remove('disable');
			// if (form.querySelector('.dec').classList)
			  form.querySelector('.dec').classList.remove('disable');
			// else
			//   form.querySelector('.dec').disable = el.disable.replace(new RegExp('(^|\\b)' + disable.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		
}, false);

document.querySelector('.btn').addEventListener('click', function() { 
		var form = this.parentNode.parentNode ;

		if (form.classList.contains('remove')) {
		    form.classList.remove('remove');
		    this.innerHTML = 'Удалить';
		} else {
			  form.classList.add('remove');
		    this.innerHTML = 'Вернуть';
		}

			// if (form.classList) {
			//   form.classList.toggle('remove');
			// } else {
			//   var classes = form.remove.split(' ');
			//   var existingIndex = classes.indexOf('remove');

			//   if (existingIndex >= 0)
			//     classes.splice(existingIndex, 1);
			//   else
			//     classes.push('remove');

			//   form.remove = classes.join(' ');
			// }
	}, false);