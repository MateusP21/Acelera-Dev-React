const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
	const filteredProducts = productsList.filter((prod)=> ids.includes(prod.id))
	
	let totalPrice = 0
	let prodNotDiscount = 0
	let	discountValue = 0
	let discount = 0
	let categories = []
	let promotion = ''

	const items = filteredProducts.map(item=>{
		return {
			name: item.name,
			category: item.category
		}
	})

	for (let categoryObj of items) {
		categories.push(categoryObj.category)
	}
	
	const promo = [...new Set(categories)]

	if(promo.length == 1) {
		promotion = promotions[0]
	} else if (promo.length == 2) {
		promotion = promotions[1]
	} else if (promo.length == 3) {
		promotion = promotions[2]
	} else {
		promotion = promotions[3]
	}

	 filteredProducts.forEach((product)=> {
		const prod = product.promotions.find(({looks}) => looks.includes(promotion))
		if(prod) return totalPrice += prod.price
		return totalPrice += product.regularPrice
	},0)
	
	
	prodNotDiscount = filteredProducts.reduce((acc,val)=> acc + val.regularPrice,0)
	discountValue = (prodNotDiscount - totalPrice).toFixed(2)
	discount = ((1 - (totalPrice / prodNotDiscount))  * 100).toFixed(2)

	return {
		products: items,
		promotion,
		totalPrice: totalPrice.toFixed(2),
		discountValue,
		discount: `${discount}%`
	};
}
module.exports = { getShoppingCart };
