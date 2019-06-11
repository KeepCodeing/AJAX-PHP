function obj2str(data) {
    let str = [];
    for(let i in data){
        // 中文设置
        str.push(encodeURIComponent(i)+'='+encodeURIComponent(data[i]));
    }
    // 转换为key:value&格式
    return str.join('&');
}
// 请求地址 请求的参数 成功回调 失败回调 请求类型 超时
function ajax(url, obj_data, success, error, method, timeout) {
    let xml;
    let timer;

    if(window.XMLHttpRequest){
        xml = new XMLHttpRequest()
    }else {
        xml = new ActiveXObject('Microsoft.XMLHTTP')
    }

    xml.open(method, url+'?t='+new Date().getTime()+'&'+obj2str(obj_data), true);
    // 发送post请求时
    if(method === "POST"){
        // 设置一个请求头
        xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xml.send(obj2str(obj_data));
    }else {
        xml.send();
    }
    xml.onreadystatechange = function () {
        if(xml.readyState === 4){
            clearInterval(timer);
            if(xml.status >= 200 && xml.status < 300 || xml.status === 304){
                success(xml);
            }else {
                error(xml)
            }
        }
    };

    // 判断有没有设置超时
    if(timeout){
        timer = setInterval(function () {
            // 超时中断连接
            xml.abort();
            clearInterval(timer)
        }, timeout)
    }

}