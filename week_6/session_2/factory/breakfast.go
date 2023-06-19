package factory

type Breakfast struct {
	Product
} 

func newBreakfast() IProduct {
	return &Breakfast{
		Product{
			name: "Breakfast",
			price: 3,
			properties: make(map[string]string),
		},
	}
}