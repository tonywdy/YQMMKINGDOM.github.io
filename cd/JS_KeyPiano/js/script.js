var letters = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
var isPlaying = true; //自动播放
var s_time = 500; //乐曲句间停顿时间
var n_time = 300;  //乐曲音符间停顿时间
var c_time = 2500; //乐曲章节间停顿时间
var wait = false; //控制乐曲句中停顿，避免重复停顿
var musicData; //音乐数据
var musicName; //乐曲名
var sounds; //乐曲内容
var chaptors;  //乐章
var index;  //乐谱“帧”位置
var chaptor_num = 0;  //乐谱“章节”序号


$(function(){
	initKeyLetter(); //键盘字母初始化
	initPianoButton(); //钢琴按钮初始化

	$.get("music-data.xml", function(data){  //加载“乐谱”
		musicData = $(data).find("music");
		chaptors = musicData.find("song");
	});
});

window.onload = function(){
	if(navigator.userAgent.indexOf("MSIE")>0){ //IE浏览器音符文件预加载
		index = 65;
		testNote();
	}else{ //非IE浏览器使用HTML5 audio，但目前效果并不理想
		$("#coverDiv").css({"display":"none"});
		alert("-_-!真可惜，您使用的浏览器可能无法正常播放.. 不过我会继续努力的！");
		playChaptor();
	}
};
function testNote(){
	if(index<=90){
		playIt(index);
		index++;
		setTimeout(testNote, 100);
	}else{
		setTimeout(startPlay, 1500);
	}
}
function startPlay(){
	$("#coverDiv").css({"display":"none"});
	//alert("开始了哦！快打开声音！^_^");
	playChaptor();
}

//键盘字母初始化
function initKeyLetter(){
	//字母事件效果
	$("#keyUL li a").hover(
		function(){
			$(this).css({"font-size":"34px"});
		},
		function(){
			$(this).css({"font-size":"28px"});
		}
	);
	setLetterColors();
}
function setLetterColors(){ //设置字母随机颜色，以及歌曲名称颜色
	var c_color = "0123456789abcdef";
	var theColor;
	$.each($("#keyUL li"), function(i, item){
		theColor = "#";
		for(var j=0;j<6;j++){
			theColor = theColor + c_color.charAt(Math.random()*16);
		}
		$(item).children().css({"color": theColor});
	});
	theColor = "#";
	for(var j=0;j<6;j++){  //设置歌曲名称颜色
		theColor = theColor + c_color.charAt(Math.random()*16);
	}
	$("#musicName").css({"color": theColor});
	setTimeout(setLetterColors, 1000);
}

//初始化钢琴开关
function initPianoButton(){
	$(".lightup").css("opacity", 0.2);
	$("#rightDiv").mouseover(function(){
		$(this).css({"cursor": "pointer"});
	}).mouseout(function(){
		$(this).css({"cursor": "default"});
	});
	$("#rightDiv").toggle(
		function(){
			openPiano();  //打开钢琴
		},
		function(){
			closePiano();  //关闭钢琴
		}
	);
	setTimeout(startButtonGlint, 0);

	$("#mainPlaying").css("opacity", 0);  //自动播放按动初始化
	$("#mainPlayer").mouseover(function(){
		$(this).css({"cursor": "pointer"});
	}).mouseout(function(){
		$(this).css({"cursor": "default"});
	});
	$("#mainPlayer").toggle(
		function(){
			isPlaying = true;
			$("#b_start").hide(); //左侧铵钮状态
			$("#b_stop").show();
			sounds = "";
			$("#chaptorDiv p").each(function(i ,data){
				sounds+=data.innerHTML+" ";  //播放当前输入的“乐谱”
			});
			
			chaptors = ""; //初始化
			index = 0;
			chaptor_num = 0;
			setTimeout(startPlayerGlint, 0);
			playSounds();
		},
		function(){
			stop();  //停止播放
		}
	);
}
function startButtonGlint(){ //钢琴按钮特效
	$(".lightup").animate({opacity: "1"},1000);
	$(".lightup").animate({opacity: "0.2"},1000);
	setTimeout(startButtonGlint, 2000);
}
function startPlayerGlint(){ //播放按钮特效
	if(!isPlaying)
		return;
	$("#mainPlaying").animate({opacity: "1"},1000);
	$("#mainPlaying").animate({opacity: "0"},1000);
	setTimeout(startPlayerGlint, 2000);
}

function openPiano(){
	$("#musicName").circulate("stop");
	$("#musicInfoDiv").css({"display": "none"}); //关闭网站信息
	stop();  //停止当前的自动播放
	
	$("#chaptorDiv").html("<p></p>");
	$("body").keyup(function(e){  //设置键盘监听
		if(isPlaying)
			return;
		var value;
		if(e==null)
			value = event.keyCode;
		else
			value = e.which;
		if(value>=65&&value<=90){
			playIt(value);
			$("#chaptorDiv p:last").append(letters[value-65]);
		}else if(value==13||value==9||value==32){ //遇空格、回车、table键分段
			$("#chaptorDiv").append("<p></p>");
		}else if(value==8){ //响应退格键
			var p_obj = $("#chaptorDiv p:last");
			if(p_obj.html().length==0){
				if($("#chaptorDiv p").length>1)
					p_obj.remove();
				else
					return; //保留第一行<p></p>结点
			}
			var p_html = $("#chaptorDiv p:last").html();
			if(p_html.length>0){
				$("#chaptorDiv p:last").html(p_html.substring(0, p_html.length-1));
			}
		}
	});
	$("#mainDiv").show(600);
}
function closePiano(){
	$("#mainDiv").css({"display": "none"});
	$("body").unbind("keyup");
	
	$("#b_start").hide();
	$("#b_stop").show();
	
	$("#musicInfoDiv").show(600); //显示网站信息
	chaptors = musicData.find("song");
	chaptor_num = 0;
	playChaptor();
}


//播放乐章
function playChaptor(){
	if(chaptors==""){ //chaptors为空，停止（钢琴开启模式）
		index = 0;
		playSounds();
		return;
	}else if(chaptors.length==0){
		alert("加载乐谱出错，请联系我！");
		return;
	}else if(chaptor_num>=chaptors.length){
		chaptor_num = 0;  //章节循环播放
	}
	//乐曲初始化
	musicName = $.trim($(chaptors[chaptor_num]).find("name").text()); //获取歌曲名称
	$("#musicName").html(musicName);
	$("#musicName").circulate({  //启动歌曲名称特效
        loop: true,
        speed: 3000,
        width: 340,
        height: 120
    });
	sounds = $.trim($(chaptors[chaptor_num]).find("content").text());
	chaptor_num++;
	index = 0;
	isPlaying = true;
	playSounds(); //播放乐曲
}

//播放乐曲
function playSounds(){
	if(!isPlaying)  //控制是否播放
		return;
	if(index>=sounds.length){
		$("#musicName").circulate("stop");
		setTimeout(playChaptor, c_time);
		return;
	}
	var note = sounds.charAt(index);
	var value = sounds.charCodeAt(index);
	index++;
	if(note>='a'&&note<='z'){
		wait = false;
		playIt(value-32);
		setTimeout(playSounds, n_time);
	}else if(note>='A'&&note<='Z'){
		wait = false;
		playIt(value);
		setTimeout(playSounds, n_time);
	}else if(!wait){
		wait = true;
		setTimeout(playSounds, s_time);
	}else{
		setTimeout(playSounds, 0);
	}
}

//播放对应音符
function playIt(value){
	$("#keyUL li:nth-child("+(value-64)+")").children().css({"background-color":"gray"});
	setTimeout("$(\"#keyUL li:nth-child("+(value-64)+")\").children().css({\"background-color\":\"#333333\"});", 200);
	if(navigator.userAgent.indexOf("MSIE")>0){ //IE浏览器
		var player = $("#player object:nth-child("+(value-64)+")")[0];
		player.controls.stop();
		player.controls.play();
	}else{
		var player = $("#player audio:nth-child("+(value-64)+")")[0];
		player.pause();
		player.currentTime = 0;
		player.play();
	}
}

//播放
function play(){
	$("#b_start").hide();
	$("#b_stop").show();
	isPlaying=true;
	setTimeout(startPlayerGlint, 0);
	playSounds();
}
//停止
function stop(){
	$("#mainPlaying").css("opacity", 0);
	$("#b_start").show();
	$("#b_stop").hide();
	isPlaying=false;
}