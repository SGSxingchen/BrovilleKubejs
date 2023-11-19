var ETypeMob = [
    "zombie_extreme:infected",
    "zombie_extreme:crawler",
    "minecraft:zombie",
    "minecraft:husk"
  ]
var DTypeMob = [
    "zombie_extreme:infected_police",
    "zombie_extreme:runner",
    "rottencreatures:frostbitten"
]
//怪物掉铁
onEvent("lootjs", (event) => {
    for(var mob in ETypeMob){
        event
        .addEntityLootModifier(mob)
        .randomChance(0.1) // 10% 概率
        .addLoot("kubejs:scarpiron");
        event
        .addEntityLootModifier(mob)
        .randomChance(0.05) // 5% 概率
        .addLoot('minecraft:leather');
        event
        .addEntityLootModifier(mob)
        .randomChance(1) // 100% 概率
        .addLoot('minecraft:rotten_flesh');
    }
});
onEvent("lootjs", (event) => {
    for(var mob in DTypeMob){
        event
        .addEntityLootModifier(mob)
        .randomChance(0.1) // 10% 概率
        .addLoot("kubejs:scarpiron");
        event
        .addEntityLootModifier(mob)
        .randomChance(0.1) // 5% 概率
        .addLoot('minecraft:leather');
        event
        .addEntityLootModifier(mob)
        .randomChance(1) // 100% 概率
        .addLoot('minecraft:rotten_flesh');
    }
});