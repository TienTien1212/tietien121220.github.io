(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"AN_01_CRC_P7_v3_atlas_1", frames: [[0,770,893,44],[1622,487,287,37],[1622,441,414,44],[1368,441,252,95],[0,0,1366,768],[1368,0,463,439]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib._01 = function() {
	this.initialize(ss["AN_01_CRC_P7_v3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._02 = function() {
	this.initialize(ss["AN_01_CRC_P7_v3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._03 = function() {
	this.initialize(ss["AN_01_CRC_P7_v3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bd = function() {
	this.initialize(ss["AN_01_CRC_P7_v3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(ss["AN_01_CRC_P7_v3_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.nv = function() {
	this.initialize(ss["AN_01_CRC_P7_v3_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._03();
	this.instance.setTransform(-207,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-22,414,44);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._02();
	this.instance.setTransform(-143.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-18.5,287,37);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.nv();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,463,439), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,893,44), null);


(lib.Symbol_btn_bd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("click");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(7));

	// Layer_1
	this.instance = new lib.bd();
	this.instance.setTransform(0,0,0.8571,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,95);


(lib.Symbol_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol_btn_bd();
	this.instance.setTransform(126,47.5,1,1,0,0,0,126,47.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol_btn_bd(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol_btn, new cjs.Rectangle(0,0,252,95), null);


// stage content:
(lib.AN_01_CRC_P7_v3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,419];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var frameNumber = _this.currentFrame;
		if (frameNumber == 0) {
			window.parent.cpAPIInterface.play();
		}
			_this.btn_bd.addEventListener("click", bd.bind(this))
			function bd(){
				window.parent.cpAPIInterface.setVariableValue("cpCmndNextSlide", 1);
			}
	}
	this.frame_419 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(419).call(this.frame_419).wait(8));

	// btn_bd
	this.btn_bd = new lib.Symbol_btn();
	this.btn_bd.name = "btn_bd";
	this.btn_bd.setTransform(694.05,421.05,0.2698,0.2105,0,0,0,126,47.5);
	this.btn_bd._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_bd).wait(247).to({_off:false},0).to({scaleX:1,scaleY:1,x:694,y:421},15).to({_off:true},158).wait(7));

	// Layer_5
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(678,250,1,0.3636);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(190).to({_off:false},0).to({scaleY:1},15).to({_off:true},215).wait(7));

	// Layer_4
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(679,142);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(171).to({_off:false},0).to({x:678.5,y:192.5},12).to({_off:true},237).wait(7));

	// Layer_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("AhyDhIAAnBIDlAAIAAHBg");
	var mask_graphics_47 = new cjs.Graphics().p("AgEDhIAAnBIDvAAIAAHBgAjqDhIAAnBIDmAAIAAHBgAgEjgg");
	var mask_graphics_51 = new cjs.Graphics().p("AiLDhIAAnBIDvAAIEOAAIAAG3IkOAAIAAm3IAAG3IAAAKgAlxDhIAAnBIDmAAIAAHBgAiLjgg");
	var mask_graphics_54 = new cjs.Graphics().p("AkSDhIAAnBIDwAAIAAG3IAAAKgAkSDhIjmAAIAAnBIDmAAIAAHBgAgiDXIAAm3IENAAIAAGtIAAAKgADrDNIAAmtIEOAAIAAGtgADrDNg");
	var mask_graphics_57 = new cjs.Graphics().p("AmKDhIAAnBIDwAAIAAG3IAAAKgAmKDhIjmAAIAAnBIDmAAIAAHBgAiaDXIAAm3IENAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAGBDNIAAmtIDwAAIAAGtg");
	var mask_graphics_60 = new cjs.Graphics().p("AoHDhIAAnBIDwAAIAAG3IAAAKgAoHDhIjmAAIAAnBIDmAAIAAHBgAkXDXIAAm3IEOAAIENAAIAAGtIkNAAIAAmtIAAGtIAAAKgAH0DNIAAmtID6AAIAAGtgAEEDNIAAmtIDwAAIAAGtgAH0jggAkXjgg");
	var mask_graphics_65 = new cjs.Graphics().p("AqODhIAAnBIDwAAIAAG3IAAAKgAqODhIjmAAIAAnBIDmAAIAAHBgAmeDXIAAm3IEOAAIENAAIAAGtIkNAAIAAmtIAAGtIAAAKgAJnDNIj6AAIAAmtIAAGtIjwAAIAAmtIDwAAID6AAIAAGtIAAmtIEOAAIAAGtg");
	var mask_graphics_68 = new cjs.Graphics().p("AsQDhIAAnBIDwAAIAAG3IAAAKgAsQDhIjmAAIAAnBIDmAAIAAHBgAogDXIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAHlDNIj6AAIAAmtIAAGtIjvAAIAAmtIDvAAID6AAIAAGtIAAmtIEOAAIEEAAIAAGjIkEAAIAAmjIAAGjIAAAKg");
	var mask_graphics_71 = new cjs.Graphics().p("At0DhIAAnBIDwAAIAAG3IAAAKgAt0DhIjmAAIAAnBIDmAAIAAHBgAqEDXIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAGBDNIj6AAIAAmtIAAGtIjvAAIAAmtIDvAAID6AAIAAGtIAAmtIEOAAIEEAAIDIAAIAAGZIjIAAIAAmZIAAGZIAAAKIkEAAIAAmjIAAGjIAAAKg");
	var mask_graphics_75 = new cjs.Graphics().p("AwKDhIAAnBIDwAAIAAG3IAAAKgAwKDhIjmAAIAAnBIDmAAIAAHBgAsaDXIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgADrDNIAAmtIEOAAIAAGjIAAAKgADrDNIj5AAIAAmtID5AAIAAGtgAgODNIjwAAIAAmtIDwAAIAAGtgAH5DDIAAmjIEEAAIDIAAIAABaIAAErIAAAUIjIAAIAAmZIAAGZIAAAKgAH5DDgAPFClIAAkrIEsAAIAAErg");
	var mask_graphics_78 = new cjs.Graphics().p("ASDDrIAAhQIAAkrIDcAAIAAF7gAx4DXIAAnBIDwAAIAAG3IAAAKgAx4DXIjmAAIAAnBIDmAAIAAHBgAuIDNIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAB9DDIAAmtIEOAAIAAGjIAAAKgAB9DDIj5AAIAAmtIAAGtIjwAAIAAmtIDwAAID5AAIAAGtgAGLC5IAAmjIEEAAIAAGZIAAAKgAKPCvIAAmZIDIAAIAABaIEsAAIAAErIksAAIAAkrIAAErIAAAUgAKPjqg");
	var mask_graphics_81 = new cjs.Graphics().p("AP3DwIAAhQIAAkrIDcAAIAAF7gA0EDcIAAnBIDwAAIAAG3IAAAKgA0EDcIjmAAIAAnBIDmAAIAAHBgATxDSIAAnBID6AAIAAHBgAwUDSIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAgODIIAAmtIENAAIAAGjIAAAKgAgODIIj6AAIAAmtIAAGtIjwAAIAAmtIDwAAID6AAIAAGtgAD/C+IAAmjIEEAAIAAGZIAAAKgAIDC0IAAmZIDIAAIAABaIEsAAIAAErIksAAIAAkrIAAErIAAAUgAP3iLgAIDjlg");
	var mask_graphics_84 = new cjs.Graphics().p("ANhDwIAAhQIAAkrIDcAAIAAF7gA2aDcIAAnBIDwAAIAAG3IAAAKgA2aDcIjmAAIAAnBIDmAAIAAHBgARbDSIAAnBID6AAIAABkIEsAAIAAErIksAAIAAkrIAAErIAAAygAyqDSIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAikDIIAAmtIENAAIAAGjIAAAKgAikDIIj6AAIAAmtID6AAIAAGtgAmeDIIjwAAIAAmtIDwAAIAAGtgABpC+IAAmjIEEAAIAAGZIAAAKgAFtC0IAAmZIDIAAIAABaIEsAAIAAErIksAAIAAkrIAAErIAAAUgANhiLgAFtjlg");
	var mask_graphics_89 = new cjs.Graphics().p("ALLDwIAAhQIAAkrIDcAAIAAF7gA4wDcIAAnBIDwAAIAAG3IAAAKgA4wDcIjmAAIAAnBIDmAAIAAHBgAPFDSIAAnBID6AAIAABkIAAErIAAAygA1ADSIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAk6DIIAAmtIEOAAIAAGjIAAAKgAk6DIIj6AAIAAmtID6AAIAAGtgAo0DIIjwAAIAAmtIDwAAIAAGtgAgsC+IAAmjIEDAAIAAGZIAAAKgADXC0IAAmZIDIAAIAABaIEsAAIAAErIksAAIAAkrIAAErIAAAUgAXrCgIAAkrIEsAAIAAErgAXrCgIksAAIAAkrIEsAAIAAErgALLiLgADXjlg");
	var mask_graphics_92 = new cjs.Graphics().p("AaVEEIAAh4IAAkrIAAErIksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEEAAIAAGjgAJJDcIAAhQIAAkrIDcAAIAAF7gA6yDIIAAnBIDwAAIAAG3IAAAKgA6yDIIjmAAIAAnBIDmAAIAAHBgA3CC+IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAm8C0IAAmtIEOAAIAAGjIAAAKgAm8C0Ij6AAIAAmtID6AAIAAGtgAq2C0IjwAAIAAmtIDwAAIAAGtgAiuCqIAAmjIEDAAIAAGZIAAAKgABVCgIAAmZIDIAAIAABaIEsAAIAAErIksAAIAAkrIAAErIAAAUgAJJifgABVj5g");
	var mask_graphics_95 = new cjs.Graphics().p("AcXEOIAAgUIAAmjIEEAAIAAG3gAYTD6IAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEEAAIAAGjgAYTCCIAAkrgAHHDSIAAhQIAAkrIDcAAIAAF7gA80C+IAAnBIDwAAIAAG3IAAAKgA80C+IjmAAIAAnBIDmAAIAAHBgA5EC0IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAo+CqIAAmtIEOAAIAAGjIAAAKgAo+CqIj6AAIAAmtID6AAIAAGtgAs4CqIjwAAIAAmtIDwAAIAAGtgAkwCgIAAmjIEEAAIAAGZIAAAKgAgsCWIAAmZIDHAAIAABaIEsAAIAAErIksAAIAAkrIAAErIAAAUgAHHipgAgskDg");
	var mask_graphics_98 = new cjs.Graphics().p("AfQETIAAgKIAAm3ICWAAIAAHBgAbMEJIAAgUIAAmjIEEAAIAAG3gAXID1IAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEEAAIAAGjgAXIB9IAAkrgAF8DNIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjHAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDHAAIAABaIEsAAIDcAAIAAF7gA9/C5IAAnBIDwAAIAAG3IAAAKgA9/C5IjmAAIAAnBIDmAAIAAHBgA6PCvIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAqJClIj6AAIAAmtID6AAIAAGtgAuDClIjwAAIAAmtIDwAAIAAGtgAbMiugAxzkIg");
	var mask_graphics_103 = new cjs.Graphics().p("AchETIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAYdEJIAAgUIAAmjIEEAAIAAG3gAUZD1IAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEEAAIAAGjgAUZB9IAAkrgADNDNIAAhQIAAkrIAAErIkrAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIErAAIDcAAIAAF7gEgguAC5IAAnBIDwAAIAAG3IAAAKgEgguAC5IjmAAIAAnBIDmAAIAAHBgA8+CvIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAs4ClIj6AAIAAmtID6AAIAAGtgAwyClIjwAAIAAmtIDwAAIAAGtgAYdiugA0ikIg");
	var mask_graphics_106 = new cjs.Graphics().p("AaaEYIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAWWEOIAAgUIAAmjIEEAAIAAG3gASSD6IAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEEAAIAAGjgASSCCIAAkrgABGDSIAAhQIAAkrIAAErIkrAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIErAAIDcAAIAAF7gEgi1AC+IAAnBIDwAAIAAG3IAAAKgEgi1AC+IjmAAIAAnBIDmAAIAAHBgEAiYAC0IAAnLIEEAAIAAHLgA/FC0IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAu/CqIj6AAIAAmtID6AAIAAGtgAy5CqIjwAAIAAmtIDwAAIAAGtgAWWipgA2pkDg");
	var mask_graphics_109 = new cjs.Graphics().p("AZPEYIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAVLEOIAAgUIAAmjIEEAAIAAG3gARHD6IAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEEAAIAAGjgARHCCIAAkrgAgEDSIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDbAAIAAF7gEgkAAC+IAAnBIDwAAIAAG3IAAAKgEgkAAC+IjmAAIAAnBIDmAAIAAHBgEAhNAC0IAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEggQAC0IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAwKCqIj6AAIAAmtID6AAIAAGtgA0ECqIjwAAIAAmtIDwAAIAAGtgAVLipgA30kDg");
	var mask_graphics_114 = new cjs.Graphics().p("AW5EYIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAS1EOIAAgUIAAmjIEEAAIAAG3gAOxD6IAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEEAAIAAGjgAOxCCIAAkrgAiaDSIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDbAAIAAF7gEgmWAC+IAAnBIDwAAIAAG3IAAAKgEgmWAC+IjmAAIAAnBIDmAAIAAHBgAe3C0IAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEgimAC0IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgAygCqIj6AAIAAmtID6AAIAAGtgA2aCqIjwAAIAAmtIDwAAIAAGtgEAnJACWIAAlJIC0AAIAAFJgAS1ipgA6KkDg");
	var mask_graphics_117 = new cjs.Graphics().p("AVBEYIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAQ9EOIAAgUIAAmjIEEAAIAAG3gEAoFAD6IAAhkIAAlJIDwAAIAAGtgAM5D6IAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj5AAIAAnBID5AAIAABkIEsAAIEsAAIEEAAIAAGjgAM5CCIAAkrgAkSDSIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDcAAIAAF7gEgoOAC+IAAnBIDwAAIAAG3IAAAKgEgoOAC+IjmAAIAAnBIDmAAIAAHBgAc/C0IAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEgkeAC0IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgA0YCqIj6AAIAAmtID6AAIAAGtgA4SCqIjwAAIAAmtIDwAAIAAGtgEAlRACWIAAlJIC0AAIAAFJgAQ9ipgEAoFgCzgA8CkDg");
	var mask_graphics_120 = new cjs.Graphics().p("ATJEYIAAgKIkEAAIAAgUIAAmjIAAGjIkEAAIAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj5AAIAAnBID5AAIAABkIEsAAIEsAAIEEAAIEEAAIAAG3IAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgALBCCIAAkrgEAmNAD6IAAhkIi0AAIAAlJIC0AAIAAFJIAAlJIDwAAIAAGFIAAAogEAp9ADSIAAmFIDwAAIAAGFgEAp9ADSgAmKDSIAAhQIAAkrIDcAAIAAF7gEgqGAC+IAAnBIDwAAIAAG3IAAAKgEgqGAC+IjmAAIAAnBIDmAAIAAHBgAbHC0IAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEgmWAC0IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgA2QCqIAAmtIEOAAIAAGjIAAAKgA2QCqIj6AAIAAmtID6AAIAAGtgA6KCqIjwAAIAAmtIDwAAIAAGtgAyCCgIAAmjIEEAAIAAGZIAAAKgAt+CWIAAmZIDIAAIAABaIEsAAIAAErIksAAIAAkrIAAErIAAAUgAmKipgAt+kDgA96kDg");
	var mask_graphics_124 = new cjs.Graphics().p("AQ4EYIAAgKIkEAAIAAgUIAAmjIAAGjIkEAAIAAh4IksAAIAAkrIAAErIkrAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIErAAIEsAAIEEAAIEEAAIAAG3IAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAIwCCIAAkrgEAj8AD6IAAhkIi0AAIAAlJIC0AAIAAFJIAAlJIDwAAIAAGFIAAAogEAnsADSIAAmFIDwAAIAAGFgEAnsADSgAobDSIAAhQIAAkrIDcAAIAAF7gEgsXAC+IAAnBIDwAAIAAG3IAAAKgEgsXAC+IjmAAIAAnBIDmAAIAAHBgAY2C0IAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEgonAC0IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEAtUACqIAAlTICqAAIAAFTgA4hCqIAAmtIEOAAIAAGjIAAAKgA4hCqIj6AAIAAmtID6AAIAAGtgA8bCqIjwAAIAAmtIDwAAIAAGtgA0TCgIAAmjIEEAAIAAGZIAAAKgAwPCWIAAmZIDIAAIAABaIEsAAIAAErIksAAIAAkrIAAErIAAAUgAobipgAwPkDgEggLgEDg");
	var mask_graphics_127 = new cjs.Graphics().p("APFEdIAAgKIkEAAIAAgUIAAmjIAAGjIkEAAIAAh4IksAAIAAkrIAAErIkrAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIErAAIEsAAIEEAAIEEAAIAAG3IAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAG9CHIAAkrgEAiJAD/IAAhkIi0AAIAAlJIC0AAIAAFJIAAlJIDwAAIDwAAIAAGFIjwAAIAAmFIAAGFIAAAogAqODXIAAhQIAAkrIDcAAIAAF7gEguKADDIAAnBIDwAAIAAG3IAAAKgEguKADDIjmAAIAAnBIDmAAIAAHBgAXDC5IAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEgqaAC5IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEAuBACvIAAlTIAAh4IDwAAIAAHLgEArhACvIAAlTICgAAIAAFTgA6UCvIAAmtIEOAAIAAGjIAAAKgA6UCvIj6AAIAAmtID6AAIAAGtgA+OCvIjwAAIAAmtIDwAAIAAGtgA2GClIAAmjIEEAAIAAGZIAAAKgAyCCbIAAmZIDIAAIAABaIEsAAIAAErIksAAIAAkrIAAErIAAAUgEAuBgCkgAqOikgAyCj+gEgh+gD+g");
	var mask_graphics_130 = new cjs.Graphics().p("AMvEdIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAIrETIAAgUIAAmjIEEAAIAAG3gAfzD/IAAhkIAAlJIDwAAIDwAAIAAGFIjwAAIAAmFIAAGFIAAAogAEnD/IAAh4IkrAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIErAAIEEAAIAAGjgAEnCHIAAkrgAskDXIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDcAAIAAF7gEAvbADDIAAgUIjwAAIAAlTIAAh4IDwAAIAAHLIAAnLIEsAAIAAHfgEgwgADDIAAnBIDwAAIAAG3IAAAKgEgwgADDIjmAAIAAnBIDmAAIAAHBgAUtC5IAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEgswAC5IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEApLACvIAAlTICgAAIAAFTgA8qCvIj6AAIAAmtID6AAIAAGtgEggkACvIjwAAIAAmtIDwAAIAAGtgAc/CbIAAlJIC0AAIAAFJgEArrgCkgAIrikgAfziugEgkUgD+g");
	var mask_graphics_133 = new cjs.Graphics().p("AKUEdIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAGQETIAAgUIAAmjIEEAAIAAG3gAdYD/IAAhkIAAlJIDwAAIDwAAIAAGFIjwAAIAAmFIAAGFIAAAogACMD/IAAh4IkrAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIErAAIEEAAIAAGjgACMCHIAAkrgAu/DXIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDcAAIAAF7gEAtAADDIAAgUIjwAAIAAlTIAAh4IDwAAIAAHLIAAnLIEsAAIAAHfgEgy7ADDIAAnBIDwAAIAAG3IAAAKgEgy7ADDIjmAAIAAnBIDmAAIAAHBgASSC5IAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEgvLAC5IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEAmwACvIAAlTICgAAIAAFTgA/FCvIj6AAIAAmtID6AAIAAGtgEgi/ACvIjwAAIAAmtIDwAAIAAGtgAakCbIAAlJIC0AAIAAFJgEAzkACRIAAlTIC+AAIAAFTgEApQgCkgAGQikgAdYiugEgmvgD+g");
	var mask_graphics_136 = new cjs.Graphics().p("AImEdIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAEiETIAAgUIAAmjIEEAAIAAG3gAbqD/IAAhkIAAlJIDwAAIDwAAIAAGFIjwAAIAAmFIAAGFIAAAogAAeD/IAAh4IkrAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIErAAIEEAAIAAGjgAAeCHIAAkrgEA00ADXIAAhGIAAlTIDcAAIAAGZgAwtDXIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDcAAIAAF7gEArSADDIAAgUIjwAAIAAlTIAAh4IDwAAIAAHLIAAnLIEsAAIAAHfgEg0pADDIAAnBIDwAAIAAG3IAAAKgEg0pADDIjmAAIAAnBIDmAAIAAHBgAQkC5IAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEgw5AC5IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEAlCACvIAAlTICgAAIAAFTgEggzACvIj6AAIAAmtID6AAIAAGtgEgktACvIjwAAIAAmtIDwAAIAAGtgAY2CbIAAlJIC0AAIAAFJgEAx2ACRIAAlTIC+AAIAAFTgEAnigCkgAEiikgAbqiugEgodgD+g");
	var mask_graphics_139 = new cjs.Graphics().p("AHREdIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgADNETIAAgUIAAmjIEEAAIAAG3gAaVD/IAAhkIAAlJIDwAAIDwAAIAAGFIjwAAIAAmFIAAGFIAAAogAg2D/IAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEDAAIAAGjgAg2CHIAAkrgEAzfADXIAAhGIi+AAIAAlTIC+AAIAAFTIAAlTIDcAAIAAGFIAAAUgAyCDXIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDcAAIAAF7gEA27ADDIAAmFICqAAIAAGFgEAp9ADDIAAgUIAAnLIAAHLIjwAAIAAlTIAAh4IDwAAIEsAAIAAHfgEg1+ADDIAAnBIDwAAIAAG3IAAAKgEg1+ADDIjmAAIAAnBIDmAAIAAHBgAPPC5IAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEgyOAC5IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEAjtACvIAAlTICgAAIAAFTgEgiIACvIj6AAIAAmtID6AAIAAGtgEgmCACvIjwAAIAAmtIDwAAIAAGtgAXhCbIAAlJIC0AAIAAFJgEAmNgCkgADNikgAaViugEgpygD+g");
	var mask_graphics_143 = new cjs.Graphics().p("AFFEdIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgABBETIAAgUIAAmjIEEAAIAAG3gEA3ZAD/IAAg8IAAmFIEYAAIAAHBgAYJD/IAAhkIAAlJIDwAAIDwAAIAAGFIjwAAIAAmFIAAGFIAAAogAjCD/IAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEDAAIAAGjgAjCCHIAAkrgEAxTADXIAAhGIi+AAIAAlTIC+AAIAAFTIAAlTIDcAAIAAGFIAAAUgA0ODXIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDcAAIAAF7gEA0vADDIAAmFICqAAIAAGFgEAnxADDIAAgUIjwAAIAAlTIAAh4IDwAAIAAHLIAAnLIEsAAIAAHfgEg4KADDIAAnBIDwAAIAAG3IAAAKgEg4KADDIjmAAIAAnBIDmAAIAAHBgANDC5IAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEg0aAC5IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEAhhACvIAAlTICgAAIAAFTgEgkUACvIj6AAIAAmtID6AAIAAGtgEgoOACvIjwAAIAAmtIDwAAIAAGtgAVVCbIAAlJIC0AAIAAFJgEAkBgCkgABBikgAYJiugEA0vgDCgEgr+gD+g");
	var mask_graphics_146 = new cjs.Graphics().p("AEJEdIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAAFETIAAgUIAAmjIEEAAIAAG3gEA2dAD/IAAg8IAAmFIEYAAIB4AAIAAFdIh4AAIAAldIAAFdIAABkgAXND/IAAhkIAAlJIDwAAIDwAAIAAGFIjwAAIAAmFIAAGFIAAAogAj+D/IAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEDAAIAAGjgAj+CHIAAkrgEAwXADXIAAhGIi+AAIAAlTIC+AAIAAFTIAAlTIDcAAIAAGFIAAAUgA1KDXIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDcAAIAAF7gEAzzADDIAAmFICqAAIAAGFgEAm1ADDIAAgUIjwAAIAAlTIAAh4IDwAAIAAHLIAAnLIEsAAIAAHfgEg5GADDIAAnBIDwAAIAAG3IAAAKgEg5GADDIjmAAIAAnBIDmAAIAAHBgAMHC5IAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEg1WAC5IAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEAglACvIAAlTICgAAIAAFTgEglQACvIj6AAIAAmtID6AAIAAGtgEgpKACvIjwAAIAAmtIDwAAIAAGtgAUZCbIAAlJIC0AAIAAFJgEAjFgCkgAAFikgAXNiugEAzzgDCgEgs6gD+g");
	var mask_graphics_149 = new cjs.Graphics().p("ACqEnIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAhZEdIAAgUIAAmjIEDAAIAAG3gEA0+AEJIAAg8IAAmFIEYAAIB4AAIAAFdIh4AAIAAldIAAFdIAABkgAVuEJIAAhkIAAlJIDwAAIDwAAIAAGFIjwAAIAAmFIAAGFIAAAogAldEJIAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEEAAIAAGjgAldCRIAAkrgEAu4ADhIAAhGIi+AAIAAlTIC+AAIAAFTIAAlTIDcAAIAAGFIAAAUgA2pDhIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDcAAIAAF7gEAyUADNIAAmFICqAAIAAGFgEAlWADNIAAgUIjwAAIAAlTIAAh4IDwAAIAAHLIAAnLIEsAAIAAHfgEg6lADNIAAnBIDwAAIAAG3IAAAKgEg6lADNIjmAAIAAnBIDmAAIAAHBgAKoDDIAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEg21ADDIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEA7sAC5IAAnfICgAAIAAHfgAfGC5IAAlTICgAAIAAFTgEgmvAC5Ij6AAIAAmtID6AAIAAGtgEgqpAC5IjwAAIAAmtIDwAAIAAGtgAS6ClIAAlJIC0AAIAAFJgEAhmgCagAhZiagAVuikgEAyUgC4gEguZgD0g");
	var mask_graphics_152 = new cjs.Graphics().p("AAoEnIAAgKIAAm3ICWAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAjbEdIAAgUIAAmjIEDAAIAAG3gEAy8AEJIAAg8IAAmFIEYAAIB4AAIAAFdIh4AAIAAldIAAFdIAABkgATsEJIAAhkIAAlJIDwAAIDwAAIAAGFIjwAAIAAmFIAAGFIAAAogAnfEJIAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEEAAIAAGjgAnfCRIAAkrgEAs2ADhIAAhGIi+AAIAAlTIC+AAIAAFTIAAlTIDcAAIAAGFIAAAUgA4rDhIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDcAAIAAF7gEAwSADNIAAmFICqAAIAAGFgEAjUADNIAAgUIAAnLIAAHLIjwAAIAAlTIAAh4IDwAAIEsAAIAAHfgEg8nADNIAAnBIDwAAIAAG3IAAAKgEg8nADNIjmAAIAAnBIDmAAIAAHBgAImDDIAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEg43ADDIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEA5qAC5IAAnfICgAAIEEAAIAAHVIkEAAIAAnVIAAHVIAAAKgAdEC5IAAlTICgAAIAAFTgEgoxAC5Ij6AAIAAmtID6AAIAAGtgEgsrAC5IjwAAIAAmtIDwAAIAAGtgAQ4ClIAAlJIC0AAIAAFJgAfkiagAjbiagATsikgEAwSgC4gEgwbgD0g");
	var mask_graphics_156 = new cjs.Graphics().p("AhoEnIAAgKIAAm3ICVAAIFeAAIAAFdIleAAIAAldIAAFdIAABkgAlsEdIAAgUIAAmjIEEAAIAAG3gEAwrAEJIAAg8IAAmFIEYAAIB4AAIAAFdIh4AAIAAldIAAFdIAABkgARbEJIAAhkIAAlJIDwAAIDwAAIAAGFIjwAAIAAmFIAAGFIAAAogApwEJIAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEEAAIAAGjgApwCRIAAkrgEAqlADhIAAhGIi+AAIAAlTIC+AAIAAFTIAAlTIDcAAIAAGFIAAAUgA68DhIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDcAAIAAF7gEAuBADNIAAmFICqAAIAAGFgEAhDADNIAAgUIAAnLIAAHLIjwAAIAAlTIAAh4IDwAAIEsAAIAAHfgEg+4ADNIAAnBIDwAAIAAG3IAAAKgEg+4ADNIjmAAIAAnBIDmAAIAAHBgAGVDDIAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEg7IADDIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEA/rAC5IAAlTIC0AAIAAFTgEA3ZAC5IAAnfICgAAIEEAAIAAHVIkEAAIAAnVIAAHVIAAAKgAazC5IAAlTICgAAIAAFTgEgrCAC5Ij6AAIAAmtID6AAIAAGtgEgu8AC5IjwAAIAAmtIDwAAIAAGtgAOnClIAAlJIC0AAIAAFJgAdTiagAlsiagARbikgEAuBgC4gEgysgD0g");
	var mask_graphics_159 = new cjs.Graphics().p("AjHEnIAAgKIAAm3ICWAAIFdAAIAAFdIldAAIAAldIAAFdIAABkgAnLEdIAAgUIAAmjIEEAAIAAG3gEAvMAEJIAAg8IAAmFIEYAAIB4AAIAAFdIh4AAIAAldIAAFdIAABkgAP8EJIAAhkIAAlJIDwAAIDwAAIAAGFIjwAAIAAmFIAAGFIAAAogArPEJIAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEEAAIAAGjgArPCRIAAkrgEBBAADhIAAgoIAAlTIC+AAIAAF7gEApGADhIAAhGIi+AAIAAlTIC+AAIAAFTIAAlTIDcAAIAAGFIAAAUgA8bDhIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDcAAIAAF7gEAsiADNIAAmFICqAAIAAGFgAfkDNIAAgUIjwAAIAAlTIAAh4IDwAAIAAHLIAAnLIEsAAIAAHfgEhAXADNIAAnBIDwAAIAAG3IAAAKgEhAXADNIjmAAIAAnBIDmAAIAAHBgAE2DDIAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEg8nADDIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEA+MAC5IAAlTIC0AAIAAFTgEA16AC5IAAnfICgAAIEEAAIAAHVIkEAAIAAnVIAAHVIAAAKgAZUC5IAAlTICgAAIAAFTgEgshAC5Ij6AAIAAmtID6AAIAAGtgEgwbAC5IjwAAIAAmtIDwAAIAAGtgANIClIAAlJIC0AAIAAFJgAb0iagAnLiagAP8ikgEAsigC4gEg0LgD0g");
	var mask_graphics_162 = new cjs.Graphics().p("Ak6EnIAAgKIAAm3ICWAAIFdAAIAAFdIldAAIAAldIAAFdIAABkgAo+EdIAAgUIAAmjIEEAAIAAG3gEAtZAEJIAAg8IAAmFIEYAAIAAFdIAABkgAOJEJIAAhkIAAlJIDwAAIDwAAIAAGFIjwAAIAAmFIAAGFIAAAogAtCEJIAAh4IksAAIAAkrIAAErIksAAIAAkrIAAErIAAAyIj6AAIAAnBID6AAIAABkIEsAAIEsAAIEEAAIAAGjgAtCCRIAAkrgEA/NADhIAAgoIAAlTIC+AAIAAFdIAAAegEAnTADhIAAhGIi+AAIAAlTIC+AAIAAFTIAAlTIDcAAIAAGFIAAAUgA+ODhIAAhQIAAkrIAAErIksAAIAAkrIAAErIAAAUIjIAAIAAmZIAAGZIAAAKIkEAAIAAAKIkOAAIAAmtIEOAAIAAGjIAAmjIEEAAIDIAAIAABaIEsAAIDcAAIAAF7gEAqvADNIAAmFICqAAIAAGFgAdxDNIAAgUIjwAAIAAlTIAAh4IDwAAIAAHLIAAnLIEsAAIAAHfgEhCKADNIAAnBIDwAAIAAG3IAAAKgEhCKADNIjmAAIAAnBIDmAAIAAHBgEBCLADDIAAldIDmAAIAAFdgADDDDIAAnLIEEAAIAACCICWAAIAAE/IiWAAIAAk/IAAE/IAAAKgEg+aADDIAAm3IEOAAIEOAAIAAGtIkOAAIAAmtIAAGtIAAAKgEA8ZAC5IAAlTIC0AAIAAFTgEA0HAC5IAAnfICgAAIEEAAIAAHVIkEAAIAAnVIAAHVIAAAKgAXhC5IAAlTICgAAIAAFTgEguUAC5Ij6AAIAAmtID6AAIAAGtgEgyOAC5IjwAAIAAmtIDwAAIAAGtgEAxxAClIAAldIB4AAIAAFdgEAxxAClgALVClIAAlJIC0AAIAAFJgAaBiagAo+iagAOJikgEAqvgC4gEg1+gD0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:261,y:138}).wait(3).to({graphics:mask_graphics_47,x:273,y:138}).wait(4).to({graphics:mask_graphics_51,x:286.5,y:138}).wait(3).to({graphics:mask_graphics_54,x:300,y:138}).wait(3).to({graphics:mask_graphics_57,x:312,y:138}).wait(3).to({graphics:mask_graphics_60,x:324.5,y:138}).wait(5).to({graphics:mask_graphics_65,x:338,y:138}).wait(3).to({graphics:mask_graphics_68,x:351,y:138}).wait(3).to({graphics:mask_graphics_71,x:361,y:138}).wait(4).to({graphics:mask_graphics_75,x:376,y:138}).wait(3).to({graphics:mask_graphics_78,x:387,y:139}).wait(3).to({graphics:mask_graphics_81,x:401,y:138.5}).wait(3).to({graphics:mask_graphics_84,x:416,y:138.5}).wait(5).to({graphics:mask_graphics_89,x:431,y:138.5}).wait(3).to({graphics:mask_graphics_92,x:444,y:140.5}).wait(3).to({graphics:mask_graphics_95,x:457,y:141.5}).wait(3).to({graphics:mask_graphics_98,x:464.5,y:142}).wait(5).to({graphics:mask_graphics_103,x:482,y:142}).wait(3).to({graphics:mask_graphics_106,x:495.5,y:141.5}).wait(3).to({graphics:mask_graphics_109,x:503,y:141.5}).wait(5).to({graphics:mask_graphics_114,x:518,y:141.5}).wait(3).to({graphics:mask_graphics_117,x:530,y:141.5}).wait(3).to({graphics:mask_graphics_120,x:542,y:141.5}).wait(4).to({graphics:mask_graphics_124,x:556.5,y:141.5}).wait(3).to({graphics:mask_graphics_127,x:568,y:141}).wait(3).to({graphics:mask_graphics_130,x:583,y:141}).wait(3).to({graphics:mask_graphics_133,x:598.5,y:141}).wait(3).to({graphics:mask_graphics_136,x:609.5,y:141}).wait(3).to({graphics:mask_graphics_139,x:618,y:141}).wait(4).to({graphics:mask_graphics_143,x:632,y:141}).wait(3).to({graphics:mask_graphics_146,x:638,y:141}).wait(3).to({graphics:mask_graphics_149,x:647.5,y:140}).wait(3).to({graphics:mask_graphics_152,x:660.5,y:140}).wait(4).to({graphics:mask_graphics_156,x:675,y:140}).wait(3).to({graphics:mask_graphics_159,x:684.5,y:140}).wait(3).to({graphics:mask_graphics_162,x:696,y:140}).wait(265));

	// Layer_3
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(696.5,138,1,1,0,0,0,446.5,22);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).wait(383));

	// Layer_9
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(231.5,1066.65,1,1,0,0,0,231.5,219.5);
	this.instance_3.alpha = 0.0703;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:265.5,y:548.5,alpha:1},18).to({_off:true},402).wait(7));

	// bg
	this.instance_4 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},420).wait(7));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(683,384,683,902.2);
// library properties:
lib.properties = {
	id: 'C76BF6AC8249AA4FABA5CD835C8CBCA3',
	width: 1366,
	height: 768,
	fps: 30,
	color: "#333333",
	opacity: 0.00,
	manifest: [
		{src:"images/AN_01_CRC_P7_v3_atlas_1.png", id:"AN_01_CRC_P7_v3_atlas_1"},
		{src:"sounds/click.mp3", id:"click"}
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
an.compositions['C76BF6AC8249AA4FABA5CD835C8CBCA3'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;