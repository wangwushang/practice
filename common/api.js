// 引入tools类
import util from './_tools.js'
// 定义api类
let _api = {

	/**
	 * 发送api请求
	 * @param url    // 发送请求地址
	 * @param method // 发送请求类型
	 * @param data   // 发送的数据包
	 * @param auth   // 是否进行token认证
	 */
	async getApi(url = "", method = "GET", data = {}, auth = false) {
		// 显示等待框
		uni.showLoading({
			title: "正在加载内容"
		})

		// 获取个人信息
		const userInfo = util._tools.userInfo()
		// 判断当前发送的数据是否要认证
		if (auth && !userInfo) {
			// 当前用户没有登录 但发送需要用户认证的接口
			uni.showToast({
				title: "请重新登录～",
				icon: "none"
			})
			return false
		}
		// 配置请求头
		let headers = {
			Authorization: auth ? userInfo.token : ""
		}
		// 打印当前请求地址
		console.log(`${util.baseurl + url}`)
		// 进行请求
		return new Promise((resolve, reject) => {
			uni.request({
				url: util.baseurl + url,
				method: method,
				data: data,
				header: headers,
				success: (response) => {
					// 判断当前的类中会不会出现新的token
					if (response.header.Newtoken) {
						console.log("有新的token")
						// 更新token
						this.renewalToken(response.header.Newtoken)
					}
					// 遇到401时跳转到登录页 重新登录 并且删除本地的登录信息
					if(response.data.status == 401){
						// 弹出提示
						uni.showToast({
							title: "登录信息被毁，重新登录～",
							icon: "none"
						})
						// 删除本地的用户信息
						uni.removeStorageSync("userInfo");
						// 跳转到登录页
						setTimeout(function() {
							uni.navigateTo({
								url:"pages/index/login"
							})
						}, 500)
						// 结束本次事件
						return false
					}
					// 碰到异常类
					if (response.data.status === 40000 || response.data.status === 400 ||
						response.data.status == 403) {
						uni.showToast({
							title: response.data.message,
							icon: "none"
						})
						return false
					}
					uni.hideLoading()
					// 输出
					console.log("-------请求成功-------")
					resolve(response.data)
				},
				fail: (error) => {
					// 提醒用户
					uni.showToast({
						title: "网络错误～",
						icon: "none"
					})

					uni.hideLoading()
					console.log("-------请求失败-------")
					reject(error)
				}
			})
		})
	},
	renewalToken(token) {
		if (token) {
			console.log("http协议中更新token", token)
			// 获取用户信息
			let userInfo = util._tools.userInfo()
			// 替换token
			userInfo.token = token;
			// 更新本地缓存信息
			uni.setStorageSync('userInfo', JSON.stringify(userInfo));
		}
	}
}

//导出 
module.exports = {
	_api
}
