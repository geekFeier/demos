
// input框事件效果
var oinputs = document.getElementsByTagName('input');
Array.prototype.forEach.call(oinputs, function(ele, index) {
	ele.onfocus = function() {
		ele.setAttribute('style', 'border:1px solid #f1e938;box-shadow:0 0 10px 0px #f5b177;');
	};
	ele.onblur = function() {
		ele.setAttribute('style', 'border:1px solid gray');
	};
	ele.onkeyup = function(){
		setDom();
	};
}); 
 
 
function setDom(){
	document.getElementById('cube').innerHTML = '';
	var allNum = Number(document.getElementById('allNum').value),
		columnNum = Number(document.getElementById('columnNum').value),
		arr = document.getElementById('arr').value.split(','),
		newArr = arr.map(function(item, index, array) {
			return Number(item);
		}),
		fg = document.getElementById('fg').value,
		bg = document.getElementById('bg').value;
	cubeF(allNum, columnNum, newArr, fg, bg);
}
function setDom2(){
	document.getElementById('cube').innerHTML = ''; 
}


//拼图的方法
function cubeF(allNum, columnNum, arr, fg, bg) {

	if(arr[0] === 0 && arr.length === 1){
		return false;
	}
	var ocube = document.getElementById('cube');
	for (var i = 0; i < arguments[0]; i++) {
		var node = document.createElement('li');
		node.setAttribute('style', 'background:' + bg)
		if (i % arguments[1] === 0) {
			node.style.clear = 'both'
			node.style.backgroundColor = arguments[4];
		}
		ocube.appendChild(node);
	}
	ocube.style.width = columnNum * ocube.getElementsByTagName('li')[0].offsetWidth + "px";

	var i = j = 0;//i 代表白块的位置 $(oLi).length - 1 代表一共有多少个块
	while (i < ocube.getElementsByTagName('li').length) { 
		var oLi = ocube.getElementsByTagName('li');
		if (!(i > oLi.length - 1)) {
			oLi[i].style.backgroundColor = arguments[3];
		}
		if (j == arguments[2].length - 1) {
			i += arguments[2][j]
			j = 0;
			continue;
		}
		i += arguments[2][j]
		j++;
	}
}