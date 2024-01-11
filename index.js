document.addEventListener("DOMContentLoaded", () => {
  const url = " http://localhost:3000/films";

  function firstMovie() {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw error("Faied to fetch");
        return res.json();
      })
      .then((movies) => {
        const firstMovie = movies[0];
        // console.log(firstMovie);
        const movieTitle = document.querySelector(".movie-title");
        const movieDescription = document.querySelector(".description");
        const movieRuntime = document.querySelector(".runtime");
        const movieShowtime = document.querySelector(".showtime");
        const availableTickets = document.querySelector(".avaliable-tickets");
        const movieImg = document.querySelector(".poster");
        const btn = document.querySelector(".btn");

        movieTitle.innerHTML = firstMovie.title;
        movieDescription.innerHTML = firstMovie.description;
        movieRuntime.innerHTML = `Runtime :${firstMovie.runtime} minutes `;
        movieShowtime.innerHTML = `Showtime:${firstMovie.showtime}`;
        availableTickets.innerHTML = `Tickets available (${
          firstMovie.capacity - firstMovie.tickets_sold
        })`;
        movieImg.innerHTML = firstMovie.poster;

        //Computing tickets remaining
        let tickets = Number(firstMovie.capacity - firstMovie.tickets_sold);
        console.log(tickets);
        btn.addEventListener("click", () => {
          console.log("I have been clicked");
          tickets--;
          if (tickets <= 0) {
            availableTickets.innerHTML = "SOLD OUT";
          } else {
            availableTickets.innerHTML = `Tickets available :${tickets}`;
          }
        });
      });
  }
  firstMovie();

  function movieDetails() {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        // console.log(data);               

        for (i = 0; i < data.length; i++) {
          let item = data[i];
          // console.log(item)
          const movieslist = document.createElement("li");
          const list = document.querySelector(".listing");
          movieslist.innerHTML = item.title;
          list.appendChild(movieslist);

          movieslist.addEventListener("click", () => {
            const movieTitle = document.querySelector(".movie-title");
            const movieDescription = document.querySelector(".description");
            const movieRuntime = document.querySelector(".runtime");
            const movieShowtime = document.querySelector(".showtime");
            const availableTickets =
              document.querySelector(".avaliable-tickets");
            const movieImg = document.querySelector(".poster");
            const btn = document.querySelector(".btn");

            movieTitle.innerHTML = item.title;
            movieDescription.innerHTML = item.description;
            movieRuntime.innerHTML = `Runtime :${item.runtime} minutes `;
            movieShowtime.innerHTML = `Showtime:${item.showtime}`;
            availableTickets.innerHTML = `Tickets available (${
              item.capacity - item.tickets_sold
            })`;
            movieImg.innerHTML = item.poster;

            btn.addEventListener("click", () => {
              console.log("I have been clicked");
              tickets--;
              if (tickets <= 0) {
                availableTickets.innerHTML = "SOLD OUT";
              } else {
                availableTickets.innerHTML = `Tickets available :${tickets}`;
              }
            });
          });
        }
      });
  }
  movieDetails();
});
