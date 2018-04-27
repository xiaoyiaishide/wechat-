Page({
	data:{
		autoplay:true,
		sliderList:[
			{ className:'bg-red', name:'slider1' },
			{ class	Name:'bg-blue', name:'slider2' },
			{ className:'bg-green', name:'slider3' }
		],
		sliderImgList:[
			{ selected:true, imageSource:'./image/banner1.jpg' },
			{ selected:false, imageSource:'./image/banner2.jpg' },
			{ selected:false, imageSource:'./image/banner3.jpg' }
		],
		content: 'aa',
		pickList:['a','b','c']
	},
	play:function() {
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