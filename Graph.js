function Graph(containerId) {

	this.container = $("#" + containerId);
	this.container.append("<canvas id='graph' height='" + this.container.height() + "px' width='" + this.container.width() + "px' style='border: 2px solid black; '/>");
	this.canvas = $("#graph");
	this.ctx = this.canvas[0].getContext("2d");
	
	var hSpacing, vOffset, vScale;
	
	this.loadData = function(data) {
		this.data = data;
		var ctx = this.ctx;
		var c = ctx.canvas;
		hSpacing = (c.width / data.length);
		vOffset = data[0];
		vScale = (data[data.length - 1] - data[0]) / c.height;
		console.log(c.height);

		ctx.strokeStyle = "#000000";
		data.forEach((t,i) => {
			ctx.beginPath();
			ctx.arc(i * hSpacing, (t - vOffset) / vScale, 2, 0, 6.28, false);
			ctx.stroke();
		});
	}
	
	this.circlePoint = function(pointIndex) {
		var ctx = this.ctx;
		this.data.forEach((t,i) => {
			if(i==pointIndex){
				ctx.beginPath();
				ctx.strokeStyle = "#FF00FF";
				ctx.arc(i * hSpacing, (t - vOffset) / vScale, 8, 0, 6.28, false);
				ctx.stroke();
				ctx.strokeStyle = "#000000";
			}
		});
	}
	
	this.horizLine = function(style, height) {
		var ctx = this.ctx;
		ctx.beginPath();
		ctx.strokeStyle = style
		ctx.moveTo(0, (height - vOffset) / vScale);
		ctx.lineTo(ctx.canvas.width, (height - vOffset) / vScale);
		ctx.stroke();
	}
	
}