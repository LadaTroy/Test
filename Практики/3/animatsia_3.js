(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animatsia_3_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"animatsia_3_atlas_2", frames: [[1364,0,464,678],[0,0,1362,1334]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Растровоеизображение1 = function() {
	this.initialize(ss["animatsia_3_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1675418167_gaskvascompdorogafonoviirisunok46 = function() {
	this.initialize(ss["animatsia_3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.кабина = function() {
	this.initialize(img.кабина);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2287,834);


(lib.колесо = function() {
	this.initialize(ss["animatsia_3_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.крыло2 = function() {
	this.initialize(img.крыло2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1329,2345);


(lib.тело = function() {
	this.initialize(img.тело);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1286,2438);


(lib.тело2 = function() {
	this.initialize(img.тело2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1052,2244);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.колесо();
	this.instance.setTransform(0,0,0.412,0.412);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,561.2,549.7), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.крыло2();
	this.instance.setTransform(0,0,0.152,0.152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,202,356.4), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Растровоеизображение1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,464,678), null);


(lib.крылобабочки2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ2();
	this.instance.setTransform(-32.1,225.1,1,1,0,0,0,-32.1,225.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:101,regY:178.2,scaleX:0.9576,x:95.35,y:178.2},0).wait(1).to({scaleX:0.9153,x:89.75},0).wait(1).to({scaleX:0.8729,x:84.1},0).wait(1).to({scaleX:0.8306,x:78.5},0).wait(1).to({scaleX:0.7882,x:72.85},0).wait(1).to({scaleX:0.7458,x:67.2},0).wait(1).to({scaleX:0.8118,x:76},0).wait(1).to({scaleX:0.8777,x:84.75},0).wait(1).to({scaleX:0.9437,x:93.5},0).wait(1).to({scaleX:1.0096,x:102.25},0).wait(1).to({scaleX:1.0756,x:111.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,0,227.89999999999998,356.4);


(lib.крылобабочки1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.setTransform(566.2,303.5,1.0545,1,0,0,0,546.6,303.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:232,regY:339,scaleX:1.0305,x:242,y:339},0).wait(1).to({scaleX:1.0065,x:249.5},0).wait(1).to({scaleX:0.9825,x:257.1},0).wait(1).to({scaleX:0.9585,x:264.6},0).wait(1).to({scaleX:0.9345,x:272.2},0).wait(1).to({scaleX:0.9105,x:279.7},0).wait(1).to({scaleX:0.8864,x:287.3},0).wait(1).to({scaleX:0.9113,x:279.45},0).wait(1).to({scaleX:0.9361,x:271.7},0).wait(1).to({scaleX:0.9609,x:263.85},0).wait(1).to({scaleX:0.9858,x:256.05},0).wait(1).to({scaleX:1.0106,x:248.2},0).wait(1).to({scaleX:1.0355,x:240.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,0,503.2,678);


(lib.колесо_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ3();
	this.instance.setTransform(280.6,274.8,1,1,0,0,0,280.6,274.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:18},0).wait(1).to({rotation:36},0).wait(1).to({rotation:54},0).wait(1).to({rotation:72,x:280.55},0).wait(1).to({rotation:90,x:280.6},0).wait(1).to({rotation:108},0).wait(1).to({rotation:126},0).wait(1).to({rotation:144},0).wait(1).to({rotation:162,y:274.75},0).wait(1).to({rotation:180,y:274.8},0).wait(1).to({rotation:90},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-90},0).wait(1).to({rotation:-75,y:274.75},0).wait(1).to({rotation:-60,x:280.65,y:274.8},0).wait(1).to({rotation:-45,x:280.6},0).wait(1).to({rotation:-30},0).wait(1).to({rotation:-15},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.1,-117.9,785.5,785.5);


(lib.бабочка2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.тело2();
	this.instance.setTransform(119.05,0,0.1548,0.1548,5.1975);

	this.instance_1 = new lib.крылобабочки2();
	this.instance_1.setTransform(151.5,207.15,0.8798,1,0,-14.9983,165.0006,78,178.3);

	this.instance_2 = new lib.крылобабочки2();
	this.instance_2.setTransform(316.1,178.2,1,1,0,0,0,101,178.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.бабочка2, new cjs.Rectangle(0,0,417.1,407.5), null);


(lib.бабочка1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.тело();
	this.instance.setTransform(175.9,40.45,0.1693,0.1693,-10.7034);

	this.instance_1 = new lib.крылобабочки1();
	this.instance_1.setTransform(393.6,252.9,0.4908,0.5714,0,-14.9988,165.0006,232,339.2);

	this.instance_2 = new lib.крылобабочки1();
	this.instance_2.setTransform(146.5,289.5,0.6047,0.6047,0,0,0,232,339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.бабочка1, new cjs.Rectangle(0,0,558.5,494.5), null);


(lib.машинка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.кабина();
	this.instance.setTransform(0,0,0.4786,0.4786);

	this.instance_1 = new lib.колесо_1();
	this.instance_1.setTransform(937.95,350.85,0.4259,0.4259,0,0,0,280.6,274.9);

	this.instance_2 = new lib.колесо_1();
	this.instance_2.setTransform(178.05,350.85,0.4259,0.4259,0,0,0,280.7,274.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.машинка, new cjs.Rectangle(0,0,1094.7,467.9), null);


// stage content:
(lib.animatsia_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_5
	this.instance = new lib.бабочка2();
	this.instance.setTransform(1421.05,1131.3,0.1546,0.1546,0,0,0,208.6,203.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:209.9,regY:205.7,x:1455.95,y:1095.95},0).wait(1).to({x:1484.5,y:1055.35},0).wait(1).to({x:1500.8,y:1008.65},0).wait(1).to({x:1494.95,y:959.8},0).wait(1).to({x:1467.75,y:918.45},0).wait(1).to({x:1429.7,y:886.6},0).wait(1).to({x:1386.8,y:861.4},0).wait(1).to({x:1341.6,y:840.65},0).wait(1).to({x:1295.1,y:823.1},0).wait(1).to({x:1247.7,y:807.85},0).wait(1).to({x:1199.8,y:794.45},0).wait(1).to({x:1151.45,y:782.5},0).wait(1).to({x:1102.9,y:771.7},0).wait(1).to({x:1054.05,y:761.9},0).wait(1).to({x:1003.75,y:758.15},0).wait(1).to({x:953.2,y:759.75},0).wait(1).to({x:902.8,y:764.45},0).wait(1).to({x:852.7,y:771.7},0).wait(1).to({x:802.35,y:768.95},0).wait(1).to({x:763.15,y:741.9},0).wait(1).to({x:786.3,y:698.55},0).wait(1).to({x:814.75,y:656.75},0).wait(1).to({x:835.95,y:610.9},0).wait(1).to({x:825,y:563.3},0).wait(1).to({x:833.25,y:521.2},0).wait(1).to({x:882.25,y:511.15},0).wait(1).to({x:932.8,y:512.8},0).wait(1).to({x:983.25,y:516.75},0).wait(1).to({x:1033.4,y:523.75},0).wait(1).to({x:1083.4,y:531.75},0).wait(1).to({x:1133.2,y:540.6},0).wait(1).to({x:1183.25,y:542.3},0).wait(1).to({x:1180.6,y:503.85},0).wait(1).to({x:1147.75,y:465.35},0).wait(1).to({x:1112,y:429.6},0).wait(1).to({x:1073.65,y:396.6},0).wait(1).to({x:1033.2,y:366.15},0).wait(1).to({x:991,y:338.2},0).wait(1).to({x:947.4,y:312.6},0).wait(1).to({x:902.6,y:289.05},0).wait(1).to({x:856.8,y:267.5},0).wait(1).to({x:810.2,y:247.85},0).wait(1).to({x:762.9,y:229.85},0).wait(1).to({x:715,y:213.4},0).wait(1).to({x:666.65,y:198.5},0).wait(1).to({x:617.9,y:184.95},0).wait(1).to({x:568.8,y:172.7},0).wait(1).to({x:519.4,y:161.7},0).wait(1).to({x:469.8,y:151.85},0).wait(1).to({x:419.9,y:143.2},0).wait(1).to({x:369.85,y:135.65},0).wait(1).to({x:319.65,y:129.2},0).wait(1).to({x:269.35,y:123.8},0).wait(1).to({x:218.9,y:119.6},0).wait(1).to({x:168.4,y:116.55},0).wait(1).to({x:117.8,y:114.85},0).wait(1).to({x:67.2,y:114.75},0).wait(1).to({x:16.7,y:116.85},0).wait(1).to({x:-33.45,y:123.5},0).wait(1));

	// Слой_4
	this.instance_1 = new lib.бабочка2();
	this.instance_1.setTransform(-161.55,535.85,0.2818,0.2818,0,0,0,70.1,203.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:209.9,regY:205.7,x:-42.8,y:565.75},0).wait(1).to({x:33.15,y:590.6},0).wait(1).to({x:105.65,y:610.9},0).wait(1).to({x:174.75,y:626.7},0).wait(1).to({x:240.5,y:638},0).wait(1).to({x:302.85,y:644.8},0).wait(1).to({x:361.8,y:647.05},0).wait(1).to({x:417.4,y:644.8},0).wait(1).to({x:469.6,y:638},0).wait(1).to({x:518.45,y:626.75},0).wait(1).to({x:563.95,y:610.95},0).wait(1).to({x:606.05,y:590.6},0).wait(1).to({x:644.75,y:565.75},0).wait(1).to({x:680.1,y:536.35},0).wait(1).to({x:698.6,y:490.95},0).wait(1).to({x:717.15,y:448.45},0).wait(1).to({x:735.85,y:408.9},0).wait(1).to({x:754.65,y:372.3},0).wait(1).to({x:773.55,y:338.6},0).wait(1).to({x:792.55,y:307.8},0).wait(1).to({x:811.7,y:279.95},0).wait(1).to({x:830.95,y:254.95},0).wait(1).to({x:850.35,y:232.95},0).wait(1).to({x:869.8,y:213.8},0).wait(1).to({x:889.4,y:197.6},0).wait(1).to({x:909.15,y:184.3},0).wait(1).to({x:929,y:173.9},0).wait(1).to({x:948.95,y:166.45},0).wait(1).to({x:969,y:161.9},0).wait(1).to({x:989.2,y:160.25},0).wait(1).to({x:1009.55,y:161.5},0).wait(1).to({x:1030,y:165.7},0).wait(1).to({x:1050.55,y:172.85},0).wait(1).to({x:1071.2,y:182.85},0).wait(1).to({x:1159.25,y:257.85},0).wait(1).to({x:1240.5,y:323.95},0).wait(1).to({x:1314.95,y:381.3},0).wait(1).to({x:1382.7,y:429.8},0).wait(1).to({x:1443.65,y:469.55},0).wait(1).to({x:1497.85,y:500.55},0).wait(1).to({x:1545.35,y:522.75},0).wait(1).to({x:1586.1,y:536.2},0).wait(1).to({x:1620.1,y:540.85},0).wait(1).to({x:1647.4,y:536.75},0).wait(1).to({x:1667.9,y:523.8},0).wait(1).to({x:1700.2,y:483.45},0).wait(1).to({x:1728.6,y:442.55},0).wait(1).to({x:1753.2,y:401.15},0).wait(1).to({x:1773.95,y:359.2},0).wait(1).to({x:1790.85,y:316.7},0).wait(1).to({x:1803.95,y:273.65},0).wait(1).to({x:1813.2,y:230.05},0).wait(1).to({x:1818.65,y:185.95},0).wait(1).to({x:1820.25,y:141.3},0).wait(1).to({x:1818,y:96.05},0).wait(1).to({x:1811.95,y:50.35},0).wait(1).to({x:1802.05,y:4},0).wait(1).to({x:1788.3,y:-42.85},0).wait(1).to({x:1770.7,y:-90.35},0).wait(1));

	// бабочка_1
	this.instance_2 = new lib.бабочка1();
	this.instance_2.setTransform(2078.15,574.65,0.3106,0.3106,0,0,0,279.2,247);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:279.3,regY:247.3,rotation:3.3016,x:2015.15,y:572.35},0).wait(1).to({rotation:6.883,x:1954.3,y:566.3},0).wait(1).to({rotation:10.6698,x:1895.7,y:556.65},0).wait(1).to({rotation:14.6446,x:1839.25,y:543.35},0).wait(1).to({rotation:18.7813,x:1784.95,y:526.45},0).wait(1).to({rotation:23.0447,x:1732.9,y:505.95},0).wait(1).to({rotation:27.3921,x:1683,y:481.8},0).wait(1).to({rotation:31.7755,x:1635.35,y:454.05},0).wait(1).to({rotation:36.1441,x:1589.8,y:422.65},0).wait(1).to({rotation:40.4484,x:1546.4,y:387.7},0).wait(1).to({rotation:44.6431,x:1505.3,y:349.05},0).wait(1).to({rotation:48.6896,x:1466.25,y:306.75},0).wait(1).to({rotation:52.558,x:1429.45,y:260.85},0).wait(1).to({rotation:56.2274,x:1394.75,y:211.3},0).wait(1).to({rotation:57.6742,x:1370.6,y:168.05},0).wait(1).to({rotation:51.2374,x:1346.05,y:132.85},0).wait(1).to({rotation:42.5591,x:1321.2,y:105.5},0).wait(1).to({rotation:30.8985,x:1296,y:86.1},0).wait(1).to({rotation:15.9505,x:1270.4,y:74.55},0).wait(1).to({rotation:-1.143,x:1244.5,y:70.95},0).wait(1).to({rotation:-17.696,x:1218.15,y:75.15},0).wait(1).to({rotation:-31.456,x:1191.5,y:87.35},0).wait(1).to({rotation:-41.932,x:1164.45,y:107.45},0).wait(1).to({rotation:-49.691,x:1136.95,y:135.45},0).wait(1).to({rotation:-55.472,x:1109.2,y:171.4},0).wait(1).to({rotation:-59.864,x:1081,y:215.25},0).wait(1).to({rotation:-63.277,x:1052.45,y:267.05},0).wait(1).to({rotation:-65.988,x:1023.55,y:326.75},0).wait(1).to({rotation:-68.184,x:994.25,y:394.45},0).wait(1).to({rotation:-50.508,x:973.9,y:424.15},0).wait(1).to({rotation:-37.523,x:950.05,y:446.85},0).wait(1).to({rotation:-23.545,x:922.45,y:462.7},0).wait(1).to({rotation:-10.118,x:891.25,y:471.65},0).wait(1).to({rotation:1.5303,x:856.35,y:473.7},0).wait(1).to({rotation:10.9864,x:817.85,y:468.9},0).wait(1).to({rotation:18.4362,x:775.75,y:457.15},0).wait(1).to({rotation:24.2735,x:730.1,y:438.5},0).wait(1).to({rotation:28.8821,x:680.65,y:413},0).wait(1).to({rotation:32.5688,x:627.6,y:380.6},0).wait(1).to({rotation:35.5622,x:570.95,y:341.3},0).wait(1).to({rotation:38.0286,x:510.65,y:295.1},0).wait(1).to({rotation:40.089,x:446.65,y:242},0).wait(1).to({rotation:41.8317,x:379,y:182},0).wait(1).to({rotation:43.3225,x:307.7,y:115.1},0).wait(1).to({rotation:23.3603,x:288.2,y:103.6},0).wait(1).to({rotation:9.7717,x:267.1,y:97.1},0).wait(1).to({rotation:-3.051,x:244.4,y:95.7},0).wait(1).to({rotation:-14.09,x:220.2,y:99.25},0).wait(1).to({rotation:-23.06,x:194.3,y:107.8},0).wait(1).to({rotation:-30.167,x:166.9,y:121.35},0).wait(1).to({rotation:-35.776,x:137.85,y:139.95},0).wait(1).to({rotation:-40.237,x:107.25,y:163.55},0).wait(1).to({rotation:-43.828,x:75.1,y:192.15},0).wait(1).to({rotation:-46.761,x:41.3,y:225.7},0).wait(1).to({rotation:-49.189,x:5.9,y:264.35},0).wait(1).to({rotation:-51.225,x:-31.15,y:307.95},0).wait(1).to({rotation:-52.954,x:-69.75,y:356.55},0).wait(1).to({rotation:-54.437,x:-109.95,y:410.25},0).wait(1).to({rotation:-55.722,x:-151.8,y:468.95},0).wait(1));

	// машина
	this.instance_3 = new lib.машинка();
	this.instance_3.setTransform(-397.4,813.85,0.6151,0.6151,0,0,0,547.4,234);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:2270.65},59).wait(1));

	// Слой_1
	this.instance_4 = new lib._1675418167_gaskvascompdorogafonoviirisunok46();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(225.9,391.7,2381.4,771.0999999999999);
// library properties:
lib.properties = {
	id: 'D57DAFE407ABEB4690F84914D9E0A3BD',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{ src:"Практики/3/images/кабина_.png", id:"кабина"},
		{ src:"Практики/3/images/крыло2.png", id:"крыло2"},
		{ src:"Практики/3/images/тело_.png", id:"тело"},
		{ src:"Практики/3/images/тело2.png", id:"тело2"},
		{ src:"Практики/3/images/animatsia_3_atlas_1.png", id:"animatsia_3_atlas_1"},
		{ src:"Практики/3/images/animatsia_3_atlas_2.png", id:"animatsia_3_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D57DAFE407ABEB4690F84914D9E0A3BD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;