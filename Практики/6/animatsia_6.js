(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animatsia_6_atlas_1", frames: [[0,0,1813,1727]]},
		{name:"animatsia_6_atlas_2", frames: [[0,0,917,1694],[919,0,911,1691]]},
		{name:"animatsia_6_atlas_3", frames: [[0,0,1244,769],[1246,0,394,329]]}
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



(lib.головабезрожек_Монтажнаяобласть1 = function() {
	this.initialize(ss["animatsia_6_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.левоекрыло_Монтажнаяобласть1 = function() {
	this.initialize(ss["animatsia_6_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.правоекрыло_Монтажнаяобласть1 = function() {
	this.initialize(ss["animatsia_6_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.рог_Монтажнаяобласть1 = function() {
	this.initialize(ss["animatsia_6_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.теложук_Монтажнаяобласть1 = function() {
	this.initialize(ss["animatsia_6_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.трава = function() {
	this.initialize(img.трава);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4592,3208);// helper functions:

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


(lib.тело = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.теложук_Монтажнаяобласть1();
	this.instance.setTransform(253.3,0,0.2934,0.2934,29.9947);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.тело, new cjs.Rectangle(0,0,714,704.7), null);


(lib.рогправ = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.рог_Монтажнаяобласть1();
	this.instance.setTransform(90.35,0,0.3885,0.3885,44.9984);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.рогправ, new cjs.Rectangle(0,0,198.6,198.7), null);


(lib.роглев = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.рог_Монтажнаяобласть1();
	this.instance.setTransform(196.5,76.55,0.3887,0.3885,0,29.9972,-150.0015);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.роглев, new cjs.Rectangle(0,0,196.5,187.3), null);


(lib.крылоправ = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.правоекрыло_Монтажнаяобласть1();
	this.instance.setTransform(349.15,0,0.292,0.292,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.крылоправ, new cjs.Rectangle(0,0,537.3,537.3), null);


(lib.крылолев = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.левоекрыло_Монтажнаяобласть1();
	this.instance.setTransform(91.45,0,0.3026,0.3026,10.2775);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.крылолев, new cjs.Rectangle(0,0,364.5,553.9), null);


(lib.голова = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.головабезрожек_Монтажнаяобласть1();
	this.instance.setTransform(111.1,0,0.2891,0.2891,29.9917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.голова, new cjs.Rectangle(0,0,422.6,372.3), null);


// stage content:
(lib.animatsia_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Каркас_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABNGYQgogoAAg6QAAg5AogpQAogoA6AAQA6AAAoAoQApApAAA5QAAA6gpAoQgoApg6AAQg6AAgogpgAkTjmQglglAAg1QgBg1AmgmQAlgkA1gBQA2AAAkAlQAlAmAAA1QAAA1glAlQglAlg1AAQg1AAglglg");
	this.shape.setTransform(447.2,1198.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOHeQhChCgBhfQABhfBChDQBChCBfAAQBeAABDBCQBDBDAABfQAABfhDBCQhDBDheAAQhfAAhChDgAB4DeQgpApAAA5QAAA5ApApQAoApA6gBQA5ABAogpQApgoAAg6QAAg5gpgpQgngpg6AAQg6AAgoApgAlRijQhBhBAAhdQAAhcBBhCQBAhBBeAAQBcAABCBBQBABBAABdQAABdhABBQhCBBhcAAQhcAAhChBgAjpmRQglAmAAA0QAAA2AlAkQAmAmA0AAQA1AAAlgmQAmgkAAg2QAAg0gmgmQgkglg2AAQg0AAgmAlg");
	this.shape_1.setTransform(442.95,1197.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E6D00").s().p("EhLBBoDQHTi+GejWIAhgRQS6p2LwtCQPqxXC+3AQB3uMi/wXIgdiUQixyACpu6IAHgkQBgoHDHnKQEFpTG2nrQJvq7PWnmQFxi5GoiZIAZgJQEAhcEVhRIgNgYQgYhmADhbIACgeQAtobP+iVQDVgoCpgOQTLhmvFS6Qh/DDiHCEQm/G0oRkRIhZAAQo6CPnSDnQjuB2jTCOQtuJNmQPaQiJFThRF+QghCcgXCkQgXCZgNCdIgEAzQg8LvByN7QAqFIBBFbIADACIAHAzQAhCoAICXQAzH5gXHMQggJ3irIkUgK/AjOgv/ANOIqwCzIyfE2QDWhPDLhSgEA8YhaAQhCBDgBBfQABBeBCBDQBDBDBfAAQBeAABDhDQBDhDAAheQAAhfhDhDQhDhCheAAQhfAAhDBCgEA25hj7QhBBCAABcQAABcBBBBQBCBCBcAAQBcAABBhCQBChBAAhcQAAhdhChBQhBhBhcAAQheAAhABBg");
	this.shape_2.setTransform(57.8836,1788.9285);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0E6D00").s().p("EhQRBlCQHeihGqi8IAigPQTeosMisTQQqwXEY2yQCuuDiAwhIgTiVQhryKDjutIAIgkQCAoADjm9QEnpCHUnQQKZqUPxmpQF8iiGLiUIAZgKQD/hgEUhWIgOgXQgahmABhbIACgeQAjocP8inQDUgrCpgRQTJh7uxTKQh7DGiECFQm4G8oVkIIhZACQo4CZnnD5Qj1BnjbCBQuRIWnKPBQieFJhnF5QgrCaghCiQggCXgXCcIgHAzQhqLqA8OAQAWFKAsFeIADACIAEA0QAWCpgBCXQAVH7g0HKQhFJ1jMIZUgNHAifgwsAKRIq6CJIywDuQDbhCDPhGgEBEehXcQheAChCBDQhBBEABBfQACBfBEBBQBEBCBegCQBegCBChEQBChDgChfQgChfhDhBQhChAhbAAIgGAAgEA+whhQQhcAChABCQhABDABBcQACBdBCA/QBDBBBcgCQBcgCBBhCQBAhCgChdQgChchChAQhBg/hZAAIgFAAg");
	this.shape_3.setTransform(39.9096,1744.1895);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABUGWQgpgngBg6QgBg5AogqQAogoA5gCQA6AAApAnQApAoABA5QABA6goApQgnAqg6AAIgDABQg4AAgogogAkXjiQgmgkgBg1QgBg1AkgmQAmgmA0gBQA2AAAlAkQAmAlABA0QABA2glAlQgkAmg1ABIgDABQgzAAglglg");
	this.shape_4.setTransform(464.7748,1176.8009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWHeQhDhBgChfQgBhfBAhEQBChDBegCQBfgCBEBCQBEBBACBfQABBfhBBDQhCBEheACIgHAAQhaAAhChAgADdCyQg6ABgoApQgnApABA6QABA5ApAoQApAoA6gBQA6gBAngpQAogpgBg6QgBg5gpgoQgogng6AAIgBAAgAlTieQhDg/gChdQgBhcBAhDQBAhCBcgCQBdgBBCBAQBBBAADBcQABBdg/BCQhBBChcACIgEAAQhZAAhBg/gAiWmzQg1ABglAlQglAmACA1QABA2AlAkQAmAlA1gBQA2gCAkglQAlgmgBg1QgBg1gmglQglgjg1AAIgBAAg");
	this.shape_5.setTransform(460.5,1175.8778);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABbGVQgqgngCg5QgBg6AngqQAngpA5gCQA6gCApAnQAqAnACA5QADA6goAqQgnApg5ACIgHAAQg1AAgoglgAkbjdQgmgjgCg1QgCg1AkgnQAkgmA1gCQA1gCAmAkQAnAkACA1QABA1gkAmQgjAng1ACIgHAAQgxAAgkgjg");
	this.shape_6.setTransform(482.3772,1155.3294);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeHdQhEhAgDhfQgDheA/hFQBAhFBfgDQBfgEBFBAQBFBBADBfQADBehABFQhBBFheADIgLABQhYAAhBg+gADgCuQg5ACgnApQgoAqACA6QACA5AqAnQAqAoA6gDQA5gCAngpQAngqgCg6QgCg5gqgnQgnglg2AAIgGAAgAlWiYQhEg/gDhcQgDhcA/hEQA+hEBegDQBcgDBDA/QBDA/ADBcQADBdg+BDQg/BEhcADIgIABQhXAAhBg9gAiemxQg1ACgkAmQgjAnACA1QABA1AnAjQAmAlA1gCQA2gCAjgnQAkgmgBg1QgCg1gogkQgjgigzAAIgFAAg");
	this.shape_7.setTransform(478.0998,1154.5046);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0E6D00").s().p("EhVTBhtQHniEG1iiIAigNQT+ngNQrgQRovVFw2eQDkt3g/wmIgLiXQgkyNEcueIALgkQCen3D9muQFLovHvmzQK/pqQJlrQGGiLFuiRIAYgJQD+hlEShbIgPgXQgchlABhbIAAgeQAbocP4i5QDTgvCpgUQTHiQubTaQh4DIiCCIQmwHDoaj+IhZADQkaBRkRCDQkPB2j4BiQj6BZjjBzQuwHeoDOjQixE+h/FzQgzCWgsChQgpCUggCbIgKAyQiXLiAGOCQABFKAXFhIADADIABA0QAMCpgLCYQgKH7hPHGQhsJvjsILUgPLAhpgxOAHSIrBBfIuYB9IkkAnQDeg0DTg5gEBJ0hTgQhfADhABFQhABFADBeQADBfBFBAQBFBBBfgEQBegDBAhFQBBhFgDheQgEhfhFhBQhBg9hZAAIgJABgEBD7hdOQhdADg/BEQg+BEADBcQADBcBDA/QBFA/BcgDQBcgDA/hEQA/hDgDhdQgEhchDg/QhAg8hXAAIgJAAg");
	this.shape_8.setTransform(23.5365,1697.3473);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0E6D00").s().p("EhaFBeEQHuhmG9iIIAjgKQUZmRN7qsQShuPHH2FQEZtoACwoIgBiWQAjyOFSuLIAOgjQC8nsEWmeQFtobIImTQLko/QeksQDGg5Ckg4QCtg8DGhTIAYgKQD8hqEQhfIgOgXQgfhkgBhcIABgeQAQocP2jLQDTgyCngXQTFiluGTqQh0DKiACKQmnHLofj2IhZAFQkZBWkYCUQkVCDj/BZQj/BJjpBlQvLGko7OCQjFEziUFrQg9CTg1CdQgyCRgqCZIgNAyQjDLXgxOBQgSFKABFhIACACIgCA0QACCrgTCWQgqH5hqHBQiRJnkLH9UgRMAgpgxmAESI+ICOQDggmDXgsgEBO5hPQQheAFhABFQg/BHAFBeQAEBeBHBAQBGA/BfgFQBegFA/hGQBAhGgGhfQgFhehGg/QhBg7hVAAIgOABgEBI1hY3QhcAEg+BFQg+BFAFBcQAFBdBEA9QBGA/BbgGQBdgFA9hEQA+hFgEhcQgFhdhFg9QhAg6hUAAIgNABg");
	this.shape_9.setTransform(8.7744,1648.4379);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABiGUQgqgmgDg6QgDg6AmgqQAngrA5gDQA5gDArAnQAqAmAEA5QADA6gnAqQgmArg6ADIgIAAQg0AAgogjgAkfjYQgngigCg2QgDg1AjgnQAjgnA1gDQA2gCAmAjQAnAjADA1QADA2gkAmQgiAog2ACIgHAAQgwAAglghg");
	this.shape_10.setTransform(499.999,1133.8805);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAmHdQhFhAgFheQgEheA9hHQBAhFBegFQBfgFBGA/QBGA/AFBeQAFBfhABGQg/BGheAFIgMABQhXAAhCg7gADjCqQg6ADgmAqQgnArADA5QAEA6AqAmQArAmA5gDQA6gCAmgrQAmgqgDg6QgDg5gqgnQgogjg0AAIgIAAgAlZiSQhEg9gFhdQgFhcA9hFQA/hFBcgEQBcgFBEA+QBEA9AFBdQAFBcg9BFQg+BEhcAFIgPABQhSAAhAg6gAilmuQg1ADgkAnQgjAnADA1QADA1AnAjQAnAjA1gCQA1gDAjgoQAkgmgDg1QgDg1gngkQgkgggyAAIgGAAg");
	this.shape_11.setTransform(495.703,1133.1247);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABqGRQgsglgEg6QgDg5AlgrQAmgsA5gDQA6gFArAmQArAmAEA5QAEA5gmAsQglArg6AEIgMAAQgyAAgmgigAkijTQgogigEg1QgDg1AigoQAjgnA1gEQA1gEAnAiQAoAjAEA1QAEA1gjAnQgjAog1AEIgKAAQguAAgkgfg");
	this.shape_12.setTransform(517.5782,1112.4575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAvHcQhGg+gHheQgGheA8hIQA+hHBfgGQBegHBHA+QBHA+AHBeQAHBfg/BHQg+BHheAHIgQAAQhUAAhBg4gADlCmQg5AEglArQgmArAEA6QAEA5ArAmQArAmA6gFQA5gEAmgrQAlgrgEg5QgEg6grglQgmgigyAAIgNAAgAlciMQhFg8gGhcQgHhcA8hGQA9hGBdgGQBbgGBGA8QBFA9AGBcQAHBcg8BGQg8BFhdAHIgSAAQhQAAhAg3gAitmrQg1AEgiAnQgjAoAEA1QAEA2AnAhQAoAjA1gEQA1gDAigoQAjgngEg2QgDg1gogiQgjgfgwAAIgKAAg");
	this.shape_13.setTransform(513.3035,1111.7492);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0E6D00").s().p("EhenBaIQHzhIHFhsIAkgJQUvlBOip0QTXtFIb1nQFNtWBDwlIAIiXQBqyJGJt1IAPgiQDZngEwmMQGNoDIfl0QMGoQQtjsQDKgtCXgvQCkg0DBhWIAYgLQD6huEPhkIgPgWQgghkgDhbIAAgfQAHocPyjcQDSg2CngaQTBi7tvT6QhxDMh9CMQmgHSojjsIhYAGQkYBckgClQkcCOkEBPQkDA5jvBXQvjFopwNfQjXEniqFgQhGCPg+CaQg7COgzCWIgQAwQjvLLhnN8QgmFIgUFhIABACIgFA0QgJCqgcCVQhIH2iFG5Qi3JekoHrUgTKAfigxwABSIrHAJIzHAPQDjgYDZgfgEBTshKtQhfAHg9BHQg+BIAHBdQAGBfBHA9QBHA+BfgGQBegGA+hIQA+hHgHheQgGhehIg/QhAg3hTAAIgSAAgEBNehUNQhcAHg9BFQg8BGAGBcQAGBdBGA8QBGA9BcgHQBcgHA9hFQA9hFgHhdQgGhchGg9QhAg2hRAAIgRAAg");
	this.shape_14.setTransform(-4.2393,1597.5842);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABxGPQgsgkgFg6QgFg5AlgsQAlgsA5gFQA6gFArAlQAsAlAFA5QAFA6glArQglAtg5AEIgPABQgwAAgmghgAkmjOQgnghgGg2QgEg0AhgpQAjgoA0gFQA2gEAnAhQApAjAFA0QAEA2giAnQghApg1AEIgNABQgtAAgkgeg");
	this.shape_15.setTransform(535.1839,1091.0085);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA3HbQhHg9gIheQgIheA7hIQA9hJBegIQBegIBIA9QBIA9AJBeQAIBeg9BIQg8BJheAIIgXABQhQAAhAg2gADoCiQg5AFglAsQgkArAEA6QAGA5ArAlQAsAlA5gFQA5gFAmgsQAlgrgGg6QgFg5grglQgmghgyAAIgOABgAleiGQhHg7gHhcQgIhcA7hHQA7hHBcgIQBdgHBGA7QBGA7AIBcQAIBdg7BGQg7BGhcAJIgWABQhOAAg/g1gAi0moQg1AEgiApQgiAoAFA1QAFA1AoAhQAoAiA1gEQA1gFAhgoQAjgogFg1QgFg1gogiQgjgeguAAIgMABg");
	this.shape_16.setTransform(530.9042,1090.3843);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0E6D00").s().p("EhLqBXBI+MhcQDkgLDagSQH3gpHLhRIAkgGQVAjwPHo7QUHr4Ju1EQGAs/CDwgIARiWQCxyBG9tbIARghQD2nSFIl5QGrnrI2lRQMkngQ6irQDLghCKgnQCbgtC8hYIAYgLQD3hyENhpIgPgWQgihjgEhcIgBgeQgCocPujuQDQg6CogcQS9jRtZUKQhtDNh7CPQmYHZomjiIhZAHQkWBgkpC3QkiCZkJBFQkGApj0BIQv2EsqkM2QjoEajAFVQhOCLhHCVQhECKg7CTIgTAwQkaK6ieN0Qg6FFgpFfIABADIgIAzQgTCqglCSQhnHyifGwQjaJRlHHYUgT5AcqgtiAAAQhVAAhVgBQhVgChXgDgEBYNhGpQhfAIg9BJQg8BIAIBeQAIBeBIA9QBJA9BegIQBegIA9hJQA9hIgJheQgIhehIg9QhAg2hRAAIgVABgEBR0hQCQhcAIg8BHQg7BHAIBcQAIBcBGA7QBIA8BcgIQBcgJA7hGQA8hGgJhdQgHhchIg7Qg+g1hQAAIgUABg");
	this.shape_17.setTransform(-15.314,1549.8796);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0E6D00").s().p("EhPzBSvI5diyIklggQDkADDagFQH5gKHPg1IAkgEQVMiePon/QUzqpK/0bQGysmDDwXIAaiUQD2x0Hws+IATggQESnDFflkQHHnQJKkuQM/mvRChoQDOgUB8ggQCQgmC3hbIAYgMQD2h2ELhuIgQgWQgjhigGhbIgCgfQgLocPpj/QDQg+CngfQS6jltDUYQhpDPh5CRQmPHhorjaIhYAKQkUBlkzDGQkpCkkNA7QkIAZj4A5QwGDtrVMMQj4ELjUFJQhXCFhQCRQhMCHhFCOIgWAvQlDKnjTNqQhOFBg+FbIABADIgLAzQgdCogvCQQiEHqi5GmQj9JDlkHDUgTnAY5gnUAAAQmdAAnAgrgEBcYhCvQheAJg7BKQg7BKAJBdQAKBeBJA8QBKA7BegKQBegKA7hJQA8hJgKheQgKhehKg8Qg+gyhPAAIgaABgEBV1hMBQhcAJg6BIQg6BIAKBcQAJBcBIA6QBIA7BcgKQBbgKA7hIQA6hIgKhbQgJhchIg7Qg9gxhNAAIgaABg");
	this.shape_18.setTransform(-24.3942,1503.2177);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AB4GNQgsgkgHg5QgGg5AkgtQAlgsA5gGQA6gGArAkQAtAlAGA4QAGA6gkAsQgkAtg5AFIgRABQgvAAgmgfgAkpjJQgpghgFg1QgGg0AhgpQAhgpA1gGQA1gFApAhQAoAiAGA0QAGA1giAoQggAqg1AFIgQABQgsAAgigdg");
	this.shape_19.setTransform(552.7973,1069.5595);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA/HaQhIg8gKheQgJhdA6hKQA7hKBegJQBfgKBIA7QBKA8AKBeQAKBeg8BJQg7BJheAKIgbACQhNAAhAgzgADrCdQg4AHglAsQgkAsAGA6QAGA5AsAkQAtAkA5gGQA5gGAkgtQAkgrgGg6QgFg5gtglQglgegwAAIgRAAgAlgiAQhIg6gJhcQgKhcA6hIQA6hIBcgJQBdgJBHA5QBHA7AJBcQAKBbg5BIQg7BIhbAKIgaABQhMAAg+gygAi7mlQg1AGghAoQgiApAGA1QAGA1AoAhQApAhA1gGQA2gFAggpQAhgogFg2QgGg0gpgiQgjgcgsAAIgOABg");
	this.shape_20.setTransform(548.5041,1069.0046);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0E6D00").s().p("EhTtBN+I5PkVIkjgxQDkAQDaAJQH4AUHSgYIAkgCQVThMQFnBQVapXMNzuQHjsLEBwIIAjiTQE7xiIhsfIAVgfQEumxFzlOQHjmzJbkLQNYl7RGgmQDPgIBugYQCGggCxheIAYgMQD0h7EIhyIgQgVQgkhigIhcIgCgeQgVocPlkQQDPhBCmgjQS1j5ssUlQhmDSh1CSQmIHooujQIhYALQkSBqk8DVQkvCvkRAwQkKAJj6AqQwTCusDLfQkID7joE8QheCAhZCMQhUCBhNCKIgZAtQlsKTkINbQhhE8hTFXIABADIgOAyQgoCmg3CNQihHhjTGZQkgIzl+GsUgTKAVggiIAAAQpoAAq0htgEBgQg+0QheALg6BKQg6BLAMBeQAKBdBLA7QBLA6BdgLQBegMA6hLQA7hJgMheQgLhehLg7Qg+gwhMAAQgPAAgPACgEBZjhH+QhcALg5BIQg4BJALBcQALBcBIA4QBJA6BcgMQBbgLA5hJQA6hJgMhbQgLhchJg5Qg9gvhKAAQgOAAgPACg");
	this.shape_21.setTransform(-31.4094,1456.4023);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AB+GLQgtgjgHg5QgGg5AjgtQAjgtA5gHQA5gIAtAkQAtAjAHA5QAIA5gkAtQgjAug5AHIgTABQguAAgmgegAktjEQgpgggHg1QgGg0AggqQAhgpA1gHQA0gGApAgQAqAhAHA1QAGA0ghApQggAqg1AHIgQABQgrAAgjgcg");
	this.shape_22.setTransform(570.418,1048.1353);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABIHYQhKg6gLheQgMhdA5hLQA7hKBegMQBegLBKA6QBKA6AMBeQALBeg6BKQg7BLhdALQgQACgPAAQhLAAg+gxgADuCZQg5AHgjAtQgjAtAGA5QAHA6AtAjQAtAjA6gHQA5gGAjguQAkgtgIg5QgHg5gtgkQglgdgtAAIgUABgAlih6QhJg4gLhdQgLhbA4hJQA5hJBcgLQBcgLBJA5QBJA4AKBcQALBcg4BJQg5BJhbALQgQACgOAAQhKAAg9gwgAjCmiQg1AHghApQggApAGA1QAHA1ApAgQAqAgA0gGQA1gGAggqQAhgpgGg1QgHg1gqggQgigbgrAAIgQABg");
	this.shape_23.setTransform(566.1292,1047.6548);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0E6D00").s().p("EhXYBIxI9bm5QDiAfDaAVQH2AzHSAEIAkAAQVVAIQfmDQV8oBNYy+QIRrrE/v3IAsiQQF/xOJQr8IAXgeQFImeGGk3QH9mVJpjlQNulHRHAdQDOAEBggRQB6gaCthiIAXgMQDyh+EHh3IgRgVQgnhigIhbIgDgeQgeobPgkiQDNhFCmglQSxkPsVU0QhjDThzCUQl9HvozjGIhYAMQkQBvlGDkQk2C5kUAlQkJgHj9AbQwcBusuKvQkXDqj6EtQhmB7hhCGQhcB8hVCFIgbArQmUJ7k7NKQh0E1hpFSIACADIgSAxQgxCjg/CJQi/HXjqGMQlDIgmXGVQyjSa9xAAQsSAAuMjJgEBjxg62QhdANg5BLQg4BMAMBdQANBeBLA5QBMA5BegNQBdgNA5hMQA5hLgNheQgOhehLg4Qg9guhKAAQgRAAgRACgEBc6hD5QhcANg3BJQg3BLAMBbQANBbBJA4QBKA4BcgNQBbgNA4hKQA4hJgNhcQgNhchKg3Qg8gthHAAQgRAAgRACg");
	this.shape_24.setTransform(-36.2247,1409.3061);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ACGGJQgugjgIg4QgIg6AigtQAjguA5gIQA6gIAtAjQAuAiAHA5QAJA5gjAuQgjAug5AIIgUABQgtAAglgcgAkwi+QgpgggIg0QgIg1AggqQAggpA0gIQA2gIApAgQAqAgAHA0QAIA1ggAqQggAqg0AHIgUABQgpAAgigZg");
	this.shape_25.setTransform(588.0359,1026.6948);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABQHXQhLg5gMhdQgNheA3hLQA5hMBegNQBegMBLA4QBLA5ANBeQAOBeg6BKQg5BMhdANQgRADgRAAQhJAAg+gvgADxCVQg5AIgjAuQgiAtAIA6QAIA4AuAjQAtAiA5gHQA5gIAjguQAjgugJg5QgHg5gugiQglgcgtAAIgVABgAlkh0QhKg3gMhcQgNhaA3hLQA4hKBcgMQBbgNBKA3QBJA4ANBcQAMBbg3BKQg3BJhcANQgRADgRAAQhHAAg8gugAjKmeQg0AIggApQggAqAIA1QAIA0ApAgQAqAgA1gIQA0gHAggqQAggqgIg1QgHg0gqggQghgagqAAIgUACg");
	this.shape_26.setTransform(583.7376,1026.28);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ACMGGQgughgJg5QgJg5AiguQAigvA4gJQA5gJAuAiQAvAiAJA5QAJA5giAuQgiAug5AJQgMACgLAAQgrAAglgbgAk0i6QgqgegIg1QgIg0AegrQAggqA0gIQA1gIAqAeQArAfAIA1QAIA0gfAqQgfArg0AIQgLACgLAAQgoAAgigZg");
	this.shape_27.setTransform(605.6611,1005.2622);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABYHWQhMg4gNhdQgPhdA2hNQA4hMBdgOQBdgPBNA3QBMA4APBdQAPBeg4BMQg4BMhdAPQgUADgSAAQhHAAg9gsgAD0CRQg5AJgiAvQgiAuAJA5QAJA5AvAhQAuAiA5gJQA5gJAhguQAigugJg5QgJg5gugiQglgbgrAAQgLAAgMACgAlmhtQhLg2gOhbQgOhcA2hLQA3hKBbgOQBbgPBLA2QBKA2APBcQANBbg1BLQg2BLhcAOQgTADgSAAQhFAAg8grgAjRmaQg0AIgfAqQgfArAIA0QAJA1AqAeQArAgA0gJQA1gIAegrQAggqgJg0QgIg1grgfQghgYgoAAQgLAAgLACg");
	this.shape_28.setTransform(601.3383,1004.8966);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0E6D00").s().p("EhazBDMIqpjNIt5kKIkbhUQDhAsDXAjQHyBRHRAgIAkADQVSBaQ0lBQWZmsOgyHQI9rKF9vjIA1iMQG/w1J/rWIAZgcQFgmKGYkeQIVl2J2i/QOAkRRDBfQDOARBRgMQBvgUCnhlIAXgMQDviDEFh7IgRgVQgohigLhaIgDgeQgnocPakyQDMhIClgoQStkkr+VCQhfDUhwCXQl2H1o1i8IhYANQkPBzlPDzQk+DCkVAaQkJgXj+AMQwgAutWJ8QklDZkMEdQhtB1hqB/QhiB2heCAIgeAqQm5JhluM1QiHEuh8FLIABADIgUAvQg7CghICGQjbHJkBF+QlkIKmvF8QxwPn6CAAQumAAxMk5gEBm8g21QhdAOg4BNQg3BNAPBcQAOBeBMA3QBNA4BdgPQBdgOA4hNQA4hMgPhdQgPhehMg3Qg9gshGAAQgTAAgUADgEBf7g/wQhbAPg3BKQg2BKAOBcQAOBbBLA2QBMA3BagOQBcgPA2hLQA2hLgOhaQgPhchKg3Qg7gqhFAAQgTAAgTADg");
	this.shape_29.setTransform(-38.7665,1361.9496);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ACTGEQgvghgKg5QgJg5AgguQAhgvA5gKQA5gKAuAhQAwAhAJA4QAKA5ghAvQghAvg4AKQgOACgMAAQgqAAgkgZgAk2i0QgrgdgJg1QgKg1AegrQAfgqA0gKQA1gJAqAeQAsAfAJA0QAJA0gfArQgdArg1AJQgMACgLAAQgnAAghgXg");
	this.shape_30.setTransform(623.277,983.827);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABgHUQhNg2gQhdQgQhdA1hNQA3hNBdgRQBdgQBNA2QBOA2AQBdQAQBdg2BNQg2BOhdAQQgWAEgVAAQhEAAg8gqgAD2CNQg5AKghAvQggAuAJA5QAKA5AvAhQAvAhA5gKQA4gKAhgvQAhgvgKg5QgJg4gwghQgkgagqAAQgMAAgNADgAlohnQhLg1gQhbQgQhaA0hNQA2hLBbgQQBbgQBLA1QBMA1AQBbQAPBbg0BMQg1BLhbAQQgVAEgUAAQhDAAg7gpgAjYmXQg0AKgfAqQgeArAKA1QAJA1ArAdQArAeA0gJQA1gJAdgrQAfgrgJg0QgJg0gsgfQgggXgmAAQgMAAgNACg");
	this.shape_31.setTransform(618.9638,983.5401);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0E6D00").s().p("Ehd9A9PIqcj1Ix8mlQDdA6DVAwQHsBuHOA9IAlAFQVKCsRFj/QWvlVPmxMQJnqmG5vJIA9iJQIAwYKqquIAagaQF3l0GqkFQIplVKBiYQOPjaQ7CgQDNAeBBgHQBjgPCihnIAXgOQDtiHEDh/IgRgVQgqhggNhbIgDgeQgxoaPVlEQDMhMCjgrQSnk4rmVPQhaDWhvCYQltH7o4ixIhYAPQkMB4laEAQlFDKkWAQQkHgoj+gDQwigSt7JHQkxDHkdEMQh0BthxB5QhpBxhmB5IggAoQndJFmgMeQiZEliQFCIABADIgXAvQhFCchPCBQj1G7kaFtQmCH1nFFgQw2NG2yAAQwpAAz0m/gEBpwgyxQhdAQg3BNQg2BOAQBdQARBdBNA2QBNA2BdgQQBdgRA2hNQA3hNgRhdQgQhehNg2Qg7gphFAAQgVAAgVAEgEBikg7lQhbAQg1BMQg0BMAPBbQAQBbBLA1QBNA1BagQQBbgRA1hLQA2hLgQhbQgQhbhMg2Qg7gohDAAQgUAAgVADg");
	this.shape_32.setTransform(-38.9588,1314.2528);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ACaGBQgvgggMg5QgKg5AggvQAfgvA5gLQA5gLAvAgQAwAhAKA4QAMA4ghAwQggAvg4ALQgPADgOAAQgoAAgjgYgAk6ivQgqgdgLg0QgKg1AdgrQAegsA0gKQA0gJArAdQAtAdAJA0QAKA1geArQgcArg1ALQgNACgNAAQglAAghgWg");
	this.shape_33.setTransform(640.9065,962.4081);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ABpHSQhPg0gRhdQgRhcAzhPQA2hOBcgSQBdgSBOA0QBPA2ARBcQASBdg1BOQg1BOhcASQgYAFgXAAQhCAAg6gogAD5CIQg5AMggAvQggAvALA5QALA4AvAgQAvAhA5gMQA5gKAggwQAggvgLg5QgLg4gwggQgjgYgpAAQgNAAgOACgAlqhhQhLgzgShbQgRhaAzhOQA0hMBagRQBbgSBMA0QBNA0ASBaQARBbg0BMQgzBNhbASQgXAEgWAAQhBAAg6gngAjfmTQg0AKgeArQgcAsAJA0QALA1ArAdQArAdA1gKQA0gKAdgsQAegrgKg0QgKg0gsgeQghgWgmAAQgMAAgNADg");
	this.shape_34.setTransform(636.5907,962.1717);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0E6D00").s().p("Ehg2A2+IqLkdItSl0IkPh2QDZBHDSA9QHlCNHJBYIAkAHQU9D/RTi9QXBj8QmwNQKQp/HyutIBGiGQI+v1LTqEIAcgZQGNlcG4jrQI+kyKJhyQOaiiQwDiQDKAqAygCQBXgLCchrIAXgNQDqiMEBiEIgSgUQgrhfgOhbIgEgeQg6oZPPlVQDKhPCjguQShlNrOVbQhXDYhsCaQljICo8ioIhXARQkKB8llENQlMDTkXAEQkEg3j9gTQwfhTudIQQk8C0ktD7Qh7Bmh4ByQhvBphtB0IgjAmQoAInnOMDQiqEbikE5IABADIgaAtQhOCYhYB7QkPGtkvFaQmgHdnaFEQvzKzz7AAQyhAA2FpVgEBsLguqQhdASg1BOQg1BPASBcQASBdBOA0QBOA1BdgSQBdgSA1hOQA1hOgShdQgShchPg2Qg6gnhCAAQgXAAgXAFgEBk2g3VQhbARg0BMQgzBOARBaQASBbBMAzQBNA0BbgRQBagSA0hNQA0hMgShbQgShahMg0Qg5gnhBAAQgWAAgXAFg");
	this.shape_35.setTransform(-36.755,1266.2593);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0E6D00").s().p("EhjdAwcIp5lEIxAotQDTBTDPBKQHbCqHDB0IAjAJQUrFQRdh6QXOihRjvLQK1pXIruMIBNiCQJ7vRL4pXIAegXQGhlDHGjQQJPkOKPhKQOihrQgEjQDHA2AjACQBKgGCXhvIAXgOQDoiPD+iJIgSgUQgthegQhaIgEgeQhEoYPKlmQDIhTCigxQSclhq3VnQhTDZhpCdQlbIIo+ifIhXATQkICBlvEZQlUDakWgHQkAhHj8giQwXiSu8HXQlHCgk7DoQiABeh/BrQh3BjhzBsIglAkQogIHn9LlQi7ERi2EuIABADIgdAsQhXCShfB2QkpGblEFIQm8HCntEnQunIwxXAAQ0RAA4Br6gEBuMgqhQhcAUg0BPQgzBPAUBdQATBcBPAzQBQA0BcgUQBcgTAzhPQA0hPgThdQgUhdhPgzQg5glhBAAQgYAAgaAFgEBmugzEQhbAUgyBNQgyBOATBaQATBaBNAyQBOAzBagTQBbgTAyhOQAzhNgUhaQgThbhNgzQg4gkhAAAQgXAAgZAFg");
	this.shape_36.setTransform(-32.0443,1218.0301);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AChF+QgwgfgMg4QgMg4AfgxQAggwA4gLQA4gMAwAfQAwAfAMA4QAMA5gfAwQggAwg4AMQgPADgPAAQgnAAgjgXgAk8ipQgsgdgLg0QgLgzAcgtQAegsAzgLQA0gLAsAdQAtAcAKA0QAMA1geArQgcAtg0ALQgOADgNAAQglAAgggVg");
	this.shape_37.setTransform(658.5143,940.9774);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ABwHQQhOgzgUhcQgShdAyhPQA0hPBcgUQBdgTBOAzQBQAzATBdQAUBdg0BPQgzBPhdATQgZAGgYAAQhBAAg6gmgAD7CEQg4AMggAwQgfAwAMA4QAMA4AwAgQAvAfA5gMQA4gMAggwQAfgvgMg5QgMg4gwggQgigWgnAAQgPAAgQADgAlrhbQhNgygUhaQgShaAxhOQAzhNBbgUQBagSBNAxQBOAzATBbQATBagzBNQgyBOhaATQgZAFgYAAQg/AAg4glgAjmmPQgzALgeAsQgcAsALA0QALA0AsAcQAsAdA0gLQA0gLAcgsQAegsgMg0QgKg0gtgdQgggUgjAAQgOAAgPADg");
	this.shape_38.setTransform(654.2143,940.8161);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0E6D00").s().p("EhlwAppIpklqIwdpuQDPBgDJBXQHQDGG7CPIAjALQUVGgRhg1QXWhHSbuGQLZorJgtpIBVh9QK1uoMbooIAfgVQG0kpHSi0QJejrKSgiQOogyQMFjQDEBCASAFQA+gDCShyIAWgOQDliUD8iNIgSgTQgvhegRhaIgFgeQhNoWPDl3QDHhWCig0QSVl2qfVzQhPDbhmCeQlSINpBiUIhXAUQiDBDinB7QikBzixB5QiuBxijBFQigA8h/giQj8hXj5gxQwNjRvWGcQlQCMlJDVQiGBViFBjQh7Bch6BlIgnAhQo/HlopLGQjLEEjIEjIAAADIgfAqQhgCMhlBxQlCGHlXE0QnXGnn+EIQtVG7vDAAQ18AA5nutgEBv2gmVQhcAVgyBQQgyBQAVBcQAVBcBQAyQBQAyBcgVQBcgVAyhQQAzhPgWhdQgVhchQgyQg4gjg+AAQgbAAgbAGgEBoOguwQhaAVgxBOQgwBPAUBaQAUBaBOAxQBPAxBagVQBagVAxhOQAxhOgUhaQgWhahOgxQg3gig9AAQgaAAgaAFg");
	this.shape_39.setTransform(-24.8566,1169.5567);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ACoF7QgxgegNg4QgMg4AegxQAfgwA3gNQA5gOAwAfQAxAeAMA5QANA4geAwQgeAwg5AOQgQAEgQAAQgmAAgigWgAk/ikQgsgcgMg0QgMgzAcgtQAcgsA0gMQA0gMAsAcQAtAcALAzQAMA0gcAsQgbAtg0AMQgQAEgOAAQgjAAgggUg");
	this.shape_40.setTransform(676.1393,919.562);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AB4HOQhPgygVhcQgVhcAxhQQAzhQBcgVQBcgVBQAyQBPAyAWBcQAWBdgzBPQgyBQhcAVQgbAHgbAAQg+AAg5gkgAD9CAQg4ANgfAwQgeAxANA4QANA4AwAeQAxAfA4gNQA4gOAegwQAfgwgNg4QgNg5gxgeQghgVgmAAQgQAAgRAEgAlthUQhOgxgVhaQgUhaAwhPQAyhOBagVQBagUBOAxQBOAxAVBaQAVBagyBOQgwBOhaAVQgbAGgZAAQg9AAg4gigAjtmLQgzAMgdAsQgcAtAMAzQANA0AsAcQAtAcAzgMQA0gMAcgtQAcgsgMg0QgMgzgtgcQgegUgjAAQgPAAgQAEg");
	this.shape_41.setTransform(671.8624,919.4686);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("ACuF4QgwgdgPg4QgNg4AdgxQAegxA3gOQA5gOAwAeQAxAeAOA3QAOA5geAwQgdAxg4AOQgSAEgSAAQgkAAghgUgAlCieQgsgbgNg0QgNgzAbguQAcgsAzgNQA0gNAsAbQAuAcAMAzQANA0gcAsQgaAtg0ANQgQAEgQAAQgiAAgfgSg");
	this.shape_42.setTransform(693.7866,898.1359);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("ACBHMQhRgxgXhbQgWhcAwhRQAxhQBcgXQBcgXBQAwQBRAxAXBcQAXBcgxBQQgxBRhbAXQgdAHgcAAQg9AAg3ghgAD/B7Qg3AOgeAxQgdAxANA4QAPA4AwAdQAxAeA4gOQA4gOAdgxQAegwgOg5QgOg3gxgeQghgUgkAAQgSAAgSAEgAluhOQhPgvgWhaQgWhZAvhQQAwhPBagWQBZgXBPAwQBPAwAXBZQAWBagwBPQgwBPhZAXQgcAHgbAAQg8AAg2ghgAjzmHQgzANgcAsQgbAuANAzQANA0AsAbQAuAbAzgNQA0gNAagtQAcgsgNg0QgMgzgugcQgegSgiAAQgQAAgQAEg");
	this.shape_43.setTransform(689.4916,898.1174);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0E6D00").s().p("EhnwAipIpNmOIsBoIIj0ilQDJBtDDBiQHDDiGyCqIAiANQT5HtRiAQQXXATTQs8QL5n+KUtCIBdh2QLst/M8n2IAggTQHFkOHciXQJsjGKSAGQOpAHP1GhQC/BOACAIQAxAACNh2IAWgPQDjiYD5iRIgTgTQgwhdgThZIgFgeQhWoWO8mHQDGhZCgg3QSPmKqGV/QhNDchjCfQlIIUpEiKIhWAVQiCBFiqCAQinB3i1B9QixB0imBEQiiA8h8gpQj2hlj2hBQv+kQvtFgQlYB4lVDAQiLBOiLBaQiBBUiABeIgpAeQpbHBpTKjQjaD3jbEXIABADIgiAoQhoCGhrBqQlaF0lpEeQnvGJoNDpQr8FTs6AAQ3mAA64xrgEBxFgiHQhbAXgxBQQgxBRAXBcQAWBbBRAxQBSAxBbgXQBcgXAwhRQAxhQgWhcQgXhchRgxQg3ghg8AAQgcAAgeAIgEBpUgqZQhaAWgvBPQgvBQAVBZQAXBaBOAvQBQAwBagWQBZgXAwhPQAwhPgXhaQgWhZhPgwQg2ggg6AAQgcAAgdAHg");
	this.shape_44.setTransform(-15.0628,1120.926);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AC1F1QgygdgPg3QgPg4AdgyQAdgxA3gPQA5gPAxAdQAxAdAPA3QAPA4gdAxQgdAyg3APQgTAFgSAAQgjAAghgTgAlFiZQgtgagOgzQgNg0AagtQAbguAzgOQA0gNAsAaQAuAbAOAzQAOA0gbAsQgaAug0AOQgRAFgRAAQggAAgfgSg");
	this.shape_45.setTransform(711.4029,876.7029);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ACJHKQhSgvgYhcQgYhbAvhSQAvhRBcgZQBbgYBRAvQBSAvAZBcQAYBbgwBSQgvBShbAYQgfAIgdAAQg7AAg2gfgAEBB3Qg3AOgdAyQgdAxAPA4QAPA4AyAcQAxAdA4gPQA3gPAdgxQAdgygPg3QgPg3gxgeQgggSgkAAQgSAAgUAFgAlvhIQhQgugYhZQgYhZAuhRQAvhPBZgYQBagXBPAtQBQAvAYBZQAYBZgvBQQgtBQhaAYQgeAIgdAAQg5AAg1gfgAj6mDQgzAOgbAtQgaAuANAzQAOA0AtAZQAuAcAzgPQA0gNAaguQAbgtgOg0QgOgzgugaQgdgSghAAQgRAAgRAFg");
	this.shape_46.setTransform(707.1164,876.7695);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0E6D00").s().p("EhpcAbeI39ybQDBB5C+BuQG0D9GnDEIAhAPQTZI6RfBTQXTBuUArwQMXnOLFsZIBkhxQMhtONZnEIAhgRQHVjyHkh6QJ3ifKQAtQOnBBPaHdQC6BagOAJQAkACCHh6IAWgPQDgibD3iWIgTgTQgyhcgUhZQgFgPgBgPQhgoTO2mZQDEhdCfg5QSHmeptWKQhIDdhhCiQk/IYpGiAIhWAXQiABIiuCEQipB7i5CAQi0B3ipBFQijA7h6gwQjvh0jxhQQvslNwBEiQleBjlgCrQiQBFiQBSQiGBMiFBVIgrAdQp2Gbp6J9QjpDqjrEJIAAADIgkAmQhuB/hzBkQlwFdl5EIQoGFrobDJQqcD5q6AAQ5QAA7100gEBx7gd5QhbAZgwBRQgvBSAYBbQAZBcBRAvQBTAvBagYQBcgYAvhSQAvhSgYhbQgYhchSgvQg2gfg5AAQgfAAgfAIgEBqBgmCQhaAYguBPQguBRAYBZQAXBZBQAuQBRAvBZgYQBZgYAuhQQAvhQgYhZQgZhZhPgvQg1geg5AAQgdAAgeAIg");
	this.shape_47.setTransform(-2.731,1072.1979);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AC7FxQgygbgQg4QgPg3AbgyQAcgyA3gQQA4gPAyAbQAyAcAQA3QAQA4gcAyQgdAyg3APQgUAHgUAAQghAAgggTgAlHiUQgugYgPg0QgOgzAZguQAbguAygPQAzgOAuAZQAuAaAPAzQAOAzgaAuQgYAug0APQgSAFgSAAQggAAgdgRg");
	this.shape_48.setTransform(729.0646,855.3012);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ACRHHQhTgtgahbQgZhcAthSQAuhSBbgaQBbgaBSAuQBTAuAaBbQAaBbguBSQguBShbAaQghAKgfAAQg4AAg1gegAEDByQg3AQgcAyQgbAyAPA3QAQA4AyAbQAyAdA3gRQA3gPAdgyQAcgygQg4QgQg3gygcQgggSgiAAQgUAAgUAGgAlxhBQhQgtgZhZQgahZAthRQAthQBZgaQBZgYBQAsQBRAtAaBZQAZBYgtBRQgtBRhZAZQggAJgfAAQg3AAg0gcgAkBl/QgyAPgbAuQgZAuAOAzQAPA0AuAYQAuAaAzgOQA0gPAYguQAagugOgzQgPgzgugaQgdgQggAAQgRAAgTAFg");
	this.shape_49.setTransform(724.7665,855.4429);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0E6D00").s().p("EhqzAUIIoYnTIq8phIjfjCQC6CEC2B6QGlEXGaDdIAgARQS0KERYCXQXKDJUrqhQMxmeL1rrIBqhrQNTsdNymOIAjgPQHijWHrhcQJ/h5KNBWQOhB4O7IZQC0BkgeALQAXADCCh9IAVgQQDeifD0iZIgUgTQgzhcgWhYIgHgeQhooSOumoQDChhCfg7QSAmzpVWUQhEDfheCjQk2IfpIh2IhVAYQh/BJixCJQirB/i+CDQi4B6iqBEQikA6h3g2QjoiCjsheQvVmKwRDjQlkBNlqCWQiTA8iVBJQiKBDiKBOIgsAaQqOF0qgJWQj4Dbj5D6IgBADIglAjQh4B5h4BcQmDFHmKDxQobFKolCoQo3CtpBAAQ68AA8d4HgEByXgZrQhbAaguBTQguBSAaBbQAaBbBSAuQBTAuBbgaQBbgaAthTQAvhSgbhbQgahbhSguQg1gdg4AAQggAAggAJgEBqTghrQhZAagtBQQgsBRAZBZQAaBYBQAtQBRAtBZgZQBYgaAthQQAthRgZhZQgahZhQgtQg0gcg3AAQgfAAggAJg");
	this.shape_50.setTransform(12.2248,1023.4698);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0E6D00").s().p("Ehr1AMqIn7nzIqWqJIjSjOQCxCOCvCFQGTEvGLD1IAfAUQSLLLRNDbQW7EiVRpPQNJlsMhq8IBvhkQODroOJlYIAjgNQHvi3Hvg/QKFhSKHB9QOXCxOZJSQCuBvguALQAJAFB9iCIAVgQQDbiiDxifIgTgSQg1hagYhZIgHgdQhyoQOnm5QDAhkCeg+QR4nHo7WfQhBDfhbClQksIkpKhsIhVAaQh+BMi0CMQiuCCjBCHQi7B8isBCQilA6h0g9QjfiPjmhsQu8nFwcCkQloA3lzB/QiWAziZBAQiPA8iOBEIguAXQqjFNrDIrQkEDMkHDqIgBADIgoAhQh/Byh9BUQmXEvmYDYQouEpouCGQnLBunMAAQ8uAA8w7igEByYgVdQhbAcgsBTQgsBTAbBaQAbBaBTAtQBUAtBagcQBagbAthUQAthSgchbQgbhbhUgsQgzgbg2AAQgiAAgiAKgEBqMgdUQhZAagsBSQgrBSAbBYQAbBYBRAsQBSArBZgbQBYgaArhSQAshSgbhYQgbhZhSgrQgxgbg1AAQghAAgiALg");
	this.shape_51.setTransform(29.8194,974.8228);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("ADCFuQgygbgRg3QgRg2AbgzQAbgyA3gRQA3gRAyAbQAzAbARA3QAQA3gbAyQgbAzg3ARQgVAGgUAAQghAAgfgRgAlJiOQgugYgQgzQgPgyAYgvQAZgvAzgPQAzgPAuAYQAvAZAPAzQAPAzgZAuQgYAugzAQQgUAGgTAAQgeAAgcgQg");
	this.shape_52.setTransform(746.6876,833.8781);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("ACYHFQhTgtgbhaQgbhaAshUQAshTBbgcQBbgbBSAsQBUAtAbBaQAcBbgtBTQgtBThaAcQgiAKgiAAQg2AAg0gbgAEFBuQg3ARgbAyQgbAzARA2QARA3AyAbQAzAbA3gQQA3gRAbgzQAbgygRg3QgQg3gzgbQgfgRghAAQgUAAgWAHgAlyg7QhRgrgbhZQgbhXArhTQAshRBZgbQBYgbBRArQBSAsAbBZQAbBYgsBRQgrBShYAbQgiAKghAAQg1AAgzgbgAkHl6QgzAPgZAvQgZAvAQAyQAQAzAtAYQAvAaAzgQQAzgQAYguQAZgugPgzQgPgzgwgZQgcgPgeAAQgTAAgTAGg");
	this.shape_53.setTransform(742.4163,834.0913);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("ADOFnQgzgZgTg2QgSg3AZgzQAZg0A2gSQA3gTAzAZQAzAaATA2QATA3gZAzQgaA0g2ASQgXAIgXAAQgeAAgegPgAlOiDQgvgWgRgzQgRgyAWgvQAYgvAygSQAzgRAuAXQAwAYARAyQARAygYAvQgWAwgzARQgVAHgUAAQgdAAgbgOg");
	this.shape_54.setTransform(775.1648,814.5194);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("ACoG/QhUgpgfhaQgehZAphVQAqhUBZgfQBagdBUAoQBVApAfBaQAfBagrBUQgpBVhZAeQgmANglAAQgzAAgxgYgAEJBlQg2ASgZA0QgZAzASA3QATA2AzAZQAzAaA3gTQA2gSAag0QAZgzgTg3QgTg2gzgaQgdgOgfAAQgXAAgXAIgAlzguQhTgpgehXQgehXAphUQAohSBYgeQBXgeBTAoQBTAqAeBXQAeBXgpBTQgoBThYAeQglAMgkAAQgxAAgwgXgAkUlxQgyASgYAvQgWAvARAyQARAzAvAWQAvAYAygRQAzgRAWgwQAYgvgRgyQgRgygwgYQgbgNgcAAQgVAAgVAHg");
	this.shape_55.setTransform(770.8904,814.8449);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0E6D00").s().p("EhCJAngQyvl2ymxaIyexvIjUjMQCyCNCwCCQGXErGODxIAfATQSSK/RQDOQLfCJJ8iMQKFiMJamkQF5kDFPmPQFXl7FhmTIBlhuQGZmbIEkQQHwkSHjiTIAjgLQH4ieIFgSQKKgeJ6CxQOHD6NVLUQBVBGASAjQgdAmAIgDQAlgEgQgfQAZghA1hAIAVgRQDUiqDsimIgUgSQg5hYgZhYIgJgdQiEoMOYnYQC9hrCbhEQRonsoKWwQg5DihVCoQkaIupNhYIhUAdQh7BQi6CTQiyCJjICLQjCCAiuBCQinA2hshHQjMiojYiHQuCowwWBIQlrAbl8BhQiaAnh3AqQiQA4iQBCIguAVQlWCflUCqQlRC5lFElQh3ByhEB2IirEFIAAADIgfApQhkCKhoBuQlMGAlkExQnmGUoVDvQpQEPp+AAQoIAAomizgEButgXOQhZAfgqBUQgpBVAeBZQAfBaBUApQBWAqBZgfQBZgeAphVQArhUgfhaQgfhahVgpQgwgYgzAAQglAAgmANgEBmQgezQhYAegoBSQgpBUAeBXQAeBXBTApQBTApBXgeQBYgeAohTQAphTgehXQgehXhTgqQgvgXgxAAQglAAglANg");
	this.shape_56.setTransform(81.8571,966.2013);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("ADbFgQg0gXgVg3QgUg1AXg1QAYgzA2gVQA2gUA0AXQA0AXAUA2QAVA2gYA0QgXA0g2AVQgZAJgZAAQgcAAgcgMgAlSh3QgvgVgTgyQgUgyAWgwQAWgwAxgTQAzgSAvAVQAwAWATAxQATAygWAwQgVAwgyATQgXAJgXAAQgaAAgagMg");
	this.shape_57.setTransform(803.5888,795.1693);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AC3G5QhWgmghhZQghhYAmhWQAmhWBZgiQBYggBWAlQBWAnAiBYQAiBYgnBWQgmBXhZAhQgpAQgoAAQgvAAgvgVgAENBbQg2AVgYA0QgXA1AUA1QAVA2A0AXQA0AYA2gVQA2gUAXg1QAYg0gVg2QgUg1g0gYQgcgMgdAAQgYAAgZAJgAl1ghQhUgmghhXQgghVAlhVQAmhUBXghQBWghBUAlQBVAnAgBWQAhBWgmBUQgmBUhWAiQgoAPgoAAQgtAAgugUgAkhlnQgxATgWAwQgWAwAUAxQATAyAvAVQAwAWAygTQAygTAVgwQAWgwgTgxQgTgygwgWQgZgLgaAAQgXAAgYAJg");
	this.shape_58.setTransform(799.3944,795.6391);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0E6D00").s().p("Eg7HAptQzblGzSxgIoFnnIt7tFQC0CKCxCBQGaEnGRDtIAfASQSaKyRSDCQLgCBIqi8QI8jAH1oPQFBlHDqn9QD/naEmm8IBZh1QFnm3JGkaQIdkbH/h9IAkgJQH+iDIXAbQKLAWJqDjQNvFCMBNPQAiAkAQAbQgfAkgFAWQABAjAVgCQAdgDgBgmQAEgUgSgeQATgXAegcIAUgRQDPixDmivIgVgRQg7hWgdhXIgKgdQiWoHOHn3QC5hxCZhJQRXoUnYXCQgyDkhPCqQkGI3pQhDIhTAgQh4BUi/CZQi3COjPCPQjHCDiwBAQioA1hihSQi4jAjHieQs6qUwJgRQlsgDmCBDQhOANgrAFQgzAJhFAYQiRA0iRA/IgvAUQlZCXlXB1QlPCVkkEsQhpB5gEBxQgZB5gyCbIABAEIgWAuQhDCdhOCCQjxG9keF/QmJHvnnFTQpwG/sBAAQmdAAnIiCgEBpvgYVQhZAigmBWQgmBWAhBYQAhBZBWAmQBXAnBYgiQBZghAmhXQAnhWgihYQgihYhWgnQgugUgvAAQgoAAgpAPgEBhCgfnQhXAhgmBUQglBVAgBVQAhBXBUAmQBVAlBWggQBWgiAmhUQAmhUghhWQgghWhVgnQgtgTgtAAQgoAAgoAPg");
	this.shape_59.setTransform(142.2868,953.4049);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0E6D00").s().p("EgzDAq/Qp/iHqYlqQqLlipdobI2P0dQC1CJCzB+QGdEjGTDoIAgASQShKmRUC2QLiB5HRjdQHsjkF9plQD8l+BypSQCVoiDlnWIBKh4QCXjjD+i/QD1i+EriVQEjiUEohnQEghlD1gzIAkgIQIEhoIlBLQKHBLJWEUQLzFbL7PrIALAPQhEBIACAmQAKAnAigBQAqAAALgpQATgkgyhHIAGgFIAUgSQDIi5Dgi2IgVgQQg+hUghhWIgKgcQinoDN0oVQC2h3CWhPQREo6mmXSQgpDlhJCuQjzI/pSgvIhSAjQh1BYjECeQi7CSjVCSQn3FIiFiuQihjUizi0QrprvvzhnQlrggmGAkQhPAHgYgFQgmABhAAVQiSAxiTA7IgwAUQlcCOliBBQlTBukBEsQhYB+A5BhQAcBugEChIABACIgMAzQgfCmgwCQQiLHojHG6QkcI1mnGuQmVGuo5B3QkGA7kaAAQk/AAlahMgEBjqgYcQhYAlgkBXQgjBXAlBYQAkBWBXAkQBYAkBXglQBYglAjhXQAkhXglhXQgkhXhYgkQgrgSgrAAQgsAAgsATgEBatgfbQhWAkgjBVQgiBWAjBVQAkBVBVAjQBXAjBUgkQBWgkAihVQAjhVgjhWQglhVhVgjQgqgRgqAAQgrAAgrASg");
	this.shape_60.setTransform(209.7943,934.2455);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("ADnFYQg1gWgWg1QgXg1AWg1QAWg1A1gWQA1gXA1AWQA1AWAWA1QAWA1gVA1QgWA1g1AWQgbAMgbAAQgaAAgagLgAlWhsQgwgTgVgxQgVgyAUgwQAVgwAwgVQAygVAwAUQAxAUAUAxQAVAxgUAwQgUAxgxAVQgZALgYAAQgZAAgYgLg");
	this.shape_61.setTransform(832.0625,775.806);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ADGGyQhXgkgkhWQglhYAjhXQAkhXBYglQBXgjBXAiQBYAkAkBXQAlBXgkBXQgjBXhYAlQgsATgsAAQgsAAgrgSgAEQBSQg1AWgWA1QgWA1AXA1QAWA1A1AWQA1AWA1gXQA1gWAWg1QAVg1gWg1QgWg1g1gWQgagLgbAAQgaAAgbAMgAl2gVQhVgjgkhVQgjhVAihWQAjhVBWgkQBVgkBVAjQBVAjAlBVQAjBWgjBVQgiBVhWAkQgrATgrAAQgqAAgrgSgAktldQgwAVgVAwQgUAwAVAyQAVAxAwATQAxAVAxgVQAxgVAUgxQAUgwgVgxQgUgxgxgUQgYgKgYAAQgZAAgZALg");
	this.shape_62.setTransform(827.8936,776.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("ADzFQQg2gUgYg0QgYg1AUg1QATg2A1gYQA0gYA1AUQA2ATAYA1QAYA0gTA2QgUA1g0AYQgdAOgdAAQgYAAgYgJgAlZhgQgxgSgXgwQgVgwARgyQATgxAwgWQAxgXAwATQAyASAWAwQAWAwgSAxQgSAygwAWQgbANgbAAQgWAAgWgJg");
	this.shape_63.setTransform(860.5694,756.4697);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("ADWGrQhZghgnhVQgohWAghZQAhhYBWgoQBWgmBYAgQBZAgAoBWQAoBVgiBZQggBYhWAoQgvAWgwAAQgnAAgogPgAETBIQg1AYgTA2QgUA2AYA0QAYA0A2AUQA1AUA1gYQA0gYAUg2QATg1gYg1QgYg0g2gUQgYgJgYAAQgdAAgcANgAl2gIQhXgggmhUQgnhUAghXQAghWBUgnQBUgnBWAgQBXAhAnBTQAnBUggBXQggBWhUAnQguAUguAAQgnAAgogNgAk4lTQgwAWgTAyQgRAxAVAwQAXAxAxASQAxASAxgWQAwgXASgxQASgxgWgwQgWgxgygSQgWgIgWAAQgaAAgbAMg");
	this.shape_64.setTransform(856.3847,757.2248);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0E6D00").s().p("EgqOArAQqNhpq0lZQqjlSpnoVIoRncIuNsxQC3CHC1B8QGfEeGWDkIAhASQSoKYRWCqQLjBxF0jrQGXj3D3qiQCumngTqKQAhpSCdneIA7h4QB6jkEDjJQD4jHFBigQE1idE9hqQEyhnD5goIAlgGQEDgmEgATQEWAPD+A0QJ9B+I/FDQK0GEKNRBIgWAWIgTASQhHBQALArQAUArAtACQA3ADAYgpQAigpg1hZIgYgoQC5i0DNizIgXgQQhAhRgkhVIgLgcQi5n8Nio0QCxh9CUhUQQvpelyXeQghDnhDCwQjgJHpSgbIhRAmIk7D+Qi/CWjaCTQoDFMhxi+QiHjlidjHQlHmgmIkBQmQj/oFhZQlmg9mIAEQhQABgFgMQgXgGg9ATQiTAuiUA3IgwASQlfCHl2APQlcBIjdEiQhIB/BzBFQBNBZApCbIACADIgBA0QAGCqgQCXQgeH5hlHjQiiJilUH+Qk7HzomCnQlEBql2AAQjyAAkGgsgEBcsgXrQhWAoghBYQggBZAoBWQAnBVBZAhQBZAhBVgoQBWgoAghYQAihZgohVQgohWhZghQgogOgnAAQgwAAgvAVgEBTggeWQhUAnggBWQggBXAnBUQAmBUBXAgQBXAgBUgnQBUgnAghWQAghXgnhUQgnhThXghQgngOgmAAQgvAAguAVg");
	this.shape_65.setTransform(282.889,909.4091);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0E6D00").s().p("Egg+ArbQqVhIrNlFQq4k9pyoOIoWnWIq4plIjejDQC5CGC2B6QGiEZGZDgIAgARQSwKLRXCeQLlBoEXjlQFBj6BorEQAsjggjkpQgakfg1k7QgskygTkfQgJkWBFjVIAsh1QBcjeEGjSQD5jOFTisQFGioFPhwQFChsD9gdIAlgEQEEgZElApQEaAkD7BJQJxCxIjFwQGFEFEnHFQEIGCDLHEIhNBQIgTAUQhDBTATAvQAdAwA5AGQBEAHAkgpQAvgogqheIgzh0QCZieCoicIgWgPQhEhQgmhTIgMgcQjKn1NOpSQCsiDCRhYQQaqEk+XsQgaDng9CyQjLJPpTgHIhQApQmcFklBDMQoNFPhbjNQhsjyiFjYQkUnDlhkjQltkjn5iDQlhhamHgbQhPgGAPgRQgJgKg4AQQiUAqiWA0IgwARQixA/jGAIQjCAQi6AKQi0ASiTA9QiOBFhQChQg4B8ClAcQB6A6BVCOIADACIAKAzQAqClAQCWQBPH0AHH2QgjJ2jyI+QjVImoKDSQluCfnQAAQiqAAi3gVgEBVHgUPQhUArgeBZQgdBaAqBUQArBVBZAdQBaAdBUgqQBUgqAehaQAehZgrhVQgqhVhagdQglgMgkAAQgzAAgyAZgEBLtgamQhTAqgdBXQgdBYAqBTQAqBSBXAdQBYAdBTgpQBSgqAdhYQAdhXgqhTQgphShYgeQgkgLgiAAQgzAAgxAYg");
	this.shape_66.setTransform(359.9211,867.5673);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AD+FHQg2gSgagzQgag0ASg2QASg2AzgaQA0gaA2ASQA2ASAaAzQAbA0gTA2QgSA3gzAZQgeAPggAAQgWAAgWgHgAlchUQgygQgYgwQgYgvARgyQAQgyAwgYQAvgYAyARQAyAQAYAwQAYAvgRAyQgQAygwAYQgbAOgdAAQgUAAgVgHg");
	this.shape_67.setTransform(889.0692,737.145);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("ADkGjQhZgdgrhVQgqhUAdhaQAehZBUgqQBUgqBaAdQBaAdAqBUQArBVgeBZQgeBahUArQgxAZg0AAQgkAAglgNgAEVA/Qg0AagSA2QgRA2AZA0QAaAzA3ASQA2ASAzgaQA0gZASg3QASg2gag0Qgagzg2gSQgWgIgWAAQggAAgeAQgAl2AEQhXgcgqhTQgqhSAdhYQAdhYBTgpQBSgpBYAcQBYAdApBTQAqBSgdBYQgdBYhSApQgxAYgyAAQgkAAgkgMgAlElIQgvAYgRAyQgQAyAYAvQAYAwAxAQQAzARAvgYQAwgYAPgyQARgygYgvQgXgwgzgQQgUgHgUAAQgdAAgcAOg");
	this.shape_68.setTransform(884.9242,738.0155);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0E6D00").s().p("EgXkAqsQqYgmrkksQrLklp8oGIzZwuIjgjAQC7CDC3B5QGlEVGbDaIAhASQS2J9RaCSQLlBgC+jPQDsjsgrrJQABjlhgkoQhVkhh0k2QhpkvhGkWQg7kPApjIIAdhuQBAjREIjaQD4jUFii6QFTi0Feh4QFQhyD+gSIAlgCQEEgLEpBAQEcA5D3BdQJiDjIDGaQFvEjDzHtQDIF5CNGoQhIBNhFBOIgSAUQhABWAbAzQAmA2BEALQBPAMAxgoQA7gmgfhhQgfhtgjhpQB1h/B/h+IgXgOQhHhNgohSIgNgbQjcnuM5puQCoiJCOheQQDqmkKX1QgSDog2CzQi3JWpTAOIhOArQhsBkjQClQjFCbjiCTQjXCHiuA2QiiAqgzhwQhOj9hsjnQjenfk4lBQlFlCnsiqQlYh2mEg7QhOgMAjgUQAGgOgzAPQiVAmiXAxIgwAQQizA7jSgGQjMADjFgHQi/ACiUAsQiNA2g7CXQgoB2DNgVQCfATB9B2IADACIAVAvQBMCZAxCPQC5HYB1HvQBfJviFJrQhoJGnmD3QmIDXouAAQhiAAhngHgEBNNgPsQhTAtgbBbQgaBbAuBSQAtBUBaAaQBbAbBTguQBTgtAahbQAbhagthUQguhShbgbQghgKghAAQg3AAg0AdgEBDlgVuQhRAtgaBYQgZBZAsBRQAsBRBYAaQBaAaBRgsQBQgsAahaQAbhYgthRQgthRhYgaQghgKgfAAQg3AAgzAcg");
	this.shape_69.setTransform(439.0851,818.5952);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AEKE+Qg4gQgbgzQgcgzAQg2QARg3AygcQAzgbA2AQQA3AQAcAyQAcAzgRA3QgPA3gzAbQggASghAAQgUAAgUgGgAlfhIQgxgPgagvQgaguAPgzQAPgyAugaQAvgZAyAPQAzAOAZAvQAaAvgPAyQgOAzgvAZQgeAQgfAAQgSAAgTgFg");
	this.shape_70.setTransform(917.5681,717.8281);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("ADyGbQhagagthTQguhTAahbQAbhaBTgtQBTgtBaAbQBbAZAuBTQAtBTgbBaQgaBbhTAtQg0Adg3AAQghAAgigKgAEXA1QgyAcgRA3QgQA2AcAzQAbAzA4AQQA3AQAygcQAzgbAPg3QARg3gcgzQgcgyg3gQQgUgGgTAAQgiAAggARgAl2AQQhYgYgshRQgshRAZhZQAahZBRgsQBRgsBZAZQBYAbAtBQQAtBRgbBZQgaBZhQAsQgzAbg2AAQggAAgigKgAlPk9QguAagPAyQgPAzAaAuQAaAvAxAPQAzAPAvgaQAvgZAOgzQAPgygagvQgZgvgzgOQgTgGgSAAQgeAAgeAQg");
	this.shape_71.setTransform(913.4632,718.8315);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AEQE5Qg4gPgcgyQgdgyAPg3QAPg4AygcQAzgdA3APQA3APAcAyQAdAzgPA2QgPA4gyAcQghATgjAAQgSAAgTgFgAlghCQgygNgagvQgbgtAOg0QAOgyAugbQAugaAyAOQA0AOAaAuQAbAugPAzQgNAyguAbQgfARggAAQgRAAgSgFg");
	this.shape_72.setTransform(954.5696,698.1279);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AD6GXQhbgZgvhSQguhRAYhcQAZhbBSguQBSgvBbAZQBbAZAvBRQAvBSgZBbQgZBbhSAvQg1Aeg5AAQgfAAgggIgAEYAwQgyAdgPA3QgPA3AcAyQAdAyA3APQA3APAygcQAygdAPg3QAPg3gcgyQgdgyg3gPQgTgGgSAAQgjAAghATgAl1AYQhZgYguhQQgthQAXhZQAYhZBRguQBRguBYAYQBZAYAuBRQAuBQgYBZQgYBZhQAtQg0Aeg5AAQgeAAgfgIgAlVk2QgtAbgPAyQgOAzAbAuQAbAuAyAOQAzAOAugbQAugaAOgzQAOgygbgvQgZgtg0gPQgRgFgRAAQggAAgfASg");
	this.shape_73.setTransform(950.5119,699.1977);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0E6D00").s().p("EggKAssQqXglrakaQrGkUqSnjI0UvmIjqizQDCB5C9BtQG1D9GmDEIAiAPQTYI5RgBSQLpA3Epj/QFOkUBsrDQBanBh3qtQg5puBrncIAvh2QBjjfEDjMQD3jJFMilQE/iiFJhuQE9hrD8glIAlgFQEEgkEcAVQEVARD9A0QJ9CBI9FFQGYDnE0HOQEPF8DPG7IhZBmIgRAUQg/BXAYAvQAhAwA9AEQBGAGAmgrQAwgqgshdQgehFgfhDQCKicCXidIgYgOQhIhMgqhRIgNgbQjlnqMtp9QCmiMCLhgQP3q6jtX6QgODogzC1QisJZpTAZIhNAsQhqBmjGCuQi8CijZCdQoAFlhfjMQhvjwiIjWQkbm/lbkQQlpkQn9hbQlng/mIADQhQAAgKgKQgbgFg+ASQiUAqiWA1IgwARQliB/mKgVQlnArjDEVQg7B9CbAlQBxBCBLCSIACACIAIAzQAiCnAJCXQA4H3gSHmQgyJ2jlIuQjWInoGDnQmlDKopAAQhlAAhqgHgEBXNgYFQhTAugZBcQgYBbAvBSQAvBSBaAYQBcAaBSgwQBSguAYhcQAZhaguhTQgvhShcgZQgfgIgeAAQg5AAg2AfgEBNegd7QhRAugYBYQgYBaAuBQQAtBQBZAYQBaAZBQguQBQgvAYhYQAZhZguhRQgvhQhYgYQgfgIgdAAQg5AAg0Aeg");
	this.shape_74.setTransform(412.1767,852.3024);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AEVEzQg3gOgegxQgdgyAOg3QAOg4AxgdQAygdA3ANQA4APAdAxQAeAxgOA4QgOA3gyAeQghAUgkAAQgRAAgTgFgAlhg8QgygMgcguQgbguAMgzQAOgzAtgbQAugbAyANQA0ANAbAtQAbAugNAzQgMAzguAbQgfATghAAQgQAAgRgFg");
	this.shape_75.setTransform(991.605,678.4526);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AEBGSQhbgXgwhSQgwhRAWhbQAYhcBRgvQBRgwBbAWQBcAYAwBQQAxBRgYBbQgWBchSAwQg2Aig8AAQgdAAgegIgAEZAqQgxAegPA3QgNA4AdAxQAdAyA4AOQA3AOAygeQAxgdAOg4QAOg3gdgyQgegxg3gOQgSgEgRAAQgkAAgiATgAl1AeQhZgXgvhOQgvhPAWhaQAWhaBQgvQBPgvBaAWQBZAXAwBQQAvBPgXBZQgWBahPAuQg2Ahg7AAQgcAAgdgIgAlakwQguAbgNAzQgNAzAcAtQAbAuAyANQA0ANAtgbQAugcAMgzQAOgygbguQgbgug0gNQgQgEgQAAQghAAgfATg");
	this.shape_76.setTransform(987.5688,679.6051);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0E6D00").s().p("EgoXAwjQqPgjrLkDQq9j+qlm+I1KubIj0inQDIBuDDBjQHCDkGxCsIAiANQT4HzRhATQLsANGVkeQGwkrEAqiQCvmnBAqKQBjpTDInfIBCh6QDymWK4lVQEpiREwhmQEmhlD1g5IAkgJQICh2INAdQKKAcJoDoQG3ClFyGmQFVFuEVG+IguA4IgQAUQg+BXATAsQAdArA0gBQA9AAAbgtQAkgsg3hWIgthKQCai3Cqi3IgYgOQhJhLgshQIgOgbQjtnlMhqMQCiiQCLhiQPprMjRX9QgJDogwC3QigJbpTAlIhMAtQhoBoi8C1QiyCnjPCnQnpF6h3i7QiOjhijjEQlSmWl2jcQmFjYoEgMQlsgFmDA/QidAZhqAdQiTAuiUA5IgvASQlfCJlsAiQlYBXjuEnQhQB/BbBSQA5BjAWCfIABADIgFAzQgMCqgeCUQhQH0iLG5QjAJbk1HlQk8H0ocDRQm8C2ogAAQhmAAhqgGgEBgagbzQhRAwgXBbQgXBcAwBRQAwBRBcAYQBcAXBRgxQBRgwAXhcQAYhcgxhRQgxhRhbgXQgdgHgcAAQg8AAg4AhgEBWlgheQhQAvgXBaQgWBaAvBPQAwBPBZAXQBaAXBPgwQBPgvAXhaQAXhZgwhPQgvhQhagXQgcgHgcAAQg6AAg2Agg");
	this.shape_77.setTransform(390.2043,856.1498);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AEbEuQg3gNgfgxQgegwANg4QANg4AxgeQAxgfA3ANQA4ANAeAxQAfAxgNA4QgNA3gxAfQgiAVgmAAQgQAAgRgEgAlig1QgygLgdguQgbgtALgzQANgzAsgdQAtgbAzALQA0AMAcAtQAcAtgMA0QgMAzgtAcQggATgiAAQgPAAgQgDg");
	this.shape_78.setTransform(1028.6476,658.7852);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AEJGNQhcgVgyhQQgxhQAVhdQAVhcBRgxQBQgxBbAVQBdAWAyBPQAxBQgVBcQgVBbhQAzQg4Aig/AAQgaAAgcgGgAEaAmQgxAegNA4QgNA4AeAwQAfAxA3ANQA4AOAxgfQAxgfANg3QANg4gfgxQgegxg4gNQgQgEgQAAQgmAAgiAWgAl0AlQhagVgwhNQgxhOAUhbQAVhaBPgwQBOgxBaAVQBaAVAxBOQAxBOgVBbQgUBZhPAwQg3Aig8AAQgaAAgcgGgAlgkqQgsAdgNAzQgLAzAbAtQAdAuAyALQA0AMAtgcQAtgcAMgzQAMg0gcgtQgcgtg0gMQgPgDgOAAQgjAAggATg");
	this.shape_79.setTransform(1024.6086,659.9832);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0E6D00").s().p("EgvtAy8Q0Bg+2etCI17tOIj9iYQDOBiDIBYQHODKG6CTIAjALQURGrRhgsQLrgdIBkrQIQkxGJplQD9l9Dto3QD3oLEinHIBUh2QFVm8JPj4QIfkEH8iPIAjgMQH1ilHhg8QKGhJKFCFQHKBeGrF3QGbFRFcGzIgKAMIgRAVQg8BYAOAoQAXAoAqgFQA0gEAQgsQAZgthChPIgTgYQCljPC6jRIgYgNQhLhKgthPIgOgbQj3ngMVqcQCgiSCIhlQPdrei1YBQgFDogtC3QiUJfpSAvIhMAvIkWEkQipCsjECvQnPGNiOiqQiqjNi7isQmElnmJilQmZign+BFQlpAzl0B7QiXAxi6BGQiSAziSA8IgvAUQlbCSlbBgQlRCEkZEsQhjB7ARBsQgGB2giCeIABADIgTAxQg4ChhECHQjRHPjwFuQlEIelxGXQrdMHyPAAQh8AAiCgJgEBocgeHQhRAygVBcQgVBdAxBQQAyBQBcAVQBdAVBQgxQBQgzAVhbQAVhcgxhQQgyhQhdgWQgbgHgaAAQg9AAg5AjgEBefgjlQhPAwgVBaQgUBbAxBOQAwBOBaAVQBbAVBOgxQBPgxAUhZQAVhbgxhOQgxhOhagVQgagGgaAAQg9AAg3Aig");
	this.shape_80.setTransform(375.9006,850.8797);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0E6D00").s().p("Eg1zAz/QzWgw2brfI6uuIQDTBXDNBMQHaCxHBB5IAjAKQUnFhRehrQXPiNPuwXQFClGGAmxQF2mdFxmVIBkhvQGVmcIAjYQHrjuHQivIAigPQHjjSGmiLQJzitKSAfQHTAWHeE/QHSEhGdGTIANAMQg3BUAIAlQARAkAhgGQAqgIAFgqQAMgog+g9IADgFIAQgWQCljYC9jbIgYgMQhMhIgvhPIgPgaQj/ncMIqqQCeiVCGhoQPOrxiYYEQAADqgqC3QiKJhpQA6IhLAxQhkBrilC/QifCxi4C0Qm1GdiiiVQjDi1jQiSQmvkymUhuQmlhlnsCTQlcBrlcCzIjFBmQhxA6haAlQiQA2iRBBIgvAVQlXCblVCgQlSCxlCEkQh2Bxg7B2QhIB5hYCPIAAADIgfAqQhgCNhmBwQlBGHk8EOQm3HGmZFGQt4J3xwAAQhfAAhigEgEBu2ge9QhPAzgUBcQgTBdAzBPQAzBPBcAUQBeAUBOg0QBPgzAUhdQAUhcgzhPQg0hQhcgTQgZgGgZAAQhAAAg6AmgEBk0gkQQhOAygUBaQgSBbAyBNQAyBOBaATQBbATBNgyQBNgyAUhbQAThagyhNQgzhOhagTQgYgGgYAAQg/AAg4Alg");
	this.shape_81.setTransform(371.8568,836.3977);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AEhEpQg4gMgggwQgegxALg4QAMg3AwggQAxgfA4AMQA3AMAgAwQAfAwgMA4QgMA5gwAfQgiAWgnAAQgPAAgQgDgAljguQgzgLgdgtQgdgtALgzQAMgzAsgdQAtgdAyALQA1ALAcAtQAeAsgMAzQgLA0gsAdQghAVgjAAQgOAAgPgDg");
	this.shape_82.setTransform(1065.6643,639.0862);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AEQGIQhcgUgzhPQgzhPAThdQAUhcBPgyQBQg0BcAUQBcATA0BPQAzBPgUBcQgUBdhPAzQg4AmhAAAQgZAAgbgGgAEaAgQgwAggMA3QgLA4AeAxQAgAwA4AMQA4AMAwgfQAwgfAMg5QAMg4gfgwQgggwg3gMQgQgEgOAAQgnAAgkAXgAlzAsQhagTgyhNQgyhNAShbQAUhaBOgyQBNgyBaATQBaATAzBOQAyBNgTBaQgUBbhNAxQg4Akg/AAQgYAAgZgFgAllkjQgsAdgMAzQgLAzAdAtQAdAtAzALQA0ALAtgdQAsgdALg0QAMgzgegsQgcgtg1gLQgNgDgNAAQgkAAghAVg");
	this.shape_83.setTransform(1061.6699,640.3782);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AEnEjQg4gLghgvQgggwALg4QALg4AwghQAvggA4ALQA5ALAgAwQAgAvgLA4QgLA5gvAgQgkAYgpAAQgNAAgOgDgAljgoQgzgKgegsQgegsAKg0QAKgzAsgeQAtgdAyAJQA1AKAdAsQAeAtgLAzQgJA0gsAdQghAXglAAQgNAAgNgDg");
	this.shape_84.setTransform(1102.6891,619.4219);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AEYGDQhcgSg1hPQg1hOARhdQAShcBPg0QBOg1BdASQBdASA1BNQA0BOgSBdQgSBdhOA1Qg6AnhDAAQgXAAgXgEgAEbAbQgvAggMA4QgKA4AgAwQAgAwA4ALQA4ALAwghQAwggALg4QALg4ghgwQgggvg4gMQgOgCgOAAQgoAAgkAYgAlyAzQhagRg0hMQgzhNARhbQARhaBNg0QBNgzBaARQBaARA1BNQA0BNgSBaQgSBbhMAzQg5AmhBAAQgXAAgXgEgAlqkdQgsAegLA0QgKA0AeArQAeAtAzAJQA0ALAsgeQAtgeAJg0QALgzgegsQgegsg0gKQgNgDgMAAQglAAghAWg");
	this.shape_85.setTransform(1098.7438,620.7767);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0E6D00").s().p("Eg6PAzyQyhgb2WpzIqGkpIxYn+QDYBLDQBBQHjCUHHBhIAkAIQU4EWRWipQLjhxLEkQQK8kPJsmlQF7kBHwkFQHVkOGvlOIByhjQHHlrG1jIQG1jgGjjRIAhgSQDlh9Cxh0QC9hzDXhnQJQkNKPhHQHRg0IJECQH4DiHPFcQAfAVATAUQgeA1ADAaQALAjAXgHQAfgJgGgnQACgagighQALgVARgZIAPgWQCijbC4jfIgZgMQhNhGgwhOIgQgaQkInXL8q4QCaiYCFhrQO/sDh7YIQAEDogmC4Qh+JkpQBGIhJAxQhiBuiaDBQiVC0irC6QinCtieBkQiZBYhvg+QjZiajhh2QnUj2mYg3QmogrnNDdQlICfk8DoQlLDth1AxQiPA6iPBEIguAWQqmFIrLIpQkHDHkUDlIgBADIgpAgQiBBviABRQjPCTi6BbQi+Bmi+BxQkICrjbCVQjlCUj7B3QweHextAAIgvgBgEBzWgelQhPA1gSBcQgSBdA1BOQA1BPBcASQBdASBPg1QBOg1AShdQAShdg1hOQg1hOhdgSQgXgFgWAAQhDAAg6AogEBpNgjsQhNA0gSBaQgRBbA0BNQAzBNBbARQBbASBMg0QBMg0AShbQAShag0hNQg0hNhagRQgXgEgWAAQhBAAg5Amg");
	this.shape_86.setTransform(380.1988,813.9684);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AEsEeQg4gKghgvQgigvAKg5QAKg4AvghQAwghA4AKQA4AKAhAvQAhAvgKA4QgJA5gwAgQgkAagpAAQgNAAgNgCgAlkghQgzgJgfgsQgegrAIg0QAKg0ArgeQAsgfAzAJQA0AJAfAsQAfArgKA0QgIA0gsAeQgiAYgmAAQgMAAgMgCg");
	this.shape_87.setTransform(1139.7237,599.7463);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AEfF+QhdgRg2hNQg2hNAPhdQARhdBNg1QBOg3BcAQQBdARA3BMQA3BOgRBcQgRBdhNA3Qg7AphFAAQgVAAgVgDgAEbAWQgvAhgKA4QgKA5AiAvQAhAvA4AKQA4AKAvgiQAwggAJg5QAKg4ghgvQghgvg4gJQgNgDgNAAQgpAAglAZgAlxA6QhbgQg1hKQg1hMAPhbQARhbBLg1QBMg1BbAPQBbARA1BLQA1BLgQBcQgQBbhLA0Qg6AphEAAQgUAAgVgEgAlwkVQgrAegKA0QgIA0AeArQAfAsAzAJQA0AJAsgfQAsgeAIg0QAKg0gfgrQgfgsg0gJQgLgCgMAAQgmAAgiAYg");
	this.shape_88.setTransform(1135.8103,601.1325);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0E6D00").s().p("EhPNAwvQp1h5rhkTIqWkEIxzm/QDcA/DUA1QHqB5HMBHIAkAGQVGDLRLjnQLbiaMWjsQMAjpK/koQGli0Ivg7QIOhnHXj1IB7hUQHqkvFxjHQGCjbF1j2IAfgVQDViQCLiIQCeiJC+iIQIgllJ7itQHEh7IrC+QIWCeH6EeQBHAmAeAbQgYBIASgJQA1gUgvgrQAMgjAXg3IAPgWQCdjeC0jiIgYgMQhPhFgxhMIgQgaQkRnTLvrGQCXibCChsQOysVhfYJQAJDpgjC5QhzJmpOBQIhJAzQhgBviODDQiKC2igC+QibCxiYBtQiUBfh4gwQjqh8jvhYQnwi3mUgBQmjAPmkEhQkrDQkVEVQg4A4ivCUQiUB7hmA7QiOA9iNBIIgtAXQlPCulvEXQluEDmBD1QiNBTjPBOQjBBOiuBKIgBADIgwAUQibBIiQAuQjtBXjFAcQjMAqjPA/QknBpjnBqQj1BkkJBHQo/CHoXBdQofBWoqAIIgJAAQotAApnhzgEB1pgdNQhOA2gQBdQgQBdA2BNQA2BNBdARQBeAQBNg2QBNg3AQhdQARhcg3hOQg2hNhdgRQgVgDgVAAQhEAAg8AqgEBragiIQhMA1gQBbQgPBbA1BMQA1BLBaAQQBcAQBLg1QBMg1APhbQAQhcg0hLQg2hLhbgRQgUgDgUAAQhEAAg6Apg");
	this.shape_89.setTransform(402.4835,785.2174);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AExEYQg4gJgigvQgiguAJg5QAJg4AugiQAughA5AIQA5AJAhAuQAjAvgJA4QgJA5gvAiQglAbgrAAQgLAAgMgCgAlkgbQg0gIgfgrQgggrAIg0QAJgzAqggQAsggAzAJQA0AIAgArQAfArgJAzQgHA1grAfQgiAZgoAAQgKAAgLgCg");
	this.shape_90.setTransform(1176.7871,580.0539);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AEmF4QhdgPg4hMQg3hLAOheQAPhdBMg3QBMg4BdAPQBdAOA5BLQA3BNgPBdQgOBehMA3Qg8AshIAAQgSAAgUgDgAEcAQQguAjgJA4QgJA4AiAvQAiAuA4AJQA5AJAugiQAvgiAJg4QAJg5gjguQghgvg5gIQgMgCgLAAQgrAAglAagAlwBBQhbgOg2hKQg2hKANhcQAPhbBKg3QBLg2BbAOQBbAOA3BLQA3BKgPBcQgOBbhLA1Qg6AshGAAQgTAAgTgDgAl1kPQgqAggJA0QgIAzAgAsQAfArA0AHQA0AJArggQArgfAHg0QAJg0gfgrQgggqg0gJQgLgCgLAAQgmAAgjAZg");
	this.shape_91.setTransform(1172.8746,581.5402);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0E6D00").s().p("EhOoAvwQpehNrrjkI4VoAIkYhcQDeAyDXApQHwBeHPAtIAlADQVPB/Q7kkQLSjDNZi7QM4i4L3ieQDggwEFAjQECAaERAxQEMAnEHACQEDgHDnhoICAhBQH5jrE4jVQFWjiFIkcIAcgXQDEigBjiWQB6iYChikQHhm2JZkNQGrjAJGB0QIqBXIdDbQB0ArAYAcQgOAjAEgEQAagMgQgTIAzh9IAPgWQCZjiCwjlIgZgLQhQhDgzhMIgQgaQkZnNLhrUQCUieCBhuQOjsmhDYKQANDogfC6QhoJopMBbIhIA1QheBxiDDDQiAC3iTDAQiQC0iSBzQiOBnh9ghQj5hcj4g3QoEh2mIA0QmXBGlxFdQkHD8jmE9QgvBBi9DDQicCfhrBHQiLBCiLBLIgtAZQlKC2mNFJQmEEimTDSQiRA/kLAgQjxAkjJAaIgCADIg0AGQinAeiYAFQj7AWi7ghQjIgTjVALQk1AjjrA/Qj8A2kPAUQpOAWn8BAQoJA2oCAfQh6AEh9AAQmhAAnIgzgEB1mgbJQhMA4gPBdQgOBeA4BMQA3BMBeAPQBdAOBNg3QBMg4AOheQAPhdg4hMQg4hMhdgPQgUgDgSAAQhHAAg9AsgEBrSgf3QhLA3gOBaQgOBcA2BKQA2BLBcAOQBcAPBKg3QBLg3ANhbQAPhbg3hLQg2hKhcgPQgSgCgSAAQhGAAg7Arg");
	this.shape_92.setTransform(439.7467,751.9709);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AEsEdQg4gKghgvQghgvAJg4QAKg4AvgiQAwghA4AKQA4AKAhAuQAhAwgJA4QgKA4gvAhQgkAagqAAQgMAAgOgCgAlkghQgzgJgfgrQgfgsAJgzQAKg0AqgfQAsgeAzAJQA1AJAeArQAfArgKA0QgIA0gsAfQghAYgmAAQgMAAgMgDg");
	this.shape_93.setTransform(1204.3635,564.5713);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AEgF9QhdgQg2hNQg3hNAQheQAQhdBOg1QBNg2BdAQQBdAQA2BMQA3BNgRBdQgPBdhNA3Qg8AphFAAQgVAAgVgDgAEcAVQgvAigKA4QgKA4AhAvQAiAvA4AKQA4AKAvgiQAwghAJg4QAKg4ghgwQghgug5gJQgNgDgMAAQgqAAgkAZgAlxA7QhagQg2hLQg1hLAPhbQAQhbBMg1QBLg1BbAPQBbAPA2BMQA1BMgQBbQgPBbhMA0Qg6AphEAAQgUAAgVgDgAlwkVQgrAfgKA0QgIAzAeAsQAfArAzAJQA0AKAsgfQAsgfAIg0QAKg0gfgrQgfgrg0gJQgMgCgLAAQgnAAghAXg");
	this.shape_94.setTransform(1200.4353,565.9825);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0E6D00").s().p("EhZSBFqI+MhlQDkgJDagSQH4gnHKhOIAlgHQVBjqPIo2QQHpbdUtjQDRhgEIgQQECgaETgFQEOgPD7g2QD0g/C7ihIBkhiQGWltCslZQDUlhDdmCIAUgfQCQjVBOizQBei6B+jGQFwoYIMmOQF1kcJZAAQI1gYJBBwQDMAggWATQAZgGBSihIAQgWQCcjeCzjjIgYgLQhPhFgyhNIgQgZQkRnSLtrIQCXibCChtQOwsXhcYKQAJDogiC5QhxJnpPBRIhIAzQhgBwh5C7Qh3CwiFC6QiFCviJB5QiIBuiCgKQkHgrj9gHQoQgPlvB7Ql4CSkWGoQjHExiYFoQgfBJhqDLQhbCohJBeQhrBuhnB4IgiAnQj0EekMHUQkQGlk8FBQh2BkkNBqQjtBljDBLIgBADIgxASQicBEiSAoQjxBPi/AOQjHAdjNA7QklBojaBxQjrBrkFBQQo6CXnYC4QnnCxnhCjQnxCapIBeQnYBDpJAAQieAAilgFgEBscgwaQhOA2gQBdQgPBdA2BNQA2BOBdAPQBeAQBNg2QBNg2APhdQARhdg2hOQg3hNhdgQQgVgDgUAAQhFAAg8AqgEBiMg1UQhMA2gQBaQgOBcA0BLQA2BMBaAPQBcAQBLg1QBMg2APhbQAQhag1hMQg2hMhbgPQgUgEgUAAQhDAAg7Apg");
	this.shape_95.setTransform(526.0002,872.9045);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AEoEiQg4gLghgvQgggwAKg4QALg4AvghQAwggA4ALQA5AKAgAwQAhAwgLA4QgLA4gwAgQgjAZgoAAQgOAAgOgDgAlkgnQgzgJgegsQgegsAKg0QAKgzAsgeQAsgeAzAKQA0AKAeArQAeAtgKAzQgKA0gsAeQghAWglAAQgNAAgNgDg");
	this.shape_96.setTransform(1231.9733,549.0641);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AEZGBQhdgSg0hNQg1hOARhdQARhdBPg0QBOg1BcARQBdASA2BNQA1BOgSBdQgRBchPA2Qg6AohDAAQgWAAgYgFgAEbAZQgwAhgKA4QgLA4AgAwQAhAvA4ALQA5ALAvghQAvggALg4QALg4ghgwQgggwg4gKQgOgDgNAAQgpAAgkAYgAlyA0QhagRg0hLQg0hNAQhbQAShaBMg0QBNg0BaARQBbARA0BMQA0BNgRBaQgRBbhMAzQg6AohCAAQgVAAgXgFgAlskbQgrAegLAzQgJA0AeAsQAeAsAzAJQA0AKAsgdQAsgeAJg0QAKgzgegtQgdgrg1gKQgMgDgNAAQgkAAgiAXg");
	this.shape_97.setTransform(1228.023,550.4514);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0E6D00").s().p("EhhEBa1QHbiqGnjEIAhgQQTUpDMTshQILoVKro/QKLoqJtnYQC2iMEChEQD6hNEOg7QEGhEDjhnQDahxCAjKIBCh4QERnHgMmYQAqmjBSnAIALgjQBMj6AvjPQA4jXBSjgQDupeGjn7QEqlpJWh3QIqiIJQgBIDggJQA3gZBeifIAPgWQChjcC3jfIgYgMQhOhGgxhOIgPgaQkKnWL4q7QCaiZCEhrQO9sGh1YHQAFDoglC5Qh8JlpPBHIhKAyQhhBuhwCwQhvCnh6CyQh5CoiAB7Qh/BziDANQkKAJj6AqQoKBXlGC7QlMDWiuHZQh9FXhBGCQgOBOglC1QghCbgkBmQg+CNg2CVIgRAwQh/FhhfIrQhyH4jIGNQhQB/j4C4QjWCnixB6IAAADIgrAdQiJBmiFBJQjYCFi3A7Qi9BMi6BpQkGCni+CeQjOCcjuCHQoLERmXEjItII3QmyEUoVD0QonDwr3C3Iq3CWIyqEDQDYhFDOhKgEBcfhH2QhPA1gRBdQgRBdA1BOQA0BOBdASQBdASBOg2QBPg1ARhdQAShdg1hOQg2hOhdgRQgXgEgWAAQhDAAg6AngEBSUhM6QhMA0gSBbQgQBbA0BMQA0BNBaARQBbARBNg0QBMg0ARhbQARhbg0hMQg0hMhbgSQgWgEgVAAQhCAAg6Ang");
	this.shape_98.setTransform(655.7373,1007.6082);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0E6D00").s().p("EhMpBsBQGdkhFlksIAcgYQQQtyIlvUQFuqMIRrYQH1q6H3pYQCSivD0h4QDnh/EAhwQD0h4DEiSQC3iZA/jeIAbiCQA+j5gnjXQgejbhQjMQhIjQhGjUQg+jXgLjvIAAglQABoOArm9QBeqDElpOQDQmjI7jtQIJj2JHhzQDJgwA1gbQBRgxBqifIAQgVQCljaC6jcIgYgMQhNhIgvhOIgPgaQkCnbMEqvQCciWCGhoQPJr4iOYGQABDogoC4QiGJjpQA+IhLAxQjGDYjcF6QjeE9j8B3QkEA8jtBaQnvC6kUDvQkVENg+HzQgqFqAXGHIAPDbQAHB9gBBhQgICaACCeIABAzQAGF5BpJAQBCIOhDGvQg1DAn4JXIAAADIgjAnQhuCChwBmQi0CzilBmQimB3ieCRQjbDeiYDFQioDGjKC4QnCF9k/F5QlSF5lDF3QlWF3m9F2QnPF3qrF4Ip3FHIs3GsIkGCIQC/h8C0h9gEBHFhaxQhPA0gTBcQgTBdA0BOQAzBQBdASQBdAUBPg0QBOg0AUhdQAThcg0hPQg0hPhdgTQgYgGgYAAQhBAAg6AngEA9AhgAQhNAzgTBaQgSBbAzBNQAyBNBaATQBcASBMgzQBOgzAShaQAThagzhNQgzhNhagTQgYgFgXAAQhAAAg5Alg");
	this.shape_99.setTransform(820.2575,1113.5904);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AEjEnQg4gLgggxQgggwAMg4QAMg4AwggQAwgfA4ALQA4AMAfAwQAhAwgNA4QgLA5gwAfQgjAXgnAAQgPAAgPgDgAljgsQgzgLgdgsQgdgsAKg0QALgzAsgeQAtgdAzALQA0AKAdAtQAdAsgLA0QgKAzgtAdQggAWgkAAQgOAAgOgDg");
	this.shape_100.setTransform(1259.5704,533.5841);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AETGGQhdgTgzhPQg0hPAThdQAThcBPgzQBPg0BcATQBdATA0BOQA0BPgTBdQgUBchOA0Qg6AmhAAAQgZAAgZgFgAEbAeQgwAggMA4QgMA4AgAwQAgAwA4ALQA4ANAwghQAwgfALg4QANg4ghgwQgfgwg4gMQgPgDgPAAQgnAAgjAXgAlzAuQhagSgyhNQgzhNAShbQAThaBNgzQBOgyBaASQBaATAzBNQAzBOgTBaQgSBahOAyQg4AlhAAAQgYAAgYgFgAlnkhQgsAdgLAzQgKA0AdAsQAdAtAzAKQA0ALAsgdQAtgeAKgzQALgzgdgtQgdgsg0gLQgOgCgNAAQgkAAghAVg");
	this.shape_101.setTransform(1255.5947,534.9027);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0E6D00").s().p("Eg07B3BQFEmDEJmAIAVgeQMExlERxBQC1rVFVtIQFBsjFnq5QBojMDbiqQDMiuDnijQDZioCdi0QCPi5gDjdIgMh+QgOj3h7i4Qhyi+inijQieioiZiwQiPi2hSjiIgLgkQiZn5gtnlQg4qICYqAQCnrGXHqdQC8hVBTg8QBnhNB1ihIARgVQCnjXC/jYIgYgNQhMhJguhPIgOgaQj7nfMPqiQCfiUCHhmQPWrninYDQgDDogrC4QiQJfpRA1IhLAwQjLDVjHFSQjMEmjpCYQjzBtjXCGQnCEWjbEYQjVE3A2HyQAoFqBwF3QAtCZBAC2QAuCSA6CUIATAvQCLFfEwINQD3HmBEGlQAECMiFE/QhuEUhnDIIABADIgaAtQhMCZhWB9QiFDXiJCMQiGCbh6CyQijEKhqDjQh6DoieDfQljHXjVG1QjpG7jSG5QjlG9lFHcQlYHhovIeIy1RWIjZDIQCYipCMiogEAt9hnRQhQAzgVBbQgUBdAyBPQAzBRBcAUQBcAVBQgzQBPgzAVhcQAVhcgyhQQgzhQhdgUQgagGgZAAQg/AAg5AkgEAj+hsqQhPAxgUBaQgUBaAyBOQAxBPBaATQBbAVBNgyQBOgxAUhaQAVhbgyhOQgyhNhagVQgZgFgZAAQg+AAg3Ajg");
	this.shape_102.setTransform(1008.7204,1178.3016);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AEeEsQg4gMgfgxQgfgxANg4QANg3AwgfQAxgfA3AMQA5ANAeAwQAfAxgNA4QgMA4gxAfQgiAVgmAAQgQAAgQgDgAligyQgzgLgdgtQgcgtALgzQAMgzAtgdQAtgdAyAMQA0AMAdAsQAcAtgMAzQgLA0gtAcQggAUgjAAQgOAAgPgDg");
	this.shape_103.setTransform(1287.1746,518.0914);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AEMGLQhcgUgyhRQgyhPAUhdQAUhbBQgyQBRgyBbAUQBcAUAzBPQAzBQgVBcQgVBchPAzQg5Akg/AAQgaAAgbgGgAEaAjQgwAfgNA4QgNA4AfAwQAfAxA4AMQA4ANAwgfQAxgeAMg5QANg3gfgxQgegwg5gNQgPgEgPAAQgnAAgjAWgAl0AoQhagTgxhOQgxhOAThaQAVhaBOgxQBOgyBaAUQBaAVAyBNQAxBOgUBbQgUBahOAwQg3Ajg9AAQgaAAgbgGgAlikmQgtAcgMAzQgLAzAcAtQAdAuAzALQAzALAtgcQAtgcALg0QAMgzgcgtQgdgtg0gLQgOgEgPAAQgiAAggAVg");
	this.shape_104.setTransform(1283.1578,519.3435);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AEZEwQg4gNgegxQgegyAOg3QANg4AxgeQAxgeA4AOQA3ANAeAxQAeAygNA3QgNA4gyAeQghAVglAAQgRAAgRgFgAlhg4QgzgMgcgtQgbguALgzQANgzAtgcQAugbAyAMQA0ANAcAtQAcAtgNAzQgMAzguAcQgfATgiAAQgPAAgQgEg");
	this.shape_105.setTransform(1314.7649,502.6022);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AEGGPQhcgWgxhQQgwhRAVhcQAWhcBRgwQBRgxBbAWQBcAWAxBQQAyBQgXBcQgVBchRAxQg3Aig9AAQgcAAgdgHgAEaAoQgyAegNA4QgOA3AfAxQAeAxA3AOQA4ANAxgeQAygdAMg5QAOg3gegxQgegxg4gOQgRgEgRAAQglAAghAVgAl0AiQhagVgwhOQgwhPAWhaQAVhaBPgwQBPgwBaAWQBZAWAxBOQAxBPgXBaQgVBahPAvQg2Ahg8AAQgbAAgcgHgAldksQgtAcgNAzQgMAzAcAtQAbAtAzANQA0AMAtgcQAtgcAMgzQANgzgcgtQgbgtg0gNQgQgEgOAAQgiAAggAUg");
	this.shape_106.setTransform(1310.744,503.794);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0E6D00").s().p("EgbtB7VQDTnKCbm3IAMgjQHC0JgXxiQgPrsCDuGQB3tdDEr5QA5jeC3jYQCnjZDEjTQC1jTBzjNQBijOhAjJIguhxQhSjfi/h6Qi0iDjphYQjfhhjbhvQjQh4iTi/IgVgfQklm2icn5QjJprACqTQABrcU9u5QCoh4BqhgQB3huB/ijIARgUQCrjVDCjVIgYgNQhKhKgthQIgOgbQjynjMaqVQCgiQCKhlQPirWjBX/QgHDpguC2QiaJepSAqIhMAvQjODSi5EnQi/ELjOC0QjZCai5CtQmDFoidEzQiRFTCmHWQB5FXDDFUQBOCLA8BTQBgB5BpB1IAjAmQB/CLDJCxQDACuDTDDQDLDACnDCQCeDABECwQArB/gtFnQgiExg0DhIABACIgOAyQgnCng2CNQhQDxhkCpQhfC4hODJQhjEog4D2QhED+hqD9QjzIahiHVQh1HghTHaQhmHki4IcQjKInmMKeIwEZmQBmjLBbjIgEATAhstQhRAxgWBcQgVBbAwBRQAxBQBcAXQBdAWBQgxQBRgxAVhdQAXhbgyhRQgxhQhcgXQgcgGgbAAQg9AAg4AigEAJGhyRQhPAwgVBaQgWBaAwBOQAwBPBaAWQBbAVBOgwQBPgwAVhaQAXhZgxhPQgxhPhZgWQgcgGgbAAQg7AAg3Ahg");
	this.shape_107.setTransform(1208.819,1197.9083);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AEUE1Qg4gPgdgxQgdgyAOg3QAPg3AxgdQAygeA3APQA4AOAdAyQAdAxgOA4QgOA3gyAdQghAUgkAAQgSAAgSgFgAlgg+QgygMgcguQgbguANgzQAOgyAtgcQAugbAyANQA0AOAbAtQAbAugOAzQgMAzguAbQgfASghAAQgQAAgRgFg");
	this.shape_108.setTransform(1342.3777,487.1277);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AD/GUQhbgYgwhRQgwhSAYhbQAXhcBSgvQBRgwBcAYQBbAYAwBQQAwBRgYBcQgYBbhRAwQg2Agg8AAQgdAAgegHgAEZAtQgyAdgOA3QgOA3AdAyQAdAxA3APQA4APAxgeQAygdAOg3QAPg4gegxQgdgyg3gOQgTgFgSAAQgjAAghAUgAl1AcQhZgXgvhOQguhQAWhaQAYhZBPgvQBQguBZAWQBaAYAvBPQAuBQgXBZQgXBahPAuQg2Afg5AAQgdAAgegIgAlYkyQgtAcgPAyQgNAzAbAuQAcAuAyAMQAzAOAugbQAugbANgzQANgzgbguQgagtg0gOQgRgEgPAAQghAAgfASg");
	this.shape_109.setTransform(1338.3332,488.2443);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0E6D00").s().p("EAPWB5AQBTnxAjnRIACgkQBg1Sk8w1QjTrNhbuSQhctjAXsUQAHjlCJkBQB5j8CXj8QCIj4BFjeQA0jahwilIhKhaQiIi0jmgmQjeg0kLAKQkBgEkAgXQj4gljEiKIgdgXQjLimiyjhQiwjYiEjfQlRosiTqCQhqnIFjoYQErn9GwmpQEaksD4koIARgUQCujSDFjSIgXgOQhJhLgrhQIgOgbQjrnnMkqIQCkiOCKhiQPurHjaX9QgKDogyC2QijJbpTAhIhNAtQjRDPiyD5Qi1DtivDKQi3DBiVDOQk3GshdFCQhJFfELGiQDEE0ELEeQA2A7gEAMQAMAVA3AhQCEBPCMBIIAtAXQCoBWEABlQD1BkEPB0QEEBzDfCCQDUCBBwCNQBLBoA4F0QA0E7AEDqIACADIgCA0QABCqgVCWQgWD8g6C+QgwDKgfDWQgdE4gCD9QgMEIgvEPQh4JCAVHYQAEHnAsHYQAcHogfI1QgvJEjNLuIjPKpIlkSSQAtjgAkjYgEAKYhrFQhSAwgYBcQgXBbAwBSQAvBRBcAYQBcAXBRgwQBRgwAYhbQAYhcgwhRQgxhRhbgYQgegIgdAAQg7AAg2AggEAAkhwzQhPAvgXBZQgXBaAvBQQAuBPBZAXQBaAXBPguQBQgvAXhaQAXhZgvhQQgvhPhZgYQgdgHgcAAQg7AAg1Afg");
	this.shape_110.setTransform(1291.6652,1172.2112);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AEOE6Qg3gPgcgzQgdgyAPg3QAQg3AygcQAygdA3AQQA3APAcAyQAdAygPA3QgQA3gyAdQggASgiAAQgTAAgUgFgAlghDQgygOgaguQgagvANgyQAPgyAugbQAugbAyAPQAzAOAaAuQAbAugPAzQgNAzgvAaQgeARgfAAQgSAAgSgFg");
	this.shape_111.setTransform(1370.0029,471.6197);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AD4GYQhagagvhSQguhRAYhcQAahaBSguQBSgvBbAZQBbAZAvBSQAuBSgZBbQgZBbhSAuQg1Aeg6AAQgfAAgggIgAEYAxQgyAcgQA4QgPA3AdAyQAcAyA3APQA3AQAygdQAygcAQg3QAPg3gdgzQgcgyg3gPQgTgFgTAAQgjAAggASgAl1AWQhZgXgthRQguhQAYhZQAZhZBRguQBQgtBZAYQBYAZAvBQQAtBRgZBZQgYBYhQAtQg0Aeg4AAQgfAAgfgJgAlTk3QguAagPAyQgNAzAaAuQAaAvAyANQAzAPAugbQAvgaANgzQAPgygbguQgagugzgPQgRgFgRAAQggAAgeASg");
	this.shape_112.setTransform(1365.9227,472.6833);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0E6D00").s().p("EAsKBwlQgzn3hZnJIgHgkQkI06pNu9QmIp9k1tmQkqs3iYsHQgsjhBRkfQBBkXBhkdQBRkVAWjlQAGjdiRh3Ihcg9Qith9jrA4QjlAnkEB0QkBBkkCBKQj+A5jjhIIgigOQjwhjjzi5Qjqiui3i/QnGnRkipQQjOmkD1pbQDCoyFXn4QDbldErlhIASgUQCyjPDIjOIgXgOQhIhNgphRIgOgbQjjnrMwp6QCmiMCMhfQP4q2jzX5QgODog0C1QitJYpTAXIhNAsQmpGWkdGmQiPDhhpDmQjeHggfFEQgDFeFiFZQEFD+FFDbQBCAsgtADQgQAJA0AHQCXAbCeASIAzAGQC7AUEZAJQENANEsATQEhAXD9AwQDzA0COBhQBgBJChFkQCKEpBADmIACACIAKAzQAoCmAPCXQAlD7gLDHQABDQATDYQApE3A2D5QAuEGANETQAKJOCGG9QB5HRCmG1QCZHJB6IkQBtI4AAMJIgVLGIgkTHQgPjjgWjagEgIhhi2QhSAvgaBbQgYBbAuBSQAvBSBaAZQBcAZBSguQBSgvAZhbQAZhbguhSQgvhShbgZQgggJgfAAQg4AAg2AegEgSOhouQhRAtgZBZQgYBaAuBQQAtBQBZAZQBaAZBQguQBQguAYhZQAZhZgthQQgvhQhYgZQgfgJgeAAQg4AAg0Aeg");
	this.shape_113.setTransform(1440.2277,1104.3277);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AEAFGQg3gSgagzQgag0ASg2QASg2AzgaQA0gaA2ARQA2ASAaAzQAaA0gSA2QgSA3gzAZQgeAQggAAQgVAAgWgHgAlchTQgygQgYgwQgYgvAQgyQARgyAvgYQAvgYAyAQQAyARAYAvQAYAvgQAyQgQAygwAYQgbAPgeAAQgUAAgUgHg");
	this.shape_114.setTransform(1395.9611,443.6029);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("ADlGiQhagdgqhUQgrhUAdhaQAehaBUgqQBVgqBZAdQBZAcAsBUQArBUgeBaQgdBahUArQgyAZg0AAQgkAAglgMgAEVA+QgzAagSA2QgSA2AaA0QAaAzA3ASQA2ASAzgbQAzgZASg3QASg2gag0Qgagzg2gSQgWgHgVAAQggAAgfAQgAl2AFQhYgcgphSQgqhTAchYQAchXBTgqQBTgpBXAcQBYAcAqBTQAqBSgdBYQgcBYhTAqQgwAYgzAAQgjAAgkgMgAlFlHQgvAYgRAyQgQAyAYAvQAYAwAyAQQAyAQAvgYQAwgYAQgyQAQgygYgvQgYgvgygRQgUgGgUAAQgdAAgcAOg");
	this.shape_115.setTransform(1391.8564,444.5071);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0E6D00").s().p("EAUhB60QBLnzAcnRIACgkQBL1UlOwwQjerJigt3QietOhSsKQgZjkBkkKQBVkFB1kLQBmkEAqjtQAbjmh8iuIhPheQiUi8jog7QjghHkEgQQj+gcj1gvQjug7i3iZIgbgZQi+i1ihj0QiejqhvjrQkbpJhXqNQg/nQEsoKQEEn3GBm9QEClBEsk+IASgTQC7jGDTjGIgXgPQhEhPgmhTIgNgcQjMn0NLpVQCsiECQhZQQYqHk4XsQgZDog9CyQjIJPpUgDIhPAoQm6GClAGsQioDOiFDZQkUHDhLF5Qg8GODmHEQCoFDDuE3QAwA/gPAFQADARAzAiQB/BXCIBQIAtAaQChBfD0BsQDrBsEDB5QD5B5DaCHQDRCGB4CUQBRBtBGFfQBAEsAWDkIACACIADA0QAQCpgFCYQACD9gsC8QggDJgHDWQAHE3AkD1QAaECgIERQgnJNA0HpQAnH4AyHrQAkH5ghJCQguJSjELyIoWdDQAqjgAgjZgEAKFhtXQhUArgeBaQgdBaArBUQAqBUBaAdQBaAeBVgrQBUgrAdhaQAehagrhUQgshUhZgdQgkgMgkAAQg0AAgyAZgEAAphzrQhSAqgcBXQgcBYAqBTQApBSBXAdQBZAcBRgpQBTgqAchYQAdhYgqhSQgqhThYgcQgjgMgjAAQgzAAgxAZg");
	this.shape_116.setTransform(1347.0625,1144.3484);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("ADwFSQg2gUgXg1QgXg1ATg1QAVg2A0gXQA1gYA1AUQA2AVAXA0QAYA1gUA1QgUA2g1AXQgcANgdAAQgYAAgZgJgAlYhiQgxgTgWgwQgWgxASgxQAUgxAwgWQAwgWAxATQAxATAWAwQAWAxgTAwQgSAygwAVQgbAMgaAAQgXAAgWgIg");
	this.shape_117.setTransform(1421.9871,415.5873);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("ADSGtQhYgignhWQgnhWAihYQAhhZBWgmQBXgmBXAgQBZAiAnBVQAnBXgiBYQghBYhWAnQguAVgvAAQgpAAgpgPgAESBKQg0AYgVA2QgTA1AXA1QAXA0A2AUQA2AVA0gYQA1gYAUg2QAUg0gYg2QgXg0g2gUQgZgKgYAAQgdAAgcANgAl2gLQhWgggmhVQgmhUAghXQAhhWBVgmQBUgmBWAgQBXAhAmBUQAmBUghBXQggBWhVAmQgtAUguAAQgoAAgogOgAk1lVQgwAVgUAyQgSAxAWAwQAWAxAxASQAxATAxgWQAwgWASgxQATgxgWgxQgWgwgxgTQgXgIgWAAQgaAAgaAMg");
	this.shape_118.setTransform(1417.7925,416.3175);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0E6D00").s().p("EgVPB/cQDEnRCOm8IAKgjQGb0Wg7xhQgnrrgNtoQgStJgOsGQgFjlBwj6QBjj3CFj+QB2j8BEj0QA2jxhSjcIg3h6Qhjjxi0igQisiojOiFQjGiLi4iVQivichxjTIgQgiQjfncg7olQhSqFB8qHQBXnMFLm6QE1m2GfmDQEnkhEnkcIATgTQDDi9Dbi8IgWgQQhAhTgjhUIgKgcQi1n9NmouQCyh8CUhSQQ0pXl+XdQgiDmhFCvQjkJGpTgfIhRAkQjmC3jIDXImEGNQi+C6idDHQlHGfiQGlQiKGwBOIBQA4FoCAFyQAaBMADAbQALAnAkA6QBRCDBcCBIAeAqQDbEyGZGVQFgGGDIGIQA0CKgHFAQAAEXgPDZIACACIgFA0QgGCrgbCUQghD8hLCsQg+C8ggDRQgcE1AVDvQAHD+gdENQhZJIgnICQg0IMhOIBQhbILjAI4QjMJDl8KrIlnJmIpqQfQBgjPBVjJgEARVhx2QhXAmghBZQghBYAnBWQAmBWBZAiQBZAhBWgnQBVgnAihYQAhhYgnhXQgnhVhYgiQgogQgoAAQgvAAgvAWgEAIMh4mQhUAmghBWQggBXAmBUQAmBVBWAgQBXAhBUgnQBUgmAghWQAihXgnhUQgmhUhXghQgngPgnAAQguAAguAVg");
	this.shape_119.setTransform(1326.6045,1145.8423);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("ADgFcQg1gXgVg1QgVg1AXg1QAWg1A2gUQA1gWA1AXQA0AXAWA0QAVA3gXA0QgWA0g2AVQgaALgaAAQgbAAgbgMgAlUhyQgwgVgUgxQgTgxAUgxQAWgwAxgUQAxgTAwAVQAxAVATAwQAUAygVAwQgUAxgyATQgYAKgYAAQgZAAgZgLg");
	this.shape_120.setTransform(1448.0066,387.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AC+G2QhXglgihYQgjhYAlhXQAlhWBYgjQBYgiBXAkQBWAlAkBYQAiBYglBXQglBWhYAjQgqARgqAAQguAAgtgTgAEOBXQg1AVgXA1QgXA1AWA1QAVA1A1AXQA0AXA2gWQA1gVAXg0QAWg1gVg2QgVg0g1gYQgbgLgbAAQgaAAgaAKgAl1gcQhUgkgjhWQghhWAjhVQAlhVBWgiQBWgiBVAkQBVAlAiBWQAiBVglBVQgkBVhWAiQgqARgpAAQgsAAgsgTgAkmljQgwAUgWAwQgVAwAUAyQAUAxAwAVQAwAVAygUQAxgTAUgxQAVgwgTgyQgTgxgxgVQgZgKgZAAQgYAAgYAJg");
	this.shape_121.setTransform(1443.7883,388.1191);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0E6D00").s().p("EgyCB9WQEymSD2mMIATgeQLQyIDcxOQCUrcB6s+QB0smAzr7QAOjlB7jxQBwjxCTj4QCIj4Bkj7QBXj7gWj5IgViOQg8olj+mPQjLmthYnHIgDglQgjoPBqn8QB+p+FDo+QHJsyN4qaQFGj9Egj9IAUgSQDMi0DkiyIgVgRQg9hVgehWIgKgdQidoFN+oFQC3h0CYhLQRPoknCXJQgtDjhNCtQj+I7pRg7IhSAhQjuCrjXDdQjYDPjNCsQjUCiizC0QrsLsiyQPQg+FnAFGHQABCfANB5QAUCaAfCbIALAyQBLFwDHHnQCkHPBHG/QANCcg+EOQgwD0gtDIIABACIgLAzQgfCogvCQQhDD1hlCWQhbCsg4DIQg9EuAGDpQgLD4gvEJQiJI+iKIHQiTIMjSH2QjdH8lZIGQljIMoeI5In0H5ItbNnQCQixCEiugEAodhvSQhYAkgmBWQgkBXAiBYQAjBYBXAlQBXAmBYgkQBYgjAkhWQAmhXgjhYQgjhYhXglQgsgTguAAQgqAAgqAQgEAfph2bQhWAiglBVQgkBVAiBWQAiBWBVAkQBVAlBWgjQBVgiAlhVQAlhVgjhWQgihVhVglQgrgTgsAAQgqAAgpARg");
	this.shape_122.setTransform(1204.5094,1102.0497);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("ADQFmQg0gYgTg3QgSg3AZgzQAZgzA2gTQA3gTAzAZQA0AZASA2QATA3gZAzQgZAzg2ATQgYAJgXAAQgeAAgdgPgAlPiBQgugXgSgyQgSgyAXgwQAYgvAygSQAygRAvAXQAwAXARAyQASAzgYAuQgWAwgzARQgVAIgVAAQgcAAgcgNg");
	this.shape_123.setTransform(1474.0605,359.6067);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("ACqG+QhWgpgehZQgfhZAphWQAqhUBZgfQBageBUAoQBVApAfBaQAfBZgqBVQgpBVhZAfQgmANglAAQgyAAgxgYgAEJBjQg2ATgZA0QgZAzATA2QATA3AzAZQA0AZA2gTQA3gTAYgzQAagzgTg3QgTg2g0gaQgdgOgeAAQgXAAgYAIgAl0gtQhTgogehYQgehXAohTQAohTBYgeQBXgeBTAoQBUAoAeBXQAeBYgpBTQgnBThYAeQglANgkAAQgyAAgwgXgAkWlwQgxASgYAuQgXAwASAyQARAyAvAXQAwAXAygRQAygRAXgwQAXgvgRgyQgSgygwgYQgagNgcAAQgVAAgWAIg");
	this.shape_124.setTransform(1469.8154,359.9699);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0E6D00").s().p("EhK3B0KQGMk6FQlCIAbgaQPXuyHnv0QFDqiDzr4QDrrqBxrtQAhjiCJjvQB+jvCnj4QCej4CKj/QCAj/AwkCIATiTQBio1AFnTQAhnfBxnFIALgjQCfn3DumrQFAo1Hpm7QFak7FQk5QFhk1HFkbQCwhqCMhfQCVhnCmiGIAVgRQDUirDrinIgUgSQg4hYgbhXIgIgdQiGoMOVncQC9hrCbhEQRmnyoFWzQg4DihUCoQkYIvpNhVIhUAdQj2ChjnDgQjnDNjfCYQjkCIjICeQmfFHlPG6QlOGwj7HgQirFBh5F1QgxCYgxC2QgsCUgjCaIgLAyQhRFwgSHYQgjHGhGHDQggCghZDVQhODJhDC0IACADIgTAxQg1CihCCIQhkDph8B+QhzCXhPC8QheEkgGDjQgbDxhFECQlxRip3OGQqwOa0RM0I18NMIj9CYQC3iHCriIgEBB6hlRQhZAfgqBUQgpBWAfBZQAeBZBWApQBVAqBZgfQBZgfAphVQAqhVgfhZQgfhahVgpQgwgYgyAAQgmAAgmAOgEA5bhs0QhYAegoBTQgoBTAeBXQAeBYBTAoQBUAoBXgeQBYgeAnhTQAphTgehYQgehXhUgoQgvgXgxAAQglAAglANg");
	this.shape_125.setTransform(1067.5459,1010.7903);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AC/FwQgygbgRg4QgQg3AbgyQAcgyA3gRQA3gQAyAbQAzAcAQA3QAQA3gbAyQgbAzg4AQQgUAGgUAAQghAAgggRgAlIiQQgugZgPgzQgPgzAYguQAaguAzgPQAzgPAuAZQAuAZAPAzQAPAzgZAuQgZAugzAPQgTAGgSAAQgfAAgdgQg");
	this.shape_126.setTransform(1500.1246,331.6281);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("ACVHGQhTgtgbhbQgahaAshTQAthTBbgbQBbgbBTAtQBSAtAcBbQAbBbguBSQgtBUhaAaQgiAKghAAQg3AAg0gcgAEEBwQg2AQgcAyQgcAyARA4QAQA3AyAbQAzAcA3gRQA3gQAbgyQAcgygRg4QgQg2gygcQgfgSgiAAQgUAAgVAHgAlxg+QhRgrgahZQgahZArhRQAthRBYgaQBZgaBRArQBRAtAaBYQAbBZgtBRQgsBRhYAaQghAKggAAQg2AAgzgcgAkFl8QgzAQgZAtQgZAuAPA0QAQAzAtAYQAvAaAzgPQAzgPAYgvQAagugPgzQgPgzgvgZQgcgQgfAAQgTAAgTAGg");
	this.shape_127.setTransform(1495.8664,331.7914);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0E6D00").s().p("EhgvBkRQHNjPGWjkIAggSQSiqiLStcQPBx6Fw3TQA0jfCbjyQCTjwDDj6QC7j5C4j8QCuj5B2jzIA8iKQD9oNEJmcQEKmlEplzIAYgdQFJmbFLk+QHkmyJbkJQGti9FAkPQFkj/HQjvQC9hVCHhMQCUhUCph+IAVgPQDcihDzidIgUgSQg0hbgXhYIgHgeQhtoROqmxQDBhjCeg9QR8m+pHWaQhCDfhcClQkxIhpJhwIhVAZQj9CVj4DjQj3DKjvCDQjzBsjYCFQnDEUm7GbQm1GEmJGEQkID6joE8Ih4CnQhDBdg7BJQhkB2hfB+IgeApQnBJemGNHQiXEli3FOIABADIgZAuQhLCZhUB9QiDDZiRBjQiHB+hkCvQh9EWgRDcQgqDphXD7QnPQ/tyL8QuNMB3VHaI88IsQDThWDHhagEBYChUWQhbAagtBTQgsBTAaBbQAbBaBTAtQBTAuBbgbQBagbAthTQAuhSgbhbQgchbhSgtQg0gcg3AAQghAAgiAKgEBP6hcSQhYAagtBRQgrBSAaBYQAaBZBRAsQBRAsBZgaQBYgaAshRQAthSgbhYQgahZhRgsQgzgbg2AAQggAAghAJg");
	this.shape_128.setTransform(951.7789,875.2201);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("ACuF4QgygdgNg4QgOg4AegxQAdgxA4gOQA4gOAxAeQAxAeAOA4QANA3gdAxQgdAyg5ANQgRAFgRAAQglAAghgVgAlCifQgsgbgNgzQgNg0AbgtQAbgsA0gOQAzgMAtAbQAuAbAMAzQANA0gcAtQgaAtg0ANQgQAEgQAAQgiAAgfgTg");
	this.shape_129.setTransform(1526.2141,303.6641);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("ACAHMQhRgwgWhcQgXhcAxhRQAxhRBcgWQBbgXBRAxQBRAxAXBcQAWBcgxBQQgwBRhcAXQgdAHgcAAQg8AAg4gigAD/B8Qg4ANgdAyQgeAwAOA4QANA5AyAdQAxAdA3gNQA5gOAdgxQAdgxgNg4QgOg4gxgdQgigVgkAAQgRAAgSAFgAluhOQhPgvgWhbQgWhZAvhPQAwhQBagVQBagXBPAwQBPAwAWBaQAWBZgwBPQgwBPhZAXQgcAGgbAAQg8AAg2gggAjzmHQg0ANgbAsQgbAuANAzQANA0AsAbQAuAbAzgNQA0gNAagtQAcgsgNg0QgMg0gugbQgegSgiAAQgQAAgQAEg");
	this.shape_130.setTransform(1521.9174,303.6424);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#0E6D00").s().p("EhxmBO5QHyhWHBh5IAkgKQUllnOQqPQS+toG/18QBHjaC3j0QCtjyDqj6QDhj3DpjtQDfjoC0jOIBfhzQGDmyHXj1QHHkNGxjeIAggSQDjiDC+h0QDIhzDchjQJUkDKQg8QHSgrEvj4QFfjUHbjGQDFg+CBg7QCRhDCrh0IAXgPQDiiXD6iRIgTgTQgwhdgShaIgGgdQhVoWO9mGQDFhZChg3QSPmIqIV+QhMDchkCfQlJITpDiLIhXAWQkDCJkLDkQkIDFj8BrQj+BPjmBrQnhDdojFbQoTE8nyEAQlKCalBDhIjECJQhzBOhaAxQiKBCiLBNIgtAZQlIC5lGDMQlEDZk0E6QhwB4hHB7IirENIAAADIgfAqQhfCNhlBxQigDFieBEQiZBkh2CeQiZEEgbDWQg5DhhpDzUgRQAgogyeACtI+MBQQDhggDYglgEBoyg9yQhcAWgxBRQgxBRAXBcQAWBbBRAxQBRAxBcgXQBcgWAwhRQAxhQgWhdQgXhbhRgxQg3ghg8AAQgcAAgdAHgEBhBhGFQhaAWgwBPQgvBQAWBZQAWBaBPAvQBPAwBagWQBZgWAwhPQAwhPgWhaQgWhahPgwQg2ggg6AAQgcAAgdAHg");
	this.shape_131.setTransform(870.5426,703.5506);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("ACcGAQgwgggLg4QgLg4AggwQAggvA4gMQA5gLAvAgQAwAfALA5QALA5ggAvQgfAwg5ALQgPADgOAAQgoAAgjgYgAk6itQgsgdgKg0QgLg1AegrQAdgsA0gKQA0gLAsAeQArAdALA0QAKA0gdAsQgdArg0ALQgOADgNAAQglAAgggWg");
	this.shape_132.setTransform(1552.3142,275.7142);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("ABrHSQhPg1gShcQgRhdAzhPQA0hOBdgSQBdgTBOA0QBPA1ASBdQATBdg1BOQg0BPhdASQgYAFgYAAQhBAAg6gngAD5CHQg4AMggAvQggAwALA4QALA4AwAgQAvAgA5gLQA5gLAfgwQAggvgLg5QgLg5gwgfQgjgYgoAAQgOAAgPADgAlqhfQhNgzgShbQgShaAzhNQAzhNBcgSQBagSBNAzQBMAzATBbQASBbg0BMQgzBOhaARQgYAFgWAAQhBAAg5gmgAjhmSQg0AKgdAsQgeArALA1QAKA0AsAdQArAdA1gKQA0gLAdgrQAdgsgKg0QgLg0grgdQgggWglAAQgNAAgOADg");
	this.shape_133.setTransform(1548.0159,275.5176);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#0E6D00").s().p("EhlTA3HIq4iTIuMjAIkgg9QDiAaDbARQH2AnHSgGIAlAAQVVgXQWmZQK4kQHKnHQHTnMEWqnQCel3KAowQEPjsEajTQERjNDgiVIB5hTQHfkuJKgCQIvgxH1geIAkgGQECgnDLgzQDXgtDsgbQKIg3KBCWQHIBrEjjxQFWizHmihQDLgmB5grQCLgyCuhsIAXgOQDpiNEAiFIgSgUQgshfgOhaIgEgeQg9oZPOlaQDJhQCjgvQSflTrHVfQhWDYhrCbQlhIDo8ilIhXARQkKB+kfDiQkZC/kHBTQkFAwjyBPQn3Cjp9D+QpfDaovBgQlqAol3BxQhMAXi6AvQigAnhtAMQiaAEieANIgzAFQl2AjlrAFQltAjlzDBQiKBSgpBrQg/BrhhCDIAAADIglAmQhxB/h0BhQi5CtioAkQilBGiFCNQi0DvglDQQhFDYh6DqQp+PizoE5QplCirHAAQq8AAsbidgEBykgn4QhdATg1BOQg0BOATBdQASBdBOA0QBPA1BdgTQBcgSA1hPQA1hOgThdQgShdhPg0Qg6gmhCAAQgXAAgYAEgEBrMgwhQhbASgzBNQgzBNASBbQASBaBMAzQBOA0BagSQBbgSAzhNQAzhMgShbQgShbhNgzQg5gmhAAAQgXAAgXAEg");
	this.shape_134.setTransform(833.7918,536.0606);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("ACcGAQgvgggMg4QgLg4AggwQAggvA4gMQA5gLAvAfQAwAhALA4QAMA4ggAwQggAvg5AMQgPADgOAAQgoAAgjgYgAk7itQgqgdgLg0QgLg0AdgsQAegrA0gLQA0gKArAdQAsAdALA0QAKA1geArQgcAsg0AKQgOADgNAAQglAAghgWg");
	this.shape_135.setTransform(1552.3375,275.7375);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("ABrHSQhOg1gThcQgRhcAzhQQA0hOBdgSQBdgTBOA0QBPA1ATBcQASBdg1BOQgzBPhdATQgZAFgXAAQhCAAg6gngAD5CHQg4AMggAvQggAwALA4QAMA4AvAgQAwAgA4gLQA5gMAggvQAggwgMg4QgLg4gwghQgjgXgoAAQgOAAgPADgAlqhfQhNgzgShaQgShbAzhNQAzhNBbgSQBagSBNAzQBNAzASBbQASBbgzBNQgzBMhbATQgXAEgWAAQhBAAg5gmgAjhmSQg0ALgeArQgdAsALA0QALA0AqAdQAsAeA1gLQA0gKAcgsQAegrgKg1QgLg0gsgdQgggWgkAAQgNAAgOADg");
	this.shape_136.setTransform(1548.0086,275.5409);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0E6D00").s().p("EhAbAxBQzqgc2trpI6suLQDTBXDMBNQHZCwHBB7IAkAKQUmFjRehpQLohFI2k3QJAk6HHpAQEfllIbnKQHwmmHdk6IB6hQQHhkkJfAAQI+gpIAAGIAmgCQEFgQDfgSQDngODwAKQKKAkJlDvQDaBVCggsQCogjCZhrIFZjSQDBhoEFg/QDKgoB6gsQCNg0CuhsIAXgOQDqiND/iFIgSgVQgshfgOhaIgEgeQg+oZPOlbQDJhRCjguQSelVrFVgQhWDYhqCcQlhIDo8ikIhYARQkJB+keDhQkXC/kGBUQkFAzjwBSQn2CpqeDrQp3DCo6AYQltgKmDA6IjqAjQiJAShmAEQiZgCifAIIgzADQl4AUlogQQltARl2C2QiJBPgjBrQg6BrhfCEIAAADIglAlQhyB/hzBiQi5CtioBXQioBrieCMQjcDciLDFQigDGjEC8QtGLgyyAAQhGAAhHgCgEB1MgfVQhdASg1BOQgzBQASBcQASBcBPA1QBOA1BdgTQBdgTA0hPQA0hOgShdQgShchPg1Qg6gmhCAAQgXAAgYAFgEBt0gn+QhcASgzBNQgzBNATBbQARBaBNAzQBOA0BagSQBagTAzhMQA0hNgThbQgShbhMgzQg5gmhAAAQgXAAgXAFg");
	this.shape_137.setTransform(816.9996,481.4482);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("ACdGAQgwgggLg4QgLg4AfgwQAggvA4gMQA5gLAvAfQAwAgALA4QAMA5ggAvQggAwg4ALQgPADgOAAQgoAAgjgXgAk7isQgrgdgLg0QgKg1AdgrQAdgsA0gKQA0gLAsAdQAsAeAKAzQALA1geArQgcAsg1ALQgNACgOAAQglAAgggVg");
	this.shape_138.setTransform(1552.3125,275.7375);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("ABsHSQhPg1gShcQgShcAzhQQA0hOBdgTQBdgSBOA0QBPA0ATBdQATBdg1BOQg1BPhcATQgYAEgXAAQhCAAg6gmgAD5CHQg4AMggAvQgfAwALA4QALA4AwAgQAwAgA4gMQA4gLAggwQAggvgMg5QgLg4gwggQgjgXgoAAQgOAAgPADgAlrheQhMgzgShbQgShaAyhNQAzhNBbgSQBbgSBNAzQBMAzATBbQATBag0BNQgzBNhbASQgXAFgXAAQhAAAg6gmgAjimRQg0AKgdAsQgdArAKA1QALA0ArAdQAsAdA0gKQA1gLAcgsQAegrgLg1QgKgzgsgeQgggVglAAQgNAAgOADg");
	this.shape_139.setTransform(1548.0142,275.5466);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0E6D00").s().p("EhIgAnOQyyl2ymxdIn/nuItwtQQCzCNCvCDQGWErGNDyIAgATQSQLBRQDQQLeCLJ2iPQKAiPJUmrQF3kIG9muQG0mDG+k2IB7hNQHlkZJyAEQJQgfIIAsIAlABQIQAPHHBMQJ9B/I+FEQDMBzCTgpQCageCNh2IFHjqQC6hzEFhDQDKgrB7guQCOg1CuhtIAXgOQDpiNEAiFIgSgVQgthfgOhaIgEgeQg+oZPNlcQDJhRCjgvQSflVrEVgQhWDYhqCcQlhIEo8ikIhYASQkJB+kcDfQkWC/kFBWQkEA2jvBVQnzCuq7DTQqNCoo7gvQlng+mHADIjLAFQhwAChdgCQiZgIifABIgzABQl4AGlmglQlrgBl2CrQiLBMgcBsQg2BqhdCFIAAADIglAlQhyB/hzBiQlzFalnDtQn4F9ngD3QpTEZqGAAQoBAAohiygEBzVgYSQhdATg0BOQg0BQATBcQASBcBPA1QBOA0BdgSQBcgTA1hPQA1hOgThdQgThdhPg0Qg6gmhCAAQgXAAgYAEgEBr8gg5QhbASgzBNQgyBNASBaQASBbBMAzQBOAzBagSQBbgSAzhNQA0hNgThaQgThbhMgzQg5gmhAAAQgXAAgYAFg");
	this.shape_140.setTransform(828.8442,436.2306);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("ACeGAQgwgggMg4QgLg4AggwQAfgwA5gLQA5gLAvAfQAwAgALA4QAMA5ggAvQggAwg4ALQgQADgOAAQgoAAgigXgAk7isQgqgdgMg0QgKg0AdgsQAdgrA0gLQA0gLAsAdQAsAeAKA0QALA0geArQgcAtg0AKQgOACgOAAQglAAgggVg");
	this.shape_141.setTransform(1552.2991,275.7375);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("ABsHRQhOg0gThcQgRhdAzhPQA0hOBdgTQBdgTBOA0QBPA1ASBcQATBdg0BOQg1BPhcATQgZAFgXAAQhCAAg6gngAD6CGQg5ALgfAwQggAwALA4QAMA5AwAfQAvAgA5gLQA4gMAggvQAggwgMg4QgLg4gwghQgjgXgoAAQgOAAgPADgAlqheQhNgzgShbQgShaAyhNQAzhNBbgSQBbgSBNAyQBMAzATBbQASBagzBOQgzBMhaATQgZAFgXAAQhAAAg4gmgAjimSQg0ALgdAsQgdArAKA1QAMA0AqAdQAsAdA1gLQA0gKAcgsQAegsgLg0QgKg0gsgdQgggVglAAQgNAAgOACg");
	this.shape_142.setTransform(1547.991,275.566);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#0E6D00").s().p("EhQzAbDQwcqztE16IljpnIpkwjQCFC5CECuQE0GQE7FXIAZAbQOhPnPrH4QKcFQKFAlQKOAnKzj2QGxiXFZmtQFxl0Gfk6IB8hLQHokOKKALQJigTIMBTIAlAEQIMA/HSCiQJmDYIKGQQC6CPCEgpQCMgbCDiCQCKh0CuiNQC0h/EEhJQDJgtB9gvQCPg3CvhtIAXgOQDpiNEAiGIgSgUQgshfgPhaIgEgeQg/oZPNldQDJhRCigvQSflYrDViQhWDZhqCbQlfIEo9ijIhXARQkJB/kaDeQkVC9kEBZQkEA5juBXQnxC1rUC3QqcCMoyh3QlbhwmEg0QidgViygOQiZgOiegFIg0gBQl4gJlig6QlpgTl2CgQiMBJgWBtQgxBqhcCFIAAADIgkAlQhyCAhzBhQi6CtjPC0QjLCqjMB4QkTCZk+BdQk0BeklAtQjyAnjuAAQuMAAtSo+gEBtKgSSQhdATg0BOQg0BPASBdQATBcBOA0QBPA1BdgTQBcgTA1hPQA0hOgThdQgShchPg1Qg6gmhCAAQgXAAgYAFgEBlwga5QhbASgzBNQgyBNASBaQASBbBNAzQBNA0BbgTQBagTAzhMQAzhOgShaQgThbhMgzQg5glhAAAQgXAAgYAFg");
	this.shape_143.setTransform(868.3985,397.8947);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#0E6D00").s().p("Eg3vApEQo+gXpRklQpIkdopn3QohnunRqWIw/4+QCRCvCSCkQFPF5FUE+IAbAZQPoOhQNGtQKzEeIXhdQIvhcImnXQFjkiFKoSQFVnXF/llIBwhWQG6k6KngFQJygpIaA8IAmACQIOAeHQBvQJ2CiIqFjQDGB+CfgVQClgKCihaIFsirQDLhREMgcQDOgOBigaQB8glCnhsIAXgOQDpiND/iHIgSgVQgshegQhbIgEgeQhAoYPLlgQDJhSCjgwQSdlaq+VjQhVDZhqCcQleIFo9ihIhXASQkJB/kzD2QknDKkPA7QkJARj5AxQoIBkrCCBQqUBeo2hUQljhRmHgSQifgIjXgEQiagIieAAIgzABQl5ADlghLQligclZC4Qh/BWAbBvQgIByg5CVIABAEIgdArQhXCTheB2QkqGblJFQQnBG8oBEbQnPEFoGAAQg6AAg5gDgEBsSgXWQhcATg0BOQg0BQATBcQATBdBOAzQBPA1BdgUQBdgTAzhPQA1hOgThdQgThchPg1Qg6glhBAAQgYAAgZAFgEBk3gf8QhbATgyBMQgzBOATBaQASBbBNAzQBOAzBagTQBagTAzhNQAzhNgShaQgUhbhMgzQg4glhAAAQgYAAgYAFg");
	this.shape_144.setTransform(930.7473,380.5062);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("ACeF/QgwgfgLg5QgLg4AfgwQAfgwA5gLQA4gLAwAfQAwAfALA5QAMA4ggAwQgfAwg5ALQgOADgPAAQgnAAgkgXgAk8irQgrgdgLg0QgLg0AdgsQAegsAzgKQA1gLArAdQAsAdALA0QAKA0gdAsQgcArg0ALQgOADgNAAQglAAghgVg");
	this.shape_145.setTransform(1609.1025,226.0275);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("ABtHRQhOg0gThdQgShcAzhPQA0hPBcgTQBdgSBPAzQBPA0ATBdQATBcg1BPQgzBPhdATQgZAFgYAAQhBAAg6gmgAD6CFQg5AMgfAwQgfAwALA4QALA4AwAgQAwAfA4gLQA5gMAfgwQAggvgMg5QgLg4gwggQgjgXgoAAQgOAAgPADgAlrhdQhNgzgShaQgThaAzhOQAyhNBbgSQBbgTBNAzQBMAyAUBbQASBagzBOQgzBMhaATQgYAFgYAAQg/AAg5glgAjkmRQgzALgeArQgdAsALA1QALA0ArAcQAsAdA1gKQA0gLAcgsQAdgrgKg1QgLgzgsgeQgfgVgkAAQgOAAgPADg");
	this.shape_146.setTransform(1604.8044,225.8661);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("ACfF+QgvgegMg5QgMg4AfgwQAggwA4gMQA5gLAvAfQAwAfAMA4QAMA5ggAvQgfAwg4AMQgPAEgPAAQgoAAgjgYgAk8iqQgsgdgLg0QgKg0AcgsQAegsAzgLQA0gLAsAdQAsAdALA0QALA0gdAsQgdAsg0ALQgOADgOAAQgkAAgggVg");
	this.shape_147.setTransform(1665.9124,176.3025);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("ABvHRQhOg0gUhcQgRhcAyhQQA0hPBcgTQBdgTBOAzQBPA0AUBdQATBcg0BPQgzBPhdATQgZAFgYAAQhBAAg6glgAD7CFQg5AMgfAwQggAwAMA4QANA5AvAeQAvAgA5gMQA4gMAggwQAfgvgLg5QgMg4gwgfQgjgXgoAAQgPAAgOADgAlrhbQhNgzgThaQgShbAyhNQAyhNBbgTQBagTBOAyQBNAzATBbQATBagzBNQgzBOhaASQgZAFgYAAQg+AAg5gkgAjkmQQg0ALgdAsQgdAsALA0QALA0ArAdQAsAdA1gLQA0gLAcgsQAegsgMg0QgKg0gtgdQgfgVgkAAQgOAAgOADg");
	this.shape_148.setTransform(1661.5911,176.1411);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#0E6D00").s().p("EhA8AquQp1jRpznHQpkm9oHp0Iyx3qQCeCkCdCZQFqFeFqEkIAdAXQQpNWQqFgQLGDrGLirQGwizFUp3QB0jFCCkWIESo1QCPkgCekGQCej9CtitIBhhfQFOkrL7hPQFAghE6ABQEzgDD6ACIAmAAQIOgBHIA9QKCBqJHEyQDQBsC3AAQC6AJC7guQC/gmDXgpQDcggEMARQDOATBFgLQBmgVCfhsIAXgOQDoiPD/iHIgSgVQgthegPhaIgEgeQhDoYPLlkQDJhSCigwQSdleq7VlQhUDZhpCcQlcIHo+igIhYASQkICBlOEJQk7DTkVAdQkJgaj+AKQoQATqlBLQqAAxo0gwQlpgymHAQIjMALQhxAGheAAQiZgEifAFIgzADQl4AQlkhgQligkk2DLQhxBhBKBoQAjBugUCfIABADIgUAwQg5ChhGCGQjUHOjuFYQk5IllDGhQl/HBo4BOQieAZimAAQmcAAnLicgEBo0gbXQhcATg0BPQgzBQASBcQAUBcBOA0QBQA0BcgUQBdgTAzhPQA0hPgThcQgUhdhPg0Qg5glhAAAQgYAAgaAFgEBhXgj7QhbATgyBNQgyBNASBbQATBaBNAzQBOAzBagUQBagSAzhOQAzhNgThaQgThbhNgzQg5gkg/AAQgXAAgZAFg");
	this.shape_149.setTransform(1009.758,356.4341);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AChF+QgwgfgMg4QgMg4AfgxQAfgwA5gLQA4gMAwAfQAwAfAMA4QAMA5ggAwQgeAwg5ALQgQAEgPAAQgnAAgigXgAk9ipQgrgdgLg0QgLgzAcgtQAdgrA0gMQA0gLAsAdQAsAdALA0QALA0gdArQgcAtg0ALQgPADgOAAQgkAAgggVg");
	this.shape_150.setTransform(1722.7104,126.5643);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("ABxHQQhPgzgUhcQgShdAyhPQAzhPBdgUQBdgTBPAzQBPAzAUBdQATBdg0BPQgzBPhcATQgaAGgYAAQhAAAg6gmgAD7CEQg4AMgfAwQggAwAMA4QAMA4AwAgQAwAfA4gMQA5gMAfgwQAfgwgMg4QgMg4gwggQgigWgnAAQgPAAgQADgAlrhaQhNgygThbQgUhaAzhOQAyhNBbgTQBagUBNAzQBOAyATBbQATBagyBNQgyBOhbATQgZAFgYAAQg/AAg4gkgAjmmPQgzALgeAsQgcAsALA0QALA0AsAcQAsAeA0gMQA1gLAbgsQAegsgMg0QgKgzgtgeQgfgUgkAAQgOAAgPADg");
	this.shape_151.setTransform(1718.3943,126.4212);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#0E6D00").s().p("Eg2eAunQqOh8q2mFQqel7o6pMIxWy2IjIjZQCrCYCnCMQGEFEF+EJIAeAVQRlMFRBERQLVC2D0i+QEijUBYrFQB4qLCqo3QDysrEBk0IBShkQEbk/MOhyQFGgwFEgOQE5gTD7gMIAmgDQIMggG8AMQKJAzJfD+QGxC0GNgnQGiAKH+BXQDIAyAmABQBNgICYhuIAXgOQDoiPD+iJIgSgUQgthfgQhaIgEgeQhEoYPJlmQDJhTCigxQScliq3VoQhTDZhpCdQlbIIo+ifIhXATQkICBlsEYQlRDakWgDQkBhCj9geQoNhAp6AVQpfAFougKQlsgSmEAxIjdAdQh+AQhiAFQiaABieALIgzADQi8AOi8gmQi7gdi0gfQiygXihAaQifAiiFCFQhhBoB4BXQBLBkATChIABADIgKAzQgYCogrCRQg8D3hVCzQhODBg+DPQhMEwgoD6Qg1EEhYEEQjNIqoLCxQkjBtlfAAQj8AAkbg4gEBjOgdqQhdAUgzBPQgzBPATBdQAUBcBPAzQBQA0BcgUQBcgTAzhPQA0hPgThdQgUhdhPgzQg5glhBAAQgYAAgaAFgEBbwgmMQhbATgyBNQgzBOAUBaQATBbBNAyQBOAyBagTQBbgTAyhOQAyhNgThaQgThbhOgyQg4glg+AAQgYAAgZAGg");
	this.shape_152.setTransform(1102.3656,321.3285);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("ACiF9QgwgegMg5QgMg4AfgwQAfgwA4gMQA5gMAvAfQAwAfANA4QAMA5gfAvQggAwg4AMQgQAEgPAAQgnAAgigXgAk9ioQgsgdgLg0QgLgzAcgtQAdgsA0gLQA0gLArAcQAtAdALA0QAMA0geAsQgbAsg1ALQgPAEgOAAQgkAAgfgVg");
	this.shape_153.setTransform(1779.5123,76.8596);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AByHQQhPgzgUhdQgThcAyhPQAzhQBdgTQBdgUBOAzQBQAzAUBdQAUBcg0BPQgzBPhcAUQgaAGgZAAQhAAAg5glgAD7CDQg4AMgfAwQgfAxAMA4QAMA4AwAfQAwAgA4gNQA4gMAggwQAfgwgMg5QgNg4gwgfQgigWgnAAQgPAAgQADgAlshZQhOgygThbQgShaAxhOQAyhNBbgUQBagSBNAxQBOAyAUBbQATBagyBNQgyBOhbATQgZAGgYAAQg/AAg4gkgAjnmPQg0AMgdAsQgcAsALA0QALA0AsAcQAsAdA0gLQA1gLAbgtQAegsgMg0QgLg0gtgcQgfgVgkAAQgOAAgOADg");
	this.shape_154.setTransform(1775.2113,76.7363);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#0E6D00").s().p("EgraAvsQqTgkrqkzQrLkuproeIoGnnIqlp7IjXjJQC1CLCxCAQGZEmGSDsIAfATQSbKwRSDBQLhCABniYQCZi+iwq3QgmjhADlsQAClcAqmMQAql9BSlVQBRlGB3jDIBDhoQCIjCEYhxQENh1FVg8QFKhAFLggII6g+IAlgFQEEgfDbggQDkgdDxgGQKKgGJzDJQG/COGwBHQG7BiHtC+QC+BRAFAHQAzAACRhxIAWgOQDoiQD+iJIgTgUQgthfgQhaIgEgeQhGoXPIlpQDJhUCigxQSallqyVpQhSDZhpCdQlZIJo/icIhXASQiEBBitB7QipBxi4B3Qi0BvinBAQijA3h8grQj0hpj0hGQn9iQpDgcQo0glojAbQlrANl/BTIjsAyQiLAbhlAJQibAHicAQIgzAFQi7AUjDgoQjBgfi4gkQi2gbicAXQiaAhhvCKQhQBsChA8QBwBRA5CcIACADIAAA0QAJCqgOCWQgLD9hCCqQgyC6gKDQQAJE0A7DhQAuDzANENQgDJOnFEBQluDio2AAQhYAAhdgFgEBcJgd6QhdATgzBQQgzBPAUBcQAUBdBOAzQBQA0BcgVQBdgUAzhPQA0hPgVhcQgUhdhPgzQg5glg/AAQgZAAgaAGgEBUogmcQhaAUgzBNQgxBOATBaQATBbBOAyQBOAyBagUQBagTAyhOQAyhNgThaQgUhbhNgyQg4gkg/AAQgYAAgZAFg");
	this.shape_155.setTransform(1204.5652,273.2292);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("ACjF+QgwgggNg4QgMg4AfgwQAggwA4gMQA4gNAwAgQAxAfALA4QAMA4gfAwQgeAwg5AMQgRAEgPAAQgnAAghgWgAk9ioQgrgcgMg0QgLg0AcgsQAdgsA0gMQA0gLArAdQAtAcALA0QAMA0gdAsQgdAtgzALQgPADgPAAQgjAAgggVg");
	this.shape_156.setTransform(1795.4893,67.5367);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("ABzHQQhQg0gThcQgThcAyhQQAzhPBdgUQBcgUBPAzQBPAzAVBdQATBcgzBPQgzBQhcAUQgbAGgZAAQg/AAg5glgAD8CDQg4AMggAwQgfAwAMA4QANA4AwAgQAvAfA5gNQA5gMAegwQAfgwgMg4QgLg4gxgfQgigXgnAAQgPAAgQAEgAlrhZQhOgygThaQgUhbAyhOQAyhNBbgTQBagUBNAyQBOAyAUBaQATBagyBOQgyBOhaATQgaAGgYAAQg+AAg4gkgAjnmPQg0AMgdAsQgcAsALA0QAMA0ArAcQAsAdA1gLQAzgLAdgtQAdgsgMg0QgLg0gtgcQgfgVgkAAQgOAAgOADg");
	this.shape_157.setTransform(1791.1941,67.4163);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#0E6D00").s().p("EhAUAs0QrkjjqlnQIo+mkIvcrQQDEB0DABpQG6DyGsC5IAiAPQTmIaRhA4QLrAkCNjMQC6jwicq6QgijjAKlsQAJldAymNQAyl+BYlTQBYlEB7i/IBGhkQCMi9EchlQEPhpFYgtQFLgyFNgTQFBgXD6gVIAlgEQEEgZDXgfQDhgaDwgEQKKAAJyDOQG9CSGvBHQG6BiHsC/QC9BSAFAHQAyABCRhyIAWgOQDoiQD9iKIgSgUQgthegQhaIgFgeQhGoYPIlqQDIhUCigxQSalmqwVqQhTDZhoCdQlZIJo+ibIhXASQiEBCiuB6QipByi4B3Qi0BvinBAQijA3h8grQj0hrj0hFQn9iSpEgfQo1goojAXQlsAKmABPQmKBQhoAAQiaAAieAKIgzADQi7ANjCgxQjAgoi3gtQi1gkidAQQiaAZhzCGQhSBpCkA/QBxBTA4CdIACACIgBA0QAFCrgQCVQgQD9hECpQg1C6gODPQADE1A3DiQAqDzAHEOQgOJOnBEnQmmEqq0AWQhEADhEAAQpeAAqyjQgEBeygeMQhdAUgzBPQgyBQATBcQAUBcBPA0QBQAzBcgUQBcgUA0hQQAzhPgUhcQgUhdhQgzQg4glhAAAQgZAAgaAGgEBXRgmsQhaATgzBNQgxBOATBbQATBaBOAyQBOAyBagUQBbgTAxhOQAzhOgUhaQgUhahNgyQg4gkg+AAQgYAAgaAGg");
	this.shape_158.setTransform(1203.6368,265.6479);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("ACjF9QgwgfgNg4QgMg4AfgwQAfgxA4gMQA5gMAwAfQAwAfAMA4QANA5ggAvQgeAxg5AMQgQAEgQAAQgmAAgigXgAk+ioQgrgcgMg0QgLg0AcgsQAdgsA0gMQA0gLAsAcQAsAeALAzQAMA0gdAsQgcAsg0AMQgPADgOAAQgjAAghgVg");
	this.shape_159.setTransform(1811.5098,58.2098);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("ABzHQQhPgzgUhdQgThcAyhPQAzhQBdgUQBcgUBPAzQBPAzAVBdQAUBcg0BPQgzBQhcAUQgaAFgZAAQhAAAg5gkgAD8CDQg4AMgfAwQgfAwAMA4QAMA4AwAgQAwAfA5gNQA4gLAfgxQAfgwgNg4QgMg4gwggQgigWgnAAQgPAAgQAEgAlshZQhNgxgUhbQgThaAxhOQAzhOBagTQBagTBOAxQBOAyATBbQAUBagyBNQgyBOhaAUQgaAFgYAAQg+AAg5gkgAjomOQg0AMgcArQgcAsALA1QALAzAsAdQAtAdAzgMQA1gLAbgtQAdgrgLg1QgLgzgtgdQgfgVgkAAQgOAAgPAEg");
	this.shape_160.setTransform(1807.1893,58.0913);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#0E6D00").s().p("Eg/TAvDQrziWrWl7IpulaIwtpSQDRBbDMBRQHVC6G/CDIAjAKQUfF9RfhTQLqg3CukDQDTkmiHq9QgejjARluQAQleA6mNQA5l+BglSQBelCCAi6IBIhhQCRi3EehYQESheFZgfQFNgkFNgGQFBgLD7gOIAkgDQEFgSDSgeQDegYDvgDQKKAGJwDUQG7CVGvBHQG5BkHrC/QC9BSAEAHQAyABCQhxIAWgOQDniRD+iKIgSgUQguhegQhaIgEgeQhHoYPIlqQDHhVCjgxQSZloqvVrQhSDZhoCdQlYIKo/ibIhXATQiEBBiuB7QipByi4B4Qi0BuioBAQijA4h8gsQjzhrj0hGQn8iTpGgiQo2grojATQltAGmABMQmRBNh3gFQiagGieADIgzACQi7AFjCg7Qi/gwi2g2QizgsidAIQiaATh2CAQhUBmCmBCQBzBVA2CeIACADIgCA0QACCqgTCWQgUD8hHCnQg4C6gRDPQgDE0AzDkQAlD1ACENQgZJNm5FMQmhFOqtBVQjwAgkAAAQnAAAnwhhgEBgygesQhdAUgzBQQgzBPAUBcQAUBdBPAzQBQAzBcgUQBcgUAzhQQA0hPgUhcQgVhdhPgzQg4gkhAAAQgZAAgaAFgEBZQgnMQhaATgzBOQgxBOATBaQAUBbBNAxQBPAyBagTQBagUAyhOQAyhNgUhaQgThbhOgyQg4gjg+AAQgYAAgaAFg");
	this.shape_161.setTransform(1206.8567,259.4616);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("ACkF9QgxgegMg5QgMg5AfgvQAfgxA4gMQA4gMAwAfQAwAfANA4QAMA5gfAvQgfAwg4ANQgRADgPAAQgmAAgigWgAk9inQgsgcgMg0QgLg0AcgtQAdgrA0gMQA0gLAsAcQAsAcAMA0QALA0gdAsQgbAtg1ALQgPADgOAAQgkAAgfgUg");
	this.shape_162.setTransform(1827.4893,48.8848);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AB0HPQhQgzgUhcQgThcAyhQQAzhPBdgUQBcgUBPAyQBQAzAUBdQAUBdgzBPQgzBPhcAUQgbAGgZAAQg/AAg5glgAD8CCQg4AMgfAxQgfAvAMA5QAMA5AxAeQAwAgA4gNQA4gNAfgwQAfgvgMg5QgNg4gwgfQgigWgnAAQgPAAgQADgAlshYQhNgygUhaQgThaAxhPQAyhNBbgTQBagUBNAxQBOAyAUBaQAUBbgyBNQgyBOhaAUQgaAGgZAAQg+AAg4gkgAjomOQg0AMgdArQgcAtALA0QAMA0AsAcQAsAdA0gMQA1gLAbgtQAdgsgLg0QgMg0gsgcQgggUgkAAQgOAAgOADg");
	this.shape_163.setTransform(1823.1913,48.7893);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#0E6D00").s().p("Eg+WAw8Qr4hHr8khI8BrVQDbBBDTA3QHpB/HLBLIAlAGQVDDZRNjcQLdiTDIk8QDolchzrCQgZjkAXluQAXlfBCmNQBCl+BmlQQBllACEi1IBKhfQCUixEhhLQEUhSFagQQFOgWFNAHQFBAAD6gHIAlgCQEFgMDOgcQDbgXDtgCQKLANJtDZQG6CaGtBHQG4BkHqDAQC+BSACAIQAyABCQhyIAWgOQDniRD+iKIgSgUQgvhfgPhZIgFgeQhHoYPHlsQDIhUCigyQSZloqtVrQhTDZhnCdQlYIKo/iaIhXATQiDBBiuB7QiqBzi4B3Qi0BvioBAQijA4h8gsQjzhsj0hHQn7iUpIglQo3gtokAOQlsACmBBJQhOAOi/AcQijAWhuAAQiZgNifgDIgzgBQi8gCi+hEQi+g5i0g+Qiyg1idABQiaALh4B8QhXBiCpBGQB0BXA0CfIACADIgCA0QgBCqgWCWQgYD9hKClQg7C4gVDPQgIE0AuDlQAgD2gCENQgkJNmtFvQmXFvqeCTQm0BjnvAAQjzAAkBgYgEBiHgfbQhdAUgzBPQgyBQAUBcQAUBcBPAzQBQA0BcgVQBcgUAzhPQA0hPgVhdQgUhdhPgzQg5gkhAAAQgZAAgaAGgEBalgn6QhbATgxBNQgyBPAUBaQAUBaBNAyQBOAyBagUQBagUAyhOQAzhNgVhbQgThahOgyQg4gjg+AAQgYAAgaAGg");
	this.shape_164.setTransform(1214.34,254.8651);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("ACjF9QgwgfgMg4QgMg4AegxQAfgwA4gMQA5gNAwAfQAxAfALA4QANA5gfAwQgfAwg4AMQgQAEgQAAQgmAAgjgWgAk+inQgsgcgLg0QgLg0AbgtQAegrAzgMQA0gLAsAcQAsAcAMA0QALA0gdAsQgbAtg1ALQgOADgOAAQgkAAgggUg");
	this.shape_165.setTransform(1843.5077,39.5827);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AB0HPQhPgzgUhcQgThdAxhPQAzhQBdgUQBcgUBPAzQBQAzAUBcQAVBdg0BPQgzBPhcAVQgaAGgaAAQg/AAg5glgAD8CCQg4AMgfAwQgfAxAMA4QANA4AwAfQAwAfA4gNQA5gMAegwQAggwgNg5QgMg4gxgfQgigWgmAAQgQAAgQAEgAlshYQhOgygThaQgUhaAyhOQAxhOBbgTQBagUBOAxQBOAzAUBZQATBagyBOQgxBOhaAUQgbAGgZAAQg9AAg4gkgAjpmOQgzAMgdArQgcAtALA0QAMA0AsAcQAsAdA0gMQA0gLAcgtQAdgsgMg0QgLg0gtgcQgfgUgkAAQgOAAgPADg");
	this.shape_166.setTransform(1839.1913,39.4663);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#0E6D00").s().p("EhVoAvcIqui4IuBjvIkdhMQDhAlDZAdQH0BCHSASIAkACQVVAxQplhQLFjsDdl3QD1mThfrHQgWjkAglwQAdlfBLmNQBJl+BtlOQBrk+CIiwIBMhcQCYirEig/QEWhFFagBQFPgIFNATQFAAND6AAIAlgBQEEgGDKgcQDYgVDsAAQKLASJrDfQG5CeGrBHQG3BkHqDBQC9BTACAHQAxABCPhyIAXgOQDniRD9iKIgSgUQguhfgQhZIgFgeQhIoYPHltQDIhUCigyQSZlqqsVsQhSDahoCdQlWILpAibIhXATQiEBCiuB7QipBzi5B4Qi0BvioBAQijA3h8gsQjzhsjzhIQn7iWpJgnQo4gwokAJQltgBmBBFQhPAOjJAZQirAThxgDQiZgTiegKIgzgCQi8gLi8hMQi8hCiyhHQiwg9icgHQiaAEh7B3QhZBfCtBJQB1BZAyChIACADIgEA0QgDCqgYCWQgdD8hNClQg+C2gZDPQgOE0ArDlQAbD3gIENQgvJMmbGQQmJGPqHDOQp1DOsGAIIg1AAQrbAAr7i8gEBixggeQhcAUgzBPQgzBQAUBdQAUBcBQAzQBQAzBcgVQBcgUAzhQQAzhPgUhcQgVhdhPgzQg5gkhAAAQgZAAgaAGgEBbPgo9QhbAUgyBOQgxBNATBaQAUBbBOAxQBOAzBagVQBagUAyhNQAyhOgUhaQgUhahOgyQg3gjg+AAQgZAAgZAFg");
	this.shape_167.setTransform(1226.145,252.242);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("ACkF9QgwgfgMg4QgNg4AfgxQAfgwA4gMQA5gNAvAfQAxAfAMA4QAMA5geAwQgfAwg4AMQgQADgPAAQgnAAgjgVgAk+inQgrgbgMg1QgLgzAcgsQAcgsA0gMQA0gLAsAcQAtAcALA0QAMA0gdArQgcAtg0ALQgPAEgPAAQgjAAgggVg");
	this.shape_168.setTransform(1859.4893,30.2393);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AB1HPQhQgzgUhcQgUhcAyhQQAzhPBdgUQBcgVBPAzQBQAzAUBcQAVBdgzBPQgzBPhcAVQgbAFgZAAQg/AAg5gkgAD8CCQg4AMgfAwQgfAxANA4QAMA4AwAfQAxAeA4gMQA4gMAfgwQAegwgMg5QgMg4gxgfQgigWgmAAQgQAAgQAEgAlshYQhOgxgThaQgUhaAxhOQAyhOBagUQBbgTBNAxQBOAxAUBbQAUBagyBNQgxBOhbAUQgaAGgZAAQg9AAg4gkgAjpmNQg0AMgcAsQgcAsALAzQAMA1ArAbQAtAdA0gMQA0gLAcgtQAdgrgMg0QgLg0gtgcQgggVgjAAQgPAAgOAEg");
	this.shape_169.setTransform(1855.1811,30.1413);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#0E6D00").s().p("EhU2Ay/I5YjhIkkgpQDkAKDbACQH4AEHQgnIAlgEQVQh2P2niQKjlADpm0QD9nLhMrMQgRjkAnlwQAklgBTmNQBRl+B0lLQByk8CLirIBOhYQCcilEjgyQEXg6FaAOQFOAGFMAgQFAAZD5AGIAlAAQEDABDGgcQDVgUDrABQKLAZJpDkQG3CiGrBHQG1BlHpDBQC9BUABAHQAxABCPhyIAWgOQDniRD9iLIgSgUQguhegQhaIgFgeQhIoWPGlvQDIhUCigyQSZlsqrVtQhSDZhnCeQlXILo/iaIhXATQiEBCiuB7QipBzi5B4Qi1BwinBAQikA3h7gsQjzhtjzhIQn7iXpKgqQo6gzokAEQlsgFmCBCQhPANjUAWQi0AQhygHQiYgZiegQIgzgFQi7gSi6hUQi6hLivhQQiuhGibgOQiZgDh9ByQhbBcCvBNQB2BbAwCiIACADIgEA0QgHCqgbCVQghD8hPCkQhCC2gcDNQgTE0AmDnQAWD3gMENQg6JLmGGuQl3GsppEGQpaEEr0BXQlZAolnAAQmcAAmug1gEBivgh5QhcAUgzBPQgzBQAVBcQAUBcBPAzQBQAzBcgUQBcgVAzhPQAzhPgUhdQgVhchPgzQg4gkg/AAQgaAAgbAGgEBbMgqYQhbAUgxBOQgyBOAUBaQAUBaBOAxQBOAzBagVQBagUAyhOQAxhNgThaQgUhbhOgxQg3gjg+AAQgZAAgaAFg");
	this.shape_170.setTransform(1242.315,252.0086);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AClF8QgxgegMg5QgMg4AegwQAfgwA4gNQA5gMAwAfQAwAfAMA3QANA5gfAwQgfAxg4AMQgQADgPAAQgnAAgigWgAk+inQgsgbgLg0QgMg0AcgsQAdgsA0gMQA0gLArAcQAtAcAMA0QALA0gdArQgbAtg0ALQgQAEgOAAQgkAAgfgVg");
	this.shape_171.setTransform(1875.4871,20.9143);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AB1HPQhQgygUhdQgThcAxhQQAzhQBdgUQBcgVBPAzQBQAzAVBcQAUBdgzBPQgyBQhdAUQgaAGgaAAQg/AAg5gkgAD8CBQg4ANgfAwQgeAwAMA4QAMA5AxAeQAvAfA5gMQA4gMAfgxQAfgwgNg5QgMg3gwgfQgjgWgmAAQgQAAgQADgAlshXQhNgygVhaQgThaAxhOQAxhNBbgVQBbgTBNAxQBOAxAUBbQAUBagyBNQgyBOhaAUQgaAGgZAAQg+AAg3gjgAjpmNQg0AMgdAsQgcAsAMA0QALA0AsAbQAsAdA1gMQA0gLAbgtQAdgrgLg0QgMg0gtgcQgfgUgkAAQgOAAgOADg");
	this.shape_172.setTransform(1871.1893,20.8163);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#0E6D00").s().p("Ehe9A1lIuggOIkngEQDjgTDagZQH1g6HIhfIAjgIQU3kcO0pbQJ3mRDvnwQD9oCg4rSQgNjjAulxQAslhBbmNQBYl9B7lJQB5k5CPimIBPhVQCfifEkglQEYguFZAdQFNAUFLAsQE+AlD5ANIAkABQECAHDDgbQDRgSDrACQKJAeJoDqQG1CmGqBHQG0BlHpDCQC8BUABAIQAvABCPhyIAXgOQDniSD8iLIgSgUQguhegQhaIgFgeQhIoWPFlwQDIhUCigzQSYlsqpVtQhSDahnCdQlWILpAiYIhXATQiDBCiuB7QiqBzi5B5Qi0BvioBAQikA4h7gtQjyhuj0hIQn6iZpLgtQo6g2olAAQltgImCA+QhPANjfASQi7ANh1gLQiXggidgWIgzgGQi5gai4hdQi3hTithZQirhOiagVQiYgLh/BuQhcBYCwBRQB4BdAuCkIACACIgFA0QgKCrgdCUQglD7hTCiQhEC2ggDOQgZEyAhDnQASD4gSENQhFJKlsHIQlgHGpEE6Qo5E4rYCiQrMChsoAAIrHgKgEBiDgj0QhcAUgzBPQgyBRAUBcQAUBcBQAyQBQAzBcgUQBcgVAyhPQA0hQgVhcQgVhchPgzQg4gkg/AAQgaAAgbAGgEBafgsSQhaAUgyBNQgxBPAUBaQAUBZBNAyQBPAyBagUQBagUAyhOQAyhOgVhaQgUhahOgyQg3gjg+AAQgZAAgaAGg");
	this.shape_173.setTransform(1262.7368,254.9626);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AClF8QgwgegNg4QgMg5AegwQAfgwA4gNQA5gMAwAeQAwAfANA4QAMA5gfAwQgeAxg5AMQgQADgPAAQgnAAgigWgAk+imQgsgbgMg0QgLg1AcgsQAcgsA0gMQA0gLAsAcQAtAcALA0QAMA0gdAsQgbAtg1ALQgPAEgOAAQgkAAgfgVg");
	this.shape_174.setTransform(1891.4873,11.5893);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AB2HPQhQgygUhdQgUhcAxhQQAzhPBdgVQBcgVBPAzQBQAzAVBcQAUBdgzBPQgyBQhcAUQgbAGgZAAQg/AAg5gkgAD8CBQg4ANgfAwQgeAwAMA5QANA4AwAeQAwAfA4gMQA5gMAegxQAfgwgMg5QgNg4gwgfQgigWgnAAQgPAAgRAEgAlshXQhOgwgUhbQgUhaAxhOQAyhOBagUQBagUBOAxQBOAyAVBaQATBagxBOQgyBOhaAUQgaAGgZAAQg+AAg3gkgAjqmNQg0AMgcAsQgcAsALA1QAMA0AsAbQAtAdAzgMQA1gLAbgtQAdgsgMg0QgLg0gtgcQgggUgjAAQgOAAgPADg");
	this.shape_175.setTransform(1887.179,11.4913);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#0E6D00").s().p("Ehp5A3/QHqh3G5iXIAigMQUKm+NirLQJBnbDvoqQD3o4glrXQgIjlA1lxQAzlhBjmNQBgl8CClGQCAk2CSigIBRhTQCiiZEjgYQEZghFXArQFMAiFJA5QE8AxD4ATIAkACQEBANC/gbQDOgRDpAEQKKAkJlDvQG0CqGoBHQGzBmHoDCQC9BVAAAIQAvABCPhzIAWgOQDniSD8iLIgSgUQguhegRhaIgEgeQhKoWPGlxQDHhUCigzQSYluqoVuQhRDbhnCdQlVILpBiYIhWATQiEBCiuB8QiqB0i5B4Qi0BwipBAQijA3h7gtQjyhujzhJQn6iapNgwQo7g4olgGQltgLmDA7QhOALjqAOQjDAJh3gPQiVgkicgdIgzgJQi4ghi1hmQi0hciphhQiphWiYgcQiXgSiBBoQheBVCzBVQB5BgAsClIACADIgGAzQgNCrggCTQgpD6hVCiQhIC0gjDNQgfE0AdDnQAND4gWEMQigSSxfLbQwhLO5sDOIrDBNIuaBkIklAgQDfguDVg0gEBgtgnlQhdAUgzBQQgyBQAVBcQAUBcBQAyQBQAzBcgUQBcgUAyhRQAzhPgUhcQgVhdhQgyQg4gkg/AAQgZAAgbAGgEBZIgwDQhaAUgyBOQgxBPAUBaQAUBaBOAxQBOAyBagVQBagUAyhNQAxhOgThaQgVhbhOgxQg4gjg+AAQgYAAgaAFg");
	this.shape_176.setTransform(1287.3819,269.7358);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AClF8QgwgfgNg4QgMg4AfgwQAfgxA3gMQA5gNAwAfQAxAfAMA4QANA4gfAwQgfAwg4ANQgQAEgPAAQgnAAgjgWgAk+imQgsgbgMg0QgMg0AcgtQAdgsA0gMQA0gLAsAcQAsAcAMA0QAMA0gdAsQgcAtg0ALQgPAEgOAAQgkAAgfgVg");
	this.shape_177.setTransform(1907.487,2.2623);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AB2HPQhQgzgUhcQgThcAxhQQAyhQBdgUQBcgVBPAzQBQAyAVBcQAVBdgzBPQgzBQhcAVQgaAGgaAAQg/AAg5gkgAD8CBQg3AMgfAxQgfAwAMA4QANA4AwAfQAxAeA4gMQA4gNAfgwQAfgwgNg4QgMg4gxgfQgigWgnAAQgPAAgRAEgAlshWQhOgygUhaQgUhaAxhOQAxhOBbgUQBagUBOAxQBOAyAUBaQAVBagyBOQgyBOhaAUQgaAGgZAAQg9AAg4gjgAjqmNQg0AMgdAsQgcAtAMA0QAMA0AsAbQAtAdAzgMQA0gLAcgtQAdgsgMg0QgMg0gsgcQgggUgjAAQgOAAgPADg");
	this.shape_178.setTransform(1903.1664,2.1787);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0E6D00").s().p("EhoKA65QHYizGjjMIAhgQQTJpZMEswQQDw9hA2OQgFjlA+lxQA6lhBrmLQBol8CJlDQCFk0CViaIBThQQCliTEjgLQEYgVFVA5QFLAxFGBGQE6A8D2AaIAkADQEAATC6gbQDMgQDoAFQKJAqJjD1QGzCuGnBGQGyBnHnDDQC8BVgBAIQAvABCPhzIAWgOQDmiSD9iLIgSgUQgvhegQhaIgFgeQhKoWPGlyQDHhVCigzQSXluqmVuQhRDahnCeQlVILpAiXIhXATQiDBCivB9QiqBzi5B5Qi1BwioBAQikA3h7gtQjxhvjzhKQn6ibpOgyQo8g8olgKQlsgOmEA3QhPALj0AIQjLAFh5gTQiTgqiagjIgygLQi4gpixhuQixhkilhqQimheiWgkQiWgYiCBjQhfBRC1BZQB6BkAqCmIACADIgHAzQgQCqgiCTQguD6hYCgQhLCzgnDNQgkEzAZDoQAID3gcEMQi1SPvnMqQvFMi4rGLIq0CjIymEZQDXhKDNhNgEBeugrUQhcAVgzBPQgyBRAUBcQAVBbBPAzQBRAzBcgVQBbgVAzhPQAzhQgVhcQgVhchPgzQg4gkg/AAQgaAAgbAGgEBXJgzxQhaAUgyBOQgxBPAUBaQAUBaBOAxQBPAyBagUQBagVAxhOQAyhOgUhaQgVhahOgxQg3gjg+AAQgZAAgaAFg");
	this.shape_179.setTransform(1316.0154,284.2025);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("ACmF8QgxgegMg5QgNg4AfgwQAfgwA3gNQA5gNAwAfQAxAfAMA4QANA4gfAwQgfAwg4ANQgQAEgPAAQgmAAgjgWgAk+ilQgsgbgMg1QgMgzAcgtQAdgsAzgMQA0gLAsAbQAtAdAMAzQALA1gcArQgcAtg0AMQgPADgPAAQgjAAgfgUg");
	this.shape_180.setTransform(1923.4643,-7.0607);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AB2HOQhPgygVhcQgUhcAyhQQAyhQBdgUQBcgUBPAxQBRAzAUBcQAVBcgzBQQgzBPhbAVQgbAGgaAAQg/AAg5gkgAD8CAQg3ANgfAwQgfAxANA4QAMA4AxAfQAwAeA4gMQA4gNAfgwQAfgwgNg5QgMg4gxgfQgigVgmAAQgQAAgRADgAlshWQhOgxgUhaQgUhaAwhPQAyhOBagUQBagUBOAxQBOAxAVBbQAUBagyBOQgwBOhbAUQgaAGgZAAQg+AAg3gjgAjrmNQgzANgdArQgcAtAMA0QAMA0AsAcQAsAcA0gMQA0gLAcgtQAcgsgLg0QgMg0gtgcQgfgUgkAAQgOAAgPADg");
	this.shape_181.setTransform(1919.179,-7.1357);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#0E6D00").s().p("Ehl6A9gQG+jsGHj9IAegUQR3rsKZuIQN3yzgI3BQAAjlBFlxQBBlhB0mKQBwl6CPlBQCMkxCYiVIBUhMQCniNEiABQEYgJFSBJQFIA+FEBSQE4BJD0AgIAkADQD+AaC3gbQDIgQDnAGQKJAwJhD7QGxCyGmBGQGxBnHmDEQC8BVgCAIQAuACCPhzIAWgOQDmiSD9iMIgTgUQguhegRhaIgEgdQhLoYPFlyQDHhVCigzQSXlwqlVwQhRDZhmCeQlVINpAiYIhXAUQiDBCivB8QiqB0i5B5Qi1BwioBAQikA3h7gtQjxhvjzhLQn5idpPg1Qo9g+omgPQlsgRmEAzQhPAKj+ADQjTABh6gXQiRgxiZgpIgygNQi2gwith3QithsiihxQihhniVgqQiTggiEBfQhhBNC3BeQB7BmAoCnIACADIgIAzQgSCqgmCTQgyD4haCfQhOCygrDMQgpEyAUDpQAED5ghELUgGXAkVgvMASIIqbD3ItmFCIkUBnQDNhjDChmgEBcLgurQhdAUgyBQQgzBQAVBcQAVBcBPAyQBRAzBcgVQBbgVAzhPQAzhQgVhcQgUhchRgzQg4gjg/AAQgaAAgaAGgEBUlg3IQhaAUgyBOQgwBPAUBaQAUBaBOAxQBOAyBagVQBbgUAwhOQAyhOgUhaQgVhbhOgxQg3gjg9AAQgaAAgaAGg");
	this.shape_182.setTransform(1348.3873,296.4766);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#0E6D00").s().p("EhjPA/vQGekgFlksIAcgYQQStyIlvTQLc0XAs32QAFjlBMlxQBJlgB7mJQB5l5CVk+QCTkuCaiPIBVhJQCqiHEhAOQEWADFPBXQFFBMFABfQE2BUDxAmIAkAFQD8AgCzgdQDFgODnAHQKIA2JfEAQGvC2GlBGQGvBoHnDEQC7BWgCAIQAtABCOhzIAXgOQDliSD9iMIgSgUQgvhegRhZIgEgeQhLoYPElzQDHhVCigzQSXlxqkVwQhRDbhmCdQlUIMpAiWIhXATQiDBDivB8QiqB0i6B5Qi1BxioBAQikA3h7guQjwhwjzhLQn5iepQg4Qo+hBomgUQlsgUmEAvQhPAKkJgDQjZgEh8gbQiQg3iXgvIgxgPQi0g3iph/Qiph0idh6QiehuiRgyQiSgmiFBZQhiBKC5BiQB7BqAnCoIABADIgJAzQgVCpgoCSQg2D4hdCeQhRCwgvDMQgvExAQDqQgBD4gmELQjhSGraObQrvOk1oLnIp3FHIw+IzQDAh9Czh8gEBZEgxqQhdAVgyBPQgyBQAVBcQAUBcBQAyQBQAzBcgVQBcgUAyhRQAzhPgVhcQgUhchRgzQg4gjg/AAQgaAAgaAGgEBReg6GQhbAUgxBOQgxBOAUBaQAUBaBOAyQBPAxBagUQBagVAxhOQAyhOgVhaQgUhahOgyQg4gig9AAQgZAAgaAGg");
	this.shape_183.setTransform(1384.2824,306.2007);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("ACmF8QgwgfgNg4QgNg4AfgxQAfgvA4gNQA4gNAwAfQAwAeANA4QANA4gfAwQgeAxg4AMQgRAEgRAAQgmAAghgVgAk/ilQgrgbgNg1QgLgzAcgtQAcgsA0gMQA0gLAsAbQAtAdALAzQAMA0gdAsQgbAtg0AMQgQADgOAAQgjAAgggUg");
	this.shape_184.setTransform(1939.4849,-16.3879);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AB3HOQhQgygUhcQgUhcAxhQQAyhPBdgVQBcgUBPAxQBRAzAUBcQAVBcgzBPQgyBRhcAUQgbAGgZAAQg/AAg5gkgAD9CBQg4ANgfAvQgfAxANA4QANA4AwAfQAwAeA5gNQA4gMAegxQAfgwgNg4QgNg4gwgeQgigWgmAAQgQAAgQAEgAlthVQhOgygUhaQgUhaAxhOQAxhOBbgUQBagUBOAwQBOAyAUBaQAVBagyBOQgxBOhaAVQgaAGgZAAQg+AAg4gjgAjrmMQg0AMgcAsQgcAtALAzQANA1ArAbQAtAdA0gMQA0gMAbgtQAdgsgMg0QgLgzgtgdQgggUgjAAQgOAAgPAEg");
	this.shape_185.setTransform(1935.1664,-16.4607);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#0E6D00").s().p("EhgJBBlQF4lRE8lVIAZgbQOevsGpwPQEbq0Cur8QCorxAgryQAIjlBUlxQBQlgCEmIQCAl3Cdk7QCYkqCdiKIBWhGQCsiAEfAaQEUAPFMBmQFBBZE8BrQEyBgDxAtIAjAFQD5AmCwgdQDCgODmAIQKIA8JcEGQGuC5GjBGQGuBpHmDEQC7BXgDAIQAtACCOh0IAWgOQDmiSD8iMIgSgUQgvhegQhaIgFgeQhMoXPEl0QDHhWCigzQSWlyqiVxQhRDbhmCdQlTINpBiWIhWATQiDBDivB9QiqB0i6B5Qi1BxipBAQijA3h7guQjxhxjyhMQn5ifpRg7Qo/hEomgZQlrgYmGAtQhPAIkRgIQjhgKh+gfQiNg9iVg1IgxgRQixg+iliHQilh8iYiBQiZh2iPg5QiPgtiHBVQhjBGC7BnQB8BsAlCqIABADIgKAzQgYCpgqCRQg7D3hgCcQhTCvgzDLQg0EwALDqQgGD5grEKQj2SCpKO6Qp5PQznOCIpLGSIvwKzQCuiSCkiSgEBVeg0LQhcAVgzBQQgyBQAVBcQAVBcBPAyQBRAzBcgVQBcgWAyhPQAyhQgUhcQgVhchRgyQg4gjg/AAQgaAAgaAFgEBN3g8mQhaAUgxBOQgxBPAUBaQAUBZBOAyQBPAxBagUQBagVAxhOQAyhOgVhaQgVhahOgyQg3gig9AAQgaAAgaAGg");
	this.shape_186.setTransform(1423.291,312.9091);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("ACmF8QgwgfgNg4QgMg4AegwQAegwA5gNQA4gNAwAfQAxAeAMA4QANA4geAwQgfAxg4AMQgRAEgQAAQgmAAgigVgAk/ikQgsgcgMg0QgMg0AcgsQAdgsAzgMQA0gMAsAcQAtAcAMA0QAMA0gdAsQgbAtg0ALQgPAEgPAAQgjAAgggUg");
	this.shape_187.setTransform(1955.4643,-25.7107);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AB3HOQhPgygVhcQgUhcAxhQQAzhQBcgVQBcgUBPAyQBRAyAVBcQAUBcgyBQQgyBPhcAWQgbAGgaAAQg/AAg5gkgAD9CAQg5ANgeAwQgeAxAMA4QANA4AwAeQAxAfA4gNQA4gMAfgxQAegxgNg3QgMg5gxgeQgigVgmAAQgQAAgQADgAlthVQhOgygUhZQgUhaAxhPQAxhOBagUQBagUBOAwQBOAyAVBaQAVBagyBOQgxBOhaAVQgbAGgZAAQg9AAg4gjgAjsmMQgzAMgdAsQgcAsAMA1QAMA0AsAbQAtAdA0gMQA0gMAbgtQAdgsgMg0QgMgzgtgdQgfgTgiAAQgPAAgQADg");
	this.shape_188.setTransform(1951.179,-25.7836);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("ACnF7QgxgegNg4QgMg4AegwQAfgxA4gNQA4gMAwAeQAxAeANA5QANA4gfAwQgeAwg5ANQgRAEgQAAQglAAgigWgAk/ikQgsgcgMg0QgLgzAbgtQAcgsA0gMQA0gMAsAcQAtAcAMA0QALA0gcAsQgbAsg0AMQgQAEgPAAQgjAAgfgUg");
	this.shape_189.setTransform(1971.4828,-35.0357);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AB4HOQhQgygVhbQgUhcAxhRQAzhPBcgVQBcgVBQAyQBPAyAWBcQAVBdgzBPQgyBPhcAWQgbAGgaAAQg+AAg5gkgAD9CAQg4ANgfAxQgeAwAMA4QANA4AxAeQAwAfA4gNQA5gNAegwQAfgwgNg4QgNg5gxgeQgigWgmAAQgQAAgQAEgAlthVQhOgwgUhbQgUhaAwhOQAxhOBbgVQBagUBOAxQBOAxAVBaQAUBagxBOQgxBOhaAVQgbAGgZAAQg9AAg4gjgAjsmLQg0AMgcAsQgbAtALAzQAMA0AsAcQAsAcA1gMQA0gMAbgsQAcgsgLg0QgMg0gtgcQgfgUgiAAQgPAAgQAEg");
	this.shape_190.setTransform(1967.1664,-35.1086);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#0E6D00").s().p("EhcuBC+QFMl9EQl5IAWgeQMbxVEmw8QDErRCQsoQCJsVAur4QANjlBclwQBXlfCNmGQCIl2Cik3QCfknCfiFIBXhCQCuh6EcAnQESAbFHBzQE9BnE4B3QEuBrDuAzIAjAGQD4AtCsgeQC/gODlAJQKHBBJaEMQGsC+GiBGQGtBpHlDFQC7BWgEAJQAtABCNhzIAXgPQDliTD8iLIgSgUQgvhegQhaIgFgeQhNoXPEl1QDHhWCigzQSWl0qhVyQhQDbhmCdQlTINpBiVIhXAUQiDBCivB+QiqB0i6B5Qi1BxipBAQijA4h7gvQjwhxjzhNQn4igpTg+Qo/hHomgdQlrgcmGApQhOAIkcgQQjogPh/gkQiLhCiTg7IgvgTQivhFigiPQigiEiTiJQiVh9iMg/QiMg0iIBQQhjBCC8BsQB9BwAiCrIACADIgLAzQgbCogtCQQg/D2hiCbQhXCug2DJQg6EwAHDqQgLD5gwEJQiGI/ieIIQioINj2HyQj/H2mCH2QmLH5pFIUIoVHWIuUMrQCcinCPilgEBRcg2KQhcAVgzBPQgyBRAVBcQAVBbBQAyQBQAzBcgVQBcgWAyhPQAzhPgVhdQgWhchPgyQg4gjg+AAQgbAAgbAGgEBJ1g+mQhbAVgxBOQgwBOAUBaQAUBbBOAwQBPAyBagVQBagVAxhOQAxhOgUhaQgVhahOgxQg3gig+AAQgZAAgaAFg");
	this.shape_191.setTransform(1465.0579,316.357);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("ACnF7QgwgegNg4QgNg4AegxQAfgwA4gNQA4gNAwAeQAxAfANA4QANA4gfAwQgeAxg4ANQgRAEgQAAQgmAAgigWgAk/ikQgsgcgMg0QgMgzAcgtQAcgsA0gMQA0gMAsAcQAsAcAMAzQAMA0gcAsQgcAtg0AMQgPAEgPAAQgiAAgggUg");
	this.shape_192.setTransform(1987.4643,-44.3357);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AB4HOQhQgygVhcQgUhcAxhQQAzhQBcgVQBcgVBQAyQBPAyAWBdQAWBbgzBQQgyBRhcAUQgbAHgaAAQg/AAg5gkgAD9CAQg4ANgfAwQgeAxANA4QANA4AwAeQAxAfA4gNQA4gNAegxQAfgwgNg4QgNg4gxgfQgigVgmAAQgQAAgQAEgAlthUQhOgygUhZQgVhaAxhPQAxhOBagVQBagUBOAxQBOAxAVBaQAVBagxBOQgxBOhaAVQgbAGgZAAQg9AAg4gigAjsmLQg0AMgcAsQgcAtAMAzQAMA0AsAcQAtAcAzgMQA0gMAcgtQAcgsgMg0QgMgzgsgcQgfgUgjAAQgPAAgPAEg");
	this.shape_193.setTransform(1983.1665,-44.4336);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#0E6D00").s().p("EhY+BD5QEamjDgmYIARggQKOyvCfxXQBqrkBstNQBls0A9r/QARjkBklwQBfleCUmEQCQl0Cpk0QClkjChh/IBYg/QCvh0EZAzQEQAnFCCBQE5B1EzCDQEpB2DsA5IAiAHQD2AyCpgfQC8gODkALQKGBHJXERQGrDCGhBFQGsBqHkDGQC7BXgFAIQAsACCNh0IAXgOQDliSD8iNIgSgUQgvhegRhaIgFgeQhNoWPEl3QDHhWChgzQSWl1qfVzQhQDahnCeQlSINpBiVIhWAUQiDBDiwB9QiqB1i6B6Qi1BwipBBQikA3h6gvQjwhyjyhNQn4iipUhAQpAhKomgiQlrgfmFAlQhPAHkmgXQjvgViAgoQiIhIiQhBIgvgUQishNiaiWQibiLiPiRQiPiFiJhFQiJg6iIBKQgyAfAmAsQAeAsBHA6QA/A5A3BIQAvBHgIBXIACADIgMAyQgeCogvCQQhDD0hlCZQhaCtg5DJQhAEuACDrQgPD4g1EJQiQI8h6IBQiEIJi0H3Qi/H9k0ISQlBIZn7JVInXIVIpmK4IjEDdQCGi5B7i1gEBNDg3mQhcAVgyBQQgyBQAVBcQAVBcBQAxQBQAzBcgVQBcgVAyhQQAzhQgWhcQgVhdhQgxQg4gjg+AAQgbAAgbAGgEBFchABQhbAUgxBOQgxBPAVBaQAVBaBOAxQBOAxBagUQBbgVAwhOQAyhPgVhaQgVhahOgxQg4gig9AAQgZAAgaAGg");
	this.shape_194.setTransform(1509.1415,316.2237);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("ACnF7QgwgegNg4QgNg4AfgxQAegwA4gNQA5gNAwAeQAwAfANA4QANA4geAwQgfAxg4ANQgQAEgQAAQgmAAgjgWgAk/ikQgsgbgNg0QgMg0AcgtQAdgsAzgMQA0gMAsAcQAtAcAMA0QAMA0gcAsQgcAtg0AMQgPADgPAAQgiAAgggUg");
	this.shape_195.setTransform(2003.4643,-53.663);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AB5HOQhQgygVhcQgUhcAwhQQAzhQBcgVQBcgVBQAxQBQAzAVBcQAVBcgyBQQgyBQhcAVQgbAHgaAAQg+AAg5gkgAD9B/Qg4ANgeAxQgfAwANA4QANA5AwAeQAxAeA4gNQA4gMAfgxQAegwgNg5QgNg3gwgfQgigVgmAAQgQAAgRADgAlthUQhOgxgVhaQgUhaAwhPQAxhOBbgVQBagUBOAwQBOAyAVBaQAVBagxBOQgyBPhZAUQgbAGgZAAQg9AAg4gigAjtmLQgzAMgdAsQgcAtAMAzQANA0AsAcQAtAcAzgMQA0gMAcgtQAcgsgMg0QgMgzgtgdQgegTgjAAQgPAAgQAEg");
	this.shape_196.setTransform(1999.1643,-53.7336);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#0E6D00").s().p("EhVBBETQDlnCCsmxIANgiQH1z1AWxjQAOrsBFttQA+tMBMsFQAVjkBrluQBmleCdmCQCYlxCwkxQCqkgCjh5IBZg8QCwhtEWBAQENAyE8CPQE0CCEtCOQElCCDpA/IAiAHQDzA4ClggQC6gODkALQKFBOJUEXQGpDFGgBFQGrBqHkDHQC6BYgFAIQArACCNh0IAWgPQDmiSD7iNIgSgUQgvhegRhaIgFgeQhNoWPDl4QDHhWChgzQSVl2qdVzQhQDbhmCeQlSINpBiUIhXAUQiDBDivB9QiqB1i7B6Qi1BxipBAQijA3h7gvQjwhyjyhOQn3ijpVhDQpBhNomgnQlpgjmHAiQhPAHkvgfQj2gciAgsQiGhNiNhHIgugXQiphTiUieQiWiSiJiYQiKiMiFhMQiGhAiJBFQgyAdAmAtQAfAtBHA7QA/A8A3BJQAvBJgJBXIABACIgMAzQghCngyCPQhIDzhnCXQhcCsg9DHQhGEtgCDrQgUD5g6EHQibI6hUH2QhjH/hwHzQiAH8jjImQjxIvmrKOIxEY7QBtjHBkjDgEBIXg4cQhcAVgyBQQgyBQAVBcQAVBcBQAyQBRAyBcgVQBcgVAxhQQAzhQgVhcQgVhchRgzQg3gig/AAQgaAAgcAGgEBAvhA3QhaAVgxBOQgwBPAUBaQAUBaBPAxQBOAxBagVQBagUAxhPQAxhOgUhaQgWhahOgyQg3gig9AAQgZAAgbAGg");
	this.shape_197.setTransform(1555.1136,312.2715);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("ACoF7QgxgegNg5QgMg4AegwQAegxA4gNQA5gMAwAeQAxAeAMA4QANA5geAwQgeAxg5AMQgQAEgQAAQgmAAgigVgAlAikQgrgbgNg0QgMg0AcgtQAcgsA0gMQA0gMAsAcQAtAcAMA0QAMA0gdAsQgbAtg0AMQgPADgPAAQgjAAgggUg");
	this.shape_198.setTransform(2019.462,-62.988);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AB5HOQhQgygVhcQgUhcAwhQQAzhQBcgVQBcgVBQAxQBQAzAVBcQAWBbgzBRQgyBPhbAWQgbAGgbAAQg+AAg5gjgAD9B/Qg4ANgeAxQgeAwAMA4QANA5AxAeQAwAeA4gNQA5gMAegxQAegwgNg5QgMg4gxgeQgigWgmAAQgQAAgRAEgAlthUQhOgwgVhbQgVhZAxhPQAxhOBagVQBagUBOAwQBPAxAVBaQAVBagyBOQgwBOhaAWQgbAGgZAAQg9AAg4gjgAjtmLQg0AMgcAsQgcAtAMA0QANA0ArAbQAtAdA0gMQA0gMAbgtQAdgsgMg0QgMg0gtgcQgfgUgiAAQgPAAgQAEg");
	this.shape_199.setTransform(2015.1642,-63.0586);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#0E6D00").s().p("EhQ4BElQCrnaB2nDIAJgjQFV0qh0xdQhOrnAbuHQAVtfBZsKQAZjkBzltQBulcClmAQCglvC1ktQCxkcCkhzIBag5QCxhnESBLQEJA+E2CdQEuCOEoCbQEfCMDmBFIAiAIQDwA+CjgiQC3gODjAMQKDBUJTEcQGmDJGfBFQGqBrHkDHQC6BYgGAJQAqACCNh0IAWgPQDliTD8iNIgSgUQgvhegRhaIgFgeQhOoWPDl4QDHhXChgzQSVl4qdV0QhQDbhlCeQlSINpBiTIhWAUQiDBDiwB+QiqB1i7B6Qi1BxipBBQikA3h6gvQjvh0jyhOQn3ikpXhHQpBhQolgsQlqgkmHAdQhPAGk4gnQj8giiCgxQiBhTiLhMIgtgYQimhaiOilQiQiaiDieQiEiUiBhSQiDhGiJBAQgzAcAnAtQAfAtBHA+QBAA9A2BLQAvBLgLBWIACADIgOAyQgkCng0COQhMDyhqCVQhfCqhBDHQhKEsgHDrQgYD4hAEGQimI3gwHmQhBHxgvHnQg/HziQIvQigI7lUK9IlGJ3IoyQ/QBVjUBLjOgEBDeg4QQhcAVgzBQQgxBQAVBcQAVBcBQAyQBRAyBcgVQBbgWAyhPQAzhRgWhbQgVhchQgzQg4gjg+AAQgbAAgbAHgEA71hAqQhaAVgxBOQgxBPAVBZQAVBbBOAwQBPAxBagUQBagWAwhOQAyhOgVhaQgVhahPgxQg3gig9AAQgZAAgbAGg");
	this.shape_200.setTransform(1602.4839,301.7283);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("ACpF7QgxgegNg4QgNg4AegxQAfgwA3gOQA5gMAwAeQAxAeANA4QANA4geAxQgfAwg4ANQgRAEgQAAQglAAgigVgAlAijQgrgbgNg0QgMg0AcgtQAcgsA0gMQAzgMAsAbQAuAcAMA0QALA0gbAsQgcAtg0AMQgQAEgPAAQgiAAgggUg");
	this.shape_201.setTransform(2035.4498,-72.313);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AB6HOQhQgygVhcQgVhcAxhQQAyhQBcgWQBdgVBPAyQBRAyAVBcQAVBcgyBQQgyBQhcAWQgbAGgaAAQg+AAg5gjgAD+B/Qg4ANgfAwQgeAxANA4QANA4AxAeQAwAfA4gNQA4gOAfgwQAegwgNg5QgNg4gxgeQgigVgmAAQgQAAgQAEgAlthUQhOgwgVhaQgVhaAxhPQAxhOBagVQBagVBOAxQBPAxAVBaQAVBagxBOQgxBOhaAWQgaAGgaAAQg9AAg4gjgAjtmLQg0ANgcAsQgcAtAMAzQANA0AsAbQAtAdAzgNQA0gMAcgsQAcgsgMg1QgMgzgtgcQgfgTgjAAQgPAAgPADg");
	this.shape_202.setTransform(2031.1433,-72.3817);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#0E6D00").s().p("EhMpBEqQBwnsA9nOIAFgkQCw1Jj9xHQiorYgRuZQgWtrBlsQQAejjB6lsQB1lbCul+QCnlsC8kpQC2kYClhuIBbg1QCyhhENBYQEFBIEwCqQEoCcEhClQEaCXDjBLIAhAJQDuBDCfgjQC0gODiANQKFBZJOEiQGlDNGeBFQGpBrHiDIQC7BZgHAIQApACCNh0IAWgPQDliTD8iOIgTgUQgvhdgRhaIgFgeQhOoXPCl5QDHhXChgzQSVl5qcV1QhODbhmCeQlRIPpBiUIhXAUQiDBDivB/QirB1i7B6Qi1BxipBBQikA3h6gwQjvhzjyhQQn2ilpYhKQpChSolgxQlqgpmHAbQhPAFlBgwQkCgpiCg1Qh+hXiIhTIgsgaQihhgiJitQiKigh8imQh/iZh9hZQh+hNiJA8QgzAaAnAvQAfAuBHA/QBAA/A2BNQAuBMgMBWIABADIgOAyQgnCmg2CNQhQDxhtCUQhiCohEDFQhQErgLDrQgeD4hEEFQiwIzgPHRQghHeASHUQAAHjg8IvQhOI9j4LgIo4YBIhmEVQA6jdAxjVgEA+bg3HQhcAWgyBQQgxBQAVBcQAVBcBQAyQBRAyBbgVQBcgWAyhQQAyhQgVhcQgVhchRgyQg4gjg+AAQgaAAgcAGgEA2yg/gQhaAVgxBOQgxBPAVBaQAVBaBOAwQBPAxBagUQBagWAxhOQAxhOgVhaQgVhahPgxQg2gig9AAQgaAAgbAGg");
	this.shape_203.setTransform(1650.7325,285.0195);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("ACpF6QgxgegNg4QgNg4AegwQAegxA4gNQA5gNAwAeQAxAeANA4QANA5gfAwQgeAxg4ANQgQAEgQAAQgmAAgigWgAlAijQgsgbgMg0QgMg0AbgtQAcgsA0gMQA0gMAsAbQAtAcAMA0QANA0gdAsQgbAtg0AMQgQADgOAAQgjAAgggTg");
	this.shape_204.setTransform(2051.462,-81.638);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AB6HOQhQgygVhcQgVhcAxhQQAxhQBdgWQBcgVBQAyQBQAxAWBdQAWBcgzBQQgyBQhcAWQgbAGgaAAQg+AAg5gjgAD9B/Qg4ANgeAxQgeAwANA4QANA4AxAeQAwAfA4gNQA4gNAegxQAfgwgNg5QgNg4gxgeQgigVgmAAQgQAAgRAEgAlthTQhPgwgUhbQgVhZAwhPQAxhOBagVQBagVBOAwQBPAxAVBaQAVBagxBOQgwBPhbAVQgaAGgaAAQg8AAg4gigAjumKQg0AMgcAsQgbAtAMA0QAMA0AsAbQAtAcA0gMQA0gMAbgtQAdgsgNg0QgMg0gtgcQgfgTgiAAQgPAAgQAEg");
	this.shape_205.setTransform(2047.1665,-81.7067);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#0E6D00").s().p("EhDmBEMQAzn3AFnRIAAglQAI1VmBweQkBq+g/umQhBtxBwsUQAijjCDlqQB8lZC2l7QCvlqDCklQC7kUCnhoIBbgyQCyhbEJBjQEABUEpC4QEhCoEbCwQEUCiDfBQIAhAKQDqBICdglQCxgODiAOQKDBeJMEoQGjDRGdBEQGoBsHiDIQC6BagIAIQApACCMh0IAXgPQDliUD7iNIgSgUQgvhegShaIgFgdQhOoXPBl6QDHhXChg0QSUl6qaV2QhODbhmCeQlQIPpCiSIhWAUQiDBDiwB+QiqB2i7B6Qi2BxipBAQikA4h6gwQjvh0jxhQQn2inpZhMQpDhWolg1QlpgsmHAXQhQAElIg5QkJgwiCg6Qh7hdiEhXIgrgcQidhniCizQiEinh1isQh5igh4hfQh7hSiJA2QgzAYAnAwQAfAvBIBCQBABAA1BPQAuBNgOBXIACADIgPAxQgqClg5CNQhVDvhuCSQhlCnhIDEQhVEpgQDrQgiD3hJEEQi7IwAQG3QgDHIBRG4QA8HLAYIkQAEI1iYL5IijK0IkXSmQAejhAWjagEA+Hg1UQhcAVgyBQQgxBRAVBcQAVBcBQAxQBRAyBcgVQBcgVAyhRQAyhPgWhdQgVhchRgyQg4gig+AAQgaAAgcAGgEA2eg9tQhaAVgxBOQgxBQAVBZQAVBaBOAxQBQAwBZgUQBagVAwhPQAxhOgUhaQgVhahPgxQg3gig8AAQgaAAgbAGg");
	this.shape_206.setTransform(1668.7462,264.214);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("ACpF7QgxgfgNg4QgNg4AegwQAfgxA4gNQA4gNAwAeQAyAfAMA3QAOA5gfAwQgeAxg4ANQgRAEgQAAQgmAAgigVgAlAiiQgsgcgNg0QgLgzAbgtQAcgsA0gNQAzgMAtAcQAuAcALAzQAMA0gcAsQgbAtg0AMQgQAEgPAAQgjAAgfgTg");
	this.shape_207.setTransform(2067.4498,-90.9608);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AB7HOQhQgygWhcQgVhcAxhQQAzhQBbgWQBdgVBPAxQBRAyAVBcQAWBcgyBQQgyBRhcAVQgbAHgaAAQg/AAg4gjgAD+B+Qg4AOgeAwQgfAxAOA4QANA4AwAeQAxAeA4gNQA4gNAegxQAfgwgOg4QgMg4gxgfQgigUgmAAQgRAAgQADgAlthTQhOgwgVhaQgVhaAwhPQAxhOBagVQBagVBOAwQBPAxAVBaQAVBagxBOQgwBPhaAVQgcAHgaAAQg8AAg3gjgAjumKQg0AMgcAsQgbAtAMA0QAMA0AsAbQAtAcA0gMQA0gMAbgtQAcgsgMg0QgLg0gugcQgfgTgjAAQgPAAgPAEg");
	this.shape_208.setTransform(2063.1415,-91.0295);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#0E6D00").s().p("Eg6bBDKQgLn4g1nPIgFglQif1LoAvoQlVqZhturQhutvB7sZQAnjhCKlpQCElYC+l4QC3lnDIkgQDAkQCohiIBbgwQCzhUEDBvQD8BfEhDEQEaC0EUC7QEMCsDcBVIAhALQDmBOCagnQCwgPDhAPQKCBlJJEsQGhDVGcBEQGnBsHhDJQC6BagIAJQAoACCMh1IAWgOQDliVD7iNIgSgUQgvhegShaIgFgdQhPoXPBl7QDHhXChg0QSUl7qZV2QhODbhmCfQlQIOpBiRIhXAUQiCBDiwB/QirB1i7B7Qi2ByipBAQikA3h6gwQjvh1jwhQQn2ippahOQpEhZokg6QlqgvmHATQgnACh5gTQhwgRiPgdQlWhHg7gwQh3hhiAhdIgqgeQiZhth7i5Qh9iuhviyQhyimh0hkQh2hYiJAxQgzAXAnAwQAfAwBIBEQBABCA1BRQAtBPgPBWIACADIgQAxQgtClg8CLQhYDuhxCRQhoClhLDCQhbEogVDrQgmD3hOECQjGIsAtGZQAYGtCMGWQB2GrBqIQQBVIkg2MEIiwZeIggElQACjkgEjbgEA99gy5QhbAWgzBQQgxBQAVBcQAWBcBQAyQBRAxBbgVQBcgVAyhRQAyhQgWhcQgVhchRgyQg3gig+AAQgbAAgcAGgEA2Tg7RQhaAVgxBOQgwBPAVBaQAVBaBOAwQBQAyBZgWQBagVAwhPQAxhOgVhaQgVhahPgxQg2ghg8AAQgbAAgbAGg");
	this.shape_209.setTransform(1685.7215,239.3611);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("ACpF6QgwgegOg4QgMg4AdgxQAegwA5gOQA3gMAxAdQAxAeANA5QANA3geAxQgeAxg4ANQgRAEgQAAQgmAAgigVgAlAiiQgsgcgNg0QgMgzAbgtQAdgsAzgNQA0gMAsAcQAtAcAMAzQAMA0gcAsQgbAtg0AMQgPAEgPAAQgjAAgfgTg");
	this.shape_210.setTransform(2083.4512,-100.2964);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AB7HOQhQgygWhcQgVhcAxhQQAyhQBcgWQBcgVBQAxQBQAyAWBcQAWBcgyBQQgyBQhcAWQgbAGgaAAQg+AAg5gigAD+B+Qg5AOgeAwQgdAxAMA4QAOA4AwAeQAxAeA4gNQA4gNAegxQAegxgNg3QgNg5gxgeQgigVgmAAQgQAAgQAEgAluhSQhOgwgVhbQgVhZAwhPQAxhPBagVQBagVBOAwQBPAxAVBaQAVBagwBPQgxBOhaAVQgbAHgbAAQg8AAg3gigAjvmKQgzANgdAsQgbAtAMAzQANA0AsAcQAtAbAzgMQA0gMAbgtQAcgsgMg0QgMgzgtgcQgegUgjAAQgPAAgQAEg");
	this.shape_211.setTransform(2079.1642,-100.3568);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#0E6D00").s().p("EgxdBBmQhJnyhtnGIgJgjQlF0up3uhQjSk1iRmWQiQmMhNm8QhMm0gGmyQgFmpBEl1QAqjhCTlnQCKlVDHl1QC/lkDNkdQDGkLCphdIBbgsQCzhOD9B6QD3BqEZDQQESDAEMDGQEGC2DYBbIAgALQDjBTCYgpQCsgPDhAPQKCBrJGEyQGfDYGbBEQGlBtHhDJQC6BbgKAIQAoADCMh1IAWgPQDliUD7iOIgTgUQgvhegRhZIgFgeQhQoXPBl8QDHhXChg0QSTl8qXV2QhPDbhlCfQlPIQpCiSIhWAVQiDBDiwB/QirB2i7B7Qi2BxipBBQikA3h6gxQjvh1jwhRQn1iqpbhSQpFhbokg/QlogzmIAQQgoABh7gVQhygUiTgiQlchRg5gyQhzhmh9hiIgogfQiVh0h0i/Qh2i0hoi4QhrishvhqQhyhdiIAsQgzAVAnAyQAgAwBIBGQA/BFA1BSQAsBRgQBWIABADIgRAxQgwCkg9CKQhdDshzCPQhrCkhPDBQhgEmgZDqQgrD2hTEBQjQIpBGF3QAwGODCFtQCsGFC5HxQCjIJAtMFIALLHIAOOgIAFEmQgajhgfjagEA90gv2QhcAWgyBQQgxBQAVBcQAWBcBQAyQBRAxBbgVQBcgWAyhQQAyhQgWhcQgWhchQgyQg4gig9AAQgbAAgcAGgEA2Jg4OQhaAVgxBPQgwBPAVBZQAVBbBOAwQBPAxBagWQBagVAxhOQAwhPgVhaQgVhahPgxQg2ghg8AAQgaAAgcAGg");
	this.shape_212.setTransform(1702.6883,210.529);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("ACqF6QgwgegOg4QgNg4AegxQAegwA4gOQA5gMAwAdQAxAeANA4QANA5geAwQgeAxg4ANQgRAEgRAAQglAAgigVgAlAiiQgsgbgNg0QgMgzAbguQAdgsAzgMQA0gNAsAcQAtAcAMAzQANA0gcAtQgbAtg0AMQgQADgPAAQgjAAgfgTg");
	this.shape_213.setTransform(2099.4475,-109.6238);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AB8HNQhQgxgWhcQgVhcAxhQQAxhQBcgWQBdgWBPAxQBRAyAWBcQAWBcgyBQQgyBRhcAVQgcAHgbAAQg9AAg4gjgAD+B+Qg4ANgeAxQgeAxANA4QAOA4AwAeQAxAeA4gNQA4gNAegxQAegxgNg4QgNg4gxgeQgigVgmAAQgQAAgRAEgAlthSQhOgwgWhaQgVhaAwhPQAxhOBagWQBagVBOAwQBPAxAVBaQAWBagxBOQgwBPhaAVQgcAHgbAAQg8AAg2gigAjvmKQgzANgdAsQgbAtAMA0QANAzAsAcQAtAbA0gMQA0gMAbgtQAcgsgNg0QgMgzgtgdQgegTgiAAQgQAAgQAEg");
	this.shape_214.setTransform(2095.1415,-109.6835);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#0E6D00").s().p("Ego2A/hQiGnmikm0IgNgjQnlz7rktNQj2kZiwmHQiul8hjm2QhhmtgPmwQgNmnBKl0QAujgCbllQCSlUDOlxQDHlhDTkYQDMkGCphYIBbgpQCzhID3CFQDxB0EQDdQEKDMEEDQQD/C/DUBgIAgAMQDfBYCVgrQCqgQDgAQQKBBwJDE4QGeDcGZBEQGlBtHgDKQC6BbgKAJQAnACCLh1IAWgPQDliVD7iOIgTgUQgwhdgRhaIgFgeQhRoWPBl9QDHhXChg1QSTl9qWV3QhODbhlCfQlPIQpBiRIhXAVQiDBDivCAQirB1i8B7Qi2ByipBAQilA4h5gxQjvh2jwhSQn0iqpchVQpGhfokhEQlog1mHALQgoABh9gYQh1gXiVgmQljhcg4g0Qhvhrh4hnIgnghQiQh5hsjFQhwi6hgi+QhkiyhqhuQhthjiIAoQgzATAoAzQAfAxBIBJQA/BGA0BUQAsBSgSBWIACADIgSAxQgyCjhBCJQhgDrh2CNQhuChhSDBQhlEkgeDqQgwD1hYD/QjaIlBbFSQBFFtDzE9QDdFYEEHKQDuHlCPL4IELd8Qg1jeg6jTgEA9pgsNQhcAWgxBQQgxBQAVBcQAWBcBQAxQBRAyBbgWQBcgVAyhRQAyhQgWhcQgWhchRgyQg3gig+AAQgbAAgcAHgEA1+g0lQhaAWgxBOQgwBPAVBaQAWBaBOAwQBPAxBagWQBagVAwhPQAxhOgWhaQgVhahPgxQg2ghg8AAQgbAAgbAGg");
	this.shape_215.setTransform(1719.7353,177.9106);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("ACqF6QgwgegOg4QgMg4AdgwQAegyA4gNQA5gMAwAdQAxAeANA4QANA5geAwQgeAxg4ANQgRAEgRAAQglAAgigVgAlAihQgsgbgNg0QgMg0AbgtQAcgtA0gMQA0gMAsAbQAtAcAMA0QAMA0gcAsQgbAtgzAMQgQAEgQAAQgiAAgfgTg");
	this.shape_216.setTransform(2115.4392,-118.9608);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AB8HNQhQgxgWhcQgWhcAxhRQAyhQBcgWQBcgVBQAxQBRAxAWBcQAWBdgyBQQgyBQhcAWQgcAHgbAAQg9AAg4gjgAD+B9Qg4ANgeAyQgeAwANA4QANA4AxAeQAxAeA4gNQA4gNAegxQAegwgOg5QgNg4gxgeQghgUgmAAQgQAAgRADgAluhSQhOgwgVhaQgWhZAwhQQAxhOBagWQBagVBOAwQBPAxAWBaQAVBagxBOQgwBPhaAVQgbAHgbAAQg8AAg3gigAjwmKQgzAMgcAtQgcAtANA0QAMA0AsAbQAtAbA0gMQA0gMAbgtQAcgsgMg0QgNg0gtgcQgegSgiAAQgPAAgRADg");
	this.shape_217.setTransform(2111.1536,-118.9954);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#0E6D00").s().p("EgguA88QjBnRjYmdIgSghQp9y2tHrsQkXj4jMl0QjKlqh3mrQh1mjgXmtQgWmiBQl0QAzjfCiliQCalSDWluQDOldDZkTQDRkCCphSIBbgmQCzhBDwCPQDrB+EHDpQEBDXD8DaQD3DJDQBkIAfANQDcBdCSguQCpgQDgAQQJ/B3JBE8QGbDhGYBDQGkBtHfDLQC6BbgLAJQAnADCLh2IAWgOQDliVD6iPIgTgUQgvhdgShaIgFgeQhRoWPBl+QDGhXChg1QSTl/qVV4QhODbhlCgQlNIQpDiQIhWAUQiDBEiwB/QirB2i8B8Qi2ByipBAQikA3h6gxQjuh3jwhSQn0ispdhYQpGhiokhIQlog5mHAIQgoABh/gdQh3gaiYgqQlqhmg1g3Qhqhvh0hsIgmgiQiLh/hljLQhoi/hZjDQhci4hlh0QhohoiHAkQgzARAoA0QAgAzBHBKQA/BJA0BWQArBUgTBVIABADIgTAxQg1CihDCIQhkDph4CLQhxCghWC/QhqEjgiDpQg1D0hdD+QjkIgBsErQBWFIEeEIQEJEmFKGaQE0G4DvLgIC3KvIDxOAIBMEdQhQjVhTjLgEA9dgoAQhcAWgxBQQgxBRAVBbQAWBcBQAyQBRAyBcgXQBbgVAyhRQAyhQgWhcQgWhchQgyQg4gig+AAQgbAAgcAHgEA1ygwXQhaAVgxBPQgwBPAVBZQAVBaBPAxQBPAxBagWQBZgVAxhPQAwhPgVhaQgVhZhPgxQg3gig8AAQgaAAgbAHg");
	this.shape_218.setTransform(1736.9488,141.6736);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("ACrF5QgwgdgOg4QgOg4AegxQAegxA4gNQA5gOAwAeQAxAeANA4QAOA5geAwQgeAxg4ANQgSAFgQAAQglAAgigWgAlBihQgsgbgMg0QgNg0AbgtQAdgsAzgNQA0gMAsAbQAtAcANA0QAMA0gcAsQgbAtg0AMQgQAEgPAAQgiAAgggTg");
	this.shape_219.setTransform(2124.4867,-131.9882);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AB9HNQhQgxgWhcQgWhcAxhRQAxhQBdgWQBbgWBRAxQBQAyAWBcQAWBcgxBQQgyBRhbAWQgdAGgbAAQg9AAg4gigAD+B9Qg4AOgeAwQgeAxAOA4QAOA5AwAdQAxAeA4gNQA4gOAegxQAegwgOg4QgNg4gxgeQghgVgmAAQgQAAgSAEgAlthRQhPgwgVhaQgWhZAwhQQAwhOBbgWQBagVBOAwQBOAwAXBaQAVBagxBPQgwBOhaAWQgbAHgbAAQg7AAg3gigAjwmJQgzANgdAsQgbAtANAzQAMA0AsAbQAuAcAzgMQA0gNAbgtQAcgsgMg0QgNgzgtgcQgegTgjAAQgPAAgQAEg");
	this.shape_220.setTransform(2120.1809,-132.0191);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#0E6D00").s().p("EgkuA88QixnYjKmkIgQghQpTzNsssHQkOkCi7l8Qi4lwhfmxQhdmnADmsQAEmiBslsQBDjbCvlYQCnlIDhlhQDYlRDgkIQDXj3CshMIBcgjQC2g8DrCZQDlCHD+DyQD5DgD1DiQDvDQDMBpIAfAOQDZBhCRgvQCngQDfASQJ+B+I+FDQGYDlGYBCQGiBuHfDLQC5BcgMAJQAmACCKh2IAXgOQDkiVD7iQIgTgTQgwhegRhZIgFgeQhToWPBmAQDFhYCig1QSRmAqSV5QhNDchlCeQlNIRpDiPIhWAVQiCBEiwCAQirB2i8B8Qi2ByiqBAQikA4h5gyQjuh3jwhTQn0itpehcQpHhlokhPQlmg8mIAEQgnAAiBgfQh4gdiZguQlthwg0g4QhmhzhxhvIglgjQiHiDhejOQhijChTjGQhXi5hhh3QhlhriJAfQgzAPAmA2QAdA0BFBMQA8BLAwBXQAnBVgXBVIACADIgVAwQg6CghICGQhtDlh8CNQh2CghfC9Qh7Edg5DqQhJDzhxD3QkMIOBdEmQBDFDEYEMQEAEqFAGiQEoHADWLoICgK1IETSnQhIjYhMjNgEA9/gm1QhcAWgyBQQgxBRAWBbQAWBcBQAyQBRAxBcgWQBcgWAxhRQAyhPgWhdQgWhchRgxQg3gig9AAQgbAAgdAHgEA2SgvLQhaAVgwBPQgwBPAVBZQAWBaBOAwQBQAxBZgWQBagWAvhOQAxhPgVhZQgWhbhOgwQg3ghg7AAQgbAAgcAHg");
	this.shape_221.setTransform(1742.6497,121.1029);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("ACsF5QgxgegOg4QgNg3AegxQAegxA4gOQA3gNAxAeQAxAeAOA4QANA3geAxQgeAxg4AOQgRAEgRAAQglAAghgVgAlBihQgsgbgNgzQgMg0AbgtQAcgsAzgNQA0gNAsAcQAtAcANAzQANA0gcAsQgbAtg0ANQgQAEgPAAQgjAAgfgUg");
	this.shape_222.setTransform(2133.5367,-145.0358);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AB+HNQhRgxgWhcQgVhcAwhRQAxhQBdgWQBbgWBRAxQBQAxAXBcQAWBcgyBQQgxBRhcAWQgcAHgbAAQg9AAg4gigAD/B9Qg4AOgeAwQgeAxANA4QAOA4AxAeQAwAeA4gOQA4gNAegxQAegxgNg4QgOg4gxgeQgigUgkAAQgRAAgRAEgAluhQQhOgwgWhaQgVhZAvhQQAxhPBagVQBagWBOAwQBPAwAWBaQAWBagxBPQgwBPhaAVQgcAHgaAAQg8AAg3ghgAjxmJQgzANgcAsQgbAuAMAzQANA0AsAbQAtAbA0gMQA0gMAbgtQAcgtgNg0QgNgzgtgcQgegTgiAAQgQAAgQAEg");
	this.shape_223.setTransform(2129.2285,-145.0691);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#0E6D00").s().p("EgonA80Qihnei6mrIgPghQopzgsRskQkFkLinmCQinl3hGm0QhGmpAemqQAfmfCFlkQBTjWC8lMQC0k9DqlVQDilEDlj9QDdjtCuhGIBfgfQC3g2DlChQDhCPD1D8QDwDpDsDpQDoDYDJBtIAeAOQDVBlCRgvQClgQDfAUQJ9CFI5FJQGWDpGXBCQGhBuHeDLQC5BdgNAIQAmADCKh2IAWgPQDkiWD6iPIgSgUQgwhdgShZIgGgeQhSoWO/mBQDGhZChg1QSRmDqPV7QhODchkCfQlMIRpDiOIhWAVQiCBEixCAQirB3i8B8Qi2ByiqBBQikA3h5gxQjuh4jvhUQn0iupfhfQpIhpojhUQlmhBmIgBQgoAAiCgiQh4ggiagyQlxh4gyg6Qhjh2hthyIgkglQiDiIhXjQQhcjEhNjIQhRi8hdh5QhihuiKAaQg1AOAkA3QAbA1BCBPQA5BMAsBZQAlBWgaBUIABADIgWAvQhBCehMCDQh2Dgh/CPQh7ChhqC6QiLEXhODpQhfDwiEDuQkyH5BNEhQAyE9EREQQD3EtE3GqQEcHHC9LwICIK6IDqSwQhBjahFjQgEA+jgljQhcAWgxBQQgxBRAWBcQAVBcBRAxQBRAxBcgWQBbgWAyhRQAxhQgWhcQgWhchRgxQg4gig9AAQgbAAgcAHgEA21gt4QhZAVgxBPQgwBQAWBZQAVBaBPAwQBQAwBZgWQBagVAwhPQAwhPgWhaQgVhahPgwQg3ghg7AAQgbAAgcAHg");
	this.shape_224.setTransform(1748.0948,99.8484);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("ACsF5QgwgegOg4QgOg4AegwQAegyA4gNQA4gOAwAeQAyAeANA4QAOA4geAxQgeAxg4ANQgRAFgRAAQglAAgigVgAlBigQgsgbgNg0QgNgzAbgtQAcgtAzgNQA0gMAtAbQAtAcAMAzQANA0gcAsQgbAtgzANQgQAEgPAAQgjAAgfgTg");
	this.shape_225.setTransform(2142.5858,-158.0859);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AB+HNQhQgxgWhcQgXhcAxhRQAyhQBcgWQBbgXBRAxQBQAyAXBbQAWBdgxBQQgxBQhcAXQgcAHgcAAQg9AAg4gigAD/B9Qg4ANgeAxQgeAxAOA4QAOA4AwAeQAxAdA4gNQA4gOAegxQAegwgOg5QgNg3gygeQgggVglAAQgRAAgSAFgAluhQQhOgwgWhZQgWhaAwhPQAwhPBagWQBagVBOAvQBPAwAWBaQAWBagwBPQgwBPhaAWQgcAGgbAAQg7AAg3ghgAjymIQgzAMgcAtQgbAtANA0QANAzAsAcQAtAbA0gMQAzgNAbgtQAcgsgNg0QgMg0gtgcQgfgSgiAAQgPAAgRAEg");
	this.shape_226.setTransform(2138.2666,-158.1084);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#0E6D00").s().p("EgsYA8kQiPnkismxIgOgiQn9zyr0s+Qj8kUiVmIQiVl9gum1QgumqA5mmQA4mbCflZQBjjPDIlBQC/kyDzlHQDqk4DrjyQDjjiCwhAIBggcQC6gwDfCqQDbCXDrEEQDoDyDjDxQDfDfDGBxIAdAPQDSBoCQgvQClgRDeAWQJ7CMI2FPQGUDuGVBCQGfBtHeDMQC4BdgNAJQAlADCKh3IAWgPQDkiWD6iQIgTgTQgwhdgShaIgGgeQhToWO+mCQDGhZChg2QSQmEqMV7QhNDchlCfQlLITpDiOIhWAVQiCBFiwCAQisB3i8B9Qi2ByiqBBQikA4h5gyQjth5jwhUQnyiwpihiQpJhtoihaQllhFmIgEQgngBiDglQh5gjicg2Ql0iBgwg8Qhfh5hqh2IgiglQh/iMhRjSQhWjHhGjKQhLi+hah8QhfhwiLAVQg1AMAiA4QAZA2A+BRQA1BOAqBaQAhBYgdBTIABADIgYAuQhHCbhRCAQh+DciECRQiAChh0C2QibEPhkDmQh0DsiXDkQlWHhA/EbQAhE2ELEUQDvEwEtGzQEQHPCkL1IBvK/ICSOUIAuEjQg5jcg+jSgEA/KgkKQhcAWgxBQQgxBRAWBcQAXBcBQAxQBRAxBcgWQBcgXAwhQQAyhQgXhdQgWhbhRgyQg3gig8AAQgcAAgdAIgEA3bgsfQhaAWgwBPQgvBPAVBaQAWBZBPAwQBPAxBagWQBZgWAwhPQAxhPgWhaQgWhahPgwQg2ghg8AAQgbAAgcAHg");
	this.shape_227.setTransform(1753.2362,77.8966);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#0E6D00").s().p("EgwBA8LQh+noidm3IgNgiQnR0DrXtYQjykdiBmMQiDmCgWm0QgWmqBSmgQBTmVC3lNQByjHDTk1QDKklD7k7QDykrDvjnQDojYCyg6IBhgZQC8gqDZCzQDVCfDiENQDeD6DaD4QDXDmDCB1IAeAPQDOBtCPgxQCjgRDfAYQJ5CTIyFVQGRDzGUBAQGeBuHeDMQC4BegOAJQAkACCJh2IAWgPQDkiWD5iRIgSgTQgwhegThZIgFgeQhUoWO9mEQDGhZChg2QSQmGqLV9QhNDbhkCgQlKISpDiMIhWAVQiCBFixCBQirB3i8B9Qi3BzipBBQilA3h5gyQjth5jvhVQnyixpjhmQpJhwoihfQllhKmHgIQgogBiEgpQh6glicg6QiTg3h8g4Qhzg2gigkQhch7hmh5IghgnQh6iPhLjVQhPjJhAjLQhGjAhWh/QhbhziNARQg1AKAfA5QAXA2A7BTQAyBQAmBcQAeBYggBSIABADIgaAtQhMCZhWB8QiGDYiJCSQiHChh9CyQiqEHh6DhQiJDlipDZQl4HHAwEUQASEtEFEZQDnE0EjG7QEEHVCLL7IBWLCICXS+Qgyjeg3jVgEA/zgirQhcAWgyBRQgwBRAWBcQAWBcBRAwQBRAxBcgWQBcgXAwhQQAyhQgXhdQgWhbhRgyQg3ghg8AAQgcAAgdAHgEA4Dgq+QhaAWgwBOQgvBPAVBaQAWBaBPAwQBPAwBagWQBagWAvhPQAxhPgWhaQgWhahPgwQg2ggg7AAQgbAAgdAHg");
	this.shape_228.setTransform(1758.2332,55.2586);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("ACtF5QgxgegOg4QgNg4AdgxQAegwA4gOQA4gOAxAeQAxAeANA3QAOA5geAwQgeAxg3AOQgSAEgSAAQgkAAghgUgAlCifQgsgbgNg0QgMg0AbgtQAcgsAzgNQA0gNAsAbQAuAcAMAzQANA0gcAtQgbAtg0ANQgPADgQAAQgiAAgggSg");
	this.shape_229.setTransform(2151.6141,-171.1142);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AB/HNQhRgxgWhcQgWhcAwhQQAyhRBcgWQBbgXBRAxQBRAxAWBcQAXBcgyBQQgwBRhcAWQgdAHgcAAQg8AAg4ghgAD/B8Qg4AOgeAxQgdAxANA4QAOA3AxAeQAxAfA4gPQA3gNAegxQAegxgOg4QgNg4gxgeQghgUglAAQgRAAgSAEgAluhPQhPgwgWhZQgVhaAvhPQAwhPBagWQBagWBPAwQBPAwAWBaQAWBZgxBPQgvBPhaAWQgcAHgbAAQg8AAg2ghgAjymIQgzAOgcAsQgbAtAMAzQANA0AsAbQAuAbAzgMQA0gNAbgtQAcgsgNg0QgMgzgugcQgegTgiAAQgQAAgQAEg");
	this.shape_230.setTransform(2147.3166,-171.155);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("ACtF5QgwgegOg4QgOg4AdgxQAegwA4gPQA4gNAxAdQAxAeAOA4QANA4gdAxQgeAxg4ANQgSAFgRAAQglAAghgUgAlCifQgtgbgMgzQgNg0AbgtQAcgsAzgOQA0gMAsAbQAtAcANAzQANA0gcAsQgaAtg0ANQgQAEgQAAQgiAAgfgTg");
	this.shape_231.setTransform(2160.6616,-184.1615);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("ACAHMQhRgwgWhcQgXhcAxhRQAxhRBcgWQBbgXBRAxQBRAxAWBcQAYBbgyBRQgxBRhbAXQgdAHgcAAQg9AAg3gigAD/B7Qg4APgeAwQgdAxAOA4QAOA4AwAeQAxAeA4gPQA4gNAegxQAdgxgNg4QgOg4gxgeQghgUglAAQgRAAgSAEgAluhPQhPgvgWhaQgWhaAvhPQAwhPBagWQBagWBPAwQBPAvAWBaQAWBagwBPQgwBPhZAWQgcAHgbAAQg7AAg3ghgAjzmIQgzAOgcAsQgbAtANA0QAMAzAtAbQAuAcAzgNQA0gNAagtQAcgsgNg0QgNgzgtgcQgegTgiAAQgQAAgQAEg");
	this.shape_232.setTransform(2156.3633,-184.18);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#0E6D00").s().p("EgzhA7sQhunsiOm8IgLgjQmk0Sq5txQjoklhvmPQhwmGACmzQABmoBtmYQBrmNDPk/QCAi+DdkpQDWkaEBktQJfq7EuhBIBigWQC+gjDSC7QDPCnDYEVQDVECDRD/QDODsC+B5IAdAQQDLBwCOgyQCjgQDeAZQJ2CaIwFcQGOD3GTA/QGcBuHdDNQC4BegPAJQAjACCKh3IAWgOQDjiYD5iQIgSgUQgxhdgShZIgGgeQhUoWO8mFQDGhaCgg2QSPmJqIV/QhMDbhjCgQlKITpDiLIhXAVQiBBFixCBQirB4i8B9Qi3BziqBBQikA4h5gyQjsh6jwhVQnyizpkhpQpKh0ohhlQljhNmIgNQgngCiFgsQh7goidg+QiUg6h9g8Qhzg5ghglQhYh+hih8IgggoQh2iThDjXQhKjLg5jMQhAjChSiBQhYh2iOAMQhsASCfC8QBfCkgWC0IABADIgbAsQhSCWhbB5QiNDTiPCUQiNCgiHCtQi5D/iQDaQicDdi7DMQmZGqAkENQAEEkD/EdQDfE3EYHDQD4HdBxL/IA/LFIBsTCQgqjggvjWgEBAcghFQhcAXgxBRQgwBRAWBbQAWBcBRAxQBRAxBcgXQBcgXAwhQQAyhRgXhcQgXhchRgxQg3ghg8AAQgcAAgdAHgEA4sgpXQhaAVgwBQQgvBPAVBaQAXBaBOAvQBQAwBZgWQBagWAwhQQAwhOgWhaQgXhahPgwQg1ghg7AAQgcAAgcAIg");
	this.shape_233.setTransform(1763.1158,31.9985);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("ACuF4QgxgdgOg4QgOg4AegxQAdgxA4gOQA4gOAxAeQAxAeAOA3QAOA5geAwQgeAxg3AOQgSAEgRAAQgkAAgigUgAlCieQgsgbgOg0QgMgzAagtQAcgtAzgNQA0gNAtAbQAtAbANA0QANA0gcAsQgaAug0AMQgRAEgQAAQghAAgfgSg");
	this.shape_234.setTransform(2169.7109,-197.2109);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("ACBHMQhQgwgXhcQgXhcAwhRQAxhRBcgWQBcgXBQAwQBRAxAXBcQAXBcgxBQQgwBRhcAXQgdAHgcAAQg9AAg3ghgAEAB7Qg4AOgeAxQgdAxAOA4QAOA4AwAdQAxAeA4gOQA4gOAegxQAegwgPg5QgNg3gygeQghgUgkAAQgSAAgRAEgAluhOQhPgwgWhZQgWhZAvhQQAwhPBagWQBagWBOAvQBQAwAWBaQAWBZgwBPQgvBPhaAXQgcAHgcAAQg6AAg3ghgAjzmHQgzANgcAtQgbAtANAzQANA0AsAbQAuAbAzgNQA0gMAaguQAcgsgNg0QgNg0gtgbQgegSgiAAQgQAAgQAEg");
	this.shape_235.setTransform(2165.3949,-197.2084);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#0E6D00").s().p("Eg26A7FQhcnwh/nBIgKgjQl30gqauIQjdkthcmSQhemIAamwQAYmlCFmOQCEmFDmkuQUT57HkhXIBjgTQDAgcDLDCQDJCvDNEdIGTIPQDGDzC6B8IAcAQQDIB0COgzQChgQDeAaQJ1CiIrFhQGLD8GSA/QGcBuHcDNQC4BegQAJQAiADCJh4IAWgOQDjiYD5iRIgTgTQgwhdgShaIgGgdQhWoWO8mHQDGhaCgg2QSPmLqGV/QhMDchjCgQlJIUpEiLIhWAWQiBBFixCBQisB5i8B9Qi3B0iqBBQikA3h5gyQjsh7jvhWQnxi0plhtQpLh2oghsQlkhRmHgRQgngCiGgvQh7grifhCQiUg+h9hAQhzg7gggmQhTiBhfiAIgfgoQhxiXg9jYQhDjNgzjOQg5jDhPiEQhVh4iOAHQhtAOCXDCQBZCmgdCzIABADIgdArQhXCThfB2QiWDNiUCVQiUCgiRCnQjGD1imDSQivDUjMC+Qm2GKAYEFQgKEbD5EhQDXE5EOHMQDsHkBXMDIBoeLQgjjhgnjXgEBBGgfZQhcAXgxBRQgxBRAXBbQAXBcBQAxQBSAwBbgWQBcgXAxhRQAwhRgWhbQgXhchRgxQg3ghg7AAQgdAAgdAHgEA5UgnrQhaAXgvBOQgwBQAXBZQAVBaBQAwQBQAwBZgXQBagWAvhPQAwhPgXhaQgWhahPgwQg2gfg7AAQgbAAgdAGg");
	this.shape_236.setTransform(1768.0043,8.1175);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("ACuF4QgwgegPg3QgNg4AdgxQAegxA3gOQA5gOAwAdQAxAeAOA4QAPA4geAxQgdAxg5AOQgRAEgRAAQglAAgigUgAlDieQgsgagNg0QgNgzAbguQAcgtAzgNQAzgMAtAbQAuAbAMAzQANA0gbAtQgbAtg0ANQgQAEgQAAQgiAAgfgTg");
	this.shape_237.setTransform(2178.7609,-210.2584);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("ACCHMQhRgxgXhcQgXhbAxhRQAwhRBcgXQBcgXBQAwQBRAxAYBcQAWBcgwBQQgxBRhbAXQgeAIgdAAQg7AAg3ghgAEAB6Qg4APgeAwQgdAyAOA3QAOA4AxAeQAxAdA4gOQA4gOAdgxQAegwgOg5QgOg3gxgeQgigUgkAAQgRAAgSAEgAluhOQhPgvgWhaQgXhZAvhQQAwhOBagXQBagWBOAvQBQAwAWBZQAXBagwBPQgvBPhaAXQgdAHgbAAQg7AAg2ghgAj0mHQgzANgcAtQgaAtAMA0QAOA0AsAaQAtAbA0gNQAzgNAbgtQAcgsgNg0QgNg0gugbQgfgSghAAQgQAAgQAEg");
	this.shape_238.setTransform(2174.4423,-210.234);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#0E6D00").s().p("Eg6KA6XQhLnzhvnEIgJgkQlJ0sp6ufQjTk0hJmUQhLmJAxmsQAvmgCdmEQCbl5D8kdQCaipDwkPQDokBENkTQJ/qCEqgrIBkgPQDCgXDDDLQDDC2DDElIF/IcQC9D5C2B/IAcARQDEB4CNg1QCggQDeAdQJzCoInFoQGJD/GRA/QGaBuHcDNQC3BfgRAJQAiADCIh4IAWgPQDjiXD5iSIgTgTQgwhdgThaIgGgdQhXoWO8mJQDFhaChg2QSNmNqDWAQhLDchjCgQlIIUpEiJIhWAWQiCBFiwCCQisB4i8B+Qi4B0ipBBQilA4h4gzQjsh7jvhXQnxi1pmhwIxrjsQlihUmHgWQgogDiGgyQh8guifhGQiVhCh9hDQhzg/gfgnQhQiDhaiCIgegqQhsiag2jaQg8jPgtjPQg0jEhLiGQhRh7iPADQhtAKCPDHQBSCogjCyIAAADIgeAqQhcCPhkBzQidDHibCWQibCfiaCiQjUDpi6DIQjDDJjbCuQnSFqAND7QgWESDzElQDQE8EEHVQDfHqA+MGIAfZnIAFEnQgajiggjZgEBBvgdnQhcAXgwBRQgxBRAXBcQAXBcBRAwQBRAxBcgXQBbgXAxhRQAwhQgWhdQgYhbhRgxQg3ghg8AAQgcAAgdAHgEA59gl4QhaAXgwBPQgvBQAXBZQAWBaBPAvQBPAwBagXQBagWAvhQQAwhPgXhZQgWhahQgwQg2ggg7AAQgbAAgcAHg");
	this.shape_239.setTransform(1772.9376,-16.3625);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#0E6D00").s().p("Eg9UA5iQg5n1hfnIIgIgkQkb03pau0QjIk8g2mTQg5mLBImlQBGmbC0l3QCylsEQkKQCmieD4kBQDwj0ESkHQKOplEnghIBlgMQDCgPC8DRQC9C/C3ErIFsIpQC0D+CyCDIAbASQDBB7CMg2QCfgQDeAeQJxCvIjFuQGGEEGPA+QGZBuHcDNQC3BggSAJQAhADCIh4IAWgPQDjiYD5iSIgTgUQgxhdgThZIgGgeQhXoVO7mKQDEhbChg3QSNmOqBWBQhLDchjChQlHIUpEiIIhWAWQiBBFixCDQisB4i8B+Qi4B0ipBCQilA4h4g0Qjsh7juhXQnxi3pnh0QpMh+ofh3QlhhYmHgbQgngDiHg1Qh9gxifhKQiWhHh8hGQhzhBgfgoQhLiGhXiFIgcgrQhnidgwjbQg2jQgmjQQgujGhGiHQhOh+iPgCQhuAGCHDLQBLCrgpCwIAAADIggApQhiCMhnBuQlJGDlDEOQnBG8msE4QnsFHAEDyQgiEGDuEqQDJE/D5HdQDTHyAjMIIgfeOQgSjjgZjagEBCWgbvQhcAXgwBRQgwBRAXBcQAWBbBRAwQBSAxBbgXQBcgXAwhRQAxhRgXhcQgYhbhRgxQg2ghg8AAQgcAAgeAIgEA6jgj/QhaAWgvBPQgvBQAWBZQAWBaBQAvQBQAwBZgXQBagXAvhPQAvhPgWhaQgXhZhPgwQg2gfg6AAQgcAAgdAHg");
	this.shape_240.setTransform(1778.063,-41.3784);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("ACwF3QgygdgOg4QgOg4AegxQAdgwA4gPQA4gOAxAdQAxAeAOA4QAOA3gdAyQgdAxg5AOQgSAFgRAAQgkAAghgVgAlCidQgtgbgNg0QgNgzAbgtQAbgtAzgNQA0gOAtAbQAtAcANAzQANAzgbAtQgaAug0ANQgRAEgQAAQgiAAgegSg");
	this.shape_241.setTransform(2187.7891,-223.2888);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("ACCHLQhRgwgWhbQgXhcAwhRQAwhRBcgXQBcgXBQAwQBRAxAYBbQAXBcgxBRQgwBRhcAXQgdAHgcAAQg8AAg4ghgAEAB6Qg4APgdAwQgeAxAOA4QAOA4AyAdQAxAeA3gOQA5gOAdgxQAdgygOg3QgOg4gxgeQghgTgkAAQgSAAgSAEgAluhNQhQgvgWhaQgWhZAvhQQAvhPBagWQBagXBPAvQBPAwAXBZQAWBagvBPQgvBPhaAXQgdAIgcAAQg6AAg2ghgAj1mGQgzANgbAtQgbAtANAzQANA0AtAbQAtAbA0gNQA0gNAaguQAbgtgNgzQgNgzgtgcQgegSghAAQgRAAgRAFg");
	this.shape_242.setTransform(2183.4917,-223.2827);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0E6D00").s().p("EhAVA4nQgpn3hPnLIgGgkQjt1Ao4vJQi9lBgjmUQgnmKBfmeQBbmTDLlpQDHlfEjj1QCxiRD/j0QD3jnEWj6QEPjtD/izQD4ilC5gaIBmgJQDDgJC1DZQC1DFCtEyQCtEfCqEXQCrEDCtCGIAbASQC9B+CMg2QCegRDdAgQJwC2IfF0QGCEIGPA9QGYBuHbDOQC3BggTAJQAhADCHh4IAWgPQDiiZD5iSIgTgTQgxhdgThZIgGgeQhYoVO6mMQDFhcCgg2QSMmRp+WDQhLDchiCgQlGIWpEiIIhXAWQiBBGixCDQisB5i8B+Qi3B1iqBBQilA4h4g0Qjrh8jvhYQnvi3pph4QpNiCoeh8QlghcmGgfQgogEiHg4Qh9g1ighOQiWhKh9hKQhyhFgegpQhHiHhSiIIgbgsQhjiggojcQgwjRggjRQgnjHhDiJQhKiAiQgHQhuADB/DOQBFCtgwCuIAAADIgiAoQhmCIhsBrQlWF2lVEMQnaGinQEYQoCEigFDoQgsD7DpEvQDBFCDuHmQDGH4AJMJIgkLGIgvOfIgOEnQgLjkgRjagEBC7gZyQhbAXgxBRQgwBRAXBcQAXBbBRAwQBSAxBbgXQBcgYAwhRQAxhRgYhbQgXhchRgwQg3ghg7AAQgdAAgeAIgEA7HgiCQhaAXgvBPQgvBQAXBZQAXBaBOAvQBRAvBZgWQBZgXAvhQQAwhPgXhZQgXhahPgvQg2ggg6AAQgcAAgdAHg");
	this.shape_243.setTransform(1783.4141,-66.9179);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("ACwF3QgxgdgOg4QgOg4AdgxQAegxA3gOQA4gOAxAdQAxAeAOA3QAPA4geAxQgdAxg4AOQgSAFgSAAQgkAAghgUgAlDidQgsgbgOgzQgMgzAaguQAcgtAzgNQA0gNAsAbQAuAbANAzQANA0gcAtQgaAug0AMQgRAFgQAAQghAAgfgTg");
	this.shape_244.setTransform(2196.836,-236.3361);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("ACDHLQhRgwgXhbQgXhcAwhRQAxhRBbgXQBcgXBRAwQBRAwAXBcQAYBbgxBRQgwBRhcAYQgeAHgcAAQg8AAg3ghgAEAB6Qg3AOgeAxQgdAxAOA4QAOA4AxAdQAxAeA4gPQA4gOAdgxQAegxgPg4QgOg3gxgeQgigUgkAAQgRAAgSAFgAlvhMQhOgvgXhaQgXhZAvhQQAvhPBagXQBagWBPAvQBPAvAXBaQAXBZgwBPQgvBQhZAXQgdAHgcAAQg6AAg3gggAj1mGQgzANgcAtQgaAuAMAzQAOAzAsAbQAuAbAzgNQA0gMAaguQAcgtgNg0QgNgzgugbQgegSghAAQgQAAgRAEg");
	this.shape_245.setTransform(2192.539,-236.3083);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#0E6D00").s().p("EhDPA3lQgXn4g/nNIgFglQi+1HoWvcQiylHgRmTQgUmIB0mVQBwmLDglaQDdlPEzjgQC8iDEFjnQD9jZEajuQETjiEBioQD5ibC7gVIBmgFQDEgCCtDgQCuDMChE5QCiElCgEcQCiEICpCJIAaASQC5CCCMg4QCegQDdAhQJtC8IbF7QF/EMGOA8QGXBvHaDOQC3BggUAJQAgADCHh5IAWgOQDiiZD4iTIgTgTQgwhdgUhZIgGgeQhZoVO5mOQDGhbCfg3QSMmTp8WEQhKDchjChQlFIVpEiGIhWAWQiCBGixCDQirB6i9B+Qi4B1ipBBQilA5h4g0Qjrh9juhZQnvi5pqh7QpOiFociCQlghhmGgjQgngDiIg9Qh9g3ighTQiWhOh9hNQhyhIgdgqQhDiKhOiKIgZgsQheikghjcQgpjTgajRQghjHg/iMQhGiCiQgLQhvgCB3DTQA+Cug3CsIAAADIgiAnQhtCEhvBnQlkFpllEIQnxGInzD0QoWD7gNDfQg1DvDjE1QC7FEDiHuQC6H/gRMKIg9LEIhoTDQgDjkgJjbgEBDdgXxQhcAXgwBRQgwBSAYBbQAXBcBRAwQBRAwBcgXQBbgYAwhRQAxhRgYhcQgXhbhRgwQg3ghg8AAQgcAAgeAIgEA7oggAQhZAXgwBQQguBQAWBZQAXBZBPAvQBRAvBZgWQBZgXAvhQQAvhPgWhaQgYhZhPgwQg1gfg6AAQgdAAgdAHg");
	this.shape_246.setTransform(1789.0722,-92.9264);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("ACxF3QgygdgOg4QgOg4AdgxQAegxA3gOQA4gOAxAdQAxAdAPA3QAOA5gdAwQgdAyg4AOQgTAFgSAAQgkAAgggUgAlDicQgsgagOg0QgNg0AagtQAcgtAzgNQA0gOAsAbQAuAbANA0QANA0gbAsQgaAtg0AOQgRAEgQAAQghAAgfgSg");
	this.shape_247.setTransform(2205.886,-249.3861);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("ACEHLQhRgwgXhbQgYhcAwhRQAwhRBcgYQBcgXBRAwQBRAwAXBcQAYBbgxBSQgwBRhbAXQgeAIgdAAQg7AAg3ghgAEAB6Qg3AOgeAxQgdAxAOA4QAOA4AyAdQAxAdA4gOQA4gOAdgyQAdgwgOg5QgPg3gxgdQghgUgkAAQgSAAgSAFgAlvhLQhPgvgXhaQgWhZAuhQQAwhPBZgXQBagXBPAvQBPAvAYBaQAWBZgvBQQgvBPhZAXQgdAHgcAAQg6AAg3gfgAj2mFQgzANgcAtQgaAtANA0QAOA0AsAaQAuAbAzgNQA0gOAagtQAbgsgNg0QgNg0gugbQgdgSghAAQgRAAgRAFg");
	this.shape_248.setTransform(2201.5777,-249.3583);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#0E6D00").s().p("EhGBA2dQgFn3gwnQIgEgkQiO1On0vtQinlNACmRQgDmGCKmLQCEmBD1lJQDvk+FDjJQDFh2ELjYQEDjMEdjjQEWjUECigQD7iSC7gOIBmgCQDFAFClDmQCmDTCWE/QCYErCVEhQCYENClCMIAaATQC1CECMg5QCdgRDcAjQJsDEIWGAQF9EQGMA8QGWBuHaDPQC2BggUAKQAfADCHh5IAWgPQDhiZD4iUIgTgTQgxhcgThaIgGgdQhboVO5mQQDFhbCgg3QSLmVp6WFQhKDchiCgQlEIXpFiFIhWAWQiBBGixCEQisB5i8B/Qi4B1iqBCQilA3h4gzQjqh+juhZQnvi6prh/QpOiJobiIQlehkmGgnQgogEiHhAQh+g6ighXQiXhTh8hQQhyhLgbgrQg/iMhKiMIgYguQhYingbjcQgijUgUjRQgbjIg7iNQhCiEiQgRQhvgFBvDVQA3Cxg9CqIAAADIgkAlQhxB/hzBkQlxFbl4EEQoFFroTDOQonDTgUDVQg9DjDeE5QC0FIDWH3QCtIFgrMKIhWLBIiRS/QAEjkgBjcgEBD8gVrQhcAXgwBRQgwBSAYBcQAXBbBRAwQBSAwBbgXQBbgYAwhSQAxhRgYhbQgYhchRgvQg2ghg8AAQgcAAgeAIgEA8Ggd5QhaAXgvBQQguBQAWBZQAXBaBQAuQBQAvBZgXQBZgXAvhQQAwhPgYhZQgXhahPgvQg1gfg6AAQgdAAgdAHg");
	this.shape_249.setTransform(1795.0695,-119.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("ACxF3QgxgdgOg4QgOg4AcgxQAegxA3gPQA5gOAwAdQAyAdAOA4QAPA4geAxQgdAxg4APQgSAEgSAAQgkAAghgTgAlDicQgtgagOg0QgMgzAagtQAbgtAzgOQA0gNAtAbQAtAbANAzQAOA0gcAsQgaAugzANQgRAFgRAAQghAAgegTg");
	this.shape_250.setTransform(2214.9249,-262.4111);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("ACFHLQhSgwgXhcQgYhbAwhSQAwhRBcgXQBcgXBRAvQBRAwAYBcQAXBbgwBRQgwBShbAXQgeAIgeAAQg7AAg2gggAEAB5Qg3APgeAwQgcAyAOA3QAOA4AxAdQAxAeA4gPQA4gOAdgyQAegwgPg5QgOg4gygcQgggUglAAQgRAAgTAFgAlvhLQhPgvgXhZQgXhZAvhRQAuhPBagXQBagXBPAvQBQAvAXBaQAXBZgvBPQgvBQhaAXQgcAIgcAAQg7AAg2gggAj3mFQgzANgbAtQgaAuAMAzQAOA0AtAaQAtAbA0gNQAzgNAaguQAcgtgOg0QgNgzgtgbQgegSghAAQgQAAgSAFg");
	this.shape_251.setTransform(2210.6167,-262.3833);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#0E6D00").s().p("EhIrA1RQALn4genRIgDgkQhg1RnRv/QialTAUmNQAOmDCel/QCYl2EIk3QEBksFRixQDMhmEQjMQEJi+EfjXQEYjJEEiWQD7iJC8gIIBnACQDFALCcDtQCfDZCJFFQCOEwCKElQCQESCgCPIAZATQCxCHCLg6QCdgRDdAkQJpDLISGGQF6EVGLA6QGUBvHaDOQC2BhgVAKQAeADCGh5IAWgPQDiiaD3iTIgTgUQgxhdgUhZIgFgdQhcoVO4mRQDFhcCgg4QSLmVp4WFQhKDchhChQlEIXpFiEIhVAWQiCBHiwCDQitB6i8B/Qi5B1iqBCQikA4h4g1Qjqh9juhZQnui8psiCQpPiMoaiOQldhomGgsQgngFiHhDQh+g9ighcQiXhWh8hUQhyhOgagsQg6iOhFiPIgXguQhTipgUjdQgcjUgNjSQgVjIg2iPQg/iGiQgVQhwgJBoDZQAwCxhDCnIAAADIgmAkQh1B7h3BfQl9FOmLD9QoZFPowCkQo1CqgZDKQhDDWDYFAQCuFLDKH/QCeIMhFMIIhtK+IiPOVIgtEkQANjjAGjcgEBEXgTgQhcAXgxBRQgvBSAYBbQAXBcBRAwQBSAwBcgYQBbgXAvhSQAxhRgYhcQgYhbhRgwQg2ggg7AAQgdAAgeAIgEA8ggbtQhZAXgwBPQguBRAXBZQAWBZBQAvQBRAuBYgWQBagYAvhPQAvhQgYhZQgXhahPgvQg1gfg6AAQgcAAgeAIg");
	this.shape_252.setTransform(1801.45,-146.325);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("ACyF2QgygcgOg4QgPg4AegxQAdgyA3gOQA5gOAwAdQAyAcAOA4QAPA5gdAwQgdAyg4AOQgSAFgSAAQgkAAghgUgAlEibQgtgagNg0QgNgzAaguQAbgtAzgNQA0gOAtAbQAuAbANAzQANA0gbAtQgaAug0ANQgRAEgQAAQghAAgfgSg");
	this.shape_253.setTransform(2223.9637,-275.4611);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("ACFHLQhRgwgXhcQgYhbAvhSQAwhRBcgXQBcgYBRAwQBRAwAYBbQAYBcgxBRQgvBShcAXQgeAIgdAAQg7AAg3gggAEAB4Qg3APgdAxQgeAxAPA4QAOA4AyAdQAxAdA4gOQA4gPAdgxQAdgxgPg4QgOg4gygdQgggTglAAQgRAAgTAEgAlvhKQhQgvgWhZQgXhZAuhRQAvhPBagXQBZgXBPAuQBQAvAXBaQAYBZgwBQQguBPhaAYQgdAHgcAAQg6AAg2gfgAj4mFQgzAOgbAtQgaAtANA0QANAzAtAaQAuAcAzgOQA0gNAaguQAbgsgNg0QgNg0gugaQgegSghAAQgQAAgSAEg");
	this.shape_254.setTransform(2219.6639,-275.4194);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("ACyF2QgxgdgPg3QgOg4AdgxQAdgyA4gOQA3gPAyAdQAxAdAPA4QAOA3gdAyQgdAxg4APQgSAEgSAAQgkAAghgTgAlEiaQgtgagOg0QgMg0AZgtQAbgtA0gOQA0gNAsAaQAuAbANA0QAOAzgbAtQgaAtg0AOQgRAFgQAAQghAAgfgSg");
	this.shape_255.setTransform(2233.0111,-288.5111);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("ACGHLQhRgwgYhbQgXhcAvhSQAvhRBcgYQBcgYBRAwQBRAwAYBbQAYBcgwBRQgwBRhbAZQgeAIgeAAQg7AAg2gggAEBB4Qg4APgdAxQgdAxAOA4QAPA4AxAdQAyAdA3gPQA4gOAdgyQAdgxgOg4QgPg4gxgcQghgUgjAAQgSAAgTAFgAlvhJQhQgvgXhaQgXhZAuhQQAvhPBagYQBZgXBPAvQBRAuAXBaQAXBZgvBQQgvBPhZAYQgdAIgdAAQg5AAg2gfgAj4mEQg0ANgbAtQgZAuAMAzQAOA0AtAaQAuAbAzgNQA0gOAagtQAbgugOgzQgNgzgugbQgdgSghAAQgRAAgRAFg");
	this.shape_256.setTransform(2228.7167,-288.4556);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#0E6D00").s().p("EhLOA0BQAdn4gPnRIgBglQgw1UmtwNQiPlZAmmJQAfl+Cxl0QCrlpEZkjQESkaFdiXQDThYEUi9QENixEhjLQEbi/EEiMQD9iAC7gCIBnAFQDGASCTDzQCXDgB+FJQCCE2CAEpQCFEWCcCRIAZATQCtCLCLg8QCcgRDcAmQJnDRIOGMQF2EaGLA5QGTBvHZDOQC2BhgWAKQAdADCGh5IAWgPQDhiaD4iUIgTgTQgyhdgThZIgGgeQhcoUO3mTQDFhcCfg4QSKmYp1WHQhJDchiChQlCIYpFiDIhWAVQiBBHixCFQisB6i9B/Qi4B1iqBCQilA4h4g1Qjph+juhbQnui7ptiGQpPiQoZiUQlchsmFgvQgngGiIhGQh+hBighgQiWhah8hXQhxhSgZgsQg2iRhBiQIgVguQhNisgOjdQgVjWgHjRQgPjIgyiRQg7iIiPgaQhwgNBfDcQAqCzhKCkIAAACIgnAjQh6B3h6BaQmJFAmeD2QopEwpKB4QpACAgeDAQhJDKDTFFQCnFPC+IHQCRIShgMGIk0ZKIg4EhQAVjjAOjagEBEtgRRQhcAYgwBQQgvBTAXBbQAYBbBRAwQBSAwBcgYQBbgYAwhSQAwhRgYhbQgZhchRgwQg2gfg6AAQgegBgeAJgEA81gZdQhaAXguBPQguBQAXBaQAXBZBPAvQBRAvBZgXQBZgZAvhPQAvhQgYhZQgXhahQguQg1gfg6AAQgcAAgeAIg");
	this.shape_257.setTransform(1808.2608,-173.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("ACzF2QgygdgOg4QgOg4AdgxQAcgyA4gOQA4gOAxAcQAxAdAPA4QAPA3gdAyQgdAxg3APQgUAFgSAAQgjAAghgTgAlEiaQgtgagNg0QgOgzAaguQAbgtA0gOQAygNAuAaQAuAbANAzQAOA0gbAtQgbAugzANQgRAFgRAAQghAAgegSg");
	this.shape_258.setTransform(2242.05,-301.5471);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("ACHHKQhSgvgYhbQgYhcAwhRQAwhSBbgYQBcgYBRAwQBSAvAYBcQAYBbgwBSQgwBRhbAYQgfAIgdAAQg7AAg2gggAEBB4Qg4AOgdAyQgcAxAOA4QAOA4AyAdQAxAdA4gPQA4gPAdgxQAdgygPg3QgPg4gxgdQghgTgkAAQgSAAgSAFgAlvhJQhQgugXhaQgXhZAthQQAvhQBagXQBZgYBQAvQBPAvAYBZQAYBagvBPQgvBQhZAXQgeAIgdAAQg5AAg1gfgAj5mEQgzAOgbAtQgaAuANAzQAOA0AtAaQAtAbA0gOQAzgNAaguQAbgtgNg0QgOgzgugbQgdgRghAAQgQAAgSAEg");
	this.shape_259.setTransform(2237.7639,-301.5085);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#0E6D00").s().p("EhNpAyrQAun2ACnSIAAgkQgB1UmJwcQiDleA3mDQAxl6DDlmQC9lcEokPQEikFFnh+QDahIEXiwQEQikEjjAQEcizEEiEQD+h3C7AEIBnAJQDGAYCKD5QCPDmByFOQB2E7B2EtQB7EZCYCUIAXAUQCpCMCMg8QCcgSDbAoQJlDYIJGSQF0EdGJA4QGSBvHZDPQC1BigXAKQAdADCGh5IAWgQQDhiZD3iVIgTgUQgyhcgUhZIgFgeQheoUO3mUQDEhdCgg4QSJmapzWHQhIDdhiChQlBIYpFiCIhWAWQiBBHixCFQisB6i9B/Qi4B2iqBCQilA5h4g1QjqiAjthaQnti+puiJQpQiUoZiZQlZhwmEg0QgogGiIhKQh9hEihhkQiVheh7hbQhxhVgYgtQgxiSg8iSIgUgvQhJiugGjeQgPjVAAjRQgJjJguiSQg3iJiPgfQhvgRBWDeQAjCzhQChIAAAEIgoAhQh+Byh+BVQmVEymwDsQo5ERpgBKQpIBWghC1QhOC9DOFMQChFTCwIPQCDIYh6MDIlsY+IhBEfQAdjhAVjbgEBE+gO/QhbAYgwBRQgwBSAYBbQAYBcBSAvQBRAwBcgYQBbgZAwhRQAwhRgYhcQgYhbhSgwQg2gfg7AAQgdAAgfAIgEA9GgXKQhaAXgvBQQgtBQAXBZQAXBZBQAvQBQAvBZgYQBZgYAvhPQAvhQgYhZQgYhZhPgwQg1gfg5AAQgdAAgeAJg");
	this.shape_260.setTransform(1815.5782,-201.3582);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AC0F1QgxgcgPg4QgOg4AbgxQAegyA3gOQA4gPAxAdQAxAcAQA4QAPA4gdAxQgeAyg3AOQgTAGgSAAQgkAAgggUgAlEiaQgugagNgzQgNg0AagtQAbgtAygOQA0gOAtAbQAuAaAOA0QANAzgbAtQgaAugzANQgSAFgRAAQggAAgegSg");
	this.shape_261.setTransform(2251.1,-314.5971);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("ACIHKQhSgvgYhcQgYhbAvhSQAwhRBcgYQBbgZBRAwQBSAvAYBcQAYBbgvBRQgvBShcAYQgfAIgdAAQg7AAg2gfgAEBB3Qg3APgdAxQgcAyAOA3QAPA4AxAdQAxAdA4gPQA4gPAdgxQAdgygPg3QgPg4gygdQgggTgjAAQgTAAgTAFgAlvhIQhQgvgXhZQgXhZAthRQAvhPBZgYQBagXBPAuQBQAuAYBaQAYBZgvBQQgvBQhZAXQgeAJgeAAQg4AAg1gfgAj5mEQgzAOgbAtQgaAuANAzQAOA0AtAaQAuAbAzgOQA0gNAZguQAbgugNgzQgOgzgugbQgdgRghAAQgRAAgRAEg");
	this.shape_262.setTransform(2246.7917,-314.5333);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#0E6D00").s().p("EhP9AxRQBAn0ASnRIABglQAu1UlkwoQh2liBHl9QBBl1DVlXQDNlOE3j5QEwjwFvhkQDeg4EaijQETiWEki1QEdipEFh7QD+hvC7AKIBnANQDFAfCBD/QCHDqBlFTQBrFABrEwQBxEcCTCXIAYAUQClCPCMg+QCbgSDbAqQJiDfIFGXQFxEhGIA4QGQBvHZDPQC1BjgYAJQAcAECGh6IAWgPQDgibD3iVIgTgTQgyhcgThaIgGgdQhfoVO3mVQDEhdCfg5QSJmcpxWJQhIDchhCiQlAIYpGiBIhWAXQiBBHixCEQisB7i9CAQi4B2irBCQikA5h4g1QjpiAjthcQnti/pviOQpQiWoYieQlYh0mEg5QgngGiIhNQh9hHighpQiWhjh6heQhwhYgWguQgtiTg4iUIgSgwQhDiwABjeQgJjVAGjQQgDjJgpiTQgziLiOgkQhvgVBODgQAbC0hVCeIgBADIgpAgQiDBtiABRQmgEinDDiQpHDxpzAZQpMArgkCrQhQCxDIFRQCaFYCiIXQB1IeiUL/InudNQAljhAcjZgEBFKgMqQhbAYgwBRQgvBSAYBbQAYBcBRAvQBSAvBcgYQBbgYAvhSQAwhRgYhbQgYhchSgvQg2gfg6AAQgeAAgfAIgEA9RgU1QhaAYguBPQguBRAXBZQAYBZBPAvQBRAuBZgYQBZgXAuhQQAvhQgXhZQgZhahPguQg1geg5AAQgdAAgeAHg");
	this.shape_263.setTransform(1823.429,-229.3454);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AC1F1QgygdgPg3QgPg4AdgxQAdgyA4gPQA3gPAyAdQAxAdAPA4QAPA3gdAyQgdAxg3APQgTAFgTAAQgjAAgggTgAlEiZQgtgagOg0QgOgzAagtQAbguAzgOQAzgNAuAaQAuAbANAzQAOA0gbAtQgaAtgzAOQgSAFgRAAQggAAgegSg");
	this.shape_264.setTransform(2260.1279,-327.6442);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("ACJHKQhSgvgYhcQgYhbAvhSQAvhRBcgZQBbgYBRAvQBSAwAZBbQAYBbgwBSQgvBShbAYQgfAIgdAAQg7AAg2gfgAECB3Qg4APgdAxQgdAyAPA3QAPA4AyAdQAxAcA4gPQA3gOAdgyQAdgxgPg4QgPg4gxgcQghgUgjAAQgTAAgSAGgAlvhIQhQgugYhZQgXhZAuhRQAuhPBagYQBYgXBQAtQBRAvAXBZQAYBaguBPQgvBQhZAYQgeAIgeAAQg4AAg1gfgAj6mDQgzAOgbAtQgaAuAOAzQAOA0AtAZQAtAcA0gPQAzgOAagtQAbgtgOg0QgNgzgugaQgfgSggAAQgRAAgRAFg");
	this.shape_265.setTransform(2255.8417,-327.5583);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#0E6D00").s().p("EhSJAv0QBSnyAhnQIADgkQBd1Sk/w0QhqlmBYl3QBQltDllIQDek/FEjjQE8jaF1hJQDignEbiWQEViJElirQEeieEFh0QD+hmC7AQIBmAQQDFAmB4EEQB+DwBZFXQBfFDBhE0QBmEfCPCZIAXAUQCgCSCNg/QCagTDcArQJfDnIBGdQFtElGHA2QGPBvHYDQQC1BigYAKQAbADCFh5IAWgPQDhibD2iWIgTgTQgyhcgUhZIgGgeQhfoUO2mXQDEheCfg4QSImepuWJQhJDehgChQlAIYpFiBIhXAXQiABIixCFQitB7i9CBQi4B2iqBCQilA5h3g2QjpiAjthcQnsjBpwiRQpRiboWijQlXh3mDg+QgngGiIhRQh9hLightQiVhnh5hhQhvhbgWgvQgniUg0iWIgQgxQg+iyAIjcQgCjVAMjQQADjJgliUQgviNiNgpQhvgYBFDiQAVC0hbCaIgBADIgqAeQiGBpiEBMQmqESnWDXQkqBolFAoQk+AqkngDQpOgBglChQhTClDCFYQCUFbCUIgQBmIjiuL7IjNKoIlhSSQAsjfAkjYgEBFRgKTQhcAZgvBRQgvBSAYBbQAYBcBSAvQBSAvBbgYQBbgYAvhSQAwhSgYhbQgZhbhSgwQg1gfg7AAQgdAAgfAIgEA9XgScQhaAYguBPQguBRAXBZQAYBZBQAuQBQAvBZgYQBZgYAvhQQAuhPgYhaQgXhZhRgvQg1geg5AAQgcAAgeAIg");
	this.shape_266.setTransform(1831.8176,-257.5644);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AC1F1QgxgdgPg3QgPg4AcgyQAegxA3gPQA3gOAyAcQAxAcAPA4QAPA4gcAxQgdAyg4APQgTAFgSAAQgjAAghgTgAlFiYQgtgagOg0QgNgzAaguQAagtAzgOQA0gOAtAaQAuAbAOAzQANAzgaAuQgaAug0ANQgSAFgRAAQggAAgegRg");
	this.shape_267.setTransform(2269.1779,-340.6643);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("ACJHKQhRgvgZhcQgYhaAvhTQAvhRBcgZQBbgYBRAvQBSAvAZBbQAZBcgwBRQgvBShbAZQgfAIgeAAQg7AAg2gfgAECB2Qg3APgeAyQgcAxAPA4QAPA4AxAcQAyAdA3gPQA4gPAdgxQAcgxgPg5QgPg3gxgdQghgTgkAAQgSAAgSAFgAlvhHQhQgugYhZQgXhZAthRQAuhPBagYQBZgYBQAuQBPAuAZBZQAYBagvBPQgtBRhaAXQgeAIgeAAQg4AAg1gegAj7mCQgzAOgaAtQgaAtANA0QAOAzAtAaQAuAbAzgOQA0gOAaguQAagtgNgzQgOgzgugbQgdgRggAAQgSAAgSAFg");
	this.shape_268.setTransform(2264.8891,-340.6058);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#0E6D00").s().p("EhTuAuTQBjnuAxnQIAEgkQCN1Okaw+QhdlpBnlvQBglmD0k4QDskvFPjMQFHjEF6gtQDkgXEdiJQEVh8EmihQEeiUEFhsQD9heC7AWIBmAUQDEAtBuEJQB2D1BNFaQBTFHBVE2QBdEiCKCbIAWAVQCdCUCMhBQCbgTDaAtQJdDtH8GjQFqEpGHA2QGOBuHYDQQC1BjgaAKQAaADCFh7IAWgPQDgiaD3iWIgTgTQgzhcgUhZIgGgeQhgoUO1mZQDDhdCgg5QSHmgprWKQhIDehhChQk+IYpGh/IhWAXQiBBIixCFQisB8i+CBQi4B3iqBCQilA4h3g1QjpiBjshdQnsjCpxiVQpRieoVipQlVh8mDhBQgngHiHhUQh9hOifhyQiUhrh5hlQhuhegUgvQgjiWgviYIgPgwQg4i0AOjcQAFjVASjPQAJjIghiVQgqiOiNguQhugcA9DjQAOC0hhCWIgBAEIgrAcQiKBjiGBIQjaCBj0CGQjtB8jiBIQkuBYlPAQQlEAUkogaQpNgsglCYQhUCYC8FfQCOFfCGIoQBXIpjIL1IoQYPIhfEXQA0jeAsjWgEBFxgH5QhcAYgvBSQgvBSAYBbQAZBbBRAvQBSAvBcgYQBbgYAvhSQAwhSgZhbQgZhbhSgwQg1gfg6AAQgeAAgfAJgEA92gQCQhaAYguBQQgtBQAXBZQAYBZBQAvQBQAuBZgYQBagYAthQQAvhQgYhZQgZhahPguQg0geg5AAQgdAAgfAIg");
	this.shape_269.setTransform(1837.6644,-285.9663);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AC2F1QgygdgPg4QgPg3AdgyQAcgxA4gPQA3gPAyAcQAyAdAPA3QAPA5gdAxQgdAxg3APQgTAFgTAAQgjAAgggSgAlFiYQgtgagOgzQgOgzAaguQAbgtAzgOQAzgOAtAaQAuAbAOAzQAOAzgbAtQgZAug0AOQgSAFgRAAQggAAgegSg");
	this.shape_270.setTransform(2278.222,-353.7114);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("ACKHJQhSgvgYhbQgZhbAvhSQAvhSBcgZQBbgYBRAvQBSAvAZBbQAZBcgwBRQguBShcAZQgfAIgeAAQg6AAg2gfgAECB2Qg4APgcAxQgdAyAPA3QAPA4AyAdQAxAcA4gPQA3gPAdgxQAdgxgPg5QgPg3gygdQghgSgjAAQgSAAgTAFgAlwhHQhQgtgXhaQgYhZAthQQAuhQBagYQBZgYBQAuQBQAuAYBZQAYBZguBQQguBQhZAYQgfAJgdAAQg5AAg1gfgAj7mCQgzAOgbAtQgaAuAOAzQAOAzAtAaQAuAbAzgOQA0gOAZguQAbgtgOgzQgOgzgugbQgdgRggAAQgSAAgRAFg");
	this.shape_271.setTransform(2273.9387,-353.6304);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#0E6D00").s().p("EhUiAsvQB1nqBBnOIAFgkQC81Ij0xHQhRltB3lmQBuleECknQD6keFZi1QFQisF8gSQDlgGEdh8QEXhvEliYQEfiKEEhlQD9hXC6AdIBmAXQDCA0BlENQBtD6BAFdQBIFKBKE5QBSEkCFCdIAWAVQCYCXCOhCQCZgUDaAvQJbDzH4GpQFmEtGGA1QGNBtHXDRQC1BkgaAKQAaADCEh7IAVgPQDhicD2iVIgUgTQgyhcgUhZIgGgeQhioUO1maQDEheCfg6QSHmhpqWLQhHDehhCiQk+IZpGh/IhWAXQiABIixCGQitB8i9CBQi5B3iqBCQilA5h3g2QjniBjtheQnrjDpyiZQpSiioTivQlUh/mChFQgngHiHhZQh8hQieh3QiUhvh3hpQhthhgTgwQggiWgpiZIgOgyQgyi1AVjbQALjUAZjPQAPjHgciWQgniPiLgzQhuggA0DlQAHCzhmCTIAAADIgtAbQiOBeiIBCQjfB5j+CAQj1B2jnA+QkyBGlVgJQlJgCkngxQpIhXglCPQhUCMC2FmQCHFkB3IvQBHIujhLvIj9KZIlJNjIhoEUQA8jcAyjVgEBG1gFeQhcAZguBRQgvBTAYBaQAYBbBTAvQBSAvBbgZQBbgYAvhRQAwhSgZhbQgZhbhSgwQg2gfg6AAQgeAAgfAJgEA+5gNmQhZAYguBQQguBRAYBZQAYBZBQAuQBRAuBYgYQBagZAthPQAvhRgYhYQgYhahRguQg0geg5AAQgdAAgfAIg");
	this.shape_272.setTransform(1839.8963,-314.5516);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AC3F0QgygcgPg4QgPg3AcgyQAdgxA3gQQA5gPAxAdQAxAcAPA4QAPA3gcAyQgdAyg3APQgUAFgSAAQgjAAgggTgAlFiXQgtgagOgzQgOg0AagtQAbguAygOQA0gOAtAaQAuAbAOAzQAOA0gbAsQgZAvg0ANQgSAFgRAAQggAAgegRg");
	this.shape_273.setTransform(2287.2386,-366.7614);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("ACLHJQhSgvgZhbQgYhbAuhSQAwhSBbgZQBbgYBRAuQBTAwAYBbQAZBbgvBRQgvBThbAYQgfAJgfAAQg6AAg1gfgAECB1Qg4AQgcAxQgdAyAQA3QAPA4AxAcQAyAdA3gPQA4gPAcgyQAdgygPg3QgPg4gygcQgggTgjAAQgTAAgTAFgAlwhGQhQgugYhZQgYhZAthQQAvhQBZgZQBZgYBQAuQBQAuAZBZQAYBaguBPQguBRhZAYQgfAIgeAAQg4AAg1gegAj8mCQgzAOgbAuQgaAtAOA0QAPAzAtAaQAtAbA0gPQAzgNAagvQAbgsgPg0QgNgzgugbQgdgRghAAQgRAAgSAFg");
	this.shape_274.setTransform(2282.9636,-366.6804);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#0E6D00").s().p("EhVPArIQCGnmBRnLIAGgkQDq1BjNxPQhElvCFldQB9lWEOkUQEGkNFhidQFYiVF8AKQDkALEehwQEWhiEliPQEfiBEDhdQD9hQC5AjIBlAaQDCA7BbERQBkD/AzFgQA7FNBAE6QBIEmCACfIAVAVQCUCZCOhDQCagUDaAwQJYD6HzGuQFjExGFAzQGMBuHWDSQC1BkgcAKQAaAECEh8IAVgPQDgicD2iXIgTgTQgyhbgVhZIgGgeQhioTOzmcQDEhfCfg5QSGmkpnWNQhHDdhgChQk9IbpGh+IhWAYQiABIiyCGQisB8i+CCQi4B3irBCQikA5h3g2QjpiCjrheQnrjFpzicQpRimoSi1QlTiDmBhKQgngHiGhbQh8hUidh7QiThzh3htQhshkgRgxQgaiXgliaIgMgyQgti3AcjaQARjUAfjNQAVjGgYiXQgiiQiKg4QhtgkAsDmQAACzhrCOIgBADIguAZQiRBaiLA9QjjBwkIB6Qj/BvjqAyQk0A2lagiQlMgbklhGQpAiCgkCGQhSCBCvFtQCAFoBnI3QA4Izj7LoIkTKPInZRoQBDjaA6jTgEBHygDCQhbAZgvBRQgvBSAZBbQAZBbBRAvQBSAvBcgZQBbgZAuhSQAwhSgZhaQgZhbhSgvQg2gfg5AAQgeAAggAJgEA/1gLJQhZAYguBQQgtBRAYBZQAYBYBQAvQBQAtBZgYQBagYAthQQAuhQgYhZQgYhahRguQg0gdg4AAQgeAAgfAIg");
	this.shape_275.setTransform(1842.8193,-343.2326);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},103).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147}]},1).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159}]},1).to({state:[{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165}]},1).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171}]},1).to({state:[{t:this.shape_176},{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177}]},1).to({state:[{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183}]},1).to({state:[{t:this.shape_188},{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189}]},1).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_197},{t:this.shape_196},{t:this.shape_195}]},1).to({state:[{t:this.shape_200},{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201}]},1).to({state:[{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_209},{t:this.shape_208},{t:this.shape_207}]},1).to({state:[{t:this.shape_212},{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_221},{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_224},{t:this.shape_223},{t:this.shape_222}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225}]},1).to({state:[{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_233},{t:this.shape_232},{t:this.shape_231}]},1).to({state:[{t:this.shape_236},{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_242},{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_245},{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_248},{t:this.shape_247},{t:this.shape_246}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_257},{t:this.shape_256},{t:this.shape_255}]},1).to({state:[{t:this.shape_260},{t:this.shape_259},{t:this.shape_258}]},1).to({state:[{t:this.shape_263},{t:this.shape_262},{t:this.shape_261}]},1).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264}]},1).to({state:[{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_272},{t:this.shape_271},{t:this.shape_270}]},1).to({state:[{t:this.shape_275},{t:this.shape_274},{t:this.shape_273}]},1).wait(1));

	// Каркас_1
	this.ikNode_1 = new lib.голова();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(1289.95,718.75,0.9999,0.9999,0,0,0,254.3,123.7);

	this.ikNode_2 = new lib.крылолев();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(1221.05,534,0.9999,0.9999,0,0,0,220,335.9);

	this.ikNode_4 = new lib.крылоправ();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(1541.65,670.55,0.9998,0.9998,0,0,0,268.6,268.6);

	this.ikNode_6 = new lib.тело();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(1405.6,514.35,0.9999,0.9999,0,0,0,403.2,279.9);

	this.ikNode_8 = new lib.рогправ();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(1255.35,994.6,0.9999,0.9999,0,0,0,88.5,126.8);

	this.ikNode_10 = new lib.роглев();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(1031.45,859.1,0.9998,0.9998,0,0,0,61.1,107.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_10,p:{rotation:0,x:1031.45,y:859.1,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:0,x:1255.35,y:994.6,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.2,scaleX:0.9999,scaleY:0.9999,rotation:0,x:1405.6,y:514.35}},{t:this.ikNode_4,p:{regX:268.6,rotation:0,x:1541.65,y:670.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:0,x:1221.05,y:534,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.7,scaleX:0.9999,scaleY:0.9999,rotation:0,x:1289.95,y:718.75}}]}).to({state:[{t:this.ikNode_10,p:{rotation:-0.07,x:1030.8,y:857.8,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-1.2225,x:1257.85,y:994.8,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:-0.0227,x:1405.75,y:514.45}},{t:this.ikNode_4,p:{regX:268.7,rotation:1.4692,x:1542.6,y:674.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:336,rotation:-1.163,x:1218.95,y:535.1,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:-0.0227,x:1290.05,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.1434,x:1030,y:856.45,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-2.4464,x:1260.2,y:995.05,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:-0.0472,x:1405.7,y:514.4}},{t:this.ikNode_4,p:{regX:268.7,rotation:2.9412,x:1543.3,y:678.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-2.3283,x:1217.15,y:535.7,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:-0.0472,x:1290.05,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.2169,x:1029.3,y:855,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-3.6715,x:1262.5,y:995.3,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:-0.0717,x:1405.55,y:514.4}},{t:this.ikNode_4,p:{regX:268.7,rotation:4.4134,x:1543.95,y:682.95,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:-3.4945,x:1215.05,y:536.55,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:-0.0717,x:1290.05,y:719}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.2903,x:1028.6,y:853.6,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-4.8957,x:1264.85,y:995.55,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:-0.0971,x:1405.45,y:514.25}},{t:this.ikNode_4,p:{regX:268.6,rotation:5.885,x:1544.35,y:687.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:-4.6595,x:1213.15,y:537.5,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:-0.0971,x:1290.05,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.3629,x:1027.85,y:852.05,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-6.1202,x:1267.2,y:995.75,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.1215,x:1405.4,y:514.3}},{t:this.ikNode_4,p:{regX:268.7,rotation:7.3569,x:1544.9,y:691.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-5.8247,x:1211.15,y:538.2,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.1215,x:1290.05,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.4364,x:1027.05,y:850.65,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-7.3441,x:1269.6,y:996.05,scaleX:0.9999,scaleY:0.9999,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.146,x:1405.3,y:514.2}},{t:this.ikNode_4,p:{regX:268.7,rotation:8.8293,x:1545.45,y:695.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-6.9906,x:1209.15,y:539.05,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.146,x:1290.05,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.5098,x:1026.4,y:849.15,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-8.5679,x:1271.95,y:996.05,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.1714,x:1405.2,y:514.15}},{t:this.ikNode_4,p:{regX:268.7,rotation:10.3006,x:1545.75,y:699.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-8.155,x:1207.2,y:539.9,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.1714,x:1290.05,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.5824,x:1025.7,y:847.8,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-9.793,x:1274.35,y:996.4,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.1959,x:1405.05,y:514.1}},{t:this.ikNode_4,p:{regX:268.7,rotation:11.7735,x:1546,y:703.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-9.3202,x:1205.25,y:540.8,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.1959,x:1290.05,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.6559,x:1025.05,y:846.35,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-11.0172,x:1276.65,y:996.5,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.2203,x:1404.95,y:514.1}},{t:this.ikNode_4,p:{regX:268.7,rotation:13.2451,x:1546.25,y:708.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:-10.4856,x:1203.3,y:541.85,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.2203,x:1290.05,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.7293,x:1024.3,y:844.8,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-12.242,x:1278.95,y:996.6,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.2448,x:1404.9,y:514}},{t:this.ikNode_4,p:{regX:268.7,rotation:14.7169,x:1546.4,y:712.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:-11.651,x:1201.4,y:542.85,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.2448,x:1290.1,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.8028,x:1023.65,y:843.45,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-13.4653,x:1281.35,y:996.6,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.2702,x:1404.8,y:514}},{t:this.ikNode_4,p:{regX:268.8,rotation:16.1895,x:1546.6,y:716.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-12.8169,x:1199.45,y:543.7,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.2702,x:1290.05,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.8754,x:1022.9,y:841.9,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-14.6897,x:1283.75,y:996.6,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.2947,x:1404.75,y:513.95}},{t:this.ikNode_4,p:{regX:268.7,rotation:17.6612,x:1546.45,y:720.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-13.9828,x:1197.5,y:544.65,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.2947,x:1290.1,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.9489,x:1022.2,y:840.5,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-15.9145,x:1286.1,y:996.7,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.3192,x:1404.7,y:513.85}},{t:this.ikNode_4,p:{regX:268.7,rotation:19.1338,x:1546.45,y:724.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:-15.1465,x:1195.55,y:545.75,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.3192,x:1290.1,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.0223,x:1021.5,y:839.05,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-17.1385,x:1288.45,y:996.7,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.3445,x:1404.6,y:513.85}},{t:this.ikNode_4,p:{regX:268.7,rotation:20.6052,x:1546.3,y:729.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:-16.312,x:1193.7,y:546.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.3445,x:1290.1,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.0958,x:1020.95,y:837.6,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-18.3633,x:1290.9,y:996.65,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.6}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.369,x:1404.5,y:513.8}},{t:this.ikNode_4,p:{regX:268.7,rotation:22.0771,x:1546.1,y:733.25,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-17.4779,x:1191.8,y:547.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.369,x:1290.1,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.1684,x:1020.3,y:836.1,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-19.5867,x:1293.15,y:996.7,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.3935,x:1404.4,y:513.7}},{t:this.ikNode_4,p:{regX:268.7,rotation:23.5489,x:1545.75,y:737.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-18.6434,x:1189.95,y:548.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.3935,x:1290.05,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.2418,x:1019.6,y:834.65,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-20.8112,x:1295.55,y:996.6,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.4197,x:1404.35,y:513.7}},{t:this.ikNode_4,p:{regX:268.6,rotation:25.0213,x:1545.4,y:741.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-19.8085,x:1188.1,y:549.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.4197,x:1290.05,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.3153,x:1019,y:833.15,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-22.0359,x:1297.85,y:996.6,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:-0.4433,x:1404.25,y:513.65}},{t:this.ikNode_4,p:{regX:268.8,rotation:26.4931,x:1545.1,y:745.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:-20.9736,x:1186.4,y:551.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:-0.4433,x:1290.05,y:719}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.3337,x:1017.9,y:830.55,regY:107.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-19.0242,x:1287.55,y:996.65,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:0.7695,x:1408.5,y:516.15}},{t:this.ikNode_4,p:{regX:268.6,rotation:26.0379,x:1544.95,y:746.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-18.0603,x:1192.55,y:547.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.7,scaleX:0.9999,scaleY:0.9999,rotation:0.7695,x:1290,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.3521,x:1016.75,y:827.7,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-16.0128,x:1277.1,y:996.4,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:1.987,x:1412.75,y:518.7}},{t:this.ikNode_4,p:{regX:268.7,rotation:25.583,x:1544.95,y:746.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:-15.1474,x:1199,y:543.95,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:1.987,x:1290,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.3704,x:1015.65,y:824.95,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-13.001,x:1266.75,y:995.85,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:3.2046,x:1416.95,y:521.3}},{t:this.ikNode_4,p:{regX:268.6,rotation:25.1273,x:1544.8,y:746.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-12.2346,x:1205.55,y:540.55,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:3.2046,x:1290,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.3879,x:1014.65,y:822.25,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-9.9899,x:1256.35,y:994.65,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:4.4219,x:1421.25,y:524}},{t:this.ikNode_4,p:{regX:268.7,rotation:24.6723,x:1544.85,y:747.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-9.321,x:1212.35,y:537.5,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:4.4219,x:1290,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.4063,x:1013.65,y:819.55,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-6.9784,x:1246,y:993.15,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:5.6394,x:1425.25,y:526.9}},{t:this.ikNode_4,p:{regX:268.7,rotation:24.2179,x:1544.85,y:747.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-6.4087,x:1219.15,y:534.8,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:5.6394,x:1290,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.4247,x:1012.7,y:816.95,regY:107.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-3.9669,x:1235.6,y:991.3,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:6.8559,x:1429.35,y:529.8}},{t:this.ikNode_4,p:{regX:268.7,rotation:23.7631,x:1544.8,y:747.65,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-3.4954,x:1226.05,y:532.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:6.8559,x:1289.95,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.443,x:1011.75,y:814.1,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:-0.9558,x:1225.35,y:989,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:8.073,x:1433.35,y:532.85}},{t:this.ikNode_4,p:{regX:268.7,rotation:23.3084,x:1544.8,y:747.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-0.5815,x:1233.15,y:530,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:8.073,x:1289.95,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.4614,x:1010.8,y:811.35,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:2.0518,x:1215.2,y:986.4,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:9.2901,x:1437.2,y:535.9}},{t:this.ikNode_4,p:{regX:268.7,rotation:22.8531,x:1544.75,y:748.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:2.3274,x:1240.25,y:528,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:9.2901,x:1289.95,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.4798,x:1009.9,y:808.6,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:5.0641,x:1205.05,y:983.35,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.2,scaleX:0.9998,scaleY:0.9998,rotation:10.508,x:1440.9,y:538.95}},{t:this.ikNode_4,p:{regX:268.7,rotation:22.3975,x:1544.75,y:748.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:5.2406,x:1247.5,y:526.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.7,scaleX:0.9998,scaleY:0.9998,rotation:10.508,x:1290,y:718.75}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.4981,x:1009,y:805.85,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:8.0757,x:1195.1,y:980,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:11.7253,x:1444.85,y:542.3}},{t:this.ikNode_4,p:{regX:268.7,rotation:21.9425,x:1544.7,y:748.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:8.1532,x:1254.8,y:524.8,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:11.7253,x:1289.95,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.5165,x:1008.25,y:803.25,regY:107.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:11.0867,x:1185.25,y:976.15,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:12.9419,x:1448.5,y:545.65}},{t:this.ikNode_4,p:{regX:268.7,rotation:21.4877,x:1544.75,y:748.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:11.0668,x:1262.15,y:523.55,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:12.9419,x:1290,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.5349,x:1007.4,y:800.35,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:14.0975,x:1175.5,y:972.05,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:14.1588,x:1452.2,y:549.05}},{t:this.ikNode_4,p:{regX:268.7,rotation:21.0325,x:1544.8,y:748.6,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:13.98,x:1269.5,y:522.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:14.1588,x:1289.95,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.5533,x:1006.6,y:797.6,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:17.1092,x:1166,y:967.5,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:15.3761,x:1455.8,y:552.5}},{t:this.ikNode_4,p:{regX:268.7,rotation:20.5769,x:1544.7,y:748.75,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:16.8924,x:1276.85,y:522,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:15.3761,x:1290.05,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.5716,x:1005.85,y:794.85,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:20.1206,x:1156.75,y:962.6,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.6}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:16.593,x:1459.3,y:556}},{t:this.ikNode_4,p:{regX:268.7,rotation:20.1218,x:1544.65,y:748.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:19.8066,x:1284.4,y:521.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:16.593,x:1290,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.5891,x:1005.1,y:792,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:23.1327,x:1147.4,y:957.45,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:17.8106,x:1462.65,y:559.7}},{t:this.ikNode_4,p:{regX:268.6,rotation:19.667,x:1544.55,y:748.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:22.7185,x:1291.8,y:521.6,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:17.8106,x:1290,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.6075,x:1004.4,y:789.3,regY:107.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:26.1443,x:1138.6,y:951.8,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.6}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:19.0281,x:1466,y:563.3}},{t:this.ikNode_4,p:{regX:268.7,rotation:19.2126,x:1544.7,y:749.05,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:25.6324,x:1299.15,y:521.95,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:19.0281,x:1290,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.6259,x:1003.8,y:786.4,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:29.1551,x:1129.8,y:945.8,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.2,scaleX:0.9998,scaleY:0.9998,rotation:20.2445,x:1469.15,y:567.1}},{t:this.ikNode_4,p:{regX:268.7,rotation:18.7577,x:1544.65,y:749.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:28.5457,x:1306.65,y:522.25,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:20.2445,x:1289.95,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.6442,x:1003.05,y:783.65,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:32.1664,x:1121.3,y:939.6,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.2,scaleX:0.9998,scaleY:0.9998,rotation:21.4617,x:1472.4,y:570.95}},{t:this.ikNode_4,p:{regX:268.7,rotation:18.3019,x:1544.7,y:749.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:31.4579,x:1314.05,y:523.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:21.4617,x:1289.95,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.6626,x:1002.45,y:780.9,regY:107.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:35.1783,x:1113.05,y:933.05,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:22.6789,x:1475.6,y:574.85}},{t:this.ikNode_4,p:{regX:268.7,rotation:17.8476,x:1544.65,y:749.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:34.3718,x:1321.25,y:524.05,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:22.6789,x:1290.05,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.681,x:1001.9,y:777.95,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:38.1906,x:1105.1,y:926.2,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:23.8967,x:1478.55,y:578.85}},{t:this.ikNode_4,p:{regX:268.7,rotation:17.3915,x:1544.55,y:749.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:37.2851,x:1328.55,y:525.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:23.8967,x:1289.95,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.6993,x:1001.3,y:775.25,regY:107.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:41.2015,x:1097.45,y:919.1,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:25.1141,x:1481.5,y:582.95}},{t:this.ikNode_4,p:{regX:268.7,rotation:16.9368,x:1544.6,y:750,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:40.1975,x:1335.85,y:527,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:25.1141,x:1289.95,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.7177,x:1000.8,y:772.2,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:44.2122,x:1089.95,y:911.65,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:26.3312,x:1484.35,y:586.95}},{t:this.ikNode_4,p:{regX:268.7,rotation:16.482,x:1544.5,y:750.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:43.1108,x:1343,y:528.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:26.3312,x:1290,y:718.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.7361,x:1000.25,y:769.35,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:47.2246,x:1082.95,y:904.1,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.6}},{t:this.ikNode_6,p:{regX:403.2,scaleX:0.9998,scaleY:0.9998,rotation:27.5474,x:1487.05,y:591.1}},{t:this.ikNode_4,p:{regX:268.7,rotation:16.0265,x:1544.45,y:750.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:46.024,x:1350.05,y:531,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:27.5474,x:1290,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.7545,x:999.75,y:766.5,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:50.2356,x:1076.05,y:896.1,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:28.7652,x:1489.75,y:595.35}},{t:this.ikNode_4,p:{regX:268.6,rotation:15.5713,x:1544.25,y:750.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:48.9367,x:1357,y:533.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:28.7652,x:1290,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.772,x:999.3,y:763.5,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:53.2471,x:1069.6,y:888,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:29.9825,x:1492.3,y:599.65}},{t:this.ikNode_4,p:{regX:268.7,rotation:15.1161,x:1544.4,y:751.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:51.8497,x:1363.9,y:535.95,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.7,scaleX:0.9998,scaleY:0.9998,rotation:29.9825,x:1290.05,y:718.8}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.7903,x:998.85,y:760.65,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:56.2573,x:1063.45,y:879.65,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:31.1993,x:1494.8,y:604}},{t:this.ikNode_4,p:{regX:268.8,rotation:14.6609,x:1544.45,y:751.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:54.7632,x:1370.55,y:538.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:31.1993,x:1290,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.0975,x:998.35,y:757.35,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:54.2963,x:1066.85,y:884.5,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:31.0503,x:1494.5,y:603.4}},{t:this.ikNode_4,p:{regX:268.7,rotation:16.3608,x:1543.75,y:756,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:52.6688,x:1367.3,y:537.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:31.0503,x:1289.95,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.404,x:998,y:753.85,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:52.334,x:1070.55,y:889.2,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:30.9012,x:1494.25,y:602.95}},{t:this.ikNode_4,p:{regX:268.7,rotation:18.06,x:1543.05,y:760.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:50.5747,x:1363.85,y:536,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:30.9012,x:1289.95,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:0.2833,x:997.6,y:750.5,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:50.3717,x:1074.25,y:893.9,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:30.7519,x:1493.85,y:602.4}},{t:this.ikNode_4,p:{regX:268.6,rotation:19.7583,x:1542.15,y:764.65,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:48.4819,x:1360.55,y:534.65,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:30.7519,x:1289.9,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:0.9768,x:997.2,y:747.05,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:48.4089,x:1078.2,y:898.6,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:30.6025,x:1493.6,y:601.7}},{t:this.ikNode_4,p:{regX:268.6,rotation:21.4578,x:1541.3,y:769,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:46.387,x:1357.15,y:533.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:30.6025,x:1289.95,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:1.6705,x:996.85,y:743.7,regY:107.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:46.4464,x:1082.2,y:903.3,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:30.4531,x:1493.25,y:601.3}},{t:this.ikNode_4,p:{regX:268.7,rotation:23.1571,x:1540.55,y:773.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:44.2927,x:1353.6,y:532.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.7,scaleX:0.9998,scaleY:0.9998,rotation:30.4531,x:1290.05,y:718.75}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:2.3644,x:996.65,y:740.05,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:44.4837,x:1086.35,y:907.95,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:30.3042,x:1493,y:600.75}},{t:this.ikNode_4,p:{regX:268.6,rotation:24.8562,x:1539.4,y:777.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:42.1986,x:1350.1,y:531.05,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:30.3042,x:1289.9,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:3.0577,x:996.4,y:736.55,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:42.521,x:1090.6,y:912.4,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:30.1545,x:1492.65,y:600.2}},{t:this.ikNode_4,p:{regX:268.7,rotation:26.5549,x:1538.4,y:782.35,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:40.1045,x:1346.45,y:529.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:30.1545,x:1289.95,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:3.7507,x:996.15,y:733,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:40.5598,x:1095,y:916.8,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:30.0049,x:1492.35,y:599.7}},{t:this.ikNode_4,p:{regX:268.8,rotation:28.2547,x:1537.3,y:786.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:38.0114,x:1342.9,y:528.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:30.0049,x:1290,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:4.4433,x:996,y:729.45,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:38.5977,x:1099.55,y:921.25,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:29.8556,x:1492.05,y:599.15}},{t:this.ikNode_4,p:{regX:268.7,rotation:29.9545,x:1535.9,y:791.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:35.9169,x:1339.4,y:527.95,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:29.8556,x:1289.95,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:5.1374,x:995.9,y:725.85,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:36.6349,x:1104.3,y:925.6,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.6}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:29.7064,x:1491.7,y:598.6}},{t:this.ikNode_4,p:{regX:268.7,rotation:31.653,x:1534.6,y:795.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:33.8227,x:1335.75,y:526.95,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:29.7064,x:1289.9,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:5.8306,x:995.8,y:722.35,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:34.6721,x:1108.95,y:929.6,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:29.5571,x:1491.4,y:598.15}},{t:this.ikNode_4,p:{regX:268.7,rotation:33.3525,x:1533.1,y:800.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:31.728,x:1332.1,y:526.1,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:29.5571,x:1289.9,y:718.8}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:6.5237,x:995.8,y:718.85,regY:107.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:32.7105,x:1113.9,y:933.65,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:29.4076,x:1491.1,y:597.55}},{t:this.ikNode_4,p:{regX:268.8,rotation:35.0516,x:1531.65,y:804.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:29.635,x:1328.35,y:525.3,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:29.4076,x:1289.9,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:7.2178,x:995.9,y:715.15,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:30.7475,x:1118.85,y:937.7,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:29.2584,x:1490.75,y:597.1}},{t:this.ikNode_4,p:{regX:268.7,rotation:36.7499,x:1529.95,y:809.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:27.5411,x:1324.65,y:524.65,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:29.2584,x:1289.95,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:7.9112,x:995.95,y:711.6,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:28.7844,x:1123.9,y:941.55,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:29.1093,x:1490.45,y:596.55}},{t:this.ikNode_4,p:{regX:268.7,rotation:38.4498,x:1528.2,y:813.7,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:25.4466,x:1320.9,y:524,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:29.1093,x:1289.95,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:8.6047,x:996,y:707.95,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:26.8224,x:1129.1,y:945.4,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:28.9602,x:1490.1,y:595.95}},{t:this.ikNode_4,p:{regX:268.7,rotation:40.1494,x:1526.4,y:818.05,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:23.3521,x:1317.25,y:523.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:28.9602,x:1289.85,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:9.2971,x:996.2,y:704.4,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:24.8606,x:1134.35,y:948.95,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:28.8103,x:1489.8,y:595.45}},{t:this.ikNode_4,p:{regX:268.7,rotation:41.8473,x:1524.5,y:822.45,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:21.2584,x:1313.45,y:523.05,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:28.8103,x:1289.9,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:9.9908,x:996.35,y:700.85,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:22.898,x:1139.65,y:952.6,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:28.6608,x:1489.45,y:594.9}},{t:this.ikNode_4,p:{regX:268.7,rotation:43.5467,x:1522.5,y:826.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:19.1647,x:1309.7,y:522.6,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:28.6608,x:1289.9,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:10.6841,x:996.65,y:697.25,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:20.9354,x:1145.05,y:955.8,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:28.5113,x:1489.15,y:594.35}},{t:this.ikNode_4,p:{regX:268.7,rotation:45.2461,x:1520.5,y:831.05,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:17.0705,x:1305.95,y:522.2,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.7,scaleX:0.9998,scaleY:0.9998,rotation:28.5113,x:1289.9,y:718.8}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:11.3773,x:996.95,y:693.7,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:18.9733,x:1150.55,y:959.05,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:28.3622,x:1488.85,y:593.9}},{t:this.ikNode_4,p:{regX:268.8,rotation:46.9457,x:1518.45,y:835.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:14.9762,x:1302.2,y:522.1,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:28.3622,x:1289.9,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:12.0712,x:997.3,y:690.1,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:17.0105,x:1156.05,y:962.25,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:28.2132,x:1488.45,y:593.4}},{t:this.ikNode_4,p:{regX:268.8,rotation:48.644,x:1516.2,y:839.65,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:12.8823,x:1298.5,y:521.75,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:28.2132,x:1289.9,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:12.7644,x:997.6,y:686.6,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:15.0479,x:1161.55,y:965.3,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:28.0637,x:1488.15,y:592.9}},{t:this.ikNode_4,p:{regX:268.7,rotation:50.3429,x:1513.95,y:843.7,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:10.7881,x:1294.7,y:521.55,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:28.0637,x:1289.85,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:13.4574,x:997.95,y:683.1,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:13.0855,x:1167.25,y:968.05,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:27.9139,x:1487.85,y:592.3}},{t:this.ikNode_4,p:{regX:268.7,rotation:52.0429,x:1511.6,y:847.65,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:8.6942,x:1290.95,y:521.6,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:27.9139,x:1289.9,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:14.151,x:998.45,y:679.55,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:11.124,x:1172.85,y:970.7,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:27.7649,x:1487.5,y:591.9}},{t:this.ikNode_4,p:{regX:268.7,rotation:53.7421,x:1509.25,y:851.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:6.6005,x:1287.2,y:521.6,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:27.7649,x:1289.9,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:14.8446,x:998.95,y:676.1,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:9.1609,x:1178.5,y:973.3,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:27.6155,x:1487.2,y:591.25}},{t:this.ikNode_4,p:{regX:268.8,rotation:55.4409,x:1506.85,y:855.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:4.506,x:1283.5,y:521.65,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:27.6155,x:1289.95,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:15.5378,x:999.45,y:672.6,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:7.1987,x:1184.2,y:975.85,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:27.4665,x:1486.85,y:590.85}},{t:this.ikNode_4,p:{regX:268.7,rotation:57.1399,x:1504.35,y:859.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:2.4123,x:1279.65,y:521.85,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:27.4665,x:1289.85,y:718.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:16.2315,x:1000.1,y:669.15,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:5.2371,x:1189.95,y:978,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.2,scaleX:0.9998,scaleY:0.9998,rotation:27.3171,x:1486.35,y:590.3}},{t:this.ikNode_4,p:{regX:268.7,rotation:58.8395,x:1501.85,y:863.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:0.3183,x:1276.15,y:522.05,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:27.3171,x:1289.9,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:16.9249,x:1000.65,y:665.9,regY:107.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:3.2738,x:1195.7,y:980.05,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:27.1681,x:1486.2,y:589.75}},{t:this.ikNode_4,p:{regX:268.8,rotation:60.5378,x:1499.35,y:867,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-1.7718,x:1272.45,y:522.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:27.1681,x:1289.9,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:17.6183,x:1001.3,y:662.4,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:1.3117,x:1201.4,y:982.2,scaleX:0.9999,scaleY:0.9999,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.2,scaleX:0.9998,scaleY:0.9998,rotation:27.0187,x:1485.65,y:589.25}},{t:this.ikNode_4,p:{regX:268.7,rotation:62.2374,x:1496.7,y:870.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-3.866,x:1268.85,y:522.65,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:27.0187,x:1289.9,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:18.3108,x:1002,y:659.05,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-0.6471,x:1207.2,y:983.9,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.6}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:26.8693,x:1485.5,y:588.8}},{t:this.ikNode_4,p:{regX:268.7,rotation:63.9371,x:1494.05,y:873.95,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-5.9601,x:1265.2,y:523.1,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.7,scaleX:0.9998,scaleY:0.9998,rotation:26.8693,x:1289.9,y:718.75}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:19.0046,x:1002.65,y:655.8,regY:107.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-2.6093,x:1212.75,y:985.6,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.2,scaleX:0.9998,scaleY:0.9998,rotation:26.7203,x:1485.05,y:588.2}},{t:this.ikNode_4,p:{regX:268.7,rotation:65.6353,x:1491.5,y:877.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-8.0534,x:1261.7,y:523.55,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:26.7203,x:1289.9,y:718.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:22.3677,x:1006.95,y:632.95,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:3.0505,x:1189.45,y:971.95,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:30.9605,x:1494.3,y:597.25}},{t:this.ikNode_4,p:{regX:268.7,rotation:68.3525,x:1481.75,y:883.05,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-1.6467,x:1279.75,y:515.95,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:30.9605,x:1289.85,y:713.05}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:25.7293,x:1012.15,y:610.45,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:8.7147,x:1166.85,y:956.15,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:35.2009,x:1502.25,y:606.8}},{t:this.ikNode_4,p:{regX:268.7,rotation:71.0687,x:1471.45,y:888.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:4.756,x:1298,y:510.05,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:35.2009,x:1289.85,y:707.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:29.0919,x:1018.35,y:588.4,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:14.379,x:1145.25,y:938.45,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.2,scaleX:0.9998,scaleY:0.9998,rotation:39.4414,x:1508.95,y:616.85}},{t:this.ikNode_4,p:{regX:268.7,rotation:73.7859,x:1460.55,y:892.65,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:11.1631,x:1316.1,y:505.95,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:39.4414,x:1289.8,y:701.35}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:32.4538,x:1025.5,y:566.8,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:20.0423,x:1124.8,y:918.85,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:43.6816,x:1514.7,y:627.55}},{t:this.ikNode_4,p:{regX:268.7,rotation:76.5023,x:1449.15,y:896.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:17.5697,x:1334.15,y:503.25,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:43.6816,x:1289.8,y:695.45}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:35.8164,x:1033.5,y:545.55,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:25.7074,x:1105.55,y:897.55,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:47.9222,x:1519.1,y:638.55}},{t:this.ikNode_4,p:{regX:268.7,rotation:79.219,x:1437.1,y:899.65,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:23.9766,x:1351.85,y:502.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:47.9222,x:1289.85,y:689.65}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:39.1792,x:1042.4,y:524.95,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:31.3712,x:1087.8,y:874.4,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.2,scaleX:0.9998,scaleY:0.9998,rotation:52.1614,x:1522.2,y:649.65}},{t:this.ikNode_4,p:{regX:268.7,rotation:81.9353,x:1424.6,y:902,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:30.3837,x:1369,y:503.05,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:52.1614,x:1289.75,y:683.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:42.5413,x:1052.15,y:504.8,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:37.0359,x:1071.6,y:849.9,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.2,scaleX:0.9998,scaleY:0.9998,rotation:56.4018,x:1524,y:661.1}},{t:this.ikNode_4,p:{regX:268.7,rotation:84.6528,x:1411.75,y:903.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:36.7912,x:1385.45,y:505.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:56.4018,x:1289.8,y:678}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:45.9035,x:1062.7,y:485.3,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:42.6993,x:1057.25,y:823.85,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:60.6425,x:1524.75,y:672.7}},{t:this.ikNode_4,p:{regX:268.7,rotation:87.3687,x:1398.4,y:904.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:336,rotation:43.1974,x:1401,y:509.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:60.6425,x:1289.8,y:672.1}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:49.2663,x:1074,y:466.5,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:48.363,x:1044.55,y:796.7,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:64.8828,x:1524,y:684.25}},{t:this.ikNode_4,p:{regX:268.7,rotation:90.0805,x:1384.8,y:904.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:49.6045,x:1415.8,y:514.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:64.8828,x:1289.75,y:666.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:52.6283,x:1086.1,y:448.35,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:54.027,x:1033.9,y:768.4,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:69.1235,x:1522.05,y:695.6}},{t:this.ikNode_4,p:{regX:268.7,rotation:92.7968,x:1370.9,y:903.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:56.0121,x:1429.55,y:521.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:69.1235,x:1289.8,y:660.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:55.9912,x:1098.75,y:431.05,regY:107.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:59.6919,x:1025.35,y:739.45,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.6}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:73.3632,x:1518.75,y:706.8}},{t:this.ikNode_4,p:{regX:268.7,rotation:95.5132,x:1356.65,y:902.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:62.4182,x:1441.95,y:528.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:73.3632,x:1289.75,y:654.6}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:59.3528,x:1112.2,y:414.4,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:65.3554,x:1018.75,y:709.45,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:77.6031,x:1514.25,y:717.75}},{t:this.ikNode_4,p:{regX:268.6,rotation:98.2308,x:1342.25,y:899.65,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:68.826,x:1453.15,y:538,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:77.6031,x:1289.75,y:648.7}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:62.7153,x:1126.15,y:398.6,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:71.0192,x:1014.45,y:679.15,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:81.8439,x:1508.6,y:728.3}},{t:this.ikNode_4,p:{regX:268.7,rotation:100.9465,x:1327.65,y:896.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:75.2327,x:1462.8,y:548,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:81.8439,x:1289.7,y:642.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:66.0784,x:1140.7,y:383.6,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:76.6838,x:1012.3,y:648.55,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:86.084,x:1501.6,y:738.4}},{t:this.ikNode_4,p:{regX:268.7,rotation:103.6642,x:1312.95,y:892.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:81.64,x:1470.85,y:558.85,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:86.084,x:1289.7,y:637}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:69.4405,x:1155.7,y:369.5,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:82.3481,x:1012.35,y:617.9,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:90.3209,x:1493.55,y:748.05}},{t:this.ikNode_4,p:{regX:268.7,rotation:106.3799,x:1298.2,y:887.6,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:88.0471,x:1477.5,y:570.35,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:90.3209,x:1289.8,y:631.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:72.8024,x:1171.05,y:356.25,regY:107.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:88.0121,x:1014.65,y:587.3,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:94.5613,x:1484.45,y:756.95}},{t:this.ikNode_4,p:{regX:268.7,rotation:109.097,x:1283.4,y:881.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:94.4499,x:1482.45,y:582.45,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:94.5613,x:1289.8,y:625.35}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:76.1655,x:1187.05,y:344,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:93.6724,x:1019.2,y:557,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:98.8013,x:1474.1,y:765.1}},{t:this.ikNode_4,p:{regX:268.7,rotation:111.8134,x:1268.65,y:875.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:100.8567,x:1485.55,y:595,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:98.8013,x:1289.75,y:619.45}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:79.5275,x:1203.25,y:332.6,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:99.3363,x:1025.85,y:527.15,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:103.0413,x:1462.8,y:772.5}},{t:this.ikNode_4,p:{regX:268.7,rotation:114.5307,x:1253.95,y:867.65,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:107.2636,x:1487.05,y:607.55,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:103.0413,x:1289.75,y:613.6}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:82.8897,x:1219.75,y:322.15,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:105,x:1034.65,y:498.05,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:107.2824,x:1450.6,y:778.9}},{t:this.ikNode_4,p:{regX:268.7,rotation:117.2471,x:1239.3,y:859.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:113.6708,x:1486.65,y:620.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:107.2824,x:1289.75,y:607.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:86.2519,x:1236.55,y:312.7,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:110.6642,x:1045.45,y:469.8,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:111.5218,x:1437.55,y:784.6}},{t:this.ikNode_4,p:{regX:268.8,rotation:119.9635,x:1224.9,y:850.25,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:120.0773,x:1484.7,y:633,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.7,scaleX:0.9998,scaleY:0.9998,rotation:111.5218,x:1289.9,y:602.1}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:89.6152,x:1253.5,y:304.3,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:116.3285,x:1058.2,y:442.7,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:115.763,x:1423.6,y:789.15}},{t:this.ikNode_4,p:{regX:268.6,rotation:122.6798,x:1210.8,y:840.05,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:126.485,x:1480.9,y:645.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:115.763,x:1289.8,y:596.1}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:92.9719,x:1270.55,y:296.85,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:121.9919,x:1072.9,y:416.75,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:120.0029,x:1408.95,y:792.65}},{t:this.ikNode_4,p:{regX:268.7,rotation:125.3973,x:1196.75,y:829.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:132.8911,x:1475.3,y:657.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:120.0029,x:1289.7,y:590.25}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:96.3336,x:1287.75,y:290.35,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:127.6566,x:1089.3,y:392.15,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:124.2425,x:1393.65,y:795.15}},{t:this.ikNode_4,p:{regX:268.7,rotation:128.1135,x:1183.1,y:817.7,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:139.2987,x:1468.3,y:668.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:124.2425,x:1289.75,y:584.45}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:99.6961,x:1304.9,y:284.95,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:133.3198,x:1107.2,y:369,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:128.4838,x:1377.85,y:796.3}},{t:this.ikNode_4,p:{regX:268.8,rotation:130.8305,x:1169.8,y:805.45,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:145.7056,x:1459.6,y:679.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:128.4838,x:1289.75,y:578.5}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:103.0587,x:1322.05,y:280.5,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:138.9839,x:1126.7,y:347.8,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:132.7234,x:1361.5,y:796.3}},{t:this.ikNode_4,p:{regX:268.7,rotation:133.5461,x:1156.9,y:792.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:152.1119,x:1449.5,y:688.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:132.7234,x:1289.7,y:572.65}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:106.4211,x:1339.1,y:277,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:144.6492,x:1147.4,y:328.35,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:136.9642,x:1344.75,y:795.2}},{t:this.ikNode_4,p:{regX:268.7,rotation:136.264,x:1144.4,y:778.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:158.519,x:1437.85,y:697.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:136.9642,x:1289.75,y:566.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:109.7835,x:1356,y:274.65,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:150.3128,x:1169.2,y:310.75,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:141.2039,x:1327.7,y:792.8}},{t:this.ikNode_4,p:{regX:268.7,rotation:138.9798,x:1132.35,y:763.65,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:164.9269,x:1424.95,y:704.8,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:141.2039,x:1289.75,y:561}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:113.145,x:1372.65,y:273.05,regY:107.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_8,p:{rotation:155.9761,x:1192,y:295.1,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:145.4448,x:1310.45,y:789.1}},{t:this.ikNode_4,p:{regX:268.7,rotation:141.6965,x:1120.9,y:748.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:171.3341,x:1410.95,y:710.95,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:145.4448,x:1289.7,y:555.1}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:116.5083,x:1389.1,y:272.6,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:161.6403,x:1215.4,y:281.75,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.6}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:149.6848,x:1293.1,y:784.15}},{t:this.ikNode_4,p:{regX:268.6,rotation:144.4127,x:1110.1,y:732.25,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:177.7408,x:1395.9,y:715.55,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:149.6848,x:1289.7,y:549.25}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:119.8704,x:1405.2,y:273,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:167.304,x:1239.65,y:270.2,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:153.9249,x:1275.75,y:777.9}},{t:this.ikNode_4,p:{regX:268.7,rotation:147.1297,x:1099.65,y:715.75,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-175.8561,x:1379.95,y:719.05,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:153.9249,x:1289.75,y:543.45}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:123.2324,x:1420.8,y:274.4,regY:107.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:172.9687,x:1264.1,y:261.1,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:158.1658,x:1258.45,y:770.35}},{t:this.ikNode_4,p:{regX:268.8,rotation:149.8472,x:1089.85,y:698.6,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-169.4494,x:1363.3,y:720.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:158.1658,x:1289.7,y:537.55}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:126.5955,x:1436.25,y:276.85,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:178.6332,x:1288.75,y:254,scaleX:0.9999,scaleY:0.9999,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:162.4051,x:1241.35,y:761.6}},{t:this.ikNode_4,p:{regX:268.7,rotation:152.5636,x:1080.8,y:680.75,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-163.0429,x:1346,y:721,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:162.4051,x:1289.8,y:531.75}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:129.957,x:1450.9,y:279.9,regY:107.3,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-175.707,x:1313.35,y:249.25,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:166.646,x:1224.45,y:751.5}},{t:this.ikNode_4,p:{regX:268.7,rotation:155.2804,x:1072.5,y:662.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-156.6354,x:1328.25,y:719.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:166.646,x:1289.7,y:525.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:133.3203,x:1465.35,y:284.15,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-170.0429,x:1337.75,y:246.55,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:170.8861,x:1208,y:740.25}},{t:this.ikNode_4,p:{regX:268.7,rotation:157.9963,x:1064.85,y:643.6,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-150.2279,x:1310.3,y:716.5,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:170.8861,x:1289.7,y:520}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1479,y:289.15,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3781,x:1361.8,y:246,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1263,x:1191.9,y:727.7}},{t:this.ikNode_4,p:{regX:268.7,rotation:160.7133,x:1057.95,y:624.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-143.8214,x:1292.1,y:711.65,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1263,x:1289.8,y:514.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1496.7,y:268.5,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3783,x:1379.5,y:225.35,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1263,x:1209.65,y:707.05}},{t:this.ikNode_4,p:{regX:268.7,rotation:164.3589,x:1071.25,y:593.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:-147.5731,x:1317.25,y:690.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1263,x:1307.5,y:493.6}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1514.4,y:247.85,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.38,x:1397.25,y:204.7,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.2,scaleX:0.9998,scaleY:0.9998,rotation:175.1271,x:1227.5,y:686.5}},{t:this.ikNode_4,p:{regX:268.6,rotation:168.0041,x:1085.05,y:562.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:-151.3236,x:1342.25,y:669.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1271,x:1325.15,y:472.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1532.1,y:227.25,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.38,x:1414.95,y:184.1,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1272,x:1245.1,y:665.85}},{t:this.ikNode_4,p:{regX:268.7,rotation:171.6499,x:1098.95,y:531.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-155.0764,x:1367.4,y:648.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1272,x:1342.9,y:452.25}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1549.8,y:206.6,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.38,x:1432.65,y:163.45,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1272,x:1262.85,y:645.2}},{t:this.ikNode_4,p:{regX:268.8,rotation:175.2953,x:1113.35,y:500.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-158.8268,x:1392.7,y:626.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1272,x:1360.6,y:431.6}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1567.55,y:186,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3808,x:1450.4,y:142.85,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1281,x:1280.55,y:624.55}},{t:this.ikNode_4,p:{regX:268.7,rotation:178.941,x:1128.3,y:468.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-162.5788,x:1417.9,y:604.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1281,x:1378.3,y:411}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1585.25,y:165.35,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3808,x:1468.1,y:122.25,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1281,x:1298.25,y:603.9}},{t:this.ikNode_4,p:{regX:268.7,rotation:-177.4186,x:1143.7,y:437.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-166.3298,x:1442.95,y:582.2,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1281,x:1396.05,y:390.35}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1602.95,y:144.75,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3808,x:1485.8,y:101.6,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.129,x:1315.9,y:583.25}},{t:this.ikNode_4,p:{regX:268.7,rotation:-173.7739,x:1159.6,y:405.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:-170.0821,x:1468.05,y:559.45,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.129,x:1413.7,y:369.75}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1620.65,y:124.1,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3817,x:1503.55,y:80.85,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.129,x:1333.65,y:562.65}},{t:this.ikNode_4,p:{regX:268.6,rotation:-170.1284,x:1176.15,y:373.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-173.8332,x:1493,y:536.75,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.129,x:1431.4,y:349.15}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1638.35,y:103.5,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3817,x:1521.25,y:60.25,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1298,x:1351.35,y:542.05}},{t:this.ikNode_4,p:{regX:268.7,rotation:-166.4825,x:1192.9,y:341.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-177.5851,x:1517.8,y:513.65,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1298,x:1449.1,y:328.45}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1656.05,y:82.85,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3817,x:1538.95,y:39.6,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1298,x:1369.05,y:521.4}},{t:this.ikNode_4,p:{regX:268.6,rotation:-162.8366,x:1210.45,y:310.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:178.6673,x:1542.5,y:490.3,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1298,x:1466.8,y:307.8}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1673.8,y:62.3,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3817,x:1556.7,y:19,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1298,x:1386.75,y:500.75}},{t:this.ikNode_4,p:{regX:268.7,rotation:-159.1911,x:1228.2,y:278.75,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:174.9157,x:1566.9,y:466.8,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1298,x:1484.5,y:287.15}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1691.5,y:41.65,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3819,x:1574.4,y:-1.65,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1307,x:1404.5,y:480.05}},{t:this.ikNode_4,p:{regX:268.8,rotation:-161.15,x:1245.65,y:265.95,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:176.1279,x:1579.95,y:448.15,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1307,x:1502.3,y:266.55}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1709.2,y:21.05,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3819,x:1592.1,y:-22.25,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1307,x:1422.2,y:459.4}},{t:this.ikNode_4,p:{regX:268.7,rotation:-163.108,x:1263.55,y:253.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:177.3409,x:1592.8,y:429.5,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1307,x:1520,y:245.9}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1726.9,y:0.4,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3819,x:1609.85,y:-42.9,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1307,x:1439.9,y:438.8}},{t:this.ikNode_4,p:{regX:268.6,rotation:-165.0679,x:1281.75,y:240.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:178.5536,x:1605.65,y:410.7,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1307,x:1537.7,y:225.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1744.65,y:-20.2,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3819,x:1627.55,y:-63.5,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1307,x:1457.65,y:418.15}},{t:this.ikNode_4,p:{regX:268.7,rotation:-167.0251,x:1299.95,y:228.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:179.7665,x:1618.5,y:391.85,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1307,x:1555.45,y:204.65}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1762.35,y:-40.7,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3836,x:1645.25,y:-84.2,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1316,x:1475.35,y:397.5}},{t:this.ikNode_4,p:{regX:268.7,rotation:-168.9849,x:1318.6,y:216.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-179.025,x:1631,y:372.85,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1316,x:1573.15,y:184.1}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1780.05,y:-61.35,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3836,x:1663,y:-104.8,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1316,x:1493.05,y:376.9}},{t:this.ikNode_4,p:{regX:268.7,rotation:-170.9422,x:1337.5,y:203.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:-177.8118,x:1643.65,y:353.75,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1316,x:1590.85,y:163.45}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1797.75,y:-81.95,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3836,x:1680.7,y:-125.45,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1316,x:1510.8,y:356.25}},{t:this.ikNode_4,p:{regX:268.7,rotation:-172.9013,x:1356.6,y:191.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-176.5992,x:1656.05,y:334.5,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1316,x:1608.6,y:142.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1815.5,y:-102.6,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3836,x:1698.45,y:-146,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1324,x:1528.5,y:335.65}},{t:this.ikNode_4,p:{regX:268.7,rotation:-174.86,x:1376.15,y:179.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-175.3861,x:1668.55,y:315.1,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1324,x:1626.3,y:122.1}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1833.2,y:-123.2,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3836,x:1716.15,y:-166.55,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1324,x:1546.2,y:315}},{t:this.ikNode_4,p:{regX:268.7,rotation:-176.8179,x:1395.85,y:166.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-174.1735,x:1680.95,y:295.5,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1324,x:1644,y:101.45}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1850.9,y:-143.8,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3844,x:1733.9,y:-187.15,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1324,x:1563.95,y:294.35}},{t:this.ikNode_4,p:{regX:268.7,rotation:-178.7774,x:1415.85,y:154.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-172.9609,x:1693.35,y:275.9,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1324,x:1661.75,y:80.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1868.65,y:-164.45,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3844,x:1751.65,y:-207.75,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1324,x:1581.65,y:273.75}},{t:this.ikNode_4,p:{regX:268.6,rotation:179.2698,x:1436.3,y:141.6,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-171.7487,x:1705.75,y:256.05,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1324,x:1679.45,y:60.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1886.35,y:-185.05,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3844,x:1769.35,y:-228.4,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1333,x:1599.35,y:253.1}},{t:this.ikNode_4,p:{regX:268.7,rotation:177.3109,x:1456.65,y:128.95,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:-170.5354,x:1718.2,y:236.1,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1333,x:1697.1,y:39.6}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1904.05,y:-205.7,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3844,x:1787.1,y:-249,scaleX:0.9998,scaleY:0.9998,regY:126.9,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1333,x:1617.1,y:232.5}},{t:this.ikNode_4,p:{regX:268.7,rotation:175.3524,x:1477.45,y:116.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:-169.3232,x:1730.55,y:215.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1333,x:1714.85,y:18.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1921.75,y:-226.3,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3853,x:1804.7,y:-269.55,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1333,x:1634.8,y:211.85}},{t:this.ikNode_4,p:{regX:268.7,rotation:173.3945,x:1498.45,y:103.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-168.1104,x:1742.9,y:195.6,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1333,x:1732.55,y:-1.65}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1939.5,y:-246.9,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3853,x:1822.4,y:-290.15,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9999,scaleY:0.9999,rotation:175.1333,x:1652.5,y:191.2}},{t:this.ikNode_4,p:{regX:268.7,rotation:171.4359,x:1519.55,y:89.95,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-166.8969,x:1755.35,y:175.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9999,scaleY:0.9999,rotation:175.1333,x:1750.25,y:-22.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1957.2,y:-267.55,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3853,x:1840.15,y:-310.8,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1670.25,y:170.6}},{t:this.ikNode_4,p:{regX:268.7,rotation:169.4771,x:1540.95,y:76.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-165.6845,x:1767.8,y:154.6,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1768,y:-42.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1974.9,y:-288.15,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3853,x:1857.85,y:-331.4,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1687.95,y:149.95}},{t:this.ikNode_4,p:{regX:268.7,rotation:167.519,x:1562.55,y:62.95,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-164.4727,x:1780.3,y:133.85,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1785.7,y:-63.5}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:1992.65,y:-308.8,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3855,x:1875.6,y:-352.05,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1705.7,y:129.35}},{t:this.ikNode_4,p:{regX:268.7,rotation:165.5597,x:1584.3,y:49.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-163.2595,x:1792.95,y:113.05,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1803.45,y:-84.1}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2010.35,y:-329.4,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3855,x:1893.3,y:-372.65,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1723.4,y:108.7}},{t:this.ikNode_4,p:{regX:268.7,rotation:165.2577,x:1601.05,y:27.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-162.0445,x:1811.45,y:92.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1821.15,y:-104.65}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2028.1,y:-350.05,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3855,x:1911.05,y:-393.25,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1741.1,y:88.1}},{t:this.ikNode_4,p:{regX:268.7,rotation:164.9554,x:1618,y:5.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:-160.8298,x:1830.1,y:71.95,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1838.9,y:-125.25}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2045.8,y:-370.65,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3855,x:1928.75,y:-413.9,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1758.85,y:67.5}},{t:this.ikNode_4,p:{regX:268.7,rotation:164.6529,x:1634.95,y:-17,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-159.6145,x:1848.5,y:51.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1856.6,y:-145.85}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2063.55,y:-391.3,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3855,x:1946.5,y:-434.5,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1776.55,y:46.85}},{t:this.ikNode_4,p:{regX:268.7,rotation:164.3497,x:1651.8,y:-39.05,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-158.3996,x:1867.1,y:30.65,scaleX:0.9999,scaleY:0.9999}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1874.35,y:-166.5}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2081.25,y:-411.9,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3855,x:1964.25,y:-455.15,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1794.3,y:26.25}},{t:this.ikNode_4,p:{regX:268.7,rotation:164.0472,x:1668.7,y:-61.05,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:-157.1858,x:1885.65,y:10.15,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1892.05,y:-187.1}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2099,y:-432.55,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3855,x:1981.95,y:-475.75,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1812,y:5.65}},{t:this.ikNode_4,p:{regX:268.7,rotation:163.7449,x:1685.6,y:-83.2,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:-155.9706,x:1904.15,y:-10.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1909.8,y:-207.7}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2116.7,y:-453.15,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3855,x:1999.7,y:-496.4,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1829.75,y:-15}},{t:this.ikNode_4,p:{regX:268.7,rotation:163.4422,x:1702.5,y:-105.25,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-154.7556,x:1922.55,y:-31.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1927.5,y:-228.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2134.45,y:-473.8,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3863,x:2017.4,y:-517,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1847.45,y:-35.6}},{t:this.ikNode_4,p:{regX:268.7,rotation:163.1393,x:1719.4,y:-127.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-153.5409,x:1941.2,y:-51.7,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1945.25,y:-248.95}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2152.2,y:-494.45,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3863,x:2035.15,y:-537.6,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1865.2,y:-56.2}},{t:this.ikNode_4,p:{regX:268.7,rotation:162.8364,x:1736.4,y:-149.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-152.3255,x:1959.7,y:-72.3,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1962.95,y:-269.55}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2169.9,y:-515.05,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3863,x:2052.9,y:-558.25,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1882.9,y:-76.85}},{t:this.ikNode_4,p:{regX:268.7,rotation:162.5341,x:1753.4,y:-171.45,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-151.1111,x:1978.2,y:-92.9,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1980.7,y:-290.15}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2187.65,y:-535.7,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3863,x:2070.6,y:-578.85,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1900.65,y:-97.45}},{t:this.ikNode_4,p:{regX:268.7,rotation:162.2315,x:1770.35,y:-193.4,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-149.8969,x:1996.75,y:-113.55,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1998.45,y:-310.75}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2205.35,y:-556.3,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3863,x:2088.35,y:-599.5,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1918.35,y:-118.05}},{t:this.ikNode_4,p:{regX:268.7,rotation:161.929,x:1787.3,y:-215.5,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:219.9,regY:335.9,rotation:-148.6822,x:2015.35,y:-134.1,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:2016.15,y:-331.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2223.1,y:-576.95,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3863,x:2106.1,y:-620.1,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1936.1,y:-138.7}},{t:this.ikNode_4,p:{regX:268.7,rotation:161.6262,x:1804.3,y:-237.65,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-147.4666,x:2033.8,y:-154.8,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:2033.9,y:-352}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2240.8,y:-597.55,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3863,x:2123.8,y:-640.75,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1953.8,y:-159.3}},{t:this.ikNode_4,p:{regX:268.7,rotation:161.3236,x:1821.25,y:-259.75,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-146.2522,x:2052.4,y:-175.35,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:2051.6,y:-372.6}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2258.55,y:-618.2,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3863,x:2141.55,y:-661.35,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1971.55,y:-179.9}},{t:this.ikNode_4,p:{regX:268.7,rotation:161.0205,x:1838.25,y:-281.85,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_2,p:{regX:220,regY:335.9,rotation:-145.0373,x:2070.9,y:-196,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:2069.35,y:-393.2}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:136.6822,x:2276.25,y:-638.85,regY:107.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_8,p:{rotation:-164.3863,x:2159.25,y:-682,scaleX:0.9998,scaleY:0.9998,regY:126.8,regX:88.5}},{t:this.ikNode_6,p:{regX:403.3,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:1989.25,y:-200.55}},{t:this.ikNode_4,p:{regX:268.7,rotation:160.718,x:1855.3,y:-303.95,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_2,p:{regX:220,regY:336,rotation:-143.8221,x:2089.5,y:-216.75,scaleX:0.9998,scaleY:0.9998}},{t:this.ikNode_1,p:{regY:123.8,scaleX:0.9998,scaleY:0.9998,rotation:175.1342,x:2087.05,y:-413.85}}]},1).to({state:[]},1).wait(40));

	// Слой_7
	this.instance = new lib.трава();
	this.instance.setTransform(-68,-33,0.5068,0.3896);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(117.4,-240.8,2297.4,2711.7000000000003);
// library properties:
lib.properties = {
	id: 'D7DEC1A364E1DC43BFE24D3753D06612',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{ src:"Практики/6/images/трава_.jpg", id:"трава"},
		{ src:"Практики/6/images/animatsia_6_atlas_1.png", id:"animatsia_6_atlas_1"},
		{ src:"Практики/6/images/animatsia_6_atlas_2.png", id:"animatsia_6_atlas_2"},
		{ src:"Практики/6/images/animatsia_6_atlas_3.png", id:"animatsia_6_atlas_3"}
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
an.compositions['D7DEC1A364E1DC43BFE24D3753D06612'] = {
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