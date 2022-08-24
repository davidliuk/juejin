// 导入axios实例
import httpRequest from '../../request/index'

// 定义接口的传参
interface ArticleInfoParam {
	ID: string
}

// 获取用户信息
export function apiGetArticleInfo() {
    return httpRequest({
		url: 'your api url',
		method: 'get',
	})
}
