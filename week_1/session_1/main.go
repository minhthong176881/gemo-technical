package main

import "fmt"

func drinkBuilder(drinkType string, drink string, size string, topping string, quantity int) BaseProduct {
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
	toppingBuilder.SetQuantity(quantity)
	toppingBuilder.SetPrice()
	
	var builder = DrinkBuilder{}
	builder.SetDrink(drinkTypeBuilder.GetDrinkType())
	builder.SetSize(sizeBuilder.GetSize())
	builder.SetTopping(toppingBuilder.GetTopping())
	builder.SetPrice()

	drinkProduct := builder.GetProduct()

	return drinkProduct
}

func breakfastBuilder(item string, option string) BaseProduct {
	var itemBuilder = ItemBuilder{}
	itemBuilder.item.SetName(item)
	itemBuilder.SetPrice()

	var optionBuilder = OptionBuilder{}
	optionBuilder.option.SetName(option)
	optionBuilder.SetPrice()

	var builder = BreakfastBuilder{}
	builder.SetItem(itemBuilder.GetItem())
	builder.SetOption(optionBuilder.GetOption())
	builder.SetPrice()

	breakfastProduct := builder.GetProduct()

	return breakfastProduct
}

func calculatePrice1(drink string, size string, topping string) float64 {
	drinkProduct := drinkBuilder("normal", drink, size, topping, 1)
	return drinkProduct.GetPrice()
}

func calculatePrice2(drink string, size string, topping string) float64 {
	drinkProduct := drinkBuilder("milk_tea", drink, size, topping, 1)
	return drinkProduct.GetPrice()
}

func calculatePrice3(drinkType string, drink string, size string, topping string, quantity int) float64 {
	drinkProduct := drinkBuilder(drinkType, drink, size, topping, quantity)
	return drinkProduct.GetPrice()
}

func calculatePrice4(item string, option string) float64 {
	breakfastProduct := breakfastBuilder(item, option)
	return breakfastProduct.GetPrice()
}

func calculatePrice5(items []BaseProduct) {
	var total float64 = 0
	for _, item := range(items) {
		total += item.GetPrice()
		fmt.Printf("Item: %s, price: $%.2f\n", item.GetName(), item.GetPrice())
	}

	fmt.Println("--------------------")
	fmt.Printf("Total: $%.2f\n", total * 107.25 / 100)
}

func main() {
	test1 := calculatePrice1("cold", "L", "whipped_cream")
	test2 := calculatePrice1("blended", "M", "whipped_cream")
	test3 := calculatePrice2("hot", "XL", "whole_milk")
	test4 := calculatePrice2("cold", "S", "almond_milk")
	test5 := calculatePrice3("milk_tea", "hot", "L", "chocolate_sauce", 4)
	test6 := calculatePrice3("milk_tea", "hot", "M", "chocolate_sauce", 2)
	test7 := calculatePrice4("sandwiches", "turkey")
	test8 := calculatePrice4("bagels", "butter")
	fmt.Printf("Price 1: %.2f\n", test1)
	fmt.Printf("Price 2: %.2f\n", test2)
	fmt.Printf("Price 3: %.2f\n", test3)
	fmt.Printf("Price 4: %.2f\n", test4)
	fmt.Printf("Price 5: %.2f\n", test5)
	fmt.Printf("Price 6: %.2f\n", test6)
	fmt.Printf("Price 7: %.2f\n", test7)
	fmt.Printf("Price 8: %.2f\n", test8)

	var items []BaseProduct
	drink1 := drinkBuilder("normal", "cold", "L", "whipped_cream", 1)
	items = append(items, drink1)
	drink2 := drinkBuilder("milk_tea", "hot", "XL", "chocolate_sauce", 3)
	items = append(items, drink2)
	breakfast1 := breakfastBuilder("sandwiches", "turkey")
	items = append(items, breakfast1)
	breakfast2 := breakfastBuilder("bagels", "butter")
	items = append(items, breakfast2)

	calculatePrice5(items)

}