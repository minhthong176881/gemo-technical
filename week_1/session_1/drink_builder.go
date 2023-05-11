package main

var basePrice map[string]float64 = map[string]float64{"normal": 2, "milk_tea": 2.25}
var typeList map[string]float64 = map[string]float64{"hot": 0, "cold": 0, "blended": 1}
var sizeList map[string]float64 = map[string]float64{"S": 0, "M": 0.5, "L": 1, "XL": 1.5}
var toppingList map[string]float64 = map[string]float64{"no_whipped_cream": 0, "whipped_cream": 0.5, "whole_milk": 0, "almond_milk": 0.5, "chocolate_sauce": 0.5}
var toppingOptionList map[string]*ToppingOption = map[string]*ToppingOption{"chocolate_sauce": {base: 2, max: 6}}

type baseProperties struct {
	name  string
	price float64
}

func (b *baseProperties) SetName(name string) {
	b.name = name
}

func (b *baseProperties) GetPrice() float64 {
	return b.price
}

type DrinkType struct {
	baseProperties
	drinkType string
	basePrice float64
}

func (d *DrinkType) GetBasePrice() float64 {
	return d.basePrice
}

type DrinkTypeBuilder struct {
	drinkType DrinkType
}

func (d *DrinkTypeBuilder) SetName(name string) {
	d.drinkType.name = name
}

func (d *DrinkTypeBuilder) SetType(drinkType string) {
	d.drinkType.drinkType = drinkType
}

func (d *DrinkTypeBuilder) SetBasePrice() {
	d.drinkType.basePrice = basePrice[d.drinkType.name]
}

func (d *DrinkTypeBuilder) SetPrice() {
	d.drinkType.price = typeList[d.drinkType.drinkType]
}

func (d *DrinkTypeBuilder) GetDrinkType() DrinkType {
	return d.drinkType
}

type Size struct {
	baseProperties
}

type SizeBuilder struct {
	size Size
}

func (s *SizeBuilder) SetName(name string) {
	s.size.name = name
}

func (s *SizeBuilder) SetPrice() {
	s.size.price = sizeList[s.size.name]
}

func (s *SizeBuilder) GetSize() Size {
	return s.size
}

type Topping struct {
	baseProperties
	quantity int
}

type ToppingOption struct {
	base int
	max  int
}

type ToppingBuilder struct {
	topping Topping
}

func (t *ToppingBuilder) SetName(name string) {
	t.topping.name = name
}

func (t *ToppingBuilder) SetQuantity(quantity int) {
	t.topping.quantity = quantity
}

func (t *ToppingBuilder) SetPrice() {
	hasOption := toppingOptionList[t.topping.name]
	if hasOption != nil {
		if t.topping.quantity > hasOption.base && t.topping.quantity <= hasOption.max {
			t.topping.price = toppingList[t.topping.name] * float64(t.topping.quantity - hasOption.base)
		}
	} else {
		t.topping.price = toppingList[t.topping.name]
	}
}

func (t *ToppingBuilder) GetTopping() Topping {
	return t.topping
}

type BaseProduct interface {
	GetName() string
	GetPrice() float64
}

type DrinkProduct struct {
	drinkType DrinkType
	size      Size
	topping   Topping
	price     float64
}

func (dp DrinkProduct) GetName() string {
	return dp.drinkType.drinkType + "_" + dp.drinkType.name + "_" + dp.size.name + "_" + dp.topping.name
}

func (dp DrinkProduct) GetPrice() float64 {
	return dp.price
}

type DrinkBuilder struct {
	product DrinkProduct
}

func (db *DrinkBuilder) SetDrink(drinkType DrinkType) {
	db.product.drinkType = drinkType
}

func (db *DrinkBuilder) SetSize(size Size) {
	db.product.size = size
}

func (db *DrinkBuilder) SetTopping(topping Topping) {
	db.product.topping = topping
}

func (db *DrinkBuilder) SetPrice() {
	db.product.price = db.product.drinkType.GetBasePrice() + db.product.drinkType.GetPrice() + db.product.size.GetPrice() + db.product.topping.GetPrice()
}

func (db *DrinkBuilder) GetProduct() DrinkProduct {
	return db.product
}
