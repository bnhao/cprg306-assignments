

export default function Item({ name, quantity, category }) {


    return (
        <div className="bg-gray-800 text-white p-4 rounded-md shadow-lg">
            <p className="text-x1 font-bold">{name}</p>
            <p className="text-sm">Buy {quantity} in {category}</p>
        </div>
    );
}