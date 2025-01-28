

import  { useEffect, useState } from "react";

function Taste() {
  const [data, setData] = useState(null); // State to store API data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch data from the JSONBin URL
    fetch("https://api.jsonbin.io/v3/b/6794a936ad19ca34f8f41eaf")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.record); // Set the data (adjust according to JSON structure)
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError(error.message); // Set error message
        setLoading(false); // Stop loading
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading state
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message
  }

  return (
    <div>
      <h1>Products</h1>
      <div>
        {data && data.products ? (
          <ul>
            {data.products.map((product) => (
              <li key={product.id} style={{ marginBottom: "20px" }}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default Taste;
