Page({
	data:{
		autoplay:true,
		sliderList:[
			{ className:'bg-red', name:'slider1' },
			{ className:'bg-blue', name:'slider2' },
			{ className:'bg-green', name:'slider3' }
		],
		content: 'aa'
	},
	play:function() {
		debugger
		// body...
		this.setData({
			autoplay:!this.data.autoplay
		})
	},
	change:function(argument) {
		// body...
		console.log('执行了滚动！');
	}
})