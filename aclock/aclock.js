//new date获取当前时间getHours getMinute getScond
//时间与每一列对应 时间居中显示
//透明度设置 距离位置 通过设置class类名

function Index(dom,use24hours){
    this.column =Array.from(dom);
    this.use24hours = use24hours;
    this.creatDom();
    this.start();
    this.classList = ['visiable','close','close','far','far','distance','distance'];
};

Index.prototype.start = function(){
    var self = this;
    setInterval(function(){
        var c = self.getClock();
        // console.log(c);
        self.column.forEach(function(ele,index){
            var n = + c[index];
            var offset = n * 86;
           $(ele).css({
            'transform': 'translateY(calc(50vh - ' + offset + 'px + 10px))',

           });
           Array.from(ele.children).forEach(function(ele2,index2){
        var className = self.getClass(n,index2);
        $(ele2).attr('class',className); 
           })
        })
    },500);

};
Index.prototype.getClass = function(n,i){
    var className = this.classList.find(function(ele,index){
        return i-index === n || i + index === n;
    })
    return className || '';
}
//获取当前时间并获取当前格式
Index.prototype.getClock = function(){
    var d = new Date();
    return [this.use24hours ? d.getHours() : d.getHours%12 || 12,d.getMinutes(),d.getSeconds()].reduce(function(p,n){
        return p+('0'+n).slice(-2);
    },'')
};


Index.prototype.creatDom = function(){
    for(var i = 0; i <10; i++){
        var oDiv = $('<div>'+ i +'</div>');
        oDiv.appendTo($('.ten'));
    }
    for(var i = 0; i <6; i++){
        var iDiv = $('<div>'+ i +'</div>');
        iDiv.appendTo($('.six'));
    }
    }

new Index($('.column'),true);
