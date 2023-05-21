import React, { useState } from "react";
import { Button, Space } from 'antd';
import Item from "../components/item";
import Navbar from "../components/navbar";

var types = [{ name: "Coffee", id: "coffee" }, { name: "Milk tea", id: "milk_tea" }, { name: "Breakfast", id: "breakfast" }]

var coffeeList = [{ name: "2land coffee", price: 2, img: "", description: "super good coffee" },
{ name: "phuc long", price: 2, img: "", description: "super good coffee too" },
{ name: "star buck", price: 2, img: "", description: "average good coffee" },
{ name: "star buck", price: 2, img: "", description: "average good coffeeasdfasdfasdf sadffffffffaa aaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa" },
{ name: "star buck", price: 2, img: "", description: "average good coffee" },
{ name: "star buck", price: 2, img: "", description: "average good coffee" },
{ name: "star buck", price: 2, img: "", description: "average good coffee" }]

var milkTeaList = [{ name: "Dink tea", price: 2.25, img: "", description: "super good milk tea" },
{ name: "Mixue", price: 2.25, img: "", description: "super cheap milk tea" },
{ name: "Bubble tea", price: 2.25, img: "", description: "other super good milk tea" }]

var breakfastList = [{ name: "Sandwich", price: 3, img: "", description: "super good breakfast" },
{ name: "Bagel", price: 3, img: "", description: "super good breakfast too" }]

const map = new Map()

map.set("coffee", coffeeList)
map.set("milk_tea", milkTeaList)
map.set("breakfast", breakfastList)

const Menu = () => {
    var selected = "coffee";

    var getType = () => {
        let list = []
        types.forEach((type) => {
            let active
            if (type.id === selected) active = { backgroundColor: "black" }
            list.push(
                <Button key={type.id} type="primary" shape="round" className="custom-button" id={type.id} style={active}
                    onClick={changeSelectedBtn}>
                    {type.name}
                </Button>
            )
        })

        return list
    }

    var getItem = (name) => {
        let list = map.get(name)
        let x = []
        let i = 0;

        list.forEach((item) => {
            x.push(<Item key={i} item={item}></Item>)
            i += 1
        })

        return x
    }

    var initItem = () => {
        return getItem(selected)
    }

    const [itemList, setItemList] = useState(initItem)

    var changeSelectedBtn = event => {
        let id = event.currentTarget.id
        selected = id
        document.getElementById(id).style.backgroundColor = "black"
        let elements = document.getElementsByClassName("custom-button")
        for (let i = 0; i < elements.length; i++) {
            let elementId = elements[i].getAttribute("id")
            if (elementId !== selected) {
                document.getElementById(elementId).style.backgroundColor = "#603701"
            }
        }

        setItemList(getItem(selected))
    }

    let typeList = getType()

    return (
        <>
            <Navbar />
            <div className="page-title">
                <h1>Menu</h1>
            </div>

            <div className="menu">
                <div className="menu-btn-tab">
                    {typeList}
                </div>
                <div className="item-container">
                    <Space direction="horizontal" id="item-space" size="middle" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {itemList}
                    </Space>
                </div>
            </div>
        </>
    )
}

export default Menu