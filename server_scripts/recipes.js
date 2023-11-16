settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var tiers = ['wooden','stone']
var tools = ['sword',"shovel",'pickaxe','axe','hoe']

onEvent('item.tags',event =>{
    event.add('forge:tools/axes','kubejs:scarpiron_axe')
})



onEvent('recipes', event =>{
    event.remove({output:'zombiekit:fibre'})

    for (const ti in tiers) {
        for (const to in tools) {
            event.remove({output:`minecraft:${tiers[ti]}_${tools[to]}`})
        }
    }

    event.shaped('hardcore_torches:unlit_torch',[
        'F',
        "S"
    ],{
        F:'zombiekit:fibre',
        S:'#forge:rods/wooden'
    })

    event.shapeless('zombiekit:fibre', ['3x farmersdelight:straw'])

    event.shaped('kubejs:scarpiron_axe',[
        "FI",
        "S "
    ],{
        F:'zombiekit:fibre',
        I:'kubejs:scarpiron',
        S:'#forge:rods/wooden'
    })

    event.remove({output:'farmersdelight:flint_knife'})
    event.shaped('farmersdelight:flint_knife',[
        "FI",
        "S "
    ],{
        F:'zombiekit:fibre',
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
})
