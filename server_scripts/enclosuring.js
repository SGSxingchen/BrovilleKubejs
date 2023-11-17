//code by Yakumo_UUZ
var enclosureX1 = ""
var enclosureY1 = ""
var enclosureZ1 = ""
var enclosureX2 = ""
var enclosureY2 = ""
var enclosureZ2 = ""
var enclosure
enclosure = JsonIO.read('kubejs/serverJson/enclosure.json')//读取文件

function change(x1,x2) {
    if (x1 < x2) {        
        let a = x2
        x2 = x1
        x1 = a
    }
    return [x1,x2]
}//交换大小数

onEvent('block.right_click', event =>{
    let enX = event.block.x
    let enY = event.block.y
    let enZ = event.block.z
    if(event.item.id == 'kubejs:enclosure_tool'){
        enclosure = JsonIO.read('kubejs/serverJson/enclosure.json')//读取文件
        if(!event.player.stages.has("enclosuring1")){
            event.player.stages.add("enclosuring1")
            event.player.tell(`设置了第一个点[X:${enX},Y:${enY},Z:${enZ}]`)
        }else{
            event.player.tell(`重设了第一个点[X:${enX},Y:${enY},Z:${enZ}]`)
        }
        enclosureX1 = enX
        enclosureY1 = enY
        enclosureZ1 = enZ
    }
})//确定1点
onEvent('block.left_click', event =>{
    let enX = event.block.x
    let enY = event.block.y
    let enZ = event.block.z
    if(event.item.id == 'kubejs:enclosure_tool'){
        enclosure = JsonIO.read('kubejs/serverJson/enclosure.json')//读取文件
        if(!event.player.stages.has("enclosuring2")){
            event.player.stages.add("enclosuring2")
            event.player.tell(`设置了第二个点[X:${enX},Y:${enY},Z:${enZ}]`)
        }else{
            event.player.tell(`重设了第二个点[X:${enX},Y:${enY},Z:${enZ}]`)
        }
        enclosureX2 = enX
        enclosureY2 = enY
        enclosureZ2 = enZ
        event.cancel()
    }
})//确定2点


onEvent("command.registry", event => {//监听命令注册事件
    const{commands: Commands, arguments: Arguments} = event;
    event.register(// 注册新命令
        Commands.literal("setarea")
        .requires(src => src.hasPermission(2))
        .then(Commands.argument('level', Arguments.FLOAT.create(event))//等级参数
        .then(Commands.argument('name', Arguments.STRING.create(event))//说明参数
        .then(Commands.argument('text', Arguments.STRING.create(event))
        .then(Commands.argument('status', Arguments.BOOLEAN.create(event))
            .executes(ctx => {// 执行命令时执行以下内容
            const level = Arguments.FLOAT.getResult(ctx, "level");// 获取等级参数
            const name = Arguments.STRING.getResult(ctx, "name");
            const text = Arguments.STRING.getResult(ctx, "text");// 获取说明参数
            const status = Arguments.BOOLEAN.getResult(ctx, "status");//获取状态参数
            let User = ctx.source.entity
            if(User.stages.has("enclosuring1")&&User.stages.has("enclosuring2")){
                User.stages.remove("enclosuring1")
                User.stages.remove("enclosuring2")
    
                let enX1 = change(enclosureX1,enclosureX2)[0]
                let enX2 = change(enclosureX1,enclosureX2)[1]
                let enY1 = change(enclosureY1,enclosureY2)[0]
                let enY2 = change(enclosureY1,enclosureY2)[1]
                let enZ1 = change(enclosureZ1,enclosureZ2)[0]
                let enZ2 = change(enclosureZ1,enclosureZ2)[1]//进行坐标排序
                let AreaNo = `Area${enclosure.settedArea}`
                console.info(`${enX1},${enclosureX1},${enclosureX2}`)
                enclosure.AreaS[AreaNo] = {"Point1":[enX1,enY1,enZ1],"Point2":[enX2,enY2,enZ2],"name":name,"level":level,"text":text, "status":status}
                enclosure.settedArea++;
                JsonIO.write('kubejs/serverJson/enclosure.json',enclosure)//写入已有的区域
                
            }
            return 0 
        }))))))
})
