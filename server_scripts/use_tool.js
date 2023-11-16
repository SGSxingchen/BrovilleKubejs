onEvent("item.right_click",event =>{
    //判断被右键物品的类型
    //坐标显示器
    if (event.item.id == 'kubejs:letsee') {
        //给予一个空通讯器
        event.player.giveInHand('kubejs:letsee4')
        //减少这个物品
        event.item.count--;
        //服务器发送消息
        event.player.tell("§a当前的位置为 §ex: " + Math.floor(event.player.x) + " §cy: " + Math.floor(event.player.y) + " §bz: " + Math.floor(event.player.z))
    }
    if (event.item.id == 'kubejs:fire_bottle') {
        if(event.player.offHandItem.id == "minecraft:flint_and_steel"){
        //给予一个燃料瓶
        event.player.giveInHand('zombiekit:molotov_cocktail')
        //减少这个物品
        event.item.count--;
        }
    }
    if (event.item.id == 'kubejs:resistance') {
        //获得伤害吸收
        event.server.runCommandSilent(`effect give ${event.player.name} minecraft:absorption 60 4 false`)
        //减少这个物品
        event.item.count--;
    }
})

onEvent('recipes', event => {
    event.shaped('2x kubejs:letknow', ['N','S','N'], {S:'kubejs:circuit_board',N:'minecraft:iron_ingot'})//合成电池
    event.shapeless('kubejs:letsee', ['kubejs:letsee4', '3x kubejs:letknow'])//装载电池
})