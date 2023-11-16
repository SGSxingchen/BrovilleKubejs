onEvent('recipes', event => {
    ///摩擦
    event.custom({"type": "create:sandpaper_polishing","ingredients": [{"item": "kubejs:cooked_leather"}],"results": [{"item": "kubejs:leather_sheet",}]})///皮革薄板
    event.custom({"type": "create:sandpaper_polishing","ingredients": [{"item": "minecraft:rotten_flesh"}],"results": [{"item": "minecraft:bone",}]})///获得骨头
    ///让我磨擦磨擦你的头盖骨
    event.custom({"type": "create:sandpaper_polishing","ingredients": [{"item": "minecraft:skeleton_skull"}],"results": [{"item": "minecraft:bone_meal","count": 3}]})
    ///钻石板子
    event.custom({"type": "create:pressing","ingredients": [ {"tag": "forge:gems/diamond"}],"results": [{"item": "kubejs:diamond_plate" }] })
  })
  