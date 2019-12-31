import React from "react";
import { useParams } from "react-router-dom";
import GenereList from "./genereList";

export default function Genere() {
  const { id } = useParams();

  return (
    <div>
      <GenereList type={id} />
    </div>
  );
}
