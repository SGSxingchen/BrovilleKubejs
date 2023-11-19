onEvent('recipes', event => {
    //骨粉
    event.remove({output:'minecraft:bone_meal'})
    //骨块
    event.remove({output:'minecraft:bone_block'})
    //移除熔炉
    event.remove({output:'minecraft:furnace'})
    //移除篝火
    event.remove({output:'minecraft:campfire'})
    //移除安山合金
    event.remove({output:'create:andesite_alloy'})
    //合成面团
    event.remove({output:'farmersdelight:wheat_dough'})
})
