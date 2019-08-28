var ip = returnCitySN["cip"];
var address = returnCitySN["cname"];
var date  = new Date();
$.ajax({
    type: "post",
    url: "/insertVisitor",
    async: true, //异步
    data: {
        ip:ip,
        address:address,
        date:date
    },
    success: function(){
        console.log("%c%s","color: blue; font-size: 16px;","须知才高于志，方是快乐的本源。");
    },
    error: function() {
        console.error("亡羊补牢，犹未晚矣");
    }
});