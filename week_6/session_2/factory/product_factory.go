package factory

import "fmt"

func GetProduct(productType string, name string) (IProduct, error) {
	if productType == "drink" {
		return newDrink(name), nil
	}
	if productType == "breakfast" {
		return newBreakfast(name), nil
	}
	if productType == "milktea" {
		return newMilkTea(name), nil
	}

	return nil, fmt.Errorf("invalid product type")
}
