import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Add from "./Add";
import "./MovieList";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([
    {
      title: "The bad guys 2022",
      rating: "6.9",
      etoile: 3,
      description:
        "After a lifetime of legendary heists, notorious criminals Mr. Wolf, Mr. Snake, Mr. Piranha, Mr. Shark and Ms. Tarantula are finally caught. To avoid a prison sentence, the animal outlaws must pull off their most challenging con yet -- becoming model citizens.",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7268c79-9436-4230-b75e-2814495b25f4/dewhoi7-e6ac4474-f551-43ea-94c7-70f3a8aa50bf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3MjY4Yzc5LTk0MzYtNDIzMC1iNzVlLTI4MTQ0OTViMjVmNFwvZGV3aG9pNy1lNmFjNDQ3NC1mNTUxLTQzZWEtOTRjNy03MGYzYThhYTUwYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.m-mjbzn_WGZpijffy0F3dzZXDmEuUjA5EDRkIidx7Is",
    },
    {
      title: "Your Name 2016",
      rating: "8.4",
      etoile: 5,
      description:
        "From director Makoto Shinkai, the innovative mind behind Voices of a Distant Star and 5 Centimeters Per Second, comes a beautiful masterpiece about time.",
      img: "https://img.yts.mx/assets/images/movies/your_name_2016/medium-cover.jpg",
    },

    {
      title: "A Silent Voice: The Movie 2016",
      rating: "8.1",
      etoile: 5,
      description:
        "Shouya Ishida starts bullying the new girl in class, Shouko Nishimiya, because she is deaf. But as the teasing continues, the rest of the class starts to turn on Shouya for his lack of compassion.",
      img: "https://img.yts.mx/assets/images/movies/a_silent_voice_2016/medium-cover.jpg",
    },

    {
      title: "Zootopia 2016",
      rating: "8",
      etoile: 4,
      description:
        "From the biggest elephant to the tiniest shrew, the city of Zootopia is a beautiful metropolis where all animals live peacefully with one another.",
      img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0ecb745d03d6656e19c12acc7fe9f7a7ba6336a0f2d2c202aff94a8335f00aae._RI_V_TTW_.jpg",
    },

    {
      title: "The Book of Life 2014",
      rating: "7.2",
      etoile: 3,
      description:
        "While visiting a museum, a group of five troubled youth, on detention, are won over by their tour guide, Mary Beth. Part of what wins them over is the story she tells from the Book of Life, which contains all the stories of the world, both true and made-up.",
      img: "https://img.yts.mx/assets/images/movies/The_Book_of_Life_2014/medium-cover.jpg",
    },

    {
      title: "The Secret World of Arrietty 2010",
      rating: "7.6",
      etoile: 3,
      description:
        "In Tokyo, twelve-year-old Shô (Tom Holland), a.k.a. Shou (Ryûnosuke Kamiki), a.k.a. Shawn (David Henrie) has a heart condition and is neglected by his parents.",
      img: "https://img.yts.mx/assets/images/movies/Arrietty_2010/medium-cover.jpg",
    },

    {
      title: "Tangled 2010",
      rating: "7.2",
      etoile: 3,
      description:
        "After receiving the healing powers from a magical flower, the baby Princess Rapunzel is kidnapped from the palace in the middle of the night by Mother Gothel.",
      img: "https://img.yts.mx/assets/images/movies/The_Book_of_Life_2014/medium-cover.jpg",
    },

    {
      title: "Coco 2017",
      rating: "8.4",
      etoile: 5,
      description:
        "Rebellious Miguel, a twelve-year-old Mexican boy and hopeful musician, can't understand the family's continuing ban on all music, especially when his icon and the greatest guitar player ever.",
      img: "https://img.yts.mx/assets/images/movies/coco_2017/medium-cover.jpg",
    },

    {
      title: "Frozen",
      rating: "7.4",
      etoile: 4,
      description:
        "In the Kingdom of Arendelle, Princess Elsa has the power to create and freeze ice and snow, and her younger sister Anna loves to play with her.",
      img: "https://img.yts.mx/assets/images/movies/Frozen_2013/medium-cover.jpg",
    },

    {
      title: "I Want to Eat Your Pancreas 2017",
      rating: "8",
      etoile: 4,
      description:
        "One day, Me - a highschooler - found a paperback in the hospital. The Disease Coexistence Journal was its title. It was a diary that M es classmate, Sakura Yamauchi, had written in secret.",
      img: "https://img.yts.mx/assets/images/movies/i_want_to_eat_your_pancreas_2018/medium-cover.jpg",
    },

    {
      title: "Ratatouille 2007",
      rating: "8.1",
      etoile: 4,
      description:
        "Remy, a provincial rat with a wonderful sense of smell, hates garbage and risks death to enter a human kitchen where he discovers real food and the cooking of five-star chef, Anton Gusteau, author of Anyone Can Cook.",
      img: "https://img.yts.mx/assets/images/movies/Ratatouille_2007/medium-cover.jpg",
    },

    {
      title: "Howl's Moving Castle 2004",
      rating: "8.2",
      etoile: 4,
      description:
        "Young Sophie Hatter is cursed by the Witch of the Waste, and turns into an old hag. Ashamed of how she looks, she flees into the hills where a moving castle roams the hills.",
      img: "https://img.yts.mx/assets/images/movies/howls_moving_castle_2004/medium-cover.jpg",
    },

    {
      title: "Anastasia",
      rating: "7.1",
      etoile: 3,
      description:
        "The year is 1916. In St. Petersburg, Russia, Czar Nicholas II (Rick Jones) is throwing a grand ball to celebrate the 300th Anniversary of Romanov rule, while his mother, Dowager Empress Marie Feodorovna (Dame Angela Lansbury).",
      img: "https://img.yts.mx/assets/images/movies/anastasia_1997/medium-cover.jpg",
    },

    {
      title: "Whisper of the Heart 1995",
      rating: "7.9",
      etoile: 4,
      description:
        "14-year-old teenage bookworm Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'.",
      img: "https://img.yts.mx/assets/images/movies/whisper_of_the_heart_1995/medium-cover.jpg",
    },

    {
      title: "The Godfather 1972",
      rating: "9.2",
      etoile: 5,
      description:
        "The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding with his wife Carmela.",
      img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },

    {
      title: "The Dark Knight 2008",
      rating: "9",
      etoile: 5,
      description:
        "14-year-old teenage bookworm Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'.Gotham's new District Attorney has been elected. His name is Harvey Dent, and he has a radical new agenda that threatens to take down Gotham's organized crime underworld once and for all with an iron fist.",
      img: "https://cdn.europosters.eu/image/750/posters/batman-dark-knight-joker-i116354.jpg",
    },

    {
      title: "Five Feet Apart 2019",
      rating: "7.2",
      etoile: 3,
      description:
        "Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control all of which get put to the test when she meets Will.",
      img: "https://img.yts.mx/assets/images/movies/five_feet_apart_2019/medium-cover.jpg",
    },

    {
      title: "Love, Rosie 2014",
      rating: "7.1",
      etoile: 4,
      description:
        "From the age of 5 Rosie Dunne and Alex Stewart have been best friends, as they take on life they just end up getting separated time and time again.",
      img: "https://img.yts.mx/assets/images/movies/love_rosie_2014/medium-cover.jpg",
    },

    {
      title: "The Fault in Our Stars 2014",
      rating: "7.7",
      etoile: 5,
      description:
        "The seventeen year-old Hazel Grace has lung cancer and needs to carry an oxygen tank wherever she goes. Her mother Frannie encourages her to go to a cancer support group against her will.",
      img: "https://img.yts.mx/assets/images/movies/The_Fault_in_Our_Stars_2014/medium-cover.jpg",
    },

    {
      title: "The Devil Wears Prada 2006",
      rating: "6.9",
      etoile: 2,
      description:
        "Andy, a young graduate aspiring to be a journalist, comes to New York and becomes an assistant to one of the city's biggest magazine editors, the ruthless and cynical Miranda Priestly.",
      img: "https://lumiere-a.akamaihd.net/v1/images/pp_thedevilwearsprada_21373_dabe3cc6.jpeg?region=0%2C0%2C540%2C810",
    },

    {
      title: "Pokémon: Mewtwo Strikes Back 1998",
      rating: "6.2",
      etoile: 1,
      description:
        "When a group of scientists are offered funding into genetic research if they agree to try and clone the greatest ever Pokémon.",
      img: "https://img.yts.mx/assets/images/movies/pokemon_the_first_movie_mewtwo_strikes_back_1998/medium-cover.jpg",
    },

    {
      title: "Gnomeo & Juliet 2011",
      rating: "5.7",
      etoile: 1,
      description:
        "Garden gnomes Gnomeo (James McAvoy) and Juliet (Emily Blunt) have as many obstacles to overcome as their quasi namesakes when they are caught up in a feud between neighbors",
      img: "https://img.yts.mx/assets/images/movies/Gnomeo_Juliet_2011/medium-cover.jpg",
    },

    {
      title: "Diary of a Wimpy Kid",
      rating: "6.2",
      etoile: 1,
      description:
        "To Greg Heffley, middle school is the dumbest idea ever invented. It's a place rigged with hundreds of social landmines.",
      img: "https://img.yts.mx/assets/images/movies/Diary_of_a_Wimpy_Kid_Duology_2010/medium-cover.jpg",
    },
    {
      title: "Detective Conan: Crimson Love Letter 2017",
      rating: "6",
      etoile: 2,
      description:
        "A bombing case at Nichiuri TV in autumn. The Satsuki Cup, which crowns the winner of Japan's Hyakunin Isshu, is currently being filmed inside the facility.",
      img: "https://img.yts.mx/assets/images/movies/detective_conan_crimson_love_letter_2017/medium-cover.jpg",
    },

    {
      title: "Tom and Jerry: Willy Wonka and the Chocolate Factory",
      rating: "5.7",
      etoile: 1,
      description:
        "An animated re-telling of the film Willy Wonka and the Chocolate Factory, in which Tom and Jerry help Charlie Bucket attain a Golden Ticket and secretly accompany him into Willy Wonka's chocolate factory to prevent one of Wonka's competitors from stealing a special candy known as the Everlasting Gobstopper, but also experience the wonderful world of the chocolate factory with the guide of Tuffy.",
      img: "https://img.yts.mx/assets/images/movies/tom_and_jerry_willy_wonka_and_the_chocolate_factory_2017/medium-cover.jpg",
    },

    {
      title: "Wolf Children 2012",
      rating: "8.1",
      etoile: 5,
      description:
        "After her werewolf lover unexpectedly dies in an accident while hunting for food for their children, a young woman must find ways to raise the werewolf son and daughter that she had with him while keeping their trait hidden from society.",
      img: "https://img.yts.mx/assets/images/movies/wolf_children_2012/medium-cover.jpg",
    },

    {
      title: "John Wick 2014",
      rating: "7.4",
      etoile: 2,
      description:
        "John Wick is an American neo-noir action-thriller media franchise created by screenwriter Derek Kolstad and starring Keanu Reeves as John Wick.",
      img: "https://i.ytimg.com/vi/v_lYz3LKKgM/movieposter_en.jpg",
    },

    {
      title: "avengers infinity war",
      rating: "8.4",
      etoile: 2,
      description:
        "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
      img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_mas_hlf_01_3.jpg",
    },
  ]);

  const getAdd = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  };

  return (
    <>
      <div>
        <Add getAdd={getAdd} />
      </div>

      <div className="container">
        {movieList
          .filter(
            (el) =>
              el.etoile >= props.rate &&
              el.title
                .toLocaleLowerCase()
                .includes(props.searching.toLocaleLowerCase().trim())
          )
          .map((el) => (
            <MovieCard key={Math.random()} {...el} />
          ))}
      </div>
    </>
  );
};

export default MovieList;
