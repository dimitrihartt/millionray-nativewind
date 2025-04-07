import { create } from 'zustand';

export interface LoggedInState {  
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const useSupabaseStore = create<LoggedInState>((set) => ({
  loggedIn: false,  
  login: () => set({ loggedIn: true }),
  logout: () => set({ loggedIn: false })
}));



// function loggedStatus() {
//   const isLoggedIn = useStore((state) => state.loggedIn)
//   return <h1>{bears} bears around here...</h1>
// }

// function loggedIn() {
//   const login = useStore((state: { login: any; }) => state.login)
//   const logout = useStore((state: { logout: any; }) => state.logout)
//   return <button onClick={login}>Login</button>
// }