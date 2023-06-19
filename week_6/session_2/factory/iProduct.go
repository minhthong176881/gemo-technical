package factory

type IProduct interface {
	GetPrice() float32
	GetProperties() map[string]string
}
