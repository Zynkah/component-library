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
