
// Simulo përdoruesin që logon
let currentUser = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+383 44 123 456",
  avatar: "images/avatar.png"
};

// Funksion për të shfaqur të dhënat në profile
function loadProfile() {
  document.getElementById("profileName").textContent = currentUser.name;
  document.getElementById("profileEmail").textContent = currentUser.email;
  document.getElementById("profilePhone").textContent = currentUser.phone;
  document.getElementById("profileAvatar").src = currentUser.avatar;

  // Vendos vlerat në formë
  document.getElementById("name").value = currentUser.name;
  document.getElementById("email").value = currentUser.email;
  document.getElementById("phone").value = currentUser.phone;
}

loadProfile();

// Preview i avatar-it kur zgjidhet file
document.getElementById("avatarInput").addEventListener("change", function(e){
  const file = e.target.files[0];
  if(file) {
    const reader = new FileReader();
    reader.onload = function(e){
      document.getElementById("profileAvatar").src = e.target.result;
      currentUser.avatar = e.target.result; // ruaj preview tek objekti i përdoruesit
    }
    reader.readAsDataURL(file);
  }
});

// Kur përdoruesi klik "Save Changes"
document.getElementById("profileForm").addEventListener("submit", function(e){
  e.preventDefault();
  currentUser.name = document.getElementById("name").value;
  currentUser.email = document.getElementById("email").value;
  currentUser.phone = document.getElementById("phone").value;

  // Rifresko profile info
  loadProfile();
  alert("Profile updated successfully!");
});

// Logout
function logout() {
  alert("You have logged out successfully!");
}
