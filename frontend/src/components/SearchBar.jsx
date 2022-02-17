import React from "react";

export default function SearchBar({
  setSearch,
  getLines,
  lines,
  search,
  setRedirectToDetails,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(Number(e.target.value))}
      />
      <button
        onClick={() => {
          getLines();
        }}
      >
        Search
      </button>
      <div>
        {lines
          .filter((line) => {
            return line.busLine === search;
          })
          .map((line, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setRedirectToDetails(true);
                }}
              >
                <p>{line.busLine}</p>
                <p>{line.start}</p>
                <p>{line.end}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
