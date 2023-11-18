//code by LanStarD

var Area
Area = JsonIO.read('kubejs/serverJson/enclosure.json')//读取文件
function inArea(p,a) {//判断玩家是否在区域内的函数，二维
    return (
        between(Math.floor(p.x), a.Point1[0], a.Point2[0]) &&
        between(Math.floor(p.z), a.Point1[2], a.Point2[2])
        //&& between(p.y, a.Point1[1], a.Point2[1])
    )
}

function inArea3D(p,a) {//判断玩家是否在区域内的函数，三维
    // Utils.server.tell(`${p.x},${a.Point1[0]},${a.Point2[0]}`)
    // Utils.server.tell(`${p.y},${a.Point1[1]},${a.Point2[1]}`)
    // Utils.server.tell(`${Math.floor(p.z)},${a.Point1[2]},${a.Point2[2]}`)
    return (
        between(Math.floor(p.x), a.Point1[0], a.Point2[0]) &&
        between(Math.floor(p.y), a.Point1[1], a.Point2[1]) &&
        between(Math.floor(p.z), a.Point1[2], a.Point2[2])
    )
}

function inAreasOfName(e,name){
    for (let i = 0; i < Area.settedArea; i++) {
        if (Area.AreaS[`Area${i}`].name.includes(name)){
            return inArea3D(e, Area.AreaS[`Area${i}`])
        }
    }
}
function deviation(x,z,area,d) {
    var x1 = area.Point1[0]
    var x2 = area.Point2[0]
    var z1 = area.Point1[2]
    var z2 = area.Point2[2]
    
    var midX = ( x1 + x2 ) / 2
    var midZ = ( z1 + z2 ) / 2

    if( x - x1 < z - z1 ){
        if( z < midZ ){
            return [x + 0.5, z - d]
        }
        else{
            return [x + 0.5, z + d]
        }
    }
    else{
        if( x < midX ){
            return [x - d, z + 0.5]
        }
        else{
            return [x + d, z + 0.5]
        }
    }
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
            text: `§l${time}秒后遣返`,
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
            text: `§lLevel:${Math.floor(level * 10) / 10}`,
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
    
    e.server.schedule(3 * SECOND, e.server,() => {
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
            text: `§lLevel:${Math.floor(level * 10) / 10}`,
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
    e.server.schedule(3 * SECOND, e.server,() => {
        if(!e.player.stages.has("illegleTime")){
            e.player.paint({'area_info_1': {remove: true}});
            e.player.paint({'area_info_2': {remove: true}});
            e.player.paint({'area_info_3': {remove: true}});
        }
    });
}

onEvent("server.tick", event =>{
    Area = enclosure
})

onEvent("player.tick",event =>{
    for (let i = 0; i < Area.settedArea; i++) {
        // Utils.server.tell(`${inArea3D(event.player, Area.AreaS[`Area${i}`])}`)
        // 隐藏区域返回
        if(Area.AreaS[`Area${i}`].name.includes("隐藏")){
            return
        }
        if (inArea3D(event.player, Area.AreaS[`Area${i}`]) && !event.player.stages.has(`inArea${i}`))
        {
            event.player.stages.add(`inArea${i}`)
            SendAreaJoinInfo(event,i)
            //event.player.tell(`你现在进入了`+Area.AreaS[`Area${i}`].name)
            if(!Area.AreaS[`Area${i}`].status&& !event.player.stages.has("OP")){//检测玩家是否进入了未开放区域，且不是OP
                event.player.tell('当前区域未开放')
                let x = event.player.x
                let z = event.player.z
                var deviations = deviation(x - 0.5,z - 0.5, Area.AreaS[`Area${i}`], 1)
                // Utils.server.tell(`${x-0.5},${Area.AreaS[`Area${inow}`].Point1[0]},${Area.AreaS[`Area${inow}`].Point2[0]},${deviation(x-0.5, Area.AreaS[`Area${inow}`].Point1[0], Area.AreaS[`Area${inow}`].Point2[0], 5)}`)
                Utils.server.runCommandSilent(`tp ${event.player} ${deviations[0]} ${event.player.y} ${deviations[1]}`)
            }
        }//玩家进入区域时触发
        else if (!inArea3D(event.player, Area.AreaS[`Area${i}`]) && event.player.stages.has(`inArea${i}`))
        {
            event.player.stages.remove(`inArea${i}`)
            SendAreaLeaveInfo(event,i)
            //event.player.tell(`你现在离开了`+Area.AreaS[`Area${i}`].name)
        }
    }
})
//全局黑名单
var BlackList = [
    {
        "type":"name",
        "name":"bat"
    },
    {
        "type":"name",
        "name":"creeper"
    },
    {
        "type":"name",
        "name":"skeleton"
    }
    ,
    {
        "type":"name",
        "name":"spider"
    },
    {
        "type":"mod",
        "mod":"zombie_extreme",
        "whitelist":[
            "zombie_extreme:infected",
            "zombie_extreme:crawler",
            "zombie_extreme:runner",
            "zombie_extreme:infected_police"
        ]
    }
]
//全局白名单
var WhiteList = [
    "zombie_extreme:infected",
    "zombie_extreme:crawler",
    "zombie_extreme:runner",
    "rottencreatures:frostbitten",
    "minecraft:zombie",
    "minecraft:husk",
    "zombie_extreme:infected_police"
]
//区域黑名单
var AreaBlackList = [
    {
        "name":"出生点",
        "mob": [
            "zombie_extreme:infected",
            "zombie_extreme:crawler",
            "zombie_extreme:runner",
            "rottencreatures:frostbitten",
            "minecraft:zombie",
            "minecraft:husk",
            "zombie_extreme:infected_police"
        ]
    }
]
onEvent("entity.spawned",event=>{
    var entity = event.entity;
    var type = entity.getType();
    for(var blacklist of BlackList){
        if(blacklist.type.includes("mod")){
            if(type.includes(blacklist.mod) && (blacklist.whitelist.indexOf(type) == -1)){
                event.cancel()
            }
        }
        if(blacklist.type.includes("name")){
            if(type.includes(blacklist.name)){
                event.cancel()
            }
        }
    }
})
onEvent("entity.spawned",event=>{
    var entity = event.entity;
    var type = entity.getType();
    const onlinePlayers = Utils.server.players;
    for(var areaBlackList of AreaBlackList){
        if(inAreasOfName(entity,areaBlackList.name) && (areaBlackList.mob.indexOf(type)!=-1)){
            event.cancel()
        }
    }
})
