
// Заполнение прогресс баров
var elements = document.querySelectorAll('.progress-bar');
Array.prototype.forEach.call(elements, function(el,i){
  var progress = elements[i].getAttribute('data-progress');
  elements[i].children[0].style.width = progress+'%';
  var form = elements[i].parentNode ;
  form.querySelector('.progress-procent').innerHTML = progress+'%';
   form.querySelector('.progress-procent').style.left = progress+'%';

});

// Уменьшить значение
document.querySelectorAll('.dec').forEach(function(elem) { elem.addEventListener('click', function(event) { 
		var form = this.parentNode ;
		var count = parseInt(form.querySelector('.num').innerHTML);
		if (count > 1) {
			count--;
			form.querySelector('.num').innerHTML = count;
		} else {
				  form.querySelector('.dec').classList.add('disable');
			}
		}, false)
});

// Увеличить значение
document.querySelectorAll('.inc').forEach(function(elem) { elem.addEventListener('click', function(event) { 

	var form = this.parentNode ;
	var count = parseInt(form.querySelector('.num').innerHTML);
		count++;
		form.querySelector('.num').innerHTML = count++;
		if (count > 1){
			  form.querySelector('.dec').classList.remove('disable');
			}
		
}, false);
});

// Конпка удалить
document.querySelectorAll('.btn').forEach(function(elem) { elem.addEventListener('click', function(event) { 
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
});
