package factory

type Breakfast struct {
	Product
} 

func newBreakfast(name string) IProduct {
	prop := make(map[string]string)
	prop["name"] = name
	prop["type"] = "Bagel"
	prop["topping"] = "None"
	prop["category"] = "Food"
	return &Breakfast{
		Product{
			price: 3,
			properties: prop,
		},
	}
}