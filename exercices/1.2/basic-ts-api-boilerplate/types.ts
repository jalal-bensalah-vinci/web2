interface Film {
  id: number;
  director: string;
  duration: string;
  budget: number | undefined;
  description: string | undefined;
  imageUrl: string | undefined;
}

export type {Film};
