const showMail = () => {
  const componentDisplay = document.querySelector(".component-display");
    componentDisplay.innerHTML = ` <table class="table-main">
          <tr class="mail-boxes">
            <th><input /></th>
            <th>
              <div class="table-header">
                Inbox
                <div class="mail-toggle">
                  <button class="active">All mail</button>
                  <button>Unread</button>
                </div>
              </div>
            </th>
            <th>List of icons</th>
          </tr>

          <tr>
            <td>
              <div class="mail-tabs">
                <div class="active">Inbox</div>
                <div>Drafts</div>
                <div>Sent</div>
                <div>Junk</div>
                <div>Trash</div>
                <div>Archive</div>
              </div>
            </td>

            <td>
              <section class="inbox-section">
                <input placeholder="Search" class="mail-input" />
                <div class="home-card">
                  <h3 class="home-card-title">William Smith</h3>
                  <p class="timestamp">7 months ago</p>
                  <p class="home-card-description">Meeting Tomorrow</p>
                  <p class="home-card-content">
                    Hi, let's have a meeting tomorrow to discuss the project.
                    I've been reviewing the project details and have some...
                  </p>
                  <p class="home-card-footer">
                    <button class="small-basic-button">meeting</button
                    ><button class="small-basic-button">work</button
                    ><button class="small-basic-button">important</button>
                  </p>
                </div>
              </section>
            </td>

            <td></td>
          </tr>

          <tr>
            <td>
              <div class="mail-tabs">
                <div>Social</div>
                <div>Updates</div>
                <div>Forums</div>
                <div>Shopping</div>
                <div>Shopping</div>
                <div>Promotions</div>
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>`;
};

const showDashboard = () => {
  const componentDisplay = document.querySelector(".component-display");
  componentDisplay.innerHTML = "<h1>Dashboard</h1>";
};

const showCard = () => {
  const componentDisplay = document.querySelector(".component-display");
  componentDisplay.innerHTML = "<h1>Card</h1>";
};

const showTasks = () => {
  const componentDisplay = document.querySelector(".component-display");
  componentDisplay.innerHTML = "<h1>Tasks</h1>";
};

const showPlayground = () => {
  const componentDisplay = document.querySelector(".component-display");
  componentDisplay.innerHTML = "<h1>Playground</h1>";
};

const showForm = () => {
  const componentDisplay = document.querySelector(".component-display");
  componentDisplay.innerHTML = "<h1>Form</h1>";
};

const showMusic = () => {
  const componentDisplay = document.querySelector(".component-display");
  componentDisplay.innerHTML = "<h1>Music</h1>";
};

const showAuthentication = () => {
  const componentDisplay = document.querySelector(".component-display");
  componentDisplay.innerHTML = "<h1>Authentication</h1>";
};




// research  this

// function show(shown, hidden) {
//   document.getElementById(shown).style.display='block';
//   document.getElementById(hidden).style.display='none';
//   return false;
// }

















