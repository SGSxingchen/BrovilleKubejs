//功能性方块：禁用
onEvent("block.right_click", event => {
    const player = event.getPlayer()
    const block = event.getBlock()
	//附魔台
    if (!event.player.stages.has('op')) {if(event.block.id=="minecraft:enchanting_table"){event.cancel()}}
	//铁砧
	if (!event.player.stages.has('op')) {if(event.block.id=="minecraft:anvil"){event.cancel()}}
	if (!event.player.stages.has('op')) {if(event.block.id=="minecraft:chipped_anvil"){event.cancel()}}
	if (!event.player.stages.has('op')) {if(event.block.id=="minecraft:damaged_anvil"){event.cancel()}}
	//炼药台
	if (!event.player.stages.has('op')) {if(event.block.id=="minecraft:brewing_stand"){event.cancel()}}
  })

//石磨增加
onEvent('recipes', event => {
    //磨出铁粉
    event.custom({
        "type": "create:milling",
        "ingredients": [{"item": "kubejs:scarpiron"}],
            "results": [{"item": "immersiveengineering:dust_iron"}],
            "processingTime": 100
        })
    //磨出小麦粉
    event.custom({
        "type": "create:milling",
        "ingredients": [{"item": "minecraft:wheat"}],
            "results": [{"item": "create:wheat_flour"}],
            "processingTime": 100
        })
    event.shapeless('farmersdelight:wheat_dough', ['kubejs:treebark_cup_purewater','2x create:wheat_flour'])
    // 工作盆
    event.shaped('create:basin', ['SAS','SSS'], {S:'create:andesite_alloy',A:'minecraft:cauldron'})
    // 消防斧
    event.shaped(Item.of('zombie_extreme:fireaxe', '{Damage:200}'), ['SS','SA',' B'], {S:'minecraft:iron_ingot',A:'kubejs:fibers_rag',B:'create_sa:zinc_handle'})
    //现代斧头
    event.custom({
        "type": "create:compacting",
        "ingredients": [{"item": "zombie_extreme:fireaxe"},
        {"item": "create:iron_sheet"},{"item": "create:iron_sheet"},{"item": "create:iron_sheet"},{"item": "create:iron_sheet"},{"item": "create:iron_sheet"},{"item": "create:iron_sheet"},
        {"item": "create:copper_sheet"},{"item": "create:copper_sheet"},{"item": "create:copper_sheet"},{"item": "create:copper_sheet"},{"item": "create:copper_sheet"},{"item": "create:copper_sheet"},
        {"item": "create:copper_sheet"},{"item": "create:copper_sheet"},{"item": "create:copper_sheet"},{"item": "create:copper_sheet"},{"item": "create:copper_sheet"},
        {"item": "zombiekit:rubber"},{"item": "zombiekit:rubber"},{"item": "zombiekit:rubber"},{"item": "zombiekit:rubber"}],
        "results": [{ "item": "zombie_extreme:modern_axe"}]
    })
    //带骨肉篝火
    event.custom({
        "type": "minecraft:campfire_cooking",
        "ingredient": {
          "item": 'kubejs:treated_flesh'
        },
        "result": 'kubejs:treated_cooked_flesh',
        "experience": 0.35,
        "cookingtime": 600
    })
})