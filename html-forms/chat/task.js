const chatWidget = document.querySelector('.chat-widget');
const chatWidgetSide = document.querySelector('.chat-widget__side')
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
const botMessages = ["Здравствуйте и досвидания.", "К сожалению все операторы заняты, приходите завтра.", "Кто тут?", "Ааа... понятно, дак, а чего хотел то?", "Подожди, разбужу, кого нибуть.", "Эт ток завтра."];

chatWidgetSide.addEventListener('click', function () {

	chatWidget.classList.add('chat-widget_active');
	newMessages(botMessages[0]);
	questionInterval();

});

chatWidgetInput.addEventListener('keydown', function (event) {

	if (event.key == "Enter") {
		let messageClient = event.target.value;

		if (messageClient.length != 0) {

			newMessages(messageClient, 'message_client');

			let botMessage = random();

			newMessages(botMessages[botMessage]);

			chatWidgetInput.value = "";

			const messageText = document.querySelectorAll('.message__text');
	
			messageText[messageText.length - 1].scrollIntoView(false);
		
			questionInterval();
		};
	};
});

let question;

function questionInterval() {

	if (question != 0) {

		clearInterval(question);
		question = 0;

		question = setInterval(() => {
			newMessages('Закрой чат если не пользуещься!');
		}, 30000);

	};
};

function timeFormat() {
	return new Date().toLocaleTimeString("ru-Ru", { hour: "2-digit", minute: "2-digit" });
};

function newMessages(message, addClientClass) {
	if (addClientClass == undefined) { addClientClass = "" };

	messages.innerHTML += `
	  <div class="message ${addClientClass}">
		 <div class="message__time">${timeFormat()}</div>
		 <div class="message__text">
			${message}
		 </div>
	  </div>
	`;

};

let noRepiat = [];

function random() {
	let randomNumber = Math.floor(Math.random() * botMessages.length);

	if (noRepiat.length === botMessages.length) {
		noRepiat = [];
	};

	if (!noRepiat.includes(randomNumber)) {
		noRepiat.push(randomNumber);
		return randomNumber;
	} else {
		return random();
	};
};
