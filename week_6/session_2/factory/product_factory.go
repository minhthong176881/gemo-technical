package factory

import "fmt"

func GetProduct(productType string) (IProduct, error) {
	if productType == "drink" {
		return newDrink(), nil
	}
	if productType == "breakfast" {
		return newBreakfast(), nil
	}
	if productType == "milktea" {
		return newMilkTea(), nil
	}

	return nil, fmt.Errorf("invalid product type")
}
