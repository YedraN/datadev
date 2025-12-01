import { useAuth0 } from "@auth0/auth0-react";
import SEO from "../components/SEO";

const AuthScreen: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <SEO
        title="Iniciar Sesión - DataDev"
        description="Inicia sesión en DataDev para acceder a tus servicios y proyectos."
      />
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-10">

        {/* Título */}
        <h1 className="text-3xl font-bold text-center mb-4">
          Bienvenido 👋
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Inicia sesión para acceder a tu cuenta
        </p>

        {/* Formulario (solo UI) */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-3 rounded-xl border border-gray-300
                       focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* Botón principal */}
          <button
            type="button"
            onClick={() => loginWithRedirect()}
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold
                       hover:bg-blue-700 transition shadow-md"
          >
            Iniciar sesión
          </button>
        </form>

        {/* Línea divisoria */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-400">o</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        {/* LOGIN SOCIAL */}
        <div className="flex flex-col gap-3">

          {/* GOOGLE */}
          <button
            onClick={() =>
              loginWithRedirect({
                connection: "google-oauth2",
              } as any)
            }
            className="w-full flex items-center justify-center gap-3
                       bg-white text-gray-700 border border-gray-300 py-3 rounded-xl
                       hover:bg-gray-100 transition font-medium shadow-sm"
          >
            {/* Google Icon SVG */}
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.5 0 6.7 1.2 9.1 3.3l6.8-6.8C35.6 2.3 30.1 0 24 0 14.6 0 6.4 5.3 2.6 13l7.9 6.1C12.7 13 17.9 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.5-2 4.7-4.2 6.1l6.5 5.1c4-3.7 6.4-9.1 6.4-15.7z" />
              <path fill="#FBBC05" d="M10.5 28.1c-.5-1.5-.8-3-.8-4.6s.3-3.1.8-4.6l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 11.2l7.9-6.1z" />
              <path fill="#34A853" d="M24 48c6.1 0 11.6-2.1 15.3-5.7l-6.5-5.1c-2 1.3-4.6 2.1-7.4 2.1-6.1 0-11.3-3.6-13.9-8.7l-7.9 6.1C6.4 42.7 14.6 48 24 48z" />
            </svg>

            Continuar con Google
          </button>

          {/* APPLE */}
          <button
            onClick={() =>
              loginWithRedirect({
                connection: "apple",
              } as any)
            }
            className="w-full flex items-center justify-center gap-3
                       bg-black text-white py-3 rounded-xl
                       hover:bg-gray-900 transition font-medium shadow-md"
          >
            {/* Apple Icon */}
            <svg
              fill="#ffff"
              width="20"
              height="20"
              viewBox="0 0 22.773 22.773"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
            >
              <g>
                <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path>
                <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path>
              </g>
            </svg>

            Continuar con Apple
          </button>
        </div>

      </div>
    </div>
  );
};

export default AuthScreen;