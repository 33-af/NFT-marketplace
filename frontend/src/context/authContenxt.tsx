import axios from 'axios';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  token: string | null;
  avatar: string | null;
  auctionId: string | null;
  favorites: string | null;
  newBidPrice: string | null;
  walletId: string | null;
  username: string | null;
  email: string | null;
  auth: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
  handleRegister: (data: RegisterData) => Promise<void>; 
}


interface RegisterData {
  username: string;
  email: string;
  password: string;
  id: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);




export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(localStorage.getItem('token'));
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState<null | string>(null);
  const [email, setEmail] = useState<null | string>(null);
  const [avatar, setAvatar] = useState<null | string>(null);
  const [auctionId, setAuctionId] = useState<null | string>(null);
  const [favorites, setFavorites] = useState<null | string>(null);
  const [newBidPrice, setNewBidPrice] = useState<null | string>(null);
  const [walletId, setWalletId] = useState<null | string>(null);

  useEffect(() => {
    if (localStorage.getItem("walletId")) {
      setWalletId(localStorage.getItem("walletId"));
    }
  }, []);
  

  const handleRegister = async (data: RegisterData) => {
    try {
      const response = await axios.post('https://nft-market-as0q.onrender.com/auth/register', {
        username: data.username,
        email: data.email,
        password: data.password,
        id: data.id,
        wallet: {
          walletId: ''
        }
      });
      console.log("Response from the server:", response);
  
      if (response) {
        const walletId = response.data?.wallet?.walletId;
        console.log(walletId)
      
  
        if (walletId) {
          localStorage.setItem("walletId", walletId);
          console.log("walletId saved:", walletId);
          setWalletId(walletId);
        } else {
          console.warn("walletId is missing from the server response");
        }
  
        setAuth(true);
        setUsername(data.username);
        setEmail(data.email);
        setToken(response.data.token || null);
        setAvatar(response.data.avatar || null);
        setAuctionId(response.data.auctionId || null);
        setFavorites(response.data.favorites || null);
        setNewBidPrice(response.data.newBidPrice || null);
        setWalletId(response.data.wallet.walletId);
  
        console.log("User registered:", response);
      } else {
        console.error("Registration error: empty response from the server");
      }
    } catch (e) {
      console.error("Error during registration:", e);
    }
  };
  


  const setToken = (token: string) => {
    setTokenState(token);
    localStorage.setItem('token', token);
  };

  const clearToken = () => {
    setTokenState(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, setToken, clearToken, auctionId, walletId, newBidPrice, favorites, avatar, username, email, auth, handleRegister   }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
