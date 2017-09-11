(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.wholefoodslogosvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// whole-foods-logo.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAAQACgFAAgCIADAAIgBAPQgFgEABgEg");
	this.shape.setTransform(161.3,122.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAKIAAgSIABAAIAAASg");
	this.shape_1.setTransform(158.7,122.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAOIANgbIAOAbg");
	this.shape_2.setTransform(68.4,137.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAQQgQAAgCgDQgDgCABgPQAAgMAKACIAgABQAMACAAAMQAAANgOABIgIAAIgIABg");
	this.shape_3.setTransform(85.7,136.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgtB3QgPgDAAgUIAAi9QAAgOAFgFQAEgFAOgDQAggFAVAOQAXAOAKAgQAaBLgfBEQgTAsgtAAQgLAAgOgDg");
	this.shape_4.setTransform(125.5,107.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBB5QgogCgVgqQgPgcABguQgBg3AUghQAUgjAlAAQAlAAAVAjQATAhAAA1QAAAygQAfQgVAngnAAIgCAAg");
	this.shape_5.setTransform(66.1,107.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgtBmQgSgSgHgcQgThPAgg9QASggAigEQAigDAXAdQATAYAFAoIACAcQgCAhgEATQgGAcgQATQgSAWgdACIgDAAQgbAAgSgTg");
	this.shape_6.setTransform(95.2,107.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AleNPQilhFiAh+Qh/h+hGijQhJipgCi3QgCi7BHisQBFimB+iAQB+iACkhHQCqhJC6gBQC8gBCrBIQCmBFB/B/QCAB/BFCmQBICrAAC7QAAC7hJCqQhFCjh+B+Qh+B9ijBFQioBIi3ABIgJAAQi2AAinhFgAF5GjQAAALAJAAIASAAQALAAAAALIAABCQAAANAMAAQAMAAAAgNIAAgyQAAgWACgCQACgCAVAAIABAAQALACAAgNQAAgLgLAAQgNgBgaAAIgoAAQgJAAAAALgAjyGgIgsBaQgCAJACACQADAEAJgCQAIgBABgFQAEgLAIgDQAFgCAMABIAOAAQANgBAGANQAEAEAIAFQAMAAADgDQACgDgDgIIgKgUIgghEQgEgJgIAAQgDAAgIAIgAl2HIIAHA2QABALAOgCQAKgCgBgLIgCgMIgJhIIgDgIQgCgEgDgBQgEgBgKAHIgLAOIgWAdIgMgPIgUgcQgIgLgHAFQgFACgEALQgCAGAAAMIgHBDQgCANAPgBQAFgBACgDQACgDABgGIAHgyIAEACIAUAaQAGAHADAAQAEAAAFgHQAKgJAPgUgABDGjIAABZQAAALAMAAQALAAAAgLIAAgXQAAgRAPAIQAFADADAEQASAUAKAJQAFAFAMACQACAAAEgBQAEgCABgCQABgEgFgGIgggkQgGgHAAgDQAAgEAHgGIAWgUQAFgFABgDQACgFgFgEQgHgJgLAKIghAeQgFAFgDABQgMAFACgLIAAgXQAAgLgLAAQgMAAAAALgAhrGjIgCArIAAAuQAAAMAMgCQANAAAAgLIAAgRQACgHAFAAQAagDAJATQABAEAGAGQAGAMAQgEQAKgBgFgJQgGgLgHgIQgHgIAJgIQATgOgGgZQgDgLgJgHQgJgHgLgBIg5gBQgOAAACANgADhGiIABAsIAAArQAAAOANgCIBIAAQANAAABgLQAAgMgOAAIgyAAQgLAAgBgKQAAgNALAAIAaAAQAGAAACgDQADgCAAgGQAAgLgLAAIgaAAQgLAAAAgKQAAgLAMAAIAzAAQAMAAAAgLQAAgLgMAAIhKAAQgNAAAAAMgAKZElQgHAHAAALQABAKAHAHQAIAHAKAAQAKAAAHgHQAHgHAAgKQAAgLgHgHQgIgHgKAAQgKAAgIAHgAEHADIhEAIQgNACACAMQABAMAKABQAMACACADQADADAAAMIAADDIgBAQQgCALgKAAQgPAAgBAMQgBANAQACIBkAKIAAgCIAgAAQAxgEAfgUQAggWARgtQAQgsgHgzQgHgzgdggQgfgjg1gGQgZgCggAAIgcAAgAIVE2QAjALAggGQA9gKAOgzQAOg3gogkIgygnIguglQgOgNAKgUQAHgPATAAIAPABQAfAGASAdQAJAOAMgGQAKgFgEgOIgKgtQgEgTgVAHQgLAEgIgCQgSgEgZgEIAAABIgHAAQg3ABgSAsQgTAxAlAiQAKAJAUAPIAeAXQAhAaALANQAOAPgFATQgFATgTAGQgNAFgWgCQgcgCgVgcIgFgHQgJgOgNAFQgMAFAEARQAFAYAHAaQADAJAHADQAGACAIgFQAFgEAHAAIAIABgAhkDjQAQAtAnAWQAsAaA1gGQBVgJAfhHQAag5gQhDQgRhEg+gcQglgOgnACQgrADggAWQgiAYgOApIgHAVIgDAAIgFgMQgXhFhAgVQgogMgsAGQhHANgfA+QgWAuAHA6QAFAuAZAgQAuA5BSgFQAxgDAhgZQAhgaAPgvIAEgJQAGAKAFANgAp7AWQAAAOAPABQAIAAADAEQACAEAAAHIAADWQAAAOgNAAQgOAAgCAMQgCAQATAAIBfAAQAJAAAEgEQADgEgBgIQgBgHgDgDQgEgDgKAAQgOAAAAgLIAAhXQAAgMANAAIArAAQALAAAEADQAHADACAJQACAGAMACQALACAAgNIAAg3QAAgNgMgCQgNgBgDAOQgBALgMAAIgxAAQgKAAgCgCQgDgDAAgLIAAg7QAAgMAEgDQAEgEAMgBIBCAAQANAAAHADQAIAEADALIADAEQAGALALgGQAHgDAAgKQgBgQgFgSQgCgJgEgDQgEgDgJAAQgfADhBAAIhlAAQgQAAAAAOgABTl9IABADIgIAFIgnARQg1AcgRAjQgkBCATBMQASBLA+AaQArASAtgGQBSgJAjhFQAYgxgIhCQgKhLg8giQgegQgYAJQgEABgEAEQgDAEAAAEQAAAEADAEQADAEAEACQAkAPAMAuQAGAYAAAyQgCAmgPAfQgRAigjAHQgkAGgagbQgNgNgKgeQgNgnAHg7QAJhPBEgiIAbgOQAZgNAQgXQAJgNAAgMQAAgJgGgDQgHgDgHAGIgGAFQgZAYgjgJQgYgHgTgVQgZgaggADQgJADgHAAIgCgEIAKgFIAKgFQAhgJAcAYQAeAaAbABQAOAAACgJQACgJgMgHIgVgPIgLgMIgJgNQgUgZgfgFQgegGgbARQgxAfgOA2QgCAEABAGQABAHADACQADADAGABQAGAAAEgCQAigPAjAYQApAdAngHgAn5iuIAFANIAjBoQAHATASAAQARAAAHgTIALghQAxifANgpQAFgPACgCQAFgGAKAAQAEAAAFAKQABADAAANIAADHQAAAKgCACQgCADgLABQgGABgEAEQgEAFAAAGQABAMANAAIBeAAQAQAAAAgOQAAgOgQAAQgNAAAAgNIAAhTQAAgJADgDQADgCAJgBIA8AAQALAAADADQADADABAMIAABJQAAAMgCADQgCACgNACQgNABAAANQAAANAMAAIBlAAQANAAAAgOQAAgNgNgBIgEAAQgMABAAgMIAAjSQAAgNACgDQACgCANgDQAMgDAAgMQAAgMgNgBIhYgBIgOABQgNADADAOQACALAPAAQAMAAAAAMIAABKQAAANgNAAIhDAAQgNAAAAgMIAAhEQAAgLACgDQACgCAMgDQAMgDAAgNQAAgLgNgCIgTgBIiRAAQgQAAgBANQgBANAQADQALACACAFQADAEgDAKIggBuIgRA2QgEgEgCgIIguiRQgFgQABgEQACgDAQgHQAIgEACgJQABgEgEgEQgDgDgFgBIgLgBIhOAAQgFAAgIACQgGADgDAGQgCAHAEAEQACADALAFQAMADAEALIAJAYQAFAPACAKQADATgEAOIgbBRIgFAMIgDgHIg4ieQgGgQACgEQACgDARgFQAHgCADgGQADgHgFgFQgFgFgKgCIhcAAQgPAAgBANQgCANAPACQAOADAHAQQAQAuAWA2IAzCLQAIAWATAAQAJAAAGgFQAFgFAFgMIAfhWQAEgGADgIIAGgOgAD/lKQAAAMAOADQAMADACACQACACAAAMIAADMQAAANgCADQgDADgMABQgJACgCAKQgCAKALAEIAMACIClAAIAJgBQAKgFABgEQAFgUADgXQAAgDgCgEQgDgEgCgBQgHgCgHAGQgEACgCAIQgHAQgOAAIgvABQgOgBgEgEQgDgEgBgPQgDghAAhBIAAhhQAAgMACgCQADgDAMgBQASgBgDgRQgDgLgMAAIhkAAQgNAAAAAOgAH2lZQgOAAAAAOQAAAOAOABQAKACACACQACACAAAKQgEAkAABHIAABqQAAAKgCACQgDADgJAAQgLAAgCALQgBANAMACIAQACIC4gBQANgCABgKIAIgkQADgPgLgCQgKgCgHALIgDAFQgHARgPAAIhIAAQgOAAAAgQIAAhNQAAgLALAAIAlAAQAMAAABAKQACAOAOAAQANAAAAgQQACgYgCgZQAAgQgNAAQgMgBgEAPQgBAKgNAAIgiAAQgNACAAgPIAAhAQAAgJAEgDQADgEAJgBIAzgBQAPAAAHAEQALAEACANIABACIAIAEQAFACADAAQAJAAAAgOIgEgbQgDgPgEgEQgFgEgPAAIifAAIgSABg");
	this.shape_7.setTransform(91.6,91.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,183.2,183.1);


(lib.triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#703106").s().p("Ag8hGIB5BGIh5BHg");
	this.shape.setTransform(0.3,0.5,0.744,0.744,-90,0,0,-0.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.triangle, new cjs.Rectangle(-5.2,-4.5,10.6,9.1), null);


(lib.moon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4F2F2").s().p("AmEGFQiiihAAjkQAAjjCiiiQChihDjAAQDkAAChChQChCiAADjQAADkihChQihCijkAAQjjAAihiig");
	this.shape.setTransform(0,0,0.963,0.963);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-53,106,106);


(lib.mc_scarecrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#305D39").s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMAMQgLALgQAAQgPAAgLgLg");
	this.shape.setTransform(0,-13.9,1.035,1.035);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D5433").s().p("AhFA2IAKhFIhPgXIAAglIEVAAIAAAlIhQAYIAJBEQgiAWgiAAQgiAAgjgWg");
	this.shape_1.setTransform(0,-2,1.035,1.035);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#305D39").s().p("AgJBJIAAiRIATAAIAACRg");
	this.shape_2.setTransform(0.1,10.4,1.035,1.035);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_scarecrow, new cjs.Rectangle(-14.3,-17.9,28.8,35.8), null);


(lib.mc_backgroundColor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_backgroundColor, new cjs.Rectangle(-80,-299.9,160,600), null);


(lib.halfcircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAZQgjgjgBgyID1AAQgBAygjAjQglAkgyAAQgxAAglgkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfcircle, new cjs.Rectangle(-12.2,-6.1,24.5,12.3), null);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgGAHAAQAHAAAGAGQAFAFABAHQgBAIgFAFQgGAGgHAAQgHAAgFgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-1.8,3.7,3.7);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(33,82,102,0.6)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.birdwing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D3549").s().p("AhGA6ICNhzIhPBzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-5.8,14.2,11.6);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.halfcircle();
	this.instance.parent = this;
	this.instance.setTransform(16.5,3.3,0.559,0.559,180,0,0,-0.2,-0.2);

	this.instance_1 = new lib.halfcircle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.5,-0.4,0.785,0.785,180,0,0,-0.1,-0.1);

	this.instance_2 = new lib.halfcircle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.5,0.3,1.063,1.063,180,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-6.5,46.5,13.1);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.halfcircle();
	this.instance.parent = this;
	this.instance.setTransform(16.5,3.3,0.559,0.559,180,0,0,-0.2,-0.2);

	this.instance_1 = new lib.halfcircle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.5,-0.4,0.785,0.785,180,0,0,-0.1,-0.1);

	this.instance_2 = new lib.halfcircle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.6,0.3,1.063,1.063,180,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-6.5,46.5,13.1);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.halfcircle();
	this.instance.parent = this;
	this.instance.setTransform(-18.6,5.4,0.559,0.559,180,0,0,-0.2,-0.2);

	this.instance_1 = new lib.halfcircle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.2,0.1,0.785,0.785,180,0,0,-0.1,-0.1);

	this.instance_2 = new lib.halfcircle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,0.1,1.408,1.408,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-8.6,51.3,17.3);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.halfcircle();
	this.instance.parent = this;
	this.instance.setTransform(-18.7,5.4,0.559,0.559,180,0,0,-0.2,-0.2);

	this.instance_1 = new lib.halfcircle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.1,0.1,0.785,0.785,180,0,0,-0.1,-0.1);

	this.instance_2 = new lib.halfcircle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,0.1,1.408,1.408,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-8.6,51.3,17.3);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.halfcircle();
	this.instance.parent = this;
	this.instance.setTransform(9.9,2.1,0.758,0.758,180,0,0,-0.4,-0.2);

	this.instance_1 = new lib.halfcircle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.6,0.2,1.063,1.063,180,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-6.5,37.8,13.1);


(lib.stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star 8
	this.instance = new lib.circle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-52.1,39.8);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},9).to({alpha:1},10).to({alpha:0.398},30).to({startPosition:0},10).wait(1));

	// star 7
	this.instance_1 = new lib.circle("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-69.3,33);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19).to({alpha:0.199},20).to({alpha:0},20).wait(1));

	// star 6
	this.instance_2 = new lib.circle("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-12.1,4.2);
	this.instance_2.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.199},9).to({alpha:1},20).to({alpha:0},20).to({alpha:0.301},10).wait(1));

	// star 5
	this.instance_3 = new lib.circle("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(69.4,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},9).to({alpha:0.5},10).to({alpha:0},20).to({alpha:1},10).to({startPosition:0},10).wait(1));

	// star 4
	this.instance_4 = new lib.circle("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(44,-25.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},9).to({alpha:0.801},20).to({alpha:0.102},10).to({alpha:0.898},10).to({alpha:0},10).wait(1));

	// star 3
	this.instance_5 = new lib.circle("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(69.4,-39.8);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},19).to({alpha:0.199},10).to({alpha:1},20).to({alpha:0},10).wait(1));

	// star 2
	this.instance_6 = new lib.circle("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-47.7,-31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.199},9).to({alpha:0.801},20).to({alpha:0.199},10).to({alpha:1},20).wait(1));

	// star 1
	this.instance_7 = new lib.circle("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-56.7,-39.8);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:0.199},19).to({alpha:1},10).to({alpha:0.801},20).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.2,-41.6,142.4,83.3);


(lib.moonanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// moon
	this.instance = new lib.moon("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({startPosition:0},0).wait(1));

	// moon-2
	this.instance_1 = new lib.moon("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.189,1.189);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({startPosition:0},0).wait(1));

	// moon-3
	this.instance_2 = new lib.moon("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1.377,1.377);
	this.instance_2.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({startPosition:0},0).wait(1));

	// moon-4
	this.instance_3 = new lib.moon("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1.566,1.566);
	this.instance_3.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({startPosition:0},0).wait(1));

	// moon-mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApKJLQjzjzAAlYQAAlXDzjzQDzjzFXAAQFYAADyDzQD0DzAAFXQAAFYj0DzQjyDzlYAAQlXAAjzjzg");

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AAFAAQAAACgBACQgCABgCAAQgBAAgCgBQgBgCAAgCQAAgBABgCQACgBABAAQACAAACABQABACAAABg");
	this.shape.setTransform(0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AgUgDQAAgBAAgBQAAAAAAgBQABgBAAgBQACgDACgDQAHgHAIAAQABAAABAAQAAAAABABIAAAAIAEABQAFABADAEIAAAAQABABACABQADAFABAGIAAABAAWABQgBgCgDgCQgBgCgDgBQgEgDgFgBQgDgBgCAAQgGAAgFABQgCAAgDACQgCABgBAAQACgCABgDQAEgFAEgCQADgBAEAAQAFgBAEACQACABACACQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQACACACADIABABQAAABAAAAQABADAAACQAAACABAAQAAAAAAABIAAAAQAAADgBABQAAABAAABQgBABAAAAQAAABAAAAQgBAAAAABQABgBAAAAQgBADgDACQgBABAAABQgBAAAAAAQgEAEgGABIgDABQgCAAgCgBIgBAAQgFgBgFgEQgBgCgCgBQAAgBgBgBAANgQQABABABABQACACACADAAHgTQADABACACAAVAEQAAABAAABQgBABAAABQAAABAAAAAAWABQgBACAAABQAAAAAAAAAAWABQgBABAAACAgEAAQAAgBABgCQAFAIgCAAQgBAAgCgCQgBgBAAgCgAgUgDQAAABAAABQAAAAABABQACADAFAEQACABACABQAFACAGABQACAAABABQAHAAAEgCQABAAABgBQgBABAAABQgBABgBABIAAAAQgBABAAABQgBAAgBABQgEADgFABAAQAOQgBABgBAAQgEAFgHABQgCAAgBAAQgHAAgFgEQgCgCgBgBQgDgEgCgEQAAgCAAgBQgBgCAAgBIAAAAQABgBAAgCAATAKQgBACgCACAAUgHQABADABADAgEAVQgFgBgEgEQgDgCgCgDQgBgCgBgD");
	this.shape_1.setTransform(0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AgTgfQAJgGAKAAQACAAACAAQALABAKAIQAAAAAAAAQABABAAAAQADADADADQAFAJABALIAAAAQAAABAAAAQAAAAAAABIAAABAgDgkQACgBABAAAgDgkQABgBABAAQABAAAAAAQADAAADABQAAAAAAAAQADAAACABQACABACABQACAAABABQAFACAEAEQADADACAEAAmABQgBgGgEgGQgDgEgEgDQgHgGgJgCQgFgBgFAAQgKgBgJADQgEACgEADQgEADgCACQACgFADgEQAHgHAHgDQABAAABgBQACAAACgBQADAAACAAAALgjQAEABADACQAEABADADAAagbQADAEADAEQACADACAEQABACAAADQAAABABACQAAACAAACAAmgEQAAABAAACAAmADQAAADgBACQAAABAAAAQAAAAAAAAQABgDAAgDQAAAAAAgBQAAADgBADIAAABQAAAAAAABQAAABAAAAQgBABAAABIAAAAQAAAAAAABIgBAAQAAABAAABQgBAAAAABQAAAAAAABQAAgBABgBQgDAGgEAEQgDADgDACQgKAHgLAAIgDAAQgCAAgCAAQgDgBgDgBQgHgCgGgGQgFgEgCgFQgBgCAAgBQgBgCgBgCQgCgEAAgFQAAgBAAgCIAAAAQAAgBAAgCQAAgBAAgBQAAACAAACQABABABADQADAJAIAGQADADADACQAKAFALABQADAAAEAAQALAAAIgGQACgCACgDQAAAAABAAQgBABgBABQAAABAAAAQgCADgCACQgBAAAAAAQAAABgBAAQgJAJgLABQgDABgDAAQgNgBgJgHQgDgCgCgCQgDgDgCgEAAlALQgBABAAABAAjAOQgBABAAACQAAABgBAAQgBABAAABQgCADgCADAAlAJQAAABAAABAgEAAQAAgBABgCQAFAIgCAAQgBAAgCgCQgBgBAAgCgAAbAaQgBACgCABQgBABgBABAglgFQABgBAAgBQAAgBAAgBIAAAAQAAgBABgCQAAgBABgCQADgGAFgFQACgCADgCIACgBQADgCACgBQADgBADgBAgMAkQgHgCgGgGQgDgDgCgDQgGgIgBgLAgCAmQgCAAgCAAQgDgBgDgB");
	this.shape_2.setTransform(0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AAmgnQAAABABAAQAHAIAEAJQABACAAABIACAGQAAACABADQABAEAAADQAAAAAAABQgBgLgHgJQgEgGgFgFQgLgJgMgDQgIgCgHAAQgOgBgMAFQgHADgGAFQgFAFgEAEQAEgGAFgHQADgCACgDQAGgFAHgDQACgBACgBQAIgCAIgBIAAAAQABAAAAAAIAMACQAGABAGACQADACACABIABABQADACAEADQAAABABAAQAEAEADAFQAJANABAQQAAABAAAAAgBg2IAAAAQABAAAAAAAgUgyQAKgEAKAAQADAAACAAQAOABAKAHAAMg0QAOADALAJAA3ACQAAABAAABQgBAGgBAEQgBACAAACQgBADgBACQgEAIgHAHQgBABgBABQgDADgDACQgGAFgIACIgQADIgGgBQgCAAgCAAQgBAAgBAAQgOgEgLgLQgHgGgEgHQgCgEgCgEQAAgCgBgBIgCgMQAAgBAAgCIAAAAQAAgGACgHIAAgBQABgCABgCQABgCABgDQAEgIAGgHQABAAABgBIACgCAA3ABIAAAAQAAABAAAAQAAAGgCAFQAAACgBAAQAAACgBACQgBADgBACQgBABAAABQABgBABgCQgEAIgHAGQgBACgBABQgBABgBABQgIAHgKADAgEAAQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgCAAgBgAAwAaQgCACgBACQgDAEgEAFQgNAMgRADQgEAAgEAAQgSAAgNgKQgEgEgDgDQgIgJgFgKAg1gIQAAADAAADQABADABAFQAEANAMALQAEADAFADQANAIAQABQAFAAAFAAQAQgBALgKQAEgDAEgFAA1gMQABAFABAGAgVgxIABgBQAJgDAKgBAg0gNQgBADAAACAgLA2QgPgEgLgLQgEgEgDgEQgEgGgDgHAgFA2QgCAAgCAAQgBAAgBAAAg2AAQABgEAAgE");
	this.shape_3.setTransform(0.5,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("Ag/geQAFgLAIgIQAWgWAcAAQAEAAADAAQATACAOALIAIAGQAAABABAAQAAAAABABQAFAFAEAGQAMARAAAVQAAABAAAAQAAADAAADQgBAHgBAGQgBACgBACQAAABAAABQgBACAAABQgBABgBACQAAABAAAAQgBABAAABQgFAIgHAHQgBACgCACQgCABgBABQgBABgBABQgBABAAAAQgBABgBAAQgRAMgWABIgIgBQgDAAgCgBQgDAAgCAAQgRgFgOgOQgJgHgFgKQgCgFgCgFQgBgCgBgDIgCgQQAAgBAAgCQAAAAAAAAQAAgJACgIIAAgBQABgDABgDQACgDABgDQAFgKAJgJQAFgGAHgEIAHgEQAEgCAFgCQAJgDALAAQASgBAPAIQAEACAEADABHAAQgBgOgIgNQgFgIgIgHQgNgLgRgFQgJgDgKAAQgTAAgPAHQgJAEgHAHQgIAGgFAHQAFgJAIgJQAGgGAHgFABFgQQABAEAAADQABAFAAAEAA/ghIACAGQABACABADIACAGQACAHAAAIAAygyQAHAIAGAJAgeg/QAOgHAQAAQAdAAAVAVQAIAHAFAJABHAHIAAgHABGAOQgBACAAACQgBABAAABQAAACgBABQAAABAAAAQgBACAAACABGAMIAAACABHAHQgBAEAAADABGAMQAAgCABgDAA7AnQACgCACgDQAAgBABgCQgEAKgJAJQgBACgCABAhFgLQgBAFABAEQAAAFACAGQAEASAQAPQAGAEAFAEQASALAVABQAHAAAHgBQAUgCAPgNQAEgDADgEQgEAGgFAFQgRARgWADQgGAAgFAAQgXAAgSgNQgFgEgDgEQgMgMgFgNABHAAQAAAGgBAGAgEAAQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgCAAgBgAhEgRQgBADAAADAgRBGQgSgFgNgOQgGgFgEgFQgHgKgDgMAgHBHQgDAAgDgBQgCAAgCAAAhGAAQAAgFABgG");
	this.shape_4.setTransform(0.5,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABXABQAAgTgLgRQgGgKgJgIQgQgPgVgGQgMgDgMAAQgXAAgTAIQgLAFgJAJQgJAIgGAIQAEgIAGgHIAEgFQAAAAABAAQAAgBABAAQAPgQAUgHQAMgEANAAQAWAAATAJQAFADAFADIAKAIQAAAAAAABQABAAAAABQAHAGAFAIQAOAUABAaIAAACQAAAEgBAEQAAAIgCAIQgBADgCAEQgBADgCAEQAAABAAAAQgBACgBABQABgBABgCQgGAMgKAKQgEAEgEADQgIAHgJAFIgFABIgYAFIgIACIgIAAQgEgBgEAAQgagFgTgTQgHgGgFgHQgCgDgCgDIgBgCQgDgGgCgGQgEgNgBgOQAAgBAAgCQAAAAAAAAQAAgJACgJIABgFQACgDABgEQABgDACgEQAAAAABgBQAAAAAAgBAhMgqQAGgKAJgJQAagaAjAAQAFAAAEAAQAXACASANAA8hAQAAABABABQAQAPAGAUQAEAMABANAg9g8QAagaAjAAQAkAAAaAaQAVAUADAcQABAHAAAGIAAAGABWATIgBABQAAACAAABQABgEABgFQgBADAAACgABXAOIAAgBABVAXQAAABgBABQgBADgBADQgCAEgBAEABXAIQAAACAAADQAAgDAAgDQAAAGgBAGABNAqIgCAEQgBABgBABQgFAHgHAHQgMAMgQAHQgJADgKACQgDAAgCAAQgFABgEAAQgdgBgWgQQgFgEgFgGQgOgNgHgRAgEAAQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgCAAgBgAhWgNQAAAFAAAGQABAHACAHQAFAYAUARQAGAGAHAFQAWAOAaABQAIAAAJgBQAZgDATgRQAFgFAEgFAA/A9QgHAHgHAFQgFADgGAEABNAqQgGAKgIAJAhOglQAAAAAAAAIACgFQAEgGAFgGAhVgSQAAACgBADAgHBYQgFgBgFgBQgYgEgTgTQgJgJgHgKAhXAAQABgHAAgG");
	this.shape_5.setTransform(0.5,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AA+hUQAFAFAFAEQADADACACQAGAGAEAHQARAYAAAgAA+hUQAGAFAFAFQACACACACQAPARAHAVQAFAPAAAQQAAAAAAABQAAAFAAAFQgBAEgBAFIAAADQAAABAAAAQAAABgBAAQAAACAAABQAAABgBABQgBAEgCAFQgBAEgCAEQAAAAgBABQgBACgBACQABgCACgDQgHAPgNAMQgEAFgEADAAFhoQAXACATAKQAIADAHAFAgYhlIAWgDQABAAAAAAIAGAAQADAAADABQAdACAWARABoACQgBgYgMgUQgHgMgMgLQgTgSgYgGQgOgFgPAAQgbAAgXALQgMAGgMAKQgLAKgHAMQAEgJAGgIQAEgFAFgFQAfgeAqAAQArAAAeAeQAZAZAFAhQABAIAAAIIAAAAQAAAJgCAIABoAKQgBAJgCAJQgCAEgBAFQAAAAgBABABaA0IABgBQgGALgLALQgEAFgEADQgBABAAAAQgDACgEADQgZARggABIgKgBQgGAAgFgBQgIgCgGgCAgEAAQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgCAAgBgAhmgOQAAAGAAAGQAAAJACAJQAHAcAXAVQAIAHAIAGQAZAQAfABQALAAAKgBQAegEAWgUQAJgJAGgJQgBACgCADQgGAJgIAHQgYAZghAEQgIABgIAAQgWAAgTgIQgKgFgJgHQgCgBgCgCIgIgFQgMgMgHgOQgEgGgCgHQgCgEgBgEIgDgYIAAgBQAAgBAAgBQAAgBAAAAQAAgNADgMIAAgCQACgEABgFQACgEACgFQAFgJAGgIQAEgFAEgEQATgUAYgIQAEgBADgBAhkgZQgBAEgBAFIAAACAhdgtQAHgPANgMQAWgWAbgHAhIBLQgIgHgFgJQgLgOgEgRAhABQQgFgEgEgEQgQgQgIgUAgJBoQgFAAgFgBQgIgBgHgDIgHgEIgXgPAhnAAQAAgHABgH");
	this.shape_6.setTransform(0.5,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AA4hsQAGAEAHAFQAFADAEAEQABAAAAABQADACACACQABABAAAAQAWAWAIAbQAEANACANAgTh3IARgCQABABABgBIAGABQADAAAEAAQAXACAUAKAB5ACQgBgdgOgXQgIgPgNgMQgXgVgcgIQgQgEgSAAQgfgBgaANQgPAHgNAMQgOAMgIAOQAFgIAFgIIAMgOQAAAAABgBQAVgWAcgIQAHgDAJgCAhUhUQAjgjAxAAQAyAAAjAjQAdAdAFAmQACAKAAAJIAAAAQgBAHAAAHIgBAFQAAAAAAAAIgBAHQAAgDABgEAAGh4QAbABAXALABVhWQAKAJAHAKQAQAZADAfIAAAKQAAAAAAABIAAAEIAAACQAAACAAADQgBAKgDAJQAAgBABgBAB5AGQgBAFAAAFAB1AgIAAAAQgBABAAABQgBAFgCAFQgCAEgCAFQAAABAAAAQgEAGgEAGQgBAAAAABQAEgFADgEQABgDABgBQgIARgPAOQgEAEgEADQgFAFgFAEQgIAFgHAEIgGABIgkAIIgKADIgOgBQgFgBgEAAQgjgHgbgaQgGgHgFgHAB1AgQAAAAAAABQgCAFgBAFQgBAAAAABQgCAFgCAFQgBACgBACQgIAOgNANQgEAEgEADQgBABgBACQgLAJgMAGAB1AeQAAABAAABAgDAAQAAgCABgBQAFAHgCAAQgBAAgCgBQgBgCAAgBgAh3AAQABAJADAKQAGAhAbAZQAJAIAKAHQAeATAkABQAMAAAMgCQAjgFAZgYQAHgHAGgHQgHAKgIAIQgRARgVAJQgNAFgOADQgFAAgEAAQgGABgFAAQgnAAgegXQgJgGgGgHQgTgTgKgXIgHgmIAAgCQAAgBAAAAQAAgRAFgQQABgFACgFQADgFABgGQAJgRAOgOQAdgdAlgGAhzggQgCAGgBAFIAAAFQgBAHAAAHQABABgBABQAAgIABgIAhsg1QAFgIAGgIAgNB5QgFgBgFgBQgigGgagaQgHgHgFgHIgIgKQgBgDgCgDQgDgGgDgGIgBgDAhnA/QgFgJgEgJ");
	this.shape_7.setTransform(0.5,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("Ah6g7QAJgUAQgQQAqgqA4AAQAHAAAHABQAfACAaARABRhvQAIAGAIAIQAEAEAEAEIAGAIQANATAHAVQACAGACAHABRhvQAIAGAHAHQAFAEAEAFACJACQgBgggPgcQgKgQgPgOQgZgYgggJQgTgFgUAAQgkgBgdAPQgRAIgPAOQgPAOgJAPQACgEACgEIAKgPQAFgFAFgGQAZgZAggKQATgGAVgBQAiAAAeAPQAEACAEADIAJAGABvhRQACADACADQAPAVAFAaIABAIQABAJABAKQAAAAAAABIgBAFQAAAEAAAEQgBANgDAMQgCAFgCAGQAAAAAAABQgDAFgCAGQgBAAAAABQgBACgBACAhrhUQAFgFAGgGQAogoA4AAQA5AAAoAoQAgAhAHArQABALAAAKIAAAJQgBAHgBAHIAAACQgBACAAADQABgGABgGQAAADgBACACIAUQABgEAAgFACJAFQAAAIgBAHACGAgIgBAFQgBABAAABQgBAFgCAGAB2BHQgBACgCACQgIAMgKAKQgVAUgZAKQgOAGgPACQgBAAgBAAQgKACgKAAQgsgBgjgaQgJgGgIgJQgWgVgKgaIgJgsIAAgBQAAgBAAgBQAAgTAGgSQgCAIgBAIIgBAEQAAAHAAAIQAAAAAAABQAAALADALQAIAmAeAdQAKAJALAIQAiAWAqABQAOAAANgCQAogGAdgcQAMgMAJgOIgCAEQgIAOgMAMQgDADgDADQgDACgCADQgMAKgOAHIgKACIgfAIIgMADQgBAAgBAAQgDAAgCAAIgSgBQgEAAgEgBQgogHgegeQgKgKgIgLQgJgNgGgOIAAgDAB4BDIABgBQABgCACgDQgKAUgQAQQgDADgDADQgIAGgHAGQgIAFgIAFAgDAAQAAgCABgBQAFAHgCAAQgBAAgCgBQgBgCAAgBgAh6g7QACgFADgFAiDgkQABgGACgFQADgGADgGAgRCJQgFAAgFgBQgngIgdgdQgQgQgKgSQgEgHgDgHAiHAAQgBgIABgI");
	this.shape_8.setTransform(0.5,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiIhFQAKgVARgRQAvgvA/AAQAIAAAHABQAkADAeATIAKAHQAIAGAIAIQAAAAABABQACADADADIAIAJQAEAFADAEQAQAYAGAbIABAIQACAMAAANQAAAAAAABIAAAFQAAAFAAAFQgCAKgCAKQAAABAAACQgBABAAABQAAABAAABQgBAAAAABQgCAGgCAHQgDAGgDAHQgBABAAACAh5hcQAGgHAGgIQAdgdAjgLQAVgGAYgBQAnAAAgARQAFADAGADACZgKQgDgegPgaQgLgSgQgPQgdgcgjgKQgVgGgXAAQgogBghARQgTAJgRAQQgPAPgLAQQAAABgBABQAEgHAEgHIAHgJQAGgHAHgIQAtgtA/AAQBAAAAtAtQAkAlAHAwQABAGAAAGgAB6heQARAWAIAZQACAHACAGACZAVQAAgDAAgDQgBAIgBAJIAAABQgBABAAABACaAFQAAAIgBAIIgBAGQgBACAAADACWAmQgBACAAACQgCAHgCAGQgDAHgDAHQgBABgBACACIBJQgDAFgDAEQAAABgBABQgJANgLALQgkAkgwAHQgMACgNAAQgyAAgngdQgKgIgJgJQgYgYgMgdIgCgFQgGgVgBgYIAAgBQAAgBAAgBQAAgVAGgVQgCAJgCAJIAAAFQgBAIAAAJQAAAAAAABQABAMADAOQAIAqAjAhQALAKAMAJQAmAZAvAAQAPAAAPgCQAtgHAhgfQAOgPALgRQAAgBABAAAB+BZQgHAKgKAKQgEAEgEADIgEAFQgGAEgFAEQglAagwAAIgWgBQgFgBgEgBQgsgIghghQgEgFgEgFIgIgIQgHgKgGgKQgDgGgCgGIgDgHAB+BZQgHALgKAJQgEAEgEADACCBSIgEAHAgDAAQAAgCABgBQAFAHgCAAQgBAAgCgBQgBgCAAgBgACZAPIAAgZAiJhCQAAgBAAAAQAAgBABgBAiHhHQAEgGADgGAiTgpQACgGACgGQADgHADgGQABgCABgDAh7BdQgCgDgCgCQgIgNgGgOAgVCaQgEgBgDAAQgtgIgigiQgEgFgEgFAiYAAQAAgJABgJ");
	this.shape_9.setTransform(0.5,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiYhLQALgYAUgUQA0g0BFAAQAJAAAJABQA7AGArArQANANAKAOQAUAeAGAlIACAaQAAAAAAABQAAAEgBAFQAAAHgBAHIgCAKQAAAEgCAEQAAACAAACQgBABAAABQgDAHgCAHIgDAIQgCADgBAEQgBACgCADQACgCABgDQgMAYgUAVQgIAIgJAHIgDACQgBAAAAABQgDABgCACQgqAdg1ABQAAAAAAAAQgBAAgBAAQgBAAgBAAIgVgCQgEgBgDAAQgygJglgmQgMgMgKgNQgLgRgHgSAiNheQAJgNAMgMQAfgfAngNQAXgHAbAAQArgBAkAUQAVALATASQAfAfANAoQAEALACANACpgLQgDgigRgcQgMgVgSgSQgfgegogLQgXgHgaAAQgsAAgkASQgVALgTASQgSARgMAUQAFgJAFgJQAKgNALgLQAygyBGAAQBGAAAyAyQAoAoAIA1QABAHAAAHIABANQAAABAAABIgFAlACqAJQAAAEAAADQgBAEAAADACnAhQgBAHgCAHQgCAGgCAHQAAABgBAAAijguQgGAVAAAXQABAPADAPQAKAwAmAkQAMAMAOAJQAqAcAzABQASAAAQgDQAxgIAlgjQANgNAKgOQgBACgBACQgKAOgNANQgoAng1AIQgNACgOAAQg4AAgrggQgLgJgJgKQgbgagNggIgLg6QAAAAAAgBQAAgYAHgXQACgGACgHQADgHADgIQABgBABgBACcBFQgCADgCAEQgDAHgEAGQADgEACgEQgLAVgSASQgHAHgHAGQgCABgBACAgEAAQAAgCACgCQAEAIgCAAQgBAAgBgCQgCgBAAgBgAiZhKQABAAAAgBQAFgKAGgJAgZCqQgFgBgEgBQgwgJglglQgUgTgMgXQgEgJgEgJIAAgC");
	this.shape_10.setTransform(0.5,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AB4iQQAFAFAGAGQAHAGAFAHQACACACACQAFAGAFAHQAaAnAEAwQAAAHAAAIQAAAAAAABQAAAJgBAJQgBAKgCAKQAAABgBACQABgEABgEQgBACAAADQgBADAAAEQgBADgBACQAAABAAAAQgBADgBAEQgBAEgCAEQAAABAAAAIgDAGQgCAGgDAFQgFAJgGAJQgCADgCADQAHgKAGgJQABgDACgCQgNAagXAXQgEAEgFAEIgDADQgBABgCABIgIAHQgCABgDACQgGAEgFAEIgIACQgaANgdAEQgIACgJAAQgHABgGAAQg9gBgvgjQgMgJgLgLQgdgdgQgjQgKgeAAghQAAgBAAgBQAAgaAHgZQgGAXAAAZQAAARAEARQALA0ApAoQAOANAPAKQAtAeA5ABQATAAASgDQA2gIApgnQAKgKAIgKQgJAMgMALQgVAWgZANIhIATIgLADQgBAAgBAAQAAAAAAAAQgCAAgBAAQgBAAgBAAQgCAAgBAAQgOgBgNgCQgBAAgCAAQg0gLgpgoQgKgKgIgKQgKgNgHgNQgCgEgBgDQgCgDgBgEQgCgEgCgEAB4iQQAFAFAGAFQAGAHAGAHAinhSQANgaAWgWQA4g5BMAAQAKAAAJABQA5AFAsAlAiUhwQAHgJAJgJQAigjArgNQAagIAdgBQAvAAAoAVQARAJAQANAC5gMQgDgmgSgfQgNgXgVgTQgighgrgNQgagHgcAAQgwgBgoAVQgXAMgVATQgUATgNAWQACgDABgDACTh0QAWAcAJAgQAHATACAVAiUhwQAIgJAIgJQA3g2BNAAQBNAAA2A2QAsAsAJA7QABAHAAAIQABAHAAAHIAAABQAAAJgBAIQAAAHgBAGAC2AtQgBAEgBADQgBADgBADQgCAEgBAFAC0AyQABgFABgEAC6ASQgBAOgDANACsBJQgCAFgCAFQgCADgBADQgNAXgUAUQgEAFgFAEAgEAAQAAgCACgCQAEAIgCAAQgBAAgBgCQgCgBAAgBgABtCZQgIAGgIAFAinhSQABgBAAgBAizgyQACgIADgHQADgIAEgIQAAgBAAAAQACgEACgEIACgDQAGgJAHgKAiVByQgDgEgDgEQgIgMgGgN");
	this.shape_11.setTransform(0.5,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABriuQATAMAQAQQABABAAAAQAIAIAHAIQAHAIAGAJQAYAkAHAsQACAPAAAPQAAABAAAAQAAAJgBAJQAAABAAABQgBAOgEANQgBAFgBAFQgCAGgCAGQgBACgBADQgBAEgCADQgCAGgDAEQAAABAAABIAAABQgDADgCAEQABgCABgBQACgDABgDQgOAdgYAZQgFAFgGAEQgJAJgLAHQgMAJgOAGIgMADIg7AOIgQADQAAAAgBAAQgCAAgBAAQgBAAgBAAQgMAAgMgCQgEgBgFAAQgBgBgBAAQgrgJgjgaQgMgJgLgLQgYgXgPgcQgFgKgEgLQgNghAAgnQAAAAAAgBQAAgdAIgbQgHAZAAAcQABASAEATQALA5AuAsQAOAOARAKQAxAiA+ABQAVAAATgDQA7gKAsgqQALgLAJgLQADgEACgEQADgDACgDQABgCABgCAi0hcQAOgbAWgXQA9g+BTAAQALAAAKABQAwAEAmAZAieh+QAHgIAHgIQAlgmAvgOQAcgJAggBQAzAAAsAXQAGADAGAEADKgNQgEgpgUgjQgOgZgWgVQglgkgwgOQgbgIgfAAQg1gBgrAXQgZANgWAVQgVAUgNAWQgBACgBABQAEgHAEgGIACgEQAGgIAGgJQAHgIAHgIQA8g7BUAAQBTAAA8A7QAwAwAJBAQACAIAAAJQAAAIAAAHIAAAAQAAAVgDAUQgCAHgCAGQgBAGgCAGQgBACgBACQgBAEgCAEQgDAGgCAGACeiBQAZAfALAkQAFAPADAPAC2BdQgBACgCACQgNAZgWAWQgFAFgGAFQgCADgEADQgSAPgWAKAgEgBQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgCAAgBgABLC8QgUAIgXAEQgIABgIABQgIAAgIAAQhDAAgzgmQgNgKgMgMQgfgggPgnAClB2QgKANgMAMQgeAegmAPADGAuQgBAFgBAEQACgGABgGAi2hZQAAAAAAgBQABgBABgBAjDg3QACgIADgIQAEgJAEgJQACgDACgDQADgFADgFAh3CmQgMgJgMgLQgOgOgMgRQgNgTgIgW");
	this.shape_12.setTransform(0.5,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ACCizIAZAWQAAAAAAAAIAcAiQABABABABQAaAnAHAvAi8hvQANgXAUgUQAogpAzgQQAegJAiAAQA4gBAvAZQAOAIANAJAjEhhQAPgfAZgaQBDhDBaAAQALAAALABQA8AGAvAjADbgGQgDgxgXgqQgPgbgYgXQgogngzgPQgegJghAAQg6AAguAYQgcAPgYAXQgXAWgQAaQADgFAEgGQAOgWATgUQBBhABaAAQBbAABABAQA0A0AKBFQABANABANgAC3h7QASAaAKAfQAEAPADAQIADAhQAAABAAAAQAAACAAADIgBAEQAAAPgDAOQgCAMgDALQgDAJgDAJQgBADgBADQgEAHgCAHQgBAAAAABQgBACgBACQABgCACgDQgQAfgaAcQgEADgDADQgNAMgNAJQgCABgCABIgHACQgjAWgpAGQgNACgMAAQgGAAgFAAQhIAAg3gpQgOgLgNgNQgigigSgqADcAIQAAAHgBAGQgBAIgBAIQgCALgDALQABgDABgDIAFgyIAAgJADWA1QgBAEgBAEQgDAJgDAJQgBACgBADAgDgBQAAgCABgBQAFAHgCAAQgBAAgCgBQgBgCAAgBgAjTg7QgHAbAAAeQABAUAEAUQANA+AwAvQAQAQASAMQA1AjBEACQAWAAAVgEQAagEAYgLQAhgPAcgbQAQgQANgSQgBACAAAAQgNATgRARQgUAUgXANIgQAFAALDaIgLAEQAAAAgBAAQgCgBgCABQgBgBgBABQgCgBgBABQgEgBgDAAQgNgBgMgCQgBAAgBgBQg+gMgwgvQgQgQgMgSIgHgKQgDgFgDgGQgGgLgEgMAAuDQIgjAKADDBnQgPAdgYAYQgEAEgDADQgGAFgFAEQgJAIgKAGAC6B1QAFgGAEgIADFBjQgFAJgGAJAjEhhQADgHAFgHAjTg7QADgJADgJQAEgKAEgJQAAgBABAAAjFhgQABgCABgCAi9ByQgKgQgGgSIgBgDIgNhIIAAgCQAAgBAAgBQAAgfAIgd");
	this.shape_13.setTransform(0.5,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AB9jKIApAhQABAAAAABQAQAQAMARQAVAeALAiQABAGACAGAjOhxQAPgcAYgZQArgsA3gRQAggJAlgBQA8AAAyAbQAIAEAHAEADrgGQgCg2gagtQgQgcgagZQgrgrg3gQQgggJgkAAQg9gBgzAbQgdAPgaAZQgZAZgQAcQABgDACgDQAPgcAYgXQBFhGBiAAQBhAABGBGQA3A3ALBKAjThoQAQgiAbgbQBHhIBhAAQANAAAMABQA3AFAtAdADDiHQACACABADQAXAhAJAmIADAYQAAAEABADIAAADQABAJAAAKADqgZIADAXQAAABAAAAQAAADAAAEQAAACAAADQgBAAABABQgBAEAAAFQAAABgBABQAAAFgBAFQAAAGgBAFIgBAFQgCAIgCAIQgDAJgDAKQgDAGgCAFIgFAKQAAABAAAAQgCADgBACQACgCABgDQgRAhgcAdQgGAGgFAFIgDACQgKAJgMAIQgHAFgHAEIgLADQggAQgkAGQgLACgMAAIgPAEQgBAAgBAAQgBAAgBAAQAAAAgBAAQgCAAgBAAQgTAAgSgEQgCAAgBAAQgCgBgCAAADsAVQgBAGgBAGADkBAQAAABgBABQgDAJgDAKQgCAFgCAFADkBAQAHgdAAggIAAgJADoAxQgCAHgCAIADLB6QgCADgDADQgNAUgSASQgcAcghAQIhbAYQgIABgHAAQhOgBg7gsQgPgLgOgOQglglgRgtADLB6IACgFQACgDACgDQgQAfgaAaQgGAGgFAFADUBqQgDAGgEAFAgEgBQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgCAAgBgAjjhAQgIAdAAAhQABAWAEAVQAOBDA0AzQARARATAMQA6AnBIABQAYAAAWgEQBFgLA0gyQAUgTAOgWACZC1QgCACgDACQgPANgQAJAjThoQABgCABgBAjjhAQADgJADgKQAFgLAFgKIAAAAQACgFADgEAiNDAQgNgKgMgMQgRgRgNgTQgMgRgIgSQgUgsAAg0QAAgBAAAAQAAgiAJggAiNDAQgMgKgNgMQgcgcgQggQgDgFgDgGAgtDqQgDAAgEgBIgEgBQgugLgngd");
	this.shape_14.setTransform(0.5,0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("Ajbh9QAQgcAYgZQAvgvA6gRQAjgLAnAAQBBgBA2AdQAGADAGAEIAbAUQALAIAKAKQAGAHAGAGIAOASQAZAiAMAnQAGASADASIADAmQAAABAAAAQAAAGgBAGIAAAGQgBAEAAADQAAAEgBADIgCARQgBAEgBAFQgCAGgBAGQACgLADgLIADgfQAAgGAAgHIgCgeQgGgugWgnQgRgfgcgbQgugtg7gRQgjgLglAAQhCAAg2AcQggARgcAbQgbAagRAeQACgFADgFQARgbAXgYQBLhKBoAAQBoAABKBKQA8A8ALBPQABAFAAAFACejGQAKAIAKAJQAHAHAGAHAjihwQARgjAdgeQBNhNBoAAQANAAANACQA4AFAwAdADNiVQAEAFAEAFQAeAtAIA2AD9ARQgBAIgBAGAD2A+QgBAEgBADQgBADgBAEQgDAHgCAHQgFAMgFALQgRAkgfAfQgIAHgHAHQgLAKgMAIQgEACgDADIgLAEQglAUgrAHIgPAFQgDABgCAAQgLABgMAAIgkgCQgHgBgFgBQhKgOg4g4QgSgSgOgUQgEgGgEgGIgHgNQgbg0AAg/QAAAAAAgBQAAgeAGgcQgBAGgBAGIgDAUQAAALAAALQAAABAAAAQABAXAEAWQAOBIA4A3QATASAUANQA9AqBPABQAZAAAYgFQBKgMA3g2QARgRAOgUIAIgLQAEgGADgHAD2A+QgBAEgBAEQgBADgBADQgDAHgCAIQgFALgFAMQgEAGgDAGAD3A5QgBADAAACAD5AvQgBAFgBAFAD5AwQgCAHgBAHAgDgBQAAgCABgBQAFAHgCAAQgBAAgCgBQgBgCAAgBgADUCJQgOAVgTATQgbAbgdARIhQAbQgBAAgBAAQgUADgVAAQhTAAhAgwQgQgMgOgPQgogngSgwACkDCQgDACgCACQgMAKgNAJAjihvQABgCABgCAj2g4IADgMQADgLADgKQAGgLAFgLQAAAAAAgBQADgGAEgHAgkD9QgIgCgIgBQhHgOg2g3QgYgXgRgb");
	this.shape_15.setTransform(0.5,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AAjkMIAfAJQAPAEAPAFIAeAKQACABACABIAiAWQAAABABAAQANALAMALQAAABAAAAIAUAVQAJALAIALQAgAxAIA5IADApQAAAAAAABQAAANgBAOQgBAJgCAKIgCAOQgCAHgCAHQABgEABgEQgBAFgCAEQgDALgEALQgFANgGAMQgCAEgBADQACgEACgEQgTAmghAiIgKAKQgFAFgGAFQgLAJgMAIIgJADIgPAEQAmgSAgggQAXgXARgaQgDAFgDAEQgPAWgVAVQgZAZgcASQgrAZgyAHQgPADgOAAQgIAAgHAAQhYAAhEgyQgRgOgQgQQgqgpgRg1QAUAxApAoQAUAUAVAOQBCAsBTABQAWAAAVgDQAFgBAEAAQAkgGAfgPIhMAWIgfAJIgPAFQAAAAgBAAIgggDQgKAAgJgCQhOgPg7g7QgUgTgOgWQgBgBgBgBIgPgZQgdg3AAhDQAAgBAAAAQAAgnAKgkQgDANgCANIgDAWQAAALAAALQAAABAAABQAAAZAFAXQAFAYAJAWAjoiGQARgcAZgaQBPhPBvAAQAiAAAgAIAjoiGQARgeAZgaQAxgyA/gTQAlgLApAAQASAAARACAjxh4QATglAfggQBRhSBvAAQAOAAAOACQADAAADABAENgIQgDg9gdgzQgTghgdgdQgygxg+gSQglgLgoAAQhHAAg5AeQgiASgdAdQgdAcgSAgQACgGAEgFABgj6QAzAUArAqQA/BAANBUQACAQABAQADSirQAhApAPAxQAGATADATAEIA7QgCAIgCAHQgEALgDALQgGAMgFAMAEGBBIAHg+IAAgLADoCJIAGgJAgDgBQAAgCABgCQAFAIgCAAQgBAAgCgCQgBgBAAgBgAC0DKQgPANgPALQgCABgCACAjxh3QABgCACgCAkDhJQAEgLADgLQAGgMAFgMQAAAAAAgBQAEgHAFgHAghENQgLgBgLgCQhMgPg6g6QgTgTgPgW");
	this.shape_16.setTransform(0.4,0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AEcgUQgFg7gcgxQgTgjgfgfQg1gzhCgUQgogLgrAAQhKAAg9AgQgkATgfAeQgfAegUAiQACgCABgCQATgkAfgfQA0g1BCgUQAngMAsAAQBKAAA8AgQAkAUAfAfQA1A0AUBCQADAKADAKIAHBAQAAAAAAABQAAAOgCAOIgDARIAAAFQAAABgBABQAAACAAADQAAABgBABIgBAEQgBAIgDAJQgDAMgEALQgGANgGANQgGAMgHAKQgBACgCADQgCADgDAEQAGgHAFgIIgDADIgYAfQAJgJAHgKQgKAOgLANIgMAOQgBABgBACQAAAAgBAAQgJAKgLAIQgKAJgKAHQhGAwhZAAQgBAAgBAAQgCAAgCAAIglgDQgGgBgGgBQhTgPg/g/QgVgVgPgWQgPgVgKgXAkAh/QAUgoAhgiQBWhWB2AAQAPAAAOABQBjAJBJBJQAWAWARAYQAcArALAxAj7iHQATgiAegeQBUhUB2AAQB2AABTBUQBEBDANBZQABAMABALIABAXQAAABAAACQAAAUgDASAEYA6IgBAIQgBAGgCAGIAAAAQgEAMgEAMQgGANgFANQgCADgCAEQACgEACgDQgEAIgFAIIgCADQAEgGADgGQgCAEgDAFAEUBOIABgGQACgFAAgFAEXBCQgBADgBADADWC9QgGAFgGAGQhDBDhZAOQgWADgYAAQhegBhIg1QgSgOgRgRQgrgsgVg1IgEgSQAVA9AyAxQAUAUAXAQQBGAvBYAAQAdAAAbgEQBTgOA+g+QAIgIAHgIgAgDgBQAAgCABgCQAFAIgCAAQgBAAgCgCQgBgBAAgBgAkThOQgEARgDASIgCAUQAAAKAAAKQAAABAAABQABAJAAAKQACARADAQQAEARAFAQIgOhCIgDgPQAAgBAAAAQAAgqALgmQAEgLAEgMQAGgNAFgMIAAgBQACgCAAgCAkAh/QADgEACgEAgrEdQgIgBgIgCQhQgQg+g9QghghgUgnQgEgHgEgIIgDgQAkcgBQAAgLAAgL");
	this.shape_17.setTransform(0.4,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABMkiQAHACAHACIArAMQAEACAFADQAEACAFACIArAfQAKAJAKAKQAFAEAEAFIAZAeQADAFADAEQAeAtAMA0IAHBEQAAAAAAABQAAAPgBAPIgHAoQgBAHgCAHQgEAMgEANQAAAAgBABQgEAIgDAIIgBADQgCAEgCADQgBADgCAEQACgDABgDQgVArgkAkQgMAMgMAKAhqkZIASgKQAqgNAuAAQAAAAABAAIAYABQADAAAEABIAsAMAhqkZQAxgSA5AAQAnAAAlAJAEtgVQgGg+gdg1QgVglghggQg3g3hHgUQgpgMguAAQhOgBhBAiQglAUghAgQghAggVAlQABgDACgDQAUglAgggQAOgOAPgMIALgGQAfgXAkgNACFkSQAJAEAJAFADCjqQAKAJAJAJQAFAFAFAFAD4iwQAcAoAOAtQADALADAKABakeQBEAVA3A2QBHBHAOBfQACAMABAMAEkBRQAAABgBACQgEAMgEANAEkBRQABgEABgEIAIhGIgBgYAEnBFQgBAGgCAGAECCeIgEAGIgRAXAETCAQgCAEgCAEQgGALgHALQAFgIAFgIQgUAngiAiQgMAMgMAKIAAAAIgLAJQgFAEgGAEQgDACgDACIgwAZQg1AVg9ABQgBAAgBAAIgqgDQgJgCgJgBQgGgBgFgBAiEEHQA9AeBJABQAfAAAdgFQBYgPBChBQALgLAKgLQgLANgMAMQhHBHheAOQgYADgZAAQgvAAgqgNQgugOgogeQgLgIgKgJIgRgJIgUgWQgVgagPgcQgIgQgHgQIgHgoIgIguQACAQADAPQABAIACAHQAUBNA9A8QAWAVAYARQADACADACQANAIANAHgAgDgBQAAgCABgCQAFAIgCAAQgBAAgCgCQgBgBAAgBgACzD2QgJAGgIAGAkOiGQAUgqAjgkQAPgPAQgMAkOiGQACgFADgFQAUgkAfgfQAUgTAVgPIBDgkAkjhSQAEgMAEgNQAHgNAFgOIABAAQABgCABgCAkjhSQgEAOgCAPIgDAZQAAAMAAANQAAABAAABQAAAMABAMIgDgUQAAAAAAgBQAAgsALgogAjpDDQgKgMgIgMQgVgdgMghAjEDiQgIgHgIgIQgvgvgWg5AgsEuQgHgBgHgBQgIgCgHgBIgQgKIgrgYAieD4IgmgW");
	this.shape_18.setTransform(0.4,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AhSk2IBSgLQAAAAABAAIAQABQBJAEA8AgQAoAVAjAjQA7A6AWBKQAHAWADAYIAEAvQAAABAAAAIgBAQQAAAJgBAIQgDAbgHAaQAAABAAACQgBAAAAABQgBADgBADAARlAQAJAAAIABQBuAKBSBRQAYAZASAbQAnA5AJBFAE9gWQgFhCggg4QgWgngigiQg7g6hKgWQgsgMgwAAQhTgBhDAkQgoAVgjAiQgjAigWAnQAEgGADgGQAVgjAegeQBdhdCEAAQCDAABeBdQBKBLAPBkQACANABANIABAZQAAAagEAZIgDAUQgBACAAACQgBADgBADQAAACgBACQgBADgBADQgBAFgCAGQgCAEgBAFQgDAGgCAGIgFALQgBADgCADQAAAAAAABQgCACgBADQACgDABgDQgWAugnAmQgGAGgGAGIgEADQgHAHgIAGIgMAJQgCACgDACQgDACgDACAE2BOQgCAEAAAFAE/AOQgBAfgHAdAEeCQQgIAPgKAOQgFAGgEAGQANgRALgTQgWAqgkAkQgGAGgGAGAkmBwQAXA6AxAwQAXAWAZARQBOA1BiABQAhAAAegGQBdgQBFhEQASgRAOgTQgPAUgSATQgkAjgpAWAEuBpQgCAFgBAFQgDAFgCAGAgDgCQAAgCABgBQAFAIgCAAQgBAAgCgCQgBgBAAgCgAC2EIQgFAEgGAEIgWAJQgWAMgXAIIgdAMQgkAIgnABIgvgEQgJgBgKgCQhagShEhEQgmglgWgrQgBgDgCgCIgOgiQgSgyAAg5QAAAAAAgBQAAgvAMgqQgEAPgCAQIgDAaQgBANAAAOQAAABAAAAQABAeAGAdQAFAcALAbABoEtQgZAIgbAEQgZAEgbAAQhpAAhQg8QgUgQgTgSQgxgygVg9ADRDyQgEAEgFAEQgDADgDACAjUjuIAWgTQAYgSAagNQACgBACgBQAAAAABAAQABgBABAAIAegMQAKgEALgDAhnkvQAFgCAFgCQAGgBAFgCAkdiOQAVgtAlglQAHgHAIgHAkUieQAVgkAeggQAHgGAGgGAkeiNQACgDABgCAkeiNQABgBAAAAQAEgIAFgIAkzhXQAFgNAEgNQAGgOAGgOAgvE+QgHgBgIgBQhcgRhHhGQgXgXgRgZQgMgSgKgT");
	this.shape_19.setTransform(0.4,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ACskjQAUAMASAPQABABABABQANAKAMAMQAAABAAAAQAVAVARAWQAEAGADAFQAiAyAMA6AhQlIQAmgJAqAAQAAAAABAAQAJAAAJAAQBMAEA/AiQAHAEAHAEAATlRQAIABAJAAQBKAIA+AlAFNgYQgFhFghg7QgXgpglgkQg9g9hOgWQgugOgzAAQhXAAhHAmQgqAWglAkQgjAigXAnQAXgqAkgjQBihjCLAAQCKAABiBjQBPBPAQBpQACANAAANQABAOAAANIAAABQAAARgBARQgCAUgEASQgBADAAADQgBAFgCAFQACgIACgIAETjEQAgAtAPAyQADAMADAMQAIAkAAAmQAAABAAAAQAAAIAAAJQAAAJgBAJQgDAdgIAbQAAABgBACQgEAOgFAOQgGAPgHAPQgCAEgCADQgBACgBADQgEAGgEAGQAGgJAEgIQACgDACgDQgCADgBADQgCACgBADQgXApgjAkQgNANgOALQgOAMgPAKQhAArhOAIQgBAAgCAAQgBAAAAABQgCAAgCAAQgBAAgBAAQgDAAgEABQgDAAgEAAQgIAAgHAAQgCAAgCAAQgbAAgagEQgEgBgEAAQhhgShLhKQgGgHgFgGQgRgSgOgUQgIgMgIgNQgEgJgEgIQgghCAAhOQAAgBAAAAQAAgsAKgoQABgFABgFQAFgOAEgOQAHgPAGgPIABAAQABgCABgDQABgBABgCQAXgrAlglQANgNAOgMQANgLAPgKQAbgSAfgNQAHgCAHgDQAOgFAPgEAFGBSQgBADgBAEQAAACgBACQgEAOgFAOQgHAPgGAPQgCADgBADQgYAsglAmQgYAYgbATQgCABgDACAFQAPQgCAjgIAgAEMDJQAEgFAEgGQABgCACgCQACgEADgDQgBABgBACQgCACgBACAEcCzQABgDACgCAk2B2QAZA9AzAyQAZAYAaASQBSA4BnAAQAiAAAggFQBigRBJhIQAPgQAOgQQgOASgRAQQhOBPhpAQQgaADgcAAQhuAAhVg/QgVgQgUgUQg0g0gWhAgAgDgCQAAgCABgBQAFAIgCAAQgBAAgCgCQgBgBAAgCgAhtk/QAGgCAGgCQAIgCAJgDAksiVQAXgvAmgoQAOgOAQgMAlFhRQgEAPgCAPQgBAMgBAMQAAAMAAAMQAAABAAAAQAAAgAGAfQAGAdALAcAknClQgCgEgCgEQgCgFgCgEAg5FOQgGgBgGgBQhfgThIhIQgGgHgGgG");
	this.shape_20.setTransform(0.4,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABHlbQAxAJAsAXQABABABAAQAsAYAnAmQAAABABAAQAWAXASAYQADAFAEAFQAiA0AOA9AAUlhQAaABAZAFAAUlhQAJAAAJABQARABAQAEAjrkFQAGgGAGgFQA4gvBBgUQAxgPA1AAQAAAAABAAQAJAAAKABAFdggQgHhFggg6QgYgsgmglQhBhAhSgYQgwgOg1AAQhcgBhLAoQgsAYgmAlQglAkgYApQAYgrAlgmQBnhnCSAAQCRAABnBnQBTBTAQBuQACALAAAKQACASAAARQAAACAAABQAAApgJAmQgBAGgCAGQgEAPgFAOQgHAQgHAQQgBABAAABQgJAPgKAPQgCADgBACIgGAJAEijMQAgAuAQA1QAEAMADAMQAIAmAAAoQAAABAAAAQAAAFAAAGQAAAGgBAHQAAAGgBAGQAAAFgBAEQgCAPgCAOIgEAPQgBAFgBAEQgFAPgFAOQgHARgHAQIgBACIghAxIgBADIgMARQgKALgKAKQgHAHgHAHQgHAGgHAGQgOAMgOAJIgMAEIgLADIh3AlQALgBAKgCQA0gJAugZQAsgXAlglQARgRAOgSQACgDADgCQgDAEgDAEQgPARgQARQghAhgkAWQg5AihCAKQgQACgPACIgVAGQgBAAgCAAQgBAAgBAAQgBAAAAAAQgCAAgCAAQgdgBgbgEQgEgBgEAAQhngThNhOQgagZgTgcQgRgagMgbQgehCAAhNQAAAAAAgBQAAgzAOgvQAFgOAEgPQAHgQAHgPIAAgBQACgCABgDQABgCABgBQAYgtAngnQAGgGAGgGAFWBXQgBAEgBAFQABgGABgFAFgAWQAAALgCAKAElDDQANgSAKgTAgDgCQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgBAAgCgADrEIQgTARgUAOQgCABgBABAAbFdQgNAAgNAAQh0AAhZhCQgXgRgUgUQg3g3gXhEQAaBBA2A1QAaAZAbATQBWA6BtABQAZAAAXgDgAENDlQgKALgKALQgHAHgHAGAlShgQgFARgDARQgCAOgBAPQgBAPAAAPQABABgBAAQABAhAGAgQAHAfALAdAk7idQAYgxApgpQAHgHAIgHAg8FeQgGgBgGgBQhkgUhLhMQgqgpgZgvQgEgJgEgJ");
	this.shape_21.setTransform(0.4,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ACxlHIAoAaQAXARAUAVQABAAAAAAIAsA0QADAEACAEQAiAyAOA7IALBbQAAABAAAAQAAAGAAAHIgBAPQAAAJgBAJIgIAtQgCAGgBAGQABgGABgGQgBAGgCAHQgFAPgFAPQgGANgFAMIgBACQgBADgBAEQgBAAAAABQgBABAAABQAAAAgBABQAAABgBABIgBACQACgFADgEQgBABAAABQgCADgCAEQgIANgIAMIgMARAj6kPIAKgJQA8g1BJgWQADgBADgBIAGgBQAGgBAFgCQApgJArAAQAAAAABAAIATAAQBUAEBGAmQABAAACABAAUlyQAKAAAJABQBLAHA/AjAFtglQgIhGghg8QgZgugognQhEhDhVgZQgzgPg4AAQhgAAhOAqQguAYgoAoQgoAngaAtAExjTQAhAvAQA2QACAIACAIAlCiyQAZgqAkglQBshsCZAAQCXAABsBsQBXBXARBzQABAJABAJAFwAaQAAAFgBAFQAAAEAAAEAFnBZQgCAGgBAGQgFAPgFAQQgGAMgGANAFmBZIAJhVIgCgpAEmDdIgBACQgPASgRARQgmAmgsAZQg3AfhAAKQgFAAgFABIgXAIQgBgBgBABQgMAAgNAAQgCAAgCAAQgDAAgCAAQgEAAgDAAIgtgEQgFgBgGgBQhrgUhRhRQgbgbgUgdQgBgCgCgCIgTggQgnhMgBhcQAAgBAAAAQAAg2AOgxQgEARgDASIgDAfQgBAPAAAQQAAABAAAAQABAjAGAiQAGAgAMAfQAcBDA4A4QAbAaAdAUQBZA9ByAAQAmAAAjgGQACAAACAAIgdAJQgYADgaAAQh5AAhdhGQgYgRgVgWQg5g5gZhGAEmDdQACgCACgDQgDADgCAEIgNASQgJALgLAKQgOAPgPAMQgEADgDADIgMAJQgDACgFADQgEAEgGADIgPAFIgQAFQA2gZAtgtQARgRAPgSgAFNCfQgBADgBADAFGCuIggAvAgDgCQAAgCABgBQAFAHgCAAQgBAAgCgBQgBgBAAgCgABPFiQAsgJAogTgAEYDxQgJALgLALQgRARgTAPADUEwQgIAGgKAGAlKikQAZgzArgsQAGgGAGgGAlCiyQAZgtAlgmQAFgFAFgFAlKikQAEgHAEgHAlKikQAAAAAAAAAlKikQACgCABgDQADgFACgEAljhkQAGgPAEgPQAIgRAHgRAg9FvQgIgBgHgCQhogVhQhPQgcgdgWgf");
	this.shape_22.setTransform(0.4,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AC8lUQAtAaAnAnQAAAAABABQAbAbAVAfQACACABACQAbAoAPAsQACAHACAGQABAEACAEQADANADANQAAABAAABQAHAlAAAnQAAABAAAAQAAAIAAAJQgBAKgBAKQAAAFgBAGQgCAXgGAWQgBAHgCAHQABgFABgGQgBAGgCAGQgFAQgFAQQgIASgIARQgHANgIANQAHgKAFgKQACgDACgDQgbA3gvAvQgHAHgIAHAg5l/QAdgEAdAAQAVAAATACQBQAHBDAmAg5l/QAcgEAdAAQBkAABSAsQADACADABAF/gbQgHhQglhEQgagvgqgqQhHhGhZgaQg1gPg7AAQhkgBhSAsQgwAagqApQgqApgaAvQAAgBABgBQAagwAqgpQBxhxCfAAQCfAABwBxQBbBaASB4QACAPABAQQABAQAAAPQAAADAAACQgBAsgJApAFuiAQAEALADAKAGAAjQAAABAAABQAAAFgBAEAF3BbQgBAHgCAIQgGAQgFAQQgIARgHASQgCADgCADQgaAzgsAsQgIAIgHAHQgIAHgHAGIgYATQgGADgFAEQg2Ajg/APQgCAAgBABQgqAJgtAAQgBAAgCAAQglAAgigGQgCAAgBgBQgBAAgBAAQhugWhThTQAAgBgBgBQgBgBgCgBQAAgBgBgBQgLgLgKgNQgMgOgKgOQgKgOgIgPQgEgIgFgIQgGgMgFgMQgbhDAAhOQAAgBAAAAQAAg5APgzQAFgPAFgQQAIgSAHgRIAAAAQAag2AtgtQAIgJAJgHQALgLAMgKQApgfAsgTQARgIASgFQABAAACgBQAagIAcgEAFHDMIABgBQABgCABgCAFHDMQgCADgBACQgWAggdAdQhaBah4ASQgeAFggAAQh/gBhihIQgYgSgXgXQg7g8gahKQAcBHA7A6QAcAcAeAVQBfA/B3ABQAnAAAkgGQBwgUBUhUQAegdAXgigAgDgCQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgBAAgCgADaFBQgCABgCABQgEADgDACAlUizQAagyArgsQAHgHAHgGAlyhpQgEARgDARQgEAVgBAVQgBANAAANQAAABAAAAQABAlAHAjQAGAiANAfAlZirQACgDACgDAlZirQADgEACgEAlSC9QgDgFgCgFQgCgDgCgD");
	this.shape_23.setTransform(0.4,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ADXlXIBFA4QAAAAABABQAeAeAXAjIAnBLQAFANAEANQACAJADAKIAKA5QABAUABAVQAAABAAAAQAAAVgCAUIgGApQgDANgDANQgBADgBACQgBADgBAEIgDAIQgDAJgDAJQgCAEgBAEQgHAOgGAOQgBACgBACQgKARgKARQgFAGgEAHQAPgVANgXQABgBAAgCQABgCABgBQgcA5gwAxQgHAGgHAHIgOAMQgCACgCABQgDADgDACIgTAPQgCABgCABQhiBEh9AAQgCAAgBAAQgGAAgFAAQgBgBgBABQgCgBgBABQgCgBgCAAQgCAAgBAAIgugFQgDAAgDgBQgDAAgCgBAGOgsQgJhLgjg/QgcgygsgrQhJhJhdgbQg4gRg9AAQhoAAhWAuQgyAbgsArQgrAqgcAyQAAgBABgBQAcgyArgsQB1h2CnAAQClAAB2B2QBeBeATB+QABAIABAIgAiFl9QA/gXBHAAQAWAAAUACQBeAJBOAyAiFl9QAIgDAJgCQA3gRA9AAQBogBBWAvQAMAGANAIAF5iSQAIAVAGAYAGLBMIAFg3QAAgIABgJIgDgwAGIBdQgDAJgCAIQAFgRADgRQgCAJgBAIQgCAHgBAGQgBACgBADQgBADgBAEAGLBQQgCAHgBAGAF+B+QgCAIgDAKQgCAEgCAEQgHAPgGAOAgDgCQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgBAAgCgAiRFvQBFAaBPABQApAAAlgHQB1gVBYhXQAMgLALgMQgMANgMANQheBdh9ATQggAFghAAQg5AAg1gOQhDgTg5grQgCgBgBgBQgYgSgWgWQg/g/gbhMQAeBJA9A9QAdAdAhAWQAIAFAJAGQAbARAeAMgAFlC7QgcA2gtAtQgHAHgHAHAEAE4QgFAEgFAEAFJDnIgUAZAkKktIARgOQAggaAjgTIAxgVAlnizQAbg3AugwQAKgJAKgKAlji6QAbg1AtgtQAJgJAIgIAmChtQAFgRAFgQQAIgSAJgSIAAgBQABgDACgCAmChtQgFARgCASIgFAsQgBANAAAOQAAABAAAAQAAAmAHAlQAHAkANAhAloC3IgahBQgQg2AAg8QAAAAAAgBQAAg7AQg1AkpERIgNgPQgNgPgLgQIgXgkQgBgEgCgEAllC/QAAgCgBgCQgBgCgBgCAkFE1QgMgKgLgLQgHgHgGgIAkFE1QgLgKgLgLQgHgIgHgHAjsFBIgZgMAhtGBIgkgSAhIGPQgFgBgGgBIgagMAjKFSIgigR");
	this.shape_24.setTransform(0.4,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ADTltIAmAaQAYASAXAXQAAAAAAAAQARARAOASIAQAUQAFAGAEAGQAmA5AQBBAA0mhIAwAIQABAAABAAQABABABAAIBSAeQAGADAGADQAGAEAHADAh+mRQACgBADAAQA6gSA/AAQAUAAAUACQACAAADAAQADAAAEABAAomiQAGAAAGABAh+mRQA8gUBDAAQAUAAATADAGeguQgJhOglhCQgdg0gtgtQhNhMhhgdQg5gQhAAAQhtAAhZAvQg0AcguAtQgfAfgYAiQAYgkAgggQB6h7CuAAQCsAAB7B7QBiBiATCCQABAIABAJgAC6l6QANAGAMAHAFXjzQAoA3ATA/QACAIACAIIAKAzQADAbAAAcQAAABAAAAIgBAgQgDAsgMApQACgHABgHIALhhIgDgyAGiAeQAAAFgBAGQgDAngLAjQgFARgGASQgIATgJATQgCADgCAEQACgDACgEQgFALgGAKIgGAIIgtA6IgDADQgHAIgHAHQhhBiiDAUQghAFgiAAQhMgBhCgXQg2gUgwgjQgOgLgNgLQgMgLgMgMQhAhAgdhRQAfBNBABAQAZAZAbAUIgegSIgZgPQgBgBAAgBQgBAAgBgBQAAgBgBgBQgBgBgBAAQgBgBgBgBIgngvQgDgEgDgEQgDgFgCgEIgUghQgBgCAAgBIgRgmQgCgEgBgEQgBgBAAgBQgBgEgCgFQAAAAAAgBQgBgCAAgBQgBgBAAgBQgSg7AAhCQAAAAAAgBQAAg9AQg4QgFASgDASIgFAuQgBAOAAAPQAAABAAAAQABAoAHAnQAIAkANAiAGWBlQgCAHgBAIQgGARgFARQgJATgIATQgHAMgGALIgEAGAFEEGIAYgeQACgDACgCIAGgKAFzDDQgEAHgDAHAFqDTQAFgIAEgIAgDgCQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgBAAgCgAivFzQBRAnBhAAQAqAAAogHQB5gVBchbQAIgIAHgIQAGgHAFgGQgGAIgIAIIgPAUQgCACgBABIgaAYQgCABgCACIgWASQgKAGgJAHIhVAoQhAAWhIABIg9gEQgNgCgNgDQgPgDgOgEADwFaQgEACgEADQgGAEgFAEAkak0IANgMQA3gvBAgZIAYgJAl2i6QAcg6AwgxQAIgIAIgHAlujIQAcg0ArgsQAHgGAGgGAmShyQAFgRAGgRQAIgTAJgTQAAAAAAAAQACgFADgFQABgCACgCIAOgXAl2i6QACgDABgDIACgEAjwFNQAGAEAFAEQAaARAcANAg9GiQgLgCgJgBQgSgEgRgFIgZgOIgigVIhBgmAlWD1QgGgIgFgJ");
	this.shape_25.setTransform(0.4,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ADVl/IAwAfIAdAZQAJAIAJAJQAhAhAZAlQADAEADAEIAuBmQAAABAAABIANA4QAFAhAAAkQAAAAAAABIgBAhQgBAGAAAFQgEAogLAlQgCAGgCAGIgEAOQgCAFgCAFQgIAUgJAUQgCADgCAEQACgDACgEQgCADgBADQgBACgBACQgCADgCAEIgCACQAEgGADgGQgBABAAACQgDAFgDAEIg3BJQAagcAVggQgDAEgCAEQgUAegaAbIgNASIgdAbQgDACgCACQgWASgXAPAEilHQAJAIAIAJQAmAlAbApADFmIQAEACAFADQADACAEACACLmZIA6ARQAIAEAIAFABwmhQANAEAOAEQBcAfBLBLQBmBmAUCIQABAIABAIQgJhQgmhFQgeg2gvgvQhQhPhlgeQg8gRhCAAQhxAAhcAxQg3AdgvAvQgjAjgaAmQAagoAkgkQB/iAC0AAQA6AAA2AOgAAvmzQACAAACABQACAAACAAIA5ARAggm0QAQgBAQAAQAYAAAXACAggm0QARgBAQAAQAXAAAXACAGugxIADAyQAAABAAAAQAAABAAABQAAABAAABQAAACAAABQAAABAAABIgLBfQgBAHgCAHQgCAFgCAGAGbCRQgCAFgCAGQgJAUgIAUQgCACgBADQgDAFgDAGAGzAfQgEAugMAqQACgHABgGAFzDjIAIgNAgDgCQAAgCACgCQAEAIgCAAQgBAAgBgCQgCAAAAgCgADUF6QhBAlhMAMQgXADgYABQgLABgMAAQiPgBhuhRQgcgVgZgZQg/g/gfhMQgDgGAAgGQAAABAAABQAhBPBCBBQAfAfAiAYQBqBICHABQAWAAAWgCQAVgCAUgEQA8gLA2gbQA6geAxgxQAIgHAHgIIgEAFQgGAGgGAGQgtAtgzAdgAAvGpIgXAGIgYAHIhAgEQgNgCgNgDQh7gYhdheQgzgygfg7QgDgFgDgGIgFgaIgDgKIgdiHIgEgQIAAgBQAAhAARg5QgFASgDATIgFAwQgBAPAAAPQAAAAAAABQAAALABALQACAeAFAdQAIAnAOAjAEWFRQgSAPgTANQgGAEgHAFIgQAEIgKADIibAsAknk/IALgLQBJg/BVgaIBegRAmFjCQAeg8AygzQAHgHAHgHAmBjKQAeg5AxgxQAGgGAFgFAmFjCQACgDACgEQAAAAAAgBIAQgZAmih2QAGgSAGgSQAJgUAIgTIAAgBAhAGyQgKgBgKgCQh/gYhghgQgfgfgYgiQgSgbgOgc");
	this.shape_26.setTransform(0.4,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ADdmNQAcAPAaAVQACABACACQAVAQATAUQABAAAAAAQAeAfAYAhQADAEADAFQAEAGAEAHQAaAqAQAvQACAGACAGQABADAAADQARA8AABCQAAAAAAABQAAARgBARQAAAGgBAGQgEAqgLAmQgFAPgFAQQgBADgBADQgCAEgCAFAgenEQAQgBAOAAQB1gBBgA0QAEACAEADAG/gyQgKhUgohIQgfg4gxgwQhThThogeQg+gThFAAQh1AAhgA0Qg5AegxAxQgxAwgfA3AgenEQAQgCAPAAQAYAAAXADQBeAIBPAuAmQjQQAgg5AxgyQCEiEC7AAQC6AACECEQBqBqAVCNQABAJABAJQADAbAAAbIAAAAQAAA3gLAzQgCAHgCAIQgFAPgFAPQgBADgBAEQgCAEgCAEQAAABgBABIgHAPQgDAIgEAIQgDAGgDAFQAEgFADgGQggBAg3A3QgRARgSAPQgBABgBABQgLAJgMAIQgEADgEADQgEADgFADQgsAdgyARQgIADgIACQg+AThFAAQgiAAgggEQgOgDgOgCQh/gahhhhQgjgigZgmQgFgHgEgHQgHgLgHgMQgBgCgBgCQgIgQgGgPQgihRAAheQAAAAAAgBQAAhCARg8QAGgSAGgTQAJgVAJgUIABAAQAeg/A0g1QAJgJAJgIQAIgHAHgGQBHg+BXgaQAGgCAGgBQArgMAtgCAF2kCQAHAKAHAMAGuiTQADAJACAJAGbC7QgDAIgDAIAHDAgQgDAwgNAsQACgHACgHAGADvIAIgOQADgFADgGAgDgCQAAgCACgCQAEAIgCAAQgBAAgBgCQgCAAAAgCgAGADvQgCACgCADQgaAmgiAiQhqBqiMAVQgkAFglAAQiVAAhyhVQgdgVgagbQhGhGgfhWQAhBUBGBEQAgAgAkAZQBuBLCMAAQAtAAArgHQCDgYBjhiQAkgkAbgngAECF1QgIAGgJAGAmyh7QgFATgDAUQgEAZgCAZQAAAPAAAQQAAAAAAABQAAArAIAqQAIAnAOAlAmQjQQAfg8A0g0QAHgHAHgHAmTjJQACgEABgDAmTjJQACgDABgEQAAAAAAAAAhCHDQgLgCgLgCQiDgYhkhkQgggggYgkQgCgCgBgC");
	this.shape_27.setTransform(0.4,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ADqmaIAYAPQAmAaAjAjQAAAAAAAAIA7BHQACACACADQAqBAATBJAginVQARgBARAAQB6gBBjA2QAHAEAGADAG7iRQgNgjgSgiQggg6gzgyQhWhWhsggQhBgThHAAQh6AAhjA2Qg7AfgyAzQgzAyghA5QACgDACgEQAgg3AwgxQCJiJDCAAQDAAACJCJQBRBSAhBkIASBKQAAABAAABIADAcQABAKABAKQAAAJAAAJQAAACAAABQAAAAAAABQAAABAAACQAAARgBAQIgJBHAginVQASgCARAAQAZAAAYADQBkAJBUAxAGGkHQAoA6ATBBQADAKADAJIALA8QADAcAAAdQAAABAAAAIgBAkQgBAGAAAGQgEAqgLAmQgBACAAABQgBAEgBADIgBACQgEALgDAMIgBABQgBADgBAEQgJAVgKAVQgBADgBACQggBAg3A3IgbAZQgFAEgFAEQgCACgCACIgWAQQgEADgDADQgDACgEACIgfAOQghARgjAMIgqATQg2AMg6ABIhFgFQgLgBgLgCQgMgDgLgCAHEB9QgBACAAACQgBADgBADAG4ChQgBADgBADQgJAVgKAWQgBADgBACQgBACgCADQADgFACgFAHGB2QgBADgBAEAHGB2QgCAFgBAFQACgKADgKQgBAFgBAFgAHUAhQgEAsgKApAgDgDQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgBAAgCgACaG4QgmANgoAGQgkAFgnAAQhKAAhDgUQhHgWg9gtQgRgNgQgPQgMgLgLgLQhJhIgghaQAiBXBIBHQAVAVAWARQAOALAOAKQArAdAwASQBOAeBaAAQAvAAAsgHQCIgYBnhmQAHgIAHgHIAlgtIAHgKQAFgGAEgHQgDAFgEAFQgBABgBACAFbE3QgIAJgIAIQgzAzg6AgAELGDQgHAFgHAFAEvFnQgHAGgHAGAGQDzIAOgXAmjjQQABgBAAAAQADgHAEgHQAQgcATgbIArgzQABAAAAgBIADgCQBRhQBigiQAHgCAIgDIBlgSAnCiAQAHgTAGgTQAJgVAJgVQADgEABgEAnCiAQgFAUgDAUIgGA0QgBAQAAAQQAAABAAAAQAAAtAJAsQAIApAPAmAmijRQARgkAZghAkcFpIgVgMIgZgPQgBAAgBgBIgsgzQgHgJgGgIQgSgagNgbIgRgmQgCgFgBgEQgDgIgDgJQgEgLgDgMQAAgCgBgCQgOg4AAg9IAAgBQAAhFASg+AhFHTQgOgCgOgDQgJgCgIgBIgagPIgZgPIh3hEAl4EaQgYgfgRghQgCgDgBgD");
	this.shape_28.setTransform(0.4,0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ADymoIAaAQQAnAbAkAjQAAABAAAAIAyA6QAIAKAHAKQACADACAEIA0BwQABACAAABQAIAbAFAdQAHApAAAsQAAABAAAAIgBAmQAAAGgBAGQgEArgLAnQgBACAAACQgHAUgGAUQgEAIgDAHIgIATQgCAFgDAGQgiBFg7A7IgSARQgJAJgKAIQgFAEgEADIgaAUQh2BRiXAAIhNgFQgMgCgMgCQgGgCgGgBIhUgcQgDgBgDgCQgCAAgCgBQgBgBgBAAIh2hRQgHgIgIgHQgjgjgagmQgUgdgPgfIgZg/QgVhFAAhOQAAAAAAgBQAAhHAShAQAHgUAGgUQAKgWAJgWIABAAQACgDABgEIABAAQAIgPAJgPAgknmQATgBARAAQB+AABnA4QAGADAHAEAgknmQATgBASAAQAaAAAZACQBnAKBXAzAHgg2QgLhagrhOQghg8g1g0QhZhYhwghQhCgUhKAAQh+AAhnA3Qg9Ahg0A0QgoAngdArQAdgtAogoQCOiODJAAQDHAACOCOQByByAWCXQACAJABAKgAGJkfQAKANAJAOAHbBjIAHhBQABgOAAgQIgDg6AHWB4QgBAGgCAGQAEgQAEgRQgCALgDAKQgBAFgBAEQgBACAAACQgHAUgGAUQgEAIgDAHAG3DPQgDAFgCAGQgEAHgEAHQAEgHAEgHAHkAjQgDAsgLApAGcD/QgCAEgDADQgbApglAkQhxByiXAXQgmAFgoAAQigAAh6hbQgfgXgcgcQhLhLgihdQAkBaBKBJQAjAjAnAbQB1BQCXABQAxAAAtgJQCNgZBqhqQAngnAdgrIAOgXAgDgDQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgBAAgCgAFDFrQgOANgOALAnSiEQgFAVgEAVIgGBAQAAALAAALQAAABAAAAQAAAvAJAtQAIArAPAnAlGlmIAPgOQBJg+BWgdQAGgCAGgCIBogTAmujfQAihBA3g4QAIgHAHgHAmxjYQAhhDA3g5QAKgJAJgJAlHFqQgHgIgIgHQg4g4gihCQgDgGgDgFAhNHjQgJgBgIgCQgKgCgJgC");
	this.shape_29.setTransform(0.4,0.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiDnnIAYgFQA0gMA3AAQABAAAAAAQAbAAAaADQBjAJBUAuQA/AiA2A2QABAAAAABQAZAZAUAaQAMAPAKAPIA1BqQADAKADALQADAIACAJIAIA9QAAACABACQgNhXgphLQgjg/g2g2Qhchbh0giQhFgUhMAAQh0gBhiAuQgLAGgMAGQgvAZgrAlQgOAMgNANQgUAUgRAUQgGAIgHAIQANgRANgQIAXgcQACgCACgCIAOgJIAKgHIBxhKIATgMQBagmBpAAQDPAACTCTQB1B1AXCcQABADAAACAHbiqQAGATAFATAHvhDQAAAGABAFIAGA1IAAAAQAAADAAAEIAAAWQgBAMgCALQgBANgBAMIgLA2QgCAFgBAFQgHAUgHAVQgEAJgDAJIgJATQgCAFgCAEQgjBHg9A9QgJAJgJAJIgSAQQgTAQgUANQgEADgEADIgRAFIgIACQA7ghA0gzQAKgKAJgJQgKALgKAKQgwAwg2AgQhPAuhcAOQgbAEgcACQgNAAgNAAQilAAh/heQgggYgdgdQhNhOgjhfQAlBdBNBMQAkAkAnAbQB6BTCbABQAWAAAWgCIgTAGIgbAIQgDAAgDAAQgCAAgBAAIhOgHQgJgCgIgBQgHgCgGgBIgngKQhugkhYhYQAAAAgBgBQgBgBgBgBQgBgBAAAAIg2hAQgUgcgPgdQgEgHgDgIIgHgOQgohcAAhsIAAAAQAAhKAThDQAHgUAHgVQAKgXAKgWIAAgBQACgDACgEQAAgBAAAAQAJgQAJgQIATgXIACgEAHwg4IADA8QAAADAAACQAAABAAABQAAABAAACIgNBtAH2AaQgCAZgDAXAHmCAQgCAFgBAEQACgHABgHQgCAHgCAIQgGAVgHAVQgEAIgDAJAHFDYQgCAEgCAFQgCADgCAEQACgDACgEAG9DoIgUAiQgCACgCADQgBABAAABIgtA5AgDgDQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgBAAgCgAE9GHQgCABgBABQgVASgXAPAG9DoQgiBDg6A6QgJAJgJAJAAuHrQAcgCAbgFQBNgOBDglgAnAjgQAKgUAMgUAjEnKIAXgPQAOgFAOgFQAHgCAHgCAitnZQAVgIAVgGAl7lEQAMgNANgMQAIgJAIgHQBBg8BNghAmXkfIAPgUIANgRAm8joIAlg3AniiJQgQA/AABGIAAABQAAAxAJAuQAJAsAQApAmcEiQgCgEgDgDQgVgfgQgiAhXHyQgFgBgGgBQgKgCgJgC");
	this.shape_30.setTransform(0.4,0.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiHn3IAkgIQAwgJAzAAQABAAAAAAIAwACQADAAADAAQAGABAFAAICcAsIARAJQADACADABQACABABABIB2BaQABAAAAAAIBCBQQABACACACIA6B4QACAFABAGQACAFACAGIAFAsQACAKACALQABAKABAKQgCgPgCgQQgPhPgmhFQgjhAg4g4Qhfhfh4gjQhHgVhPAAQh6AAhmAwQgLAFgKAGQgeAQgdAWIBQgxIAWgNQBdgoBtAAQDWAACXCYQBxBxAdCVIACAKIAFAoIgBgJAAxoGQAIAAAJABADvnQQAFADAEACAHuilQAEALADALAIBgxIAGAuIAAAAQAAADAAAEIgCAjQgBAGAAAFQgBAJgBAKIgKA0IgCALQgCAFgBAFQgHAWgHAVQgLAYgKAXQgCAEgCADQACgDACgDQglBJg+A/QgJAJgIAIAIFAnQgBAPgCAPAH3B9QgCAJgDAJQgGAVgIAWQgKAXgLAYQgHANgIAOQAHgKAFgLQgkBGg7A8QgJAIgIAJIgRAPQgEADgDACQgZAVgaARIgWAHIgLAEQBEgkA8g7QATgTARgUQgRAVgUAUQg2A2g+AjQhNArhZAOQgFAAgFABQgkAFgmAAQirAAiChiQghgYgfgeQhQhRgkhiQAmBgBQBPQAlAlApAcQB+BWCgABQAwAAAugIIgVAHIggALQgFAAgEAAQgDAAgCABQgPAAgOAAIhTgFQgMgCgNgDQgKgCgKgCIiGg3IhPg6QgMgMgMgMQgIgHgHgIIgnguQgGgIgGgJQAAgBgBAAIgegzQgBgBgBgCIgKgUQgrhhgBhzQAAgBAAAAQAAhMAUhFQAHgVAHgWQALgXAKgYQACgEACgEQAHgLAGgLAH2CEQgCAFgBAFQACgIACgJIANh4IgDg2AHAEEIgsA9AgDgDQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgBAAgCgAFLGRQgWASgWAPQgHAFgHAFABgH2QAEgBAEAAQBIgNBAghgAjLnZIAcgRQAUgHAUgGAivnqQANgFANgEQAHgCAHgCAlgl8IANgLIASgLQA4gtA+gaAmKlLIALgRQAKgKAJgJQAGgGAGgHAmQlCIAGgJQANgPAPgPQAWgWAXgTIAQgJQggAXgeAeQgSARgPATgAl/lcQAHgIAIgHQAIgJAIgIAnPjnIA/hbQgaAegUAfQAXglAdghAlVGKQgNgMgMgMQgHgHgHgIAnyiNQgRBBAABIIAAABQABAzAJAvQAJAuAQAqAhTIEQgJgCgJgCQgOgCgNgD");
	this.shape_31.setTransform(0.4,0.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AmPlfIATgYQACgCACgDQBkhhB6gmQBJgWBRAAQABAAAAAAIArABQAGABAHAAQBvALBdA1IB1BaQAAAAAAAAQAnAnAdArQACACABACIA6B2QADAJADAJQADAJACAJIAHA2IACARIAIBDIAAAAQAAAFAAAGIgBAcQgBAIgBAIQAAAFgBAGIgLA/QgCAGgBAFQgBADAAACQgBACgBADQgCAGgCAGIgFASQgDAHgCAIQgDAGgCAGAH4ipQgOgngUglQglhDg6g5Qhihih7gkQhKgWhRAAQiLAAhxA9QhDAkg6A6QgQAPgNAQIAIgMQAKgLALgLQCcicDdAAQDcAACdCcQBbBbAlBxIAVBSQAAADABADQAAADABACIAAAGIAFBLQAAAHAAAHQAAABAAABQAAABAAABQAAADAAACQAAABAAABIgMBeQgCAHgBAGQgBAFgCAEQADgLADgLAAsoYQBxAJBgAzQAEADAEACAH7ixQAGASAFASAIWAkQgBANgCAOAH5CxQgCAHgDAHQgDAGgCAHIgJAUQgEAIgEAIQgBACgBACQgBABAAACQABgDACgDQglBLhBBBQgGAHgHAGIgVATQgEADgDADQgFAEgFAEIgdAVQiCBaimAAQgEAAgDAAIhQgGQgMgCgMgCQgJgCgIgCAIIB+QgCAIgCAIQgBADgBACQgCAGgCAGAHcD0QgNAXgOAWQgFAGgEAHQATgbAQgcQglBIg+A+QgGAGgHAHAHmDgQgEAIgEAIQAAAAAAABQgBABgBACAgDgDQAAgCACgBQAEAHgCAAQgBAAgBgBQgCgBAAgCgAFWGdQgIAHgJAHAi8HsQBZAiBlAAQA3AAAygJQCbgcB1h1QALgKAKgLQgLALgLAMQh9B9imAZQgqAGgsAAQhWAAhNgYQhQgZhEgzQgFgEgFgEQgcgWgbgbQhThSgohlIgahOQgBgCAAgBQAAgBAAgBQgJgxAAg1IAAgBQAAhPAUhHQAIgWAHgWQALgYAKgYIAAgBQACgDACgEQAAAAABgBAG4EuIgoAxAnMkNIAFgHQgJAOgJAPQAGgLAHgLQAagrAjgnAnRkHIAFgGAnejvQAGgMAHgMAnaj2QAFgJAEgIAmXlTQgbAegVAhAlAGmIgigSQgBgBgBAAQgEgFgFgEQgFgFgFgFQgBgBgBgBQgCgCgCgCQgBAAAAgBQgBgBgCgBQAAgBgBgBQgJgJgJgKIgmgwQgBgDgCgBIgZgoQgDgHgEgHQgCgEgCgEAkqGyQADACACABQAyAiA3AVAoCiSQgRBEAABKIAAABQAAA0AKAyQAdCaB2B1QAlAkAnAcIgWgMAnWEGQgGgLgFgLIgRgyAhXIUQgIgCgJgBQgMgDgMgCIgigSIgagOIhug6");
	this.shape_32.setTransform(0.4,0.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiPoXIAPgEQA+gOBCgBQABAAAAAAIAsACQAHAAAHABQB5ALBlA+AIahpQgQhOgmhGQglhEg8g8QhlhliAglQhLgWhUAAQhtAAhdAjIANgIIAXgOQAEgBAEgCQAIgCAIgCAAtooQB1AIBiA2QALAGAKAGIA8ApIAfAbQAJAIAJAJQAIAIAHAIAF0maQAJAJAJAIQAHAIAIAIIAXAaQATAXAQAYIA/CDQABAEACAFQABAEABAEIAGAtQADAOACANQABAJABAIQgCgTgEgTIAHA0IgBgOAIOitQADAIACAJAIZhvIABAGAi+oCQBYggBlAAQDjAAChCiQB3B3AfCaAIhg1IAHAxIAAABQAAAHAAAHQgBABABABIgCAfQgBAFAAAEQgBAGAAAGIgKA7QgCAIgCAIQgCAFgCAGQAFgSAEgTIAJhQQABgOAAgPgAImAsQgBALgBAKAIUCTQgBADgBABQgBAEgBADIgGAUQgDAKgDAJQgMAZgLAZQAAACgBABQgBABAAABQgBACAAABQgBABgBABIAAABQACgFADgGAIUCTQgBADgBACQgBADgBADAIWCMQgCAEAAADAIaB8QgDAMgDALAIKCyQgEAKgDAJQgLAZgLAZQgEAIgEAGIhABbQAEgEADgFIAbgiQASgZAPgaIgDADQgKATgMARQgEAGgEAGAIbByQgCANgDANAGlFgQAAAAgBABIgRAYQgHAIgIAHQgKAKgJAJAgDgDQAAgCACgCQAEAIgCAAQgBAAgBgBQgCgBAAgCgAGTF5QgHAIgIAIQgKAJgJAJIgTARQgDACgCACQgMAJgLAJIgMAJQgCABgDACQgCACgDACIiKBBQgGACgFACQhIAUhPAAQgCAAgCAAIhPgGQgQgCgQgDQgJgCgJgCAE2HLQgFADgFAEAi8H+QBZAgBlAAQA4AAA0gJQCggdB5h5QAQgPAOgQAGkFhQgOAQgQARQiBCAirAaQgrAGguAAQhYAAhPgYQhTgahHg1QgKgIgLgJQgXgTgXgXQhKhKgohYIgDgKIgri+IgEgRQAAgBAAAAQAAhRAVhKQgSBGAABNIAAABQAAAMABANQACApAIAnQAJAwARAtQAEAIADAJQApBcBNBNQAfAfAhAZIgTgLIgggRQgBgBgBgBQgFgEgFgFQgCgCgCgDQgngngegrIgfgzQgDgGgDgGAinoQQAMgEAMgDAmflkIAHgJIAQgWQACgCADgCIANgJQBUhOBkgkAmflkQghAlgZAoQgIAMgHANQAGgLAHgLQAcgvAngqQAJgKAJgJQAIgIAIgIIAHgEICkhmQgeAMgcAPQg4AfgyAsQgMALgLALQgNANgMANgAnbkUIACgDAnfkPIAEgFAnsj2QACgEABgDQABgBAAAAQAEgJAFgIAoSiXQAIgWAHgXQALgYALgaIABAAQAGgNAHgMAlCG1QAKAHAKAHQA2AlA8AWAn1DeQgGgNgEgOAnpEEQgBgCgCgDQgCgDgBgEIgGgaAhTIlQgMgCgNgCQgMgCgNgDIghgSIgWgMIiGhJ");
	this.shape_33.setTransform(0.4,0.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiVonIAtgKQAzgJA1AAQABAAAAAAIAtABQAIABAHAAQAEABADAAIA9ATQApAJAmAPIA9ATQAAAAABABICEBjQAAAAAAABIBLBbQAAAAABAAQAxBKAWBVIAIA4QAAABAAABQgQhYgqhNQgmhGg+g9QhohoiEgnQhOgXhWAAQh1AAhkAoIAOgIIAYgQQAIgCAIgDQAIgCAHgCgAAuo5QALABALABAjMoOQBegkBtAAQBEAAA+AOAHdk5QAtBDAXBNQACAIACAHAIuhaQAAACABACQAAADAAADQAAgFgBgFIgBgGIADAYIgBgIADQoMQBpAqBWBWQCACBAeCpAI3AuQgBAEAAAFQgBAGAAAFIgLA+QgCAIgDAJQAAADgBAEQgBACAAACQgIAYgIAXQgLAagMAaQgBADgBACAI3AuQgBAKgBAKAIwhIIAJBEIAAABQAAAJgBALIgBAdAIwhIIAFBNQAAAPgBAOQAAACAAADIgMBdAIkCYQgBACAAACQgIAXgIAYQgLAagMAaQgBABAAABQgBABAAACQgBAAAAABQABgCABgCAIlCRQgBAFgBAFQACgLADgMQgBAHgCAGgAIqCAQgDAMgDAMAH5EFQgDAFgDAGIg2BNAEJHyQBKgnBAhAQAQgQAOgQIgBACQgOAQgQAQQg8A7hEAnIgJADIigA1QAEgBAEgBQBRgOBHglgAGwFtIgQAXQgIAIgJAJQgFAFgGAGIgWAUQgZAWgaASQgIAFgHAFIgaAJQhUAuhhAPQgEABgEABQgpAFgrAAQhvAAhfgmAH5EFIhIBmQAGgHAGgHQgGAIgHAIAgDgDQAAgCACgCQAEAIgCAAQgBAAgBgBQgCgBAAgCgAFuG0QgFAFgFAEQgcAXgcASAGgGEQgIAIgJAIQgFAGgGAGABVIuIgmAMQgCAAgDAAQgFAAgFABQgQAAgQAAQgCAAgCAAIhRgFQgNgCgNgDQgSgDgTgFAoODJQAqBpBXBXQApApAsAeQCKBfCwAAQA1AAAygIIgUAHAi0oeQAQgEAPgFAoiibQAIgXAIgYQALgaAMgZQACgFACgEQAUgjAZghAn7j9QAmhPBBhCQADgDACgCIAQgKQBRhMBiglAjaoGQgaALgZAOQg4AegzAtQgNAMgNANQgeAegaAhQAZgiAgggQAJgJAJgIIAHgFgAkWHqQgagPgZgTQgkgagigiQhXhYgohrAmBGlQgIgIgIgIQgJgJgJgKIgxg8QgCgDgCgDIgfgxQgEgJgFgJIgFgLQgyhtgBiAIAAgBQAAhUAWhLQgSBIAABPIAAABQABA3AJA1QAKAyASAuAmBGlQgIgIgIgIQgJgJgJgKAkWHqIg5gcIgygpAn3EPQgCgEgCgEQgCgFgDgFAhVI2QgRgDgQgDQgPgDgPgEIg5gcQgmgPgjgU");
	this.shape_34.setTransform(0.4,0.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiAo9ICAgOQABAAAAAAQANAAANABIAcABQAEABADAAQB7ALBnA7AI8hrQgRhWgphLQgohJg/g/QhshriHgoQhQgYhZAAQiDAAhvAyQgRAIgRAJQg5Afg0AuQgOAMgOAOQgOAPgOAOQgiAngaAqIA8hRIAIgKIASgYQADgDACgCIARgLIAIgFICPheIAPgKIAagQQARgHAQgFQAUgGAVgEAA3pJQB4AKBmA3QAFADAGADIB9BiQAAAAABAAIBHBVQADAEAEAFQAxBKAXBUIAHAyQACANACANQACALABAMQgDgWgDgUIAGA0IAAgKAHllLQAzBJAZBUQABAFACAFAI7hyIABAHAjkoXQBogsB7AAQDxAACrCsQB/B/AhCmAJCg3IAHAzIAAABQAAAJAAALIgCAeQgBAFAAAFQAAAEgBAEIgDAYQgFAlgKAiQADgNADgNQgEANgDAOQgCAHgCAHIgIAYQgCAFgBAFQgCADgCAEAJCg3IAEA8QAAACAAADQgBABABABQgBABABACQgBABABABIgNB1AJHAvQgBAJgBAJAIzCgQgDAHgCAIAImDHQgCAFgBAFQgCADgCAEIgBACQgKAWgJAXQgDAFgDAFQADgGADgFQgpBThHBHIgiAgQgGAFgFAFQgdAYgfAUAG0GBIA3hGQALgQAJgQIAGgKAEVH+QBKgoA/g/QALgLALgLQgLAMgLALQg9A8hEAoQhYAxhmAQQgeAEggABQgQABgQAAQjBAAiThtQglgcgigiQhEhEgohQQAqBOBDBDQAqAqAuAfQCOBhC1ABQAYAAAWgCQAjgCAigGQBVgQBLgoIjlBAIgPAEIgiAKQgCAAgEAAQgHAAgHAAQgGAAgFgBQgCAAgBAAQgEAAgEAAQgDgBgEAAQgDAAgEAAIg1gIQgCAAgCAAQgCgBgCAAIgEgBQilggh+h/IhAhLQgFgGgEgGQgFgIgFgHIgagsQg+h4AAiSIAAgBQAAhWAWhNQAIgYAIgYQAMgbAMgaIAAgBQACgEACgDQAAgBABgBQAEgJAFgIIAEgGIACgCQgEAHgFAHQgDAFgDAGAIeDaQgJAWgKAWAgDgDQAAgCACgCQAEAIgCAAQgBAAgBgBQgCgBAAgCgAF5HAQgaAXgbATQgJAGgJAGIgVAGIgIACAjKonQAkgOAmgIAmymCQAKgLALgKQAJgKAKgJQBMhGBagnAoKkFQAHgNAHgNAn4klQAegxAogsAn/kZQAEgGADgGAoyifQgTBJAABSIAAABQABA5AKA2QAKAzATAwQAKAbANAaAndFWQgKgNgJgO");
	this.shape_35.setTransform(0.4,1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("Am7mQIAQgWQACgCADgDQBuhvCLgpQADAAACgBICogYQABAAAAAAQAgAAAfADQB2ALBjA2QACABACAAQABABACABQBJApBAA/QAAABABAAIBNBeQABABACACQA1BQAYBdIAHA8QABAEAAADQADAUACAUIAGAvIgDA6QAAACAAACQgBACAAABQAAACAAABIgOBPQgCAGgBAFQgBAEgBADQAAACgBACQgBAEgBAEIgBACQgFAPgFAOIAAADQgCAEgBADQgCAFgCAFAJPhYQgPhlgwhXQgphLhBhBQhuhuiLgpQhTgYhbAAQidAAh/BEQhLAphBBBQgOAOgNAPIAJgMQAJgKAJgJQCviwD5AAQD4AACwCwQCKCLAdC2gAH3lOQAxBIAZBTQADAKADALAJTg4QgBgQgDgQAJTg4IABAFQAAAHABAHQgBgJgBgKgAJLCAIAKhQQABgVAAgWIgBgqAJDChQAAACgBACQgBAEgBAEAJFCaQgBAFgCAFQAFgRAEgTQgDANgDANgAJICPQgCAJgDAJAI1DPQgCAEgBAEQgCAFgCAEIgEAKQgEAJgEAIIgEAKQgCAEgCAFQgCADgBADQgEAHgEAGQAFgJAGgLAIeEFQgCAEgCAEQgCAEgBADQgqBShGBGIgjAhQgGAFgGAFQgcAXgeATIgcALIgLADQBPgpBFhEQAHgHAHgHQgIAIgHAIQhAA/hIApQhOArhZARQgNADgMACQgvAHgyAAQhUAAhMgVQhmgbhYhBQgNgKgNgLQgYgUgXgXQhdhcgqhzQAsBwBcBdQAeAdAgAZIgQgJIghgRQgIgIgJgIQgrgrgggvQgXghgSgkIgviKQAAgBgBgCQgMg7AAhBIAAgBQAAhYAXhQQAJgZAIgZQAMgbAMgbIAAgBQAHgNAHgNIAEgFIACgCQgEAHgEAGQADgGADgFQAgg1AsgvAIAE5QgEAGgEAFQgFAJgGAIQAKgNAJgPIAPgYAHtFVIg0A/AgDgEQAAgCACgBQAEAHgCAAQgBAAgBAAQgCgCAAgCgAGEHNQgbAXgcATQgIAFgHAFAiwI2QBUAaBeAAQA9AAA5gKQAMgDALgCIgUAHIgqAPQgCAAgCABQgFAAgFABQgCAAgDAAQgFABgFAAQgFABgGAAQgDAAgFABQgRABgRAAQgDAAgDAAQgEgBgEABQg1gCgygJQgEgBgEAAIghgSIgRgJIi3hfQAPALAOAKQBIAxBSAZgACPJBQBIgQBAgigAoVkUQABgBAAgBIAHgLAoVkUQAFgJAFgKAoZkNQACgDACgEAnEmEQglApgcAtgApCikQgTBLAABUIAAABQABA7AKA4QAKA1ATAwAmYG9QgIgIgIgIQhGhGgqhQQgCgFgDgE");
	this.shape_36.setTransform(0.4,1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AAepsIAfACQADABACAAQAEAAAEABAi2pSQACAAACgBQBUgZBfAAQAPAAAOAAAi2pSQBXgbBgAAQAPAAAOABAA9pqQAHABAGABIB0AYIBiAoQACACACABQACABADABAJihHQgNhzg2hiQgqhNhDhDQhxhxiPgqQhVgZhfAAQigAAiDBHQhNAqhDBDQgiAhgbAkQAbglAigjQC0i0EAAAQD+AAC1C0QCRCRAdDAQABAMABALIAFBGQgBABABABQAAACAAACQAAAmgEAkIgNBMAEgooQAEADAFACICMBrQAAAAAAAAQAvAvAjA1IBGCRQADAIACAIIAJAiQAAADABADQAAABABACQABAFABAFQABAFABAGQAAABAAABQACAPACAPQABAEAAAEQAEAjAAAkIgCA7QgBADAAACQgFA3gPAzQAAACgBABQgIAagIAZQgFAKgEAKIgMAcQgCAEgCAFQgCAEgCADQgDAGgDAFIgBACQADgGAEgHQACgDACgEQgFAJgFAJAJNjDQACAGACAFQAAADABACAJTCmQAAACgBACQgIAZgIAaQgFAJgEAKAJTCmQgBABAAACQACgHACgHQgCAFgBAGgAIcEsQgKARgLAQQgCADgCADQAOgVANgVIgCADIhVBwQAHgHAHgIQgHAJgIAIQgIAJgJAJQg5A5hBAnIgGACQBFgoA8g8QAJgJAIgJIgBACIgUAaIgjAhQgGAGgGAFQgZAUgaASAItEMQgDAFgCAEQgGAMgGALAIDFTIguA6AgDgEQAAgCACgBQAEAHgCAAQgBAAgBAAQgCgCAAgCgAGPHZQgcAYgdAVQgDABgDADIgVAGQhiA7h0ASQgfAFggACQgSABgTAAQhcgBhTgYQhjgdhVg+QgPgMgPgMIgigTQgBgBgCgBQgBgBgBgBQgFgFgEgEQgBgBgBgBQgBgBgBgBQgCgCgCgCQgRgRgPgSQgKgMgJgMQgKgNgJgNQgUgegRggQhCh/AAiaIAAgBQAAhbAYhSQAIgZAIgaQANgcAMgcQADgEADgFQAVgnAbgjAA0JfQAkgCAjgHQBkgSBWgyIkBBNIgOAFIghAKQgDgBgDABQgBAAgBAAQgGgBgGAAQgFAAgFAAQgCAAgBAAQgDAAgDAAQgDAAgCAAIhKgJQgIgBgIgCQgFgBgFgBIgjgTIgQgJQBbAeBlAAQAaAAAYgCgAookUQAqhVBHhIQADgDACgDQBwhtCIgsIAEgCAl1HhIgPgIQgXgUgXgWQhHhIgqhUQAsBSBHBHQAdAdAeAYQARANARAMQBGAwBPAZgApRipQgVBOAABXIAAAAQABA9ALA5QAKA2AUAyQALAdAOAcAhxJkQgEgBgEAAQgJgCgJgC");
	this.shape_37.setTransform(0.4,1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABDp6QAAAAABAAQAEABAFAAAJxhXQgPhug0heQgshQhFhEQh0h0iSgrQhXgahhAAQh+AAhsAqQgiANgfASQhBAig5A0QgOANgMAMQgQAQgOAQIAIgKIATgbQADgCADgDIAQgLIAHgEIC7h1IAMgHIAbgRQAHgCAHgDQAGgBAGgCIANgEIB2gSQAUgBAVAAQAQAAAQABABDp6QAFABAFAAIA6AJICeA4QADADAEABQACACACABAgnp8QAUAAAUAAQARgBAQABIAhACAElo4QAFADAGAEICRBuQAAAAABABQABABABABQABABABABQAAAAABABQAsAuAiAyQAWAhARAjQAWAsAPAxQAZBWABBiIgDA4QAAAFAAAFQgGA7gQA2QgIAagJAaIgTArQgEAIgDAHAjfpNQBngnB3AAQEFAAC6C7QCUCUAeDFQAAAFABAEIAGBcIAAABQAAAtgFAsQgFAmgKAkQAAADgBACIAAABAJ4A0QgFA9gQA4AIzEkQgBADgBADIgDADIhcB8QAKgKAJgKQgKALgLAMIgSAYQgBABgBACQgBAAgBACIgpAlQgDABgBACQgCABgBABIgrAhQiaBqjFAAQgCAAgBAAQgMAAgMAAIhggLQAAAAgBAAQgEgBgEAAQgGgCgEgBAI0EiQgBADgBADQAAgCABgCQABgBAAgBgAI+EOQgEAHgDAIQgBACgCADQACgCABgDQgDAGgDAHAIyEoIgEAFIgZAqIgwA+AHQGsQgHAIgIAIQiUCUjFAeQgyAHg1AAQhfAAhWgZIgSgKQBeAfBrABQBAAAA8gLQC3giCMiLQAIgJAIgIgAgCgDQAAgCABgCQAFAIgCAAQgCAAgBgBQgBgBAAgCgAjEpeQANgEANgEAnWmiQAKgMAMgLQAJgKAKgKQBehWBwgqAo2kbQABgDACgEQABgBABgBIAHgNQADgGAEgGIACgCQgFAHgEAHAphitQAJgaAIgaQAMgdANgcIABgBQAGgOAIgNIAFgHQAgg1AtgwAozkiQAGgKAFgKAnemYQgmAqgdAvgAphitQgVBQAABZIAAABQAAANAAAOIgEgSIAAgBQAAhdAZhVgAp2AYQADAwAIAuQALA3AUA0QADAGACAHQAvBvBcBbQAlAlApAeQAJAHAJAGQBGAwBQAaIiohXIgSgJIglgTQgDgDgDgDQgDgDgCgCQgGgFgFgGQgDgCgCgCIhLhZQgCgDgDgDQgagngUgpAoLFsQgYgigTgkQgEgIgEgIIgHgiIgCgGIgvjWAmAHyQgfgagegdQhahaguhtQgEgJgDgKAh8JzQgJgCgJgCIgmgTQhlgehXhAQgIgGgIgG");
	this.shape_38.setTransform(0.4,1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AghqNQASAAAQAAQASAAARAAAghqNQASgBARAAQARAAARABIAiADQABAAABAAQACAAABAAQACAAABAAQABABACAAQABAAABAAQABAAABAAQABAAABAAQACABABAAQABAAABAAQABAAABAAQABAAABAAQABABAAAAQBsAOBdAxQAFADAFACQBSAtBGBGQABAAAAABQAxAxAlA4QA0BNAaBYQAaBZAABkIAAAAQAAAFAAAGIgCAqQgBAHAAAHQgBAIgBAIIgPBQQgDAKgCAKQgJAbgJAbQgNAegNAdQgHAOgIANQAIgNAHgOQgtBdhPBPIgmAjQgdAZgfAVQgFAEgEADIgWAGIgFACQBJgrBBhAQAMgMALgMIA+hOQAAAAAAAAIAUggAJUj8QgLgYgNgXQgshRhHhHQh3h3iXgsQhZgbhjAAQipAAiKBLQhSAshGBHQhBBAgrBKAoBmLQAZgeAcgcQC+i/ENAAQEMAAC+C/QBcBbAvBuIAsCZQAIAzAAA1QAAAFAAAFIgRCQAKJAxQgBAPgCAPAJ2ClQgCAHgCAHQgIAagJAcQgOAdgNAeAJ2ClQgCAHgCAGQADgJACgKgAHlGtQgLANgNANQg+A+hGApQhmA9h4ASQgkAGgmABQgQABgQAAQhgAAhXgZQhpgehahDQgWgQgVgSIgigUQgDgCgCgDIhOhbQgYgjgTglQgEgGgDgGIgHgiIgCgHQAwBvBdBdQAXAXAYAUIgMgGQgSgRgSgSQhbhagvhtQgGgMgDgNQAEAJADAJIgyjeQADAxAJAuQAKA5AVA0AgCgEQAAgCABgBQAFAHgCAAQgCAAgBAAQgBgCAAgCgAAhKEIgiALQgBAAgCAAQgIAAgHgBIhfgIQgLgCgLgCQgFgBgGgCAAtKBIgMADAjDJlQBdAdBpAAQAVAAAVgBQAsgCApgIQBogTBag0IkXBRAGkHzQgGAGgHAFQgbAXgdATAixp2IAsgKIBkgNAndm5QAKgLAKgKQB3h4CXgtQAFgBAFgCAoBmLIAWgeIAOgQQAHgIAIgHQB/iACeguApFkjQACgDACgEQAEgIAFgJApFkjQAGgMAHgMIAEgGApxiyQAJgaAJgbQANgeANgdIAAgBApBkqQABgBABgCQADgGAEgGQACgEACgEQAXgmAcgkApxiyQgVBTAABbIAAAAQAAAPAAAPIgEgVIAAAAQAAhgAZhXgAoZF1QgCgDgCgDQgagmgUgoAhyKGQgHgCgGgBQgKgCgKgCIgjgTIgNgHIjVh2QAZAVAaASQBMA0BWAb");
	this.shape_39.setTransform(0.3,1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AggqdQARgBARAAQAjAAAjADQCIANB0BBIA1AiIBIA6QAMALALALQAHAHAGAGAggqdQARgBAQAAQCtAACOBNQAEACAEACAKLiBQgThfgthTQguhThIhIQh7h7iagtQhbgbhmAAQiGAAhzAtQgiAOggARQhEAlg9A4QgNAMgOANQghAhgcAjQAcgkAhgiQAKgKAKgJQBhhaBzgsQBvgqCAAAQETAADDDDQCPCPAmC6QAEARACASQABAGABAHQgDgVgEgUIAJA/IgCgWAHBnxQAMAKALAMQAHAGAGAHIBMBfIBOCjQABADABADQABADABAEIAHA3IABAHAJ/jMQACAHACAGAKUhCIAEBHIAAABIgRCcAKUhCIAIA+IAAAAQAAAIAAAJIgDArQAAAEgBAFQAAADAAADAKZA4QAAAHgBAIIgDAXQgGAugNArQADgKACgLQgCALgDALQgJAbgJAcQgFALgFAMAJVEsQgvBfhRBRIgmAkQgeAaggAVQgGAFgHAEIhMAgIgJAGQglARgnAMIg2AWQgEABgEABQgCAAgBAAQgEABgEABQgFAAgEABQgKACgJABQgFAAgFABQgKABgLABQgBAAgBABQgFAAgEAAQgHABgIAAQgTABgTAAQgBAAgCAAQgEAAgEAAIhogJQgMgBgLgDQgGgBgFgBAI8FXIAKgRQAIgNAHgNAEYJYIDAiGQABAAAAgBIBOhbAI8FXQgGAJgFAIQgFAHgFAHQALgPAKgQgAKCC3QgJAcgJAcQgFALgFAMIgRAmAgCgEQAAgCABgBQAFAHgCAAQgCAAgBAAQgBgCAAgCgAEYJYIhHAdQAggKAegNADDJ7QgqAMgsAHQg0AIg4AAQhjAAhZgaQhsgghchEQgUgOgTgRIgjgTQgFgFgFgFQgBgBgBgBQgFgEgEgFQgBgBgCgBQAAgBgBAAIhBhQQgZgjgTgmQgBgCgBgCIgJgRQg8iBgBiZIAAgBQAAhiAahZQAJgbAJgcQAOgeANgfQAphUBEhJQAGgGAHgHQADgDADgDIAQgKIAHgEIDDh8IAKgGIAdgSQARgGASgFIAugLIBigLAjIJ1QBfAdBsABQBDAAA/gMQAngHAlgLIgOAGAGvIAQgHAGgHAFQgdAZggAUAjTp8QAKgEAJgDQAIgCAIgCApUkqQADgFADgFQABgDACgDIAEgIIAyhJAqBi2QgWBUAABeIAAAAQAABCAMA+QALA6AVA2QAYA/AmA5AonF+QgCgDgCgDQgYgigSglAmqH5QgWgSgUgVQg0g0glg6QAmA4A0AzQAaAaAcAXgAh0KWQgHgBgHgBQgKgCgKgCIglgUIgNgHIjVh1QAXATAYARQBNA1BZAc");
	this.shape_40.setTransform(0.3,1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AgnquQAVgBAUAAQAkAAAjADQDtAXCuCuQA0A0AnA6QA5BWAbBhQAPA2AGA6QAEAmAAAnIAAABQAAAQAAASIgCAbQgBAFAAAFQAAACgBADAgnquQAUgBAUAAQCyAACRBPQBWAuBKBLQB+B9AuCfQACAFABAEAKihaQgQh5g5hoQgvhWhKhJQh9h+ieguQhegchoAAQiyAAiRBOQhWAvhKBKQggAggbAiIAGgIIAXghQAHgHAGgIQAKgLALgKQB9h+CegvQAFgBAFgBIAegIQA5gNA9gEAoZmhQAZgfAdgdQDHjIEbAAQEaAADIDIQCgCgAfDVQABAHABAHIAGBgQAAAGAAAHQAAAIAAAJIgSCGQgBAHgCAHQgBACAAACQgJAcgKAdQgJAWgKAWIgEAJQgCAFgCAEQgCADgBADAKqA5QgBAHgBAIIgEAiQgGAngLAnQgBABAAADQACgJACgJAJDFrQgDADgCADQgBACgBACQADgFAEgFIAdgwQgwBdhPBQIgvAqQgbAXgdAUQgNAKgOAJIgyATIgWAJQBwgyBehdQAWgXAUgXQgUAYgXAXQhUBUhjAxQgwAYg0APIhAAZQgBAAgBABQgCAAgCAAQgCABgDAAQgEABgFABQgFAAgEABQgFABgFABQgLABgKABQgnAEgnAAQgBAAgCAAIh2gKQgGgBgGgBQgNgCgMgDAI8F1IgtA6AJoEqQgCAFgCAFQgCACgBADQgBABAAABAgCgEQAAgCABgCQAFAIgCAAQgCAAgBgBQgBgBAAgCgADlJ/IgcALQgsANgtAHQg2AIg5AAQjhAAitiAQgrgggogoQg1g2gmg7QAoA6A0A0QAxAxA2AlQCmByDVAAQBFAABAgMQAwgJAtgPQAagJAYgKAGyISQgDADgDADQgmAfgnAZAn1nRQAIgHAHgIQCFiGCmgvApYlGIAEgGIADgFQgGALgGAKApfk4QADgHAEgHApfk4QABgCABgCQAEgIAFgIQAagsAhgpAofmZQgbAjgXAlAqRi7QAKgcAJgcQANgfAOgfIAAgBQACgDACgDApjkyQAFgKAGgKAqRi7QgWBWAABgIAAABQAABDAMBBQALA7AWA3QAZBAAmA7ApnE0QhEiJAAilIAAgBQAAhlAahbAo0GJQgaglgUgnQgDgEgCgFAnzHYIhBhPQgCgEgDgDQgagmgUgoAnPH8QgKgKgKgKQgIgIgIgIAnPH8QgKgKgKgKQgIgIgIgIAh6KmQgKgBgLgCQgIgCgIgCIiWg2Iiaht");
	this.shape_41.setTransform(0.3,1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AC4qeIAGACQALADALAEIBqAfQAMAGAMAHIAeASIBtBWQAHAHAIAHQA1A2AoA7QACADACADIA5BsQACAGADAGQAJAaAIAaQAdBgAABrIAAABQAAAlgEAkIgRBmQgCAHgCAHQgBACAAACQgBACAAACQgBADgBADIgBACQgGAVgHAUIgBACQgBAEgBADQgOAggPAgQgBADgCADIgBABQACgEACgDQgBABAAACQgBABgBACQgEAHgFAIIgaAqQgBACgBACIg2BFIgTAcQgKAKgLALQgIAHgHAIIgcAYQgeAagfAWQgEADgFADIiCBDQgCABgDABQgFACgFACQgDABgDABQgTAGgUAGQgPAEgQADQgSAEgTAEQgVADgVACQgoAFgoAAQgBAAgCAAQgCgBgBABQgCgBgDABIhugKQgMgCgMgCQgGgBgFgBAi6qnIAwgLQBEgNBHgBIABAAQAlAAAkAEQABAAABAAQACAAABAAQABABABAAQABAAACAAIBjAdAo2mXQAggqAngnQDMjNEiAAQBhAABYAXAE+p2QAHAEAHADQAFADAFADAKzhcQgRh8g6hrQgwhXhMhMQiBiAihgwQhggchrAAQi2gBiVBRQhXAvhMBMQgqAqgiAuIAFgIIAWghIAignQAJgJAJgKQCBiBCigwQAIgCAHgCAHhoBQAHAHAIAHQA4A4ApA/ADUqVQCcAxB8B8QCkCkAhDaQABAHABAHIAGBiIAAAAQAAA0gHAyIgMBDQgBAFgBAFQgBADgBAEQACgIACgJAKjC9QgBACAAACQgBADgBADAKoCrQgDAJgCAJAJmFQQAEgHAEgHIhaCBAKRD0QgBADgBAEQgOAggPAgAgCgEQAAgCABgCQAFAIgCAAQgCAAgBgBQgBgBAAgCgAEcJ8QhQAkhZAOQg3AJg7AAQhrAAhggdQhughhehGQgBAAAAgBIgugXQgDgDgEgCQgBgCgCgBQgPgOgOgOQgBgCgCgBQgBgBgBgBQgBgBgBgBQgBgBgBgBQgBgBAAgBIhIhUQgEgHgFgGQgCgEgDgDIghg3QgCgEgCgEQgFgJgEgJIgJgmIgBgGIgzjoQADAzAJAxQALA9AWA5AjaKSQBnAiB1AAQBHAABCgMQBMgPBFgdIDUiSQAAgBABAAQASgTARgTAIBHfQgKAKgLAKQgIAIgHAIAHBIbQgFAFgGAFQgcAYgfAUApglYIAFgHQgJAOgIANQAGgKAGgKQATggAXgfAo7mPQgRAXgPAZAn+nfQAGgGAGgGQCLiMCtgwApxk5QACgDABgEQAEgIAEgIIAGgIApxk5QAFgMAGgLApulAQABgCABgCAqhi/QAKgdAJgdQAOggAOggIABAAAqhi/QgXBYAABiIAAABQAAARABASIgFgWQAAgBAAgCIAAAAQAAhoAbhdgAqDENQgDgKgEgKQADAHADAHQA0B7BlBlQAvAvA0AkQAEACADADQBOA2BZAdIiuhYIgPgIQgsgggogpQhlhkgzh4gAptFNQgHgNgGgNAo+GYQgHgKgHgKAh6K3QgIgBgHgBQgKgCgKgCIgtgXIgQgI");
	this.shape_42.setTransform(0.3,1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AFfp3ICcB4QABAAAAABQAVAVAUAXQABABABABQAUAYASAZQAHAKAHAKQA5BVAcBhQAdBiAABuIAAABQAAAlgDAlQgGBAgRA7QgBACAAACQgKAegKAeQgOAggPAhQgyBmhXBXQgdAdgeAZIgYASQgMAJgMAJQivB4jfAAIh6gJQgOgCgNgDQgLgCgLgDIgvgYQhpgihchEQgDgCgCgCQgrgggngnQg4g4gog+QAqA8A3A3QAtAuAyAkIgOgIIgwgZQgGgFgHgGQgMgMgNgMQgqgqghguIgNgRQgBgBgBgCQgDgEgDgEIglhAQgTgkgOgmQgBgFgCgFQgHgSgFgTQgCgIgDgIQgBgFgBgFQAAgBgBgBQAAgDgBgDQgThRAAhaIAAgBQAAhqAbhfQAKgdAKgeQAOghAPggQAhhFAzg+IAignQAJgKAKgKQCDiECmgxQAIgCAIgCIBGgPQA7gKA+AAIABAAQABAAACAAQABAAABAAQABAAACAAQABAAACAAQABAAABAAQAfAAAfADIBWAZQAnAJAlANQCSA0B3B2QBZBaAzBpIA9DEQAIA4AAA7QAAAcgBAcIgUB/AohnLQASgVAUgUQDRjSEpAAQBVAABPASAFFqGQAHAFAIAEQAFADAGADAFFqGQANAHANAIADvqeIBWAYAKEkxQgHgNgHgNQgxhZhOhOQiDiDilgxQhjgdhuAAQi6AAiYBSQhZAxhOBOQgUATgSAUAKyDFQABgEABgEQgBACAAACQgBACAAACQgKAdgKAeQgOAhgPAhQgBACgBADQgBABAAABQABgDACgDIAAgBAJ/FHQgRAfgUAdQgCADgCADIhKBaQgIAJgIAJQioCnjfAiQg4AJg8AAQh0AAhoghIgOgIIiuhaQAGAEAHAFQBMA0BVAdQBuAmB9AAQBJAABEgMQDPgnCeidQAIgIAIgJAKBFDQgBACgBACAJWGJQAWgfASghQgyBihUBUQgbAbgdAYQgBABgCACAgCgEQAAgCABgCQAFAIgCAAQgCAAgBgBQgBgBAAgCgAoKnqQAGgGAGgHQCPiPCxgxAqAlAQADgGADgFQAlhEA0g8AqxjEQgXBbAABkIAAABQAABGANBEQAMA+AWA6QAaBEAoA9Ah7LIQgJgCgIgBQgQgDgQgE");
	this.shape_43.setTransform(0.3,1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABIreQAEAAADAAQD+AYC7C7QAHAHAGAIIBUBoIBVCxQABAEABAFQACAGACAHIAIA/IABAGQgUhsg0heQgyhchPhQQiHiGiqgyQhkgehxAAQifAAiHA7QgaAMgaANQhKAphDA9QgPANgPAPQgnAoghAqQAggrAogpQAMgLAMgLIAGgEIDBh/IAJgFIAigXQAVgIAVgGQAMgEANgDIBNgPQA2gIA4AAIABAAQABAAACAAQABAAABAAIBBADQCVANB+BEQBcAyBQBQQAHAIAHAHALYg0IgFg0ALMiOQADAPADAQQAAADABAEQgDgQgDgQAK+jjQADALADALAkfqeQCDg4CbAAQEuAADXDWQCfCgApDSALYg0QACAbAAAbQAAACAAACIgSCsQgDAMgEAMQgDALgEAMIgHAWQgDAIgCAHQgPAigPAhQgBADgCADQAAABgBABQACgDABgDQgBACgBACQgEAIgFAJQAEgIAEgHQgzBkhVBWQgJAIgJAJIgcAaQgFAEgGAFQgfAaghAVIgZAHIgDABIk3BdIgKADIgpAMQgDAAgDAAQgCAAgCAAIh6gKQgNgCgNgCQgNgDgMgDALbA+QAAAFgBAFQgGBDgSA/QgEALgEAMALYg0IAGAvIgDBDQgGBIgTBDQADgMADgLAKzD3QgCAIgDAIQgPAhgPAiQAAAAgBABQgzBohYBYQgJAJgJAIAKEFgIgbAsIhTBmAgCgEQAAgCABgCQAFAIgCAAQgCAAgBgBQgBgBAAgCgAFyJ1QhzBFiHAVQgkAFgmACQgWABgXAAQh0AAhoggQhvgjhfhGQgWgRgWgSIgpgYQgEgEgEgDQgBgCgCgBQgBgBgBgBQgBgBgBgBQgBgBgBgBQAAgBgCgBQAAgBgBAAQgtgvgjgzIgrhHQgDgGgEgHIgIgnQgHgPgFgQQAFANAGAOIg7kCIgFgXQAAhtAchiQgYBdAABnIAAABQABAQAAARQADA3AJA1QANBAAXA7AjnKwQBuAlB7AAQAbAAAbgCQAugDAsgIQB2gWBng8QBSgvBHhHQAHgHAHgHQgHAHgHAIQhGBFhQAvAHWI2QgfAaghAXQgFADgGAEAj9q1QAhgMAigJAqPlIQAxhlBUhWQAEgDADgEIAUgMQBghZBwgvArBjJQAKgeAKgeQAPgiAPghQADgGADgGQAagtAggrAqNFXQgBgCgBgBQgCgFgDgFAqcEjIgBgEQA1B5BmBmQAbAbAdAYIgLgGQgXgVgXgWQhkhlg1h4gAh/LYQgIgBgJgCQgRgDgRgEIgpgXIgMgHIjjh/QAbAWAcAUQBRA3BbAe");
	this.shape_44.setTransform(0.3,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AjOrVIDQgdIAAAAQACAAABAAQACABACgBQABABACgBIA0ADQATABAUADABArvQAIABAJAAQALACALABICWAiQABABABAAQADABADABQADACAEABQAtARArAXQBdAzBSBSQA6A5AqBAQABACACACQAAABABABIBTCyQACAGACAGIAQBGQADAPACAPQACANABAOQAEApABAsIgDBEQgBAOgCANIgHAiQgGAqgKAoIgSA2QgBAEgBAEQgDAHgDAGAKik/QgHgOgHgNQgzhehShRQiJiKitgzQhogehyAAQiLAAh4ArQgxASguAZQhOAqhGBAQgOANgOANQgPAQgOAPIADgFQANgNAOgOQAMgMALgLQBzhrCMgwQB1gqCGAAQE1AADbDcQBeBeA1BuIBADNQAJA7AAA9QAAA9gJA5ALOjlQABADABAEQABACABADALsA/QgBAFAAAFQgBAJgBAIALAEEQgBAEgBAFQgDAGgDAGIgZA4Qg0BrhbBbQgBAAgBABQgDADgDAEQgZAYgaAVQgLAJgMAJIgcAVQgCABgBABQgFADgEADIggAMIgGACQBXgyBNhMQAIgIAIgIQgIAIgJAJQhKBKhTAxQhtA/h+AXQgIABgIABQg7AJg+AAQj4AAi9iNQgvgjgsgsQhnhng2h6QgHgQgGgRQAGAOAFAOQA3B8BoBoQA2A2A8ApQC1B8DqABQBMAABHgOQABAAACgBQBzgVBkg5IjXBOIgOAGIgtAQQgOACgNABQgHAAgHABQgDAAgBAAQgIAAgHABQgSABgRAAQgCAAgCAAQgCgBgCABQgBgBgBABQgKgBgJAAIhwgMQgDAAgCAAQgDgBgCAAIgFgBQjTgqiiijQgBgBgCgBQgBgCgBgBQgBgBgBgBIhNhbQgFgHgFgHQgDgFgEgFAJ/GIQgFAGgEAHQgEAGgFAHQAJgNAJgNIAgg3AgCgEQAAgCACgCQAEAIgCAAQgCAAAAgBQgCgBAAgCgAJtGiIhJBZAjdrRQADgBACgBQAFgBAFgBAjdrRQAIgCAHgCAkEq5IAIgEIAfgUAotnwIAXgfQABAAAAgBIAGgGIAUgMIAEgCIDziVAqRlnIACgCQgFAHgEAHQAEgGADgGQAqhIA6hBAqUljIADgEArQjNQAKgfAKgeQAPgjAPgiIAAgBQACgDACgDQABgDABgCAqelQQAFgJAFgKAqalWQADgHADgGArQjNQgBADgBADIgXCpQAAAMAAANIAAABQAAASABAUIgGgYQAAgCAAgCIAAAAQAAhvAehkgAownrQg4A+gnBEgAroAiQADA2AJA0QANBBAXA9AqXFoQgGgLgFgLAqXFoQgDgGgEgGQgCgFgCgFIgJgnIgCgFIg7kEApmG1QgJgMgIgMIggg1AiOLmQgFgBgFAA");
	this.shape_45.setTransform(0.3,1.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABor8ICSAhQADABADABQABAAABABQACAAABABQA1ASAyAbQACABACABICvCGQAAAAAAAAIBbBsQAGAIAFAIQAEAFADAGAjMrnIDOgbIAAAAQABAAACAAQABAAACAAQABAAABAAQACAAABAAIA0ACQAJABAJABQAKABALABABBsAQAUABATADAKxlHQgHgNgIgOQg0hghThTQiNiMixg1Qhpgfh1AAQiYAAiDAzQgpAQgmAVQhQArhGBBQgPANgOAPQgVAUgTAWQATgXAVgVQAMgLALgMIAGgDIDliRIAJgFIAhgVQAKgDALgEQAJgCAIgCAKxlHIBBDSQADARACARQADAlABAlQAAAGAAAFQAAACAAACQAAAKAAAKQAAAIgBAHQAAABAAACIgTCPAJ6m2QAJANAJAOIBUC3QAfBpAAB2IgDBGQgBANgBANIgTBgAkTrHQB/gwCTAAQE8AADgDgQBfBgA3BwAL8BBQAAAFAAAFQgBAIgBAIALmDBQgBAFgBAEQgBACAAACQgBACAAADQgKAfgLAgQgCAFgCAFIgCADQgNAdgMAcQg2BthdBdQgdAdgeAaQgcAWgcAUQi6CAjvAAQgCAAgCAAQgFAAgEAAQgCAAgCAAQhEgBhAgMQgFgBgGgBQgtgJgrgPQgCAAgBgBQgBAAgBAAQgBgBgCAAQgBAAgBgBIhAgnQg/gfg7grQgKgHgKgIQgmgegjgkQg7g7grhDQAsBBA7A7QArArAvAkQANAJAMAJQAnAbAqAVQCcBQC8AAQBNAABJgOQA3gKA0gSQhAAYhGALQg8AJhAAAQixAAiUhGIgSgMIhqhCIgSgLIg9gmQgIgIgIgIQg3g3gpg8QgCgDgDgDIgdgvQgGgMgHgMQhKiPgGisQgBgGAAgGQAAgCAAgCQAAgFAAgGQAAgEAAgDQAAhyAdhmQALgfAKggQAQgjAPgjQA0hqBYhZQADgEAEgDIATgNQBvhnCFgyALlDHQAAgDABgDIABgGIgCAMIgBADQgBAEgBADQABgFACgFgALiDRQAAABAAAAQgKAggLAgQgCAFgCAFALjDOQgBACAAABAKLGTQgEAFgDAFQgDAEgCAEQAGgJAGgJIAHgKQAPgYANgZAgCgFQAAgCACgBQAEAIgCAAQgCAAAAgBQgCgCAAgCgAEELMIEbi1QAAAAABAAQAAgBABgBIBehwAjyrcQATgGATgFArhjSQgHAdgGAeIgLBsQgBATAAATIAAAAQABBMANBIQANBDAYA+IBHCJAqtlXQAEgGADgGIBgiIAoOIzQgIgIgIgIQg5g6gsg/");
	this.shape_46.setTransform(0.3,1.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AF9qzIAfASQBLAwBEBDQACACACADQAdAeAaAfIAnA0QADAEADAFQBBBhAfBwIAJBCQADASADATQABAFAAAEQgDgWgEgVQgWhvg1hiQg2hihVhUQiPiQi1g1Qhsggh4AAQiaAAiFA0QgqAQgoAWQhRAshIBCQgPAOgPAOQgLALgKAKQAKgLALgLQAOgNANgMIADgCIDriUIAGgEIAjgXQAMgDALgEQALgDAMgDIDHgaQADAAABAAIABAAQABAAACAAQABAAACAAQAEAAAEAAIA3ADQAPABAOACIBvAVICXA6QAEADAFADQAFADAFACgABHsQQAHABAGAAQAIABAIABAFqq+QAJAGAKAFAL8iZIAJBFIgCgaAL8icIAAADAKNm4QBCBhAhBvQABAFACAFAkbrVQCCgyCXAAQFEAADlDlQCoCpAtDdAMFhUIALBPIAAAAQAAAOgBAOQAAACAAADQgBAYgDAYIgWB+QgBAEgBAEQgBACAAADQACgIACgIQgCAFgBAGQgBACAAADQgFANgEANIgGATQgDAKgDAKQgFAKgEAKIgJATQgHAQgIARQg3BvheBfQgBABgBABQgCABgBACIg1AwQgBABgCACQgDACgCACIgrAgQgEAEgFADQgDACgEADIgiAMIgEABIjzBYIgKADQgDABgEAAQg9AJhBAAQkDAAjFiTQgygkguguQhohpg5h8IgBgFQA5B+BqBqQA4A4A+ArQC+CCDzABQBKAABFgMQAFgBAFgBQB9gXBsg/QBZgzBOhOQAHgHAIgHQgIAIgHAHQhMBMhXAzQh2BGiLAWIgwARQgFABgFAAQgLABgLABQgPABgQABQgNAAgMAAQgCAAgCAAQgFAAgEAAQgCAAgDAAQgCAAgCAAQgCAAgDAAQgHgBgIAAQgDAAgEAAQgCgBgDAAQgDAAgDAAQgvgDgugJQgFgBgFgBQjdgsipipQgBgBgBgCQgDgDgDgCQAAgBgBgBIhUhlQgCgDgDgEQgbgogXgrIgJgoQgJgUgHgUQAHASAIARIhBkYIgGgXQAAgCAAgCIAAAAQAAh0AehoQALggAKghQAQgjAQgkQA1hsBahcQACgCADgDQABgBABgBIAXgOQBvhnCFgzAMFhUIAGBaQAAAJAAAIIgVCwAL1DKQgCAHgBAGAI6IUIBYhuQAXgiATgkALjEEQgEAKgDAKQgEAKgEAKAgCgFQAAgCABgBQAFAIgCAAQgCAAgBgBQgBgCAAgCgAHtJjQgEADgEAEAG6KKQgIAGgIAGAj4rsQAXgHAXgGArxjWQAAADgBADQgBAFgCAFIgVCoQAAAMAAANIAAAAQAAATABATQADA6AKA3QANBFAYA/Aq8leQAEgGADgGQAvhWBHhMAqHHAQgdgpgXgsQgBgDgCgC");
	this.shape_47.setTransform(0.3,1.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AIqpGQAGAGAHAGQAMANANANQAkAnAeAqQAGAJAGAJQBBBhAhBuQAEAOAEAOQAYBhAABrIAAABQAAATgBAUQgBAWgCAWQgHBKgTBEQAEgSAEgSQgEASgFASQgEAMgDAMQgHAVgHAVIgaA7QgEAHgDAHQgBADgCAEQgSAhgWAgQgtBDg8A9Qi7C7j5AmQg/AJhCAAQkIAAjKiWQgygmgvguQgfgggaghQAbAgAfAfQA5A5A/AsQDCCFD5AAQBRAABLgOQDogrCwiwQBchcA4hrAIqpGQAGAGAGAGQANANANANAGErDQBCAmA9AzQAUARATATAjKsKQBhgZBrAAIAAAAQACAAABAAQACAAABAAQACAAABAAQAiAAAgACQAFABAEAAQCkAQCKBNABNshQCkAOCKBLQAFADAEACAMVhjQgSiShEh9Qg2hkhXhWQiTiTi4g3Qhuggh6AAQjQAAiqBcQhkA2hWBXQgWAWgUAWQAUgXAWgWQDpjqFLAAQFJAADqDqQC7C7AmD5QABAMABALQAGAwABAzQAAABAAABQAAACAAACQAAACAAABQAAACAAACQAAACAAABQAAACAAACQAAABAAACQgCBUgQBNAKem9QABACACACQBHBsAgB7ALSFZQgEAHgDAHQgBADgCAEQg3BuhfBeQgBABAAABQgCACgCACIgqAnQgIAGgHAGQgHAGgHAFQgVARgWAQQjDCFj5AAQgCAAgCAAQgIAAgHAAQgCAAgBAAQgJAAgJAAQgHgBgIAAQgzgDgygJQgFgBgFgBQgqgJgngMQilg1iGh/QgJgJgJgIQgLgMgLgLIg7hGQgHgKgIgKQgFgJgGgIQgXgjgTgkQhVilAAjHQAAhzAdhnQABgDABgEQALghAKghQARgkAPglIABAAQA2huBbheQABgBABgBIAGgFQCBiACdg7QAWgIAXgHQAOgEAOgDAMCDcQgEAMgEAMAgCgFQAAgCACgCQAEAJgCAAQgCAAAAgCQgCgBAAgCgAIDJnQgPAMgOALAkTr0QAkgMAlgKAsCjUQgBADgBADQgUBTgCBbQAAANAAANIAAABQAABQAOBLQANBFAZBBIB8DSArHltQACgDABgDIBliOArKlmQACgDABgEQA3hrBZhcAqVHKQgCgEgCgDQgEgFgDgFAojJMQgJgJgJgIQgLgMgLgL");
	this.shape_48.setTransform(0.3,1.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AjjsUIDlggIAAAAQACAAABAAQAqAAApAEQABAAACAAQBzALBnAqIA7AbQAKAFAJAFQBnA3BYBZQBEBFAxBLIBZDDQAFAUAFATQAXBfAABnIgEBTQAAABAAACQgHBJgUBDQAAACgBADQgBAEgBAEIgUA7IgdBBQgCAFgCAFQgBADgCADQgFAKgGAJQAHgNAHgMQgBADgCADQg5BxhgBgIgvAsQgIAHgIAHQgHAGgIAGIgsAgQjHCJj+AAQgCAAgCAAQgDAAgDAAQgCAAgCAAQgCAAgDAAQgCAAgCAAIiEgNQgCgBgCAAQgFgBgGgBQgDgBgDAAAMkhyQgUiNhCh7Qg4hmhYhYQiWiWi8g3Qhxgih8AAQiZAAiEAxQg0ATgwAaQhXAvhMBHQgOANgOAOQgWAWgUAWQAUgXAWgWQAMgNANgMIADgBIEHijIAFgDIAjgWQAGgCAGgCQADgBAEAAAFwrgQBxA6BhBhQA/A+AuBFQAEAHAEAFAkZr5QCCgvCWAAQFQAADvDvQC/C/AmD+QAAAFABAFIAIB4IAAAAQAABFgJBAIgPBMAMRDgQgBAEgBAFAMRDgQABgEACgFQgBADgBACQAAACgBACgAKnHCQAGgJAGgIQgDADgCAEQgEAFgDAFgAEVL7IEtjBQABAAAAAAQArgsAkgvIAVgdALeFlQgCAFgCAFAKzGxIAZgpAgCgFQAAgCACgCQAEAJgCAAQgCAAAAgCQgCgBAAgCgAjoMHQBvAhB8AAQBSAABNgPQA7gLA4gTQhFAZhKALQhAAKhEAAQh3AAhsgeQiGgmhyhVQgQgLgPgNIgvgYQgBgCgCgBQgBgCgCgBQgKgKgKgJQgBgCgBgBQgCgBgBgBQgBgCgBgBQg2g3gpg8IgshHQgGgLgFgKIgKgsQgHgRgHgRQAHAQAGAPIhBkhQADA+ALA7QANBHAZBCAIPJyQgPANgQANAj2sPQAJgDAKgCArZltQAyhlBQhXQAJgKAKgKQADgEAEgEIAVgNQB7hyCUg1AsQjfQALgiALgiQARglAQglQAEgHADgGIBniSAsQjfQgIAfgGAgIgMBzQgBAUAAATIAAABQAAASABATIgGgaIAAAAQAAh5AghsgAroFEIgBgDQA8CHBxBxQAlAkAnAgQAXASAYARQBlBFB0AiIkIiKIgIgFQgjgcgigiQhwhwg7iGgArTGFQgDgGgDgFQgCgFgDgFAjhMLIgHgEAigMnQgJgCgIgBIgwgZ");
	this.shape_49.setTransform(0.3,1.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AEAsSIB3AjIAQAIQACABACABQACABACABIA8AlQBFAvA+A+IBtCEQABABAAABIBiDNQAAADABAEQADAHACAHIAJBIIABAHQgXh7g7hsQg5hohahbQiZiYjAg5Qhzgih/AAQiiAAiMA2QguASgtAYQhWAvhNBHQgQAOgPAPQgWAXgVAWQAUgXAXgXQANgNAOgNIAEgCID+igIAEgDIAlgXQALgEAMgEQAPgEAOgEIDUgaIABAAQACAAABAAIBKADQAKABAKABIB2AjQAUAFATAGQC3A7CSCSQC2C2AuDuQADARADARQABAIABAIQgDgWgEgVIAIA+IgBgTABPtCQAFABAFAAQAFABAFAAAkssEQCLg1CfAAQBzAABoAcAMej+QADAKADALAM2hcIAMBXQAAABAAACIgEBJQAAAFgBAFQgBAGAAAGIgLA9QgDAQgEARIgDAUQgCAJgDAJQAAABgBACIAAABQgLAigLAjIgaA5QgEAJgFAKQgBAEgCADQgEAHgDAIIgGAHIh1CdQAeggAaghIAZgiQAJgOAJgPQgFAIgGAJQgDAGgEAGAM+BHQgBALgBALAM2hcIAHBiQAABMgMBIALlF9QACgDABgEQgFALgFALALGGwIASgdIANgWALxFjQgEAKgFAJAgCgFQAAgCABgCQAFAJgCAAQgCAAgBgCQgBgBAAgCgAjyMVQBzAjCBAAQBVAABOgPQAugIArgNIgKAEIhBAcQgCAAgDABQgBAAgCAAQgCAAgDABQgCABgDAAQgaAFgaADQg2AHg5AAQgCAAgDAAIiWgNQgJgCgJgCQgEgBgEAAAD0MYQg0APg4AJQhBAJhFAAQh9AAhwggQiGgnhyhVQgEgDgFgDIg1gbQgEgEgEgEQgCgBgCgBQgKgKgKgJQgBgCgCgBQgEgFgFgFIhghwQghgvgagyQgEgIgFgJAJjIwIgZAiQgBABgBABQgDACgCACIgzAvQgDADgEADQgEADgDADIg1AnQgCACgCABIgxAVIgEACQAOgIAOgJICeh9QAAAAAAgBQALgLAKgKgAGwLDQgMAIgMAHQhOAshWAaAIQKHQgHAGgHAGAD+MUQBPgZBHgngAMnDPQgDALgDALAMqC7QgDATgFATAkHsbQAagJAagHArol1QA4hyBfhiQADgCACgDQACgBABgCIAXgOQB4hvCOg2AshjkQAMgiALgjQARgmARgmQADgGAEgHIBpiVAqtHiQgEgHgFgGQghgxgag0IgQg8IAAgCQA9CWB8B8QAvAvAyAmQAOALAOAJQBlBFB0AjAsFEoQACAFACAFIgxi1QACAPADAQQAOBIAaBEgAsBE0QgCgGgCgGAnnKZIgFgCQgwglgtgtQh7h7g9iWAidM5QgDgBgEgBQgJgCgKgBIg0gbIgHgEIj1h8AshjkQgbBqAAB0IAAABQAABCAKBAIgMgqQAAgCAAgBQAAgBAAgCQAAgEgBgEQAAgBAAgCQAAgDAAgCQAAgEAAgDQAAgDgBgDQAAgDAAgDQgBgSAAgSQAAh7Aghvg");
	this.shape_50.setTransform(0.3,1.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AE3sQIBcAcQANAIAOAIICXBzQAKAKAKAKQCdCcA6DFQACAHACAHIANBmIAKBIIAHA7QAAACAAADQAAAAAAACIgCA9QgBAKgBAKQgBAIgBAIIgJAuQgGAogJAmQgCAFgBAFQgLAjgMAkQgRAngRAnQg8B5hnBnQgBAAgBABQgCACgBACQgCABAAABIg2AwQgGAGgGAFAJFpxQAKAKALAKQBBBBAwBIQBHBrAiB7AErsTIAMADQCdA+CBCBQBqBqA8B9QgIgQgIgPQg6hrhchcQiGiGikg9gADQswIBbAdQgbgKgbgJQgTgFgSgFQhlgYhtAAQi1AAiaBCQghAOggASQhYAwhOBHQgRAPgQAQQgRASgRASIADgEIAbglQABAAAAAAIAEgFQACgBABgCIAZgQQBvhlCBg3QCYhACyAAQBmAABeAVgAjYs7IDVgaQADAAACAAIAAAAQACAAABAAQACAAABAAIBJADQAFAAAFAAQAFABAGABIBcAcQA8AOA5AWABRtSQAKABALABANBiIIACAGQAFAhADAhQACAjAAAjQAABIgKBDAL7lqIBGDiANQA/QgCASgCASAM0DfIgBAFQgBADgBACALOHDQgCADgCAEQgDADgCADQAFgHAEgGIAqhFAgCgFQAAgCACgCQAEAJgCAAQgCAAAAgCQgCgBAAgCgAsNFBQA+CUB7B7QA9A9BEAuQDOCOEIAAQBWAABQgPQD2guC7i7QAJgKAKgKQgKAKgJAKQjHDHkIAoQhCAKhHAAQkYAAjXifQg2gogxgyQh6h6g+iTQgFgLgEgLQAEAJAEAKIg0i5IgMgqQAAgDAAgEQgBgCAAgBQgDgnAAgnQAAh9AghxQAMgkALgjQASgmARgnIAAgBQACgDACgDQAHgOAIgOIAFgIIACgCQgFAIgFAJAJtI9IA1g+IAjgvAIYKVQgCACgDADQgEADgDADIg2AoQjPCOkIAAQgDAAgDAAQgEAAgEAAQgDAAgCAAIiKgNQgKgCgKgBQgEgBgEgBIg4gOQjIg6ifieQg2g3grg7QgEgHgFgGIguhLQgFgKgFgLIgRg7IgBgDAklsjQAYgJAZgHQAOgEAOgEAklsjQAmgNAngLAlRsGIAFgDIAngaAp4owQAPgRAQgQQAPgOAOgOIAEgCIDniXArzmDQABgDACgEQAEgHAFgHQAEgIAEgHQAshIA7hBAr3l9QAJgRAKgRAp7osQg4A+gqBFgArxGUQgDgGgDgFQgCgFgCgFAieNJQgFgBgEgBQgKgBgJgCAtBCIQACALACAMQAOBKAaBFAsxjoQgcBrAAB3IAAABQABBIALBF");
	this.shape_51.setTransform(0.3,1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AGmr8ICiB3QADADACACQAMALAMAMIBtCDQADAFADAEQBHBrAjB5IAKBJIAAABQgZh4g5hqQg8hsheheQififjIg7Qh3gjiEAAQjhAAi4BkQhsA7heBeQgXAXgVAYQAVgYAXgYQD9j9FmAAQFlAAD+D9QC5C6AyDyQAEAWAEAWQAAAFABAFQgEgbgFgaIALBRIAHBlQAAANgBAOQAAACAAACQAAADAAAEIgYCyQgBAFgCAGQAAACgBACQgLAkgNAkQgRAngSAoQg8B8hpBpIg7A2QgIAGgIAHIgxAlQgDACgDACQgEADgDACIgpAQQA0gfAwgmQACgBACgCQAoggAmgmQAAAAABAAQATgUATgVQAqgvAigyQABgCACgCIArhKAgotlQAWgBAUAAQDgAAC5BkQAFADAGADAgotlQAWgBAUAAQAuAAAtAEQCzARCWBVALSnmQBJBrAlB6QABAEABAEANXheIgCgcANXheIAMBZQAAABAAACIgFBVQAAABAAABQgHBIgSBEQgBAEgCAFQAAACgBACQACgIACgHAgCgFQAAgCABgCQAFAJgCAAQgCAAgBgCQgBgBAAgCgAC0NJQgTAEgUADQhDALhIAAQiJAAh6gmQh3glhohHIg+gfQgQgNgPgNQgUgTgUgTQgBgCgBgBQgCgBgBgCQgCgBgBgCQgCgBgBgBQgBgCgBgBIhahtQgDgDgCgEQgDgDgCgEIgohCQgEgHgEgHQgCgEgCgFIgSg/IgBgDQA/CYB+B+QA+A+BFAvQABABACABIgGgCQgLgIgMgJQg2gogzgzQh9h9g/iXQgEgLgEgKQADAJAEAJIgziwIgMgrQgBgCAAgCQAAgDAAgDQAAgDgBgDQgBgLgBgKQAAgMgBgLQgBgUAAgUQAAiBAihzQALgjAMgkQARgoASgnQAEgHAEgHQAthRBAhKAkIMyQB+AnCMAAQBYAABRgPQAHgBAGgBIgEABIg5AWQgGABgIABQgLABgLABQgIABgHABQgKAAgLABQgIAAgJABQgSAAgSAAQgCAAgDAAQgEAAgEAAIiSgNQgKgCgLgCQgGgBgGgBAC4NIQAhgHAggJQghAKgkAHAImKgQgEADgEAEQgEADgEADAHlLSQgHAFgGAEAGvLrIj3BdAGvLrIi2BNAjktJIBCgPIB6gNApzpUQAJgKAKgKQCfifDIg8QALgDAKgDApzpUQAFgGAGgGQCtiuDXg7AsGmDQAphUA9hKIAtgzAr+GfQgGgMgGgLAihNaQgEgBgFgBQgMgCgMgCIg/gfIgHgDAnaLLQBiBDBwAkgArMHvQgFgHgFgHAtQCWQABAGABAHQAPBLAbBGAtAjtQgdBuAAB6QAABPANBM");
	this.shape_52.setTransform(0.3,1.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AGcsUQAHADAHAEIBeA9IBWBJQAKAJAJAJQAIAIAHAIAGcsUQADABAEACQAEACADACAkts5QCMgxCfAAQFsAAECECQAYAZAWAZQgWgZgYgYQiiiijLg8Qh6gkiHAAQiiAAiMAzIADgDIAmgXQAIgCAIgDIAzgNICUgUQAZgBAZAAQAvAAAuAEQADABAEAAAJeqHQAJAJAKAJQAIAIAHAIIArAvIA1BGQADAFADAFQADAEADAEAgwt2QAZgBAZAAQAzAAAxAFIBcAOIDaBQAKao2IBuCeQABABABABIAoBWQAAACABABQAcBIAPBNIAIA0IAFAoQACAgABAhQAAAJAAAJQAAB8gdBwQgMAkgMAlQgSAogSApQg+B+hrBrIg7A2QgFAEgEAEQgIAGgIAGIgwAkQi+CDjtAPQgIABgIAAQgYABgXAAQgDAAgCAAQgDAAgDAAQgDAAgCAAQgCAAgBAAQgCAAgCAAIiLgOQgFgBgEAAQgNgDgMgCALgnwQAGAJAGAJIBGCFQARApAMAqQABABAAABIAOBcQADARADAQQAAABAAABIACARIANBUQAAANAAAOQAAAugEAtQgIBMgTBHQgCAFgBAFALoHXQgBADgCACQgCADgBADQADgFADgGIAthKAgCgFQAAgCACgCQAEAJgCAAQgCAAAAgCQgCgBAAgCgAsvFGQBBCeCDCEQA/A/BGAwQDWCTETAAQBZAABTgQQEAgvDCjDQAOgOAOgOQgOAOgOAPQjODOkSApQhGALhJAAQkjgBjfilQg4gpgzgzQiCiDhBidIgBgDIg2jPIgLgpQAAgCAAgCQAAgCAAgCQAAgFgBgFQAAgFAAgGQgBgVAAgVQAAiDAih2QgdBwAAB9QAAA/AIA9QADAXAFAYQAOBMAbBHQADAHACAGgAIxKsQgNALgMAJAKNJMIBJhZIAMgRAtQjyQAMgkAMgkQASgpASgoQA7h6BlhnQADgCADgDQABgCACgBIAWgOIACgBQgPAOgOAOQgYAYgWAYQAWgZAYgYQANgNAOgNQCGh9Cig6AkHtQQAEgBAFgCQAEgBADgBAkws2Qg7AVg3AeQheAzhTBNgAsUmLQADgHAEgHIBvieAsKGsQgFgKgFgJQgFgKgFgKIgQg8QgDgIgDgIAsKGsQgKgTgKgUAqCJkIgwg3QgMgPgLgOIgQgXQgFgGgEgHIgohAArZH5QgDgEgDgDQgBgDgCgDApcKJQgKgJgKgKQgJgJgJgJApcKJQgKgJgKgKQgJgJgJgJAikNqQgLgBgKgCQgGgCgHgBIi/hDIjXiY");
	this.shape_53.setTransform(0.3,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABxuCQA4AHA1ANQAGABAHACQABAAABAAQABABABAAQACAAABABQATAFAUAGQAQAGARAFQA6AWA2AdQBxA+BiBiQABABABABQACADADACQBABBAwBJQBDBkAkBxQACAIACAHQACAGACAFAjutoQAegIAfgHQBXgQBcAAQACAAACAAQABAAACAAQABAAACAAQABAAACAAQAkAAAkADQAFABAFAAQAIABAIAAABXuEQANABANABAN1iCQgWiZhIiFQg+hxhhhhQilimjQg9Qh7gkiKAAQjpgBi/BoQhwA+hiBhQgMANgMAMQAMgNAMgMQEGkHF0AAQFzAAEHEHQDSDSAqEYQABAEAAADQAIA5ABA8QABAEAAAFQAAADAAACQAAADAAADQAAB+geByIgVBBQgCAFgBAFQgDAFgCAFIggBIQgBACgBACQgBACgBACIgBACQACgFADgFANbkaQAEANAEANQAfBwACB7QAAAIAAAIQAAAvgFAuQgIBTgWBMANME4QgCAFgBAFQgDAFgCAFAgCgFQAAgCACgCQAEAJgCAAQgCAAAAgCQgCgBAAgCgAkdNOQCHAtCYAAQBcAABUgRQAfgFAfgIQguANgvAHQhGALhLAAQiUAAiEgrQhbgehTgyIhOgjQgIgGgIgGQgJgHgJgHQgIgIgJgHQgKgJgKgJQgSgQgRgRQgDgEgDgDQgBgBgCgBQgBgBgBgBQgBgCgBgBQgBgBgCgBQgBgCgBgBQgBgBgBgBQglgngggqIgUgcQgBgCgCgDQgigxgag0IgPg3IAAgDQBCCYB+CAQBBBABHAxQAYARAZAOIgGgDQgjgVgigZQg5gqg1g1Qh+h+hCiXQgGgPgGgQQAGAOAGAOIhBjyIgJglQAAgDAAgDQgBgFAAgFQAAgCAAgCQAAgCAAgCQAAgFAAgFQgBgJAAgIQAAgGAAgFQAAiFAjh4QgeByAAB/QAAA4AGA3QAEAgAGAfQAPBOAcBJAKkJLIgZAiQgJAKgKALQgPAOgPAOIgeAbQgJAHgJAIIg5AqQjbCWkYAAQgDAAgCAAQgDAAgDAAIiagNQgLgCgKgCQgGgBgGgCAKkJLQAsgxAjg1QAYgjAUgkgADwNdIF6jXQACgBABgCQACgBABgCQAGgGAHgGQAUgUATgVAKLJtQgJAKgKAKQgPAPgPAOAI8K5QgFAEgFAEQgEADgEAEAtgj2QAMglAMglQATgpASgqQA8h7BnhpQAAAAABgBIAFgFQACgBABgCQCkiiDKg/QADgBAEgBQAKgCAKgDAkJthQANgDAOgEAsjmTQAEgHADgHQA3hiBRhXArpIAQgggugagyQgCgFgDgFAinN7QgFgBgFgBQgLgCgMgDIhOgjIgHgDAm+MEQBNAuBUAcg");
	this.shape_54.setTransform(0.3,1.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ACDuQIDZA5QABAAABABQArARApAXQBzA+BjBkQABABACABQABABABABQABACABABQBCBDAxBKQBJBtAkB7QAlB+AACMQAAACAAACQAAACAAAAIgCBDQgCALgBALQAAAIgBAIAKXpqQgKgKgKgKQioiojTg/Qh+gliMAAQjuAAjCBqQgHAEgHADQDHhyD3AAQF6AAELENQAKAKAKAKIB2CXQANAVALAWQALAUAKAUQA3BzATCBQALBIAABLQAAAIAAAJIgcDaABMuWQAcADAbADABMuWQALACALABQARABAQACAjtt6IC+gdQACAAABAAQAOgBAPAAQAEAAAFAAQAFAAADAAQACAAABAAQACAAABAAQAAAAABAAIBDACAOSBDQgCATgCATIgZCCQgBAGgCAGQgBACAAADIgPAvQgFAOgFAPQgFALgFALIgKAXQgJATgIATQhBCDhvBvQgTATgUATIgXAUQgEADgEAEQgjAdglAYANyD3QgBACAAACQABgEABgFQAAACgBADgANiErQgFAOgFAPQgFALgFALAN1DrQgCAIgCAJAgCgGQAAgCACgBQAEAIgCAAQgCAAAAgBQgCgCAAgCgAqlJbQARASASASQBBBCBJAyQDeCYEcAAQBdAABWgQQARgDAQgEIgEACIg+AYQgDABgEAAQgGABgHABQgFAAgFABQggAEgiACQgbABgbAAQgGAAgGAAQgGAAgGAAQgCAAgCAAQgDAAgCAAIiIgOQgLgCgKgCQgGgBgGgBIhOgVQjLhAijijIhviFQgCgCgBgCQghgwgagyIhCixQgchvAAh7QAAiIAjh6QANglAMgmQASgqATgqQATgnAXglQABgBABgBIAcgkIACgEQgDAFgEAFQADgDACgDADSN2QgeAGgeAFQhIALhMAAQkuAAjnisQg6grg2g2QgRgRgRgTAHjMFICliFQABAAAAgBIByiIQAEgGAEgHQgBACgBACQgDAFgDAEAJFLHQglAfgmAaQgCABgDACIgrARIgCABQANgIAOgIQgMAIgNAHQh0BEiEAeAMDHqIAIgLQAVghATgjADWN0QCBgdBxhCgAqdpxQANgNANgOQCoioDUg/QANgEANgDArOoxIACgDQACgCACgCIBAhGIDIibArdoeQAFgGAFgHIAFgGQgIAJgHAKIgLAOAqdpxQAJgJAJgJQC4i5Dmg+ArMo0IAvg9AsymaQAEgHAEgHQAbgxAggtAirOLQgEgBgFgBQgMgCgMgCAtwj7QgeB1AACAQAABcAQBWQAPBQAdBKQA6CWBzB/Ar3IIQghgvgagxQgBgDgCgD");
	this.shape_55.setTransform(0.3,1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AB3uiICqAkQBPAZBKAoQACABACABIDWCjIB2CNQADAFADAFQAFAGAEAHAEytpIDvB/QABABABABQABABABABQABABACABQABABACABQABABACABQAyAnAvAvICjDWQABACABACIBeEPQABAKACAJQABAIABAHIAIBuQAAAFAAAEQAAADAAACQAAADAAAEQAAACAAABQAABPgLBJQgGAugLArIgBADQAAABAAABQgBACAAABQgNAngNAnIghBKQgCAFgDAGQgCAEgCAEQACgEACgEQgGAMgGAMIgCADQAFgKAFgJQgEAIgEAIAEytpQgTgGgSgFQiAgmiPAAQgPAAgPAAQAPgBAPAAQCkAACQAygAj8uHID2giQAFAAADAAQACAAACAAQABAAACAAIBFADQALABALABQAJABAKABABOumQAUACAVACAMKoLQAHALAIAMIBiDRIACAHQACAHACAHIAgC2QABACAAABQABAMAAALQACAcAAAcQAAACAAACQAAACAAAAIgDBFQgCAVgCAWAN9kcQABAEABAEQABADABADAOXh/QgDgRgCgRAOiBFQgBALgBALQgBALgBAKIgKAvAODD4QgBADAAACANGGYQgCAGgDAFAgCgGQAAgCACgBQAEAIgCAAQgCAAAAgBQgCgCAAgCgAqeJ7QAIAIAIAIQBDBDBJAyQDiCcEiAAQBfAABYgRQAQgDAPgDQgfAHggAFQhJALhOAAQkzAAjsivQg7grg2g3QgIgIgIgIgAKqJ1IgbAkQgCACgCACQgBABAAAAQgCACgBABQggAfggAbQghAbgjAYQjjCckiAAQgGAAgGAAQgGAAgFAAQgDgBgDAAIiPgOQgLgCgLgCQgDAAgDgBIgugLQjng9i0i1QgCgBgBgCQhBhBgxhIQgggtgZgxQgfg9gWhAQgLgigIgiQgbhuAAh5QAAiKAkh8QANgmAMgnQATgrATgqQAEgIAEgHQAEgIAFgHIBGhoQATgaAWgYQAEgFAEgEQACgCABgCQALgLAKgLQACgCACgCQAFgFAFgFQBlhlB0hAIGahrADYOFIGijgQANgNANgNQALgLALgLQA5g9AshBQATgcARgdIiJC3AqkqCQALgLALgLQCrirDXhAQAIgCAIgCAqkqCQAHgGAGgGQC3i5DkhAAtBmhQAohRA5hJIA8hHAiuObQgFAAgEgBQgKgCgJgCAuAj/QgfB2AACDQAABeARBXQAPBRAdBMQACAEACAFIARAoICvD+");
	this.shape_56.setTransform(0.3,1.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABPu3QDKAPCqBcQALAGALAHIDHCbIB5CSQACAEADADQAHALAHAKIBNCaQAMAhAKAhQAAABABABIAlDkQAAAIAAAJQAAAFAAAFQABAJAAAKQAAACAAACIgEBTQgBAMgBALAkEuWIDKgiQAQgBAQAAQABAAACAAQACAAACAAQAGAAAGgBQAFAAAFAAQABAAACAAQACABABgBIBGADQAMABALABQDKAUCpBiAEguBQgHgBgHgDQiCgmiSAAQi3AAieA8QgHADgHADQAIgDAHgDIAqgbQAUgGAUgGAEguBIF7DrICkDXQBOCMAYCiQABAHABAHIAFApQADApABAqQAAAHAAAHQAACFgfB5QgNAngNAnQgTAsgTAsQhDCHhzByIg3A0QgJAIgJAIQgoAggpAcAOniDQgXimhNiPQgDgDgBgEAMZoSQAKAOAJAOAOyBRQgBAGAAAFQgBAGAAAGIgFAkQgJA+gRA7AMnHxIAohEQABgBABgBAgCgGQAAgCACgCQAFAJgCAAQgDAAAAgCQgCgBAAgCgACPOjIg4AUQgJAAgIABQgIABgJAAQgcACgbAAQgDAAgDAAQgCgBgDABQgDgBgCABQgEgBgEAAIiZgPQgKgCgKgBQgFgCgFAAIhDghIgCgBQCEAoCVAAQBKAABHgKQAUgDAUgEQCYgcCEhNQAGgDAGgEICah0QACgCACgBQABgCACgBQAOgNANgNIBwiEQAMgRALgRQgFAHgFAIQgHAJgGAKAHZMyQiSBVirAbQgHAAgGABQhEAKhIAAQiTAAiEgoQiIgph2hTIhDghQgGgFgGgEQgfgcgfgfQgCgBgBgBQgBgCgCgBQgDgEgDgDIhoh9QgDgEgDgEIgvhOQgEgHgEgHQgFgLgGgLIgPhBICCDfQABACACABQABACABACQACABABACQABABABABQAAABABABQACABABACQABACACACQACABABACQACACABACQACABABACQACACABACQAHAIAHAIQABABABABQACACACABQABACACACQAHAIAIAIQACACACACQACACACACQACACABACQADACACACQAFAFAFAEQABACACACQADADAEADIBSBGQAIAFAHAGIAOAKQAEACADADQBzBOCCAoIj8h7ACUOiIgFABAJkLYQgqAkgtAgQgGAEgGAEIgoAOIgBAAIlEBwAHkMrQgGAEgFADAuQkEQANgnANgnQATgsATgrQAFgIAEgHQADgGAEgGIB+itQABgCACgBIAXghQACgCADgDQABgBABgCIAEgEQACgBABgCIAagQAksuKQAOgEANgFQAHgBAGgCAlXtvIABAAQCdg9C3AAQCZAACJArAlltpIhcArQgCACgCAAIgkAVQgWAOgVAPQgNAIgMAJQgCACgBABQgOAKgOALQgaAWgaAXAq/p0QABgBABgCQADgDADgEQACgBABgCQADgCACgCQACgCACgDQACgBACgCQAEgEAEgFQAQgPAPgPIEpi7AtQmpICRjLAsTIbQgCgCgBgCQgBgCgCgCAogL/QgDgCgDgCQgEgEgFgDAizOrQgEAAgEgBQgLgCgLgCAurBSIgJgiQAAgCAAgCQAAgCAAgDQgBgQAAgQQAAiNAlh+QgfB4AACGQAAAsAEAsQAEAxAJAvQAPBTAeBNQABAEACAEIAEAGgAtIHFQgKgSgJgS");
	this.shape_57.setTransform(0.3,1.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AHMtZIC9CIQASAQARARIB5CSQAEAFADAGQAFAHAFAHIA5BoIAtB1QAEAMADAMABRvHQDMAPCtBeQABAAABABAESuWQAHADAHACQgFgCgEgBQgDgBgCgBgAEguRIBCAXQCyBGCTCTQBoBpBCB5IBhEYQACAKACAKQACAOABAOIAHBXQAAAMABAMQgBADABADQgBABABABQAAAEAAAEQAACFggB6QAAABAAACQgNAngNApQgUAsgUAsQhDCKh1B1QgFAEgEAEQgQAPgPAPQgSAPgRAPQgcAWgbAUIgKAHQgGAEgFAEAtemwQAEgIAEgHQAEgIAEgHICcjMQAEgDADgEQBphpB5hCQChhYC+gTQACAAACAAQABAAACgBQACAAACAAQACAAACAAQACAAACAAQADgBADAAQACAAACAAQABAAABAAQABAAABAAQACgBACAAQACAAACAAQACAAABAAQABAAABAAQADAAACAAQABAAAAAAQADgBACAAQAFAAAEAAQAFAAAGAAQADAAAEgBQABABABgBQACABABgBQAHAAAIAAQAKAAAMABQAVAAAVACQAEAAAFAAQAEAAAEAAIDDAjAkGunID2gjQAFAAAFAAQADAAADAAQABAAACAAQABAAACAAQACAAABAAIBIADQALABAMABQDBASCjBaAOckoQABAFACAFQACAHACAHIAjDjQgBABABABQAAASAAATQAAACAAACQAAABAAABQAAACAAABQAAABAAACIgFBWQAAABAAACQgIBUgWBPQgBABAAABQAAABgBACAO5h3QgDgYgEgYAMloeQAJAMAIANAM0H7QgFAHgEAHQgDAFgEAFQAIgMAIgMIArhJAgCgGQAAgCACgBQAFAIgCAAQgDAAAAgBQgCgCAAgCgAopMNIAVAPQDqChEtAAQAFAAAGAAQADAAACAAQAFAAAEAAIBpgJIAPgBADfOlQggAIggAFQgGAAgFABQAWgDAWgEQAPgDAQgEIDRhKQAfgPAdgSQBmg9BahaIB4iQACFO0Ig7AUQgmADgmAAQhhAAhbgQQgGgCgHgBQkQg2jQjRQg8g9gwhBQgGgKgHgJQgggvgagyQhVilgPjBQgBgSgBgTQgBgWAAgWQAAiQAliAQANgoANgnQAUgtAUgsQAfhAAqg8IBKhcQASgUATgUQCxiwDghDQAIgCAHgCAIbMmQgCACgDACQgDACgDACIgkAMIlnB6ArLqIQAOgPAOgPQC+i+DrhDAopMNQgEgCgDgDQg9gtg5g4QgIgJgJgJQAJAIAIAJQA8A8BBAvgAugkIQggB7AACHQAABhARBbQAQBUAeBOQAGAPAHAPIC9Eb");
	this.shape_58.setTransform(0.3,1.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("Attm4QBFiMB3h3QEekgGWAAQGWAAEfEgQEfEfAAGWQAACRgmCDIgbBRIgoBaQhFCMh3B3QkfEgmVAAQmWAAkfkgQkfkfAAmWQAAiRAmiDIAbhRIAohaQBFiEBxhxQEfkfGWAAQGVAAEfEfQEfEfAAGVQAACKggB9ANuG5QhFCEhxBxQkfEfmWAAQmWAAkekfQkfkfAAmVQAAiKAgh9AAIgGQAAACgCABQgBACgCAAQgDAAAAgCQgCgBAAgCQAAgCACgCQAAgBADAAQACAAABABQACACAAACg");
	this.shape_59.setTransform(0.3,1.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AgUgDQAAgBAAgBQAAAAAAgBQABgBAAgBQACgDACgDQAHgHAIAAQABAAABAAQAAAAABABIAAAAQACAAACABQAFABADAEIAAAAQABABACABQADAFABAGIAAABAAWABQgBgCgDgCQgBgCgDgBQgEgDgFgBQgDgBgCAAQgGAAgFABQgCAAgDACQgCABgBAAQACgCABgDQAEgFAEgCQADgBAEAAQAFgBAEACQACABACACQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQACACACADIABABQAAABAAAAQABADAAACQAAACABAAQAAAAAAABIAAAAQAAADgBABQAAABAAABQgBABAAAAQAAABAAAAQgBAAAAABQABgBAAAAQgBADgDACQgBABAAABQgBAAAAAAQgEAEgGABIgDABQgCAAgCgBIgBAAQgFgBgFgEQgBgCgCgBQAAgBgBgBAANgQQABABABABQACACACADAAHgTQADABACACAAVAEQAAABAAABQgBABAAABQAAABAAAAAAWABQgBACAAABQAAAAAAAAAAWABQgBABAAACAAQAOQgBABgBAAQgEAFgHABQgCAAgBAAQgHAAgFgEQgCgCgBgBQgDgEgCgEQAAgCAAgBQgBgCAAgBIAAAAQABgBAAgCQAAABAAABQAAAAABABQACADAFAEQACABACABQAFACAGABQACAAABABQAHAAAEgCQABAAABgBQgBABAAABQgBABgBABIAAAAQgBABAAABQgBAAgBABQgEADgFABAATAKQgBACgCACAAUgHQABADABADAgEAVQgFgBgEgEQgDgCgCgDQgBgCgBgD");
	this.shape_60.setTransform(0.5,0.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AgTgfQAJgGAKAAQACAAACAAQALABAKAIQAAAAAAAAQABABAAAAQADADADADQAFAJABALIAAAAQAAABAAAAQAAAAAAABIAAABAgDgkQACgBABAAAgDgkQABgBABAAQABAAAAAAQADAAADABQAAAAAAAAQADAAACABQACABACABQACAAABABQAFACAEAEQADADACAEAAmABQgBgGgEgGQgDgEgEgDQgHgGgJgCQgFgBgFAAQgKgBgJADQgEACgEADQgEADgCACQACgFADgEQAHgHAHgDQABAAABgBQACAAACgBQADAAACAAAALgjQAEABADACQAEABADADAAagbQADAEADAEQACADACAEQABACAAADQAAABABACQAAACAAACAAmgEQAAABAAACAAmADQAAADgBACQAAABAAAAQAAAAAAAAQABgDAAgDQAAAAAAgBQAAADgBADIAAABQAAAAAAABQAAABAAAAQgBABAAABIAAAAQAAAAAAABIgBAAQAAABAAABQgBAAAAABQAAAAAAABQAAgBABgBQgDAGgEAEQgDADgDACQgKAHgLAAIgDAAQgCAAgCAAQgDgBgDgBQgHgCgGgGQgFgEgCgFQgBgCAAgBQgBgCgBgCQgCgEAAgFQAAgBAAgCIAAAAQAAgBAAgCQAAgBAAgBQAAACAAACQABABABADQADAJAIAGQADADADACQAKAFALABQADAAAEAAQALAAAIgGQACgCACgDQAAAAABAAQgBABgBABQAAABAAAAQgCADgCACQgBAAAAAAQAAABgBAAQgJAJgLABQgDABgDAAQgNgBgJgHQgDgCgCgCQgDgDgCgEAAlALQgBABAAABAAjAOQgBABAAACQAAABgBAAQgBABAAABQgCADgCADAAlAJQAAABAAABAAbAaQgBACgCABQgBABgBABAglgFQABgBAAgBQAAgBAAgBIAAAAQAAgBABgCQAAgBABgCQADgGAFgFQACgCADgCIACgBQADgCACgBQADgBADgBAgMAkQgHgCgGgGQgDgDgCgDQgGgIgBgLAgCAmQgCAAgCAAQgDgBgDgB");
	this.shape_61.setTransform(0.5,0.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AAmgnQAAABABAAQAHAIAEAJQABACAAABIACAGQAAACABADQABAEAAADQAAAAAAABQgBgLgHgJQgEgGgFgFQgLgJgMgDQgIgCgHAAQgOgBgMAFQgHADgGAFQgFAFgEAEQAEgGAFgHQADgCACgDQAGgFAHgDQACgBACgBQAIgCAIgBIAAAAQABAAAAAAIAMACQAGABAGACQADACACABIABABQADACAEADQAAABABAAQAEAEADAFQAJANABAQQAAABAAAAAgBg2IAAAAQABAAAAAAAgUgyQAKgEAKAAQADAAACAAQAOABAKAHAAMg0QAOADALAJAA3ACQAAABAAABQgBAGgBAEQgBACAAACQgBADgBACQgEAIgHAGQgBACgBABQgBABgBABQgIAHgKADIgQADIgGgBQgCAAgCAAQgBAAgBAAQgOgEgLgLQgHgGgEgHQgCgEgCgEQAAgCgBgBIgCgMQAAgBAAgCIAAAAQAAgGACgHIAAgBQABgCABgCQABgCABgDQAEgIAGgHQABAAABgBIACgCAA3ABIAAAAQAAABAAAAQAAAGgCAFQAAACgBAAQAAACgBACQgBADgBACQgBABAAABQABgBABgCQgEAIgHAHQgBABgBABQgDADgDACQgGAFgIACAAwAaQgCACgBACQgDAEgEAFQgNAMgRADQgEAAgEAAQgSAAgNgKQgEgEgDgDQgIgJgFgKAg1gIQAAADAAADQABADABAFQAEANAMALQAEADAFADQANAIAQABQAFAAAFAAQAQgBALgKQAEgDAEgFAA1gMQABAFABAGAgVgxIABgBQAJgDAKgBAg0gNQgBADAAACAgLA2QgPgEgLgLQgEgEgDgEQgEgGgDgHAgFA2QgCAAgCAAQgBAAgBAAAg2AAQABgEAAgE");
	this.shape_62.setTransform(0.5,0.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("Ag/geQAFgLAIgIQAWgWAcAAQAEAAADAAQATACAOALIAIAGQAAABABAAQAAAAABABQAFAFAEAGQAMARAAAVQAAABAAAAQAAADAAADQgBAHgBAGQgBACgBACQAAABAAABQgBACAAABQgBABgBACQAAABAAAAQgBABAAABQgFAIgHAHQgBACgCACQgCABgBABQgBABgBABQgBABAAAAQgBABgBAAQgRAMgWABIgIgBQgDAAgCgBQgDAAgCAAQgRgFgOgOQgJgHgFgKQgCgFgCgFQgBgCgBgDIgCgQQAAgBAAgCQAAAAAAAAQAAgJACgIIAAgBQABgDABgDQACgDABgDQAFgKAJgJQAFgGAHgEIAHgEQAEgCAFgCQAJgDALAAQASgBAPAIQAEACAEADABHAAQgBgOgIgNQgFgIgIgHQgNgLgRgFQgJgDgKAAQgTAAgPAHQgJAEgHAHQgIAGgFAHQAFgJAIgJQAGgGAHgFABFgQQABAEAAADQABAFAAAEAA/ghIACAGQABACABADIACAGQACAHAAAIAAygyQAHAIAGAJAgeg/QAOgHAQAAQAdAAAVAVQAIAHAFAJABHAHIAAgHABGAOQgBACAAACQgBABAAABQAAACgBABQAAABAAAAQgBACAAACABGAMIAAACABHAHQgBAEAAADABGAMQAAgCABgDAA7AnQACgCACgDQAAgBABgCQgEAKgJAJQgBACgCABAhFgLQgBAFABAEQAAAFACAGQAEASAQAPQAGAEAFAEQASALAVABQAHAAAHgBQAUgCAPgNQAEgDADgEQgEAGgFAFQgRARgWADQgGAAgFAAQgXAAgSgNQgFgEgDgEQgMgMgFgNABHAAQAAAGgBAGAhEgRQgBADAAADAgRBGQgSgFgNgOQgGgFgEgFQgHgKgDgMAgHBHQgDAAgDgBQgCAAgCAAAhGAAQAAgFABgG");
	this.shape_63.setTransform(0.5,0.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABXABQAAgTgLgRQgGgKgJgIQgQgPgVgGQgMgDgMAAQgXAAgTAIQgLAFgJAJQgJAIgGAIQAEgIAGgHIAEgFQAAAAABAAQAAgBABAAQAPgQAUgHQAMgEANAAQAWAAATAJQAFADAFADIAKAIQAAAAAAABQABAAAAABQAHAGAFAIQAOAUABAaIAAACQAAAEgBAEQAAAIgCAIQgBADgCAEQgBADgCAEQAAABAAAAQgBACgBABQABgBABgCQgGAMgKAKQgEAEgEADQgIAHgJAFIgFABIgYAFIgIACIgIAAQgEgBgEAAQgagFgTgTQgHgGgFgHQgCgDgCgDIgBgCQgDgGgCgGQgEgNgBgOQAAgBAAgCQAAAAAAAAQAAgJACgJIABgFQACgDABgEQABgDACgEQAAAAABgBQAAAAAAgBAhMgqQAGgKAJgJQAagaAjAAQAFAAAEAAQAXACASANAA8hAQAAABABABQAQAPAGAUQAEAMABANAg9g8QAagaAjAAQAkAAAaAaQAVAUADAcQABAHAAAGIAAAGABWATIgBABQAAACAAABQABgEABgFQgBADAAACgABXAOIAAgBABVAXQAAABgBABQgBADgBADQgCAEgBAEABXAIQAAACAAADQAAgDAAgDQAAAGgBAGABNAqIgCAEQgBABgBABQgFAHgHAHQgMAMgQAHQgJADgKACQgDAAgCAAQgFABgEAAQgdgBgWgQQgFgEgFgGQgOgNgHgRAhWgNQAAAFAAAGQABAHACAHQAFAYAUARQAGAGAHAFQAWAOAaABQAIAAAJgBQAZgDATgRQAFgFAEgFAA/A9QgHAHgHAFQgFADgGAEABNAqQgGAKgIAJAhOglQAAAAAAAAIACgFQAEgGAFgGAhVgSQAAACgBADAgHBYQgFgBgFgBQgYgEgTgTQgJgJgHgKAhXAAQABgHAAgG");
	this.shape_64.setTransform(0.5,0.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AA+hUQAFAFAFAEQADADACACQAGAGAEAHQARAYAAAgAA+hUQAGAFAFAFQACACACACQAPARAHAVQAFAPAAAQQAAAAAAABQAAAFAAAFQgBAEgBAFIAAADQAAABAAAAQAAABgBAAQAAACAAABQAAABgBABQgBAEgCAFQgBAEgCAEQAAAAgBABQgBACgBACQABgCACgDQgHAPgNAMQgEAFgEADAAFhoQAXACATAKQAIADAHAFAgYhlIAWgDQABAAAAAAIAGAAQADAAADABQAdACAWARABoACQgBgYgMgUQgHgMgMgLQgTgSgYgGQgOgFgPAAQgbAAgXALQgMAGgMAKQgLAKgHAMQAEgJAGgIQAEgFAFgFQAfgeAqAAQArAAAeAeQAZAZAFAhQABAIAAAIIAAAAQAAAJgCAIABoAKQgBAJgCAJQgCAEgBAFQAAAAgBABABaA0IABgBQgGALgLALQgEAFgEADQgBABAAAAQgDACgEADQgZARggABIgKgBQgGAAgFgBQgIgCgGgCABaA0QgBACgCADQgGAJgIAHQgYAZghAEQgIABgIAAQgWAAgTgIQgKgFgJgHQgCgBgCgCIgIgFQgMgMgHgOQgEgGgCgHQgCgEgBgEIgDgYIAAgBQAAgBAAgBQAAgBAAAAQAAgNADgMIAAgCQACgEABgFQACgEACgFQAFgJAGgIQAEgFAEgEQATgUAYgIQAEgBADgBAhmgOQAAAGAAAGQAAAJACAJQAHAcAXAVQAIAHAIAGQAZAQAfABQALAAAKgBQAegEAWgUQAJgJAGgJAhkgZQgBAEgBAFIAAACAhdgtQAHgPANgMQAWgWAbgHAhIBLQgIgHgFgJQgLgOgEgRAhABQQgFgEgEgEQgQgQgIgUAgJBoQgFAAgFgBQgIgBgHgDIgHgEIgXgPAhnAAQAAgHABgH");
	this.shape_65.setTransform(0.5,0.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AA4hsQAGAEAHAFQAFADAEAEQABAAAAABQADACACACQABABAAAAQAWAWAIAbQAEANACANAgTh3IARgCQABABABgBIAGABQADAAAEAAQAXACAUAKAB5ACQgBgdgOgXQgIgPgNgMQgXgVgcgIQgQgEgSAAQgfgBgaANQgPAHgNAMQgOAMgIAOQAFgIAFgIIAMgOQAAAAABgBQAVgWAcgIQAHgDAJgCAhUhUQAjgjAxAAQAyAAAjAjQAdAdAFAmQACAKAAAJIAAAAQgBAHAAAHIgBAFQAAAAAAAAIgBAHQAAgDABgEAAGh4QAbABAXALABVhWQAKAJAHAKQAQAZADAfIAAAKQAAAAAAABIAAAEIAAACQAAACAAADQgBAKgDAJQAAgBABgBAB5AGQgBAFAAAFAB1AgIAAAAQgBABAAABQgBAFgCAFQgCAEgCAFQAAABAAAAQgEAGgEAGQgBAAAAABQAEgFADgEQABgDABgBQgIARgPAOQgEAEgEADQgFAFgFAEQgIAFgHAEIgGABIgkAIIgKADIgOgBQgFgBgEAAQgjgHgbgaQgGgHgFgHAB1AgQAAAAAAABQgCAFgBAFQgBAAAAABQgCAFgCAFQgBACgBACQgIAOgNANQgEAEgEADQgBABgBACQgLAJgMAGAB1AeQAAABAAABAh3AAQABAJADAKQAGAhAbAZQAJAIAKAHQAeATAkABQAMAAAMgCQAjgFAZgYQAHgHAGgHQgHAKgIAIQgRARgVAJQgNAFgOADQgFAAgEAAQgGABgFAAQgnAAgegXQgJgGgGgHQgTgTgKgXIgHgmIAAgCQAAgBAAAAQAAgRAFgQQABgFACgFQADgFABgGQAJgRAOgOQAdgdAlgGAhzggQgCAGgBAFIAAAFQgBAHAAAHQABABgBABQAAgIABgIAhsg1QAFgIAGgIAgNB5QgFgBgFgBQgigGgagaQgHgHgFgHIgIgKQgBgDgCgDQgDgGgDgGIgBgDAhnA/QgFgJgEgJ");
	this.shape_66.setTransform(0.5,0.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("Ah6g7QAJgUAQgQQAqgqA4AAQAHAAAHABQAfACAaARABRhvQAIAGAIAIQAEAEAEAEIAGAIQANATAHAVQACAGACAHABRhvQAIAGAHAHQAFAEAEAFACJACQgBgggPgcQgKgQgPgOQgZgYgggJQgTgFgUAAQgkgBgdAPQgRAIgPAOQgPAOgJAPQACgEACgEIAKgPQAFgFAFgGQAZgZAggKQATgGAVgBQAiAAAeAPQAEACAEADIAJAGABvhRQACADACADQAPAVAFAaIABAIQABAJABAKQAAAAAAABIgBAFQAAAEAAAEQgBANgDAMQgCAFgCAGQAAAAAAABQgDAFgCAGQgBAAAAABQgBACgBACAhrhUQAFgFAGgGQAogoA4AAQA5AAAoAoQAgAhAHArQABALAAAKIAAAJQgBAHgBAHIAAACQgBACAAADQABgGABgGQAAADgBACACIAUQABgEAAgFACJAFQAAAIgBAHACGAgIgBAFQgBABAAABQgBAFgCAGAB2BHQgBACgCACQgIAMgKAKQgVAUgZAKQgOAGgPACQgBAAgBAAQgKACgKAAQgsgBgjgaQgJgGgIgJQgWgVgKgaIgJgsIAAgBQAAgBAAgBQAAgTAGgSQgCAIgBAIIgBAEQAAAHAAAIQAAAAAAABQAAALADALQAIAmAeAdQAKAJALAIQAiAWAqABQAOAAANgCQAogGAdgcQAMgMAJgOIgCAEQgIAOgMAMQgDADgDADQgDACgCADQgMAKgOAHAB4BDIABgBQABgCACgDQgKAUgQAQQgDADgDADQgIAGgHAGQgIAFgIAFIgKACIgfAIIgMADQgBAAgBAAQgDAAgCAAIgSgBQgEAAgEgBQgogHgegeQgKgKgIgLQgJgNgGgOIAAgDAh6g7QACgFADgFAiDgkQABgGACgFQADgGADgGAgRCJQgFAAgFgBQgngIgdgdQgQgQgKgSQgEgHgDgHAiHAAQgBgIABgI");
	this.shape_67.setTransform(0.5,0.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiIhFQAKgVARgRQAvgvA/AAQAIAAAHABQAkADAeATIAKAHQAIAGAIAIQAAAAABABQACADADADIAIAJQAEAFADAEQAQAYAGAbIABAIQACAMAAANQAAAAAAABIAAAFQAAAFAAAFQgCAKgCAKQAAABAAACQgBABAAABQAAABAAABQgBAAAAABQgCAGgCAHQgDAGgDAHQgBABAAACAh5hcQAGgHAGgIQAdgdAjgLQAVgGAYgBQAnAAAgARQAFADAGADACZgKQgDgegPgaQgLgSgQgPQgdgcgjgKQgVgGgXAAQgogBghARQgTAJgRAQQgPAPgLAQQAAABgBABQAEgHAEgHIAHgJQAGgHAHgIQAtgtA/AAQBAAAAtAtQAkAlAHAwQABAGAAAGgAB6heQARAWAIAZQACAHACAGACZAVQAAgDAAgDQgBAIgBAJIAAABQgBABAAABACaAFQAAAIgBAIIgBAGQgBACAAADACWAmQgBACAAACQgCAHgCAGQgDAHgDAHQgBABgBACACIBJQgDAFgDAEQAAABgBABQgJANgLALQgkAkgwAHQgMACgNAAQgyAAgngdQgKgIgJgJQgYgYgMgdIgCgFQgGgVgBgYIAAgBQAAgBAAgBQAAgVAGgVQgCAJgCAJIAAAFQgBAIAAAJQAAAAAAABQABAMADAOQAIAqAjAhQALAKAMAJQAmAZAvAAQAPAAAPgCQAtgHAhgfQAOgPALgRQAAgBABAAAB+BZQgHAKgKAKQgEAEgEADIgEAFQgGAEgFAEQglAagwAAIgWgBQgFgBgEgBQgsgIghghQgEgFgEgFIgIgIQgHgKgGgKQgDgGgCgGIgDgHAB+BZQgHALgKAJQgEAEgEADACCBSIgEAHACZAPIAAgZAiJhCQAAgBAAAAQAAgBABgBAiHhHQAEgGADgGAiTgpQACgGACgGQADgHADgGQABgCABgDAh7BdQgCgDgCgCQgIgNgGgOAgVCaQgEgBgDAAQgtgIgigiQgEgFgEgFAiYAAQAAgJABgJ");
	this.shape_68.setTransform(0.5,0.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiYhLQALgYAUgUQA0g0BFAAQAJAAAJABQA7AGArArQANANAKAOQAUAeAGAlIACAaQAAAAAAABQAAAEgBAFQAAAHgBAHIgCAKQAAAEgCAEQAAACAAACQgBABAAABQgDAHgCAHIgDAIQgCADgBAEQgBACgCADQACgCABgDQgMAYgUAVQgIAIgJAHIgDACQgBAAAAABQgDABgCACQgqAdg1ABQAAAAAAAAQgBAAgBAAQgBAAgBAAIgVgCQgEgBgDAAQgygJglgmQgMgMgKgNQgLgRgHgSAiNheQAJgNAMgMQAfgfAngNQAXgHAbAAQArgBAkAUQAVALATASQAfAfANAoQAEALACANACpgLQgDgigRgcQgMgVgSgSQgfgegogLQgXgHgaAAQgsAAgkASQgVALgTASQgSARgMAUQAFgJAFgJQAKgNALgLQAygyBGAAQBGAAAyAyQAoAoAIA1QABAHAAAHIABANQAAABAAABIgFAlACqAJQAAAEAAADQgBAEAAADACnAhQgBAHgCAHQgCAGgCAHQAAABgBAAAijguQgGAVAAAXQABAPADAPQAKAwAmAkQAMAMAOAJQAqAcAzABQASAAAQgDQAxgIAlgjQANgNAKgOQgBACgBACQgKAOgNANQgoAng1AIQgNACgOAAQg4AAgrggQgLgJgJgKQgbgagNggIgLg6QAAAAAAgBQAAgYAHgXQACgGACgHQADgHADgIQABgBABgBACcBFQgCADgCAEQgDAHgEAGQADgEACgEQgLAVgSASQgHAHgHAGQgCABgBACAiZhKQABAAAAgBQAFgKAGgJAgZCqQgFgBgEgBQgwgJglglQgUgTgMgXQgEgJgEgJIAAgC");
	this.shape_69.setTransform(0.5,0.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AB4iQQAFAFAGAGQAHAGAFAHQACACACACQAFAGAFAHQAaAnAEAwQAAAHAAAIQAAAAAAABQAAAJgBAJQgBAKgCAKQAAABgBACQABgEABgEQgBACAAADQgBADAAAEQgBADgBACQAAABAAAAQgBADgBAEQgBAEgCAEQAAABAAAAIgDAGQgCAGgDAFQgFAJgGAJQgCADgCADQAHgKAGgJQABgDACgCQgNAagXAXQgEAEgFAEIgDADQgBABgCABIgIAHQgCABgDACQgGAEgFAEIgIACQgaANgdAEQgIACgJAAQgHABgGAAQg9gBgvgjQgMgJgLgLQgdgdgQgjQgKgeAAghQAAgBAAgBQAAgaAHgZQgGAXAAAZQAAARAEARQALA0ApAoQAOANAPAKQAtAeA5ABQATAAASgDQA2gIApgnQAKgKAIgKQgJAMgMALQgVAWgZANIhIATIgLADQgBAAgBAAQAAAAAAAAQgCAAgBAAQgBAAgBAAQgCAAgBAAQgOgBgNgCQgBAAgCAAQg0gLgpgoQgKgKgIgKQgKgNgHgNQgCgEgBgDQgCgDgBgEQgCgEgCgEAB4iQQAFAFAGAFQAGAHAGAHAinhSQANgaAWgWQA4g5BMAAQAKAAAJABQA5AFAsAlAiUhwQAHgJAJgJQAigjArgNQAagIAdgBQAvAAAoAVQARAJAQANAC5gMQgDgmgSgfQgNgXgVgTQgighgrgNQgagHgcAAQgwgBgoAVQgXAMgVATQgUATgNAWQACgDABgDACTh0QAWAcAJAgQAHATACAVAiUhwQAIgJAIgJQA3g2BNAAQBNAAA2A2QAsAsAJA7QABAHAAAIQABAHAAAHIAAABQAAAJgBAIQAAAHgBAGAC2AtQgBAEgBADQgBADgBADQgCAEgBAFAC0AyQABgFABgEAC6ASQgBAOgDANACsBJQgCAFgCAFQgCADgBADQgNAXgUAUQgEAFgFAEABtCZQgIAGgIAFAinhSQABgBAAgBAizgyQACgIADgHQADgIAEgIQAAgBAAAAQACgEACgEIACgDQAGgJAHgKAiVByQgDgEgDgEQgIgMgGgN");
	this.shape_70.setTransform(0.5,0.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABriuQATAMAQAQQABABAAAAQAIAIAHAIQAHAIAGAJQAYAkAHAsQACAPAAAPQAAABAAAAQAAAJgBAJQAAABAAABQgBAOgEANQgBAFgBAFQgCAGgCAGQgBACgBADQgBAEgCADQgCAGgDAEQAAABAAABIAAABQgDADgCAEQABgCABgBQACgDABgDQgOAdgYAZQgFAFgGAEQgJAJgLAHQgMAJgOAGIgMADIg7AOIgQADQAAAAgBAAQgCAAgBAAQgBAAgBAAQgMAAgMgCQgEgBgFAAQgBgBgBAAQgrgJgjgaQgMgJgLgLQgYgXgPgcQgFgKgEgLQgNghAAgnQAAAAAAgBQAAgdAIgbQgHAZAAAcQABASAEATQALA5AuAsQAOAOARAKQAxAiA+ABQAVAAATgDQA7gKAsgqQALgLAJgLQADgEACgEQADgDACgDQABgCABgCAi0hcQAOgbAWgXQA9g+BTAAQALAAAKABQAwAEAmAZAieh+QAHgIAHgIQAlgmAvgOQAcgJAggBQAzAAAsAXQAGADAGAEADKgNQgEgpgUgjQgOgZgWgVQglgkgwgOQgbgIgfAAQg1gBgrAXQgZANgWAVQgVAUgNAWQgBACgBABQAEgHAEgGIACgEQAGgIAGgJQAHgIAHgIQA8g7BUAAQBTAAA8A7QAwAwAJBAQACAIAAAJQAAAIAAAHIAAAAQAAAVgDAUQgCAHgCAGQgBAGgCAGQgBACgBACQgBAEgCAEQgDAGgCAGACeiBQAZAfALAkQAFAPADAPAC2BdQgBACgCACQgNAZgWAWQgFAFgGAFQgCADgEADQgSAPgWAKABLC8QgUAIgXAEQgIABgIABQgIAAgIAAQhDAAgzgmQgNgKgMgMQgfgggPgnAClB2QgKANgMAMQgeAegmAPADGAuQgBAFgBAEQACgGABgGAi2hZQAAAAAAgBQABgBABgBAjDg3QACgIADgIQAEgJAEgJQACgDACgDQADgFADgFAh3CmQgMgJgMgLQgOgOgMgRQgNgTgIgW");
	this.shape_71.setTransform(0.5,0.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ACCizIAZAWQAAAAAAAAIAcAiQABABABABQAaAnAHAvAi8hvQANgXAUgUQAogpAzgQQAegJAiAAQA4gBAvAZQAOAIANAJAjEhhQAPgfAZgaQBDhDBaAAQALAAALABQA8AGAvAjADbgGQgDgxgXgqQgPgbgYgXQgogngzgPQgegJghAAQg6AAguAYQgcAPgYAXQgXAWgQAaQADgFAEgGQAOgWATgUQBBhABaAAQBbAABABAQA0A0AKBFQABANABANgAC3h7QASAaAKAfQAEAPADAQIADAhQAAABAAAAQAAACAAADIgBAEQAAAPgDAOQgCAMgDALQgDAJgDAJQgBADgBADQgEAHgCAHQgBAAAAABQgBACgBACQABgCACgDQgQAfgaAcQgEADgDADQgNAMgNAJQgCABgCABIgHACQgjAWgpAGQgNACgMAAIgLAEQAAAAgBAAQgCgBgCABQgBgBgBABQgCgBgBABQgEgBgDAAQgNgBgMgCQgBAAgBgBQg+gMgwgvQgQgQgMgSIgHgKQgDgFgDgGQgGgLgEgMADcAIQAAAHgBAGQgBAIgBAIQgCALgDALQABgDABgDIAFgyIAAgJADWA1QgBAEgBAEQgDAJgDAJQgBACgBADAjTg7QgHAbAAAeQABAUAEAUQANA+AwAvQAQAQASAMQA1AjBEACQAWAAAVgEIgjAKQgGAAgFAAQhIAAg3gpQgOgLgNgNQgigigSgqAAuDQQAagEAYgLQAhgPAcgbQAQgQANgSQgBACAAAAQgNATgRARQgUAUgXANIgQAFADDBnQgPAdgYAYQgEAEgDADQgGAFgFAEQgJAIgKAGAC6B1QAFgGAEgIADFBjQgFAJgGAJAjEhhQADgHAFgHAjTg7QADgJADgJQAEgKAEgJQAAgBABAAAjFhgQABgCABgCAi9ByQgKgQgGgSIgBgDIgNhIIAAgCQAAgBAAgBQAAgfAIgd");
	this.shape_72.setTransform(0.5,0.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AB9jKIApAhQABAAAAABQAQAQAMARQAVAeALAiQABAGACAGAjOhxQAPgcAYgZQArgsA3gRQAggJAlgBQA8AAAyAbQAIAEAHAEADrgGQgCg2gagtQgQgcgagZQgrgrg3gQQgggJgkAAQg9gBgzAbQgdAPgaAZQgZAZgQAcQABgDACgDQAPgcAYgXQBFhGBiAAQBhAABGBGQA3A3ALBKAjThoQAQgiAbgbQBHhIBhAAQANAAAMABQA3AFAtAdADDiHQACACABADQAXAhAJAmIADAYQAAAEABADIAAADQABAJAAAKADqgZIADAXQAAABAAAAQAAADAAAEQAAACAAADQgBAAABABQgBAEAAAFQAAABgBABQAAAFgBAFQAAAGgBAFIgBAFQgCAIgCAIQgDAJgDAKQgDAGgCAFIgFAKQAAABAAAAQgCADgBACQACgCABgDQgRAhgcAdQgGAGgFAFIgDACQgKAJgMAIQgHAFgHAEIgLADQggAQgkAGQgLACgMAAIgPAEQgBAAgBAAQgBAAgBAAQAAAAgBAAQgCAAgBAAQgTAAgSgEQgCAAgBAAQgCgBgCAAADsAVQgBAGgBAGADkBAQAAABgBABQgDAJgDAKQgCAFgCAFADkBAQAHgdAAggIAAgJADoAxQgCAHgCAIADLB6QgCADgDADQgNAUgSASQgcAcghAQIhbAYQgIABgHAAQhOgBg7gsQgPgLgOgOQglglgRgtADLB6IACgFQACgDACgDQgQAfgaAaQgGAGgFAFADUBqQgDAGgEAFAjjhAQgIAdAAAhQABAWAEAVQAOBDA0AzQARARATAMQA6AnBIABQAYAAAWgEQBFgLA0gyQAUgTAOgWACZC1QgCACgDACQgPANgQAJAjThoQABgCABgBAjjhAQADgJADgKQAFgLAFgKIAAAAQACgFADgEAiNDAQgNgKgMgMQgRgRgNgTQgMgRgIgSQgUgsAAg0QAAgBAAAAQAAgiAJggAiNDAQgMgKgNgMQgcgcgQggQgDgFgDgGAgtDqQgDAAgEgBIgEgBQgugLgngd");
	this.shape_73.setTransform(0.5,0.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("Ajbh9QAQgcAYgZQAvgvA6gRQAjgLAnAAQBBgBA2AdQAGADAGAEIAbAUQALAIAKAKQAGAHAGAGIAOASQAZAiAMAnQAGASADASIADAmQAAABAAAAQAAAGgBAGIAAAGQgBAEAAADQAAAEgBADIgCARQgBAEgBAFQgCAGgBAGQACgLADgLIADgfQAAgGAAgHIgCgeQgGgugWgnQgRgfgcgbQgugtg7gRQgjgLglAAQhCAAg2AcQggARgcAbQgbAagRAeQACgFADgFQARgbAXgYQBLhKBoAAQBoAABKBKQA8A8ALBPQABAFAAAFACejGQAKAIAKAJQAHAHAGAHAjihwQARgjAdgeQBNhNBoAAQANAAANACQA4AFAwAdADNiVQAEAFAEAFQAeAtAIA2AD9ARQgBAIgBAGAD2A+QgBAEgBADQgBADgBAEQgDAHgCAHQgFAMgFALQgRAkgfAfQgIAHgHAHQgDACgCACQgMAKgNAJIgLAEQglAUgrAHIgPAFQgDABgCAAQgLABgMAAIgkgCQgHgBgFgBQhKgOg4g4QgSgSgOgUQgEgGgEgGIgHgNQgbg0AAg/QAAAAAAgBQAAgeAGgcQgBAGgBAGIgDAUQAAALAAALQAAABAAAAQABAXAEAWQAOBIA4A3QATASAUANQA9AqBPABQAZAAAYgFQBKgMA3g2QARgRAOgUIAIgLQAEgGADgHAD2A+QgBAEgBAEQgBADgBADQgDAHgCAIQgFALgFAMQgEAGgDAGAD3A5QgBADAAACAD5AvQgBAFgBAFAD5AwQgCAHgBAHACkDCQgLAKgMAIQgEACgDADADUCJQgOAVgTATQgbAbgdARIhQAbQgBAAgBAAQgUADgVAAQhTAAhAgwQgQgMgOgPQgogngSgwAjihvQABgCABgCAj2g4IADgMQADgLADgKQAGgLAFgLQAAAAAAgBQADgGAEgHAgkD9QgIgCgIgBQhHgOg2g3QgYgXgRgb");
	this.shape_74.setTransform(0.5,0.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AAjkMIAfAJQAPAEAPAFIAeAKQACABACABIAiAWQAAABABAAQANALAMALQAAABAAAAIAUAVQAJALAIALQAgAxAIA5IADApQAAAAAAABQAAANgBAOQgBAJgCAKIgCAOQgCAHgCAHQABgEABgEQgBAFgCAEQgDALgEALQgFANgGAMQgCAEgBADQACgEACgEQgTAmghAiIgKAKQgFAFgGAFQgLAJgMAIIgJADIgPAEQAmgSAgggQAXgXARgaQgDAFgDAEQgPAWgVAVQgZAZgcASQgrAZgyAHQgPADgOAAQgIAAgHAAQhYAAhEgyQgRgOgQgQQgqgpgRg1QAUAxApAoQAUAUAVAOQBCAsBTABQAWAAAVgDQAFgBAEAAQAkgGAfgPIhMAWIgfAJIgPAFQAAAAgBAAIgggDQgKAAgJgCQhOgPg7g7QgUgTgOgWQgBgBgBgBIgPgZQgdg3AAhDQAAgBAAAAQAAgnAKgkQgDANgCANIgDAWQAAALAAALQAAABAAABQAAAZAFAXQAFAYAJAWAjoiGQARgcAZgaQBPhPBvAAQAiAAAgAIAjoiGQARgeAZgaQAxgyA/gTQAlgLApAAQASAAARACAjxh4QATglAfggQBRhSBvAAQAOAAAOACQADAAADABAENgIQgDg9gdgzQgTghgdgdQgygxg+gSQglgLgoAAQhHAAg5AeQgiASgdAdQgdAcgSAgQACgGAEgFABgj6QAzAUArAqQA/BAANBUQACAQABAQADSirQAhApAPAxQAGATADATAEIA7QgCAIgCAHQgEALgDALQgGAMgFAMAEGBBIAHg+IAAgLADoCJIAGgJAC0DKQgPANgPALQgCABgCACAjxh3QABgCACgCAkDhJQAEgLADgLQAGgMAFgMQAAAAAAgBQAEgHAFgHAghENQgLgBgLgCQhMgPg6g6QgTgTgPgW");
	this.shape_75.setTransform(0.4,0.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AEcgUQgFg7gcgxQgTgjgfgfQg1gzhCgUQgogLgrAAQhKAAg9AgQgkATgfAeQgfAegUAiQACgCABgCQATgkAfgfQA0g1BCgUQAngMAsAAQBKAAA8AgQAkAUAfAfQA1A0AUBCQADAKADAKIAHBAQAAAAAAABQAAAOgCAOIgDARIAAAFQAAABgBABQAAACAAADQAAABgBABIgBAEQgBAIgDAJQgDAMgEALQgGANgGANQgGAMgHAKQgBACgCADQgCADgDAEQAGgHAFgIIgDADIgYAfQAJgJAHgKQgKAOgLANIgMAOQgBABgBACQAAAAgBAAQgJAKgLAIQgKAJgKAHQhGAwhZAAQgBAAgBAAQgCAAgCAAIglgDQgGgBgGgBQhTgPg/g/QgVgVgPgWQgPgVgKgXAkAh/QAUgoAhgiQBWhWB2AAQAPAAAOABQBjAJBJBJQAWAWARAYQAcArALAxAj7iHQATgiAegeQBUhUB2AAQB2AABTBUQBEBDANBZQABAMABALIABAXQAAABAAACQAAAUgDASAEYA6IgBAIQgBAGgCAGIAAAAQgEAMgEAMQgGANgFANQgCADgCAEQACgEACgDQgEAIgFAIIgCADQAEgGADgGQgCAEgDAFAEUBOIABgGQACgFAAgFAEXBCQgBADgBADADWC9QgGAFgGAGQhDBDhZAOQgWADgYAAQhegBhIg1QgSgOgRgRQgrgsgVg1IgEgSQAVA9AyAxQAUAUAXAQQBGAvBYAAQAdAAAbgEQBTgOA+g+QAIgIAHgIgAkThOQgEARgDASIgCAUQAAAKAAAKQAAABAAABQABAJAAAKQACARADAQQAEARAFAQIgOhCIgDgPQAAgBAAAAQAAgqALgmQAEgLAEgMQAGgNAFgMIAAgBQACgCAAgCAkAh/QADgEACgEAgrEdQgIgBgIgCQhQgQg+g9QghghgUgnQgEgHgEgIIgDgQAkcgBQAAgLAAgL");
	this.shape_76.setTransform(0.4,0.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABMkiQAHACAHACIArAMQAEACAFADQAEACAFACIArAfQAKAJAKAKQAFAEAEAFIAZAeQADAFADAEQAeAtAMA0IAHBEQAAAAAAABQAAAPgBAPIgHAoQgBAHgCAHQgEAMgEANQAAAAgBABQgEAIgDAIIgBADQgCAEgCADQgBADgCAEQACgDABgDQgVArgkAkQgMAMgMAKAhqkZIASgKQAqgNAuAAQAAAAABAAIAYABQADAAAEABIAsAMAhqkZQAxgSA5AAQAnAAAlAJAEtgVQgGg+gdg1QgVglghggQg3g3hHgUQgpgMguAAQhOgBhBAiQglAUghAgQghAggVAlQABgDACgDQAUglAgggQAOgOAPgMIALgGQAfgXAkgNACFkSQAJAEAJAFADCjqQAKAJAJAJQAFAFAFAFAD4iwQAcAoAOAtQADALADAKABakeQBEAVA3A2QBHBHAOBfQACAMABAMAEkBRQAAABgBACQgEAMgEANAEkBRQABgEABgEIAIhGIgBgYAEnBFQgBAGgCAGAECCeIgEAGIgRAXAETCAQgCAEgCAEQgGALgHALQAFgIAFgIQgUAngiAiQgMAMgMAKIAAAAIgLAJQgFAEgGAEQgDACgDACIgwAZQg1AVg9ABQgBAAgBAAIgqgDQgJgCgJgBQgGgBgFgBAiEEHQA9AeBJABQAfAAAdgFQBYgPBChBQALgLAKgLQgLANgMAMQhHBHheAOQgYADgZAAQgvAAgqgNQgugOgogeQgLgIgKgJIgRgJIgUgWQgVgagPgcQgIgQgHgQIgHgoIgIguQACAQADAPQABAIACAHQAUBNA9A8QAWAVAYARQADACADACQANAIANAHgACzD2QgJAGgIAGAkOiGQAUgqAjgkQAPgPAQgMAkOiGQACgFADgFQAUgkAfgfQAUgTAVgPIBDgkAkjhSQAEgMAEgNQAHgNAFgOIABAAQABgCABgCAkjhSQgEAOgCAPIgDAZQAAAMAAANQAAABAAABQAAAMABAMIgDgUQAAAAAAgBQAAgsALgogAjpDDQgKgMgIgMQgVgdgMghAjEDiQgIgHgIgIQgvgvgWg5AgsEuQgHgBgHgBQgIgCgHgBIgQgKIgrgYAieD4IgmgW");
	this.shape_77.setTransform(0.4,0.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AhSk2IBSgLQAAAAABAAIAQABQBJAEA8AgQAoAVAjAjQA7A6AWBKQAHAWADAYIAEAvQAAABAAAAIgBAQQAAAJgBAIQgDAbgHAaQAAABAAACQgBAAAAABQgBADgBADAARlAQAJAAAIABQBuAKBSBRQAYAZASAbQAnA5AJBFAE9gWQgFhCggg4QgWgngigiQg7g6hKgWQgsgMgwAAQhTgBhDAkQgoAVgjAiQgjAigWAnQAEgGADgGQAVgjAegeQBdhdCEAAQCDAABeBdQBKBLAPBkQACANABANIABAZQAAAagEAZIgDAUQgBACAAACQgBADgBADQAAACgBACQgBADgBADQgBAFgCAGQgCAEgBAFQgDAGgCAGIgFALQgBADgCADQAAAAAAABQgCACgBADQACgDABgDQgWAugnAmQgGAGgGAGIgEADQgHAHgIAGIgMAJQgCACgDACQgDACgDACAE2BOQgCAEAAAFAE/AOQgBAfgHAdAEeCQQgIAPgKAOQgFAGgEAGQANgRALgTQgWAqgkAkQgGAGgGAGAkmBwQAXA6AxAwQAXAWAZARQBOA1BiABQAhAAAegGQBdgQBFhEQASgRAOgTQgPAUgSATQgkAjgpAWAEuBpQgCAFgBAFQgDAFgCAGAC2EIQgFAEgGAEIgWAJQgWAMgXAIIgdAMQgkAIgnABIgvgEQgJgBgKgCQhagShEhEQgmglgWgrQgBgDgCgCIgOgiQgSgyAAg5QAAAAAAgBQAAgvAMgqQgEAPgCAQIgDAaQgBANAAAOQAAABAAAAQABAeAGAdQAFAcALAbABoEtQgZAIgbAEQgZAEgbAAQhpAAhQg8QgUgQgTgSQgxgygVg9ADRDyQgEAEgFAEQgDADgDACAjUjuIAWgTQAYgSAagNQACgBACgBQAAAAABAAQABgBABAAIAegMQAKgEALgDAhnkvQAFgCAFgCQAGgBAFgCAkdiOQAVgtAlglQAHgHAIgHAkUieQAVgkAeggQAHgGAGgGAkeiNQACgDABgCAkeiNQABgBAAAAQAEgIAFgIAkzhXQAFgNAEgNQAGgOAGgOAgvE+QgHgBgIgBQhcgRhHhGQgXgXgRgZQgMgSgKgT");
	this.shape_78.setTransform(0.4,0.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ACskjQAUAMASAPQABABABABQANAKAMAMQAAABAAAAQAVAVARAWQAEAGADAFQAiAyAMA6AhQlIQAmgJAqAAQAAAAABAAQAJAAAJAAQBMAEA/AiQAHAEAHAEAATlRQAIABAJAAQBKAIA+AlAFNgYQgFhFghg7QgXgpglgkQg9g9hOgWQgugOgzAAQhXAAhHAmQgqAWglAkQgjAigXAnQAXgqAkgjQBihjCLAAQCKAABiBjQBPBPAQBpQACANAAANQABAOAAANIAAABQAAARgBARQgCAUgEASQgBADAAADQgBAFgCAFQACgIACgIAETjEQAgAtAPAyQADAMADAMQAIAkAAAmQAAABAAAAQAAAIAAAJQAAAJgBAJQgDAdgIAbQAAABgBACQgEAOgFAOQgGAPgHAPQgCAEgCADQgBACgBADQgEAGgEAGQAGgJAEgIQACgDACgDQgCADgBADQgCACgBADQgXApgjAkQgNANgOALQgOAMgPAKQhAArhOAIQgBAAgCAAQgBAAAAABQgCAAgCAAQgBAAgBAAQgDAAgEABQgDAAgEAAQgIAAgHAAQgCAAgCAAQgbAAgagEQgEgBgEAAQhhgShLhKQgGgHgFgGQgRgSgOgUQgIgMgIgNQgEgJgEgIQgghCAAhOQAAgBAAAAQAAgsAKgoQABgFABgFQAFgOAEgOQAHgPAGgPIABAAQABgCABgDQABgBABgCQAXgrAlglQANgNAOgMQANgLAPgKQAbgSAfgNQAHgCAHgDQAOgFAPgEAFGBSQgBADgBAEQAAACgBACQgEAOgFAOQgHAPgGAPQgCADgBADQgYAsglAmQgYAYgbATQgCABgDACAFQAPQgCAjgIAgAEMDJQAEgFAEgGQABgCACgCQACgEADgDQgBABgBACQgCACgBACAEcCzQABgDACgCAk2B2QAZA9AzAyQAZAYAaASQBSA4BnAAQAiAAAggFQBigRBJhIQAPgQAOgQQgOASgRAQQhOBPhpAQQgaADgcAAQhuAAhVg/QgVgQgUgUQg0g0gWhAgAhtk/QAGgCAGgCQAIgCAJgDAksiVQAXgvAmgoQAOgOAQgMAlFhRQgEAPgCAPQgBAMgBAMQAAAMAAAMQAAABAAAAQAAAgAGAfQAGAdALAcAknClQgCgEgCgEQgCgFgCgEAg5FOQgGgBgGgBQhfgThIhIQgGgHgGgG");
	this.shape_79.setTransform(0.4,0.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABHlbQAxAJAsAXQABABABAAQAsAYAnAmQAAABABAAQAWAXASAYQADAFAEAFQAiA0AOA9AAUlhQAaABAZAFAAUlhQAJAAAJABQARABAQAEAjrkFQAGgGAGgFQA4gvBBgUQAxgPA1AAQAAAAABAAQAJAAAKABAFdggQgHhFggg6QgYgsgmglQhBhAhSgYQgwgOg1AAQhcgBhLAoQgsAYgmAlQglAkgYApQAYgrAlgmQBnhnCSAAQCRAABnBnQBTBTAQBuQACALAAAKQACASAAARQAAACAAABQAAApgJAmQgBAGgCAGQgEAPgFAOQgHAQgHAQQgBABAAABQgJAPgKAPQgCADgBACIgGAJAEijMQAgAuAQA1QAEAMADAMQAIAmAAAoQAAABAAAAQAAAFAAAGQAAAGgBAHQAAAGgBAGQAAAFgBAEQgCAPgCAOIgEAPQgBAFgBAEQgFAPgFAOQgHARgHAQIgBACIghAxIgBADIgMARQgKALgKAKQgHAHgHAHQgHAGgHAGQgOAMgOAJIgMAEIgLADIh3AlQALgBAKgCQA0gJAugZQAsgXAlglQARgRAOgSQACgDADgCQgDAEgDAEQgPARgQARQghAhgkAWQg5AihCAKQgQACgPACIgVAGQgBAAgCAAQgBAAgBAAQgBAAAAAAQgCAAgCAAQgdgBgbgEQgEgBgEAAQhngThNhOQgagZgTgcQgRgagMgbQgehCAAhNQAAAAAAgBQAAgzAOgvQAFgOAEgPQAHgQAHgPIAAgBQACgCABgDQABgCABgBQAYgtAngnQAGgGAGgGAFWBXQgBAEgBAFQABgGABgFAFgAWQAAALgCAKAElDDQANgSAKgTADrEIQgTARgUAOQgCABgBABAAbFdQgNAAgNAAQh0AAhZhCQgXgRgUgUQg3g3gXhEQAaBBA2A1QAaAZAbATQBWA6BtABQAZAAAXgDgAENDlQgKALgKALQgHAHgHAGAlShgQgFARgDARQgCAOgBAPQgBAPAAAPQABABgBAAQABAhAGAgQAHAfALAdAk7idQAYgxApgpQAHgHAIgHAg8FeQgGgBgGgBQhkgUhLhMQgqgpgZgvQgEgJgEgJ");
	this.shape_80.setTransform(0.4,0.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ACxlHIAoAaQAXARAUAVQABAAAAAAIAsA0QADAEACAEQAiAyAOA7IALBbQAAABAAAAQAAAGAAAHIgBAPQAAAJgBAJIgIAtQgCAGgBAGQABgGABgGQgBAGgCAHQgFAPgFAPQgGANgFAMIgBACQgBADgBAEQgBAAAAABQgBABAAABQAAAAgBABQAAABgBABIgBACQACgFADgEQgBABAAABQgCADgCAEQgIANgIAMIgMARAj6kPIAKgJQA8g1BJgWQADgBADgBIAGgBQAGgBAFgCQApgJArAAQAAAAABAAIATAAQBUAEBGAmQABAAACABAAUlyQAKAAAJABQBLAHA/AjAFtglQgIhGghg8QgZgugognQhEhDhVgZQgzgPg4AAQhgAAhOAqQguAYgoAoQgoAngaAtAExjTQAhAvAQA2QACAIACAIAlCiyQAZgqAkglQBshsCZAAQCXAABsBsQBXBXARBzQABAJABAJAFwAaQAAAFgBAFQAAAEAAAEAFnBZQgCAGgBAGQgFAPgFAQQgGAMgGANAFmBZIAJhVIgCgpAEmDdIgBACQgPASgRARQgmAmgsAZQg3AfhAAKQgFAAgFABIgXAIQgBgBgBABQgMAAgNAAQgCAAgCAAQgDAAgCAAQgEAAgDAAIgtgEQgFgBgGgBQhrgUhRhRQgbgbgUgdQgBgCgCgCIgTggQgnhMgBhcQAAgBAAAAQAAg2AOgxQgEARgDASIgDAfQgBAPAAAQQAAABAAAAQABAjAGAiQAGAgAMAfQAcBDA4A4QAbAaAdAUQBZA9ByAAQAmAAAjgGQACAAACAAIgdAJQgYADgaAAQh5AAhdhGQgYgRgVgWQg5g5gZhGAEmDdQACgCACgDQgDADgCAEIgNASQgJALgLAKQgOAPgPAMQgEADgDADIgMAJQgDACgFADQgEAEgGADIgPAFIgQAFQA2gZAtgtQARgRAPgSgAFNCfQgBADgBADAFGCuIggAvABPFiQAsgJAogTgAEYDxQgJALgLALQgRARgTAPADUEwQgIAGgKAGAlKikQAZgzArgsQAGgGAGgGAlCiyQAZgtAlgmQAFgFAFgFAlKikQAEgHAEgHAlKikQAAAAAAAAAlKikQACgCABgDQADgFACgEAljhkQAGgPAEgPQAIgRAHgRAg9FvQgIgBgHgCQhogVhQhPQgcgdgWgf");
	this.shape_81.setTransform(0.4,0.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AC8lUQAtAaAnAnQAAAAABABQAbAbAVAfQACACABACQAbAoAPAsQACAHACAGQABAEACAEQADANADANQAAABAAABQAHAlAAAnQAAABAAAAQAAAIAAAJQgBAKgBAKQAAAFgBAGQgCAXgGAWQgBAHgCAHQABgFABgGQgBAGgCAGQgFAQgFAQQgIASgIARQgHANgIANQAHgKAFgKQACgDACgDQgbA3gvAvQgHAHgIAHAg5l/QAdgEAdAAQAVAAATACQBQAHBDAmAg5l/QAcgEAdAAQBkAABSAsQADACADABAF/gbQgHhQglhEQgagvgqgqQhHhGhZgaQg1gPg7AAQhkgBhSAsQgwAagqApQgqApgaAvQAAgBABgBQAagwAqgpQBxhxCfAAQCfAABwBxQBbBaASB4QACAPABAQQABAQAAAPQAAADAAACQgBAsgJApAFuiAQAEALADAKAGAAjQAAABAAABQAAAFgBAEAF3BbQgBAHgCAIQgGAQgFAQQgIARgHASQgCADgCADQgaAzgsAsQgIAIgHAHQgIAHgHAGIgYATQgGADgFAEQg2Ajg/APQgCAAgBABQgqAJgtAAQgBAAgCAAQglAAgigGQgCAAgBgBQgBAAgBAAQhugWhThTQAAgBgBgBQgBgBgCgBQAAgBgBgBQgLgLgKgNQgMgOgKgOQgKgOgIgPQgEgIgFgIQgGgMgFgMQgbhDAAhOQAAgBAAAAQAAg5APgzQAFgPAFgQQAIgSAHgRIAAAAQAag2AtgtQAIgJAJgHQALgLAMgKQApgfAsgTQARgIASgFQABAAACgBQAagIAcgEAFHDMIABgBQABgCABgCAFHDMQgCADgBACQgWAggdAdQhaBah4ASQgeAFggAAQh/gBhihIQgYgSgXgXQg7g8gahKQAcBHA7A6QAcAcAeAVQBfA/B3ABQAnAAAkgGQBwgUBUhUQAegdAXgigADaFBQgCABgCABQgEADgDACAlUizQAagyArgsQAHgHAHgGAlyhpQgEARgDARQgEAVgBAVQgBANAAANQAAABAAAAQABAlAHAjQAGAiANAfAlZirQACgDACgDAlZirQADgEACgEAlSC9QgDgFgCgFQgCgDgCgD");
	this.shape_82.setTransform(0.4,0.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ADXlXIBFA4QAAAAABABQAeAeAXAjIAnBLQAFANAEANQACAJADAKIAKA5QABAUABAVQAAABAAAAQAAAVgCAUIgGApQgDANgDANQgBADgBACQgBADgBAEIgDAIQgDAJgDAJQgCAEgBAEQgHAOgGAOQgBACgBACQgKARgKARQgFAGgEAHQAPgVANgXQABgBAAgCQABgCABgBQgcA5gwAxQgHAGgHAHIgOAMQgCACgCABQgDADgDACIgTAPQgCABgCABQhiBEh9AAQgCAAgBAAQgGAAgFAAQgBgBgBABQgCgBgBABQgCgBgCAAQgCAAgBAAIgugFQgDAAgDgBQgDAAgCgBAGOgsQgJhLgjg/QgcgygsgrQhJhJhdgbQg4gRg9AAQhoAAhWAuQgyAbgsArQgrAqgcAyQAAgBABgBQAcgyArgsQB1h2CnAAQClAAB2B2QBeBeATB+QABAIABAIgAiFl9QA/gXBHAAQAWAAAUACQBeAJBOAyAiFl9QAIgDAJgCQA3gRA9AAQBogBBWAvQAMAGANAIAF5iSQAIAVAGAYAGLBMIAFg3QAAgIABgJIgDgwAGIBdQgDAJgCAIQAFgRADgRQgCAJgBAIQgCAHgBAGQgBACgBADQgBADgBAEAGLBQQgCAHgBAGAF+B+QgCAIgDAKQgCAEgCAEQgHAPgGAOAiRFvQBFAaBPABQApAAAlgHQB1gVBYhXQAMgLALgMQgMANgMANQheBdh9ATQggAFghAAQg5AAg1gOQhDgTg5grQgCgBgBgBQgYgSgWgWQg/g/gbhMQAeBJA9A9QAdAdAhAWQAIAFAJAGQAbARAeAMgAFlC7QgcA2gtAtQgHAHgHAHAEAE4QgFAEgFAEAFJDnIgUAZAkKktIARgOQAggaAjgTIAxgVAlnizQAbg3AugwQAKgJAKgKAlji6QAbg1AtgtQAJgJAIgIAmChtQAFgRAFgQQAIgSAJgSIAAgBQABgDACgCAmChtQgFARgCASIgFAsQgBANAAAOQAAABAAAAQAAAmAHAlQAHAkANAhAloC3IgahBQgQg2AAg8QAAAAAAgBQAAg7AQg1AkpERIgNgPQgNgPgLgQIgXgkQgBgEgCgEAllC/QAAgCgBgCQgBgCgBgCAkFE1QgMgKgLgLQgHgHgGgIAkFE1QgLgKgLgLQgHgIgHgHAjsFBIgZgMAhtGBIgkgSAhIGPQgFgBgGgBIgagMAjKFSIgigR");
	this.shape_83.setTransform(0.4,0.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ADTltIAmAaQAYASAXAXQAAAAAAAAQARARAOASIAQAUQAFAGAEAGQAmA5AQBBAA0mhIAwAIQABAAABAAQABABABAAIBSAeQAGADAGADQAGAEAHADAh+mRQACgBADAAQA6gSA/AAQAUAAAUACQACAAADAAQADAAAEABAAomiQAGAAAGABAh+mRQA8gUBDAAQAUAAATADAGeguQgJhOglhCQgdg0gtgtQhNhMhhgdQg5gQhAAAQhtAAhZAvQg0AcguAtQgfAfgYAiQAYgkAgggQB6h7CuAAQCsAAB7B7QBiBiATCCQABAIABAJgAC6l6QANAGAMAHAFXjzQAoA3ATA/QACAIACAIIAKAzQADAbAAAcQAAABAAAAIgBAgQgDAsgMApQACgHABgHIALhhIgDgyAGiAeQAAAFgBAGQgDAngLAjQgFARgGASQgIATgJATQgCADgCAEQACgDACgEQgFALgGAKIgGAIIgtA6IgDADQgHAIgHAHQhhBiiDAUQghAFgiAAQhMgBhCgXQg2gUgwgjQgOgLgNgLQgMgLgMgMQhAhAgdhRQAfBNBABAQAZAZAbAUIgegSIgZgPQgBgBAAgBQgBAAgBgBQAAgBgBgBQgBgBgBAAQgBgBgBgBIgngvQgDgEgDgEQgDgFgCgEIgUghQgBgCAAgBIgRgmQgCgEgBgEQgBgBAAgBQgBgEgCgFQAAAAAAgBQgBgCAAgBQgBgBAAgBQgSg7AAhCQAAAAAAgBQAAg9AQg4QgFASgDASIgFAuQgBAOAAAPQAAABAAAAQABAoAHAnQAIAkANAiAGWBlQgCAHgBAIQgGARgFARQgJATgIATQgHAMgGALIgEAGAFEEGIAYgeQACgDACgCIAGgKAFzDDQgEAHgDAHAFqDTQAFgIAEgIAivFzQBRAnBhAAQAqAAAogHQB5gVBchbQAIgIAHgIQAGgHAFgGQgGAIgIAIIgPAUQgCACgBABIgaAYQgCABgCACIgWASQgKAGgJAHIhVAoQhAAWhIABIg9gEQgNgCgNgDQgPgDgOgEADwFaQgEACgEADQgGAEgFAEAkak0IANgMQA3gvBAgZIAYgJAl2i6QAcg6AwgxQAIgIAIgHAlujIQAcg0ArgsQAHgGAGgGAmShyQAFgRAGgRQAIgTAJgTQAAAAAAAAQACgFADgFQABgCACgCIAOgXAl2i6QACgDABgDIACgEAjwFNQAGAEAFAEQAaARAcANAg9GiQgLgCgJgBQgSgEgRgFIgZgOIgigVIhBgmAlWD1QgGgIgFgJ");
	this.shape_84.setTransform(0.4,0.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ADVl/IAwAfIAdAZQAJAIAJAJQAhAhAZAlQADAEADAEIAuBmQAAABAAABIANA4QAFAhAAAkQAAAAAAABIgBAhQgBAGAAAFQgEAogLAlQgCAGgCAGIgEAOQgCAFgCAFQgIAUgJAUQgCADgCAEQACgDACgEQgCADgBADQgBACgBACQgCADgCAEIgCACQAEgGADgGQgBABAAACQgDAFgDAEIg3BJQAagcAVggQgDAEgCAEQgUAegaAbIgNASIgdAbQgDACgCACQgWASgXAPAEilHQAJAIAIAJQAmAlAbApADFmIQAEACAFADQADACAEACACLmZIA6ARQAIAEAIAFABwmhQANAEAOAEQBcAfBLBLQBmBmAUCIQABAIABAIQgJhQgmhFQgeg2gvgvQhQhPhlgeQg8gRhCAAQhxAAhcAxQg3AdgvAvQgjAjgaAmQAagoAkgkQB/iAC0AAQA6AAA2AOgAAvmzQACAAACABQACAAACAAIA5ARAggm0QAQgBAQAAQAYAAAXACAggm0QARgBAQAAQAXAAAXACAGugxIADAyQAAABAAAAQAAABAAABQAAABAAABQAAACAAABQAAABAAABIgLBfQgBAHgCAHQgCAFgCAGAGbCRQgCAFgCAGQgJAUgIAUQgCACgBADQgDAFgDAGAGzAfQgEAugMAqQACgHABgGAFzDjIAIgNADUF6QhBAlhMAMQgXADgYABQgLABgMAAQiPgBhuhRQgcgVgZgZQg/g/gfhMQgDgGAAgGQAAABAAABQAhBPBCBBQAfAfAiAYQBqBICHABQAWAAAWgCQAVgCAUgEQA8gLA2gbQA6geAxgxQAIgHAHgIIgEAFQgGAGgGAGQgtAtgzAdgAAvGpIgXAGIgYAHIhAgEQgNgCgNgDQh7gYhdheQgzgygfg7QgDgFgDgGIgFgaIgDgKIgdiHIgEgQIAAgBQAAhAARg5QgFASgDATIgFAwQgBAPAAAPQAAAAAAABQAAALABALQACAeAFAdQAIAnAOAjAEWFRQgSAPgTANQgGAEgHAFIgQAEIgKADIibAsAknk/IALgLQBJg/BVgaIBegRAmFjCQAeg8AygzQAHgHAHgHAmBjKQAeg5AxgxQAGgGAFgFAmFjCQACgDACgEQAAAAAAgBIAQgZAmih2QAGgSAGgSQAJgUAIgTIAAgBAhAGyQgKgBgKgCQh/gYhghgQgfgfgYgiQgSgbgOgc");
	this.shape_85.setTransform(0.4,0.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ADdmNQAcAPAaAVQACABACACQAVAQATAUQABAAAAAAQAeAfAYAhQADAEADAFQAEAGAEAHQAaAqAQAvQACAGACAGQABADAAADQARA8AABCQAAAAAAABQAAARgBARQAAAGgBAGQgEAqgLAmQgFAPgFAQQgBADgBADQgCAEgCAFAgenEQAQgBAOAAQB1gBBgA0QAEACAEADAG/gyQgKhUgohIQgfg4gxgwQhThThogeQg+gThFAAQh1AAhgA0Qg5AegxAxQgxAwgfA3AgenEQAQgCAPAAQAYAAAXADQBeAIBPAuAmQjQQAgg5AxgyQCEiEC7AAQC6AACECEQBqBqAVCNQABAJABAJQADAbAAAbIAAAAQAAA3gLAzQgCAHgCAIQgFAPgFAPQgBADgBAEQgCAEgCAEQAAABgBABIgHAPQgDAIgEAIQgDAGgDAFQAEgFADgGQggBAg3A3QgRARgSAPQgBABgBABQgLAJgMAIQgEADgEADQgEADgFADQgsAdgyARQgIADgIACQg+AThFAAQgiAAgggEQgOgDgOgCQh/gahhhhQgjgigZgmQgFgHgEgHQgHgLgHgMQgBgCgBgCQgIgQgGgPQgihRAAheQAAAAAAgBQAAhCARg8QAGgSAGgTQAJgVAJgUIABAAQAeg/A0g1QAJgJAJgIQAIgHAHgGQBHg+BXgaQAGgCAGgBQArgMAtgCAF2kCQAHAKAHAMAGuiTQADAJACAJAGbC7QgDAIgDAIAHDAgQgDAwgNAsQACgHACgHAGADvIAIgOQADgFADgGAGADvQgCACgCADQgaAmgiAiQhqBqiMAVQgkAFglAAQiVAAhyhVQgdgVgagbQhGhGgfhWQAhBUBGBEQAgAgAkAZQBuBLCMAAQAtAAArgHQCDgYBjhiQAkgkAbgngAECF1QgIAGgJAGAmyh7QgFATgDAUQgEAZgCAZQAAAPAAAQQAAAAAAABQAAArAIAqQAIAnAOAlAmQjQQAfg8A0g0QAHgHAHgHAmTjJQACgEABgDAmTjJQACgDABgEQAAAAAAAAAhCHDQgLgCgLgCQiDgYhkhkQgggggYgkQgCgCgBgC");
	this.shape_86.setTransform(0.4,0.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ADqmaIAYAPQAmAaAjAjQAAAAAAAAIA7BHQACACACADQAqBAATBJAginVQARgBARAAQB6gBBjA2QAHAEAGADAG7iRQgNgjgSgiQggg6gzgyQhWhWhsggQhBgThHAAQh6AAhjA2Qg7AfgyAzQgzAyghA5QACgDACgEQAgg3AwgxQCJiJDCAAQDAAACJCJQBRBSAhBkIASBKQAAABAAABIADAcQABAKABAKQAAAJAAAJQAAACAAABQAAAAAAABQAAABAAACQAAARgBAQIgJBHAginVQASgCARAAQAZAAAYADQBkAJBUAxAGGkHQAoA6ATBBQADAKADAJIALA8QADAcAAAdQAAABAAAAIgBAkQgBAGAAAGQgEAqgLAmQgBACAAABQgBAEgBADIgBACQgEALgDAMIgBABQgBADgBAEQgJAVgKAVQgBADgBACQggBAg3A3IgbAZQgFAEgFAEQgCACgCACIgWAQQgEADgDADQgDACgEACIgfAOQghARgjAMIgqATQg2AMg6ABIhFgFQgLgBgLgCQgMgDgLgCAHEB9QgBACAAACQgBADgBADAG4ChQgBADgBADQgJAVgKAWQgBADgBACQgBACgCADQADgFACgFAHGB2QgBADgBAEAHGB2QgCAFgBAFQACgKADgKQgBAFgBAFgAHUAhQgEAsgKApACaG4QgmANgoAGQgkAFgnAAQhKAAhDgUQhHgWg9gtQgRgNgQgPQgMgLgLgLQhJhIgghaQAiBXBIBHQAVAVAWARQAOALAOAKQArAdAwASQBOAeBaAAQAvAAAsgHQCIgYBnhmQAHgIAHgHQgIAJgIAIQgzAzg6AgAGHEAQAFgGAEgHQgDAFgEAFQgBABgBACgAFbE3IAlgtIAHgKAELGDQgHAFgHAFAEvFnQgHAGgHAGAGQDzIAOgXAmjjQQABgBAAAAQADgHAEgHQAQgcATgbIArgzQABAAAAgBIADgCQBRhQBigiQAHgCAIgDIBlgSAnCiAQAHgTAGgTQAJgVAJgVQADgEABgEAnCiAQgFAUgDAUIgGA0QgBAQAAAQQAAABAAAAQAAAtAJAsQAIApAPAmAmijRQARgkAZghAkcFpIgVgMIgZgPQgBAAgBgBIgsgzQgHgJgGgIQgSgagNgbIgRgmQgCgFgBgEQgDgIgDgJQgEgLgDgMQAAgCgBgCQgOg4AAg9IAAgBQAAhFASg+AhFHTQgOgCgOgDQgJgCgIgBIgagPIgZgPIh3hEAl4EaQgYgfgRghQgCgDgBgD");
	this.shape_87.setTransform(0.4,0.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ADymoIAaAQQAnAbAkAjQAAABAAAAIAyA6QAIAKAHAKQACADACAEIA0BwQABACAAABQAIAbAFAdQAHApAAAsQAAABAAAAIgBAmQAAAGgBAGQgEArgLAnQgBACAAACQgHAUgGAUQgEAIgDAHIgIATQgCAFgDAGQgiBFg7A7IgSARQgJAJgKAIQgFAEgEADIgaAUQh2BRiXAAIhNgFQgMgCgMgCQgGgCgGgBIhUgcQgDgBgDgCQgCAAgCgBQgBgBgBAAIh2hRQgHgIgIgHQgjgjgagmQgUgdgPgfIgZg/QgVhFAAhOQAAAAAAgBQAAhHAShAQAHgUAGgUQAKgWAJgWIABAAQACgDABgEIABAAQAIgPAJgPAgknmQATgBARAAQB+AABnA4QAGADAHAEAgknmQATgBASAAQAaAAAZACQBnAKBXAzAHgg2QgLhagrhOQghg8g1g0QhZhYhwghQhCgUhKAAQh+AAhnA3Qg9Ahg0A0QgoAngdArQAdgtAogoQCOiODJAAQDHAACOCOQByByAWCXQACAJABAKgAGJkfQAKANAJAOAHbBjIAHhBQABgOAAgQIgDg6AHWB4QgBAGgCAGQAEgQAEgRQgCALgDAKQgBAFgBAEQgBACAAACQgHAUgGAUQgEAIgDAHAG3DPQgDAFgCAGQgEAHgEAHQAEgHAEgHAHkAjQgDAsgLApAGcD/QgCAEgDADQgbApglAkQhxByiXAXQgmAFgoAAQigAAh6hbQgfgXgcgcQhLhLgihdQAkBaBKBJQAjAjAnAbQB1BQCXABQAxAAAtgJQCNgZBqhqQAngnAdgrIAOgXAFDFrQgOANgOALAnSiEQgFAVgEAVIgGBAQAAALAAALQAAABAAAAQAAAvAJAtQAIArAPAnAlGlmIAPgOQBJg+BWgdQAGgCAGgCIBogTAmujfQAihBA3g4QAIgHAHgHAmxjYQAhhDA3g5QAKgJAJgJAlHFqQgHgIgIgHQg4g4gihCQgDgGgDgFAhNHjQgJgBgIgCQgKgCgJgC");
	this.shape_88.setTransform(0.4,0.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiDnnIAYgFQA0gMA3AAQABAAAAAAQAbAAAaADQBjAJBUAuQA/AiA2A2QABAAAAABQAZAZAUAaQAMAPAKAPIA1BqQADAKADALQADAIACAJIAIA9QAAACABACQgNhXgphLQgjg/g2g2Qhchbh0giQhFgUhMAAQh0gBhiAuQgLAGgMAGQgvAZgrAlQgOAMgNANQgUAUgRAUQgGAIgHAIQANgRANgQIAXgcQACgCACgCIAOgJIAKgHIBxhKIATgMQBagmBpAAQDPAACTCTQB1B1AXCcQABADAAACAHbiqQAGATAFATAHvhDQAAAGABAFIAGA1IAAAAQAAADAAAEIAAAWQgBAMgCALQgBANgBAMIgLA2QgCAFgBAFQgHAUgHAVQgEAJgDAJIgJATQgCAFgCAEQgjBHg9A9QgJAJgJAJIgSAQQgTAQgUANQgEADgEADIgRAFIgIACQA7ghA0gzQAKgKAJgJQgKALgKAKQgwAwg2AgQhPAuhcAOQgbAEgcACQgNAAgNAAQilAAh/heQgggYgdgdQhNhOgjhfQAlBdBNBMQAkAkAnAbQB6BTCbABQAWAAAWgCIgTAGIgbAIQgDAAgDAAQgCAAgBAAIhOgHQgJgCgIgBQgHgCgGgBIgngKQhugkhYhYQAAAAgBgBQgBgBgBgBQgBgBAAAAIg2hAQgUgcgPgdQgEgHgDgIIgHgOQgohcAAhsIAAAAQAAhKAThDQAHgUAHgVQAKgXAKgWIAAgBQACgDACgEQAAgBAAAAQAJgQAJgQIATgXIACgEAHwg4IADA8QAAADAAACQAAABAAABQAAABAAACIgNBtAH2AaQgCAZgDAXAHmCAQgCAFgBAEQACgHABgHQgCAHgCAIQgGAVgHAVQgEAIgDAJAHFDYQgCAEgCAFQgCADgCAEQACgDACgEAG9DoIgUAiQgCACgCADQgBABAAABIgtA5AE9GHQgCABgBABQgVASgXAPAG9DoQgiBDg6A6QgJAJgJAJAAuHrQAcgCAbgFQBNgOBDglgAnAjgQAKgUAMgUAjEnKIAXgPQAOgFAOgFQAHgCAHgCAitnZQAVgIAVgGAl7lEQAMgNANgMQAIgJAIgHQBBg8BNghAmXkfIAPgUIANgRAm8joIAlg3AniiJQgQA/AABGIAAABQAAAxAJAuQAJAsAQApAmcEiQgCgEgDgDQgVgfgQgiAhXHyQgFgBgGgBQgKgCgJgC");
	this.shape_89.setTransform(0.4,0.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiHn3IAkgIQAwgJAzAAQABAAAAAAIAwACQADAAADAAQAGABAFAAICcAsIARAJQADACADABQACABABABIB2BaQABAAAAAAIBCBQQABACACACIA6B4QACAFABAGQACAFACAGIAFAsQACAKACALQABAKABAKQgCgPgCgQQgPhPgmhFQgjhAg4g4Qhfhfh4gjQhHgVhPAAQh6AAhmAwQgLAFgKAGQgeAQgdAWIBQgxIAWgNQBdgoBtAAQDWAACXCYQBxBxAdCVIACAKIAFAoIgBgJAAxoGQAIAAAJABADvnQQAFADAEACAHuilQAEALADALAIBgxIAGAuIAAAAQAAADAAAEIgCAjQgBAGAAAFQgBAJgBAKIgKA0IgCALQgCAFgBAFQgHAWgHAVQgLAYgKAXQgCAEgCADQACgDACgDQglBJg+A/QgJAJgIAIAIFAnQgBAPgCAPAH3B9QgCAJgDAJQgGAVgIAWQgKAXgLAYQgHANgIAOQAHgKAFgLQgkBGg7A8QgJAIgIAJIgRAPQgWASgWAPQgHAFgHAFIgWAHIgLAEQBEgkA8g7QATgTARgUQgRAVgUAUQg2A2g+AjQhNArhZAOQgFAAgFABQgkAFgmAAQirAAiChiQghgYgfgeQhQhRgkhiQAmBgBQBPQAlAlApAcQB+BWCgABQAwAAAugIIgVAHIggALQgFAAgEAAQgDAAgCABQgPAAgOAAIhTgFQgMgCgNgDQgKgCgKgCIiGg3IhPg6QgMgMgMgMQgIgHgHgIIgnguQgGgIgGgJQAAgBgBAAIgegzQgBgBgBgCIgKgUQgrhhgBhzQAAgBAAAAQAAhMAUhFQAHgVAHgWQALgXAKgYQACgEACgEQAHgLAGgLAH2CEQgCAFgBAFQACgIACgJIANh4IgDg2AHAEEIgsA9AFLGRQgEADgDACQgZAVgaARABgH2QAEgBAEAAQBIgNBAghgAjLnZIAcgRQAUgHAUgGAivnqQANgFANgEQAHgCAHgCAlgl8IANgLIASgLQA4gtA+gaAmKlLIALgRQAKgKAJgJQAGgGAGgHAmQlCIAGgJQANgPAPgPQAWgWAXgTIAQgJQggAXgeAeQgSARgPATgAl/lcQAHgIAIgHQAIgJAIgIAnPjnIA/hbQgaAegUAfQAXglAdghAlVGKQgNgMgMgMQgHgHgHgIAnyiNQgRBBAABIIAAABQABAzAJAvQAJAuAQAqAhTIEQgJgCgJgCQgOgCgNgD");
	this.shape_90.setTransform(0.4,0.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AmPlfIATgYQACgCACgDQBkhhB6gmQBJgWBRAAQABAAAAAAIArABQAGABAHAAQBvALBdA1IB1BaQAAAAAAAAQAnAnAdArQACACABACIA6B2QADAJADAJQADAJACAJIAHA2IACARIAIBDIAAAAQAAAFAAAGIgBAcQgBAIgBAIQAAAFgBAGIgLA/QgCAGgBAFQgBADAAACQgBACgBADQgCAGgCAGIgFASQgDAHgCAIQgDAGgCAGAH4ipQgOgngUglQglhDg6g5Qhihih7gkQhKgWhRAAQiLAAhxA9QhDAkg6A6QgQAPgNAQIAIgMQAKgLALgLQCcicDdAAQDcAACdCcQBbBbAlBxIAVBSQAAADABADQAAADABACIAAAGIAFBLQAAAHAAAHQAAABAAABQAAABAAABQAAADAAACQAAABAAABIgMBeQgCAHgBAGQgBAFgCAEQADgLADgLAAsoYQBxAJBgAzQAEADAEACAH7ixQAGASAFASAIWAkQgBANgCAOAH5CxQgCAHgDAHQgDAGgCAHIgJAUQgEAIgEAIQgBACgBACQgBABAAACQABgDACgDQglBLhBBBQgGAHgHAGIgVATQgEADgDADQgFAEgFAEIgdAVQiCBaimAAQgEAAgDAAIhQgGQgMgCgMgCQgJgCgIgCAIIB+QgCAIgCAIQgBADgBACQgCAGgCAGAHcD0QgNAXgOAWQgFAGgEAHQATgbAQgcQglBIg+A+QgGAGgHAHAHmDgQgEAIgEAIQAAAAAAABQgBABgBACAFWGdQgIAHgJAHAi8HsQBZAiBlAAQA3AAAygJQCbgcB1h1QALgKAKgLQgLALgLAMQh9B9imAZQgqAGgsAAQhWAAhNgYQhQgZhEgzQgFgEgFgEQgcgWgbgbQhThSgohlIgahOQgBgCAAgBQAAgBAAgBQgJgxAAg1IAAgBQAAhPAUhHQAIgWAHgWQALgYAKgYIAAgBQACgDACgEQAAAAABgBAG4EuIgoAxAnMkNIAFgHQgJAOgJAPQAGgLAHgLQAagrAjgnAnRkHIAFgGAnejvQAGgMAHgMAnaj2QAFgJAEgIAmXlTQgbAegVAhAlAGmIgigSQgBgBgBAAQgEgFgFgEQgFgFgFgFQgBgBgBgBQgCgCgCgCQgBAAAAgBQgBgBgCgBQAAgBgBgBQgJgJgJgKIgmgwQgBgDgCgBIgZgoQgDgHgEgHQgCgEgCgEAkqGyQADACACABQAyAiA3AVAoCiSQgRBEAABKIAAABQAAA0AKAyQAdCaB2B1QAlAkAnAcIgWgMAnWEGQgGgLgFgLIgRgyAhXIUQgIgCgJgBQgMgDgMgCIgigSIgagOIhug6");
	this.shape_91.setTransform(0.4,0.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiPoXIAPgEQA+gOBCgBQABAAAAAAIAsACQAHAAAHABQB5ALBlA+AIahpQgQhOgmhGQglhEg8g8QhlhliAglQhLgWhUAAQhtAAhdAjIANgIIAXgOQAEgBAEgCQAIgCAIgCAAtooQB1AIBiA2QALAGAKAGIA8ApIAfAbQAJAIAJAJQAIAIAHAIAF0maQAJAJAJAIQAHAIAIAIIAXAaQATAXAQAYIA/CDQABAEACAFQABAEABAEIAGAtQADAOACANQABAJABAIQgCgTgEgTIAHA0IgBgOAIOitQADAIACAJAIZhvIABAGAi+oCQBYggBlAAQDjAAChCiQB3B3AfCaAIhg1IAHAxIAAABQAAAHAAAHQgBABABABIgCAfQgBAFAAAEQgBAGAAAGIgKA7QgCAIgCAIQgCAFgCAGQAFgSAEgTIAJhQQABgOAAgPgAImAsQgBALgBAKAIUCTQgBADgBABQgBAEgBADIgGAUQgDAKgDAJQgMAZgLAZQAAACgBABQgBABAAABQgBACAAABQgBABgBABIAAABQACgFADgGAIUCTQgBADgBACQgBADgBADAIWCMQgCAEAAADAIaB8QgDAMgDALAIKCyQgEAKgDAJQgLAZgLAZQgEAIgEAGIhABbQAEgEADgFIAbgiQASgZAPgaIgDADQgKATgMARQgEAGgEAGAIbByQgCANgDANAGlFgQAAAAgBABIgRAYQgHAIgIAIQgKAJgJAJAGTF5QgHAIgIAHQgKAKgJAJIgTARQgDACgCACQgMAJgLAJIgMAJQgCABgDACQgCACgDACIiKBBQgGACgFACQhIAUhPAAQgCAAgCAAIhPgGQgQgCgQgDQgJgCgJgCAE2HLQgFADgFAEAi8H+QBZAgBlAAQA4AAA0gJQCggdB5h5QAQgPAOgQAGkFhQgOAQgQARQiBCAirAaQgrAGguAAQhYAAhPgYQhTgahHg1QgKgIgLgJQgXgTgXgXQhKhKgohYIgDgKIgri+IgEgRQAAgBAAAAQAAhRAVhKQgSBGAABNIAAABQAAAMABANQACApAIAnQAJAwARAtQAEAIADAJQApBcBNBNQAfAfAhAZIgTgLIgggRQgBgBgBgBQgFgEgFgFQgCgCgCgDQgngngegrIgfgzQgDgGgDgGAinoQQAMgEAMgDAmflkIAHgJIAQgWQACgCADgCIANgJQBUhOBkgkAmflkQghAlgZAoQgIAMgHANQAGgLAHgLQAcgvAngqQAJgKAJgJQAIgIAIgIIAHgEICkhmQgeAMgcAPQg4AfgyAsQgMALgLALQgNANgMANgAnbkUIACgDAnfkPIAEgFAnsj2QACgEABgDQABgBAAAAQAEgJAFgIAoSiXQAIgWAHgXQALgYALgaIABAAQAGgNAHgMAlCG1QAKAHAKAHQA2AlA8AWAn1DeQgGgNgEgOAnpEEQgBgCgCgDQgCgDgBgEIgGgaAhTIlQgMgCgNgCQgMgCgNgDIghgSIgWgMIiGhJ");
	this.shape_92.setTransform(0.4,0.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiVonIAtgKQAzgJA1AAQABAAAAAAIAtABQAIABAHAAQAEABADAAIA9ATQApAJAmAPIA9ATQAAAAABABICEBjQAAAAAAABIBLBbQAAAAABAAQAxBKAWBVIAIA4QAAABAAABQgQhYgqhNQgmhGg+g9QhohoiEgnQhOgXhWAAQh1AAhkAoIAOgIIAYgQQAIgCAIgDQAIgCAHgCgAAuo5QALABALABAjMoOQBegkBtAAQBEAAA+AOAHdk5QAtBDAXBNQACAIACAHAIuhaQAAACABACQAAADAAADQAAgFgBgFIgBgGIADAYIgBgIADQoMQBpAqBWBWQCACBAeCpAI3AuQgBAEAAAFQgBAGAAAFIgLA+QgCAIgDAJQAAADgBAEQgBACAAACQgIAYgIAXQgLAagMAaQgBADgBACAI3AuQgBAKgBAKAIwhIIAJBEIAAABQAAAJgBALIgBAdAIwhIIAFBNQAAAPgBAOQAAACAAADIgMBdAIkCYQgBACAAACQgIAXgIAYQgLAagMAaQgBABAAABQgBABAAACQgBAAAAABQABgCABgCAIlCRQgBAFgBAFQACgLADgMQgBAHgCAGgAIqCAQgDAMgDAMAH5EFQgDAFgDAGIg2BNAEJHyQBKgnBAhAQAQgQAOgQIgBACQgOAQgQAQQg8A7hEAnIgJADIigA1QAEgBAEgBQBRgOBHglgAGwFtIgQAXQgIAIgJAJQgFAFgGAGIgWAUQgFAFgFAEQgcAXgcASIgaAJQhUAuhhAPQgEABgEABQgpAFgrAAQhvAAhfgmAH5EFIhIBmQAGgHAGgHQgGAIgHAIAGgGEQgIAIgJAIQgFAGgGAGAFuG0QgZAWgaASQgIAFgHAFABVIuIgmAMQgCAAgDAAQgFAAgFABQgQAAgQAAQgCAAgCAAIhRgFQgNgCgNgDQgSgDgTgFAoODJQAqBpBXBXQApApAsAeQCKBfCwAAQA1AAAygIIgUAHAi0oeQAQgEAPgFAoiibQAIgXAIgYQALgaAMgZQACgFACgEQAUgjAZghAn7j9QAmhPBBhCQADgDACgCIAQgKQBRhMBiglAjaoGQgaALgZAOQg4AegzAtQgNAMgNANQgeAegaAhQAZgiAgggQAJgJAJgIIAHgFgAkWHqQgagPgZgTQgkgagigiQhXhYgohrAmBGlQgIgIgIgIQgJgJgJgKIgxg8QgCgDgCgDIgfgxQgEgJgFgJIgFgLQgyhtgBiAIAAgBQAAhUAWhLQgSBIAABPIAAABQABA3AJA1QAKAyASAuAmBGlQgIgIgIgIQgJgJgJgKAkWHqIg5gcIgygpAn3EPQgCgEgCgEQgCgFgDgFAhVI2QgRgDgQgDQgPgDgPgEIg5gcQgmgPgjgU");
	this.shape_93.setTransform(0.4,0.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AiAo9ICAgOQABAAAAAAQANAAANABIAcABQAEABADAAQB7ALBnA7AI8hrQgRhWgphLQgohJg/g/QhshriHgoQhQgYhZAAQiDAAhvAyQgRAIgRAJQg5Afg0AuQgOAMgOAOQgOAPgOAOQgiAngaAqIA8hRIAIgKIASgYQADgDACgCIARgLIAIgFICPheIAPgKIAagQQARgHAQgFQAUgGAVgEAA3pJQB4AKBmA3QAFADAGADIB9BiQAAAAABAAIBHBVQADAEAEAFQAxBKAXBUIAHAyQACANACANQACALABAMQgDgWgDgUIAGA0IAAgKAHllLQAzBJAZBUQABAFACAFAI7hyIABAHAjkoXQBogsB7AAQDxAACrCsQB/B/AhCmAJCg3IAHAzIAAABQAAAJAAALIgCAeQgBAFAAAFQAAAEgBAEIgDAYQgFAlgKAiQADgNADgNQgEANgDAOQgCAHgCAHIgIAYQgCAFgBAFQgCADgCAEAJCg3IAEA8QAAACAAADQgBABABABQgBABABACQgBABABABIgNB1AJHAvQgBAJgBAJAIzCgQgDAHgCAIAImDHQgCAFgBAFQgCADgCAEIgBACQgKAWgJAXQgDAFgDAFQADgGADgFQgpBThHBHIgiAgQgGAFgFAFQgdAYgfAUAG0GBIA3hGQALgQAJgQIAGgKAEVH+QBKgoA/g/QALgLALgLQgLAMgLALQg9A8hEAoQhYAxhmAQQgeAEggABQgQABgQAAQjBAAiThtQglgcgigiQhEhEgohQQAqBOBDBDQAqAqAuAfQCOBhC1ABQAYAAAWgCQAjgCAigGQBVgQBLgoIjlBAIgPAEIgiAKQgCAAgEAAQgHAAgHAAQgGAAgFgBQgCAAgBAAQgEAAgEAAQgDgBgEAAQgDAAgEAAIg1gIQgCAAgCAAQgCgBgCAAIgEgBQilggh+h/IhAhLQgFgGgEgGQgFgIgFgHIgagsQg+h4AAiSIAAgBQAAhWAWhNQAIgYAIgYQAMgbAMgaIAAgBQACgEACgDQAAgBABgBQAEgJAFgIIAEgGIACgCQgEAHgFAHQgDAFgDAGAIeDaQgJAWgKAWAF5HAQgaAXgbATQgJAGgJAGIgVAGIgIACAjKonQAkgOAmgIAmymCQAKgLALgKQAJgKAKgJQBMhGBagnAoKkFQAHgNAHgNAn4klQAegxAogsAn/kZQAEgGADgGAoyifQgTBJAABSIAAABQABA5AKA2QAKAzATAwQAKAbANAaAndFWQgKgNgJgO");
	this.shape_94.setTransform(0.4,1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("Am7mQIAQgWQACgCADgDQBuhvCLgpQADAAACgBICogYQABAAAAAAQAgAAAfADQB2ALBjA2QACABACAAQABABACABQBJApBAA/QAAABABAAIBNBeQABABACACQA1BQAYBdIAHA8QABAEAAADQADAUACAUIAGAvIgDA6QAAACAAACQgBACAAABQAAACAAABIgOBPQgCAGgBAFQgBAEgBADQAAACgBACQgBAEgBAEIgBACQgFAPgFAOIAAADQgCAEgBADQgCAFgCAFAJPhYQgPhlgwhXQgphLhBhBQhuhuiLgpQhTgYhbAAQidAAh/BEQhLAphBBBQgOAOgNAPIAJgMQAJgKAJgJQCviwD5AAQD4AACwCwQCKCLAdC2gAH3lOQAxBIAZBTQADAKADALAJTg4QgBgQgDgQAJTg4IABAFQAAAHABAHQgBgJgBgKgAJLCAIAKhQQABgVAAgWIgBgqAJDChQAAACgBACQgBAEgBAEAJFCaQgBAFgCAFQAFgRAEgTQgDANgDANgAJICPQgCAJgDAJAI1DPQgCAEgBAEQgCAFgCAEIgEAKQgEAJgEAIIgEAKQgCAEgCAFQgCADgBADQgEAHgEAGQAFgJAGgLAIeEFQgCAEgCAEQgCAEgBADQgqBShGBGIgjAhQgGAFgGAFQgcAXgeATIgcALIgLADQBPgpBFhEQAHgHAHgHQgIAIgHAIQhAA/hIApQhOArhZARQgNADgMACQgvAHgyAAQhUAAhMgVQhmgbhYhBQgNgKgNgLQgYgUgXgXQhdhcgqhzQAsBwBcBdQAeAdAgAZIgQgJIghgRQgIgIgJgIQgrgrgggvQgXghgSgkIgviKQAAgBgBgCQgMg7AAhBIAAgBQAAhYAXhQQAJgZAIgZQAMgbAMgbIAAgBQAHgNAHgNIAEgFIACgCQgEAHgEAGQADgGADgFQAgg1AsgvAIAE5QgEAGgEAFQgFAJgGAIQAKgNAJgPIAPgYAHtFVIg0A/AGEHNQgbAXgcATQgIAFgHAFAiwI2QBUAaBeAAQA9AAA5gKQAMgDALgCIgUAHIgqAPQgCAAgCABQgFAAgFABQgCAAgDAAQgFABgFAAQgFABgGAAQgDAAgFABQgRABgRAAQgDAAgDAAQgEgBgEABQg1gCgygJQgEgBgEAAIghgSIgRgJIi3hfQAPALAOAKQBIAxBSAZgACPJBQBIgQBAgigAoVkUQABgBAAgBIAHgLAoVkUQAFgJAFgKAoZkNQACgDACgEAnEmEQglApgcAtgApCikQgTBLAABUIAAABQABA7AKA4QAKA1ATAwAmYG9QgIgIgIgIQhGhGgqhQQgCgFgDgE");
	this.shape_95.setTransform(0.4,1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AAepsIAfACQADABACAAQAEAAAEABAi2pSQACAAACgBQBUgZBfAAQAPAAAOAAAi2pSQBXgbBgAAQAPAAAOABAA9pqQAHABAGABIB0AYIBiAoQACACACABQACABADABAJihHQgNhzg2hiQgqhNhDhDQhxhxiPgqQhVgZhfAAQigAAiDBHQhNAqhDBDQgiAhgbAkQAbglAigjQC0i0EAAAQD+AAC1C0QCRCRAdDAQABAMABALIAFBGQgBABABABQAAACAAACQAAAmgEAkIgNBMAEgooQAEADAFACICMBrQAAAAAAAAQAvAvAjA1IBGCRQADAIACAIIAJAiQAAADABADQAAABABACQABAFABAFQABAFABAGQAAABAAABQACAPACAPQABAEAAAEQAEAjAAAkIgCA7QgBADAAACQgFA3gPAzQAAACgBABQgIAagIAZQgFAKgEAKIgMAcQgCAEgCAFQgCAEgCADQgDAGgDAFIgBACQADgGAEgHQACgDACgEQgFAJgFAJAJNjDQACAGACAFQAAADABACAJTCmQAAACgBACQgIAZgIAaQgFAJgEAKAJTCmQgBABAAACQACgHACgHQgCAFgBAGgAIcEsQgKARgLAQQgCADgCADQAOgVANgVIgCADIhVBwQAHgHAHgIQgHAJgIAIQgIAJgJAJQg5A5hBAnIgGACQBFgoA8g8QAJgJAIgJIgBACIgUAaIgjAhQgGAGgGAFQgZAUgaASAItEMQgDAFgCAEQgGAMgGALAIDFTIguA6AGPHZQgcAYgdAVQgDABgDADIgVAGQhiA7h0ASQgfAFggACQgSABgTAAQhcgBhTgYQhjgdhVg+QgPgMgPgMIgigTQgBgBgCgBQgBgBgBgBQgFgFgEgEQgBgBgBgBQgBgBgBgBQgCgCgCgCQgRgRgPgSQgKgMgJgMQgKgNgJgNQgUgegRggQhCh/AAiaIAAgBQAAhbAYhSQAIgZAIgaQANgcAMgcQADgEADgFQAVgnAbgjAA0JfQAkgCAjgHQBkgSBWgyIkBBNIgOAFIghAKQgDgBgDABQgBAAgBAAQgGgBgGAAQgFAAgFAAQgCAAgBAAQgDAAgDAAQgDAAgCAAIhKgJQgIgBgIgCQgFgBgFgBIgjgTIgQgJQBbAeBlAAQAaAAAYgCgAookUQAqhVBHhIQADgDACgDQBwhtCIgsIAEgCAl1HhIgPgIQgXgUgXgWQhHhIgqhUQAsBSBHBHQAdAdAeAYQARANARAMQBGAwBPAZgApRipQgVBOAABXIAAAAQABA9ALA5QAKA2AUAyQALAdAOAcAhxJkQgEgBgEAAQgJgCgJgC");
	this.shape_96.setTransform(0.4,1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABDp6QAAAAABAAQAEABAFAAAJxhXQgPhug0heQgshQhFhEQh0h0iSgrQhXgahhAAQh+AAhsAqQgiANgfASQhBAig5A0QgOANgMAMQgQAQgOAQIAIgKIATgbQADgCADgDIAQgLIAHgEIC7h1IAMgHIAbgRQAHgCAHgDQAGgBAGgCIANgEIB2gSQAUgBAVAAQAQAAAQABABDp6QAFABAFAAIA6AJICeA4QADADAEABQACACACABAgnp8QAUAAAUAAQARgBAQABIAhACAElo4QAFADAGAEICRBuQAAAAABABQABABABABQABABABABQAAAAABABQAsAuAiAyQAWAhARAjQAWAsAPAxQAZBWABBiIgDA4QAAAFAAAFQgGA7gQA2QgIAagJAaIgTArQgEAIgDAHAjfpNQBngnB3AAQEFAAC6C7QCUCUAeDFQAAAFABAEIAGBcIAAABQAAAtgFAsQgFAmgKAkQAAADgBACIAAABAJ4A0QgFA9gQA4AIzEkQgBADgBADIgDADIhcB8QAKgKAJgKQgKALgLAMIgSAYQgBABgBACQgBAAgBACIgpAlQgDABgBACQgCABgBABIgrAhQiaBqjFAAQgCAAgBAAQgMAAgMAAIhggLQAAAAgBAAQgEgBgEAAQgGgCgEgBAI0EiQgBADgBADQAAgCABgCQABgBAAgBgAI+EOQgEAHgDAIQgBACgCADQACgCABgDQgDAGgDAHAIyEoIgEAFIgZAqIgwA+AHQGsQgHAIgIAIQiUCUjFAeQgyAHg1AAQhfAAhWgZIgSgKQBeAfBrABQBAAAA8gLQC3giCMiLQAIgJAIgIgAjEpeQANgEANgEAnWmiQAKgMAMgLQAJgKAKgKQBehWBwgqAo2kbQABgDACgEQABgBABgBIAHgNQADgGAEgGIACgCQgFAHgEAHAphitQAJgaAIgaQAMgdANgcIABgBQAGgOAIgNIAFgHQAgg1AtgwAozkiQAGgKAFgKAnemYQgmAqgdAvgAphitQgVBQAABZIAAABQAAANAAAOIgEgSIAAgBQAAhdAZhVgAp2AYQADAwAIAuQALA3AUA0QADAGACAHQAvBvBcBbQAlAlApAeQAJAHAJAGQBGAwBQAaIiohXIgSgJIglgTQgDgDgDgDQgDgDgCgCQgGgFgFgGQgDgCgCgCIhLhZQgCgDgDgDQgagngUgpAoLFsQgYgigTgkQgEgIgEgIIgHgiIgCgGIgvjWAmAHyQgfgagegdQhahaguhtQgEgJgDgKAh8JzQgJgCgJgCIgmgTQhlgehXhAQgIgGgIgG");
	this.shape_97.setTransform(0.4,1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AghqNQASAAAQAAQASAAARAAAghqNQASgBARAAQARAAARABIAiADQABAAABAAQACAAABAAQACAAABAAQABABACAAQABAAABAAQABAAABAAQABAAABAAQACABABAAQABAAABAAQABAAABAAQABAAABAAQABABAAAAQBsAOBdAxQAFADAFACQBSAtBGBGQABAAAAABQAxAxAlA4QA0BNAaBYQAaBZAABkIAAAAQAAAFAAAGIgCAqQgBAHAAAHQgBAIgBAIIgPBQQgDAKgCAKQgJAbgJAbQgNAegNAdQgHAOgIANQAIgNAHgOQgtBdhPBPIgmAjQgdAZgfAVQgFAEgEADIgWAGIgFACQBJgrBBhAQAMgMALgMIA+hOQAAAAAAAAIAUggAJUj8QgLgYgNgXQgshRhHhHQh3h3iXgsQhZgbhjAAQipAAiKBLQhSAshGBHQhBBAgrBKAoBmLQAZgeAcgcQC+i/ENAAQEMAAC+C/QBcBbAvBuIAsCZQAIAzAAA1QAAAFAAAFIgRCQAKJAxQgBAPgCAPAJ2ClQgCAHgCAHQgIAagJAcQgOAdgNAeAJ2ClQgCAHgCAGQADgJACgKgAHlGtQgLANgNANQg+A+hGApQhmA9h4ASQgkAGgmABQgQABgQAAQhgAAhXgZQhpgehahDQgWgQgVgSIgigUQgDgCgCgDIhOhbQgYgjgTglQgEgGgDgGIgHgiIgCgHQAwBvBdBdQAXAXAYAUIgMgGQgSgRgSgSQhbhagvhtQgGgMgDgNQAEAJADAJIgyjeQADAxAJAuQAKA5AVA0AAhKEIgiALQgBAAgCAAQgIAAgHgBIhfgIQgLgCgLgCQgFgBgGgCAAtKBIgMADAjDJlQBdAdBpAAQAVAAAVgBQAsgCApgIQBogTBag0IkXBRAGkHzQgGAGgHAFQgbAXgdATAixp2IAsgKIBkgNAndm5QAKgLAKgKQB3h4CXgtQAFgBAFgCAoBmLIAWgeIAOgQQAHgIAIgHQB/iACeguApFkjQACgDACgEQAEgIAFgJApFkjQAGgMAHgMIAEgGApxiyQAJgaAJgbQANgeANgdIAAgBApBkqQABgBABgCQADgGAEgGQACgEACgEQAXgmAcgkApxiyQgVBTAABbIAAAAQAAAPAAAPIgEgVIAAAAQAAhgAZhXgAoZF1QgCgDgCgDQgagmgUgoAhyKGQgHgCgGgBQgKgCgKgCIgjgTIgNgHIjVh2QAZAVAaASQBMA0BWAb");
	this.shape_98.setTransform(0.3,1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AggqdQARgBARAAQAjAAAjADQCIANB0BBIA1AiIBIA6QAMALALALQAHAHAGAGAggqdQARgBAQAAQCtAACOBNQAEACAEACAKLiBQgThfgthTQguhThIhIQh7h7iagtQhbgbhmAAQiGAAhzAtQgiAOggARQhEAlg9A4QgNAMgOANQghAhgcAjQAcgkAhgiQAKgKAKgJQBhhaBzgsQBvgqCAAAQETAADDDDQCPCPAmC6QAEARACASQABAGABAHQgDgVgEgUIAJA/IgCgWAHBnxQAMAKALAMQAHAGAGAHIBMBfIBOCjQABADABADQABADABAEIAHA3IABAHAJ/jMQACAHACAGAKUhCIAEBHIAAABIgRCcAKUhCIAIA+IAAAAQAAAIAAAJIgDArQAAAEgBAFQAAADAAADAKZA4QAAAHgBAIIgDAXQgGAugNArQADgKACgLQgCALgDALQgJAbgJAcQgFALgFAMAJVEsQgvBfhRBRIgmAkQgeAaggAVQgGAFgHAEIhMAgIgJAGQglARgnAMIg2AWQgEABgEABQgCAAgBAAQgEABgEABQgFAAgEABQgKACgJABQgFAAgFABQgKABgLABQgBAAgBABQgFAAgEAAQgHABgIAAQgTABgTAAQgBAAgCAAQgEAAgEAAIhogJQgMgBgLgDQgGgBgFgBAI8FXIAKgRQAIgNAHgNAEYJYIDAiGQABAAAAgBIBOhbAI8FXQgGAJgFAIQgFAHgFAHQALgPAKgQgAKCC3QgJAcgJAcQgFALgFAMIgRAmAEYJYIhHAdQAggKAegNADDJ7QgqAMgsAHQg0AIg4AAQhjAAhZgaQhsgghchEQgUgOgTgRIgjgTQgFgFgFgFQgBgBgBgBQgFgEgEgFQgBgBgCgBQAAgBgBAAIhBhQQgZgjgTgmQgBgCgBgCIgJgRQg8iBgBiZIAAgBQAAhiAahZQAJgbAJgcQAOgeANgfQAphUBEhJQAGgGAHgHQADgDADgDIAQgKIAHgEIDDh8IAKgGIAdgSQARgGASgFIAugLIBigLAjIJ1QBfAdBsABQBDAAA/gMQAngHAlgLIgOAGAGvIAQgHAGgHAFQgdAZggAUAjTp8QAKgEAJgDQAIgCAIgCApUkqQADgFADgFQABgDACgDIAEgIIAyhJAqBi2QgWBUAABeIAAAAQAABCAMA+QALA6AVA2QAYA/AmA5AonF+QgCgDgCgDQgYgigSglAmqH5QgWgSgUgVQg0g0glg6QAmA4A0AzQAaAaAcAXgAh0KWQgHgBgHgBQgKgCgKgCIglgUIgNgHIjVh1QAXATAYARQBNA1BZAc");
	this.shape_99.setTransform(0.3,1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AgnquQAVgBAUAAQAkAAAjADQDtAXCuCuQA0A0AnA6QA5BWAbBhQAPA2AGA6QAEAmAAAnIAAABQAAAQAAASIgCAbQgBAFAAAFQAAACgBADAgnquQAUgBAUAAQCyAACRBPQBWAuBKBLQB+B9AuCfQACAFABAEAKihaQgQh5g5hoQgvhWhKhJQh9h+ieguQhegchoAAQiyAAiRBOQhWAvhKBKQggAggbAiIAGgIIAXghQAHgHAGgIQAKgLALgKQB9h+CegvQAFgBAFgBIAegIQA5gNA9gEAoZmhQAZgfAdgdQDHjIEbAAQEaAADIDIQCgCgAfDVQABAHABAHIAGBgQAAAGAAAHQAAAIAAAJIgSCGQgBAHgCAHQgBACAAACQgJAcgKAdQgJAWgKAWIgEAJQgCAFgCAEQgCADgBADAKqA5QgBAHgBAIIgEAiQgGAngLAnQgBABAAADQACgJACgJAJDFrQgDADgCADQgBACgBACQADgFAEgFIAdgwQgwBdhPBQIgvAqQgbAXgdAUQgNAKgOAJIgyATIgWAJQBwgyBehdQAWgXAUgXQgUAYgXAXQhUBUhjAxQgwAYg0APIhAAZQgBAAgBABQgCAAgCAAQgCABgDAAQgEABgFABQgFAAgEABQgFABgFABQgLABgKABQgnAEgnAAQgBAAgCAAIh2gKQgGgBgGgBQgNgCgMgDAI8F1IgtA6AJoEqQgCAFgCAFQgCACgBADQgBABAAABADlJ/IgcALQgsANgtAHQg2AIg5AAQjhAAitiAQgrgggogoQg1g2gmg7QAoA6A0A0QAxAxA2AlQCmByDVAAQBFAABAgMQAwgJAtgPQAagJAYgKAGyISQgDADgDADQgmAfgnAZAn1nRQAIgHAHgIQCFiGCmgvApYlGIAEgGIADgFQgGALgGAKApfk4QADgHAEgHApfk4QABgCABgCQAEgIAFgIQAagsAhgpAofmZQgbAjgXAlAqRi7QAKgcAJgcQANgfAOgfIAAgBQACgDACgDApjkyQAFgKAGgKAqRi7QgWBWAABgIAAABQAABDAMBBQALA7AWA3QAZBAAmA7ApnE0QhEiJAAilIAAgBQAAhlAahbAo0GJQgaglgUgnQgDgEgCgFAnzHYIhBhPQgCgEgDgDQgagmgUgoAnPH8QgKgKgKgKQgIgIgIgIAnPH8QgKgKgKgKQgIgIgIgIAh6KmQgKgBgLgCQgIgCgIgCIiWg2Iiaht");
	this.shape_100.setTransform(0.3,1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AC4qeIAGACQALADALAEIBqAfQAMAGAMAHIAeASIBtBWQAHAHAIAHQA1A2AoA7QACADACADIA5BsQACAGADAGQAJAaAIAaQAdBgAABrIAAABQAAAlgEAkIgRBmQgCAHgCAHQgBACAAACQgBACAAACQgBADgBADIgBACQgGAVgHAUIgBACQgBAEgBADQgOAggPAgQgBADgCADIgBABQACgEACgDQgBABAAACQgBABgBACQgEAHgFAIIgaAqQgBACgBACIg2BFIgTAcQgKAKgLALQgIAHgHAIIgcAYQgeAagfAWQgEADgFADIiCBDQgCABgDABQgFACgFACQgDABgDABQgTAGgUAGQgPAEgQADQgSAEgTAEQgVADgVACQgoAFgoAAQgBAAgCAAQgCgBgBABQgCgBgDABIhugKQgMgCgMgCQgGgBgFgBAi6qnIAwgLQBEgNBHgBIABAAQAlAAAkAEQABAAABAAQACAAABAAQABABABAAQABAAACAAIBjAdAo2mXQAggqAngnQDMjNEiAAQBhAABYAXAE+p2QAHAEAHADQAFADAFADAKzhcQgRh8g6hrQgwhXhMhMQiBiAihgwQhggchrAAQi2gBiVBRQhXAvhMBMQgqAqgiAuIAFgIIAWghIAignQAJgJAJgKQCBiBCigwQAIgCAHgCAHhoBQAHAHAIAHQA4A4ApA/ADUqVQCcAxB8B8QCkCkAhDaQABAHABAHIAGBiIAAAAQAAA0gHAyIgMBDQgBAFgBAFQgBADgBAEQACgIACgJAKjC9QgBACAAACQgBADgBADAKoCrQgDAJgCAJAJmFQQAEgHAEgHIhaCBAKRD0QgBADgBAEQgOAggPAgAEcJ8QhQAkhZAOQg3AJg7AAQhrAAhggdQhughhehGQgBAAAAgBIgugXQgDgDgEgCQgBgCgCgBQgPgOgOgOQgBgCgCgBQgBgBgBgBQgBgBgBgBQgBgBgBgBQgBgBAAgBIhIhUQgEgHgFgGQgCgEgDgDIghg3QgCgEgCgEQgFgJgEgJIgJgmIgBgGIgzjoQADAzAJAxQALA9AWA5AjaKSQBnAiB1AAQBHAABCgMQBMgPBFgdIDUiSQAAgBABAAQASgTARgTAIBHfQgKAKgLAKQgIAIgHAIAHBIbQgFAFgGAFQgcAYgfAUApglYIAFgHQgJAOgIANQAGgKAGgKQATggAXgfAo7mPQgRAXgPAZAn+nfQAGgGAGgGQCLiMCtgwApxk5QACgDABgEQAEgIAEgIIAGgIApxk5QAFgMAGgLApulAQABgCABgCAqhi/QAKgdAJgdQAOggAOggIABAAAqhi/QgXBYAABiIAAABQAAARABASIgFgWQAAgBAAgCIAAAAQAAhoAbhdgAqDENQgDgKgEgKQADAHADAHQA0B7BlBlQAvAvA0AkQAEACADADQBOA2BZAdIiuhYIgPgIQgsgggogpQhlhkgzh4gAptFNQgHgNgGgNAo+GYQgHgKgHgKAh6K3QgIgBgHgBQgKgCgKgCIgtgXIgQgI");
	this.shape_101.setTransform(0.3,1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AFfp3ICcB4QABAAAAABQAVAVAUAXQABABABABQAUAYASAZQAHAKAHAKQA5BVAcBhQAdBiAABuIAAABQAAAlgDAlQgGBAgRA7QgBACAAACQgKAegKAeQgOAggPAhQgyBmhXBXQgdAdgeAZIgYASQgMAJgMAJQivB4jfAAIh6gJQgOgCgNgDQgLgCgLgDIgvgYQhpgihchEQgDgCgCgCQgrgggngnQg4g4gog+QAqA8A3A3QAtAuAyAkIgOgIIgwgZQgGgFgHgGQgMgMgNgMQgqgqghguIgNgRQgBgBgBgCQgDgEgDgEIglhAQgTgkgOgmQgBgFgCgFQgHgSgFgTQgCgIgDgIQgBgFgBgFQAAgBgBgBQAAgDgBgDQgThRAAhaIAAgBQAAhqAbhfQAKgdAKgeQAOghAPggQAhhFAzg+IAignQAJgKAKgKQCDiECmgxQAIgCAIgCIBGgPQA7gKA+AAIABAAQABAAACAAQABAAABAAQABAAACAAQABAAACAAQABAAABAAQAfAAAfADIBWAZQAnAJAlANQCSA0B3B2QBZBaAzBpIA9DEQAIA4AAA7QAAAcgBAcIgUB/AohnLQASgVAUgUQDRjSEpAAQBVAABPASAFFqGQAHAFAIAEQAFADAGADAFFqGQANAHANAIADvqeIBWAYAKEkxQgHgNgHgNQgxhZhOhOQiDiDilgxQhjgdhuAAQi6AAiYBSQhZAxhOBOQgUATgSAUAKyDFQABgEABgEQgBACAAACQgBACAAACQgKAdgKAeQgOAhgPAhQgBACgBADQgBABAAABQABgDACgDIAAgBAJ/FHQgRAfgUAdQgCADgCADIhKBaQgIAJgIAJQioCnjfAiQg4AJg8AAQh0AAhoghIgOgIIiuhaQAGAEAHAFQBMA0BVAdQBuAmB9AAQBJAABEgMQDPgnCeidQAIgIAIgJAKBFDQgBACgBACAJWGJQAWgfASghQgyBihUBUQgbAbgdAYQgBABgCACAoKnqQAGgGAGgHQCPiPCxgxAqAlAQADgGADgFQAlhEA0g8AqxjEQgXBbAABkIAAABQAABGANBEQAMA+AWA6QAaBEAoA9Ah7LIQgJgCgIgBQgQgDgQgE");
	this.shape_102.setTransform(0.3,1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABIreQAEAAADAAQD+AYC7C7QAHAHAGAIIBUBoIBVCxQABAEABAFQACAGACAHIAIA/IABAGQgUhsg0heQgyhchPhQQiHiGiqgyQhkgehxAAQifAAiHA7QgaAMgaANQhKAphDA9QgPANgPAPQgnAoghAqQAggrAogpQAMgLAMgLIAGgEIDBh/IAJgFIAigXQAVgIAVgGQAMgEANgDIBNgPQA2gIA4AAIABAAQABAAACAAQABAAABAAIBBADQCVANB+BEQBcAyBQBQQAHAIAHAHALYg0IgFg0ALMiOQADAPADAQQAAADABAEQgDgQgDgQAK+jjQADALADALAkfqeQCDg4CbAAQEuAADXDWQCfCgApDSALYg0QACAbAAAbQAAACAAACIgSCsQgDAMgEAMQgDALgEAMIgHAWQgDAIgCAHQgPAigPAhQgBADgCADQAAABgBABQACgDABgDQgBACgBACQgEAIgFAJQAEgIAEgHQgzBkhVBWQgJAIgJAJIgcAaQgFAEgGAFQgfAaghAVIgZAHIgDABIk3BdIgKADIgpAMQgDAAgDAAQgCAAgCAAIh6gKQgNgCgNgCQgNgDgMgDALbA+QAAAFgBAFQgGBDgSA/QgEALgEAMALYg0IAGAvIgDBDQgGBIgTBDQADgMADgLAKzD3QgCAIgDAIQgPAhgPAiQAAAAgBABQgzBohYBYQgJAJgJAIAKEFgIgbAsIhTBmAFyJ1QhzBFiHAVQgkAFgmACQgWABgXAAQh0AAhoggQhvgjhfhGQgWgRgWgSIgpgYQgEgEgEgDQgBgCgCgBQgBgBgBgBQgBgBgBgBQgBgBgBgBQAAgBgCgBQAAgBgBAAQgtgvgjgzIgrhHQgDgGgEgHIgIgnQgHgPgFgQQAFANAGAOIg7kCIgFgXQAAhtAchiQgYBdAABnIAAABQABAQAAARQADA3AJA1QANBAAXA7AjnKwQBuAlB7AAQAbAAAbgCQAugDAsgIQB2gWBng8QBSgvBHhHQAHgHAHgHQgHAHgHAIQhGBFhQAvAHWI2QgfAaghAXQgFADgGAEAj9q1QAhgMAigJAqPlIQAxhlBUhWQAEgDADgEIAUgMQBghZBwgvArBjJQAKgeAKgeQAPgiAPghQADgGADgGQAagtAggrAqNFXQgBgCgBgBQgCgFgDgFAqcEjIgBgEQA1B5BmBmQAbAbAdAYIgLgGQgXgVgXgWQhkhlg1h4gAh/LYQgIgBgJgCQgRgDgRgEIgpgXIgMgHIjjh/QAbAWAcAUQBRA3BbAe");
	this.shape_103.setTransform(0.3,1.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AjOrVIDQgdIAAAAQACAAABAAQACABACgBQABABACgBIA0ADQATABAUADABArvQAIABAJAAQALACALABICWAiQABABABAAQADABADABQADACAEABQAtARArAXQBdAzBSBSQA6A5AqBAQABACACACQAAABABABIBTCyQACAGACAGIAQBGQADAPACAPQACANABAOQAEApABAsIgDBEQgBAOgCANIgHAiQgGAqgKAoIgSA2QgBAEgBAEQgDAHgDAGAKik/QgHgOgHgNQgzhehShRQiJiKitgzQhogehyAAQiLAAh4ArQgxASguAZQhOAqhGBAQgOANgOANQgPAQgOAPIADgFQANgNAOgOQAMgMALgLQBzhrCMgwQB1gqCGAAQE1AADbDcQBeBeA1BuIBADNQAJA7AAA9QAAA9gJA5ALOjlQABADABAEQABACABADALsA/QgBAFAAAFQgBAJgBAIALAEEQgBAEgBAFQgDAGgDAGIgZA4Qg0BrhbBbQgBAAgBABQgDADgDAEQgZAYgaAVQgLAJgMAJIgcAVQgCABgBABQgFADgEADIggAMIgGACQBXgyBNhMQAIgIAIgIQgIAIgJAJQhKBKhTAxQhtA/h+AXQgIABgIABQg7AJg+AAQj4AAi9iNQgvgjgsgsQhnhng2h6QgHgQgGgRQAGAOAFAOQA3B8BoBoQA2A2A8ApQC1B8DqABQBMAABHgOQABAAACgBQBzgVBkg5IjXBOIgOAGIgtAQQgOACgNABQgHAAgHABQgDAAgBAAQgIAAgHABQgSABgRAAQgCAAgCAAQgCgBgCABQgBgBgBABQgKgBgJAAIhwgMQgDAAgCAAQgDgBgCAAIgFgBQjTgqiiijQgBgBgCgBQgBgCgBgBQgBgBgBgBIhNhbQgFgHgFgHQgDgFgEgFAJ/GIQgFAGgEAHQgEAGgFAHQAJgNAJgNIAgg3AJtGiIhJBZAjdrRQADgBACgBQAFgBAFgBAjdrRQAIgCAHgCAkEq5IAIgEIAfgUAotnwIAXgfQABAAAAgBIAGgGIAUgMIAEgCIDziVAqRlnIACgCQgFAHgEAHQAEgGADgGQAqhIA6hBAqUljIADgEArQjNQAKgfAKgeQAPgjAPgiIAAgBQACgDACgDQABgDABgCAqelQQAFgJAFgKAqalWQADgHADgGArQjNQgBADgBADIgXCpQAAAMAAANIAAABQAAASABAUIgGgYQAAgCAAgCIAAAAQAAhvAehkgAownrQg4A+gnBEgAroAiQADA2AJA0QANBBAXA9AqXFoQgGgLgFgLAqXFoQgDgGgEgGQgCgFgCgFIgJgnIgCgFIg7kEApmG1QgJgMgIgMIggg1AiOLmQgFgBgFAA");
	this.shape_104.setTransform(0.3,1.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABor8ICSAhQADABADABQABAAABABQACAAABABQA1ASAyAbQACABACABICvCGQAAAAAAAAIBbBsQAGAIAFAIQAEAFADAGAjMrnIDOgbIAAAAQABAAACAAQABAAACAAQABAAABAAQACAAABAAIA0ACQAJABAJABQAKABALABABBsAQAUABATADAKxlHQgHgNgIgOQg0hghThTQiNiMixg1Qhpgfh1AAQiYAAiDAzQgpAQgmAVQhQArhGBBQgPANgOAPQgVAUgTAWQATgXAVgVQAMgLALgMIAGgDIDliRIAJgFIAhgVQAKgDALgEQAJgCAIgCAKxlHIBBDSQADARACARQADAlABAlQAAAGAAAFQAAACAAACQAAAKAAAKQAAAIgBAHQAAABAAACIgTCPAJ6m2QAJANAJAOIBUC3QAfBpAAB2IgDBGQgBANgBANIgTBgAkTrHQB/gwCTAAQE8AADgDgQBfBgA3BwAL8BBQAAAFAAAFQgBAIgBAIALmDBQgBAFgBAEQgBACAAACQgBACAAADQgKAfgLAgQgCAFgCAFIgCADQgNAdgMAcQg2BthdBdQgdAdgeAaQgcAWgcAUQi6CAjvAAQgCAAgCAAQgFAAgEAAQgCAAgCAAQhEgBhAgMQgFgBgGgBQgtgJgrgPQgCAAgBgBQgBAAgBAAQgBgBgCAAQgBAAgBgBIhAgnQg/gfg7grQgKgHgKgIQgmgegjgkQg7g7grhDQAsBBA7A7QArArAvAkQANAJAMAJQAnAbAqAVQCcBQC8AAQBNAABJgOQA3gKA0gSQhAAYhGALQg8AJhAAAQixAAiUhGIgSgMIhqhCIgSgLIg9gmQgIgIgIgIQg3g3gpg8QgCgDgDgDIgdgvQgGgMgHgMQhKiPgGisQgBgGAAgGQAAgCAAgCQAAgFAAgGQAAgEAAgDQAAhyAdhmQALgfAKggQAQgjAPgjQA0hqBYhZQADgEAEgDIATgNQBvhnCFgyALlDHQAAgDABgDIABgGIgCAMIgBADQgBAEgBADQABgFACgFgALiDRQAAABAAAAQgKAggLAgQgCAFgCAFALjDOQgBACAAABAKLGTQgEAFgDAFQgDAEgCAEQAGgJAGgJIAHgKQAPgYANgZAEELMIEbi1QAAAAABAAQAAgBABgBIBehwAjyrcQATgGATgFArhjSQgHAdgGAeIgLBsQgBATAAATIAAAAQABBMANBIQANBDAYA+IBHCJAqtlXQAEgGADgGIBgiIAoOIzQgIgIgIgIQg5g6gsg/");
	this.shape_105.setTransform(0.3,1.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AF9qzIAfASQBLAwBEBDQACACACADQAdAeAaAfIAnA0QADAEADAFQBBBhAfBwIAJBCQADASADATQABAFAAAEQgDgWgEgVQgWhvg1hiQg2hihVhUQiPiQi1g1Qhsggh4AAQiaAAiFA0QgqAQgoAWQhRAshIBCQgPAOgPAOQgLALgKAKQAKgLALgLQAOgNANgMIADgCIDriUIAGgEIAjgXQAMgDALgEQALgDAMgDIDHgaQADAAABAAIABAAQABAAACAAQABAAACAAQAEAAAEAAIA3ADQAPABAOACIBvAVICXA6QAEADAFADQAFADAFACgABHsQQAHABAGAAQAIABAIABAFqq+QAJAGAKAFAL8iZIAJBFIgCgaAL8icIAAADAKNm4QBCBhAhBvQABAFACAFAkbrVQCCgyCXAAQFEAADlDlQCoCpAtDdAMFhUIALBPIAAAAQAAAOgBAOQAAACAAADQgBAYgDAYIgWB+QgBAEgBAEQgBACAAADQACgIACgIQgCAFgBAGQgBACAAADQgFANgEANIgGATQgDAKgDAKQgFAKgEAKIgJATQgHAQgIARQg3BvheBfQgBABgBABQgCABgBACIg1AwQgBABgCACQgDACgCACIgrAgQgEAEgFADQgDACgEADIgiAMIgEABIjzBYIgKADQgDABgEAAQg9AJhBAAQkDAAjFiTQgygkguguQhohpg5h8IgBgFQA5B+BqBqQA4A4A+ArQC+CCDzABQBKAABFgMQAFgBAFgBQB9gXBsg/QBZgzBOhOQAHgHAIgHQgIAIgHAHQhMBMhXAzQh2BGiLAWIgwARQgFABgFAAQgLABgLABQgPABgQABQgNAAgMAAQgCAAgCAAQgFAAgEAAQgCAAgDAAQgCAAgCAAQgCAAgDAAQgHgBgIAAQgDAAgEAAQgCgBgDAAQgDAAgDAAQgvgDgugJQgFgBgFgBQjdgsipipQgBgBgBgCQgDgDgDgCQAAgBgBgBIhUhlQgCgDgDgEQgbgogXgrIgJgoQgJgUgHgUQAHASAIARIhBkYIgGgXQAAgCAAgCIAAAAQAAh0AehoQALggAKghQAQgjAQgkQA1hsBahcQACgCADgDQABgBABgBIAXgOQBvhnCFgzAMFhUIAGBaQAAAJAAAIIgVCwAL1DKQgCAHgBAGAI6IUIBYhuQAXgiATgkALjEEQgEAKgDAKQgEAKgEAKAHtJjQgEADgEAEAG6KKQgIAGgIAGAj4rsQAXgHAXgGArxjWQAAADgBADQgBAFgCAFIgVCoQAAAMAAANIAAAAQAAATABATQADA6AKA3QANBFAYA/Aq8leQAEgGADgGQAvhWBHhMAqHHAQgdgpgXgsQgBgDgCgC");
	this.shape_106.setTransform(0.3,1.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AIqpGQAGAGAHAGQAMANANANQAkAnAeAqQAGAJAGAJQBBBhAhBuQAEAOAEAOQAYBhAABrIAAABQAAATgBAUQgBAWgCAWQgHBKgTBEQAEgSAEgSQgEASgFASQgEAMgDAMQgHAVgHAVIgaA7QgEAHgDAHQgBADgCAEQgSAhgWAgQgtBDg8A9Qi7C7j5AmQg/AJhCAAQkIAAjKiWQgygmgvguQgfgggaghQAbAgAfAfQA5A5A/AsQDCCFD5AAQBRAABLgOQDogrCwiwQBchcA4hrAIqpGQAGAGAGAGQANANANANAGErDQBCAmA9AzQAUARATATAjKsKQBhgZBrAAIAAAAQACAAABAAQACAAABAAQACAAABAAQAiAAAgACQAFABAEAAQCkAQCKBNABNshQCkAOCKBLQAFADAEACAMVhjQgSiShEh9Qg2hkhXhWQiTiTi4g3Qhuggh6AAQjQAAiqBcQhkA2hWBXQgWAWgUAWQAUgXAWgWQDpjqFLAAQFJAADqDqQC7C7AmD5QABAMABALQAGAwABAzQAAABAAABQAAACAAACQAAACAAABQAAACAAACQAAACAAABQAAACAAACQAAABAAACQgCBUgQBNAKem9QABACACACQBHBsAgB7ALSFZQgEAHgDAHQgBADgCAEQg3BuhfBeQgBABAAABQgCACgCACIgqAnQgIAGgHAGQgHAGgHAFQgVARgWAQQjDCFj5AAQgCAAgCAAQgIAAgHAAQgCAAgBAAQgJAAgJAAQgHgBgIAAQgzgDgygJQgFgBgFgBQgqgJgngMQilg1iGh/QgJgJgJgIQgLgMgLgLIg7hGQgHgKgIgKQgFgJgGgIQgXgjgTgkQhVilAAjHQAAhzAdhnQABgDABgEQALghAKghQARgkAPglIABAAQA2huBbheQABgBABgBIAGgFQCBiACdg7QAWgIAXgHQAOgEAOgDAMCDcQgEAMgEAMAIDJnQgPAMgOALAkTr0QAkgMAlgKAsCjUQgBADgBADQgUBTgCBbQAAANAAANIAAABQAABQAOBLQANBFAZBBIB8DSArHltQACgDABgDIBliOArKlmQACgDABgEQA3hrBZhcAqVHKQgCgEgCgDQgEgFgDgFAojJMQgJgJgJgIQgLgMgLgL");
	this.shape_107.setTransform(0.3,1.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AjjsUIDlggIAAAAQACAAABAAQAqAAApAEQABAAACAAQBzALBnAqIA7AbQAKAFAJAFQBnA3BYBZQBEBFAxBLIBZDDQAFAUAFATQAXBfAABnIgEBTQAAABAAACQgHBJgUBDQAAACgBADQgBAEgBAEIgUA7IgdBBQgCAFgCAFQgBADgCADQgFAKgGAJQAHgNAHgMQgBADgCADQg5BxhgBgIgvAsQgIAHgIAHQgHAGgIAGIgsAgQjHCJj+AAQgCAAgCAAQgDAAgDAAQgCAAgCAAQgCAAgDAAQgCAAgCAAIiEgNQgCgBgCAAQgFgBgGgBQgDgBgDAAAMkhyQgUiNhCh7Qg4hmhYhYQiWiWi8g3Qhxgih8AAQiZAAiEAxQg0ATgwAaQhXAvhMBHQgOANgOAOQgWAWgUAWQAUgXAWgWQAMgNANgMIADgBIEHijIAFgDIAjgWQAGgCAGgCQADgBAEAAAFwrgQBxA6BhBhQA/A+AuBFQAEAHAEAFAkZr5QCCgvCWAAQFQAADvDvQC/C/AmD+QAAAFABAFIAIB4IAAAAQAABFgJBAIgPBMAMRDgQgBAEgBAFAMRDgQABgEACgFQgBADgBACQAAACgBACgAKnHCQAGgJAGgIQgDADgCAEQgEAFgDAFgAEVL7IEtjBQABAAAAAAQArgsAkgvIAVgdALeFlQgCAFgCAFAKzGxIAZgpAjoMHQBvAhB8AAQBSAABNgPQA7gLA4gTQhFAZhKALQhAAKhEAAQh3AAhsgeQiGgmhyhVQgQgLgPgNIgvgYQgBgCgCgBQgBgCgCgBQgKgKgKgJQgBgCgBgBQgCgBgBgBQgBgCgBgBQg2g3gpg8IgshHQgGgLgFgKIgKgsQgHgRgHgRQAHAQAGAPIhBkhQADA+ALA7QANBHAZBCAIPJyQgPANgQANAj2sPQAJgDAKgCArZltQAyhlBQhXQAJgKAKgKQADgEAEgEIAVgNQB7hyCUg1AsQjfQALgiALgiQARglAQglQAEgHADgGIBniSAsQjfQgIAfgGAgIgMBzQgBAUAAATIAAABQAAASABATIgGgaIAAAAQAAh5AghsgAroFEIgBgDQA8CHBxBxQAlAkAnAgQAXASAYARQBlBFB0AiIkIiKIgIgFQgjgcgigiQhwhwg7iGgArTGFQgDgGgDgFQgCgFgDgFAjhMLIgHgEAigMnQgJgCgIgBIgwgZ");
	this.shape_108.setTransform(0.3,1.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AEAsSIB3AjIAQAIQACABACABQACABACABIA8AlQBFAvA+A+IBtCEQABABAAABIBiDNQAAADABAEQADAHACAHIAJBIIABAHQgXh7g7hsQg5hohahbQiZiYjAg5Qhzgih/AAQiiAAiMA2QguASgtAYQhWAvhNBHQgQAOgPAPQgWAXgVAWQAUgXAXgXQANgNAOgNIAEgCID+igIAEgDIAlgXQALgEAMgEQAPgEAOgEIDUgaIABAAQACAAABAAIBKADQAKABAKABIB2AjQAUAFATAGQC3A7CSCSQC2C2AuDuQADARADARQABAIABAIQgDgWgEgVIAIA+IgBgTABPtCQAFABAFAAQAFABAFAAAkssEQCLg1CfAAQBzAABoAcAMej+QADAKADALAM2hcIAMBXQAAABAAACIgEBJQAAAFgBAFQgBAGAAAGIgLA9QgDAQgEARIgDAUQgCAJgDAJQAAABgBACIAAABQgLAigLAjIgaA5QgEAJgFAKQgBAEgCADQgEAHgDAIIgGAHIh1CdQAeggAaghIAZgiQAJgOAJgPQgFAIgGAJQgDAGgEAGAM+BHQgBALgBALAM2hcIAHBiQAABMgMBIALlF9QACgDABgEQgFALgFALALGGwIASgdIANgWALxFjQgEAKgFAJAjyMVQBzAjCBAAQBVAABOgPQAugIArgNIgKAEIhBAcQgCAAgDABQgBAAgCAAQgCAAgDABQgCABgDAAQgaAFgaADQg2AHg5AAQgCAAgDAAIiWgNQgJgCgJgCQgEgBgEAAAD0MYQg0APg4AJQhBAJhFAAQh9AAhwggQiGgnhyhVQgEgDgFgDIg1gbQgEgEgEgEQgCgBgCgBQgKgKgKgJQgBgCgCgBQgEgFgFgFIhghwQghgvgagyQgEgIgFgJAJjIwIgZAiQgBABgBABQgDACgCACIgzAvQgDADgEADQgEADgDADIg1AnQgCACgCABIgxAVIgEACQAOgIAOgJICeh9QAAAAAAgBQALgLAKgKgAGwLDQgMAIgMAHQhOAshWAaAIQKHQgHAGgHAGAD+MUQBPgZBHgngAMnDPQgDALgDALAMqC7QgDATgFATAkHsbQAagJAagHArol1QA4hyBfhiQADgCACgDQACgBABgCIAXgOQB4hvCOg2AshjkQAMgiALgjQARgmARgmQADgGAEgHIBpiVAqtHiQgEgHgFgGQghgxgag0IgQg8IAAgCQA9CWB8B8QAvAvAyAmQAOALAOAJQBlBFB0AjAsFEoQACAFACAFIgxi1QACAPADAQQAOBIAaBEgAsBE0QgCgGgCgGAnnKZIgFgCQgwglgtgtQh7h7g9iWAidM5QgDgBgEgBQgJgCgKgBIg0gbIgHgEIj1h8AshjkQgbBqAAB0IAAABQAABCAKBAIgMgqQAAgCAAgBQAAgBAAgCQAAgEgBgEQAAgBAAgCQAAgDAAgCQAAgEAAgDQAAgDgBgDQAAgDAAgDQgBgSAAgSQAAh7Aghvg");
	this.shape_109.setTransform(0.3,1.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AE3sQIBcAcQANAIAOAIICXBzQAKAKAKAKQCdCcA6DFQACAHACAHIANBmIAKBIIAHA7QAAACAAADQAAAAAAACIgCA9QgBAKgBAKQgBAIgBAIIgJAuQgGAogJAmQgCAFgBAFQgLAjgMAkQgRAngRAnQg8B5hnBnQgBAAgBABQgCACgBACQgCABAAABIg2AwQgGAGgGAFAJFpxQAKAKALAKQBBBBAwBIQBHBrAiB7AErsTIAMADQCdA+CBCBQBqBqA8B9QgIgQgIgPQg6hrhchcQiGiGikg9gADQswIBbAdQgbgKgbgJQgTgFgSgFQhlgYhtAAQi1AAiaBCQghAOggASQhYAwhOBHQgRAPgQAQQgRASgRASIADgEIAbglQABAAAAAAIAEgFQACgBABgCIAZgQQBvhlCBg3QCYhACyAAQBmAABeAVgAjYs7IDVgaQADAAACAAIAAAAQACAAABAAQACAAABAAIBJADQAFAAAFAAQAFABAGABIBcAcQA8AOA5AWABRtSQAKABALABANBiIIACAGQAFAhADAhQACAjAAAjQAABIgKBDAL7lqIBGDiANQA/QgCASgCASAM0DfIgBAFQgBADgBACALOHDQgCADgCAEQgDADgCADQAFgHAEgGIAqhFAsNFBQA+CUB7B7QA9A9BEAuQDOCOEIAAQBWAABQgPQD2guC7i7QAJgKAKgKQgKAKgJAKQjHDHkIAoQhCAKhHAAQkYAAjXifQg2gogxgyQh6h6g+iTQgFgLgEgLQAEAJAEAKIg0i5IgMgqQAAgDAAgEQgBgCAAgBQgDgnAAgnQAAh9AghxQAMgkALgjQASgmARgnIAAgBQACgDACgDQAHgOAIgOIAFgIIACgCQgFAIgFAJAJtI9IA1g+IAjgvAIYKVQgCACgDADQgEADgDADIg2AoQjPCOkIAAQgDAAgDAAQgEAAgEAAQgDAAgCAAIiKgNQgKgCgKgBQgEgBgEgBIg4gOQjIg6ifieQg2g3grg7QgEgHgFgGIguhLQgFgKgFgLIgRg7IgBgDAklsjQAYgJAZgHQAOgEAOgEAklsjQAmgNAngLAlRsGIAFgDIAngaAp4owQAPgRAQgQQAPgOAOgOIAEgCIDniXArzmDQABgDACgEQAEgHAFgHQAEgIAEgHQAshIA7hBAr3l9QAJgRAKgRAp7osQg4A+gqBFgArxGUQgDgGgDgFQgCgFgCgFAieNJQgFgBgEgBQgKgBgJgCAtBCIQACALACAMQAOBKAaBFAsxjoQgcBrAAB3IAAABQABBIALBF");
	this.shape_110.setTransform(0.3,1.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AGmr8ICiB3QADADACACQAMALAMAMIBtCDQADAFADAEQBHBrAjB5IAKBJIAAABQgZh4g5hqQg8hsheheQififjIg7Qh3gjiEAAQjhAAi4BkQhsA7heBeQgXAXgVAYQAVgYAXgYQD9j9FmAAQFlAAD+D9QC5C6AyDyQAEAWAEAWQAAAFABAFQgEgbgFgaIALBRIAHBlQAAANgBAOQAAACAAACQAAADAAAEIgYCyQgBAFgCAGQAAACgBACQgLAkgNAkQgRAngSAoQg8B8hpBpIg7A2QgIAGgIAHIgxAlQgDACgDACQgEADgDACIgpAQQA0gfAwgmQACgBACgCQAoggAmgmQAAAAABAAQATgUATgVQAqgvAigyQABgCACgCIArhKAgotlQAWgBAUAAQDgAAC5BkQAFADAGADAgotlQAWgBAUAAQAuAAAtAEQCzARCWBVALSnmQBJBrAlB6QABAEABAEANXheIgCgcANXheIAMBZQAAABAAACIgFBVQAAABAAABQgHBIgSBEQgBAEgCAFQAAACgBACQACgIACgHAC0NJQgTAEgUADQhDALhIAAQiJAAh6gmQh3glhohHIg+gfQgQgNgPgNQgUgTgUgTQgBgCgBgBQgCgBgBgCQgCgBgBgCQgCgBgBgBQgBgCgBgBIhahtQgDgDgCgEQgDgDgCgEIgohCQgEgHgEgHQgCgEgCgFIgSg/IgBgDQA/CYB+B+QA+A+BFAvQABABACABIgGgCQgLgIgMgJQg2gogzgzQh9h9g/iXQgEgLgEgKQADAJAEAJIgziwIgMgrQgBgCAAgCQAAgDAAgDQAAgDgBgDQgBgLgBgKQAAgMgBgLQgBgUAAgUQAAiBAihzQALgjAMgkQARgoASgnQAEgHAEgHQAthRBAhKAkIMyQB+AnCMAAQBYAABRgPQAHgBAGgBIgEABIg5AWQgGABgIABQgLABgLABQgIABgHABQgKAAgLABQgIAAgJABQgSAAgSAAQgCAAgDAAQgEAAgEAAIiSgNQgKgCgLgCQgGgBgGgBAC4NIQAhgHAggJQghAKgkAHAImKgQgEADgEAEQgEADgEADAHlLSQgHAFgGAEAGvLrIj3BdAGvLrIi2BNAjktJIBCgPIB6gNApzpUQAJgKAKgKQCfifDIg8QALgDAKgDApzpUQAFgGAGgGQCtiuDXg7AsGmDQAphUA9hKIAtgzAr+GfQgGgMgGgLAihNaQgEgBgFgBQgMgCgMgCIg/gfIgHgDAnaLLQBiBDBwAkgArMHvQgFgHgFgHAtQCWQABAGABAHQAPBLAbBGAtAjtQgdBuAAB6QAABPANBM");
	this.shape_111.setTransform(0.3,1.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AGcsUQAHADAHAEIBeA9IBWBJQAKAJAJAJQAIAIAHAIAGcsUQADABAEACQAEACADACAkts5QCMgxCfAAQFsAAECECQAYAZAWAZQgWgZgYgYQiiiijLg8Qh6gkiHAAQiiAAiMAzIADgDIAmgXQAIgCAIgDIAzgNICUgUQAZgBAZAAQAvAAAuAEQADABAEAAAJeqHQAJAJAKAJQAIAIAHAIIArAvIA1BGQADAFADAFQADAEADAEAgwt2QAZgBAZAAQAzAAAxAFIBcAOIDaBQAKao2IBuCeQABABABABIAoBWQAAACABABQAcBIAPBNIAIA0IAFAoQACAgABAhQAAAJAAAJQAAB8gdBwQgMAkgMAlQgSAogSApQg+B+hrBrIg7A2QgFAEgEAEQgIAGgIAGIgwAkQi+CDjtAPQgIABgIAAQgYABgXAAQgDAAgCAAQgDAAgDAAQgDAAgCAAQgCAAgBAAQgCAAgCAAIiLgOQgFgBgEAAQgNgDgMgCALgnwQAGAJAGAJIBGCFQARApAMAqQABABAAABIAOBcQADARADAQQAAABAAABIACARIANBUQAAANAAAOQAAAugEAtQgIBMgTBHQgCAFgBAFALoHXQgBADgCACQgCADgBADQADgFADgGIAthKAsvFGQBBCeCDCEQA/A/BGAwQDWCTETAAQBZAABTgQQEAgvDCjDQAOgOAOgOQgOAOgOAPQjODOkSApQhGALhJAAQkjgBjfilQg4gpgzgzQiCiDhBidIgBgDIg2jPIgLgpQAAgCAAgCQAAgCAAgCQAAgFgBgFQAAgFAAgGQgBgVAAgVQAAiDAih2QgdBwAAB9QAAA/AIA9QADAXAFAYQAOBMAbBHQADAHACAGgAIxKsQgNALgMAJAKNJMIBJhZIAMgRAtQjyQAMgkAMgkQASgpASgoQA7h6BlhnQADgCADgDQABgCACgBIAWgOIACgBQgPAOgOAOQgYAYgWAYQAWgZAYgYQANgNAOgNQCGh9Cig6AkHtQQAEgBAFgCQAEgBADgBAkws2Qg7AVg3AeQheAzhTBNgAsUmLQADgHAEgHIBvieAsKGsQgFgKgFgJQgFgKgFgKIgQg8QgDgIgDgIAsKGsQgKgTgKgUAqCJkIgwg3QgMgPgLgOIgQgXQgFgGgEgHIgohAArZH5QgDgEgDgDQgBgDgCgDApcKJQgKgJgKgKQgJgJgJgJApcKJQgKgJgKgKQgJgJgJgJAikNqQgLgBgKgCQgGgCgHgBIi/hDIjXiY");
	this.shape_112.setTransform(0.3,1.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABxuCQA4AHA1ANQAGABAHACQABAAABAAQABABABAAQACAAABABQATAFAUAGQAQAGARAFQA6AWA2AdQBxA+BiBiQABABABABQACADADACQBABBAwBJQBDBkAkBxQACAIACAHQACAGACAFAjutoQAegIAfgHQBXgQBcAAQACAAACAAQABAAACAAQABAAACAAQABAAACAAQAkAAAkADQAFABAFAAQAIABAIAAABXuEQANABANABAN1iCQgWiZhIiFQg+hxhhhhQilimjQg9Qh7gkiKAAQjpgBi/BoQhwA+hiBhQgMANgMAMQAMgNAMgMQEGkHF0AAQFzAAEHEHQDSDSAqEYQABAEAAADQAIA5ABA8QABAEAAAFQAAADAAACQAAADAAADQAAB+geByIgVBBQgCAFgBAFQgDAFgCAFIggBIQgBACgBACQgBACgBACIgBACQACgFADgFANbkaQAEANAEANQAfBwACB7QAAAIAAAIQAAAvgFAuQgIBTgWBMANME4QgCAFgBAFQgDAFgCAFAkdNOQCHAtCYAAQBcAABUgRQAfgFAfgIQguANgvAHQhGALhLAAQiUAAiEgrQhbgehTgyIhOgjQgIgGgIgGQgJgHgJgHQgIgIgJgHQgKgJgKgJQgSgQgRgRQgDgEgDgDQgBgBgCgBQgBgBgBgBQgBgCgBgBQgBgBgCgBQgBgCgBgBQgBgBgBgBQglgngggqIgUgcQgBgCgCgDQgigxgag0IgPg3IAAgDQBCCYB+CAQBBBABHAxQAYARAZAOIgGgDQgjgVgigZQg5gqg1g1Qh+h+hCiXQgGgPgGgQQAGAOAGAOIhBjyIgJglQAAgDAAgDQgBgFAAgFQAAgCAAgCQAAgCAAgCQAAgFAAgFQgBgJAAgIQAAgGAAgFQAAiFAjh4QgeByAAB/QAAA4AGA3QAEAgAGAfQAPBOAcBJAKkJLIgZAiQgJAKgKALQgPAOgPAOIgeAbQgJAHgJAIIg5AqQjbCWkYAAQgDAAgCAAQgDAAgDAAIiagNQgLgCgKgCQgGgBgGgCAKkJLQAsgxAjg1QAYgjAUgkgADwNdIF6jXQACgBABgCQACgBABgCQAGgGAHgGQAUgUATgVAKLJtQgJAKgKAKQgPAPgPAOAI8K5QgFAEgFAEQgEADgEAEAtgj2QAMglAMglQATgpASgqQA8h7BnhpQAAAAABgBIAFgFQACgBABgCQCkiiDKg/QADgBAEgBQAKgCAKgDAkJthQANgDAOgEAsjmTQAEgHADgHQA3hiBRhXArpIAQgggugagyQgCgFgDgFAinN7QgFgBgFgBQgLgCgMgDIhOgjIgHgDAm+MEQBNAuBUAcg");
	this.shape_113.setTransform(0.3,1.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ACDuQIDZA5QABAAABABQArARApAXQBzA+BjBkQABABACABQABABABABQABACABABQBCBDAxBKQBJBtAkB7QAlB+AACMQAAACAAACQAAACAAAAIgCBDQgCALgBALQAAAIgBAIAKXpqQgKgKgKgKQioiojTg/Qh+gliMAAQjuAAjCBqQgHAEgHADQDHhyD3AAQF6AAELENQAKAKAKAKIB2CXQANAVALAWQALAUAKAUQA3BzATCBQALBIAABLQAAAIAAAJIgcDaABMuWQAcADAbADABMuWQALACALABQARABAQACAjtt6IC+gdQACAAABAAQAOgBAPAAQAEAAAFAAQAFAAADAAQACAAABAAQACAAABAAQAAAAABAAIBDACAOSBDQgCATgCATIgZCCQgBAGgCAGQgBACAAADIgPAvQgFAOgFAPQgFALgFALIgKAXQgJATgIATQhBCDhvBvQgTATgUATIgXAUQgEADgEAEQgjAdglAYANyD3QgBACAAACQABgEABgFQAAACgBADgANiErQgFAOgFAPQgFALgFALAN1DrQgCAIgCAJAqlJbQARASASASQBBBCBJAyQDeCYEcAAQBdAABWgQQARgDAQgEIgEACIg+AYQgDABgEAAQgGABgHABQgFAAgFABQggAEgiACQgbABgbAAQgGAAgGAAQgGAAgGAAQgCAAgCAAQgDAAgCAAIiIgOQgLgCgKgCQgGgBgGgBIhOgVQjLhAijijIhviFQgCgCgBgCQghgwgagyIhCixQgchvAAh7QAAiIAjh6QANglAMgmQASgqATgqQATgnAXglQABgBABgBIAcgkIACgEQgDAFgEAFQADgDACgDADSN2QgeAGgeAFQhIALhMAAQkuAAjnisQg6grg2g2QgRgRgRgTAHjMFICliFQABAAAAgBIByiIQAEgGAEgHQgBACgBACQgDAFgDAEAJFLHQglAfgmAaQgCABgDACIgrARIgCABQANgIAOgIQgMAIgNAHQh0BEiEAeAMDHqIAIgLQAVghATgjADWN0QCBgdBxhCgAqdpxQANgNANgOQCoioDUg/QANgEANgDArOoxIACgDQACgCACgCIBAhGIDIibArdoeQAFgGAFgHIAFgGQgIAJgHAKIgLAOAqdpxQAJgJAJgJQC4i5Dmg+ArMo0IAvg9AsymaQAEgHAEgHQAbgxAggtAirOLQgEgBgFgBQgMgCgMgCAtwj7QgeB1AACAQAABcAQBWQAPBQAdBKQA6CWBzB/Ar3IIQghgvgagxQgBgDgCgD");
	this.shape_114.setTransform(0.3,1.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AB3uiICqAkQBPAZBKAoQACABACABIDWCjIB2CNQADAFADAFQAFAGAEAHAEytpIDvB/QABABABABQABABABABQABABACABQABABACABQABABACABQAyAnAvAvICjDWQABACABACIBeEPQABAKACAJQABAIABAHIAIBuQAAAFAAAEQAAADAAACQAAADAAAEQAAACAAABQAABPgLBJQgGAugLArIgBADQAAABAAABQgBACAAABQgNAngNAnIghBKQgCAFgDAGQgCAEgCAEQACgEACgEQgGAMgGAMIgCADQAFgKAFgJQgEAIgEAIAEytpQgTgGgSgFQiAgmiPAAQgPAAgPAAQAPgBAPAAQCkAACQAygAj8uHID2giQAFAAADAAQACAAACAAQABAAACAAIBFADQALABALABQAJABAKABABOumQAUACAVACAMKoLQAHALAIAMIBiDRIACAHQACAHACAHIAgC2QABACAAABQABAMAAALQACAcAAAcQAAACAAACQAAACAAAAIgDBFQgCAVgCAWAN9kcQABAEABAEQABADABADAOXh/QgDgRgCgRAOiBFQgBALgBALQgBALgBAKIgKAvAODD4QgBADAAACANGGYQgCAGgDAFAqeJ7QAIAIAIAIQBDBDBJAyQDiCcEiAAQBfAABYgRQAQgDAPgDQgfAHggAFQhJALhOAAQkzAAjsivQg7grg2g3QgIgIgIgIgAKqJ1IgbAkQgCACgCACQgBABAAAAQgCACgBABQggAfggAbQghAbgjAYQjjCckiAAQgGAAgGAAQgGAAgFAAQgDgBgDAAIiPgOQgLgCgLgCQgDAAgDgBIgugLQjng9i0i1QgCgBgBgCQhBhBgxhIQgggtgZgxQgfg9gWhAQgLgigIgiQgbhuAAh5QAAiKAkh8QANgmAMgnQATgrATgqQAEgIAEgHQAEgIAFgHIBGhoQATgaAWgYQAEgFAEgEQACgCABgCQALgLAKgLQACgCACgCQAFgFAFgFQBlhlB0hAIGahrADYOFIGijgQANgNANgNQALgLALgLQA5g9AshBQATgcARgdIiJC3AqkqCQALgLALgLQCrirDXhAQAIgCAIgCAqkqCQAHgGAGgGQC3i5DkhAAtBmhQAohRA5hJIA8hHAiuObQgFAAgEgBQgKgCgJgCAuAj/QgfB2AACDQAABeARBXQAPBRAdBMQACAEACAFIARAoICvD+");
	this.shape_115.setTransform(0.3,1.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("ABPu3QDKAPCqBcQALAGALAHIDHCbIB5CSQACAEADADQAHALAHAKIBNCaQAMAhAKAhQAAABABABIAlDkQAAAIAAAJQAAAFAAAFQABAJAAAKQAAACAAACIgEBTQgBAMgBALAkEuWIDKgiQAQgBAQAAQABAAACAAQACAAACAAQAGAAAGgBQAFAAAFAAQABAAACAAQACABABgBIBGADQAMABALABQDKAUCpBiAEguBQgHgBgHgDQiCgmiSAAQi3AAieA8QgHADgHADQAIgDAHgDIAqgbQAUgGAUgGAEguBIF7DrICkDXQBOCMAYCiQABAHABAHIAFApQADApABAqQAAAHAAAHQAACFgfB5QgNAngNAnQgTAsgTAsQhDCHhzByIg3A0QgJAIgJAIQgoAggpAcAOniDQgXimhNiPQgDgDgBgEAMZoSQAKAOAJAOAOyBRQgBAGAAAFQgBAGAAAGIgFAkQgJA+gRA7AMnHxIAohEQABgBABgBACPOjIg4AUQgJAAgIABQgIABgJAAQgcACgbAAQgDAAgDAAQgCgBgDABQgDgBgCABQgEgBgEAAIiZgPQgKgCgKgBQgFgCgFAAIhDghIgCgBQCEAoCVAAQBKAABHgKQAUgDAUgEQCYgcCEhNQAGgDAGgEICah0QACgCACgBQABgCACgBQAOgNANgNIBwiEQAMgRALgRQgFAHgFAIQgHAJgGAKAHZMyQiSBVirAbQgHAAgGABQhEAKhIAAQiTAAiEgoQiIgph2hTIhDghQgGgFgGgEQgfgcgfgfQgCgBgBgBQgBgCgCgBQgDgEgDgDIhoh9QgDgEgDgEIgvhOQgEgHgEgHQgFgLgGgLIgPhBICCDfQABACACABQABACABACQACABABACQABABABABQAAABABABQACABABACQABACACACQACABABACQACACABACQACABABACQACACABACQAHAIAHAIQABABABABQACACACABQABACACACQAHAIAIAIQACACACACQACACACACQACACABACQADACACACQAFAFAFAEQABACACACQADADAEADIBSBGQAIAFAHAGIAOAKQAEACADADQBzBOCCAoIj8h7ACUOiIgFABAJkLYQgqAkgtAgQgGAEgGAEIgoAOIgBAAIlEBwAHkMrQgGAEgFADAuQkEQANgnANgnQATgsATgrQAFgIAEgHQADgGAEgGIB+itQABgCACgBIAXghQACgCADgDQABgBABgCIAEgEQACgBABgCIAagQAksuKQAOgEANgFQAHgBAGgCAlXtvIABAAQCdg9C3AAQCZAACJArAlltpIhcArQgCACgCAAIgkAVQgWAOgVAPQgNAIgMAJQgCACgBABQgOAKgOALQgaAWgaAXAq/p0QABgBABgCQADgDADgEQACgBABgCQADgCACgCQACgCACgDQACgBACgCQAEgEAEgFQAQgPAPgPIEpi7AtQmpICRjLAsTIbQgCgCgBgCQgBgCgCgCAogL/QgDgCgDgCQgEgEgFgDAizOrQgEAAgEgBQgLgCgLgCAurBSIgJgiQAAgCAAgCQAAgCAAgDQgBgQAAgQQAAiNAlh+QgfB4AACGQAAAsAEAsQAEAxAJAvQAPBTAeBNQABAEACAEIAEAGgAtIHFQgKgSgJgS");
	this.shape_116.setTransform(0.3,1.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("AHMtZIC9CIQASAQARARIB5CSQAEAFADAGQAFAHAFAHIA5BoIAtB1QAEAMADAMABRvHQDMAPCtBeQABAAABABAESuWQAHADAHACQgFgCgEgBQgDgBgCgBgAEguRIBCAXQCyBGCTCTQBoBpBCB5IBhEYQACAKACAKQACAOABAOIAHBXQAAAMABAMQgBADABADQgBABABABQAAAEAAAEQAACFggB6QAAABAAACQgNAngNApQgUAsgUAsQhDCKh1B1QgFAEgEAEQgQAPgPAPQgSAPgRAPQgcAWgbAUIgKAHQgGAEgFAEAtemwQAEgIAEgHQAEgIAEgHICcjMQAEgDADgEQBphpB5hCQChhYC+gTQACAAACAAQABAAACgBQACAAACAAQACAAACAAQACAAACAAQADgBADAAQACAAACAAQABAAABAAQABAAABAAQACgBACAAQACAAACAAQACAAABAAQABAAABAAQADAAACAAQABAAAAAAQADgBACAAQAFAAAEAAQAFAAAGAAQADAAAEgBQABABABgBQACABABgBQAHAAAIAAQAKAAAMABQAVAAAVACQAEAAAFAAQAEAAAEAAIDDAjAkGunID2gjQAFAAAFAAQADAAADAAQABAAACAAQABAAACAAQACAAABAAIBIADQALABAMABQDBASCjBaAOckoQABAFACAFQACAHACAHIAjDjQgBABABABQAAASAAATQAAACAAACQAAABAAABQAAACAAABQAAABAAACIgFBWQAAABAAACQgIBUgWBPQgBABAAABQAAABgBACAO5h3QgDgYgEgYAMloeQAJAMAIANAM0H7QgFAHgEAHQgDAFgEAFQAIgMAIgMIArhJAopMNIAVAPQDqChEtAAQAFAAAGAAQADAAACAAQAFAAAEAAIBpgJIAPgBADfOlQggAIggAFQgGAAgFABQAWgDAWgEQAPgDAQgEIDRhKQAfgPAdgSQBmg9BahaIB4iQACFO0Ig7AUQgmADgmAAQhhAAhbgQQgGgCgHgBQkQg2jQjRQg8g9gwhBQgGgKgHgJQgggvgagyQhVilgPjBQgBgSgBgTQgBgWAAgWQAAiQAliAQANgoANgnQAUgtAUgsQAfhAAqg8IBKhcQASgUATgUQCxiwDghDQAIgCAHgCAIbMmQgCACgDACQgDACgDACIgkAMIlnB6ArLqIQAOgPAOgPQC+i+DrhDAopMNQgEgCgDgDQg9gtg5g4QgIgJgJgJQAJAIAIAJQA8A8BBAvgAugkIQggB7AACHQAABhARBbQAQBUAeBOQAGAPAHAPIC9Eb");
	this.shape_117.setTransform(0.3,1.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("rgba(255,255,255,0.4)").ss(24.1,1,1).p("Attm4QBFiMB3h3QEekgGWAAQGWAAEfEgQEfEfAAGWQAACRgmCDIgbBRIgoBaQhFCEhxBxQkfEfmWAAQmWAAkekfQkfkfAAmVQAAiKAgh9IAbhRIAohaQBFiEBxhxQEfkfGWAAQGVAAEfEfQEfEfAAGVQAACKggB9ANuG5QhFCMh3B3QkfEgmVAAQmWAAkfkgQkfkfAAmWQAAiRAmiD");
	this.shape_118.setTransform(0.3,1.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).wait(1));

	// moon-insert
	this.instance_4 = new lib.moon("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1.566,1.566);
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,alpha:0.051},59).to({scaleX:1.57,scaleY:1.57,alpha:0.398},60).wait(1));

	// moon-animation
	this.instance_5 = new lib.moon("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1.566,1.566);
	this.instance_5.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,alpha:0.051},59).to({scaleX:1.57,scaleY:1.57,alpha:0.398},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-83,166,166.1);


(lib.dayTime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.birdwing("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-41.1,-222.8);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 96, 134, 75, 0)];
	this.instance.cache(-9,-8,18,16);

	this.instance_1 = new lib.birdwing("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-49.2,-222.8,1,1,0,0,180);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 159, 172, 111, 0)];
	this.instance_1.cache(-9,-8,18,16);

	this.instance_2 = new lib.birdwing("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.2,-204.8,1.368,1.368,0,0,180);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 96, 134, 75, 0)];
	this.instance_2.cache(-9,-8,18,16);

	this.instance_3 = new lib.birdwing("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(43.3,-204.8,1.368,1.368);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 159, 172, 111, 0)];
	this.instance_3.cache(-9,-8,18,16);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D589").s().p("AhIBjQAFhgApg4QAigxBBgYQgwBAgRA0QgWBDARBGg");
	this.shape.setTransform(39.5,-20.4,0.987,0.987);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4D685").s().p("AgTBnQgLg/grg3Qgqg1g9gjQBbAiApAdQA5ApAoBVQgEhEgZgqQgZgqgogJQCMAbBOCXg");
	this.shape_1.setTransform(-16.5,-25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#789B61").s().p("AgsA9Qgfg6Aag7QAdAAAXAXQAAgcAPgZQAQgaAcgMIAAD5QhJgCghg+g");
	this.shape_2.setTransform(-32.4,-30,0.885,0.885,0,-30,150);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#60864B").s().p("AgsA9Qgfg6Aag7QAdAAAXAXQAAgcAPgZQAQgaAcgMIAAD5QhJgCghg+g");
	this.shape_3.setTransform(-41.8,-24.5,0.885,0.885,-30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#789B61").s().p("AA2CjQgjAAgbgTQgqgcgDg9QgFhVAuhGQAZgmApgYIAAFFg");
	this.shape_4.setTransform(31.4,-27.9,0.776,0.699,0,-52.5,127.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60864B").s().p("AA2CjQgjAAgbgTQgqgcgDg9QgFhVAuhGQAZgmApgYIAAFFg");
	this.shape_5.setTransform(26.4,-21.2,0.776,0.699,-52.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#60864B").s().p("AA2CjQgjAAgbgTQgqgcgDg9QgFhVAuhGQAZgmApgYIAAFFg");
	this.shape_6.setTransform(43.5,-23.3,0.617,0.556,0,22.5,-157.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#789B61").s().p("AA2CjQgjAAgbgTQgqgcgDg9QgFhVAuhGQAZgmApgYIAAFFg");
	this.shape_7.setTransform(37.4,-25.9,0.617,0.556,22.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D4D589").s().p("AhIBjQAFhgApg4QAigxBBgYQgwBAgRA0QgWBDARBGg");
	this.shape_8.setTransform(-49.1,-30.6,0.987,0.987,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D4D589").s().p("AhIBjQAFhgApg4QAigxBBgYQgwBAgRA0QgWBDARBGg");
	this.shape_9.setTransform(17.1,-24.2);

	this.instance_4 = new lib.triangle("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-18.5,-69.3);

	this.instance_5 = new lib.triangle("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(17.2,-69.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#703106").s().p("AhWAZQgjgjgBgyID1AAQgBAygjAjQglAkgyAAQgxAAglgkg");
	this.shape_10.setTransform(-0.3,-51.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFAC00").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_11.setTransform(-16.5,-45.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFAC00").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_12.setTransform(-19.5,-52.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFAC00").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_13.setTransform(10.1,-94.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFAC00").s().p("AAADQQiJAAhihiQhhhhAAiJIAAhTQAECCBdBcQBiBhCJABIAAAAQCKgBBhhhQBdhcAFiCIAABTQAACJhiBhQhhBiiKAAg");
	this.shape_14.setTransform(-0.5,-39.4,1,1.043);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFC440").s().p("AAAGnQiJAAhihiQhhhhAAiKIAAizQAAiKBhhiQBihhCJAAIAAAAQCKAABhBhQBiBiAACKIAACzQAACKhiBhQhhBiiKAAg");
	this.shape_15.setTransform(-0.5,-61.8,1,1.043);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E29103").s().p("AAAGnQiJAAhihiQhhhhAAiKIAAizQAAiKBhhiQBihhCJAAIAAAAQCKAABhBhQBiBiAACKIAACzQAACKhiBhQhhBiiKAAg");
	this.shape_16.setTransform(-0.5,-61.8,1.21,1.043);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E29103").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_17.setTransform(-51.1,-50.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E29103").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_18.setTransform(-39.7,-92.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E29103").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_19.setTransform(44.3,-62.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E29103").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_20.setTransform(46.3,-89.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E29103").s().p("AAADQQiJAAhihiQhhhhAAiJIAAhTQAECCBdBcQBiBhCJABIAAAAQCKgBBhhhQBdhcAFiCIAABTQAACJhiBhQhhBiiKAAg");
	this.shape_21.setTransform(24.9,-40.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E29103").s().p("AAADQQiJAAhihiQhhhhAAiJIAAhTQAECCBdBcQBiBhCJABIAAAAQCKgBBhhhQBdhcAFiCIAABTQAACJhiBhQhhBiiKAAg");
	this.shape_22.setTransform(-27.6,-40.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFAC00").s().p("AAAGnQiJAAhihiQhhhhAAiKIAAizQAAiKBhhiQBihhCJAAIAAAAQCKAABhBhQBiBiAACKIAACzQAACKhiBhQhhBiiKAAg");
	this.shape_23.setTransform(-27.6,-62.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B75716").s().p("AAADQQiJAAhihiQhhhhAAiJIAAhTQAECCBdBcQBiBhCJABIAAAAQCKgBBhhhQBdhcAFiCIAABTQAACJhiBhQhhBiiKAAg");
	this.shape_24.setTransform(24.9,-40.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFAC00").s().p("AAAGnQiJAAhihiQhhhhAAiKIAAizQAAiKBhhiQBihhCJAAIAAAAQCKAABhBhQBiBiAACKIAACzQAACKhiBhQhhBiiKAAg");
	this.shape_25.setTransform(24.9,-62.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DD6B1D").s().p("AAAGnQiJAAhihiQhhhhAAiKIAAizQAAiKBhhiQBihhCJAAIAAAAQCKAABhBhQBiBiAACKIAACzQAACKhiBhQhhBiiKAAg");
	this.shape_26.setTransform(-28.9,-62.2,0.962,0.962);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#846844").ss(12.1).p("ACDBHQhTAAg7g7Qg7g7AAhT");
	this.shape_27.setTransform(-7,-110.9,0.618,0.618,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#99CC33").ss(0.1,1).p("AAAldIAAK7");
	this.shape_28.setTransform(-0.5,-31.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#A46621").ss(2,1).p("AAAhQIAACh");
	this.shape_29.setTransform(50,-139.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9FAC6F").s().p("AhPBZQghgjgHg2QAHg0AhgkQAigkAtAAQAtAAAiAkQAiAkAHA0QgHA2giAjQgiAkgtAAQgtAAgigkg");
	this.shape_30.setTransform(50,-150.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CEE4AE").s().p("AhVBnQgjgqAAg9QAAg8AjgqQAkgrAxAAQAyAAAjArQAkAqAAA8QAAA9gkAqQgjArgyAAQgxAAgkgrg");
	this.shape_31.setTransform(50,-152.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A46620").ss(1.8,1).p("AAgAgIg/g/");
	this.shape_32.setTransform(-60.1,-120.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#A46620").ss(1.8,1).p("AAAArIAAhV");
	this.shape_33.setTransform(-56.8,-157.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A46620").ss(1.8,1).p("AgvBGQBCAAARgjQAMgWAAhS");
	this.shape_34.setTransform(-52.1,-130.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#A46620").ss(1.8,1).p("AAwA5QhIAAgMgPQgLgOAAhU");
	this.shape_35.setTransform(-61.7,-145);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A46620").ss(1.8,1).p("AAAi4IAAFx");
	this.shape_36.setTransform(-56.8,-129.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9FAC6F").s().p("AhSBTQgjgiABgxQgBgwAjgiQAjgiAvgBQAxABAiAiQAjAiAAAwQAAAxgjAiQgiAigxAAQgvAAgjgig");
	this.shape_37.setTransform(-47.9,-138.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9FAC6F").s().p("AhGBHQgdgdAAgqQAAgoAdgdQAegeAoAAQAqAAAdAeQAdAdAAAoQAAAqgdAdQgdAdgqAAQgoAAgegdg");
	this.shape_38.setTransform(-66,-124.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CEE4AE").s().p("AB7gKQg0g3hHAAQhGAAg0A3Qg1A3gJBSQgCgPAAgQQAAhcA3hAQA3hCBMAAQBNAAA3BCQA3BAAABcQAAAQgCAPQgJhSg1g3g");
	this.shape_39.setTransform(-56.5,-161.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9FAC6F").s().p("AiDCeQg3hCAAhcQAAhcA3hBQA3hBBMAAQBNAAA3BBQA3BBAABcQAABcg3BCQg3BBhNAAQhMAAg3hBg");
	this.shape_40.setTransform(-56.5,-152.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D4D685").s().p("Ao1CFQjqg3AAhOQAAhNDqg3QDrg3FKAAQFLAADrA3QDqA3AABNQAABOjqA3QjrA3lLAAQlKAAjrg3g");
	this.shape_41.setTransform(-85.2,35.4,1.065,6.734);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D4D685").s().p("Ao1CFQjqg3AAhOQAAhNDqg3QDrg3FKAAQFLAADrA3QDqA3AABNQAABOjqA3QjrA3lLAAQlKAAjrg3g");
	this.shape_42.setTransform(85.2,35.4,1.065,6.734);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D4D685").s().p("AsfVOMAAAgqbIY/AAMAAAAqbg");
	this.shape_43.setTransform(0,88.8,0.994,1.029);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9FAC6F").s().p("AsVFqIgKrFQBbgbBvAeQBNAVB7A/QChBTAoARQBxAvBWAAQBXAABxgwQAngRCghSQB7hABMgVQBtgeBaAcIAALFg");
	this.shape_44.setTransform(-0.5,-83.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#60864B").s().p("Au6KyIgM1KQBug0CFA6QBfAoCUB5QDDCeAwAfQCIBbBpAAQBpAACIhbQAwghDBidQCUh5BcgoQCFg5BsA0IAAVKg");
	this.shape_45.setTransform(-0.5,-87.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#497936").s().p("Aj8ESIAAplQA4AAAoAuQApAvAABHQBjANA1BNQA6BTgVB+QDBAOgPDKg");
	this.shape_46.setTransform(-56.8,-158.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#477A32").s().p("AjrClQA1hTB2ALQgWh9A6hTQA1hNBkgNQAAhHAogvQAoguA4AAIAAJlInrB+Qg6h4A1hVg");
	this.shape_47.setTransform(53.4,-156.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#146645").s().p("Ao1CFQjqg3AAhOQAAhNDqg3QDrg3FKAAQFLAADrA3QDqA3AABNQAABOjqA3QjrA3lLAAQlKAAjrg3g");
	this.shape_48.setTransform(-0.5,-85,1.225,3.143);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_5},{t:this.instance_4},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dayTime, new cjs.Rectangle(-170.4,-228.6,340.8,457.2), null);


(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud-3
	this.instance = new lib.Tween22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.9,22.8);

	this.instance_1 = new lib.Tween23("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105,22.8);
	this.instance_1._off = true;

	this.instance_2 = new lib.halfcircle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(119.4,26.1,0.559,0.559,180,0,0,-0.2,-0.2);

	this.instance_3 = new lib.halfcircle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(89.4,22.4,0.785,0.785,180,0,0,-0.1,-0.1);

	this.instance_4 = new lib.halfcircle();
	this.instance_4.parent = this;
	this.instance_4.setTransform(106.5,23.1,1.063,1.063,180,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},239).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},159).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},80).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-105},239).wait(241));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},239).wait(1).to({x:-105.8,y:-29.2},0).to({x:107.8},159).to({_off:true},80).wait(1));

	// cloud-2
	this.instance_5 = new lib.Tween20("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-106.9,3.3);

	this.instance_6 = new lib.Tween21("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(105.8,3.3);
	this.instance_6._off = true;

	this.instance_7 = new lib.halfcircle();
	this.instance_7.parent = this;
	this.instance_7.setTransform(87.2,8.6,0.559,0.559,180,0,0,-0.2,-0.2);

	this.instance_8 = new lib.halfcircle();
	this.instance_8.parent = this;
	this.instance_8.setTransform(122,3.3,0.785,0.785,180,0,0,-0.1,-0.1);

	this.instance_9 = new lib.halfcircle();
	this.instance_9.parent = this;
	this.instance_9.setTransform(104.8,3.3,1.408,1.408,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},79).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},239).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},160).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,x:105.8},79).wait(401));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},79).wait(1).to({x:-109.1,y:41.7},0).to({x:105.3},239).to({_off:true},160).wait(1));

	// cloud-1
	this.instance_10 = new lib.Tween18("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(98.6,-47.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:-102.2},479).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-54.5,258.7,83.9);


// stage content:
(lib.halloweentypographydeletetype = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* declare global vars */
		
		var btn = exportRoot.btn_main_link;
		
		var backgroundDay = exportRoot.backgroundColorDay_mc;
		
		var dayTime = exportRoot.dayTime_mc;
		
		var scarecrow = exportRoot.scarecrow_mc;
		
		var clouds = exportRoot.clouds_mc;
		
		
		
		/* scarecrow hidden to begin, due to aesthetic layering */
		
		scarecrow.visible = false;
		
		/* button links to wholefoods on click */
		
		btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.wholefoodsmarket.com/site_search/pumpkin", "_blank");
		}
		
		
		
		/* when button is hovered over - daytime invisible, nighttime underneath */
		
		btn.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			scarecrow.visible = true;
			backgroundDay.visible = false;
			dayTime.visible = false;
			clouds.visible = false;
		}
		
		btn.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
		clouds.visible = true;
		backgroundDay.visible = true;
		dayTime.visible = true;
		scarecrow.visible = false;
		}
	}
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(94).call(this.frame_94).wait(6));

	// button
	this.btn_main_link = new lib.button();
	this.btn_main_link.parent = this;
	this.btn_main_link.setTransform(80,300.5);
	new cjs.ButtonHelper(this.btn_main_link, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main_link).wait(100));

	// wholefoods-logo
	this.instance = new lib.wholefoodslogosvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80,497.3,0.683,0.683,0,0,0,91.5,92);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 12, 140, 81, 0)];
	this.instance.cache(-2,-2,187,187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// clouds
	this.clouds_mc = new lib.clouds();
	this.clouds_mc.parent = this;
	this.clouds_mc.setTransform(81.4,63.5);

	this.timeline.addTween(cjs.Tween.get(this.clouds_mc).wait(100));

	// daytime
	this.dayTime_mc = new lib.dayTime();
	this.dayTime_mc.parent = this;
	this.dayTime_mc.setTransform(80.5,371.9);

	this.timeline.addTween(cjs.Tween.get(this.dayTime_mc).wait(100));

	// scarecrow
	this.scarecrow_mc = new lib.mc_scarecrow();
	this.scarecrow_mc.parent = this;
	this.scarecrow_mc.setTransform(80,210.4);

	this.timeline.addTween(cjs.Tween.get(this.scarecrow_mc).wait(100));

	// grass-2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99BF90").s().p("AhIBjQAFhgApg4QAigxBBgYQgwBAgRA0QgWBDARBGg");
	this.shape.setTransform(120,351.5,0.987,0.987);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99BF90").s().p("AgTBnQgLg/grg3Qgqg1g9gjQBbAiApAdQA5ApAoBVQgEhEgZgqQgZgqgogJQCMAbBOCXg");
	this.shape_1.setTransform(64,346.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(100));

	// leaf-4 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D935E").s().p("AgsA9Qgfg6Aag7QAdAAAXAXQAAgcAPgZQAQgaAcgMIAAD5QhJgCghg+g");
	this.shape_2.setTransform(48.1,341.9,0.885,0.885,0,-30,150);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#477F4A").s().p("AgsA9Qgfg6Aag7QAdAAAXAXQAAgcAPgZQAQgaAcgMIAAD5QhJgCghg+g");
	this.shape_3.setTransform(38.7,347.4,0.885,0.885,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(100));

	// leaf-3 copy
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D935E").s().p("AA2CjQgjAAgbgTQgqgcgDg9QgFhVAuhGQAZgmApgYIAAFFg");
	this.shape_4.setTransform(111.9,344,0.776,0.699,0,-52.5,127.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#477F4A").s().p("AA2CjQgjAAgbgTQgqgcgDg9QgFhVAuhGQAZgmApgYIAAFFg");
	this.shape_5.setTransform(106.9,350.7,0.776,0.699,-52.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#477F4A").s().p("AA2CjQgjAAgbgTQgqgcgDg9QgFhVAuhGQAZgmApgYIAAFFg");
	this.shape_6.setTransform(124,348.6,0.617,0.556,0,22.5,-157.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D935E").s().p("AA2CjQgjAAgbgTQgqgcgDg9QgFhVAuhGQAZgmApgYIAAFFg");
	this.shape_7.setTransform(117.9,346,0.617,0.556,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(100));

	// grass-1 copy
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#99BF90").s().p("AhIBjQAFhgApg4QAigxBBgYQgwBAgRA0QgWBDARBGg");
	this.shape_8.setTransform(31.4,341.3,0.987,0.987,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#99BF90").s().p("AhIBjQAFhgApg4QAigxBBgYQgwBAgRA0QgWBDARBGg");
	this.shape_9.setTransform(97.6,347.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(100));

	// glowingLeftEye_mc
	this.glowingLeftEye_mc = new lib.triangle();
	this.glowingLeftEye_mc.parent = this;
	this.glowingLeftEye_mc.setTransform(62,302.6);
	this.glowingLeftEye_mc.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,20);
	this.glowingLeftEye_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.glowingLeftEye_mc.cache(-7,-6,15,13);

	this.timeline.addTween(cjs.Tween.get(this.glowingLeftEye_mc).wait(100));

	// left eye
	this.instance_1 = new lib.triangle("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62,302.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// glowing-right-eye
	this.glowingRightEye_mc = new lib.triangle();
	this.glowingRightEye_mc.parent = this;
	this.glowingRightEye_mc.setTransform(97.7,302.6);
	this.glowingRightEye_mc.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,20);
	this.glowingRightEye_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.glowingRightEye_mc.cache(-7,-6,15,13);

	this.timeline.addTween(cjs.Tween.get(this.glowingRightEye_mc).wait(100));

	// right eye
	this.instance_2 = new lib.triangle("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(97.7,302.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// glowing-mouth
	this.glowingMouth_mc = new lib.halfcircle();
	this.glowingMouth_mc.parent = this;
	this.glowingMouth_mc.setTransform(80.2,320);
	this.glowingMouth_mc.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,20);

	this.timeline.addTween(cjs.Tween.get(this.glowingMouth_mc).wait(100));

	// mouth
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#703106").s().p("AhWAZQgjgjgBgyID1AAQgBAygjAjQglAkgyAAQgxAAglgkg");
	this.shape_10.setTransform(80.2,320);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(100));

	// pumpkin-front-spots
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC8821").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_11.setTransform(64,326.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC8821").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_12.setTransform(61,319.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC8821").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_13.setTransform(90.6,277.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(100));

	// pumpkin-front
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DD6B1D").s().p("AAADQQiJAAhihiQhhhhAAiJIAAhTQAECCBdBcQBiBhCJABIAAAAQCKgBBhhhQBdhcAFiCIAABTQAACJhiBhQhhBiiKAAg");
	this.shape_14.setTransform(80,332.5,1,1.043);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FBA725").s().p("AAAGnQiJAAhihiQhhhhAAiKIAAizQAAiKBhhiQBihhCJAAIAAAAQCKAABhBhQBiBiAACKIAACzQAACKhiBhQhhBiiKAAg");
	this.shape_15.setTransform(80,310.1,1,1.043);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(100));

	// pumpkin-spots-front
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B75716").s().p("AAAGnQiJAAhihiQhhhhAAiKIAAizQAAiKBhhiQBihhCJAAIAAAAQCKAABhBhQBiBiAACKIAACzQAACKhiBhQhhBiiKAAg");
	this.shape_16.setTransform(80,310.1,1.21,1.043);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(100));

	// pumpkin-spots-back
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CA611B").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_17.setTransform(29.4,321.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CA611B").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_18.setTransform(40.8,279.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CA611B").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_19.setTransform(124.8,309.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CA611B").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_20.setTransform(126.8,282);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(100));

	// pumpkin-right
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B75716").s().p("AAADQQiJAAhihiQhhhhAAiJIAAhTQAECCBdBcQBiBhCJABIAAAAQCKgBBhhhQBdhcAFiCIAABTQAACJhiBhQhhBiiKAAg");
	this.shape_21.setTransform(105.4,331.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(100));

	// pumpkin-left
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B75716").s().p("AAADQQiJAAhihiQhhhhAAiJIAAhTQAECCBdBcQBiBhCJABIAAAAQCKgBBhhhQBdhcAFiCIAABTQAACJhiBhQhhBiiKAAg");
	this.shape_22.setTransform(52.9,331.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DD6B1D").s().p("AAAGnQiJAAhihiQhhhhAAiKIAAizQAAiKBhhiQBihhCJAAIAAAAQCKAABhBhQBiBiAACKIAACzQAACKhiBhQhhBiiKAAg");
	this.shape_23.setTransform(52.9,309.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B75716").s().p("AAADQQiJAAhihiQhhhhAAiJIAAhTQAECCBdBcQBiBhCJABIAAAAQCKgBBhhhQBdhcAFiCIAABTQAACJhiBhQhhBiiKAAg");
	this.shape_24.setTransform(105.4,331.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DD6B1D").s().p("AAAGnQiJAAhihiQhhhhAAiKIAAizQAAiKBhhiQBihhCJAAIAAAAQCKAABhBhQBiBiAACKIAACzQAACKhiBhQhhBiiKAAg");
	this.shape_25.setTransform(105.4,309.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DD6B1D").s().p("AAAGnQiJAAhihiQhhhhAAiKIAAizQAAiKBhhiQBihhCJAAIAAAAQCKAABhBhQBiBiAACKIAACzQAACKhiBhQhhBiiKAAg");
	this.shape_26.setTransform(51.6,309.7,0.962,0.962);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).wait(100));

	// stem
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#846844").ss(12.1).p("ACDBHQhTAAg7g7Qg7g7AAhT");
	this.shape_27.setTransform(73.5,261,0.618,0.618,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#99CC33").ss(0.1,1).p("AAAldIAAK7");
	this.shape_28.setTransform(80,340.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).wait(100));

	// tree-right copy
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#A46621").ss(2,1).p("AAAhQIAACh");
	this.shape_29.setTransform(130.5,232.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#62A565").s().p("AhPBZQghgjgHg2QAHg0AhgkQAigkAtAAQAtAAAiAkQAiAkAHA0QgHA2giAjQgiAkgtAAQgtAAgigkg");
	this.shape_30.setTransform(130.5,221.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9EBE98").s().p("AhVBnQgjgqAAg9QAAg8AjgqQAkgrAxAAQAyAAAjArQAkAqAAA8QAAA9gkAqQgjArgyAAQgxAAgkgrg");
	this.shape_31.setTransform(130.5,219.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(100));

	// tree-left copy
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A46620").ss(1.8,1).p("AAgAgIg/g/");
	this.shape_32.setTransform(20.4,251.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#A46620").ss(1.8,1).p("AAAArIAAhV");
	this.shape_33.setTransform(23.7,214.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A46620").ss(1.8,1).p("AgvBGQBCAAARgjQAMgWAAhS");
	this.shape_34.setTransform(28.4,241.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#A46620").ss(1.8,1).p("AAwA5QhIAAgMgPQgLgOAAhU");
	this.shape_35.setTransform(18.8,226.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A46620").ss(1.8,1).p("AAAi4IAAFx");
	this.shape_36.setTransform(23.7,242.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#62A565").s().p("AhSBTQgjgiABgxQgBgwAjgiQAjgiAvgBQAxABAiAiQAjAiAAAwQAAAxgjAiQgiAigxAAQgvAAgjgig");
	this.shape_37.setTransform(32.6,233.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#62A565").s().p("AhGBHQgdgdAAgqQAAgoAdgdQAegeAoAAQAqAAAdAeQAdAdAAAoQAAAqgdAdQgdAdgqAAQgoAAgegdg");
	this.shape_38.setTransform(14.5,247.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9EBE98").s().p("AB7gKQg0g3hHAAQhGAAg0A3Qg1A3gJBSQgCgPAAgQQAAhcA3hAQA3hCBMAAQBNAAA3BCQA3BAAABcQAAAQgCAPQgJhSg1g3g");
	this.shape_39.setTransform(24,210);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#62A565").s().p("AiDCeQg3hCAAhcQAAhcA3hBQA3hBBMAAQBNAAA3BBQA3BBAABcQAABcg3BCQg3BBhNAAQhMAAg3hBg");
	this.shape_40.setTransform(24,219.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).wait(100));

	// front-hill copy
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#99BF90").s().p("Ao1CFQjqg3AAhOQAAhNDqg3QDrg3FKAAQFLAADrA3QDqA3AABNQAABOjqA3QjrA3lLAAQlKAAjrg3g");
	this.shape_41.setTransform(-4.7,407.3,1.065,6.734);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#99BF90").s().p("Ao1CFQjqg3AAhOQAAhNDqg3QDrg3FKAAQFLAADrA3QDqA3AABNQAABOjqA3QjrA3lLAAQlKAAjrg3g");
	this.shape_42.setTransform(165.7,407.3,1.065,6.734);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#99BF90").s().p("AsfVOMAAAgqbIY/AAMAAAAqbg");
	this.shape_43.setTransform(80.5,460.7,0.994,1.029);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]}).wait(100));

	// second-hill copy
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#62A565").s().p("AsVFqIgKrFQBbgbBvAeQBNAVB7A/QChBTAoARQBxAvBWAAQBXAABxgwQAngRCghSQB7hABMgVQBtgeBaAcIAALFg");
	this.shape_44.setTransform(80,288.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(100));

	// third-hill copy
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#477F4A").s().p("Au6KyIgM1KQBug0CFA6QBfAoCUB5QDDCeAwAfQCIBbBpAAQBpAACIhbQAwghDBidQCUh5BcgoQCFg5BsA0IAAVKg");
	this.shape_45.setTransform(80,284.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(100));

	// bush-left copy
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3C683E").s().p("Aj8ESIAAplQA4AAAoAuQApAvAABHQBjANA1BNQA6BTgVB+QDBAOgPDKg");
	this.shape_46.setTransform(23.7,213.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(100));

	// bush-right copy
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3C683E").s().p("AjrClQA1hTB2ALQgWh9A6hTQA1hNBkgNQAAhHAogvQAoguA4AAIAAJlInrB+Qg6h4A1hVg");
	this.shape_47.setTransform(133.9,215.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(100));

	// back-hill copy
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2D5433").s().p("Ao1CFQjqg3AAhOQAAhNDqg3QDrg3FKAAQFLAADrA3QDqA3AABNQAABOjqA3QjrA3lLAAQlKAAjrg3g");
	this.shape_48.setTransform(80,286.9,1.225,3.143);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#51939E").s().p("AsfVOMAAAgqbIY/AAMAAAAqbg");
	this.shape_49.setTransform(80,373.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48}]}).wait(100));

	// moon-animation
	this.instance_3 = new lib.moonanimation();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,196);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// background-day
	this.backgroundColorDay_mc = new lib.mc_backgroundColor();
	this.backgroundColorDay_mc.parent = this;
	this.backgroundColorDay_mc.setTransform(80,300.5);
	this.backgroundColorDay_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 206, 229, 172, 0)];
	this.backgroundColorDay_mc.cache(-82,-302,164,604);

	this.timeline.addTween(cjs.Tween.get(this.backgroundColorDay_mc).wait(100));

	// star-animation
	this.stars_mc = new lib.stars();
	this.stars_mc.parent = this;
	this.stars_mc.setTransform(78.2,60.1);

	this.timeline.addTween(cjs.Tween.get(this.stars_mc).wait(100));

	// background-night
	this.backgroundNight_mc = new lib.mc_backgroundColor();
	this.backgroundNight_mc.parent = this;
	this.backgroundNight_mc.setTransform(80,300.5);
	this.backgroundNight_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 131, 186, 120, 0)];
	this.backgroundNight_mc.cache(-82,-302,164,604);

	this.timeline.addTween(cjs.Tween.get(this.backgroundNight_mc).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,300.5,340.8,600);
// library properties:
lib.properties = {
	id: '2F00662CB6934AD78F98590A30D39704',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
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
an.compositions['2F00662CB6934AD78F98590A30D39704'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;