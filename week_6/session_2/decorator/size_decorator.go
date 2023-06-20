package decorator

import (
	factory "gemo_pricing/factory"
)

type SmallSize struct {
	Product factory.IProduct
}

func (s *SmallSize) GetPrice() float32 {
	return s.Product.GetPrice()
}

func (s *SmallSize) GetProperties() map[string]string {
	prop := s.Product.GetProperties()
	prop["size"] = "S"
	return prop
}

type MediumSize struct {
	Product factory.IProduct
}

func (m *MediumSize) GetPrice() float32 {
	price := m.Product.GetPrice()
	return price + 0.5
}

func (m *MediumSize) GetProperties() map[string]string {
	prop := m.Product.GetProperties()
	prop["size"] = "M"
	return prop
}

type LargeSize struct {
	Product factory.IProduct
}

func (l *LargeSize) GetPrice() float32 {
	price := l.Product.GetPrice()
	return price + 1
}

func (l *LargeSize) GetProperties() map[string]string {
	prop := l.Product.GetProperties()
	prop["size"] = "L"
	return prop
}

type ExtraLargeSize struct {
	Product factory.IProduct
}

func (x *ExtraLargeSize) GetPrice() float32 {
	price := x.Product.GetPrice()
	return price + 1.5
}

func (x *ExtraLargeSize) GetProperties() map[string]string {
	prop := x.Product.GetProperties()
	prop["size"] = "XL"
	return prop
}