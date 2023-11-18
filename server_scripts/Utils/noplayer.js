onEvent("command.registry", event => {//command registry event
    const { commands: Commands, arguments: Arguments} = event;
    event.register(//register a new command
        Commands.literal("noplayer")//the command is called myCommand
		.requires(src => src.hasPermission(2))//2 is op. This line is optional, but you can also instead of just one value, wrap it in {}s and use return to write a more complex requirement checks
		.then(Commands.argument('arg1', Arguments.BOOLEAN.create(event))//takes argument string called arg1. You can have as many (or none) as you want.
			.executes(ctx => {//run the command
				const arg1 = Arguments.BOOLEAN.getResult(ctx, "arg1");//get recipe
				let level = ctx.source.level.asKJS()
				let position = ctx.source.position
				let i = 0
				//hurt entities in a around a area of where the command was run
				
				if(!event.server.persistentData.contains("noplayer"))
				{
					event.server.persistentData.putBoolean('noplayer', false)
				}
				event.server.persistentData.noplayer = arg1
				level.getEntitiesWithin(AABB.of(position.x()-2,position.y()-2,position.z()-2,position.x()+2,position.y()+2,position.z()+2)).forEach(entity => {
					if (entity.living) {
				      if (entity.type == "minecraft:player") entity.tell("noplayer现在是" + event.server.persistentData.noplayer) //tell players that got hurt the message that is arg1
				    }
				})
				
				return i // always return something
			})
			// every then requires a ')' so dont forget them
		)//but requires does not
    )
})

onEvent('player.tick', event => {
	if(!event.player.stages.has('OP') && (event.server.persistentData.noplayer == true))
	{
		event.player.kick("目前服务器禁止玩家进入")
	}

})