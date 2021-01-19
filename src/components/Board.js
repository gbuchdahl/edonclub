import React from "react";

const Board = () => {
  const makeSection = (title, people) => {
    return (
      <div className="boardSection">
        <div className="mb-2">
          <h3 className="boardSection__title">{title}</h3>
        </div>
        <div className="mb-5">
          {people.map((p) => (
            <div className="section__body">{p}</div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      id="board"
      className="row justify-content-md-center justify-content-start section"
    >
      <div className="col-12 col-md-8">
        <h1 className="section__title mb-5">Who We Are</h1>
        <div className="d-flex flex-wrap">
          {makeSection("President", ["Nathan Somerville"])}
          {makeSection("Recruitment", [
            "Amy Ren",
            "Stephan Billingslea",
            "Cameron Janssens",
          ])}
          {makeSection("Development", [
            "Lucy Minden",
            "Alex Surratt",
            "Syimyk Kyshtoobaev",
          ])}
          {makeSection("Social", [
            "Gabriel Buchdahl",
            "Daniel Freedline",
            "Enrique Chuidian",
          ])}
          {makeSection("Finances", ["Neil Udassi", "Preston Smith"])}
          {makeSection("Chaplains", ["Jarett Malouf", "Sam Ryan"])}
          {makeSection("Coordinators", ["Will Lawrence", "Jackson Kuller"])}
          {makeSection("Service", ["Matthew Murillo"])}
          {makeSection("Housing", ["Diego Miro"])}
          {makeSection("Oracle", ["Cam Rao"])}
          {makeSection("Comms", ["Nico Trigo"])}
        </div>
      </div>
    </div>
  );
};

export default Board;
