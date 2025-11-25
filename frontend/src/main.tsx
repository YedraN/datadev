import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-ya8z238mymjdwqte.eu.auth0.com"
      clientId="cu3dP16KaJdElJxNKyaTjEPupeScht3p"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <App />
    </Auth0Provider>
  </StrictMode>,
)