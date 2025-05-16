import React from "react";
import ShowMessage from "./ShowMessage";

function Example1() {
const title = "Hello World";
const description = "This is a description";

const menuInfo = {
    title: "Hello World",
    description:"Props is",
    price: 10}
const menuItems = ["Home", "About", "Contact","Portfolio"];
    return (
       <ShowMessage menuInfomation = {menuInfo} items={menuItems} />
    )
}
export default Example1;