

export default function Item({ ItemObj }) {

    let {
        name: itemName,
        quantity: itemQuantity,
        category: itemCategory,

    } = ItemObj

    return (
        <div>
            <p>{itemName}</p>
            <p>Buy {itemQuantity} in {itemCategory}</p>
        </div>
    );
}