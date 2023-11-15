onEvent('entity.death', event =>{
	if(event.entity.isPlayer()){
		let PlayerList = event.server.players//获取此时的玩家列表
		let deathX = Math.floor(event.entity.x)//下面三行获取死者的坐标，并取整
		let deathY = Math.floor(event.entity.y)
		let deathZ = Math.floor(event.entity.z)
		
		let deathPlayer = event.entity.name.text//获取死者的名字
        for (let i = 0; i < PlayerList.length; i++) {//遍历玩家列表
            if (PlayerList[i].stages.has('OP')) {//当玩家有OP阶段时执行以下功能
				let OP = PlayerList[i]//略
				event.server.runCommandSilent(`/tellraw ${OP} [{"text":"${deathPlayer}死在了[X：${deathX}，Y：${deathY}，Z：${deathZ}]  ","color":"red","clickEvent":{"action":"run_command","value":"/tp ${OP} ${deathX} ${deathY} ${deathZ}"}},{"text":"[点击以传送]","color":"green","clickEvent":{"action":"run_command","value":"/tp ${OP} ${deathX} ${deathY} ${deathZ}"}}]`)
			}//上面的是向指定玩家发送消息
        }
	}
})

