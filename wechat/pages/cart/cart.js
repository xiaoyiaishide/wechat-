var teamArr = require('../../utils/team.js');
Page({
	data:{
		content:'哈哈哈,胖子',
		num1: 1,
		num2: 2,
		isShowContent: true,
		obj:{
			a:1
		},
		arr: [1,2,3],
		arr1: teamArr,
		arr2: [[1,2,3],[4,5,6],[7,8,9]]
	},
	tap1:function(argument) {
		// body...
		console.log(tap1);
	},
	tap2:function(argument) {
		// body...
		console.log(tap1);
	},
	tap3:function(argument) {
		// body...
		console.log(tap1);
	}
})