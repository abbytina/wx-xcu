// pages/message/message.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        messageList: [
            {
                id: 1,
                title: "LOVEMELOVEMYDOG",
                date: "2017-12-05",
                image: "https://image2.suning.cn/uimg/cms/img/151237225888634754.jpg",
                desc: "because you"
            },
            {
                id: 2,
                title: "LOVEIT",
                date: "2017-12-06",
                image: "https://image.suning.cn/uimg/aps/material/151245593926524449.jpg?from=mobile",
                desc: "越努力，越幸运"
            },
            {
                id: 3,
                title: "SWEET",
                date: "2017-12-07",
                image: "https://image3.suning.cn/uimg/cms/img/151246531867057145.jpg?from=mobile",
                desc: "人生如只如初见"
            },
            {
                id: 4,
                title: "sunny",
                date: "2017-12-08",
                image: "https://image5.suning.cn/uimg/cms/img/151236422366513287.jpg?from=mobile",
                desc: "蓝天白云"
            },
            {
                id: 5,
                title: "cool",
                date: "2017-12-09",
                image: "https://image.suning.cn/uimg/aps/material/151246212259006492.jpg?from=mobile",
                desc: "向阳"
            },
            {
                id: 6,
                title: "cookies",
                date: "2017-12-10",
                image: "https://image.suning.cn/uimg/aps/material/151237727150067410.jpg?from=mobile",
                desc: "你好呀，宝宝"
            }
        ]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        // console.log(this.data.messageList);
        var newMessage = this.data.messageList.concat(this.data.messageList);
        this.setData({
            messageList: newMessage
        });
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})