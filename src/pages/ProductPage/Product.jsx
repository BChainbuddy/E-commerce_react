import { useParams } from "react-router-dom";

export default function Product() {
  // Get item attributes of an item with id

  const { id } = useParams();
  // Call async function to get attributes
  // If id doesnt exist -> item not found
  return <div>This is the product {id}</div>;
}
