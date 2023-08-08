export default [{
		"baseUrl": "http://www.kmzyxx.com",
		"title": "踏星网",
		"isPage": 3, // 章节内容是否分页
		"searchIs": false,
		"isChapter": false, // 章节列表与详情页不同
		"isCoverBaseUrl": false, // 判断图片是否添加主浏览地址
		"isEditChapter": false,
		"startPage": 1,
		"id": "78213b237e",
		"city": {
			"rules": {
				"box": {
					"start": '<div id="sitebox">',
					"end": '<div class="clearfix"></div>'
				},
				"split": '<dl>',
				"cover": {
					"start": 'data-original="',
					"end": '" alt'
				},
				"title": {
					"start": 'alt="',
					"end": '" height'
				},
				"sub_title": {
					"start": '<dd class="book_des">',
					"end": '</dd>'
				},
				"author": {
					"start": '状态：<span>',
					"end": '</span>'
				},
				"last_chapter": {
					"start": 'html">',
					"end": '</a>'
				},
				"url": { 
					"start": '<a href="',
					"end": '">'
				},
			},
			"list": [{
				"title": "玄幻奇幻",
				"url": "http://www.kmzyxx.com/sort/1/xxx/",
			}, {
				"title": "都市小说",
				"url": "http://www.kmzyxx.com/sort/3/xxx/",
			}, {
				"title": "仙侠小说",
				"url": "http://www.kmzyxx.com/sort/2/xxx/",
			}, {
				"title": "历史小说",
				"url": "http://www.kmzyxx.com/sort/4/xxx/",
			}, {
				"title": "游戏小说",
				"url": "http://www.kmzyxx.com/sort/5/xxx/",
			}, {
				"title": "科幻小说",
				"url": "http://www.kmzyxx.com/sort/6/xxx/",
			}, {
				"title": "散文小说",
				"url": "http://www.kmzyxx.com/sort/7/xxx/",
			}, {
				"title": "侦探小说",
				"url": "http://www.kmzyxx.com/sort/8/xxx/",
			}]
		},
		bookinfo: {
			rules: {
				"box": {
					start: '<ul class="chaw_c" id="chapterList">',
					end: '</ul>'
				},
				"split": '<li>',
				"writing_status": {
					"start": '<strong>更新：</strong><span>',
					"end": "</span></li>"
				},
				"total_word_count": {
					"start": '<strong>字数：</strong><span>',
					"end": "</span></li>"
				},
				"chapter": {
					"title": {
						"start": '.html">',
						"end": '</a></li>'
					},
					"url": {
						"start": '<a href="',
						"end": '">'
					},
				}
			}
		},
		read: {
			rules: {
				content: ['<div id="TextContent" class="read-content">','</div>']
			}
		}
	}, {
		baseUrl: "https://m.txtuu.com",
		title: "笔屋网",
		searchIs: true,
		isPage: false, // 章节内容是否分页
		isChapter: false, // 章节列表与详情页不同 
		isCoverBaseUrl: true, // 判断图片是否添加主浏览地址
		isEditChapter: false, // 判断是否修改当前书籍地址
		startPage: 1, // 起始页数
		chapters: ".html",
		id: "32yasd836s",
		city: {
			rules: {
				"box": {
					start: '<div id="sitebox">',
					end: '<div class="clearfix"></div>'
				},
				"split": '<dl>',
				"cover": {
					start: '<img _src="',
					end: '" alt="'
				},
				"title": {
					start: '" alt="',
					end: '" height="'
				},
				"sub_title": {
					start: '<dd class="book_des"> ',
					end: '</dd>'
				},
				"author": {
					start: '最新小说">',
					end: '</a></span>'
				},
				"last_chapter": {
					start: '.html">',
					end: '</a></dd>'
				},
				"url": {
					start: '<a href="',
					end: '"><img _src="'
				},
			},
			list: [{
					"title": "玄幻小说",
					"url": "https://m.txtuu.com/sort/xuanhuan/xxx.html"
				},{
					"title": "奇幻小说",
					"url": "https://m.txtuu.com/sort/qihuan/xxx.html"
				}, {
					"title": "武侠小说",
					"url": "https://m.txtuu.com/sort/wuxia/xxx.html"
				}, {
					"title": "仙侠小说",
					"url": "https://m.txtuu.com/sort/xianxia/xxx.html"
				}, {
					"title": "都市小说",
					"url": "https://m.txtuu.com/sort/dushi/xxx.html"
				}, {
					"title": "历史小说",
					"url": "https://m.txtuu.com/sort/lishi/xxx.html"
				}, {
					"title": "军事小说",
					"url": "https://m.txtuu.com/sort/junshi/xxx.html"
				}, {
					"title": "游戏小说",
					"url": "https://m.txtuu.com/sort/youxi/xxx.html"
				}, {
					"title": "竞技小说",
					"url": "https://m.txtuu.com/sort/jingji/xxx.html"
				}, {
					"title": "科幻小说",
					"url": "https://m.txtuu.com/sort/kehuan/xxx.html"
				}, {
					"title": "灵异小说",
					"url": "https://m.txtuu.com/sort/lingyi/xxx.html"
				}
			]
		},
		bookinfo: {
			rules: {
				"box": {
					start: '<ul class="chaw">',
					end: '<ul>'
				},
				"split": '<li>',
				"total_word_count": {
					"start": '<strong>更新：</strong><span>',
					"end": "</span>"
				},
				"writing_status": {
					"start": '<strong>状态：</strong><span>',
					"end": "</span>" 
				},
				"chapter": {
					"title": {
						"start": '">',
						"end": '</a>'
					},
					"url": {
						"start": '<a href="',
						"end": '" title="'
					},
				}
			}
		}, 
		read: {
			rules: {
				content: ['<script>green();</script>', '<!--<a href']
			}
		},
		search: {
			baseUrl: "https://www.txtuu.com/search.html?searchkey=title", // 搜索地址
			isPage: false, // 判断是否可以换页
			rules: { // 抓取规则
				"box": {
					start: '<div id="sitebox">',
					end: '<div class="clearfix"></div>'
				},
				"split": '<dl id="nr">',
				"cover": {
					start: '<img _src="',
					end: '" alt="'
				},
				"title": {
					start: '" alt="',
					end: '" height="'
				},
				"sub_title": {
					start: '<dd class="book_des">',
					end: '</dd>'
				},
				"author": {
					start: '最新小说">',
					end: '</a></span>' 
				},
				"last_chapter": {
					start: '.html">',
					end: '</a></dd>'
				},
				"url": {
					start: '<a href="',
					end: '"><img _src="'
				}
			},
		}
	},
	{
		baseUrl: "http://m.zhaishuyuan.org",
		title: "斋书苑",
		isPage: true, // 章节内容是否分页
		isChapter: false, // 章节列表与详情页不同
		isCoverBaseUrl: false, // 判断图片是否添加主浏览地址
		isEditChapter: false, // 判断是否修改当前书籍地址
		searchIs: true, // 是否可以搜索书籍
		startPage: 1, // 起始页数
		id: "231hj23y7a",
		city: {
			rules: {
				"box": {
					start: '<div class="book_slist">',
					end: '<script>'
				},
				"split": '<div class="bookbox">',
				"cover": {
					start: '<div class="book-img fl"><img src="',
					end: '"></div>'
				},
				"title": {
					start: '<h4 class="bookname"><div>',
					end: '</div>'
				},
				"sub_title": {
					start: '<span>简介：</span>',
					end: '</div>'
				},
				"author": {
					start: 'title="作者：',
					end: '">'
				},
				"last_chapter": {
					start: '<span>最新：</span>',
					end: '</div>'
				},
				"url": {
					start: '<a href="',
					end: '">'
				},
			},
			list: [{
				"title": "玄幻小说",
				"url": "https://m.zhaishuyuan.org/category/xuanhuan_xxx.html",
			}, {
				"title": "武侠仙侠",
				"url": "https://m.zhaishuyuan.org/category/wuxia_xxx.html",
			}, {
				"title": "武侠小说",
				"url": "https://m.zhaishuyuan.org/category/dushi_xxx.html",
			}, {
				"title": "网游竞技",
				"url": "https://m.zhaishuyuan.org/category/wangyou_xxx.html",
			}, {
				"title": "穿越小说",
				"url": "https://m.zhaishuyuan.org/category/chuanyue_xxx.html",
			}, {
				"title": "科幻小说",
				"url": "https://m.zhaishuyuan.org/category/kehuan_xxx.html",
			}, {
				"title": "悬疑推理",
				"url": "https://m.zhaishuyuan.org/category/xuanyi_xxx.html",
			}, {
				"title": "其他小说",
				"url": "https://m.zhaishuyuan.org/category/qita_xxx.html",
			}]
		},
		bookinfo: {
			rules: {
				"box": {
					start: '<ol id="chapterList">',
					end: '</ol>'
				},
				"split": '<li class="w33p">',
				"total_word_count": {
					"start": '字数：<span>',
					"end": "</span>"
				},
				"writing_status": {
					"start": '状态：<span>',
					"end": "</span>"
				},
				"chapter": {
					"title": {
						"start": '" title="',
						"end": '" class'
					},
					"url": {
						"start": '<a href="',
						"end": '" title'
					},
				}
			}
		},
		read: {
			rules: {
				content: ['<div id="CongWenCha" style="">', '<div id="p1">']
			}
		},
		search: {
			baseUrl: "https://m.zhaishuyuan.org/search/?searchkey=title",
			isPage: false, // 判断是否可以换页
			rules: {
				"box": {
					start: '<div class="book_slist">',
					end: '<div class="show">'
				},
				"split": '<div class="bookbox">',
				"cover": {
					start: '<div class="book-img fl"><img src="',
					end: '"></div>'
				},
				"title": {
					start: '<h4 class="bookname"><div>',
					end: '</div>'
				},
				"sub_title": {
					start: '<span>简介：</span>',
					end: '</div>'
				},
				"author": {
					start: 'title="作者：',
					end: '">'
				},
				"last_chapter": {
					start: '<span>最新：</span>',
					end: '</div>'
				},
				"url": {
					start: '<a href="',
					end: '">'
				},
			},
		}
	},
	{
		baseUrl: "https://www.zxbiquge.net",
		title: "新笔趣阁",
		isPage: true, // 章节内容是否分页
		isChapter: false, // 章节列表与详情页不同
		isCoverBaseUrl: false, // 判断图片是否添加主浏览地址
		isEditChapter: false, // 判断是否修改当前书籍地址
		searchIs: false, // 是否可以搜索书籍
		startPage: 1, // 起始页数
		id: "231hj23y7b",
		city: {
			rules: {
				"box": {
					start: '<ul class="flex">',
					end: '</ul><script>'
				},
				"split": '<div class="img_span">',
				"cover": {
					start: 'data-original="',
					end: '" title="'
				},
				"title": {
					start: '.jpg" title="',
					end: '" /><span>'
				},
				"sub_title": {
					start: '<p class="indent">',
					end: '</p>'
				},
				"author": {
					start: '<i class="fa fa-user-circle-o">&nbsp;',
					end: '</i></a>'
				},
				"last_chapter": {
					start: '<em class="orange">',
					end: '</em>'
				},
				"url": {
					start: '<a href="',
					end: '"><img class="lazy"'
				},
			},
			list: [{
				"title": "玄幻小说",
				"url": "https://www.zxbiquge.net/xclass/xuanhuanxiaoshuo/xxx.html",
			}, {
				"title": "修真小说",
				"url": "https://www.zxbiquge.net/xclass/xiuzhenxiaoshuo/xxx.html",
			}, {
				"title": "都市小说",
				"url": "https://www.zxbiquge.net/xclass/dushixiaoshuo/xxx.html",
			}, {
				"title": "穿越小说",
				"url": "https://www.zxbiquge.net/xclass/chuanyuexiaoshuo/xxx.html",
			}, {
				"title": "网游小说",
				"url": "https://www.zxbiquge.net/xclass/wangyouxiaoshuo/xxx.html",
			}, {
				"title": "科幻小说",
				"url": "https://www.zxbiquge.net/xclass/kehuanxiaoshuo/xxx.html",
			}, {
				"title": "其他小说",
				"url": "https://www.zxbiquge.net/xclass/qitaxiaoshuo/xxx.html",
			}]
		},
		bookinfo: {
			rules: {
				"box": {
					start: '<ul id="ul_all_chapters">',
					end: '</ul>'
				},
				"split": '<li>',
				"writing_status": {
					"start": '<em class="s_gray">',
					"end": "</em>"
				},
				"total_word_count": {
					"start": 'property="og:novel:status" content="',
					"end": '">'
				},
				"chapter": {
					"title": {
						"start": 'title="',
						"end": '">'
					},
					"url": {
						"start": 'href="',
						"end": '" title'
					},
				}
			}
		},
		read: {
			rules: {
				content: ['<article id="article" class="content">', '<script>']
			}
		},
		search: {
			baseUrl: "https://www.xiashu9.com/search/?searchkey=title&searchtype=all", // 搜索地址
			isPage: false, // 判断是否可以换页
			rules: {
				"box": {
					start: '<ol class="book-ol book-ol-normal">',
					end: '</ol>'
				},
				"split": '<li class="book-li">',
				"cover": {
					start: 'data-echo="',
					end: '" class="book-cover"'
				},
				"title": {
					start: '<h4 class="book-title">',
					end: '</h4>'
				},
				"sub_title": {
					start: '<p class="book-desc">',
					end: '</p>'
				},
				"author": {
					start: '</use></svg>',
					end: '</span>'
				},
				"last_chapter": {
					start: '<em class="tag-small red">',
					end: '</em>'
				},
				"url": {
					start: '<a href="',
					end: '" class="book-layout">'
				},
			},
		}
	}
]
