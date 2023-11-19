onEvent('recipes', event => {
  //合成炮台
  event.shaped('k_turrets:cobble_turret_item', ['ADA','BEB','BCB'], 
  {A:'minecraft:cobblestone',B:'minecraft:iron_ingot',D:'minecraft:dispenser',C:'minecraft:iron_block',E:'kubejs:circuit_board'})
  //合成铁丝网
  event.shaped('zombiekit:barbed_wire', ['AAA','BBB','AAA'], 
  {A:'#minecraft:planks',B:'zombiekit:iron_wire'})
  //删除铁丝网create
  event.remove({ output:'createaddition:barbed_wire'})
  //添加园艺玻璃罩小麦
  event.custom({
        "type": "immersiveengineering:cloche",
        "results": [
          {
            "item": "minecraft:wheat",
            "count": 4
          },
          {
            "item": "minecraft:wheat_seeds"
          }
        ],
        "input": {
          "item": "minecraft:wheat_seeds"
        },
        "soil": {
          "item": "minecraft:dirt"
        },
        "time": 600,
        "render": {
          "type": "crop",
          "block": "minecraft:wheat"
        }
  })
  //添加马铃薯
  event.custom({
        "type": "immersiveengineering:cloche",
        "results": [
          {
            "item": "minecraft:potato",
            "count": 4
          }
        ],
        "input": {
          "item": "minecraft:potato"
        },
        "soil": {
          "item": "minecraft:dirt"
        },
        "time": 400,
        "render": {
          "type": "crop",
          "block": "minecraft:potatoes"
        }
  })
  //粗铁烧铁
  event.custom({
      "type": "minecraft:smelting",
      "ingredient": {
        "item": 'minecraft:raw_iron'
      },
      "result": 'minecraft:iron_ingot',
      "experience": 0.20,
      "cookingtime": 400
  })
  //添加焦炉砖
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "csc",
      "sms",
      "csc"
    ],
    "key": {
      "c": {
        "tag": "forge:clay"
      },
      "s": {
        "tag": "forge:ingots/brick"
      },
      "m": {
        "tag": "forge:sandstone"
      }
    },
    "result": {
      "item": "immersiveengineering:cokebrick",
      "count": 3
    }
  })
  //添加防腐木板
  event.custom({
    "type": "immersiveengineering:shaped_fluid",
    "pattern": [
      "www",
      "wbw",
      "www"
    ],
    "key": {
      "w": {
        "tag": "minecraft:planks"
      },
      "b": {
        "tag": "forge:creosote",
        "amount": 1000,
        "type": "immersiveengineering:fluid"
      }
    },
    "result": {
      "item": "immersiveengineering:treated_wood_horizontal",
      "count": 8
    }
  })
  //防腐木板合成楼梯、栅栏、台阶
  event.custom({"type":"minecraft:crafting_shaped","pattern":["s  ","ss ","sss"],"key":{"s":{"item":"immersiveengineering:treated_wood_horizontal"}},"result":{"item":"immersiveengineering:stairs_treated_wood_horizontal","count":4}})
  event.custom({"type":"minecraft:crafting_shapeless","ingredients":[{"item":"immersiveengineering:treated_wood_packaged"}],"result":{"item":"immersiveengineering:treated_wood_horizontal"}})
  event.custom({"type":"minecraft:crafting_shaped","pattern":["s","s"],"key":{"s":{"item":"immersiveengineering:slab_treated_wood_horizontal"}},"result":{"item":"immersiveengineering:treated_wood_horizontal"}})
  event.custom({"type":"minecraft:crafting_shaped","pattern":["sss"],"key":{"s":{"item":"immersiveengineering:treated_wood_horizontal"}},"result":{"item":"immersiveengineering:slab_treated_wood_horizontal","count":6}})
  //切石机切树皮
  event.stonecutting('4x farmersdelight:tree_bark', '#minecraft:logs')
  //切石机切草杆
  event.stonecutting('farmersdelight:straw', 'minecraft:grass')
  //石磨纤维磨线、羊毛磨线
  event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": 'zombiekit:fibre'
      }
    ],
    "results": [
      {
        "item": 'minecraft:string',
        "chance": 0.5
      }
    ],
    "processingTime": 100
  })
  event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": '#minecraft:wool'
      }
    ],
    "results": [
      {
        "item": '2x minecraft:string',
        "chance": 1
      }
    ],
    "processingTime": 200
  })
  //切石机切草杆
  event.stonecutting('2x farmersdelight:straw', 'farmersdelight:tree_bark')
  //工业大麻合成线
  event.shaped('minecraft:string', ['AAA'], 
  {A:'immersiveengineering:hemp_fiber'})
})