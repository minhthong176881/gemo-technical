package decorator

import (
	factory "gemo_pricing/factory"
	"strings"
	// "strings"
)

type NoTopping struct {
	Product factory.IProduct
}

func (n *NoTopping) GetPrice() float32 {
	return n.Product.GetPrice()
}

func (n *NoTopping) GetProperties() map[string]string {
	prop := n.Product.GetProperties()
	prop["topping"] = "None"
	return prop
}

type WhippedCream struct {
	Product factory.IProduct
}

func (w *WhippedCream) GetPrice() float32 {
	price := w.Product.GetPrice()
	return price + 0.5
}

func (w *WhippedCream) GetProperties() map[string]string {
	prop := w.Product.GetProperties()
	prop["topping"] = updateTopping(prop["topping"], "Whipped Cream")
	return prop
}

type AlmondMilk struct {
	Product factory.IProduct
}

func (a *AlmondMilk) GetPrice() float32 {
	price := a.Product.GetPrice()
	return price + 0.5
}

func (a *AlmondMilk) GetProperties() map[string]string {
	prop := a.Product.GetProperties()
	prop["topping"] = updateTopping(prop["topping"], "Almond Milk")
	return prop
}

type WholeMilk struct {
	Product factory.IProduct
}

func (w *WholeMilk) GetPrice() float32 {
	return w.Product.GetPrice()
}

func (w *WholeMilk) GetProperties() map[string]string {
	prop := w.Product.GetProperties()
	prop["topping"] = updateTopping(prop["topping"], "Whole Milk")
	return prop
}

type Egg struct {
	Product factory.IProduct
}

func (e *Egg) GetPrice() float32 {
	price := e.Product.GetPrice()
	return price + 1
}

func (e *Egg) GetProperties() map[string]string {
	prop := e.Product.GetProperties()
	prop["topping"] = updateTopping(prop["topping"], "Egg")
	return prop
}

type Turkey struct {
	Product factory.IProduct
}

func (t *Turkey) GetPrice() float32 {
	price := t.Product.GetPrice()
	return price + 1
}

func (t *Turkey) GetProperties() map[string]string {
	prop := t.Product.GetProperties()
	prop["topping"] = updateTopping(prop["topping"], "Turkey")
	return prop
}

type Butter struct {
	Product factory.IProduct
}

func (b *Butter) GetPrice() float32 {
	price := b.Product.GetPrice()
	return price + 0.5
}

func (b *Butter) GetProperties() map[string]string {
	prop := b.Product.GetProperties()
	prop["topping"] = updateTopping(prop["topping"], "Butter")
	return prop
}

type CreamCheese struct {
	Product factory.IProduct
}

func (c *CreamCheese) GetPrice() float32 {
	price := c.Product.GetPrice()
	return price + 0.5
}

func (c *CreamCheese) GetProperties() map[string]string {
	prop := c.Product.GetProperties()
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


