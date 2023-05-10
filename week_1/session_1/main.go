package main

import "fmt"

func drinkBuilder(drinkType string, drink string, size string, topping string, options ...interface{}) (float64) {
	var drinkTypeBuilder = DrinkTypeBuilder{}
	drinkTypeBuilder.SetName(drinkType)
	drinkTypeBuilder.SetType(drink)
	drinkTypeBuilder.SetBasePrice()
	drinkTypeBuilder.SetPrice()

	var sizeBuilder = SizeBuilder{}
	sizeBuilder.SetName(size)
	sizeBuilder.SetPrice()

	var toppingBuilder = ToppingBuilder{}
	toppingBuilder.SetName(topping)
	toppingBuilder.SetPrice()
	
	var builder = DrinkBuilder{}
	builder.SetDrink(drinkTypeBuilder.GetDrinkType())
	builder.SetSize(sizeBuilder.GetSize())
	builder.SetTopping(toppingBuilder.GetTopping())

	drinkProduct := builder.GetProduct()
	drinkProduct.price = drinkProduct.drinkType.GetBasePrice() + drinkProduct.drinkType.GetPrice() + drinkProduct.size.GetPrice() + drinkProduct.topping.GetPrice()

	return drinkProduct.price
}

func calculatePrice1(drink string, size string, topping string) (float64) {
	return drinkBuilder("normal", drink, size, topping)
}

func calculatePrice2(drink string, size string, topping string) (float64) {
	return drinkBuilder("milk_tea", drink, size, topping)
}

func main() {
	test1 := calculatePrice1("cold", "L", "whipped_cream")
	test2 := calculatePrice1("blended", "M", "whipped_cream")
	test3 := calculatePrice2("hot", "XL", "whole_milk")
	test4 := calculatePrice2("cold", "S", "almond_milk")
	fmt.Printf("Price 1: %.2f\n", test1)
	fmt.Printf("Price 2: %.2f\n", test2)
	fmt.Printf("Price 3: %.2f\n", test3)
	fmt.Printf("Price 4: %.2f\n", test4)
}