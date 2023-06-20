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

type Bagel struct {
	product factory.IProduct
}

func (b *Bagel) GetPrice() float32 {
	return b.product.GetPrice()
}

func (b *Bagel) GetProperties() map[string]string {
	prop := b.product.GetProperties()
	prop["type"] = "Bagel"
	return prop
}

type Sandwich struct {
	product factory.IProduct
}

func (s *Sandwich) GetPrice() float32 {
	return s.product.GetPrice()
}

func (s *Sandwich) GetProperties() map[string]string {
	prop := s.product.GetProperties()
	prop["type"] = "Sandwich"
	return prop
}