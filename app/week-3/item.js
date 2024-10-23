

export default function Item({ ItemObj }) {

    let {
        name: itemName,
        quantity: itemQuantity,
        category: itemCategory,

    } = ItemObj

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md shadow-lg">
            <p className="text-x1 font-bold">{itemName}</p>
            <p className="text-sm">Buy {itemQuantity} in {itemCategory}</p>
        </div>
    );
}