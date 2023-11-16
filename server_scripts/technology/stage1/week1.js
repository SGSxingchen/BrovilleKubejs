onEvent('recipes', event => {
  {
    //废铁变粉碎铁
    event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
		  {
			"item":'kubejs:scarpiron'
		  }
		],
		"tool": {
		  "tag": 'forge:tools/axes',
		},
		"result": [
		  {
			"item": 'create:crushed_raw_iron',
			"count":1
		  }]
	  })
    //碎铁合成铁粉
    event.shapeless('immersiveengineering:dust_iron',['2x create:crushed_raw_iron'])
    //铁粉烧铁锭
    event.custom({
        "type": "minecraft:blasting",
        "ingredient": {
          "item": 'immersiveengineering:dust_iron'
        },
        "result": 'minecraft:iron_ingot',
        "experience": 1,
        "cookingtime": 1000
    })
    //合成白炽灯
    event.custom({
      "type":"immersiveengineering:blueprint",
      "inputs":[
          {
              "tag":"forge:glass"
          },
          {
              "count":3,
              "base_ingredient":[
                  {
                      "item":"minecraft:paper"
                  },
                  {
                      "item":"minecraft:bamboo"
                  }
              ]
          },
          {
              "tag":"forge:ingots/copper"
          }
      ],
      "category":"components",
      "result":{
          "item":"immersiveengineering:light_bulb","count":3
      }
    })
    //合成电灯
    event.shaped(
      "immersiveengineering:electric_lantern",
      [
        " I ",
        "PEP",
        " W "
      ], 
      {
        I:'#forge:plates/iron',
        E:'immersiveengineering:light_bulb',
        P:'#forge:glass_panes',
        W:'#forge:wires/copper'
      }
    )
    //合成园艺玻璃罩
    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "geg",
        "g g",
        "wcw"
      ],
      "key": {
        "g": {
          "tag": "forge:glass"
        },
        "w": {
          "tag": "forge:treated_wood"
        },
        "e": {
          "item": "immersiveengineering:light_bulb"
        },
        "c": {
          "item": "immersiveengineering:component_iron"
        }
      },
      "result": {
        "item": "immersiveengineering:cloche"
      }
    })
    //合成机械零件
    event.shaped(
      "immersiveengineering:component_iron",
      [
        "S S",
        " A ",
        "S S"
      ], 
      {
        S:'#forge:plates/iron',
        A:'#forge:ingots/copper'
      }
    )
    //合成铁板
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "tag": "forge:ingots/iron"
        }
      ],
      "results": [
        {
          "item": "create:iron_sheet"
        }
      ]
    })
    //合成蓝图
    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "jkl",
        "ddd",
        "ppp"
      ],
      "key": {
        "j": {
          "tag": "forge:ingots/copper"
        },
        "l": {
          "tag": "forge:ingots/iron"
        },
        "k": {
          "tag": "forge:ingots/zinc"
        },
        "d": {
          "tag": "forge:dyes/blue"
        },
        "p": {
          "item": "minecraft:paper"
        }
      },
      "result": {
        "item": "immersiveengineering:blueprint",
        "nbt": {
          "blueprint": "components"
        }
      }
    })    
    //合成工程师工作台
    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "sss",
        "rcr",
        "r r"
      ],
      "key": {
        "s": {
          "tag": "minecraft:wooden_slabs"
        },
        "r": {
          "tag": "forge:rods/wooden"
        },
        "c": {
          "item": "minecraft:crafting_table"
        }
      },
      "result": {
        "item": "immersiveengineering:craftingtable"
      }
    })
    //合成工程师装配台
    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "iss",
        "c f"
      ],
      "key": {
        "i": {
          "tag": "forge:ingots/iron"
        },
        "s": {
          "tag": "minecraft:wooden_slabs"
        },
        "c": {
          "item": "immersiveengineering:craftingtable"
        },
        "f": {
          "tag": "forge:fences/wooden"
        }
      },
      "result": {
        "item": "immersiveengineering:workbench"
      }
    })
    //合成低压接线器
    event.shaped(
      "4x immersiveengineering:connector_lv",
      [
        " A ",
        "SAS",
        "SAS"
      ], 
      {
        S:'#immersiveengineering:connector_insulator',
        A:'#forge:ingots/copper'
      }
    )
    //合成低压继电器
    event.shaped(
      "4x immersiveengineering:connector_lv_relay",
      [
        " A ",
        "SAS"
      ], 
      {
        S:'#immersiveengineering:connector_insulator',
        A:'#forge:ingots/copper'
      }
    )
    //合成低压蓄电池
    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "waw",
        "fef",
        "waw"
      ],
      "key": {
        "w": {
          "tag": "minecraft:planks"
        },
        "f": {
          "tag": "forge:ingots/iron"
        },
        "a": {
          "tag": "forge:plates/lead"
        },
        "e": {
          "tag": "forge:redstone_acid",
          "amount": 1000,
          "type": "immersiveengineering:fluid"
        }
      },
      "result": {
        "item": "immersiveengineering:capacitor_lv"
      }
    })
    //合成低压线圈
    event.shaped(
      "4x immersiveengineering:wirecoil_copper",
      [
        " S ",
        "SAS",
        " S "
      ], 
      {
        S:'#forge:wires/copper',
        A:'#forge:rods/wooden'
      }
    )
    //合成铜线
    event.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "tag": "forge:plates/copper"
        },
        {
          "item": "immersiveengineering:wirecutter"
        }
      ],
      "result": {
        "item": "immersiveengineering:wire_copper"
      }
    })
    //合成铜板
    event.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "tag": "forge:ingots/copper"
        },
        {
          "item": "immersiveengineering:hammer"
        }
      ],
      "result": {
        "item": "immersiveengineering:plate_copper"
      }
    })
    //合成铁板
    event.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "tag": "forge:ingots/iron"
        },
        {
          "item": "immersiveengineering:hammer"
        }
      ],
      "result": {
        "item": "immersiveengineering:plate_iron"
      }
    })
  }
      //安山合金 工序
      event.shapeless('kubejs:andesite_alloy_dust', ['create:crushed_raw_iron', '2x minecraft:andesite','kubejs:rock'])//安山合金粉末
      //烧制安山合金
      event.custom({
            "type": "minecraft:blasting",
            "ingredient": {
              "item": "kubejs:andesite_alloy_dust"
            },
            "result": "create:andesite_alloy",
            "experience": 0.20,
            "cookingtime": 500
        })
      //合成石磨
      event.shaped('create:millstone', ['BBB','NAN','SSS'], 
        {S:'create:andesite_alloy',N:'minecraft:grindstone',A:'minecraft:hopper',B:'#minecraft:wooden_slabs'})
      //锌手柄
      event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": [
          {
            "item": "create:zinc_ingot"
          }
        ],
        "results": [
          {
            "item": "create_sa:zinc_handle"
          }
        ]
      })
      //合成手摇曲柄
      event.shaped('create:hand_crank', ['SSA','  B'], 
        {S:'create:andesite_alloy',A:'kubejs:fibers_rag',B:'create_sa:zinc_handle'})
      //合成铁锤
      event.shaped('immersiveengineering:hammer', ['SAS',' B ',' B '], 
        {S:'create:andesite_alloy',A:'zombiekit:iron_wire',B:'create_sa:zinc_handle'})
      //合成钳子
      event.shaped('immersiveengineering:wirecutter', ['A A',' S ','B B'], 
        {S:'create:andesite_alloy',A:'kubejs:scarpiron',B:'create_sa:zinc_handle'})
      
      //粗铜、粗锌和粗铅 工序
      //开始处理
      event.shapeless('kubejs:crushed_big_ore', ['9x minecraft:cobblestone'])
      //第一步提炼
      event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": [
          {
            "item": "kubejs:crushed_big_ore"
          }
        ],
        "results": [
          {
            "item": "kubejs:crushed_middle_ore"
          }
        ]
      })
      //第二步提炼
      event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": [
          {
            "item": "kubejs:crushed_big_ore"
          }
        ],
        "results": [
          {
            "item": "kubejs:crushed_middle_ore"
          }
        ]
      })
      //第三步提炼
      event.custom({
        "type": "minecraft:blasting",
        "ingredient": {
          "item": "kubejs:crushed_middle_ore"
        },
        "result": "kubejs:crushed_small_ore",
        "experience": 0.05,
        "cookingtime": 1200
    })
      //粗镍 工序
      event.custom({
        "type": "create:milling",
        "ingredients": [
          {
            "item": "minecraft:iron_ingot"
          }
        ],
        "results": [
          {
            "item": "immersiveengineering:dust_iron"
          },
          {
            "item": "immersiveengineering:raw_nickel",
            "chance": 0.3
          }
        ],
        "processingTime": 100
      })
      //辊压机 工序
      event.shaped('create:mechanical_press', ['CDC','BAB','SSS'], 
        {S:'minecraft:iron_block',A:'create:shaft',B:'create:cogwheel',C:'create:andesite_casing',D:'minecraft:copper_block'})//合成辊压机
      event.shaped('create:shaft', ['S','S'], {S:'create:andesite_alloy'})//合成传动杆
      event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "tag": "forge:stripped_logs"
          },
          {
            "item": "create:andesite_alloy"
          }
        ],
        "results": [
          {
            "item": "create:andesite_casing"
          }
        ]
      })//合成安山机壳子
      event.shapeless('create:cogwheel', ['#minecraft:planks','create:shaft','kubejs:scarpiron'])//合成齿轮
      //合成砂纸
      event.shapeless('create:sand_paper', ['2x minecraft:paper','minecraft:sand'])

      //烧矿镍 铅 锌
      event.custom({
        "type": "minecraft:blasting",
        "ingredient": {
          "item": 'immersiveengineering:raw_nickel'
        },
        "result": 'immersiveengineering:ingot_nickel',
        "experience": 1,
        "cookingtime": 600
      })
      event.custom({
        "type": "minecraft:blasting",
        "ingredient": {
          "item": 'immersiveengineering:raw_lead'
        },
        "result": 'immersiveengineering:ingot_lead',
        "experience": 1,
        "cookingtime": 600
      })
      event.custom({
        "type": "minecraft:blasting",
        "ingredient": {
          "item": 'create:raw_zinc'
        },
        "result": 'create:zinc_ingot',
        "experience": 1,
        "cookingtime": 600
      })
})