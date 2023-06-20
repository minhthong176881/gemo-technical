package decorator

import factory "gemo_pricing/factory"

type Hot struct {
	Product factory.IProduct
}

func (h *Hot) GetPrice() float32 {
	return h.Product.GetPrice()
}

func (h *Hot) GetProperties() map[string]string {
	prop := h.Product.GetProperties()
	prop["type"] = "Hot"
	return prop
}

type Cold struct {
	Product factory.IProduct
}

func (c *Cold) GetPrice() float32 {
	return c.Product.GetPrice()
} 

func (c *Cold) GetProperties() map[string]string {
	prop := c.Product.GetProperties()
	prop["type"] = "Cold"
	return prop
}

type Blended struct {
	Product factory.IProduct
}

func (b *Blended) GetPrice() float32 {
	price := b.Product.GetPrice()
	return price + 1
}

func (b *Blended) GetProperties() map[string]string {
	prop := b.Product.GetProperties()
	prop["type"] = "Blended"
	return prop
}

type Bagel struct {
	Product factory.IProduct
}

func (b *Bagel) GetPrice() float32 {
	return b.Product.GetPrice()
}

func (b *Bagel) GetProperties() map[string]string {
	prop := b.Product.GetProperties()
	prop["type"] = "Bagel"
	return prop
}

type Sandwich struct {
	Product factory.IProduct
}

func (s *Sandwich) GetPrice() float32 {
	return s.Product.GetPrice()
}

func (s *Sandwich) GetProperties() map[string]string {
	prop := s.Product.GetProperties()
	prop["type"] = "Sandwich"
	return prop
}