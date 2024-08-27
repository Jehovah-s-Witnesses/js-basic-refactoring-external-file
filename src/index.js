const button = document.querySelector('.create-btn');

    button.addEventListener(click , () => {
      const divElement = document.createElement(div);

      divElement.classList.add('card','text-center');
      divElement.innerHTML = `
        <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-body-secondary">
          2 days ago
        </div>
      `;
      button.before(divElement);
      button.before(divElement);
    });
