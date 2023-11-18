// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('item.tooltip', event => {
	event.addAdvanced('kubejs:scarpiron', (item, advanced, text) => {
		text.add(1, Text.of('\u00A77最基础的材料之一'))
		text.add(2, Text.of('\u00A77用它来制作一些重要的工具或材料吧！'))
	})
	event.addAdvanced('kubejs:scarpiron_axe', (item, advanced, text) => {
		text.add(1, Text.of('\u00A77这把小斧头是你的早期工具'))
		text.add(2, Text.of('\u00A77虽然简易，但还算趁手'))
	})
	event.addAdvanced('kubejs:letsee', (item, advanced, text) => {
		text.add(1, Text.of('\u00A7a右键以显示当前坐标信息'))
		text.add(2, Text.of('\u00A77消耗后需重新装载电池'))
	})
	event.addAdvanced('kubejs:letsee4', (item, advanced, text) => {
		text.add(1, Text.of('\u00A7c请在合成中装载电池'))
	})
	event.addAdvanced('kubejs:fire_bottle', (item, advanced, text) => {
		text.add(1, Text.of('\u00A77副手持打火石右键即可点燃'))
	})
	event.addAdvanced('kubejs:copper_splint', (item, advanced, text) => {
		text.add(1, Text.of('\u00A7e护甲合成材料'))
		text.add(2, Text.of('\u00A77升级你的初始皮革套装'))
	})
	event.addAdvanced('kubejs:bone_ingot', (item, advanced, text) => {
		text.add(1, Text.of('\u00A7e护甲合成材料'))
		text.add(2, Text.of('\u00A77制作一件外骨骼护甲（字面意思）'))
	})
	event.addAdvanced('kubejs:fibers_rag', (item, advanced, text) => {
		text.add(1, Text.of('\u00A7e护甲合成材料'))
		text.add(2, Text.of('\u00A77制作一件粗糙质感的朴实护甲'))
	})
	event.addAdvanced('minecraft:rotten_flesh', (item, advanced, text) => {
		text.add(1, Text.of('\u00A77已经糜烂的肉'))
		text.add(2, Text.of('\u00A77但布罗维尔超人总有利用它的办法'))
	})
	event.addAdvanced('#farmersdelight:tools/knives', (item, advanced, text) => {
		text.add(1, Text.of('\u00A77左键杂草收割草杆'))
		text.add(2, Text.of('\u00A77右键砧板切割材料'))
	})
})