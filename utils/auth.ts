// utils/auth.ts
interface LoginResponse {
  token: string;
  // Add other user info fields as needed
}

interface LoginCredentials {
  username: string;
  password: string;
}
interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

export const loginUser = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const response = await fetch("http://98.70.27.84:8000/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password } as LoginCredentials),
  });
  console.log({ username, password });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data: LoginResponse = await response.json();
  // Assuming your backend returns a JSON object with a token and user info.
  return data;
};

export const handleLoginAttempt = async (
  username: string,
  password: string
) => {
  const data = await loginUser(username, password);
  return data;
};

// const handleLoginAttempt = async (username: string, password: string) => {
//   const data = await loginUser(username, password);
//   return data;
// };

export const handleSignUpAttempt = async (
  username: string,
  email: string,
  password: string
) => {
  const response = await fetch("http://98.70.27.84:8000/api/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password } as SignUpCredentials),
  });

  if (!response.ok) {
    throw new Error("Sign up failed");
  }

  const data: LoginResponse = await response.json();
  return data;
};
