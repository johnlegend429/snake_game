class Hexagon {
	constructor(ctx, x, y) {
		this.x = x;
		this.y = y;
		this.ctx = ctx;
		this.size = 20;
		this.fillStyle = "gray";
		this.strokeStyle = "black";
		this.lineWidth = 2;
		this.points = [];
		this.initialPoint = new Point(x + this.size * Math.cos(0), y + this.size * Math.sin(0));
		for (var i = 0; i < 7; i++) {
			var p = x + this.size * Math.cos(i * 2 * Math.PI / 6);
			var q = y + this.size * Math.sin(i * 2 * Math.PI / 6);
			var point = new Point(p, q);
			point = ut.rotate(point, new Point(x, y), 60);
			this.points.push(point);
		}

	}

	draw() {

		this.ctx.strokeStyle = this.strokeStyle;
		this.ctx.fillStyle = this.fillStyle;

		// fill
		this.ctx.beginPath();
		this.ctx.moveTo(this.initialPoint.x, this.initialPoint.y);
		for (var i = 0; i < 7; i++) {
			this.ctx.lineTo(this.points[i].x, this.points[i].y);
		}
		this.ctx.closePath();
		this.ctx.fill();

		// stroke
		this.ctx.beginPath();
		this.ctx.moveTo(this.initialPoint.x, this.initialPoint.y);
		for (var i = 0; i < 7; i++) {
			this.ctx.lineTo(this.points[i].x, this.points[i].y);
		}
		this.ctx.closePath();
		this.ctx.lineWidth = 3;
		this.ctx.stroke();

	}
}
