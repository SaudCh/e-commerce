import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://i.pinimg.com/originals/cd/90/88/cd908869314450ba95aa517c6dd42e86.jpg"
              class="d-block w-100"
              style={{ height: "77vh" }}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://miro.medium.com/max/1200/1*SwFB1o_k1LGprN-XRUZQ8w.jpeg"
              class="d-block w-100"
              style={{ height: "77vh" }}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg"
              class="d-block w-100"
              style={{ height: "77vh" }}
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
