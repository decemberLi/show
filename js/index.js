/*
 * @Author: duanruilong
 * @Date: 2023-04-11 09:48:58
 * @LastEditors: duanruilong
 * @LastEditTime: 2023-04-11 15:33:07
 * @Description:
 */

var tList1 = [
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

var tList2 = [
  {
    title:
      ' With Yours protocol,users can benefit from collective UGl (User Generated Intelligence)',
    info: `<i class="left-border"></i> Everlasting Stability lmagine creating something that willlast forever. Onchain protocols offer that kind of
		intelligence,and promotingvigorousdevelopment thatwill stand the testof time.`,
  },
  {
    title: 'Flexibility and Autonomy',
    info: `<i class="left-border"></i> Total creative freedom and unaltered displayof users' creativityenabling users to connect with personal
		intelligent beings in ways`,
  },
  {
    title: 'Boundless Potential of Collaboration and Creation',
    info: `<i class="left-border"></i> a. The first community-built artificial intelligence. THE Al protocol for <br>
				b.Web3.0 communities.development.<br>
				c.Build upon others"PromptWorkflows" tocreate larger,higher-quality Albeings, where thepossibilities arelimited only by ourown imagination.`,
  },
];

$(function () {
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
        console.log('1111111111 :>> ', 1111111111);
        $('.lizhi_center').toggleClass('lizhi_center_show');
        $('.lizhi_center').removeClass('lizhi_center_hide');
        $('.title1').removeClass('active44');
        $('.title1').toggleClass('active4');
        $('#ticker')
          .ticker({
            cursorList: ' ',
            rate: 20,
            delay: 1000,
          })
          .trigger('play')
          .trigger('stop');

        var video_1 = document.getElementById('video_cent1');
        var vList1 = [
          './video/C001.mkv',
          './video/C002.mkv',
          './video/C003.mkv',
        ]; // 初始化播放列表，这里的url要用相对路径
        var vLen = vList1.length;
        var vList1_one = vList1[Math.floor(Math.random() * vList1.length)];
        video_1.src = vList1_one;
        video_1.load();
        video_1.play();
      } else if (index == 2) {
        $('.title2').removeClass('active44');
        $('.title2').toggleClass('active4');
        $('.cent2').removeClass('active44');
        $('.cent2').toggleClass('active4');

        var video_2 = document.getElementById('video_cent2');
        var vList2 = [
          './video/B001.mkv',
          './video/B002.mkv',
          './video/B003.mkv',
        ]; // 初始化播放列表，这里的url要用相对路径
        var vLen = vList2.length;
        var vList2_one = vList2[Math.floor(Math.random() * vList2.length)];
        video_2.src = vList2_one;
        video_2.load();
        video_2.play();
        document.getElementById('text_1').innerHTML = tList2[0].title;
        document.getElementById('textp_1').innerHTML = tList2[0].info;

        var position = -1;
        // document.getElementById('text_1').innerHTML = tList1[0].title;
        // document.getElementById('textp_1').innerHTML = tList1[0].info;
        var changeInterval1 = setInterval(function () {
          if (position + 1 < tList1.length) {
            position = position += 1;
          } else {
            position = 0;
            // clearInterval(changeInterval1);
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
          './video/A001.mkv',
          './video/A002.mkv',
          './video/A003.mkv',
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
            // clearInterval(changeInterval1);
          }
          document.getElementById('text_2').innerHTML = tList2[position2].title;
          document.getElementById('textp_2').innerHTML = tList2[position2].info;
        }, 2000);
      }
    },
    onLeave: function (index, nextIndex, direction) {
      if (index == 1) {
        $('.lizhi_center').toggleClass('lizhi_center_hide');
        $('.lizhi_center').removeClass('lizhi_center_show');
        $('.title1').removeClass('active4');
        $('.title1').toggleClass('active44');
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
      } else if (index == 3) {
        $('.title_r').removeClass('active_r');
        $('.title_r').toggleClass('active_r1');
        $('.img12').removeClass('active2');
        $('.img12').toggleClass('active22');
        $('.y-ain1').removeClass('active3');
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
