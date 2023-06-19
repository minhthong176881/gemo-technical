package main

import (
	factory "gemo_pricing/factory"
)

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