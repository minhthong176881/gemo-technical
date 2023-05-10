package main

var basePrice map[string]float64 = map[string]float64{"normal": 2, "milk_tea": 2.25}
var typeList map[string]float64 = map[string]float64{"hot": 0, "cold": 0, "blended": 1}
var sizeList map[string]float64 = map[string]float64{"S": 0, "M": 0.5, "L": 1, "XL": 1.5}
var toppingList map[string]float64 = map[string]float64{"no_whipped_cream": 0, "whipped_cream": 0.5, "whole_milk": 0, "almond_milk": 0.5}

type baseProperties struct {
	name string
	price float64
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
	Options interface{}
}

type ToppingBuilder struct {
	topping Topping
}

func (t *ToppingBuilder) SetName(name string) {
	t.topping.name = name
}

func (t *ToppingBuilder) SetPrice() {
	t.topping.price = toppingList[t.topping.name]
}

func (t *ToppingBuilder) GetTopping() Topping {
	return t.topping
}

type DrinkProduct struct {
	drinkType DrinkType
	size Size
	topping Topping
	price float64
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

func (db *DrinkBuilder) GetProduct() DrinkProduct {
	return db.product
}
