package main

import (
	"fmt"
	factory "gemo_pricing/factory"

	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

func calculatePrices(items []factory.IProduct) {
	var total float32 = 0
	for _, item := range items {
		for key, value := range item.GetProperties() {
			fmt.Printf("%s: %s\n", cases.Title(language.English).String(key), value)
		}
		fmt.Printf("Price: $%.2f\n", item.GetPrice())
		total = total + item.GetPrice()
	}
	fmt.Println("----------")
	fmt.Printf("Total: $%.2f\n", total * 1.0725)
}

func main() {
	drink, _ := factory.GetProduct("drink", "Phuc Long")
	_, _ = factory.GetProduct("milktea", "Dink tea")
	_, _ = factory.GetProduct("breakfast", "Super bagel")

	drinkSizeL := &LargeSize{product: drink}
	drinkSizeLWithWhippedCream := &WhippedCream{product: drinkSizeL}
	drinkSizeLWithWhippedCreamTypeBlended := &Blended{product: drinkSizeLWithWhippedCream}
	drinkSizeLWithWhippedCreamWithAlmondMilkTypeBlended := &AlmondMilk{product: drinkSizeLWithWhippedCreamTypeBlended}
	
	items := []factory.IProduct{drinkSizeLWithWhippedCreamWithAlmondMilkTypeBlended}
	calculatePrices(items)
}
