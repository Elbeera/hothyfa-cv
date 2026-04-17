const API_BASE_URL = process.env.NEXT_PUBLIC_AI_CV_API_URL;

export async function askCv(message: string) {
  if (!API_BASE_URL) {
    throw new Error("AI CV API URL is not configured");
  }

  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Failed to get response from AI CV Assistant");
  }

  return response.json();
}