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

fetch("./data/emails.json")
  .then((response) => response.json())
  .then((data) => {
    renderEmail(data[0]);
    const emailList = data.map((item, index) => {
      const tagList = item.tags.map((tag, index) => {
        const tagClass = tag == "work" ? "accent--sm btn--sm" : "btn--sm";
        return `<span class="${tagClass}">${tag}</span>`;
      });
      const joined = tagList.join("");
      const emailCard = document.createElement("div");
      emailCard.innerHTML = `
        <h3 class="home-card-title">${item.name}</h3>
        <p class="timestamp">${item.age}</p>
        <p class="home-card-description">${item.subject}</p>
        <p class="home-card-content">${item.content}</p>
        <p class="home-card-footer">${joined}</p>
      `;
      emailCard.classList.add("home-card")
      if (index == 0) {
        emailCard.classList.add("home-card--active")
      }

      emailCard.addEventListener("click", () => {
        renderEmail(item);
        const activeCards =
          document.getElementsByClassName("home-card--active");
        for (const activeCard of activeCards) {
          activeCard.classList.remove("home-card--active")
        }
        emailCard.classList.toggle("home-card--active");
      });
      return emailCard;
    });
    for (let i = 0; i < emailList.length; i++) {
      document.getElementById("inbox-section").appendChild(emailList[i]);
    }
  })
  .catch((error) => console.log(error));

function renderEmail(emailData) {
  const emails = document.getElementById("rendered-email");
  emails.innerHTML = ` <div class="column">List of icons</div>
            <div class="email__details__header">
              <img
                class="avatar"
                src="https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg?w=1670"
              />
              <div class="email__sender-info">
                <h3>${emailData.name}</h3>
                <p>${emailData.subject}</p>
                <p>Reply-To:...</p>
              </div>
              <div class="email__date-time">
                <p>${emailData.date}</p>
                <p>${emailData.time}</p>
              </div>
            </div>
            <div class="email__details">
              <p>${emailData.content}</p>
            </div>
            <div class="email__response">
              <textarea
                placeholder="Reply ${emailData.name}..."
                rows="4"
                cols="30"
                class="email__textarea"
              ></textarea>
              <div class="email__response-inputs">
                <div class="switch">
                  <input type="checkbox" id="mute" />
                  <span class="slider round"></span>
                </div>
                <label class="email__response-label" for="mute"
                  >Mute this thread</label
                >
                <button class="btn--sm accent--sm email__response-button">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>`;
}

const array = ['one', 'two']
array.map((item, index) => {
  if (index == 0) {
    console.log(item)
  }
})