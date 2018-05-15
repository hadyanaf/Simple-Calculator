function checkBoxEventSum() {
	var arrIn = [];
	var el;
	var prefixCb = "cb";
	var prefixIn = "input"
	var res = 0;

	for (var i = 1; el = document.getElementById(prefixCb + i); i++) {
		if (document.getElementById(prefixCb + i).checked) {
			arrIn.push(parseInt(document.getElementById(prefixIn + i).value));
		}
	}

	if (arrIn.length > 1) {
		for (var i = 0; i < arrIn.length; i++) {
				res += arrIn[i];
		}
		console.log(res);
	} else {
		alert("Error!\nYou must checklist of minimum 2 check-boxes");
	}

	console.log(arrIn);
	document.getElementById("total").value = res;
}

function checkBoxEventSubs() {
	var arrIn = [];
	var el;
	var prefixCb = "cb";
	var prefixIn = "input"
	var res = 0;
	var temp = 0;

	for (var i = 1; el = document.getElementById(prefixCb + i); i++) {
		if (document.getElementById(prefixCb + i).checked) {
			arrIn.push(parseInt(document.getElementById(prefixIn + i).value));
		}
	}

	if (arrIn.length > 1) {
		res = arrIn[0];
		for (var i = 1; i < arrIn.length; i++) {
				res -= arrIn[i];
		}
		console.log(res);
	} else {
		alert("Error!\nYou must checklist of minimum 2 check-boxes");
	}

	console.log(arrIn);
	document.getElementById("total").value = res;
}

function checkBoxEventMult() {
	var arrIn = [];
	var el;
	var prefixCb = "cb";
	var prefixIn = "input"
	var res = 0;
	var temp = 0;

	for (var i = 1; el = document.getElementById(prefixCb + i); i++) {
		if (document.getElementById(prefixCb + i).checked) {
			arrIn.push(parseInt(document.getElementById(prefixIn + i).value));
		}
	}

	if (arrIn.length > 1) {
		res = arrIn[0];
		for (var i = 1; i < arrIn.length; i++) {
				res *= arrIn[i];
		}
		console.log(res);
	} else {
		alert("Error!\nYou must checklist of minimum 2 check-boxes");
	}

	console.log(arrIn);
	document.getElementById("total").value = res;
}

function checkBoxEventDiv() {
	var arrIn = [];
	var el;
	var prefixCb = "cb";
	var prefixIn = "input"
	var res = 0;
	var temp = 0;

	for (var i = 1; el = document.getElementById(prefixCb + i); i++) {
		if (document.getElementById(prefixCb + i).checked) {
			arrIn.push(parseInt(document.getElementById(prefixIn + i).value));
		}
	}

	if (arrIn.length > 1) {
		res = arrIn[0];
		for (var i = 1; i < arrIn.length; i++) {
				res /= arrIn[i];
		}
		console.log(res);
	} else {
		alert("Error!\nYou must checklist of minimum 2 check-boxes");
	}

	console.log(arrIn);
	document.getElementById("total").value = res;
}