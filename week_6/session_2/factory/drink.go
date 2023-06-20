package factory

type Drink struct {
	Product
}

func newDrink(name string) IProduct {
	prop := make(map[string]string)
	prop["name"] = name
	prop["type"] = "Hot"
	prop["size"] = "S"
	prop["topping"] = "None"
	prop["category"] = "Drink"
	return &Drink{
		Product{
			price: 2,
			properties: prop,
		},
	}
}
