function showTime() {
	const date = new Date();

	let today = date.toLocaleString("en", { weekday: "long" });
	let hour = date.toLocaleString("pl", { hour: "2-digit" }); // use 24h time format
	let minute = date.toLocaleString("en", { minute: "2-digit" });
	let second = date.toLocaleString("en", { second: "2-digit" });
	let day = date.toLocaleString("en", { day: "2-digit" });
	let month = date.toLocaleString("en", { month: "short" });
	let year = date.toLocaleString("en", { year: "numeric" });

	minute = addZero(minute);
	second = addZero(second);

	document.getElementById(
		"date"
	).innerHTML = `${today}, ${day} ${month} ${year}`;
	document.getElementById(
		"time"
	).innerHTML = ` ${hour}:${minute}:${second}`;
	setTimeout(showTime, 0);
}

function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

showTime();

let img = document.getElementById('pic');
img.src = ('Gojo Change.jpeg')