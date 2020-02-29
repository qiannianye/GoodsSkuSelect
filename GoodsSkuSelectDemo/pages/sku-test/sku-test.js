

/*
//一种属性
const skuList = [
  {
    "id": 10,
    "attr": "26-白色",
    "price": "1.0",
    "stock": 0
  },
  {
    "id": 11,
    "attr": "26-黑色",
    "price": "2.0",
    "stock": 20
  },
  {
    "id": 11,
    "attr": "26-粉色",
    "price": "10.0",
    "stock": 0
  },
  {
    "id": 11,
    "attr": "26-蓝色",
    "price": "8.0",
    "stock": 50
  },
];
const attributeList = [
  {
    "id": 26,
    "name": "颜色"
  },
];
*/



//两种属性
const skuList = [
  {
    "id": 10,
    "attr": "26-白色,27-32G",
    "price": "10.0",
    "stock": 20
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G",
    "price": "1.0",
    "stock": 0
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G",
    "price": "11.0",
    "stock": 0
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G",
    "price": "110.0",
    "stock": 20
  },
  {
    "id": 12,
    "attr": "26-银色,27-32G",
    "price": "118.0",
    "stock": 40
  },
  {
    "id": 13,
    "attr": "26-银色,27-64G",
    "price": "120.0",
    "stock": 0
  }
];
const attributeList = [
  {
    "id": 26,
    "name": "颜色"
  },
  {
    "id": 27,
    "name": "内存"
  }
];




/*
//四种属性
const skuList = [
  {
    "id": 10,
    "attr": "26-白色,27-32G,28-1年,29-70cm",
    "price": "10.0",
    "stock": 0
  },
  {
    "id": 10,
    "attr": "26-白色,27-32G,28-1年,29-80cm",
    "price": "10.0",
    "stock": 0
  },
  {
    "id": 10,
    "attr": "26-白色,27-32G,28-2年,29-70cm",
    "price": "20.0",
    "stock": 0
  },
  {
    "id": 10,
    "attr": "26-白色,27-32G,28-2年,29-80cm",
    "price": "20.0",
    "stock": 0
  },
  {
    "id": 10,
    "attr": "26-白色,27-32G,28-3年,29-70cm",
    "price": "30.0",
    "stock": 30
  },
  {
    "id": 10,
    "attr": "26-白色,27-32G,28-3年,29-80cm",
    "price": "30.0",
    "stock": 30
  },
  {
    "id": 10,
    "attr": "26-白色,27-32G,28-5年,29-70cm",
    "price": "50.0",
    "stock": 40
  },
  {
    "id": 10,
    "attr": "26-白色,27-32G,28-5年,29-80cm",
    "price": "50.0",
    "stock": 40
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G,28-1年,29-70cm",
    "price": "100.0",
    "stock": 50
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G,28-1年,29-80cm",
    "price": "100.0",
    "stock": 50
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G,28-2年,29-70cm",
    "price": "200.0",
    "stock": 60
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G,28-2年,29-80cm",
    "price": "200.0",
    "stock": 60
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G,28-3年,29-70cm",
    "price": "300.0",
    "stock": 0
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G,28-3年,29-80cm",
    "price": "300.0",
    "stock": 0
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G,28-5年,29-70cm",
    "price": "500.0",
    "stock": 80
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G,28-5年,29-80cm",
    "price": "500.0",
    "stock": 80
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G,28-1年,29-70cm",
    "price": "11.0",
    "stock": 0
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G,28-1年,29-80cm",
    "price": "11.0",
    "stock": 0
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G,28-2年,29-70cm",
    "price": "21.0",
    "stock": 0
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G,28-2年,29-80cm",
    "price": "21.0",
    "stock": 0
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G,28-3年,29-70cm",
    "price": "31.0",
    "stock": 70
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G,28-3年,29-80cm",
    "price": "31.0",
    "stock": 70
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G,28-5年,29-70cm",
    "price": "51.0",
    "stock": 20
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G,28-5年,29-80cm",
    "price": "51.0",
    "stock": 0
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G,28-1年,29-70cm",
    "price": "110.0",
    "stock": 90
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G,28-1年,29-80cm",
    "price": "110.0",
    "stock": 90
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G,28-2年,29-70cm",
    "price": "210.0",
    "stock": 90
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G,28-2年,29-80cm",
    "price": "210.0",
    "stock": 90
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G,28-3年,29-70cm",
    "price": "310.0",
    "stock": 90
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G,28-3年,29-80cm",
    "price": "310.0",
    "stock": 90
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G,28-5年,29-70cm",
    "price": "510.0",
    "stock": 0
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G,28-5年,29-80cm",
    "price": "510.0",
    "stock": 0
  }
];
const attributeList = [
  {
    "id": 26,
    "name": "颜色"
  },
  {
    "id": 27,
    "name": "内存"
  },
  {
    "id": 28,
    "name": "test-质保"
  },
  {
    "id": 29,
    "name": "test-尺码"
  },
];
*/

/*
//三种属性
const skuList = [
  {
    "id": 10,
    "attr": "26-白色,27-32G,28-1年",
    "price": "10.0",
    "stock": 0
  },
  {
    "id": 10,
    "attr": "26-白色,27-32G,28-2年",
    "price": "20.0",
    "stock": 0
  },
  {
    "id": 10,
    "attr": "26-白色,27-32G,28-3年",
    "price": "30.0",
    "stock": 30
  },
  {
    "id": 10,
    "attr": "26-白色,27-32G,28-5年",
    "price": "50.0",
    "stock": 50
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G,28-1年",
    "price": "100.0",
    "stock": 0
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G,28-2年",
    "price": "200.0",
    "stock": 20
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G,28-3年",
    "price": "300.0",
    "stock": 0
  },
  {
    "id": 11,
    "attr": "26-白色,27-64G,28-5年",
    "price": "500.0",
    "stock": 50
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G,28-1年",
    "price": "11.0",
    "stock": 70
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G,28-2年",
    "price": "21.0",
    "stock": 70
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G,28-3年",
    "price": "31.0",
    "stock": 0
  },
  {
    "id": 12,
    "attr": "26-黑色,27-32G,28-5年",
    "price": "51.0",
    "stock": 0
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G,28-1年",
    "price": "110.0",
    "stock": 90
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G,28-2年",
    "price": "210.0",
    "stock": 90
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G,28-3年",
    "price": "310.0",
    "stock": 0
  },
  {
    "id": 13,
    "attr": "26-黑色,27-64G,28-5年",
    "price": "510.0",
    "stock": 0
  }
];
const attributeList = [
  {
    "id": 26,
    "name": "颜色"
  },
  {
    "id": 27,
    "name": "内存"
  },
  {
    "id": 28,
    "name": "test-质保"
  },
];
*/



Page({
  data: {
    skuList: skuList,
    attributeList: attributeList,
    price: '',
    skuDesc: '',
    hasStock: true
  },
  onLoad() {},
  attributeOnChange(price, skuNames, hasStock) {
    console.log('attributeOnChange:',price, skuNames, hasStock);
    this.setData({price: price, skuDesc: skuNames, hasStock: hasStock});
  },
  confirmBuy() {
    let {price} = this.data;
    if (price == '') {
      my.showToast({
        type: 'none',
        content: '请选择商品属性!',
        duration: 1500
      });
      return;
    }
    console.log('confirm buy!');
  }
});


