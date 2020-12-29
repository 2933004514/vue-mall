// 获取秒杀数据
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        intro: '沃派 海鲜礼盒海鲜大礼包海鲜伴手礼冷冻生鲜4',
        img: 'static/img/index/seckill/seckill-item1.jpg',
        price: 498
      },
      {
        intro: '顺丰空运 现摘巧克力奶油草莓3斤装 新鲜水果礼',
        img: 'static/img/index/seckill/seckill-item2.jpg',
        price: 48.8
      },
      {
        intro: '美果汇 现摘大连美早大樱桃500g 端午礼盒装 国',
        img: 'static/img/index/seckill/seckill-item3.jpg',
        price: 169.9
      },
      {
        intro: '采小海 海鲜大礼盒 干货 瑶柱+生蚝干+虾米+墨鱼',
        img: 'static/img/index/seckill/seckill-item4.jpg',
        price: 288
      },
      {
        intro: '美果汇 窈窕佳人水果礼盒（西柚+柠檬+百香果',
        img: 'static/img/index/seckill/seckill-item5.jpg',
        price: 79.9
      }
    ];
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    console.log([hours, minute, seconds]);

    const deadline = {
      hours: 1,
      minute: 38,
      seconds: 36
    };
    commit('SET_SECKILLS_INFO', [data, deadline]);
  });
};

// 轮播图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/1.jpg',
        'static/img/nav/2.jpg',
        'static/img/nav/3.jpg',
        'static/img/nav/4.jpg',
        'static/img/nav/5.jpg'
      ],
      activity: [
        'static/img/nav/nav_showimg1.jpg',
        'static/img/nav/nav_showimg2.jpg'
      ]
    };
    commit('SET_CAROUSELITEMS_INFO', data);
  });
};

// 专栏数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const computer = {
      detail: [
        {
          bigImg: 'static/img/index/computer/item-computer-1-1.jpg',
          itemFour: [
            {
              title: '越南进口白心火龙果',
              img: 'static/img/index/computer/item-computer-1-2.jpg'
            },
            {
              title: '广西沃柑',
              img: 'static/img/index/computer/item-computer-1-3.jpg'
            },
            {
              title: '进口 牛油果',
              img: 'static/img/index/computer/item-computer-1-4.jpg'
            },
            {
              title: '以色列 进口红西柚',
              img: 'static/img/index/computer/item-computer-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-1-6.jpg',
            'static/img/index/computer/item-computer-1-7.jpg',
            'static/img/index/computer/item-computer-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/computer/item-computer-2-1.jpg',
          itemFour: [
            {
              title: '绿鲜知 云南甜玉米',
              img: 'static/img/index/computer/item-computer-2-2.jpg'
            },
            {
              title: '花糯玉米',
              img: 'static/img/index/computer/item-computer-2-3.jpg'
            },
            {
              title: '新鲜临安天目山小香薯',
              img: 'static/img/index/computer/item-computer-2-4.jpg'
            },
            {
              title: '农场小新西兰板栗南瓜',
              img: 'static/img/index/computer/item-computer-2-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-2-6.jpg',
            'static/img/index/computer/item-computer-2-7.jpg',
            'static/img/index/computer/item-computer-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

export const loadEat = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const eat = {
      detail: [
        {
          bigImg: 'static/img/index/eat/item-eat-1-1.jpg',
          itemFour: [
            {
              title: '美威 智利原味三文鱼排 ',
              img: 'static/img/index/eat/item-eat-1-2.jpg'
            },
            {
              title: '獐子岛 冷冻蒜蓉粉丝扇贝 ',
              img: 'static/img/index/eat/item-eat-1-3.jpg'
            },
            {
              title: '翔泰 冷冻无公害金鲳鱼 ',
              img: 'static/img/index/eat/item-eat-1-4.jpg'
            },
            {
              title: '喜玉 大连冷冻即食海参 ',
              img: 'static/img/index/eat/item-eat-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-1-6.jpg',
            'static/img/index/eat/item-eat-1-7.jpg',
            'static/img/index/eat/item-eat-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/eat/item-eat-2-1.jpg',
          itemFour: [
            {
              title: '养乐多 活菌型乳酸菌饮料 ',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '熊氏牧场 加拿大进口猪软骨条',
              img: 'static/img/index/eat/item-eat-2-3.jpg'
            },
            {
              title: '【秒杀.158元】美享时刻 手工整切牛排套餐1',
              img: 'static/img/index/eat/item-eat-2-4.jpg'
            },
            {
              title: '温氏 供港黄油鸡',
              img: 'static/img/index/eat/item-eat-2-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-2-6.jpg',
            'static/img/index/eat/item-eat-2-7.jpg',
            'static/img/index/eat/item-eat-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_EAT_INFO', eat);
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/item-detail-1.jpg',
          'static/img/goodsDetail/item-detail-2.jpg',
          'static/img/goodsDetail/item-detail-3.jpg',
          'static/img/goodsDetail/item-detail-4.jpg'
        ],
        title: '【农场】寻味君 广西百香果 2斤 新鲜水果 单果40g起约15-25个',
        tags: [ '清甜多汁, 皇室贡品, 地理标志保护产品, 来自广西武鸣原产地直发, 好吃的柑橘, 在广西' ],
        promotion: ['跨店满减', '多买优惠'],
        remarksNum: 6000,
        setMeal: [
          [
            {
              img: '',
              intro: '',
              price: 12.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 12.0,
            sale: 394039
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 12.0,
            sale: 361194
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 19.8,
            sale: 103239
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price: 29.8,
            sale: 99740
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 24.8,
            sale: 47944
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 16.9,
            sale: 30318
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail/intro/1.jpg',
          'static/img/goodsDetail/intro/2.jpg',
          'static/img/goodsDetail/intro/3.jpg',
          'static/img/goodsDetail/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: '【农场】寻味君 广西百香果'
          },
          {
            title: '商品编号',
            content: '15927724967'
          },
          {
            title: '店铺',
            content: ' 寻味君生鲜专营店'
          },
          {
            title: '商品毛重',
            content: '1.0kg'
          },
          {
            title: '类别',
            content: '红色百香果'
          },
          {
            title: '商品产地',
            content: '广西'
          },
          {
            title: '保质期',
            content: '7天'
          },
          {
            title: '包装清单',
            content: '暂无'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '香甜可口(2871)', '新鲜十足(1394)', '酸甜可口(1270)', '味道一流(1239)', '个大质优(1015)', '果味醇香(578)', '口感极佳(589)', '分量十足(314)', '均匀透亮(203)', '完整无缺(61)', '颜色漂亮(45)', '携带方便(10)' ],
          remarksNumDetail: [ 375324, 500, 3300, 110025, 2400, 2000 ],
          detail: [
            {
              username: '燕窝0915',
              values: 5,
              content: '东东果园第五次种果树的收获：2斤百香果，寒冷冬日百香果加蜂蜜?沏水喝，酸甜爽口，暖胃佳饮',
              create_at: '2018-05-15 09:20'
            },
            {
              username: ' 成成成TC成爷',
              values: 5,
              content: '很新鲜，全部都是大果子，皮没干掉，还担心不花钱换购的东西不好，没想到打开箱子后很惊喜，喜欢百香果的香味，加点蜂蜜冲水喝味道杠杠的，值得推荐！',
              create_at: '2018-05-13 15:23'
            },
            {
              username: '186*****219da',
              values: 4.5,
              content: '味道闻起来很香，酸酸甜甜的，泡水喝，不错！',
              create_at: '2018-05-05 12:25'
            },
            {
              username: 'FaEcvGgnYhnS',
              values: 4.5,
              content: '百香果很新鲜，清香酸甜爽口，味道好极了，切开冲水很好喝，孩子非常爱喝，还送了小勺子，谢谢商家，好评。',
              create_at: '2018-04-06 16:23'
            },
            {
              username: '北极的雪zwy',
              values: 4.5,
              content: '京东果园种的百香果到了，每天沏水喝的时候放一两勺到杯子里，闻起来很香。喝着酸甜可口。',
              create_at: '2018-03-15 19:24'
            },
            {
              username: ' T***f',
              values: 5,
              content: '个头大小很均0匀，个头不小，很新鲜，味道酸甜，配上雪碧很好喝！',
              create_at: '2018-03-10 10:13'
            }
          ]
        }
      };
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        asItems: [
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 1080.00,
            intro: '兰蔻（LANCOME）小黑瓶全新肌底精华液50ml 化妆',
            sale: 9000
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 895.00,
            intro: '兰蔻（LANCOME）雪花霜塑颜紧致焕白霜50ml 化妆',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-as-img-3.jpg',
            price: 139.00,
            intro: 'WIS玻尿酸面膜 24片（三重玻尿酸精华 深层补水保',
            sale: 8800
          },
          {
            img: 'static/img/goodsList/item-as-img-4.jpg',
            price: 228.00,
            intro: '【专柜品质】圣罗兰口红（YSL）口红细管小金条',
            sale: 7990
          }
        ],
        goodsList: [
          {
            img: 'static/img/goodsList/item-show-1.jpg',
            price: 36.60,
            intro: '【农场】四川 安岳柠檬 3斤装 新鲜水果 3斤',
            remarks: 25000,
            shopName: '荣鼎生鲜专营店',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 12.00,
            intro: '【农场】滇派 云南木瓜红心牛奶木瓜4斤',
            remarks: 76000,
            shopName: '滇派生鲜专营店',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 12.00,
            intro: '【农场】寻味君 广西百香果 2斤 新鲜水果',
            remarks: 37000,
            shopName: '寻味君生鲜专营店',
            sale: 8600
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 12.00,
            intro: '【农场】鲜菓篮 水果猕猴桃奇异果绿心猕猴桃',
            remarks: 30000,
            shopName: '鲜菓篮旗舰店',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 12.00,
            intro: '【农场】云南蒙自石榴 高原甜水晶石榴 2',
            remarks: 60000,
            shopName: '蒙自石榴旗舰店',
            sale: 8560
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 19.80,
            intro: '寻味君 广西红心芭乐 5斤 番石榴 新鲜水',
            remarks: 90000,
            shopName: '寻味君生鲜专营店',
            sale: 8530
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 12.00,
            intro: '【农场】至诚芒果生鲜水果芒果 2斤实惠',
            remarks: 86000,
            shopName: '至诚川供生鲜专营店',
            sale: 8360
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 79.90,
            intro: '泰国进口椰青 椰子 9个装 大果',
            remarks: 140000,
            shopName: '水果京东自营专区',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/item-show-9.jpg',
            price: 23.90,
            intro: '精品甜脆柿子 6个装 单果130-180克 新',
            remarks: 61000,
            shopName: '水果京东自营专区',
            sale: 7360
          },
          {
            img: 'static/img/goodsList/item-show-10.jpg',
            price: 12.00,
            intro: '【农场】新鲜红富士苹果 水果3斤装 京东',
            remarks: 30000,
            shopName: '曙光沙窝生鲜专营店',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/item-show-11.jpg',
            price: 12.00,
            intro: '【农场】河北梨 约3斤',
            remarks: 28000,
            shopName: '快食尚生鲜专营店',
            sale: 6560
          },
          {
            img: 'static/img/goodsList/item-show-12.jpg',
            price: 12.90,
            intro: '新鲜橙子4斤小橙子16-20个新鲜水果坏果',
            remarks: 90000,
            shopName: '乡语小吖果蔬旗舰店',
            sale: 6360
          },
          {
            img: 'static/img/goodsList/item-show-13.jpg',
            price: 169.90,
            intro: '京觅 智利进口车厘子巨无霸JJJ',
            remarks: 6160,
            shopName: '水果京东自营专区',
            sale: 5530
          },
          {
            img: 'static/img/goodsList/item-show-14.jpg',
            price: 56.00,
            intro: '【金枕头榴莲旗舰店】金枕头榴莲肉泰国',
            remarks: 90060,
            shopName: '金枕头榴莲旗舰店',
            sale: 5560
          },
          {
            img: 'static/img/goodsList/item-show-15.jpg',
            price: 58.00,
            intro: '安励 越南进口红肉菠萝蜜 红心菠萝蜜新',
            remarks: 86606,
            shopName: '安励生鲜官方旗舰店',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/item-show-16.jpg',
            price: 12.90,
            intro: '【农场】滇派 新鲜百香果2斤净重新鲜水',
            remarks: 60800,
            shopName: '滇派生鲜专营店',
            sale: 3560
          },
          {
            img: 'static/img/goodsList/item-show-17.jpg',
            price: 12.0,
            intro: '【农场】梅珍 柚子蜜柚2个 福建新鲜水果',
            remarks: 60080,
            shopName: '梅珍生鲜旗舰店',
            sale: 3560
          }
        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

// 获取用户推荐
export const loadRecommend = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      [
        {
          img: 'static/img/otherBuy/1.jpg',
          intro: '寻味君 广西皇帝柑 贡柑沃柑新鲜橘子',
          price: 12.80
        },
        {
          img: 'static/img/otherBuy/2.jpg',
          intro: '寻味君 江西赣南脐橙',
          price: 22.80
        },
        {
          img: 'static/img/otherBuy/3.jpg',
          intro: '寻味君 广西红心芭乐',
          price: 19.80
        },
        {
          img: 'static/img/otherBuy/4.jpg',
          intro: '寻味君 越南红心火龙果',
          price: 29.80
        }
      ],
      [
        {
          img: 'static/img/otherBuy/5.jpg',
          intro: '寻味君 广西香蕉',
          price: 22.80
        },
        {
          img: 'static/img/otherBuy/6.jpg',
          intro: '寻味君 四川安岳黄柠檬',
          price: 22.80
        },
        {
          img: 'static/img/otherBuy/7.jpg',
          intro: '寻味君 广西白心番石榴',
          price: 19.80
        },
        {
          img: 'static/img/otherBuy/8.jpg',
          intro: '寻味君 广西北部湾烤海鸭蛋',
          price: 29.80
        }
      ]
    ];
    commit('SET_RECOMMEND_INFO', data);
  });
};

export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: '张三',
        province: '广东省',
        city: '广州市',
        area: '天河区',
        address: '燕岭路633号',
        phone: '152****0609',
        postalcode: '365421'
      },
      {
        addressId: '123458',
        name: '李四',
        province: '上海市',
        city: '上海市',
        area: '浦东新区',
        address: '沙新镇',
        phone: '158****0888',
        postalcode: '652222'
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};
/*
export const loadShoppingCart = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [{
      goods_id: 1529931938150,
      count: 1,
      img: 'static/img/goodsDetail/pack/1.jpg',
      price: 12,
      title: '【农场】寻味君 广西2百香果'
    }];
    commit('SET_SHOPPING_CART', data);
  });
};
*/
// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === 'Gavin' && data.password === '123456') {
      localStorage.setItem('loginInfo', JSON.stringify(data));
      commit('SET_USER_LOGIN_INFO', data);
      resolve(true);
      return true;
    }
    const userArr = localStorage.getItem('users');
    console.log(userArr);
    if (userArr) {
      const users = JSON.parse(userArr);
      for (const item of users) {
        if (item.username === data.username) {
          localStorage.setItem('loginInfo', JSON.stringify(item));
          commit('SET_USER_LOGIN_INFO', item);
          resolve(true);
          break;
        }
      }
    } else {
      resolve(false);
    }
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
};
