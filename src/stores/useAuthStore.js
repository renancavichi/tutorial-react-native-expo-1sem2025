import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLogged: false,
  accessToken: '',
  refreshToken: '', // não salvar no store na versão web (apenas no cookie)
  id: null,
  name: '',
  email: '',
  avatar: '',

  login: (userLogged) => set({ 
    isLogged: true,
    accessToken: userLogged.accessToken,
    refreshToken: userLogged.refreshToken,
    id: userLogged?.user?.id,
    name: userLogged?.user?.name,
    email: userLogged?.user?.email,
    avatar: userLogged?.user?.avatar,
  }),

  logout: () => set({ 
    isLogged: false,
    accessToken: '',
    refreshToken: '',
    id: null,
    name: '',
    email: '',
    avatar: '',
  }),
}));