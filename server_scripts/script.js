settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true


onEvent('block.right_click', event =>{
    if(event.block.item.hasTag('forge:stripped_log') && (event.item.hasTag('forge:tools/knives'))){
        event.block.set('minecraft:campfire',{lit:"false"})
        event.player.playSound('minecraft:block.wood.break')
        event.player.addItemCooldown(event.item,40)
        event.player.damageHeldItem(MAIN_HAND,20)
    }
    if(event.block=='minecraft:campfire' && event.item =='minecraft:clay_ball' && event.item.count>=8){
        event.block.set('minecraft:furnace')
        event.player.playSound('minecraft:block.stone.break')
        event.item.count = event.item.count-8
    }
})

onEvent('lootjs',(event) =>{
    event.addBlockLootModifier('minecraft:grass')
    .matchMainHand(Item.of('kubejs:scarpiron'))
    .randomChance(0.3)
    .addLoot(Item.of('farmersdelight:straw'));

    event.addBlockLootModifier('minecraft:grass')
    .matchMainHand(Item.of('minecraft:flint'))
    .randomChance(0.3)
    .addLoot(Item.of('farmersdelight:straw'));
    
    var touch = ['hardcore_torches:lit_torch', 'hardcore_torches:smoldering_torch', 'hardcore_torches:unlit_torch']
    for (const i in touch) {
        event.addBlockLootModifier(touch[i]).replaceLoot('minecraft:stick',touch[i])
    }
    
})
