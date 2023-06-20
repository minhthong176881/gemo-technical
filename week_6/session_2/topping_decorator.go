package main

import (
	factory "gemo_pricing/factory"
	"strings"
	// "strings"
)

type NoTopping struct {
	product factory.IProduct
}

func (n *NoTopping) GetPrice() float32 {
	return n.product.GetPrice()
}

func (n *NoTopping) GetProperties() map[string]string {
	prop := n.product.GetProperties()
	prop["topping"] = "None"
	return prop
}

type WhippedCream struct {
	product factory.IProduct
}

func (w *WhippedCream) GetPrice() float32 {
	price := w.product.GetPrice()
	return price + 0.5
}

func (w *WhippedCream) GetProperties() map[string]string {
	prop := w.product.GetProperties()
	prop["topping"] = updateTopping(prop["topping"], "Whipped Cream")
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
	prop["topping"] = updateTopping(prop["topping"], "Almond Milk")
	return prop
}

type WholeMilk struct {
	product factory.IProduct
}

func (w *WholeMilk) GetPrice() float32 {
	return w.product.GetPrice()
}

func (w *WholeMilk) GetProperties() map[string]string {
	prop := w.product.GetProperties()
	prop["topping"] = updateTopping(prop["topping"], "Whole Milk")
	return prop
}

func updateTopping(toppings string, topping string) string {
	res := ""
	if strings.Contains(toppings, "None") {
		res = topping
	} else {
		res = toppings + ", " + topping
	}

	return res
}


