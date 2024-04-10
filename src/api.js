export async function register(userData) {
  try {
    const response = await fetch("http://localhost:8001/user/register", {
      method: "POST",
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
