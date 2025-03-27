const base = {
    get() {
        return {
            url : "http://localhost:8080/xinliyalizixunpingpan/",
            name: "xinliyalizixunpingpan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xinliyalizixunpingpan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生心理压力咨询评判"
        } 
    }
}
export default base
