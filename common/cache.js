// 定义缓存本地数据库
let _cache = {

	// 创建本地数据表
	async CreateTable(table) {
		// 定义数据变量
		let data;
		// 获取本地缓存数据 
		try {
			data = uni.getStorageSync(table)
		} catch (e) {
			return {
				"status": false,
				"message": "数据库打开失败~"
			}
		}
		// 判断获取数据
		if (data) {
			// 序列化当前这个数据			
			let result = JSON.parse(data)
			return {
				"status": true,
				"message": "数据库打开成功~",
				"data": result.item
			}
		}
		// 数据库不存在创建数据库
		uni.setStorageSync(table, JSON.stringify({
			item: []
		}))
		// 创建成功
		return {
			"status": true,
			"message": "数据库创建成功~",
			"data":[]
		}

	},

	// 添加本地数据
	async created(table, data) {
		// 定义self
		let that = this;
		// 执行预加载方法
		let result = await that.CreateTable(table)
		// 判断当前的结果值
		if (result.status == false) {
			return {
				"status": false,
				"message": "数据库打开失败~"
			}
		}
		// 得到已有的结果信息
		let response = result.data
		//在这基础上添加我们现在的数据
		response.push({
			...data,
			"id": Math.random().toString(16).slice(2) ,
		})
		// 添加到缓存数据库
		uni.setStorageSync(table, JSON.stringify({
			item: response
		}))
		// 返回结果
		return {
			"status": true,
			"message": "添加成功~",
		}
	},

	// 查找本地数据
	async find(table) {
		// 定义self
		let that = this;
		// 执行预加载方法
		let result = await that.CreateTable(table)
		// 返回结果
		return {
			"status": true,
			"message": "查询成功~",
			"data": result.data
		}
	},

	// 根据条件查询
	async where(table, params) {
		// 定义self
		let that = this;
		// 执行预加载方法
		let result = await that.CreateTable(table)
		// 判断当前的结果值
		if (result.status == false) {
			return {
				"status": false,
				"message": "数据库打开失败~"
			}
		}
		// 得到已有的结果信息
		let response = result.data
		// 定义当前查询结果值
		let selectResult = [];
		// 循环当前的数组
		response.some((item, index) => {
			// 判断当前数据
			if (item[params.keys] === params.value) {
				// 赋值
				selectResult.push(item)
				// 退出当前的循环体
				return true;
			}
		})
		// 判断当前的结果值内容
		if (selectResult.length === 0) {
			return {
				"status": false,
				"message": "数据不存在~"
			}
		}
		// 返回当前结果值
		return {
			"status": true,
			"message": "查询成功~",
			"data": selectResult[0]
		}
	},

	// 删除本地数据
	async deleta(table,id) {
		// 定义self
		let that = this;
		// 执行预加载方法
		let result = await that.CreateTable(table)
		// 判断当前的结果值
		if (result.status == false) {
			return {
				"status": false,
				"message": "数据库打开失败~"
			}
		}
		// 保存数组长度
		let resultCount = result.data.length
		// 得到已有的结果信息
		let response = result.data
		// 循环当前的数组
		response.some((item, index) => {
			// 判断当前数据
			if (item.id === id) {
				// 删除数据
				response.splice(index, 1)
				// 退出当前的循环体
				return true;
			}
		})
		// 判断当前的结果值内容
		if (response.length === resultCount) {
			return {
				"status": false,
				"message": "删除失败～"
			}
		}
		// 保存当前新的数据
		uni.setStorageSync(table, JSON.stringify({
			item: response
		}))
		// 返回当前结果值
		return {
			"status": true,
			"message": "删除成功~",
		}
	},

	// 判断某个数据是否存在
	async check(table, params) {
		// 定义self
		let that = this;
		// 执行预加载方法
		let result = await that.CreateTable(table)
		// 判断当前的结果值
		if (result.status == false) {
			return {
				"status": false,
				"message": "数据库打开失败~"
			}
		}
		// 得到已有的结果信息
		let response = result.data
		// 将数组对象转换成字符串 进行查找数据
		let responseStr = JSON.stringify(response)
		// 查找数据
		if (responseStr.indexOf(params) === -1) {
			return {
				"status": false,
				"message": "数据不存在~"
			}
		}
		// 输出信息
		return {
			"status": true,
			"message": "数据存在~", 
		}
	},
}

module.exports = {
	_cache
}
