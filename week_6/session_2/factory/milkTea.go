package factory

type MilkTea struct {
	Product
}

func newMilkTea() IProduct {
	return &MilkTea{
		Product{
			name:  "Milk tea",
			price: 2.5,
			properties: make(map[string]string),
		},
	}
}
