package factory

type Drink struct {
	Product
}

func newDrink() IProduct {
	return &Drink{
		Product{
			name:  "Drink",
			price: 2,
			properties: make(map[string]string),
		},
	}
}
