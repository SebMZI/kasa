import React from "react";
import { useParams } from "react-router-dom";
import datalist from "../data/db.json";
import SlideShow from "../components/SlideShow";
import Header from "../components/Header";

const Accomodation = () => {
  const params = useParams();
  const id = params.id;
  const selectedItem = datalist.find((item) => item.id === id);

  if (selectedItem) {
    // Vous pouvez maintenant accéder aux autres propriétés de l'élément sélectionné
    const title = selectedItem.title;
    const pictures = selectedItem.pictures;
    const description = selectedItem.description;
    // const host = selectedItem.host;
    //const rating = selectedItem.rating;
    //const location = selectedItem.location;
    const equipments = selectedItem.equipments;
    //const tags = selectedItem.tags;

    return (
      <div>
        <Header />
        <SlideShow images={pictures} />
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {equipments.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>
      </div>
    );

    // Faites ce que vous voulez avec ces données, par exemple :
    // console.log(title);
    // console.log(cover);
    // console.log(pictures);
    // console.log(description);
    // console.log(host);
    // console.log(rating);
    // console.log(location);
    // console.log(equipments);
    // console.log(tags);
  } else {
    console.log("Aucun élément correspondant à l'ID trouvé.");
  }
};

export default Accomodation;
