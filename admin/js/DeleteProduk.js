const deleteProduk = async (IDHAPUS) => {
  const _id = IDHAPUS;

  console.log("ProdukID:", _id);
  console.log("_id:", IDHAPUS);


  const isConfirmed = await Swal.fire({
    title: "Benarkah anda ingin menghapus data ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Benar",
    cancelButtonText: "Tidak",
  });

  if (isConfirmed.isConfirmed) {
    console.log("Confirmed:", isConfirmed.isConfirmed);

    const target_url =
      "https://asia-southeast2-msyahid.cloudfunctions.net/DeleteDataProduk?nama=" + nama;

    try {
      const response = await fetch(target_url, {
        method: "DELETE",
        redirect: "follow",
      });

      if (response.ok) {
        console.log("Response:", response);
        await Swal.fire({
          icon: "success",
          title: "Data berhasil dihapus",
          showConfirmButton: false,
        });
        location.reload();
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

window.deleteProduk = deleteProduk;