import type { IUser } from "../interfaces/auth";

export const authService = {
  async login(email: string): Promise<IUser> {
    // Simulate an API call
    return new Promise((resolve) =>
      setTimeout(() => resolve({ id: "1", email, name: "Alex" }), 500),
    );
  },
  logout(): void {
    localStorage.removeItem("auth-token");
  },
};
