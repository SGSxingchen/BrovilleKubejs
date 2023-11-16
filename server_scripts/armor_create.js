onEvent('recipes', event => {
	// 铜夹板
    event.shaped('kubejs:copper_splint', ['SAS','SAS',' S '], {S:'create:copper_sheet',A:'zombiekit:nitrocellulose'})
    //铜装备
    event.smithing(Item.of('create_sa:copper_helmet', '{Unbreakable:1b}'), 'minecraft:leather_helmet', 'kubejs:copper_splint')
    event.smithing(Item.of('create_sa:copper_chestplate', '{Unbreakable:1b}'), 'minecraft:leather_chestplate', 'kubejs:copper_splint')
    event.smithing(Item.of('create_sa:copper_leggings', '{Unbreakable:1b}'), 'minecraft:leather_leggings', 'kubejs:copper_splint')
    event.smithing(Item.of('create_sa:copper_boots', '{Unbreakable:1b}'), 'minecraft:leather_boots', 'kubejs:copper_splint')
    //硝石
    event.blasting('zombiekit:saltpeter', 'minecraft:flint')//硝石
    event.shaped('zombiekit:crude_nitrate', ['CAC','ABA','CAC'], {A:'minecraft:gunpowder',B:'minecraft:glass_bottle',C:'zombiekit:saltpeter'})//粗硝
    event.blasting('zombiekit:hydrogen_nitrate', 'zombiekit:crude_nitrate')//硝酸
    event.shaped('zombiekit:nitrocellulose', [' S ','SAS',' S '], {S:'zombiekit:fibre',A:'zombiekit:hydrogen_nitrate'})//硝酸纤维
    //纤维
    event.shapeless('zombiekit:fibre', ['minecraft:wheat', 'farmersdelight:tree_bark','minecraft:sugar_cane','minecraft:string'])
    //锁链盔甲
	event.shaped(Item.of('minecraft:chainmail_chestplate', '{Damage:215}'),['S S','SSS','SSS'], {S:'zombiekit:iron_wire'})
    event.shaped(Item.of('minecraft:chainmail_leggings', '{Damage:200}'), ['SSS','S S','S S'], {S:'zombiekit:iron_wire'})
    event.shaped(Item.of('minecraft:chainmail_helmet', '{Damage:140}'), ['SSS','S S'], {S:'zombiekit:iron_wire'})
    event.shaped(Item.of('minecraft:chainmail_boots', '{Damage:170}'),['S S','S S'], {S:'zombiekit:iron_wire'})
    //背包合成
    event.blasting('kubejs:cooked_leather', 'minecraft:leather')//熟皮革
    event.blasting('zombiekit:rubber', 'zombiekit:latex')//胶乳
    //骨制盔甲
    //树皮盔甲
    event.shaped('kubejs:fibers_rag', ['AB ','BAS',' SA'], {S:'farmersdelight:tree_bark',A:'farmersdelight:rope',B:'farmersdelight:canvas'})//纤维布
})