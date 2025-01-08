import { useChangeTheme } from "@/hooks/useChangeTheme";
import Arrow from "@/icons/Arrow";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const {} = useChangeTheme();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <section className="flex gap-10" aria-labelledby="not-found-heading">
        <img
          src="/404/image-404.webp"
          alt="Ilustración de error 404"
          className="size-96"
        />
        <div className="flex flex-col justify-center space-y-8">
          <h1 id="not-found-heading" className="text-gray-800 text-5xl font-bold dark:text-white">
            Oops!
          </h1>
          <p className="text-gray-800 text-sm dark:text-white">
            No hemos podido encontrar <br /> la página que buscaba
          </p>
          <div>
            <button
              onClick={handleRedirect}
              className="bg-black flex items-center gap-6 px-3 py-1 text-sm text-white rounded-xl"
              aria-label="Volver al inicio"
            >
              <Arrow className="size-4 text-white" />
              <span>Inicio</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
