import { Router } from "express";

import { Film } from "../types";

const router = Router();

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Shang-Chi and the Legend of the Ten Rings",
    director: "Destin Daniel Cretton",
    duration: 132,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
    description:
      "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
    budget: 150,
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    budget: 63,
  },
  {
    id: 3,
    title: "Summer Wars",
    director: "Mamoru Hosoda",
    duration: 114,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
    description:
      "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
    budget: 18.7,
  },
  {
    id: 4,
    title: "The Meyerowitz Stories",
    director: "Noah Baumbach",
    duration: 112,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
    description:
      "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
  },
  {
    id: 5,
    title: "her",
    director: "Spike Jonze",
    duration: 126,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
    description:
      "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    budget: 23,
  },
];
// Read all films


router.get("/",(_req, res) => {
  const minimumDuration = _req.query["minimum-duration"];
  console.log(minimumDuration);

  if (minimumDuration) {
    const filteredFilms = defaultFilms.filter(
      (film) => film.duration >= Number(minimumDuration)
    );
    return res.json(filteredFilms);
  }

  return res.json(defaultFilms);
});


router.get("/:id", (req, res) => {
const id = req.params.id;

  for (let index = 0; index < defaultFilms.length; index++) {
    if(defaultFilms[index].id === Number(id)){
        return res.json(defaultFilms[index]);
    }
  }

  return res.json(`film with id: ${id} not found`);
});


router.post("/",(_req, res) => {
  const film = _req.body as Film;

  if (!film.title || !film.director || !film.duration ||  !film.imageUrl || !film.description) {
    film.id = defaultFilms.length + 1;
    defaultFilms.push(film);
      return res.status(400).json({ error: "Invalid film data" });
  }

  return res.status(201).json(film);
});


export default router;
