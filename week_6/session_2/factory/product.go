package factory

type Product struct {
	price      float32
	properties map[string]string
}

func (p *Product) GetPrice() float32 {
	return p.price
}

func (p *Product) GetProperties() map[string]string {
	return p.properties
}
