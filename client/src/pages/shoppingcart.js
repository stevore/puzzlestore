function OrderItem({ order }) {
    const { id: orderId, purchaseDate, products } = order;

    return (
        <div>
            <h3 className="text-dark">Order ID: {orderId}</h3>
            <div>
                {products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                        <Link to={`/products/${_id}`}>
                            <img alt={name} src={`/images/${image}`} />
                            <p>{name}</p>
                        </Link>
                        <div>
                            <span>${price}</span>
                        </div>
                    </div>
                ))}
            </div>
            <p className="mt-2 mb-0">
                {new Date(parseInt(purchaseDate)).toLocaleDateString()}
            </p>
        </div>
    );
}