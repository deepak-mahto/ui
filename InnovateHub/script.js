document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const selectAllBrandsCheckbox = document.getElementById("selectAllBrands");
  const tableRows = document.querySelectorAll(".table tbody tr");
  const brandCountSpan = document.getElementById("brandCount");

  // Function to update the category count
  function updateCategoriesCount() {
    const count = 0;
    tableRows.forEach(function (row) {
      const checkbox = row.querySelector('input[type="checkbox"]');
      if (checkbox.checked) {
        count++;
      }
    });
    brandCountSpan.textContent = count;
  }

  // Search the table data based on categories
  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();

    tableRows.forEach(function (row) {
      const category = row.cells[3].textContent.trim().toLowerCase();
      if (category.includes(searchText)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
    updateCategoriesCount();
  });

  // Select all brands at a time
  selectAllBrandsCheckbox.addEventListener("change", function () {
    const isChecked = selectAllBrandsCheckbox.checked;
    tableRows.forEach(function (row) {
      const checkbox = row.querySelector('input[type="checkbox"]');
      checkbox.checked = isChecked;
    });
    updateCategoriesCount();
  });

  // select individual brand
  tableRows.forEach(function (row) {
    const checkbox = row.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", function () {
      updateCategoriesCount();
    });
  });
});
