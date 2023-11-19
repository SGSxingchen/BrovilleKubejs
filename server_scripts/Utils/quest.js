const server = Utils.server
const world = server.getOverworld()
var quest
quest = JsonIO.read('kubejs/serverJson/quest.json')//读取文件
onEvent('ftbquests.completed.onlyone', event => {
    var questId = event.object.toString()
    if(event.player && quest.completedQuest.indexOf(questId) === -1){
        var player = event.player

        quest.completedQuest.add(questId)
        quest.log.add(`唯一任务${event.object.title}被${player}完成! ID:${questId}`)
        JsonIO.write('kubejs/serverJson/quest.json',quest)

        event.onlineMembers.playSound('entity.experience_orb.pickup')
        event.onlineMembers.tell(Text.of(`唯一任务${event.object.title}已被完成!`).blue())

        var tags = event.object.tags
        if(tags.toString().includes("camp1")){
            server.runCommandSilent(`give ${player} createaddition:alternator 2`)
            event.onlineMembers.tell(Text.of(`${player} 完成了聚集地任务第一阶段`).green())
        }
        if(tags.toString().includes("camp2")){
            server.runCommandSilent(`give ${player} createaddition:alternator 2`)
            event.onlineMembers.tell(Text.of(`${player} 完成了聚集地任务第一阶段`).green())
        }
        if(tags.toString().includes("finddirt")){
            server.runCommandSilent(`give ${player} farmersdelight:rich_soil_farmland 3`)
        }
    }
})