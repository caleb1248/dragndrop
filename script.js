function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}
document.querySelector("button").onclick = function () {
	if (document.querySelector('div').innerText == '1+1=2') {
		alert('yay, you got the correct equation! :) :)')
	}
}