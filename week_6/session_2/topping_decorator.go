package main

import (
	factory "gemo_pricing/factory"
	// "strings"
)

type WhippedCream struct {
	product factory.IProduct
}

func (w *WhippedCream) GetPrice() float32 {
	price := w.product.GetPrice()
	return price + 0.5
}

func (w *WhippedCream) GetProperties() map[string]string {
	prop := w.product.GetProperties()
	prop["topping"] = "Whipped cream"
	return prop
}

type AlmondMilk struct {
	product factory.IProduct
}

func (a *AlmondMilk) GetPrice() float32 {
	price := a.product.GetPrice()
	return price + 0.5
}

func (a *AlmondMilk) GetProperties() map[string]string {
	prop := a.product.GetProperties()
	prop["topping"] = "Almond milk"
	return prop
}

