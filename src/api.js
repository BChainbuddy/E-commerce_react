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
    if (!response.ok) {
      return false;
    }
    return response.json();
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function addToCart(itemData) {
  try {
    const response = await fetch(`http://localhost:8001/cart`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
    return response;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function clearCart() {
  try {
    const response = await fetch(`http://localhost:8001/cart`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function deleteFromCart(itemId) {
  try {
    const response = await fetch(`http://localhost:8001/cart/${itemId}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function changeQuantity(itemId, quantity) {
  try {
    const response = await fetch(`http://localhost:8001/cart/${itemId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quantity),
    });
    return response;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function stripeSession() {
  try {
    const response = await fetch(`http://localhost:8001/cart/payment-session`, {
      method: "POST",
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

export async function getUser() {
  try {
    const response = await fetch(`http://localhost:8001/user`, {
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

export async function getAddress() {
  try {
    const response = await fetch(`http://localhost:8001/user/address`, {
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

export async function postAddress(newAddress) {
  try {
    const response = await fetch(`http://localhost:8001/user/address`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(newAddress),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function putAddress(newAddress) {
  try {
    const response = await fetch(`http://localhost:8001/user/address`, {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify(newAddress),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function checkoutComplete() {
  try {
    const response = await fetch(`http://localhost:8001/cart/checkout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function getOrders() {
  try {
    const response = await fetch(`http://localhost:8001/orders`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}

export async function getOrderById(orderId) {
  try {
    const response = await fetch(`http://localhost:8001/orders/${orderId}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
}
