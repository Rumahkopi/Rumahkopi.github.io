// Function to handle loading overlay
function showLoadingOverlay() {
    document.getElementById('loader-wrapper').style.display = 'flex';
}

function hideLoadingOverlay() {
    document.getElementById('loader-wrapper').style.display = 'none';
}

// Function to handle form submission and API request
export default function PostSignUp() {
    showLoadingOverlay();

    let target_url = "https://asia-southeast2-msyahid.cloudfunctions.net/LoginAdmin";
    let tokenkey = "token";
    let tokenvalue = "5804dcddb5fd6f93a97c9541e21eb668beafc993e5115f77152e191f08da15e2";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}

function responseData(result) {
    hideLoadingOverlay();

    if (result.status === true) {
        setCookieWithExpireHour("token", result.token, 2);

        Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: result.message,
            showConfirmButton: false,
            timer: 1000,
        }).then(() => {
            window.location.href = "../admin/page/index.html";
        });

    } else {
        Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: result.message,
            showConfirmButton: false,
            timer: 1000,
        });
    }
};
