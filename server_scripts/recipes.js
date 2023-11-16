settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var tiers = ['wooden','stone']
var tools = ['sword',"shovel",'pickaxe','axe','hoe']
var banItem = ['zombiekit:nitrocellulose', 'zombiekit:cloth','minecraft:enchanting_table','hardcore_torches:lit_torch']
var banMod = ['zombie_extreme']

onEvent('item.tags',event =>{
    event.add('forge:tools/axes','kubejs:scarpiron_axe')
})

onEvent('recipes', event =>{
    for (const i in banItem) {
        event.remove({output:banItem[i]})
    }
    
    for (const i in banMod) {
        event.remove({mod:banMod[i]})
    }

    for (const ti in tiers) {
        for (const to in tools) {
            event.remove({output:`minecraft:${tiers[ti]}_${tools[to]}`})
        }
    }
})

onEvent('recipes', event =>{


    event.shaped('hardcore_torches:unlit_torch',[
        'F',
        "S"
    ],{
        F:'zombiekit:fibre',
        S:'#forge:rods/wooden'
    })

    event.remove({output:'zombiekit:fibre'})
    event.shapeless('zombiekit:fibre', ['3x farmersdelight:straw'])

    event.shaped('kubejs:scarpiron_axe',[
        "FI",
        "S "
    ],{
        F:'farmersdelight:rope',
        I:'kubejs:scarpiron',
        S:'#forge:rods/wooden'
    })

    event.remove({output:'farmersdelight:flint_knife'})
    event.shaped('farmersdelight:flint_knife',[
        "FI",
        "S "
    ],{
        F:'farmersdelight:rope',
        I:'minecraft:flint',
        S:'#forge:rods/wooden'
    })
    
    event.replaceInput({output:'hardcore_torches:fire_starter'},'minecraft:string','farmersdelight:straw')

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
    event.custom({
        "type": "create:item_application",
        "ingredients": [
            {
                "tag": "forge:stripped_logs"
            },
            {
                "tag": 'forge:tools/axes'
            }
        ],
        "results": [
            {
                "item": 'farmersdelight:cutting_board'
            }
        ]
    })
    event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
		  {
			"item":'minecraft:flint'
		  }
		],
		"tool": {
		  "tag": 'forge:tools/axes',
		},
		"result": [
		  {
			"item": 'kubejs:rock',
			"count":1
		  }]
	})
    event.remove({id:"farmersdelight:lead_from_straw"})
    event.remove({id:"farmersdelight:rope"})

    event.shapeless('2x farmersdelight:rope',['3x zombiekit:fibre'])
    event.custom({
        "type": "minecraft:campfire_cooking",
        "ingredient": {
          "item": "kubejs:treebark_cup_water"
        },
        "result": "kubejs:treebark_cup_purewater",
        "experience": 0.35,
        "cookingtime": 600
    })//烧树皮杯装水
    event.shaped('kubejs:treebark_cup',[
        "BB",
        "BB"
    ],{
        B:'farmersdelight:tree_bark'
    })
    event.remove({output:'minecraft:crafting_table'})
    event.shaped('minecraft:crafting_table',[
        "IA",
        "PP"
    ],{
        I:'minecraft:iron_ingot',
        A:'create:andesite_alloy',
        P:'minecraft:oak_planks'
    })
})
