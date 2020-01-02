import React from "react";
import { useParams } from "react-router-dom";
import GenereList from "./genereList";
import { Helmet } from "react-helmet";

export default function Genere() {
  const { id } = useParams();

  return (
    <div>
      <Helmet>
        <title>Type: {id} - MoviesDownload</title>
      </Helmet>
      <GenereList type={id} />
    </div>
  );
}
