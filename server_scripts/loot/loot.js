var ETypeMob = [
    "zombie_extreme:infected",
    "zombie_extreme:crawler",
    "zombie_extreme:runner",
    "rottencreatures:frostbitten",
    "minecraft:zombie",
    "minecraft:husk",
    "zombie_extreme:infected_police"
  ]
//怪物掉铁
onEvent("lootjs", (event) => {
    for(var mob in ETypeMob){
        event
        .addEntityLootModifier(mob)
        .randomChance(0.1) // 10% 概率
        .addLoot("kubejs:scarpiron");
    }
    
});