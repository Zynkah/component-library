const showCardCode = () => {
  console.log(
    `
    HTML:
        <div class="card">
            <h3 class="card-title">
                Card Title
            </h3>
            <p class="card-description">
                description
            </p>
            <p class="card-content">
                This is a card component.
                It can be used to display content in a structured way.
            </p>
            <p class="card-footer">
                footer
            </p>
        </div> 
        
    CSS:
      .card {
    background-color: white;
    color: #262226;
    border-radius: 5px;
    margin: 1rem;
    padding: 1rem;
    height: 300px;
    width: 300px;
    position: relative;
}

.card-title {
    font-size: 1.5rem;
    margin-bottom: 0.1rem;
}

.card-description {
    font-size: 0.8rem;
    margin-bottom: 1rem;
}

.card-content {
    display: flex;
}

.card-footer {
    display: flex;
    position: absolute;
    bottom: 1rem;
    right: 2.5rem;
    font-size: 0.8rem;
}
    `
  );
};
