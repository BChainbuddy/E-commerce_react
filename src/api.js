export async function register(userData) {
  try {
    const response = await fetch("http://localhost:8001/user/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return response;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function login(userData) {
  try {
    const response = await fetch("http://localhost:8001/user/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return response;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function getProducts() {
  try {
    const response = await fetch("http://localhost:8001/items");
    return response.json();
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function getDiscountedProducts() {
  try {
    const response = await fetch("http://localhost:8001/items/discounted");
    return response;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(`http://localhost:8001/items/${id}`);
    return response.json();
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function getCart() {
  try {
    const response = await fetch(`http://localhost:8001/cart`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}
