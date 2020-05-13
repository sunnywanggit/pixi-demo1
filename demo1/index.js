var windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

//创建渲染器，宽高为视窗的宽高
var pixiRender = new PIXI.autoDetectRenderer(windowWidth, windowHeight);

//把渲染器添加到HTML结构里
$(".game_con_wrap")[0].appendChild(pixiRender.view);

//创建一个容器对象：舞台
var objPixiContainer = new PIXI.Container();

//告诉渲染器去渲染舞台
pixiRender.render(objPixiContainer);

//图片预加载
PIXI.Loader.shared
    .add("https://g.mdcdn.cn/h5/img/act/201711/new-1-1.jpg")
    .add("https://g.mdcdn.cn/h5/img/act/201711/new-1-2.png")
    .on("progress", function () {
        //do sth when loading
    })
    .load(loadingFinish);

//加载完成回调
function loadingFinish() {
    //创建一个精灵
    var sprite = new PIXI.Sprite(
        PIXI.loader.resources["https://g.mdcdn.cn/h5/img/act/201711/new-1-1.jpg"].texture
    );
    sprite.x =  150
    sprite.y = 0
    sprite.width = 100
    sprite.height = 100
    //添加到舞台
    objPixiContainer.addChild(sprite)
    //渲染到渲染器
    pixiRender.render(objPixiContainer);



}

function sky(){
    console.log('sky');
    //二、每一帧要完成的动作
    //当Y轴的坐标大于-50时执行，飞机向前移动
    // if(plane.y>-50){
    //     sprite.y += 1;
    // }else{
    //     超出则回到坐标为400的位置
    //     plane.y=400;
    // }
}

objPixiContainer.ticker.add(sky);
