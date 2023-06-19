package main

import factory "gemo_pricing/factory"

type Hot struct {
	product factory.IProduct
}

func (h *Hot) GetPrice() float32 {
	return h.product.GetPrice()
}

func (h *Hot) GetProperties() map[string]string {
	prop := h.product.GetProperties()
	prop["type"] = "Hot"
	return prop
}

type Cold struct {
	product factory.IProduct
}

func (c *Cold) GetPrice() float32 {
	return c.product.GetPrice()
}

func (c *Cold) GetProperties() map[string]string {
	prop := c.product.GetProperties()
	prop["type"] = "Cold"
	return prop
}

type Blended struct {
	product factory.IProduct
}

func (b *Blended) GetPrice() float32 {
	price := b.product.GetPrice()
	return price + 1
}

func (b *Blended) GetProperties() map[string]string {
	prop := b.product.GetProperties()
	prop["type"] = "Blended"
	return prop
}