	// 鼠标点击
	document.addEventListener('click', function () {
		var audio = document.getElementById('click_audio_index')
		audio.currentTime = 0
		audio.play();
	});



	function toggleSound() {
		var music = document.getElementById("click_audio_home"); //获取ID  
		if (music && music.paused) { //判读是否播放  
			music.paused = false;
			music?.play(); //没有就播放 
		}
	}



	new fullpage('#fullpage', {

		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

		afterLoad: function (origin, destination, direction, trigger) {
			var origin = this;
			console.log(origin.index, origin.anchor, direction, '=======afterLoad :>> ', destination);
			// page-1
			if (destination.index == 0 && direction == 'up') {
				setTimeout(() => {
					$('.home_cent').toggleClass('home_cent_ac');
					$('.home_cent').removeClass('home_cent_ach');
				}, 1000);
			}
			if (destination.index == 1) {
				$('.cent1').toggleClass('cent1_ac');
				$('.cent1').removeClass('cent1_ach');
				$('.title1_tit').toggleClass('title1_tit_ac');
				$('.title1_tit').removeClass('title1_tit_ach');
				$('.title1_in').toggleClass('title1_in_ac');
				$('.title1_in').removeClass('title1_in_ach');
				$('.video_interact').css({
					"opacity": 1
				});
				// 第一屏切换视频
				$('.video_interact').click(function () {
					$('.cent1').removeClass('cent1_ac');
					$('.cent1').removeClass('cent1_ach');
					$('.cent1').removeClass('cent1_v_ac');
					$('.cent1').toggleClass('cent1_v_ach');
					var video_1 = document.getElementById('video_cent1');
					var index_v_vv = Number(window.localStorage.getItem("index_v_1"))
					var vList1 = [
						'./video/B001.webm',
						'./video/B002.webm',
						'./video/B003.webm',
					]; // 初始化播放列表，这里的url要用相对路径
					var vList1_one = vList1[index_v_vv != null ? index_v_vv : 0];
					console.log(index_v_vv, '11111化播放列表 :>> ', vList1_one);
					video_1.src = vList1_one;
					video_1.load();


					setTimeout(() => {
						$('.cent1').toggleClass('cent1_v_ac');
						$('.cent1').removeClass('cent1_v_ach');
						video_1.play();
					}, 1000);
					window.localStorage.setItem("index_v_1", index_v_vv != null && (index_v_vv) < vList1.length - 1 ? index_v_vv + 1 : 0)
				});

			



			}
			if (destination.index == 2) {
				$('.cent_2').removeClass('cent_2_ach');
				$('.cent_2').toggleClass('cent_2_ac');
				$('.video_interact_2').removeClass('video_interact_ach');
				$('.video_interact_2').toggleClass('video_interact_ac');

				var vList2 = [
					'./video/C002.webm',
					'./video/C003.webm',
				]; // 初始化播放列表，这里的url要用相对路径


				var video_2 = document.getElementById('video_cent_2');
				// 第2屏切换视频
				$('.video_interact_2').click(function () {
					$('.cent_2').removeClass('cent_2_ac');
					$('.cent_2').toggleClass('cent_2_ach');
					$('.video_interact_2').removeClass('video_interact_ac');
					$('.video_interact_2').toggleClass('video_interact_ach');

					// $('.video_interact_2').css({ "opacity": 0 });
					setTimeout(() => {
						$('.cent_2_video').removeClass('cent_2_v_ach');
						$('.cent_2_video').toggleClass('cent_2_v_ac');
					}, 200);

					var index_v_v2 = Number(window.localStorage.getItem("index_v_2"))
					var vList1_one = vList2[index_v_v2 != null ? index_v_v2 : 0];
					video_2.src = vList1_one;
					video_2.load();
					video_2.play();
					window.localStorage.setItem("index_v_2", index_v_v2 != null && (index_v_v2) < vList2.length - 1 ? index_v_v2 + 1 : 0)
					setTimeout(() => {
						$('.cent_2_video').removeClass('cent_2_v_ac');
						$('.cent_2_video').toggleClass('cent_2_v_ach');
					}, 3000);
					setTimeout(() => {
						$('.cent_2').removeClass('cent_2_ach');
						$('.cent_2').toggleClass('cent_2_ac');
						// $('.video_interact_2').css({ "opacity": 1 });
						$('.video_interact_2').removeClass('video_interact_ach');
						$('.video_interact_2').toggleClass('video_interact_ac');
					}, 4000);
				});

			}
			if (destination.index == 3) {
				$('.video_cen3').toggleClass('video_cen3_ac');
				$('.video_cen3').removeClass('video_cen3_ach');
				$('.title3_tit').toggleClass('title3_tit_ac');
				$('.title3_tit').removeClass('title3_tit_ach');
				$('.video_interact_3').css({
					"opacity": 1
				});

				setTimeout(() => {
					$('.title3_in').toggleClass('title3_in_ac');
					$('.title3_in').removeClass('title3_in_ach');
				}, 100);


				setTimeout(() => {
					$('.title3_tit_2').toggleClass('title3_tit_2_ac');
					$('.title3_tit_2').removeClass('title3_tit_2_ach');
					$('.title3_in_2').toggleClass('title3_in_2_ac');
					$('.title3_in_2').removeClass('title3_in_2_ach');
				}, 1600);
				var video_3 = document.getElementById('video_cent_3');
				var vList2 = [
					'./video/A001.webm',
					'./video/A002.webm',
					'./video/A003.webm',
				]; // 初始化播放列表，这里的url要用相对路径


				// 第3屏切换视频
				$('.video_interact_3').click(function () {
					$('.video_cen3').removeClass('video_cen3_ac');
					$('.video_cen3').toggleClass('video_cen3_ach');
					var index_v_vv = Number(window.localStorage.getItem("index_v_3"))
					var vList1_one = vList2[index_v_vv != null ? index_v_vv : 0];
					console.log(index_v_vv, '化播放列表 :>> ', vList1_one);
					video_3.src = vList1_one;
					video_3.load();
					video_3.play();
					window.localStorage.setItem("index_v_3", index_v_vv != null && (index_v_vv) < 2 ? index_v_vv + 1 : 0)
					setTimeout(() => {
						$('.video_cen3').removeClass('video_cen3_ach');
						$('.video_cen3').toggleClass('video_cen3_ac');
					}, 1000);

				});


			}
			if (destination.index == 4) {
				$('.title4_tit').toggleClass('title4_tit_ac');
				$('.title4_tit').removeClass('title4_tit_ach');

				setTimeout(() => {

					$('.title4_in').toggleClass('title4_in_ac');
					$('.title4_in').removeClass('title4_in_ach');
				}, 1000);
				setTimeout(() => {
					$('.text_4_but').toggleClass('text_4_but_ac');
					$('.text_4_but').removeClass('text_4_but_ach');
				}, 2000);



				// 例子背景
				window.requestAnimationFrame = window.requestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.msRequestAnimationFrame;
				let canvas = document.getElementById('canvas_3'); //找到canvas元素
				let ctx = canvas.getContext('2d') //创建context对象
				// context1.fillStyle = '#FF0000' //画笔颜色
				//fillRect(x, y, width, height)，x和y确定在画布上开始位置，后面表示绘制100*75的矩形
				// context1.fillRect(0, 0, 200, 75)
				var w = canvas.width = canvas.offsetWidth;
				var h = canvas.height = canvas.offsetHeight;
				var circles = [];
				var current_circle = new currentCircle(0, 0);


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
						ctx.arc(this.x, this.y, this.r, 0, 560);
						ctx.fillStyle = 'rgba(255,255,255,0.3)';
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
							ctx.moveTo(this.x, this.y-64); //起点
							ctx.lineTo(_circle.x, _circle.y); //终点
							ctx.strokeStyle = 'rgba(255,255,255,0.3)';
							ctx.stroke();
						}
					}
				}

				function currentCircle(x, y) {
					circle.call(this, x, y);

					this.drawCircle = drawCircle;

					function drawCircle(ctx) {
						ctx.beginPath();
						ctx.arc(this.x, this.y-64, 8, 0, 360);
						ctx.fillStyle = 'rgba(255,255,255,0.8)';
						ctx.fill();
					}
				}

				function init(num) {
					for (var i = 0; i < num; i++) {
						circles.push(new circle(Math.random() * w, Math.random() * h));
					}
					draw();
				}


				init(100)

			}



			//使用 index
			// if(origin.index == 2){
			// 	alert("第3个section停止加载");
			// }

			// //使用 anchorLink
			// if(origin.anchor == 'secondSlide'){
			// 	alert("第2个section停止加载");
			// }
		},
		onLeave: function (origin, destination, direction, trigger) {
			var origin = this;
			console.log(origin.index, '-------onLeave :>> ', destination.index);
			if (origin.index == 0) {
				$('.home_cent').toggleClass('home_cent_ach');
				$('.home_cent').removeClass('home_cent_ac');
			}
			if (origin.index == 1) {
				$('.home_cent').toggleClass('home_cent_ach');
				$('.home_cent').removeClass('home_cent_ac');
				setTimeout(() => {
					$('.cent1').toggleClass('cent1_ach');
					$('.cent1').removeClass('cent1_ac');
					$('.cent1').removeClass('cent1_v_ac');
				}, 1000);
				$('.title1_tit').toggleClass('title1_tit_ach');
				$('.title1_tit').removeClass('title1_tit_ac');
				$('.title1_in').toggleClass('title1_in_ach');
				$('.title1_in').removeClass('title1_in_ac');
				$('.video_interact').css({
					"opacity": 0
				});
			}
			if (origin.index == 2) {

				$('.cent_2').removeClass('cent_2_ac');
				$('.cent_2').toggleClass('cent_2_ach');
				$('.video_interact_2').removeClass('video_interact_ac');
				$('.video_interact_2').toggleClass('video_interact_ach');
			}
			if (origin.index == 3) {
				$('.video_cen3').toggleClass('video_cen3_ach');
				$('.video_cen3').removeClass('video_cen3_ac');

				$('.title3_tit').toggleClass('title3_tit_ach');
				$('.title3_tit').removeClass('title3_tit_ac');
				$('.title3_in').toggleClass('title3_in_ach');
				$('.title3_in').removeClass('title3_in_ac');

				$('.title3_tit_2').toggleClass('title3_tit_2_ach');
				$('.title3_tit_2').removeClass('title3_tit_2_ac');
				$('.title3_in_2').toggleClass('title3_in_2_ach');
				$('.title3_in_2').removeClass('title3_in_2_ac');
				$('.video_interact_3').css({
					"opacity": 0
				});
			}
			if (origin.index == 4) {

				$('.cent_4').toggleClass('cent_4_ach');
				$('.cent_4').removeClass('cent_4_ac');
				$('.title4_tit').toggleClass('title4_tit_ach');
				$('.title4_tit').removeClass('title4_tit_ac');
				$('.title4_in').toggleClass('title4_in_ach');
				$('.title4_in').removeClass('title4_in_ac');
				$('.text_4_but').toggleClass('text_4_but_ach');
				$('.text_4_but').removeClass('text_4_but_ac');
			}
			// //离开第二个section后
			// if (origin.index == 1 && direction == 'down') {


			if (origin.index == 4 && direction == 'down') {
				console.log(origin.index, '前往第1个section！ :>> ', destination);
			}
		}
	});
