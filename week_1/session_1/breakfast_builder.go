package main

var itemList map[string]float64 = map[string]float64{"sandwiches": 3, "bagels": 3}
var optionList map[string]float64 = map[string]float64{"egg": 1, "turkey": 1, "butter": 0.5, "cream_cheese": 0.5}

type baseBreakfast struct {
	name string
	price float64
}

func (b *baseBreakfast) SetName(name string) {
	b.name = name
}

func (b *baseBreakfast) GetPrice() float64 {
	return b.price
}

type Item struct {
	baseBreakfast
}

type ItemBuilder struct {
	item Item
}

func (ib *ItemBuilder) SetPrice() {
	ib.item.price = itemList[ib.item.name]
}

func (ib *ItemBuilder) GetItem() Item {
	return ib.item
}

type Option struct {
	baseBreakfast
}

type OptionBuilder struct {
	option Option
}

func (ob *OptionBuilder) SetPrice() {
	ob.option.price = optionList[ob.option.name]
}

func (ob *OptionBuilder) GetOption() Option {
	return ob.option
}

type BreakFastProduct struct {
	item Item
	option Option
	price float64
}

func (bp BreakFastProduct) GetName() string {
	return bp.item.name + "_" + bp.option.name
}

func (bp BreakFastProduct) GetPrice() float64 {
	return bp.price
}

type BreakfastBuilder struct {
	product BreakFastProduct
}

func (bb *BreakfastBuilder) SetItem(item Item) {
	bb.product.item = item
}

func (bb *BreakfastBuilder) SetOption(option Option) {
	bb.product.option = option
}

func (bb *BreakfastBuilder) SetPrice() {
	bb.product.price = bb.product.item.GetPrice() + bb.product.option.GetPrice()
}

func (bb *BreakfastBuilder) GetProduct() BreakFastProduct {
	return bb.product
}