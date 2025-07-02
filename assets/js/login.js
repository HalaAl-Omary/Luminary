document.addEventListener("DOMContentLoaded", function () {
  const createBtn = document.querySelector(".create-account-btn");
  if (createBtn) {
    createBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const name = document
        .querySelector("input[placeholder='Name']")
        .value.trim();
      const email = document
        .querySelector("input[placeholder='Email or Phone Number']")
        .value.trim();
      const password = document.querySelector(
        "input[placeholder='Password']"
      ).value;

      if (name && email && password) {
        const user = { name, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        Swal.fire("Success", "Account created! Please log in.", "success").then(
          () => {
            window.location.href = "LogIn.html";
          }
        );
      } else {
        Swal.fire("Error", "Please fill all the fields.", "error");
      }
    });
  }

  const loginBtn = document.querySelector(".login-account-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const emailInput = document
        .querySelector("input[placeholder='Email or Phone Number']")
        .value.trim();
      const passwordInput = document.querySelector(
        "input[placeholder='Password']"
      ).value;

      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (
        savedUser &&
        savedUser.email === emailInput &&
        savedUser.password === passwordInput
      ) {
        localStorage.setItem("isLoggedIn", "true");
        Swal.fire(
          "Hello " + savedUser.name + " 🌿",
          "Ready to shine with Luminary?",
          "success"
        ).then(() => {
          window.location.href = "index.html";
        });
      } else {
        Swal.fire("Error", "Incorrect email or password.", "error");
      }
    });
  }

  const logoutBtn = document.getElementById("logout-btn");
  const logoutNavItem = document.getElementById("logout-nav-item");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();

      Swal.fire({
        title: "Are you sure?",
        text: "Do you really want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, log me out",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("user");

          Swal.fire("Logged Out", "You have been logged out.", "success").then(
            () => {
              window.location.reload();
            }
          );
        }
      });
    });
  }

  if (logoutNavItem && localStorage.getItem("isLoggedIn") !== "true") {
    logoutNavItem.style.display = "none";
  }
});
