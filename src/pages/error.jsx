import {useNavigate, useRouteError } from "react-router-dom"

const Error404 = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-[#FFF] mb-2">404</h1>
        <p className="text-xl text-gray-600">¡Oops! La página que buscas no se encuentra.</p>
        <p className="text-lg text-gray-600">Parece que has perdido el juego.</p>

        {
          error.message && <p className="text-lg text-gray-600">{error.message}</p>
        }
        <button
          className="mt-4 bg-[#0400DF] text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
          onClick={() => navigate("/")}
        >
          Volver Atrás
        </button>
      </div>
    </div>

  )
}

export default Error404