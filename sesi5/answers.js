// Latihan 1
var buah = ["Mangga","Apel","Jeruk","Melon"];
var buahList = document.getElementById('buah');

for (i=0; i<buah.length; i++){
	var item = document.createElement('li');
	item.classList.add('buah');
	item.textContent = buah[i];
	buahList.appendChild(item);
}

// Latihan 2
var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterBuah);

function filterBuah(){
	var search   = filter.value;
	var buahItem = document.getElementsByClassName('buah');
	
	for( i=0; i<buahItem.length;i++ ){
		var buahText = buahItem[i].textContent;
		if ( buahText.indexOf(search) != -1 ) {
			buahItem[i].style.display = 'block'
		} else {
			buahItem[i].style.display = 'none'
		}
	}
}

// latihan 3
// Latihan 1
var buah = ["Mangga","Apel","Jeruk","Melon"];
var buahList = $('#buah');

for (i=0; i<buah.length; i++){
	var item = '<li class="buah">'+buah[i]+'</li>';
	buahList.append(item);
}

// Latihan 2
var filter = $('#filter');
filter.keyup(filterBuah);

function filterBuah(){
	var search   = filter.val();
	var buahItem = $('.buah');
	
	for( i=0; i<buahItem.length;i++ ){
		var buahText = buahItem.text();
		if ( buahText.indexOf(search) != -1 ) {
			$(buahItem[i]).slideDown();
		} else {
			$(buahItem[i]).slideUp();
		}
	}
}

// alternatif
function filterBuah(){
	var search   = filter.val();
	var buahItem = $('.buah');
	
	buahItem.each(function(){
		var buah = $(this)
		namaBuah = buah.text();
		if ( namaBuah.indexOf(search) != -1 ) {
			$(this).slideDown();
		} else {
			$(this).slideUp();
		}
	});
}


$.get(URL,callback);
$.get('https://ariona.net/talentbandung', function(data, status) {
	console.log(data);
} );