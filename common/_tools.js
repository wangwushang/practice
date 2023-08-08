import config from "./classify.data.js"

let _tools = {
	async getHtmlCode(url, showloading, data = {}) {

		if (!showloading) {
			uni.showLoading({
				title: "正在获取数据",
				mask: true
			})
		}
		console.log(`${url}`)
		return new Promise((resolve, reject) => {
			uni.request({
				url: url,
				method: "GET",
				data: data,
				header: {
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
				},
				success: (response) => {
					console.log("-------请求成功-------")
					resolve(response.data)
				},
				fail: (error) => {
					uni.hideLoading()
					console.log("-------请求失败-------")
					reject(error)
				}
			})
		})
	},
	//截取指定字符串
	async GetInterceptTheSpecifiedString(str, firstStr, secondStr) {
		if (str == "" || str == null || str == undefined) { // "",null,undefined
			return "";
		}
		if (str.indexOf(firstStr) < 0) {
			return "";
		}
		var subFirstStr = str.substring(str.indexOf(firstStr) + firstStr.length, str.length);
		var subSecondStr = subFirstStr.substring(0, subFirstStr.indexOf(secondStr));
		return subSecondStr;
	},
	// 检查网络
	async checkNetwork() {
		uni.getNetworkType({
			complete: function(res) {
				if (res.networkType == 'none') {
					setTimeout(() => {
						uni.showModal({
							title: "网络异常,请检查网络设置!",
							showCancel: false,
							success: function() {
								// if (uni.getSystemInfoSync().platform == 'ios') {
								// 	plus.ios.import("UIApplication").sharedApplication()
								// 		.performSelector("exit")
								// } else if (uni.getSystemInfoSync().platform ==
								// 	'android') {
								// 	plus.runtime.quit();
								// }
							}
						})
					}, 200)
					return false
				}
			}
		})
	},
	// 获取个人数据
	userInfo() {
		try {
			return JSON.parse(uni.getStorageSync('userInfo'));
		} catch (e) {
			return false;
		}
	},
	// 获取配置信息
	async getConfig() {
		try {
			// 获取内容
			let index = Number(uni.getStorageSync('configIndex'))
			// 判断如果index == 空
			if (!index || index == undefined || index < 0) {
				// 添加index 为 0 
				uni.setStorageSync('configIndex', 0)
				// 输出内容
				return config[0]
			}
			return config[index];
		} catch (e) {
			return false;
		}
	},
	// 获取配置信息的可视化列表
	async getConfigList() {
		// 定义返回数据数组
		let data = [];
		// 循环获取数据内容
		for (let i = 0; i < config.length; i++) {
			data.push({
				label: config[i].title,
				value: i
			})
		}
		// 输出数据
		return data;
	},
	// 获取指定配置信息
	async getConfigFirst(id) {
		// 定义返回数据数组
		let data = {}
		// 循环数据
		config.some((item, index) => {
			if (item.id === id) {
				data = item
				// 退出
				return true
			}
		})
		// 输出数据
		return data;
	},
	// 获取所有的配置信息
	async getAllConfig() {
		// 直接输出
		return config
	},
	// 获取本机唯一标识码
	//获取客户端ID
	getClientId() {
		//获取客户端ID和版本号
		var clientid = '';
		// #ifdef APP-PLUS
		// 苹果系统
		plus.device.getInfo({
			success: function(e) {
				clientid = e.uuid;
				uni.setStorageSync('clientid', clientid);
			},
			fail: function(e) {
				console.log(e);
			}
		});
		// 安卓系统
		plus.device.getAAID({
			success: function(e) {
				clientid = e.aaid;
				console.log(clientid);
				uni.setStorageSync('clientid', clientid);
			},
			fail: function(e) {
				console.log(e);
			}
		});
		//老版本、安卓模拟器
		if (clientid == '') {
			clientid = plus.device.uuid;
			uni.setStorageSync('clientid', clientid);
		}
		// #endif
		return clientid;
	}
} 

//定义全局变量
const baseurl = 'http://39.107.87.8:8083/api/home'
const baseWebsocket = 'ws://39.107.87.8:2346'
const baseImageUrl = "http://39.107.87.8:8083/storage"
// const baseurl = 'http://read.test/api/home'
// const baseWebsocket = 'ws://192.168.56.12:2346'

//导出
module.exports = {
	baseurl,
	baseWebsocket,
	_tools,
	baseImageUrl
}
