	// 背景粒子
		//更新页面用requestAnimationFrame替代setTimeout
		window.requestAnimationFrame = window.requestAnimationFrame
			|| window.mozRequestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.msRequestAnimationFrame;

		var canvas = document.getElementById('canvas_2');
		var ctx = canvas.getContext('2d');

		var w = canvas.width = canvas.offsetWidth;
		var h = canvas.height = canvas.offsetHeight;
		var circles = [];
		var current_circle = new currentCircle(0, 0);

		function init(num) {
			for (var i = 0; i < num; i++) {
				circles.push(new circle(Math.random() * w, Math.random() * h));
			}
			draw();
		}

		function draw() {
			ctx.clearRect(0, 0, w, h);
			for (var i = 0; i < circles.length; i++) {
				circles[i].move(w, h);
				circles[i].drawCircle(ctx);
				for (var j = i + 1; j < circles.length; j++) {
					circles[i].drawLine(ctx, circles[j]);
				}
			}
			if (current_circle.x) {
				current_circle.drawCircle(ctx);
				for (var k = 0; k < circles.length; k++) {
					current_circle.drawLine(ctx, circles[k])
				}
			}
			requestAnimationFrame(draw);
		}

		window.onmousemove = function (e) {
			e = e || window.event;
			current_circle.x = e.clientX;
			current_circle.y = e.clientY;
		}
		window.onmouseout = function () {
			current_circle.x = null;
			current_circle.y = null;
		}

		//创建对象:圆
		//x, y为坐标点, r为半径, _mx, _my为移动的距离
		function circle(x, y) {
			this.x = x;
			this.y = y;
			this.r = Math.random() * 10;
			this._mx = 1 - (Math.random() * 2);
			this._my = 1 - (Math.random() * 2);

			//canvas画圆
			this.drawCircle = drawCircle;
			function drawCircle(ctx) {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.r, 0, 360);
				ctx.fillStyle = 'rgba(204, 204, 204, 0.3)';
				ctx.fill();
			}

			this.move = move;
			function move(w, h) {
				this._mx = (this.x < w && this.x > 0) ? this._mx : (-this._mx);
				this._my = (this.y < h && this.y > 0) ? this._my : (-this._my);
				this.x += this._mx / 2;
				this.y += this._my / 2;
			}

			//canvas画线
			//画直线是两个圆连线，为了避免直线过多，给圆圈距离设置了一个值，距离很远的圆圈，就不做连线处理
			this.drawLine = drawLine;
			function drawLine(ctx, _circle) {
				var dx = this.x - _circle.x;
				var dy = this.y - _circle.y;
				var d = Math.sqrt(dx * dx + dy * dy);
				if (d < 150) {
					ctx.beginPath();
					ctx.moveTo(this.x, this.y);//起点
					ctx.lineTo(_circle.x, _circle.y);//终点
					ctx.strokeStyle = 'rgba(204, 204, 204, 0.3)';
					ctx.stroke();
				}
			}
		}

		function currentCircle(x, y) {
			circle.call(this, x, y);

			this.drawCircle = drawCircle;
			function drawCircle(ctx) {
				ctx.beginPath();
				ctx.arc(this.x, this.y, 8, 0, 360);
				ctx.fillStyle = 'rgba(255, 77, 54, 0.6)';
				ctx.fill();
			}
		}
	// 背景粒子-end