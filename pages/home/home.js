const app = getApp();
Page({
  data:{
    name:'中国',
    now:app.globalData.now
  },
  buttonHandler(event){
    const that = this;
    wx.showModal({
        title:'确认修改',
        content:'你确认修改吗？',
        success(res){
            if(res.confirm){
                that.setData({
                    name:'柯南'
                },function(){
                    wx.showToast({
                        title:'操作完成',
                        duration:1000
                    });
                });
            }else if(res.cancel){
                console.log('用户点击取消');
            }
        }
    });
  }
});