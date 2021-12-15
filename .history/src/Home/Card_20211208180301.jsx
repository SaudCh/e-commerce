import React from "react";

export default function Card(props) {
  const { item } = props;
  return (
    <div className="col-2">
      <div class="card">
        <img
          src={item.img}
          style={{ height: "200px", width: "200px", alignSelf: "center" }}
          class="card-img-top mt-2"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{item.name.substring(0, 20)}...</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Add to Fav
          </a>
        </div>
      </div>
    </div>
  );
}
