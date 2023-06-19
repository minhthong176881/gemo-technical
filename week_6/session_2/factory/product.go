package factory

type Product struct {
	name       string
	price      float32
	properties map[string]string
}

func (p *Product) GetPrice() float32 {
	return p.price
}

func (p *Product) GetName() string {
	return p.name
}

func (p *Product) GetProperties() map[string]string {
	return p.properties
}

func (p *Product) SetProperties(key string, val string) {
	p.properties[key] = val
}
