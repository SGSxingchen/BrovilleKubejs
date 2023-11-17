onEvent('recipes', event => {
    //丝线布
    event.shapeless('kubejs:string_rag', ['3x minecraft:string'])
    //骨粉
    event.remove({output:'minecraft:bone_meal'})
    //骨块
    event.remove({output:'minecraft:bone_block'})
    //合成骨块
    event.shapeless('minecraft:bone_block', ['minecraft:flint','2x minecraft:bone','kubejs:string_rag'])
    //磨出骨块
    event.custom({
        "type": "create:milling",
        "ingredients": [{"item": "minecraft:bone","count": 7}],
            "results": [{"item": "minecraft:bone_block"}],
            "processingTime": 100
        })
    //切成骨片
    event.custom({
            "type": "farmersdelight:cutting",
            "ingredients": [{"item": "bone_block"}],
            "tool": {"item": "butchercraft:bone_saw"},
            "result": [
                {"item": "kubejs:bone_ingot"},
                {"item": "minecraft:bone_meal","count": 2},
                {"item": "minecraft:bone_meal","chance": 0.4},
            ]
            })
    //合成绷带
    event.shapeless('zombie_extreme:bandage', ['4x kubejs:string_rag'])
    //最终提取
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{"item": "kubejs:crushed_small_ore"}],
        "tool": {"tag": "forge:pickaxes"},
        "result": [{"item": "kubejs:rock","count": 2},{"item": "create:raw_zinc","chance": 0.1},{"item": "immersiveengineering:raw_lead","chance": 0.05},{"item": "minecraft:raw_copper","chance": 0.3}]})
    //骨制装备
    event.shaped(Item.of('kubejs:bone_helmet', '{AttributeModifiers:[{Amount:2,AttributeName:"generic.max_health",Name:"generic.maxHealth",Operation:0,Slot:"head",UUID:[I;610316504,-1600573805,-300181327,111414468]},{Amount:1,AttributeName:"generic.armor",Name:"generic.armor",Operation:0,Slot:"head",UUID:[I;581672517,-55242006,-406189719,-493500597]}]}'),['SSS','S S'], {S:'kubejs:bone_ingot'})
    event.shaped(Item.of('kubejs:bone_chestplate', '{AttributeModifiers:[{Amount:2,AttributeName:"generic.max_health",Name:"generic.maxHealth",Operation:0,Slot:"chest",UUID:[I;518574320,589210826,-437120160,-1071629408]},{Amount:5,AttributeName:"generic.armor",Name:"generic.armor",Operation:0,Slot:"chest",UUID:[I;500035616,1928021518,-449978882,466481519]}]}'),['S S','SSS','SSS'], {S:'kubejs:bone_ingot'})
    event.shaped(Item.of('kubejs:bone_leggings', '{AttributeModifiers:[{Amount:2,AttributeName:"generic.max_health",Name:"generic.maxHealth",Operation:0,Slot:"legs",UUID:[I;594553348,-909851840,-399117447,548377998]},{Amount:4,AttributeName:"generic.armor",Name:"generic.armor",Operation:0,Slot:"legs",UUID:[I;626587841,-2103997385,-459061233,1371269970]}]}'),['SSS','S S','S S'], {S:'kubejs:bone_ingot'})
    event.shaped(Item.of('kubejs:bone_boots', '{AttributeModifiers:[{Amount:2,AttributeName:"generic.max_health",Name:"generic.maxHealth",Operation:0,Slot:"feet",UUID:[I;640856672,-124971386,-366114866,-1579112138]},{Amount:2,AttributeName:"generic.armor",Name:"generic.armor",Operation:0,Slot:"feet",UUID:[I;662744114,-117613167,-339591558,2029973689]}],Damage:0}'),['S S','S S'], {S:'kubejs:bone_ingot'})
    //树皮套装
    event.shaped(Item.of('kubejs:treebark_helmet', '{AttributeModifiers:[{Amount:4,AttributeName:"generic.max_health",Name:"generic.maxHealth",Operation:0,Slot:"head",UUID:[I;610316504,-1600573805,-300181327,111414468]},{Amount:1,AttributeName:"generic.armor",Name:"generic.armor",Operation:0,Slot:"head",UUID:[I;581672517,-55242006,-406189719,-493500597]}]}'),['SSS','S S'], {S:'kubejs:fibers_rag'})
    event.shaped(Item.of('kubejs:treebark_chestplate', '{AttributeModifiers:[{Amount:4,AttributeName:"generic.max_health",Name:"generic.maxHealth",Operation:0,Slot:"chest",UUID:[I;518574320,589210826,-437120160,-1071629408]},{Amount:2,AttributeName:"generic.armor",Name:"generic.armor",Operation:0,Slot:"chest",UUID:[I;500035616,1928021518,-449978882,466481519]}]}'),['S S','SSS','SSS'], {S:'kubejs:fibers_rag'})
    event.shaped(Item.of('kubejs:treebark_leggings', '{AttributeModifiers:[{Amount:4,AttributeName:"generic.max_health",Name:"generic.maxHealth",Operation:0,Slot:"legs",UUID:[I;594553348,-909851840,-399117447,548377998]},{Amount:2,AttributeName:"generic.armor",Name:"generic.armor",Operation:0,Slot:"legs",UUID:[I;626587841,-2103997385,-459061233,1371269970]}]}'),['SSS','S S','S S'], {S:'kubejs:fibers_rag'})
    event.shaped(Item.of('kubejs:treebark_boots', '{AttributeModifiers:[{Amount:4,AttributeName:"generic.max_health",Name:"generic.maxHealth",Operation:0,Slot:"feet",UUID:[I;640856672,-124971386,-366114866,-1579112138]},{Amount:1,AttributeName:"generic.armor",Name:"generic.armor",Operation:0,Slot:"feet",UUID:[I;662744114,-117613167,-339591558,2029973689]}],Damage:0}'),['S S','S S'], {S:'kubejs:fibers_rag'})
})