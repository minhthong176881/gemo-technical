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

type Egg struct {
	product factory.IProduct
}

func (e *Egg) GetPrice() float32 {
	price := e.product.GetPrice()
	return price + 1
}

func (e *Egg) GetProperties() map[string]string {
	prop := e.product.GetProperties()
	prop["topping"] = updateTopping(prop["topping"], "Egg")
	return prop
}

type Turkey struct {
	product factory.IProduct
}

func (t *Turkey) GetPrice() float32 {
	price := t.product.GetPrice()
	return price + 1
}

func (t *Turkey) GetProperties() map[string]string {
	prop := t.product.GetProperties()
	prop["topping"] = updateTopping(prop["topping"], "Turkey")
	return prop
}

type Butter struct {
	product factory.IProduct
}

func (b *Butter) GetPrice() float32 {
	price := b.product.GetPrice()
	return price + 0.5
}

func (b *Butter) GetProperties() map[string]string {
	prop := b.product.GetProperties()
	prop["topping"] = updateTopping(prop["topping"], "Butter")
	return prop
}

type CreamCheese struct {
	product factory.IProduct
}

func (c *CreamCheese) GetPrice() float32 {
	price := c.product.GetPrice()
	return price + 0.5
}

func (c *CreamCheese) GetProperties() map[string]string {
	prop := c.product.GetProperties()
	prop["topping"] = updateTopping(prop["topping"], "Cream Cheese")
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


