import type { Movie } from "../types";
import Cinema from "./Cinema";
import PageTitle from "./PageTitle";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {

  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1: Movie[] = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2: Movie[] = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ];

  return (
    <div>

      <PageTitle title={pageTitle} />
      <Header title="Salle Principale" image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlsbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"/>
      

      <Cinema name={cinema1Name} movies={moviesCinema1} />
      <Cinema name={cinema2Name} movies={moviesCinema2} />

      <Footer title="Contact" image="https://images.unsplash.com/photo-1686426502666-31ae53d2b265?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bnVyYnVyZ3Jpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"/>
    </div>
  );
};

export default App;
