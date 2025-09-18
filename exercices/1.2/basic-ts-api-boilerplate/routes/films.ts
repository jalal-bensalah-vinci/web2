import { Router } from "express";


// Ressource "films" hardcodée
const films = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160, // en millions
    description: "Un thriller de science-fiction autour des rêves partagés.",
    imageUrl: "https://www.odyssee-carriere.com/wp-content/uploads/2019/11/incpetion-3.jpg"
  },
  {
    id: 2,
    title: "Le Seigneur des Anneaux : La Communauté de l'Anneau",
    director: "Peter Jackson",
    duration: 178,
    budget: 93,
    description: "Le premier chapitre de l'épopée de la Terre du Milieu.",
    imageUrl: "https://images.cinefil.com/movies/1050441.webp"
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    budget: 165,
    description: "Une quête spatiale pour sauver l'humanité.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_.jpg"
  }
];

const router = Router();

router.get("/", (_req, res) => {
  return res.json(films);
});

export default router;

