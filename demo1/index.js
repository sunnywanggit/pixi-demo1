//舞台
var app=new PIXI.Application({
    width:500,
    height:900,
});
document.body.appendChild(app.view);

// 背景

// var back=new PIXI.Sprite.fromImage('../img/bg.jpg');
// app.stage.addChild(back);
// 飞机1
var plane=new PIXI.Sprite.fromImage('https://g.mdcdn.cn/h5/img/act/201711/new-1-1.jpg');
app.stage.addChild(plane);
plane.width = 60
plane.height = 60
plane.y=800;
plane.x=100;
plane.anchor.set(0.5,0.5)

//一、自定义帧频函数(有什么意义取决于他用于什么地方)
function sky(){
    //二、每一帧要完成的动作
    //当Y轴的坐标大于-50时执行，飞机向前移动
    if(plane.y>-50){
        plane.y -=1;
    }else{
        //超出则回到坐标为400的位置
        plane.y=800;
    }
}
// 自动调用sky，每秒调用自己电脑Hz的峰值
//三、app.ticker.add():添加帧频函数
app.ticker.add(sky);
