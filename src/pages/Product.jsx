import { useState, useEffect } from "react";
import { getAllCategories } from "../Api/Product.js";
import "../App.css"

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (err) {
        setError("erorr");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className=" product d-flex justify-content-center">
      <h1 >Categories</h1>
      <div>
        {categories.map((category) => (
           <div
      key={category.id}
      style={{ width: "18rem" }}
    >
      <img
        src={category.image}
        alt={category.name}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <h5>{category.name}</h5>
    </div>
  ))}
</div>
    
      </div>

  );
}

export default Categories;