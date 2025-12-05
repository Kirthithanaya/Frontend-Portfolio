import api from "./api"; // axios instance with baseURL and token interceptor

// Send contact message
export const sendContactMessage = async (messageData) => {
  try {
    const response = await api.post("/contact/send", messageData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to send message");
  }
};
