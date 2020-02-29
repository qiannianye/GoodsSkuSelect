Component({
  mixins: [],
  data: {
    specifications: [],
    selectAttrs: []
  },
  props: {
    skuList: [],
    attributeList: [],
    onChange: function onChange() {}
  },
  didMount() {
    this.dataProcessing();
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    /**
   * 选择属性
   */
    selectAttrValue(e) {
      const that = this;
      let {specifications, selectAttrs} = that.data;
      const {key, value, index, isSel} = e.target.dataset;

      //选中属性的UI处理
      for (var i = 0; i < specifications.length; i++) {
        let s = specifications[i];
        if (s.id == key) {
          for(var j = 0; j < s.values.length; j++) {
            let v = s.values[j];
            let selKey = 'specifications[' + i + '].values[' + j + '].isSel';
            if (index === j) {
              that.setData({[selKey]: !v.isSel});
            }else {
              that.setData({[selKey]: false});
            }
          }
          break;
        }
      }
      
      //联动
      if (isSel) { //取消选中
        for (var i = 0; i < specifications.length; i++) {
          let s = specifications[i];
          if (s.id != key) {
            for(var j = 0; j < s.values.length; j++) {
              let stateKey = 'specifications[' + i + '].values[' + j + '].state';
              that.setData({[stateKey]: false});
            }
          }else {
            selectAttrs.splice(i,1, s.id + '-');
            that.setData({selectAttrs});
            console.log('disSelect:',selectAttrs);
          }
        }
      }else { //选中
        for (var i = 0; i < selectAttrs.length; i++) {
          let s_attr = selectAttrs[i];
          if (s_attr.indexOf(key) != -1) { //替换
            let v = key + '-' + value;
            selectAttrs.splice(i,1,v);
            that.setData({selectAttrs});
            break;
          }
        }
        that.linkageForAttrbute();
      }
      this.confirmResultsWithAttribute();
    },

    /**
    * 处理数据
    */
    dataProcessing() {
      var skuList = this.props.skuList;
      var attributeList = this.props.attributeList; 

      //属性分类结构初始化
      var specifications = [];
      attributeList.forEach(function(a) {
        a.values = [];
        specifications.push(a);
      }); 

      //筛选属性分类
      skuList.forEach(function(sku) {
        let attrArr = sku.attr.split(',');
        attrArr.forEach(function(e){
          const index = e.indexOf('-');
          const attrKey = e.slice(0, index);
          const attrValue = e.slice(index+1);
          // console.log(attrKey,attrValue);
          specifications.forEach(function(a){
            if (a.id == attrKey &&  JSON.stringify(a.values).indexOf(attrValue) == -1) {
              a.values.push({
                name: attrValue, 
                state: false,
                isSel: false
              });
            }
          });
        });
      });
      this.setData({specifications});

      //找到第一个有库存的组合，将其状态初始化
      var selectAttrs = [];
      for (var i = 0; i < skuList.length; i++) {
        let sku = skuList[i];
        if (sku.stock > 0) {
          selectAttrs = sku.attr.split(',');
          //console.log('selectAttrs:', selectAttrs);
          break;
        }
      }
      if (selectAttrs.length === 0) { //没找到一个有库存的,全部置灰不可选
        for (var i = 0; i < specifications.length; i++) {
          let s = specifications[i];
          for (var j = 0; j < s.values.length; j++) {
            let stateKey = 'specifications[' + i + '].values[' + j + '].state';
            this.setData({[stateKey]: true});
          }
        }
        let {onChange} = this.props;
        onChange('','',false);
      }else {
        this.setData({selectAttrs});
        //selectAttrs的元素个数和specifications是一致的
        for (var i = 0; i < selectAttrs.length; i++) {
          let s_attr = selectAttrs[i];
          let s = specifications[i];
          for (var j = 0; j < s.values.length; j++) {
            let v = s.values[j];
            let attr_v = s.id + '-' + v.name;
            if (s_attr == attr_v) {
              let selKey = 'specifications[' + i + '].values[' + j + '].isSel';
              this.setData({[selKey]: true});
              break;
            }
          }
        }
        this.linkageForAttrbute();
        this.confirmResultsWithAttribute();
      }
    },

    //根据库存联动
    linkageForAttrbute() {
      let {specifications, selectAttrs} = this.data;
      let {skuList} = this.props;

      for (var i = 0; i < specifications.length; i++) {
        let s = specifications[i];
        let s_attr = selectAttrs[i];
        for (var j = 0; j < s.values.length; j++) {
          let v = s.values[j];
          let attr_v = s.id + '-' + v.name; 
          if (s_attr != attr_v) { //替换
            selectAttrs.splice(i,1,attr_v);
            // console.log('filters:',selectAttrs);
            // console.log('s_attr:',s_attr);
          }
          let filter_attr = selectAttrs.join();
          // console.log('filter_attr:',filter_attr);
          for (var k = 0; k < skuList.length; k++) {
            let sku = skuList[k];
            if (sku.attr == filter_attr) {
              let stateKey = 'specifications[' + i + '].values[' + j + '].state';
              this.setData({[stateKey]: sku.stock <= 0});

              if (sku.stock <= 0 && v.isSel) {
                let selKey = 'specifications[' + i + '].values[' + j + '].isSel';
                this.setData({[selKey]: false});
              }
              break;
            }
          }
          selectAttrs.splice(i,1,s_attr);
        }
      }
    },

    //根据选中的属性组合确定价格
    confirmResultsWithAttribute() {
      const that = this;
      let {selectAttrs} = that.data;
      var {skuList, onChange} = that.props;

      let price = '';
      let skuNames = '';
      let s_attr = selectAttrs.join();
      let firstSku = skuList[0];
      if (s_attr.length === firstSku.attr.length) { //全部属性已确认选中
        for (var i = 0; i < skuList.length; i++) {
          let sku = skuList[i];
          if (s_attr == sku.attr) {
            price = sku.price;
            let attr_names = '';
            selectAttrs.forEach(function(a){
              let arr = a.split('-');
              attr_names = attr_names + '/' + arr[1];
            });
            skuNames = attr_names.slice(1);
            break;
          }
        }
      }else { //属性未选全
        // my.showToast({
        //   type: 'none',
        //   content: '请选择商品属性!',
        //   duration: 3000
        // });
      }
      onChange(price, skuNames, true);
    },
  },
});


