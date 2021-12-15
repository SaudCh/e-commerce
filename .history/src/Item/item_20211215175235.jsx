import React from "react";

export default function item() {
  return (
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://propakistani.pk/price/wp-content/uploads/2021/08/iphone-13-pro-price-1.png"
            class="img-fluid rounded-start"
            width={300}
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
