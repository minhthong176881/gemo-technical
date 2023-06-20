package main

import (
	factory "gemo_pricing/factory"
)

type SmallSize struct {
	product factory.IProduct
}

func (s *SmallSize) GetPrice() float32 {
	return s.product.GetPrice()
}

func (s *SmallSize) GetProperties() map[string]string {
	prop := s.product.GetProperties()
	prop["size"] = "S"
	return prop
}

type MediumSize struct {
	product factory.IProduct
}

func (m *MediumSize) GetPrice() float32 {
	price := m.product.GetPrice()
	return price + 0.5
}

func (m *MediumSize) GetProperties() map[string]string {
	prop := m.product.GetProperties()
	prop["size"] = "M"
	return prop
}

type LargeSize struct {
	product factory.IProduct
}

func (l *LargeSize) GetPrice() float32 {
	price := l.product.GetPrice()
	return price + 1
}

func (l *LargeSize) GetProperties() map[string]string {
	prop := l.product.GetProperties()
	prop["size"] = "L"
	return prop
}

type ExtraLargeSize struct {
	product factory.IProduct
}

func (x *ExtraLargeSize) GetPrice() float32 {
	price := x.product.GetPrice()
	return price + 1.5
}

func (x *ExtraLargeSize) GetProperties() map[string]string {
	prop := x.product.GetProperties()
	prop["size"] = "XL"
	return prop
}

func validateProps(props map[string]string, prop string) bool {
	return props["type"] != "Hot"
}
