import { create } from "zustand";
import axios from "axios";

const URL = "http://localhost:3000/register";

export const useUserStore = create((set) => ({
  token: null,
  loading: false,
  registerUser: async (email, password) => {
    set(() => ({
      loading: true,
    }));
    const response = await axios.post(URL, {
      email,
      password,
    });
    console.log(response.data);
    set(() => ({
      loading: false,
    }));
  },
}));
