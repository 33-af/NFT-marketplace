import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.module.scss'
import App from './App.tsx'
// import { AuthProvider } from './context/authContenxt.tsx'; 
// import { UserInfoProvider } from './context/UserInfo.tsx';
// import { FavoritesProvider } from './context/favorites.tsx';
// import { UpdateNftProvider } from './context/nftContext.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
            {/* <AuthProvider>
                <UserInfoProvider>
                    <FavoritesProvider>
                        <UpdateNftProvider> */}
                            <App />
                        {/* </UpdateNftProvider>
                    </FavoritesProvider>
                </UserInfoProvider>
            </AuthProvider> */}
    </BrowserRouter>
)
