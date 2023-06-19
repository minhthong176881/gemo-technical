package main

import (
	"fmt"
	factory "gemo_pricing/factory"
)

func main() {
	drink, _ := factory.GetProduct("drink")
	_, _ = factory.GetProduct("milktea")
	_, _ = factory.GetProduct("breakfast")

	drinkSizeL := &LargeSize{product: drink}
	drinkSizeLWithWhippedCream := &WhippedCream{product: drinkSizeL}
	drinkSizeLWithWhippedCreamTypeBlended := &Blended{product: drinkSizeLWithWhippedCream}
	for key, value := range drinkSizeLWithWhippedCreamTypeBlended.GetProperties() {
        fmt.Printf("%s: %s\n", key, value)
    }
	fmt.Println("----------")
	fmt.Printf("Price: $%.2f\n", drinkSizeLWithWhippedCreamTypeBlended.GetPrice())
}
