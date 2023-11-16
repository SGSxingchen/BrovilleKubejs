onEvent('item.modification', event => {
    event.modify('zombiekit:molotov_cocktail', item => {
      item.maxStackSize = 1
      item.fireResistant = true
    })

  })