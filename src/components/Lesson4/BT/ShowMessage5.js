import React from "react";

function Child ({data}) {
    return (
        <p>Trong Child: {data}</p>
    )
}
function Parent() {
    return (
        <Child data="Du lieu tu cha" />
    )

}

export default Parent;