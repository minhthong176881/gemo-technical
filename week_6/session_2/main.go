package main

import (
	"fmt"
	factory "gemo_pricing/factory"
	"sort"

	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

func calculatePrices(items []factory.IProduct) {
	var total float32 = 0
	for _, item := range items {
		props := item.GetProperties()
		keys := make([]string, 0, len(props))

		for k := range props {
			keys = append(keys, k)
		}
		sort.Strings(keys)
		for _, k := range keys {
			fmt.Printf("%s: %s\n", cases.Title(language.English).String(k), props[k])
		}
		fmt.Printf("Price: $%.2f\n", item.GetPrice())
		fmt.Println("----------")
		total = total + item.GetPrice()
	}
	fmt.Printf("Total: $%.2f\n", total*1.0725)
}

func main() {
	drink, _ := factory.GetProduct("drink", "Phuc Long")
	milkTea, _ := factory.GetProduct("milktea", "Dink tea")
	breakfast, _ := factory.GetProduct("breakfast", "Super bagel")

	drinkSizeL := &LargeSize{product: drink}
	drinkSizeLWithWhippedCream := &WhippedCream{product: drinkSizeL}
	drinkSizeLWithWhippedCreamTypeBlended := &Blended{product: drinkSizeLWithWhippedCream}
	drinkSizeLWithWhippedCreamWithAlmondMilkTypeBlended := &AlmondMilk{product: drinkSizeLWithWhippedCreamTypeBlended}

	milkTeaSizeXL := &ExtraLargeSize{product: milkTea}
	milkTeaSizeXLWithAlMondMilk := &AlmondMilk{product: milkTeaSizeXL}
	milkTeaSizeXLWithAlMondMilkTypeCold := &Cold{product: milkTeaSizeXLWithAlMondMilk}

	breakfastSandwich := &Sandwich{product: breakfast}
	breakfastSandwichWithEgg := &Egg{product: breakfastSandwich}
	breakfastSandwichWithEggAndTurkey := &Turkey{product: breakfastSandwichWithEgg}

	items := []factory.IProduct{drinkSizeLWithWhippedCreamWithAlmondMilkTypeBlended, milkTeaSizeXLWithAlMondMilkTypeCold, breakfastSandwichWithEggAndTurkey}
	calculatePrices(items)
}
