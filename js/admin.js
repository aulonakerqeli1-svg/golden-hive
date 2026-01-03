// Shembull përdoruesish
let users = [
  {name:"John Doe", email:"john@example.com", phone:"+383 44 123 456"},
  {name:"Jane Smith", email:"jane@example.com", phone:"+383 44 654 321"},
];

// Shembull abonimesh
let subscriptions = [
  {user:"John Doe", plan:"Honey Lover", status:"active"},
  {user:"Jane Smith", plan:"Family Sweet", status:"inactive"},
];

// Shembull mesazhesh
let messages = [
  {from:"Jane Smith", content:"Kur do të vijë abonimi?", status:"unread"},
  {from:"John Doe", content:"Faleminderit për shërbimin!", status:"read"},
];

function renderUsers(){
  const table = document.getElementById('usersTable');
  table.innerHTML = '';
  users.forEach((u, idx)=>{
    table.innerHTML += `<tr>
      <td>${u.name}</td>
      <td>${u.email}</td>
      <td>${u.phone}</td>
      <td>
        <button class="btn-edit" onclick="editUser(${idx})">Edit</button>
        <button class="btn-delete" onclick="deleteUser(${idx})">Delete</button>
      </td>
    </tr>`;
  });
}

function renderSubscriptions(){
  const el = document.getElementById('subscriptionsList');
  el.innerHTML = subscriptions.map(s=>`<p>${s.user} - ${s.plan} (<strong>${s.status}</strong>)</p>`).join('');
}

function renderMessages(){
  const el = document.getElementById('messagesList');
  el.innerHTML = messages.map(m=>`<p><strong>${m.from}:</strong> ${m.content} [${m.status}]</p>`).join('');
}

function showSection(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  document.querySelector(`.nav-links a[onclick="showSection('${id}')"]`).classList.add('active');
}

function editUser(idx){
  alert(`Edit funksioni për ${users[idx].name} (mund të shtohet më vonë)`);
}

function deleteUser(idx){
  if(confirm(`Doni të fshini përdoruesin ${users[idx].name}?`)){
    users.splice(idx,1);
    renderUsers();
  }
}

// FUNKSIONI LOGOUT I SAKTË
function logout(){
  // Opsionale: mund të fshish sesionin ose tokenin këtu
  alert("You have logged out successfully!");
  window.location.href = "index.html"; // ose "login.html"
}

// Inicializo
renderUsers();
renderSubscriptions();
renderMessages();
