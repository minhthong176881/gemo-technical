package factory

type MilkTea struct {
	Product
}

func newMilkTea(name string) IProduct {
	prop := make(map[string]string)
	prop["name"] = name
	prop["type"] = "Hot"
	prop["size"] = "S"
	prop["topping"] = "None"
	prop["category"] = "Drink"
	return &MilkTea{
		Product{
			price: 2.25,
			properties: prop,
		},
	}
}
