import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  NonFiction: [
    { name: "A Brief History of Time", rating: "4.6/5" },
    { name: "In Cold Blood", rating: "4.5/5" },
    { name: "Never Cry Wolf", rating: "4.7/5" },
    { name: "Out of Africa", rating: "4.5/5" },
    { name: "The Beauty Myth", rating: "4.5/5" },
    { name: "Bad Blood", rating: "4.6/5" },
    { name: "The Diary of a Young Girl", rating: "4.6/5" }
  ],

  Fiction: [
    {
      name: "The Atlas Six",
      rating: "4.3/5"
    },
    {
      name: "Red, White & Royal Blue",
      rating: "4.6/5"
    },
    {
      name: "Verity",
      rating: "4.3/5"
    },
    {
      name: "Hopeless",
      rating: "4.6/5"
    },
    {
      name: "You've Reached Sam",
      rating: "4.4/5"
    },
    {
      name: "People Like Her",
      rating: "4/5"
    },
    {
      name: "The Promise",
      rating: "4.5/5"
    }
  ],
  Historical: [
    {
      name: "The Palace of Illusions",
      rating: "4.6/5"
    },
    {
      name: "The Glass Palace",
      rating: "4.5/5"
    },
    {
      name: "Midnight’s Children",
      rating: "4.3/5"
    },
    {
      name: "A Suitable Boy",
      rating: "4.4/5"
    },
    {
      name: "The Namesake",
      rating: "4.5/5"
    },
    {
      name: "Ladies' Tailor",
      rating: "4.6/5"
    },
    {
      name: "The Last Queen",
      rating: "4.6/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Historical");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Goodbooks </h1>
      <p> Checkout my favorite books. Select a genre to get started </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#c7d2fe",
              borderRadius: "5px",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
