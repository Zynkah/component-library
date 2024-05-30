const tabs = document.querySelectorAll(".component__tabList a");
tabs.forEach((tab, i) => {
  tab.addEventListener("click", (event) => {
    tabs.forEach((tabClasses, j) => {
      tabClasses.classList.remove("active");
    });
    tab.classList.add("active");
    showPage(event.target.hash.slice(1));
  });
});

function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  // Show the selected page
  const selectedPage = document.getElementById(pageId);
  selectedPage.classList.add("active");
}


function showFormTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add("active");
}


fetch('./data/emails.json')
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    const emailList = data.map((item, index) => {
      const emailCard = document.createElement("div");
      emailCard.innerHTML = `
        <h3 class="home-card-title">${item.name}</h3>
        <p class="timestamp">${item.age}</p>
        <p class="home-card-description">${item.subject}</p>
        <p class="home-card-content">
          ${item.content}
        </p>
      `;
      return emailCard; 
    });
    document.getElementById("inbox-section").appendChild(emailList);
  })
  .catch(error => console.log(error));


        //   <p class="home-card-footer">
        //   <button class="btn--sm">meeting</button>
        //   <button class="btn--sm">work</button>
        //   <button class="btn--sm">important</button>
        // </p>