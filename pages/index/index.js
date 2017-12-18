//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        slideList: []
    },
    //事件处理函数
    bindViewTap: function () {

    },
    /**
    * 生命周期函数--监听页面加载
    */
    onLoad: function (options) {
    // console.log(this);
    wx.request({
        url: "https://locally.uieee.com/slides",
        data:{},
        header:{},
        method:"GET",
        dataType:"json",
        success:res=>{
            // console.log(res);
           this.setData({
               slideList:res.data
           });
        //    console.log(this.data.slideList);
        }
    }),
    wx.request({
        url: "https://locally.uieee.com/categories",
        data: {
            navList:[]
        },
        header: {},
        method: "GET",
        dataType: "json",
        success: res=> {
            // console.log(res);
            this.setData({
                navList:res.data
            });
            console.log(this.data.navList);
        },
        fail: function(res) {},
        complete: function(res) {},
    })
    },
    getUserInfo: function (e) {


    }
})
