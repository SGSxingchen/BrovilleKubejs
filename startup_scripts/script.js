// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create('kubejs:enclosure_tool').displayName('圈地工具').maxStackSize(1)
	event.create('kubejs:scarpiron').displayName('废铁')
	event.create('kubejs:scarpiron_axe',"axe").displayName('废铁斧').tier("stone")
	event.create('kubejs:rock').displayName('碎石')
	event.create('kubejs:treebark_cup').displayName('树皮杯')
	event.create('kubejs:treebark_cup_water').displayName('树皮杯（水）').maxStackSize(1).food(food =>{
		food
		.hunger(0)
		.saturation(0)
		.alwaysEdible()
	})

	event.create('kubejs:treebark_cup_purewater').displayName('树皮杯（净化水）').maxStackSize(1).food(food =>{
		food
		.hunger(0)
		.saturation(0)
		.alwaysEdible()
	})

	event.create("copper_splint").maxStackSize(64).displayName("铜夹板")//铜夹板
	event.create("steel_ingot").maxStackSize(64).displayName("钢锭")//钢锭
	event.create("steel_sheet").maxStackSize(64).displayName("钢板")//钢板
	event.create("steel_nugget").maxStackSize(64).displayName("钢粒")//钢粒
	event.create("leather_sheet").maxStackSize(64).displayName("皮革布料")//皮革薄板
	event.create("cooked_leather").maxStackSize(64).displayName("熟皮革")//熟皮革
	event.create("diamond_plate").maxStackSize(64).displayName("钻石板")//钻石板
	event.create("bone_ingot").maxStackSize(64).displayName("坚硬骨片")//坚硬骨片
	event.create("string_rag").maxStackSize(64).displayName("丝线布")
	event.create("fibers_rag").maxStackSize(64).displayName("纤维布")//纤维布
	event.create("crushed_big_ore").maxStackSize(64).displayName("杂质很多的圆石")
	event.create("crushed_middle_ore").maxStackSize(64).displayName("杂志较少的圆石")
	event.create("crushed_small_ore").maxStackSize(64).displayName("提炼后的圆石")
	event.create('kubejs:andesite_alloy_dust').displayName('安山合金混合物')
	// 无线电系列
	event.create("letsee").maxStackSize(1).displayName("无线电")// 无线电
	event.create("letsee4").maxStackSize(1).displayName("无线电（电池耗尽）")// 空的无线电
	event.create("letknow").maxStackSize(16).displayName("电池")// 电池
	event.create("circuit_board").maxStackSize(64).displayName("电路板")// 电路板
	//食物
	event.create('treated_flesh').displayName("带骨肉").maxStackSize(64).food(food => {food.hunger(2).saturation(0.25)})// 带骨肉
	event.create('treated_cooked_flesh').displayName("熟带骨肉").maxStackSize(64).food(food => {food.hunger(4).saturation(0.25)})// 熟的带骨肉
	//投掷物
	event.create("fire_bottle").maxStackSize(16).displayName("燃烧瓶")// 燃烧瓶
	//玩Apex玩的
	event.create("resistance").maxStackSize(1).displayName("护盾电池")// 护盾电池
})


  // 注册护甲tier
onEvent('item.registry.armor_tiers', event => {
	// 栏位顺序对应 [靴子, 护腿, 胸甲, 头盔]
	event.add('treebark', tier => {
	  tier.durabilityMultiplier = 5 // 耐久倍率，每个栏位对应[13, 15, 16, 11]
	  tier.slotProtections = [1, 2, 2, 1]// 保护倍率
	  tier.enchantmentValue = 1 // 附魔
	  tier.equipSound = 'minecraft:item.armor.equip_iron' // 装备音效
	  tier.repairIngredient = 'farmersdelight:tree_bark' // 铁砧修复用物品
	  tier.toughness = 0.5 // 护甲韧性，钻石为2.0，下界合金为3.0
	  tier.knockbackResistance = 0.0
	})
	event.add('bone', tier => {
		tier.durabilityMultiplier = 4 // Each slot will be multiplied with [13, 15, 16, 11]
		tier.slotProtections = [2, 4, 5, 1]
		tier.enchantmentValue = 0
		tier.equipSound = 'minecraft:item.armor.equip_iron'
		tier.repairIngredient = '#forge:bone'
		tier.toughness = 0.5 // diamond has 2.0, netherite 3.0
		tier.knockbackResistance = 0.0
	})
})
let armors = ['helmet', 'chestplate', 'leggings','boots']
let armorsname = ["头盔","胸甲","护腿","靴子"]
let tiers = ['treebark','bone']
let tiersName = ["树皮",'骨制']


onEvent('item.registry', event => {
	for (const t in tiers) {
		for (const a in armors) {
			event.create(`kubejs:${tiers[t]}_${armors[a]}`,armors[a]).displayName(`${tiersName[t]}${armorsname[a]}`).tier(tiers[t]).maxStackSize(1)
		}
	}
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})


//大逃杀累了QWQ
//再过一段时间再继续做吧
//正好TAC出1182版本了
//回头咱先搞迁移再说
