onEvent('recipes', event => {
    //合成铁丝网
    event.shaped('k_turrets:cobble_turret_item', ['ADA','BEB','BCB'], 
    {A:'minecraft:cobblestone',B:'minecraft:iron_ingot',D:'minecraft:dispenser',C:'minecraft:iron_block',E:'kubejs:circuit_board'})
})