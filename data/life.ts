export interface LifeItem {
  id: string;
  title: string;
  artist?: string;
  author?: string;
  director?: string;
  image: string;
  link?: string;
}

export interface LifeCategory {
  id: string;
  title: string;
  heroTitle: {
    line1: string;
    highlight1: string;
    midText?: string;
    highlight2?: string;
  };
  description: string;
  heroDescription: string;
  icon: string;
  colorClass: string;
  quote: string;
  items: LifeItem[];
}

export const lifeCategories: LifeCategory[] = [
  {
    id: "books",
    title: "Books",
    heroTitle: {
      line1: "Read",
      highlight1: "Learn",
      midText: " and ",
      highlight2: "Grow",
    },
    description: "Books that have influenced my thinking and growth.",
    heroDescription: "Diving deep into the human psyche and the patterns that shape our world. Here's a collection of books that changed my perspective.",
    icon: "lucide:book",
    colorClass: "text-blue-500",
    quote: "Until you make the unconscious conscious, it will direct your life and you will call it fate. — C.G. Jung",
    items: [
      {
        id: "1",
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._UF1000,1000_QL80_.jpg",
      },
      {
        id: "2",
        title: "The Rudest Book Ever",
        author: "Shwetabh Gangwar",
        image: "https://m.media-amazon.com/images/I/51F3+lRPt+L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        id: "3",
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
      },
      {
        id: "4",
        title: "Deep Work",
        author: "Cal Newport",
        image: "https://m.media-amazon.com/images/I/71din4TLubL._UF1000,1000_QL80_.jpg",
      },
      {
        id: "5",
        title: "The 48 Laws of Power",
        author: "Robert Greene",
        image: "https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg",
      },
      {
        id: "6",
        title: "Ikigai",
        author: "Hector Garcia",
        image: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  },
  {
    id: "movies",
    title: "Movies",
    heroTitle: {
      line1: "Watch",
      highlight1: "Dream",
      midText: " and ",
      highlight2: "Feel",
    },
    description: "Movies and shows that have inspired and entertained me.",
    heroDescription: "Cinematic masterpieces that blur the line between reality and imagination. Exploring the depths of storytelling through the lens of Hans Zimmer and Christopher Nolan.",
    icon: "lucide:clapperboard",
    colorClass: "text-red-500",
    quote: "You're waiting for a train. A train that will take you far away. You know where you hope this train will take you, but you can't be sure. — Inception",
    items: [
      {
        id: "1",
        title: "Inception",
        director: "Christopher Nolan",
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      },
      {
        id: "2",
        title: "Interstellar",
        director: "Christopher Nolan",
        image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      },
      {
        id: "3",
        title: "The Prestige",
        director: "Christopher Nolan",
        image: "https://m.media-amazon.com/images/S/pv-target-images/c3a9c903dfbd41432c8974935db93c1d516a31b1cdf794107e240b3216dcf6d7.jpg",
      },
      {
        id: "4",
        title: "The Dark Knight",
        director: "Christopher Nolan",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      },
      {
        id: "5",
        title: "Oppenheimer",
        director: "Christopher Nolan",
        image: "https://m.media-amazon.com/images/I/71LzjIIzYwL.jpg",
      },
      {
        id: "6",
        title: "Tenet",
        director: "Christopher Nolan",
        image: "https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_.jpg",
      },
    ],
  },
  {
    id: "anime",
    title: "Anime",
    heroTitle: {
      line1: "Explore",
      highlight1: "Worlds",
      midText: " and ",
      highlight2: "Tales",
    },
    description: "The masterpieces that take me to another world.",
    heroDescription: "From the philosophical depths of Death Note to the epic journey of One Piece. Anime isn't just animation; it's a window into different philosophies.",
    icon: "lucide:swords",
    colorClass: "text-purple-500",
    quote: "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be. — Uzumaki Naruto",
    items: [
      {
        id: "1",
        title: "One Piece",
        author: "Eiichiro Oda",
        image: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg",
      },
      {
        id: "2",
        title: "Vinland Saga",
        author: "Makoto Yukimura",
        image: "https://m.media-amazon.com/images/I/81rPC0owmrL.jpg",
      },
      {
        id: "3",
        title: "Dr. Stone",
        author: "Riichiro Inagaki",
        image: "https://m.media-amazon.com/images/M/MV5BYzZkYjM1MWMtNTY3Mi00MTMzLTlhNmQtN2ExZjFkYzdjZmFjXkEyXkFqcGc@._V1_.jpg",
      },
      {
        id: "4",
        title: "Code Geass",
        author: "Ichirō Ōkouchi",
        image: "https://m.media-amazon.com/images/M/MV5BYzZkYjM1MWMtNTY3Mi00MTMzLTlhNmQtN2ExZjFkYzdjZmFjXkEyXkFqcGc@._V1_.jpg",
      },
      {
        id: "5",
        title: "Death Note",
        author: "Tsugumi Ohba",
        image: "https://m.media-amazon.com/images/I/61oju3be98L._AC_UF894,1000_QL80_.jpg",
      },
      {
        id: "6",
        title: "Fullmetal Alchemist: Brotherhood",
        author: "Hiromu Arakawa",
        image: "https://m.media-amazon.com/images/I/61eyyyGXMKL.jpg",
      },
    ],
  },
  {
    id: "music",
    title: "Music",
    heroTitle: {
      line1: "Listen",
      highlight1: "Rhythm",
      midText: " and ",
      highlight2: "Soul",
    },
    description: "The soundtrack to my coding sessions.",
    heroDescription: "Whether it's the synth-pop vibes of The Weeknd or the atmospheric soundscapes of Hans Zimmer, music is what keeps the flow alive.",
    icon: "lucide:music",
    colorClass: "text-pink-500",
    quote: "Music is the shorthand of emotion. — Leo Tolstoy",
    items: [
      {
        id: "1",
        title: "That's So True",
        artist: "Gracie Abrams",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6d/Gracie_Abrams_That%27s_So_True.png",
      },
      {
        id: "2",
        title: "Lose My Mind",
        artist: "Don Toliver",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Don_Toliver_-_Lose_My_Mind.png",
      },
      {
        id: "3",
        title: "Starboy",
        artist: "The Weeknd",
        image: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
      },
      {
        id: "4",
        title: "Where Have You Been",
        artist: "Rihanna",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Where_Have_You_Been.png/250px-Where_Have_You_Been.png",
      },
      {
        id: "5",
        title: "Cornfield Chase",
        artist: "Hans Zimmer",
        image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      },
      {
        id: "6",
        title: "Young and Beautiful",
        artist: "Lana Del Rey",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Young_and_Beautiful_cover_art.jpg/250px-Young_and_Beautiful_cover_art.jpg",
      },
    ],
  },
];
