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
          {makeSection("Presidents", ["Alice Litvak", "Cameron Janssens"])}
          {makeSection("Recruitment", [
            "Victoria Vera",
            "Sarah Sadati",
          ])}
          {makeSection("Social", [
            "Grace Campos",
            "Iggy Diaz",
          ])}
          {makeSection("Development", ["Serena Lin"])}
          {makeSection("Finances", ["Lucy Minden"])}
          {makeSection("Chaplains", ["Renée Sanacora", "Robby Hill"])}
          {makeSection("Membership", ["Alex Surratt"])}
          {makeSection("Service", ["Laz Vazquez"])}
          {makeSection("Creative", ["Baltazar Lora"])}
          {makeSection("Historian", ["Andrew Kornfeld"])}
          {makeSection("Alumni Affairs", ["Gabriel Buchdahl"])}
        </div>
      </div>
    </div>
  );
}

export default Board;
