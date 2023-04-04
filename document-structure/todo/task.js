const taskInput = document.querySelector('#task__input');
const tasksAdd = document.querySelector('#tasks__add');
const tasksList = document.querySelector('#tasks__list');


// if (sessionStorage.getItem('autosave') != null) {

// 	let pr = sessionStorage.getItem('autosave').split(',');

// 	for (let i = 0; i < pr.length; i++) {
// 		tasksList.innerHTML += `
// 		<div class="task">
// 		<div class="task__title">${pr[i]}</div>
// 		<a href="#" class="task__remove">&times;</a>
// 		</div >`;
// 	};
// };

taskInput.addEventListener('keydown', function (event) {

	if (event.key === 'Enter') {
		event.preventDefault();
		// autosaveStorage();
		addTask();
	};

});

tasksAdd.addEventListener('click', function (event) {
	event.preventDefault();
	// autosaveStorage();
	addTask();
});

tasksList.addEventListener('click', function (event) {
	if (event.target.classList.contains('task__remove')) {
		event.target.parentElement.remove();
	};

	// let autosaveStorageItem = sessionStorage.getItem('autosave');

	// let textTaskIndex = event.target.previousElementSibling.textContent;

	// sessionStorage.setItem('autosave', autosaveStorageItem.replace(textTaskIndex + ',', ''));

});

function addTask() {

	if (taskInput.value.length === 0) {
		return;
	};

	tasksList.innerHTML += `
	<div class="task">
	<div class="task__title">${taskInput.value}</div>
	<a href="#" class="task__remove">&times;</a>
	</div >`;

	taskInput.value = '';
};

// function autosaveStorage() {

// 	let autosaveStorageItem = sessionStorage.getItem('autosave');

// 	if (sessionStorage.getItem('autosave') === null) {
// 		sessionStorage.setItem('autosave', '['+ taskInput.value + ',' + ']');
// 	} else {
// 		sessionStorage.setItem('autosave', autosaveStorageItem + '['+ taskInput.value + ',' + ']');
// 	};

// };

// for (let i = 0; i < 5; i++) {
// 	taskInput.value = "Запись № " + i;
// 	addTask();
// };
