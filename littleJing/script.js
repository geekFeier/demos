window.onload = function() {
	waterfull('main', 'box');
	var dataAll = {
		data: [{
			"src": "jing (1).jpg"
		}, {
			"src": "jing (2).jpg"
		}, {
			"src": "jing (3).jpg"
		}, {
			"src": "jing (4).jpg"
		}, {
			"src": "jing (5).jpg"
		}, {
			"src": "jing (6).jpg"
		}, {
			"src": "jing (7).jpg"
		}, {
			"src": "jing (8).jpg"
		}, {
			"src": "jing (9).jpg"
		}, {
			"src": "jing (10).jpg"
		}, {
			"src": "jing (11).jpg"
		}, {
			"src": "jing (12).jpg"
		}, {
			"src": "jing (13).jpg"
		}, {
			"src": "jing (14).jpg"
		}, {
			"src": "jing (15).jpg"
		}, {
			"src": "jing (16).jpg"
		}, {
			"src": "jing (17).jpg"
		}, {
			"src": "jing (18).jpg"
		}, {
			"src": "jing (19).jpg"
		}, {
			"src": "jing (20).jpg"
		}, {
			"src": "jing (21).jpg"
		}, {
			"src": "jing (22).jpg"
		}, {
			"src": "jing (23).jpg"
		}, {
			"src": "jing (24).jpg"
		}, {
			"src": "jing (25).jpg"
		}, {
			"src": "jing (26).jpg"
		}, {
			"src": "jing (27).jpg"
		}, {
			"src": "jing (28).jpg"
		}, {
			"src": "jing (29).jpg"
		}, {
			"src": "jing (30).jpg"
		}, {
			"src": "jing (31).jpg"
		}, {
			"src": "jing (32).jpg"
		}, {
			"src": "jing (33).jpg"
		}, {
			"src": "jing (34).jpg"
		}, {
			"src": "jing (35).jpg"
		}, {
			"src": "jing (36).jpg"
		}, {
			"src": "jing (37).jpg"
		}, {
			"src": "jing (38).jpg"
		}, {
			"src": "jing (39).jpg"
		}, {
			"src": "jing (40).jpg"
		}, {
			"src": "jing (41).jpg"
		}, {
			"src": "jing (42).jpg"
		}, {
			"src": "jing (43).jpg"
		}, {
			"src": "jing (44).jpg"
		}, {
			"src": "jing (45).jpg"
		}, {
			"src": "jing (46).jpg"
		}]
	}
	window.onscroll = function() {
		if (checkScrollSlide) {
			for (var i = 0; i < dataAll.data.length; i++) {
				var oParent = document.getElementById('main');
				var oBox = document.createElement('div');
				oBox.className = 'box';
				oParent.appendChild(oBox);
				var oPic = document.createElement('div');
				oPic.className = 'pic';
				oBox.appendChild(oPic);
				var oImg = document.createElement('img');
				oImg.src = "image/" + dataAll.data[i].src;
				oPic.appendChild(oImg); 
			}
			waterfull('main','box')
		}
	}
}

function waterfull(parent, box) {
	var oParent = document.getElementById(parent);
	var oBoxs = getByClass(oParent, box);
	var oBoxW = oBoxs[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth / oBoxW); //计算列数 
	oParent.style.cssText = 'width:' + (oBoxW * cols) + 'px;margin:0 auto;'; // main的宽

	var hArr = [];
	for (var i = 0; i < oBoxs.length; i++) {
		if (i < cols) {
			hArr.push(oBoxs[i].offsetHeight);
		} else {
			var minH = Math.min.apply(null, hArr);
			var index = hArr.indexOf(minH); //最小值的索引 
			oBoxs[i].style.position = 'absolute';
			oBoxs[i].style.top = minH + 'px';
			oBoxs[i].style.left = oBoxs[index].offsetLeft + "px"; // 或者 oBoxs[i].style.left = oBoxW * index + 'px'; 
			hArr[index] += oBoxs[i].offsetHeight;

		}
	}
}

function getByClass(parent, clsName) {
	var boxArr = [],
		oElements = parent.getElementsByTagName('*');
	for (var i = 0; i < oElements.length; i++) {
		if (oElements[i].className == clsName) {
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}
// 检测是否具备了滚动加载数据库的条件
function checkScrollSlide() {
	var oParent = document.getElementById('main');
	var oBoxs = getByClass(oParent, 'box');
	var lastBoxH = oBoxs[oBoxs.length - 1].offsetHeight + Math.floor(oBoxs[oBoxs.length - 1] / 2); //最后一个图片距离顶部的高度 + 身子的一半
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop; //滚动的距离
	var height = document.body.clientHeight || document.documentElement.clientHeight; //可视区域高度
	return (lastBoxH < scrollTop + height) ? true : false;

}