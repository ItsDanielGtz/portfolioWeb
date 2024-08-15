import me from "@/assets/me.png";
function Home() {
  return (
    <section className="h-[calc(100vh)] bg-red-400" id="home">
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-12 md:py-24 lg:py-32 h-full">
        <div className="max-w-md space-y-4 text-center md:text-left md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Hola, soy <span>Daniel Gutiérrez</span>
          </h1>
          <p className="text-muted-foreground md:text-xl">
            {" "}
            Desarrollador Frontend con 2 años de experiencia.{" "}
          </p>
        </div>

        <div className="relative w-full max-w-md md:max-w-lg items-center ">
          <div className="inset-0 overflow-hidden rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover bg-gray-600">
            <img src={me} alt="Daniel Gutiérrez" className=" bottom-0 " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
