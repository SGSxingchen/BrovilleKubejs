//code by Yakumo_UUZ

var Area
Area = JsonIO.read('kubejs/serverJson/enclosure.json')//读取文件

function between(x,num1,num2) {//判断一个数是否在两个数之间的函数
    return (x <= num1 && x>=num2)
}

function inArea(p,a) {//判断玩家是否在区域内的函数，二维
    return (
        between(p.x, a.Point1[0], a.Point2[0]) &&
        between(p.z, a.Point1[2], a.Point2[2])
        // && between(p.y, a.Point1[1], a.Point2[1])
    )
}

function inArea3D(p,a) {//判断玩家是否在区域内的函数，三维
    return (
        between(p.x, a.Point1[0], a.Point2[0]) &&
        between(p.y, a.Point1[1], a.Point2[1]) &&
        between(p.z, a.Point1[2], a.Point2[2])
    )
}

function deviation(x,p1,p2,d) {//偏移函数
    let midp = (p1+p2)/2
    if (x<midp) {
        return x-d
    }else if (x >= midp){
        return x+d
    }
}


function getGradientColor(value) {
    if (value < 0 || value > 5) {
        throw new Error('Value must be between 0 and 5');
    }

    // 线性插值计算红色和绿色的强度
    const red = Math.min(255, Math.floor(255 * value / 5));
    const green = Math.min(255, Math.floor(255 * (1 - value / 5)));

    // 将RGB值转换为十六进制代码
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');

    return `#${redHex}${greenHex}00`; // 固定蓝色分量为0
}



function SendAreaIllegleInfo(e){//发送进入违法区域的信息
    var time = e.player.persistentData.outLineTimer//获取玩家还剩几秒
    e.player.paint({
        area_info_1: {
            type: 'text',
            text: `§l！！！非法区域！！！`,
            x: 0,
            y: 20,
            alignX: 'center',
            alignY: 'top',
            color: `000000`,
            scale: 1.5,
            draw: 'always'
        },
        area_info_2: {
            type: 'text',
            text: `§l数据紊乱`,
            x: 0,
            y: 40,
            alignX: 'center',
            alignY: 'top',
            color: `000000`,
            scale: 1.5,
            draw: 'always'
        },
        area_info_3: {
            type: 'text',
            text: `§l请在${time}秒内返回开放区域`,
            x: 0,
            y: 60,
            alignX: 'center',
            alignY: 'top',
            color: `000000`,
            scale: 1.5,
            draw: 'always'
        }
    });
}

function SendAreaJoinInfo(e,i){//发送进入区域的信息
    var name = Area.AreaS[`Area${i}`].name
    var level = Area.AreaS[`Area${i}`].level
    var text = Area.AreaS[`Area${i}`].text
    e.player.paint({
        area_info_1: {
            type: 'text',
            text: `§l!!!你进入了${name}!!!`,
            x: 0,
            y: 20,
            alignX: 'center',
            alignY: 'top',
            color: `${getGradientColor(level)}`,
            scale: 1.5,
            draw: 'always'
        },
        area_info_2: {
            type: 'text',
            text: `§lLevel:${level}`,
            x: 0,
            y: 40,
            alignX: 'center',
            alignY: 'top',
            color: `${getGradientColor(level)}`,
            scale: 1.5,
            draw: 'always'
        },
        area_info_3: {
            type: 'text',
            text: `§l${text}`,
            x: 0,
            y: 60,
            alignX: 'center',
            alignY: 'top',
            color: `${getGradientColor(level)}`,
            scale: 1.5,
            draw: 'always'
        }
    });
    
    e.server.schedule(2 * SECOND, e.server,() => {
        if(!e.player.stages.has("illegleTime")){
            e.player.paint({'area_info_1': {remove: true}});
            e.player.paint({'area_info_2': {remove: true}});
            e.player.paint({'area_info_3': {remove: true}});
        }
    });
}

function SendAreaLeaveInfo(e,i){
    var name = Area.AreaS[`Area${i}`].name
    var level = Area.AreaS[`Area${i}`].level
    var text = Area.AreaS[`Area${i}`].text
    e.player.paint({
        area_info_1: {
            type: 'text',
            text: `§l---你离开了${name}---`,
            x: 0,
            y: 20,
            alignX: 'center',
            alignY: 'top',
            color: `${getGradientColor(level)}`,
            scale: 1.5,
            draw: 'always'
        },
        area_info_2: {
            type: 'text',
            text: `§lLevel:${level}`,
            x: 0,
            y: 40,
            alignX: 'center',
            alignY: 'top',
            color: `${getGradientColor(level)}`,
            scale: 1.5,
            draw: 'always'
        },
        area_info_3: {
            type: 'text',
            text: `§l${text}`,
            x: 0,
            y: 60,
            alignX: 'center',
            alignY: 'top',
            color: `${getGradientColor(level)}`,
            scale: 1.5,
            draw: 'always'
        }
    });
    e.server.schedule(2 * SECOND, e.server,() => {
        if(!e.player.stages.has("illegleTime")){
            e.player.paint({'area_info_1': {remove: true}});
            e.player.paint({'area_info_2': {remove: true}});
            e.player.paint({'area_info_3': {remove: true}});
        }
    });
}

onEvent("server.tick", event =>{
    Area = enclosure
})//同步

onEvent("player.tick",event =>{
    for (let i = 0; i < Area.settedArea; i++) {
        if (inArea(event.player, Area.AreaS[`Area${i}`]) && !event.player.stages.has(`inArea${i}`))
        {
            event.player.stages.add(`inArea${i}`)
            SendAreaJoinInfo(event,i)
            if(!Area.AreaS[`Area${i}`].status&& !event.player.stages.has("OP")){//检测玩家是否进入了未开放区域，且不是OP
                event.player.tell('当前区域未开放，3秒后遣返')
                let x = event.player.x
                let z = event.player.z
                let inow = i
                event.player.persistentData.outLineTimer = 4
                event.server.schedule(1 * SECOND, event.server, function (callback) {
                    event.player.persistentData.outLineTimer--;
                    if(event.player.persistentData.outLineTimer > 0){
                        callback.reschedule(1 * SECOND)
                        SendAreaIllegleInfo(event)
                    }else{
                        if (inArea(event.player, Area.AreaS[`Area${inow}`])) {

                            

                            event.player.setPosition(
                                deviation(x, Area.AreaS[`Area${inow}`].Point1[0], Area.AreaS[`Area${inow}`].Point2[0], 5), 
                                event.player.y, 
                                deviation(z, Area.AreaS[`Area${inow}`].Point1[2], Area.AreaS[`Area${inow}`].Point2[2], 5)
                                )//执行遣返的部分
                            event.player.tell("已遣返")
                        }
                    }
                    

                })
            }
        }//玩家进入区域时触发

        if (!inArea(event.player, Area.AreaS[`Area${i}`]) && event.player.stages.has(`inArea${i}`))
        {
            event.player.stages.remove(`inArea${i}`)
            SendAreaLeaveInfo(event,i)
            event.player.tell(`你现在离开了`+Area.AreaS[`Area${i}`].name)
        }//玩家离开区域时触发
    }
})

//就是界面上显示文字……实在有点看不清，但先不管了
