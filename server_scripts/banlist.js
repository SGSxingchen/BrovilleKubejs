onEvent('recipes', event => {
    //////////////////////////////////////////////////////////////////////////////////////////
    //删除mod配方
	//删除更多旗帜、简单背包、EZ的所有配方
    {   event.remove({ mod: 'additionalbanners' })
		event.remove({ mod: 'sophisticatedbackpacks' })
		event.remove({ mod: 'zombie_extreme' })
		event.remove({ mod: 'zombiekit' })
		// event.remove({ mod: 'create_sa' })
		// event.remove({ mod: 'create' })
		// event.remove({ mod: 'k_turrets' })
		// event.remove({ mod: 'immersiveengineering' })
		event.remove({ mod: 'additionalguns' })
		event.remove({ mod: 'securitycraft'})
    }
    ///删除物品配方
    //【固定ban位】
    event.remove({output:'minecraft:enchanting_table'})//附魔台
    event.remove({output:'minecraft:piston'})//活塞
	event.remove({output:'minecraft:dried_kelp'})//海带
	event.remove({output:'minecraft:bucket'})//桶
	event.remove({output:'minecraft:slime_block'})//史莱姆方块
	event.remove({output:'#minecraft:boats'})//船
	event.remove({output:'minecraft:anvil'})//铁砧
	event.remove({output:'minecraft:end_crystal'})//水晶
	event.remove({output:'minecraft:ender_chest'})//末影箱
	event.remove({output:'minecraft:golden_carrot'})//金胡萝卜
	event.remove({output:'minecraft:brewing_stand'})//酿造台
	event.remove({output:'minecraft:shield'})
	//配方被替换
		//...
	event.remove({output:'minecraft:fishing_rod'})//鱼竿
	event.remove({output:'farmersdelight:cooking_pot'})//厨锅
    event.remove({output:'minecraft:smithing_table'})//锻造台
	event.remove({output:'minecraft:book'})//书
	event.remove({output:'minecraft:iron_helmet'})//铁套
	event.remove({output:'minecraft:iron_chestplate'})//铁套
	event.remove({output:'minecraft:iron_leggings'})//铁套
	event.remove({output:'minecraft:iron_boots'})//铁套
	event.remove({output:'minecraft:diamond_helmet'})//钻石套
	event.remove({output:'minecraft:diamond_chestplate'})//钻石套
	event.remove({output:'minecraft:diamond_leggings'})//钻石套
	event.remove({output:'minecraft:diamond_boots'})//钻石套
	event.remove({output:'minecraft:golden_helmet'})//金套
	event.remove({output:'minecraft:golden_chestplate'})//金套
	event.remove({output:'minecraft:golden_leggings'})//金套
	event.remove({output:'minecraft:golden_boots'})//金套
	event.remove({output:'minecraft:leather_helmet'})//皮革套
	event.remove({output:'minecraft:leather_chestplate'})//皮革套
	event.remove({output:'minecraft:leather_leggings'})//皮革套
	event.remove({output:'minecraft:leather_boots'})//皮革套
	event.remove({output:'minecraft:piglin_banner_pattern'})//旗帜图案
	event.remove({output:'minecraft:flower_banner_pattern'})//旗帜图案
	event.remove({output:'minecraft:creeper_banner_pattern'})//旗帜图案
	event.remove({output:'minecraft:mojang_banner_pattern'})//旗帜图案
	event.remove({output:'minecraft:mojang_banner_pattern'})//旗帜图案
	event.remove({output:'minecraft:iron_ingot'})//铁锭的合成
	event.remove({output:'minecraft:iron_nugget'})//铁粒的合成
	//移除锄头
	event.remove({output:'minecraft:wooden_hoe'})
	event.remove({output:'minecraft:stone_hoe'})
	event.remove({output:'minecraft:iron_hoe'})
	event.remove({output:'minecraft:golden_hoe'})
	event.remove({output:'minecraft:diamond_hoe'})
	event.remove({output:'create_sa:copper_hoe'})
	event.remove({output:'create_sa:zinc_hoe'})
	event.remove({output:'create_sa:brass_hoe'})
	//删除危险爆炸物
	event.remove({output:'minecraft:TNT'})
	event.remove({output:'minecraft:tnt_minecart'})
	event.remove({output:'minecraft:respawn_anchor'})

})