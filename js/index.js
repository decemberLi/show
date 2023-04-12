/*
 * @Author: duanruilong
 * @Date: 2023-04-11 09:48:58
 * @LastEditors: Drlong drl1210@163.com
 * @LastEditTime: 2023-04-12 09:26:15
 * @Description:
 */

var tList0 = [
  {
    title: ' Your creativity, our protocol, limitless possibilities.',
    info: `<i class="left-border"></i>  Yours Protocol streamlines
					Al Character creation through a <span style="font-size: 28px;font-weight: 600;">collaborative approach</span>, making it
					easier than ever to bring your
					characters to life`,
  },
  {
    title:
      ' Total <span style="font-size: 46px;font-weight: 600;">Flexibility and Autonomy </span> over YOUR creation',
    info: `<i class="left-border"></i> AII AI Characters are defined
					by "Prompt Workflows" on
					Yours Protocol <br>
					<i class="left-border"></i>Users can set: basic traits
					self-awareness,conversation
					logic, worldview, and more`,
  },
  {
    title:
      ' Benefit from collective <span style="font-size: 46px;font-weight: 600;"> UGI (User Generated Intelligencel)</span>',
    info: `<i class="left-border"></i>  All "Prompt Workflows" are on-
				chain, enabling
				permissionless recreation of
				others' workflows <br>
				<i class="left-border"></i>Community-built prompts bring Al Characters to life with
					richer and more nuanced
					personalities`,
  },
];


var tList1 = [
  {
    title: ' Everlasting Stability',
    info: `<i class="left-border"></i>  Imagine creating something that will lastforever.<br>
          On-chain protocols offer that kind of new possibility for YOUR AI characters to stand the test of time.
      `,
  },
  {
    title:
      ' Easy Tailoring',
    info: `<i class="left-border"></i> Directly chat with others' characters. ORbuild upon their "prompt Workflow" toeasily create characters that fit YOURexact needs`,
  },
];

var tList2 = [
  {
    title:
      ' Alone we can do so little, together we can do so much.',
    info: `<i class="left-border"></i>Join the first community-driven UGI ecosystem today to unlock new possibilities with YOUR AIcharacters.`,
  },
 
];

$(function () {


  // document.getElementById('text_0').innerHTML = tList0[0].title;
  // document.getElementById('textp_0').innerHTML = tList0[0].info;
  var position_0 = -1;
  var changeInterval1_1 = setInterval(function () {
    if (position_0 + 1 < tList0.length) {
      position_0 = position_0 += 1;
    } else {
      position_0 = 0;
      clearInterval(changeInterval1_1);
    }
    document.getElementById('text_0').innerHTML = tList0[position_0].title;
    document.getElementById('textp_0').innerHTML = tList0[position_0].info;
  }, 2000); 

  $('.box').fullpage({
    navigation: true,
    navigationTooltips: [''],
    navigationColor: '#eee',
    anchors: [
      'ping1',
      'ping2',
      'ping3',
      'ping4',
      'ping5',
      'ping6',
      'ping7',
      'ping8',
    ],
    afterLoad: function (anchorLink, index) {
      if (index == 1) {
        $('.lizhi_center').toggleClass('lizhi_center_show');
        $('.lizhi_center').removeClass('lizhi_center_hide');
        $('.title1').removeClass('active44');
        $('.title1').toggleClass('active4');
        // $('#textp_0')
        //   .ticker({
        //     cursorList: ' ',
        //     rate: 20,
        //     delay: 1000,
        //   })
        //   .trigger('play')
        //   .trigger('stop');

        var video_1 = document.getElementById('video_cent1');
        var vList1 = [
          // './video/C001.mp4',
          './video/C002.mp4',
          './video/C003.mp4',
        ]; // 初始化播放列表，这里的url要用相对路径
        var vLen = vList1.length;
        var vList1_one = vList1[Math.floor(Math.random() * vList1.length)];
        video_1.src = vList1_one;
        video_1.load();
        video_1.play();

        // 文字
        clearInterval(changeInterval1_1);
        var position = -1;
        var changeInterval1 = setInterval(function () {
          if (position + 1 < tList0.length) {
            position = position += 1;
          } else {
            position = 0;
            clearInterval(changeInterval1);
          }
          document.getElementById('text_0').innerHTML = tList0[position].title;
          document.getElementById('textp_0').innerHTML = tList0[position].info;
        }, 2000); 

      } else if (index == 2) {
        $('.title2').removeClass('active44');
        $('.title2').toggleClass('active4');
        $('.cent2').removeClass('active44');
        $('.cent2').toggleClass('active4');

        var video_2 = document.getElementById('video_cent2');
        var vList2 = [
          './video/A001.mp4',
          './video/A002.mp4',
          './video/A003.mp4',
        ]; // 初始化播放列表，这里的url要用相对路径
        var vLen = vList2.length;
        var vList2_one = vList2[Math.floor(Math.random() * vList2.length)];
        video_2.src = vList2_one;
        video_2.load();
        video_2.play();
        document.getElementById('text_1').innerHTML = tList1[0].title;
        document.getElementById('textp_1').innerHTML = tList1[0].info;
        // $('#textp_1')
        //   .ticker({
        //     cursorList: ' ',
        //     rate: 20,
        //     delay: 1000,
        //   })
        //   .trigger('play')
        //   .trigger('stop');
        var position = -1;
        var changeInterval1 = setInterval(function () {
          if (position + 1 < tList1.length) {
            position = position += 1;
          } else {
            position = 0;
            clearInterval(changeInterval1);
          }
          document.getElementById('text_1').innerHTML = tList1[position].title;
          document.getElementById('textp_1').innerHTML = tList1[position].info;
        }, 2000);
      } else if (index == 3) {
        $('.title_r').removeClass('active_r1');
        $('.title_r').toggleClass('active_r');

        $('.img12').removeClass('active22');
        $('.img12').toggleClass('active2');
        $('.y-ain1').toggleClass('active3');

        var video_3 = document.getElementById('video_cent3');
        var vList3 = [
          './video/B001.mp4',
          './video/B002.mp4',
          './video/B003.mp4',
        ]; // 初始化播放列表，这里的url要用相对路径
        var vLen = vList3.length;
        var vList3_one = vList3[Math.floor(Math.random() * vList3.length)];
        video_3.src = vList3_one;
        video_3.load();
        video_3.play();

        var position2 = -1;
        document.getElementById('text_2').innerHTML = tList2[0].title;
        document.getElementById('textp_2').innerHTML = tList2[0].info;
        var changeInterval1 = setInterval(function () {
          if (position2 + 1 < tList2.length) {
            position2 = position2 += 1;
          } else {
            position2 = 0;
            clearInterval(changeInterval1);
          }
          document.getElementById('text_2').innerHTML = tList2[position2].title;
          document.getElementById('textp_2').innerHTML = tList2[position2].info;
        }, 2000);
      }else if (index == 4) {
        $('.back3').removeClass('back3_hide');
        $('.back3').toggleClass('back3_show');
      }
    },
    onLeave: function (index, nextIndex, direction) {
      if (index == 1) {
        $('.lizhi_center').toggleClass('lizhi_center_hide');
        $('.lizhi_center').removeClass('lizhi_center_show');
        $('.title1').removeClass('active4');
        $('.title1').toggleClass('active44');
         document.getElementById('video_cent1').src='';
        // document.getElementById('text_1').innerHTML = tList1[0].title;
        // document.getElementById('textp_1').innerHTML = tList1[0].info;
      } else if (index == 2) {
        $('.img10').removeClass('active2');
        $('.img10').toggleClass('active22');
        $('.y-ain').removeClass('active3');
        $('.cent2').removeClass('active4');
        $('.cent2').toggleClass('active44');
        $('.title2').removeClass('active4');
        $('.title2').toggleClass('active44');
         document.getElementById('video_cent2').src='';
        } else if (index == 3) {
        $('.title_r').removeClass('active_r');
        $('.title_r').toggleClass('active_r1');
        $('.img12').removeClass('active2');
        $('.img12').toggleClass('active22');
        $('.y-ain1').removeClass('active3');
         document.getElementById('video_cent3').src='';
        }else if (index == 4) {
        $('.back3').removeClass('back3_show');
        $('.back3').toggleClass('back3_hide');
      }
    },
  });
  $('.updown').click(function () {
    $.fn.fullpage.moveSectionDown();
  });

  $('.nav-app').hover(
    function () {
      $('.erweima').css({
        display: 'block',
      });
    },
    function () {
      $('.erweima').css({
        display: 'none',
      });
    }
  );
});
