onEvent('recipes', event => {
///剪皮革
	event.custom({
	"type": "farmersdelight:cutting",
	"ingredients": [
		{
		"item": "minecraft:iron_ingot"
		}
	],
	"tool": {
		"tag": "forge:shears"
	},
	"result": [
		{
		"item": "zombiekit:iron_wire",
		"count": 1
		},
		{
		"item": "zombiekit:iron_wire",
		"chance": 0.1
		},
		{
		"item": "minecraft:iron_nugget",
		"count": 4
		}
	]
	})
///香喷喷的腐肉干
event.custom({
	"type": "farmersdelight:cutting",
	"ingredients": [
		{
		"item": "minecraft:rotten_flesh"
		}
	],
	"tool": {
		"tag": "forge:tools/knives"
	},
	"result": [
		{
		"item": "kubejs:treated_flesh"
		}
	]
	})
event.smelting('kubejs:treated_cooked_flesh'/* 输出物品 */, 'kubejs:treated_flesh'/* 输入物品 */)
})