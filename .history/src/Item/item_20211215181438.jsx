import React from "react";
import { useParams } from "react-router-dom";
import { getAllItems } from "../data/AllItems";

export default function Item() {
  const allItems = getAllItems();
  const { pid } = useParams();
  return (
    <div class="card border-white mb-3" style={{ minHeight: "50vh" }}>
      <div class="row g-0 align-items-center">
        <div class="col-md-4 text-center">
          <img
            src={allItems[pid].img}
            class="img-fluid rounded-start"
            style={{ width: "100" }}
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{allItems[pid].name}</h5>
            {allItems[pid].oldprice ? (
              <p class="card-text">{allItems[pid].oldprice}Rs</p>
            ) : null}
            <p class="card-text">{allItems[pid].price}Rs</p>
            <p class="card-text">
              <small class="text-muted">{allItems[pid].time}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
