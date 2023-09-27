const Item = ({ name, quantity, category }) => {
    return (
        <div className="bg-teal-500 rounded p-4 mb-4 ml-8 w-64 mx-auto">
            <ul className="text-gray-500 capitalize">
                <li className="font-bold">{name}</li>
                <li>Quantity, {quantity}</li>
                <li>{category}</li>
            </ul>
        </div>
    );
};

export default Item;
