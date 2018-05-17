/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {takeLatest} from 'redux-saga';
import {call,fork,put} from 'redux-saga/effects';
import {getJsSDKConfig} from 'utils/service';
import * as fetch from 'utils/fetch';
import * as utils from 'utils/';
import {JYBPLAN180503} from 'utils/config'

function* getJsSDKConfigData({token}) {
    const configData = yield call(fetch.postApi,{
        params: getJsSDKConfig,
        info:{
			appId: getJsSDKConfig.appId,
			url: getJsSDKConfig.url
        }
    });
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看参数，可以在pc端打开。
        appId: configData.appId, // 必填，公众号的唯一标识
        timestamp: configData.timestamp, // 必填，生成签名的时间戳
        nonceStr: configData.nonceStr, // 必填，生成签名的随机串
        signature: configData.signature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function () {
        //分享到朋友圈
        wx.onMenuShareTimeline({
            title: token.title, // 分享标题
            desc: token.desc, // 分享描述
            link: utils.filterUrl(window.location.href),   //分享链接
            imgUrl: JYBPLAN180503.API_HOST + token.imgUrl, // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            success: function () {
            },
            cancel: function () {
            }
        });
        //分享给朋友
        wx.onMenuShareAppMessage({
            title: token.title, // 分享标题
            desc: token.desc, // 分享描述
            link: utils.filterUrl(window.location.href),   //分享链接
            imgUrl: JYBPLAN180503.API_HOST + token.imgUrl, // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
            },
            cancel: function () {
            }
        });
    });
}
function* wxGetJsSDKConfig() {
    yield takeLatest('wx/getJsSDKConfig', getJsSDKConfigData);
}
export default function*() {
	yield fork(wxGetJsSDKConfig);
}