function ajax(url, success, error, method) {
    let xml = new XMLHttpRequest();
    xml.open(method, url, true);
    xml.send();
    xml.onreadystatechange = function () {
        if(xml.readyState === 4){
            if(xml.status >= 200 && xml.status < 300 || xml.status === 304){
                success(xml);
            }else {
                error(xml)
            }
        }
    }
}