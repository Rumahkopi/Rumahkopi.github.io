// script.js
import { get } from "https://jscroot.github.io/api/croot.js";

const URLDataProduk = "https://asia-southeast2-msyahid.cloudfunctions.net/GetDataProduk";
const tableContainer = document.getElementById("produk");

// Function to create a table row
function createTableRow(value) {  
    const row = document.createElement("tr");
    row.className = "content is-size-6";

    const columns = ["nama", "harga", "deskripsi", "stok", "image"];
    columns.forEach(column => {
        const cell = document.createElement("td");
        cell.dataset.label = column === "image" ? "image" : column;
        
        if (column === "image") {
            const image = document.createElement("img");
            image.src = value[column];
            image.alt = "product";
            image.className = "product-img";
            image.width = 50;
            image.height = 50;

            // Set data-id attribute for image
            image.dataset.id = value.nama;

            // Add click event listener to show modal
            image.addEventListener("click", () => showModal(value[column], value.nama));

            cell.appendChild(image);
        } else {
            cell.textContent = value[column];
        }

        row.appendChild(cell);
    });

    return row;
}

// Function to show modal
function showModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = imageSrc;
    modal.style.display = "block";

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
        modal.style.display = 'none';
    });
}

// Function to handle API response
function handleApiResponse(results) {
    console.log(results);
    results.forEach(value => {
        const row = createTableRow(value);
        tableContainer.appendChild(row);
    });

    // Hide overlay when the page is fully loaded
    setTimeout(() => {
        document.getElementById('loader-wrapper').style.display = 'none';
    }, 2000);
}

// Get data from API and handle the response
get(URLDataProduk, handleApiResponse);
