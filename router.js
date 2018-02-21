function route(pathname, hander) {
    var handles = hander.handles;
    console.log(handles);
    console.log("导航路径 " + pathname);
    if (pathname === "/favicon.ico") {
        console.log("ico跳过");
        return;
    }
    if (typeof handles[pathname] === "function") {
        console.log("路由执行方法处理方法 ");
        handles[pathname]();
    } else {
        console.log("无效访问路径! " + pathname);
    }
}

exports.route = route;