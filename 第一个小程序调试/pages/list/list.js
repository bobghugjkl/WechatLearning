// pages/list/list.js
Page({
  //第三天
 
//响应用户点击等，app.js可以直接启动并运行整个小程序，其余的只能运行对应页面
  /**
   * 页面的初始数据
   */
  data: {
      count:0,//第四天。。。定义一个默认的count值





      //字符串类型的数据
      info:'hello world',
      //数组类型的数据
      msList:[{msg:'hello'},{msg:'world'}],
      imgSrc:"https://pic3.zhimg.com/v2-c6ae9c3aff36b9b221258f6a90577902_r.jpg",
      randomNum: Math.random()*10,//生成10以内的随机数
      randomNum1:Math.random().toFixed(2)
  },
  //修改count的值  +1按钮的点击处理函数
  CountChange(){
    //console.log('ok'),//测试是否可以（按钮是否可行）
    this.setData({
      
      count: this.data.count + 1//this访问到page中的某项
    })
  },


  btntap2(e){//接受对象e,只在测试的时候用到
    console.log(e);
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },




  btnTapHandler(event){//按钮的tap事件处理函数
    console.log(event)//事件参数对象e
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})