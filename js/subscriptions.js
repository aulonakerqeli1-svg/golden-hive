const defaultPlans = [
  { id: 'honey-lover', title: 'Honey Lover', monthlyQty: '1 kg / muaj', honeyType: 'Livadh', price: 9.99, description: 'Një kavanoz mjalti premium çdo muaj.' },
  { id: 'family-sweet', title: 'Family Sweet', monthlyQty: '2 kg / muaj', honeyType: 'Akacie / Livadh', price: 17.99, description: 'Paketa familjare me 2kg çdo muaj.' },
  { id: 'bee-premium', title: 'Bee Premium', monthlyQty: '4 kg / muaj', honeyType: 'Kombinuar', price: 34.99, description: 'Për klientë premium — 4kg në muaj.' }
];

const STORAGE_KEY = 'goldenHive_subscriptions';
let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  plans: defaultPlans,
  userSubscription: null,
  payments: []
};

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

function renderPlans() {
  const container = document.getElementById('plansContainer');
  container.innerHTML = '';
  state.plans.forEach(plan => {
    container.innerHTML += `
      <div class="plan-card">
        <h3>${plan.title}</h3>
        <p class="price">$${plan.price.toFixed(2)} / muaj</p>
        <p class="meta">${plan.monthlyQty} • ${plan.honeyType}</p>
        <p class="desc">${plan.description}</p>
        <div class="plan-actions">
          <button class="btn btn-primary" onclick="subscribe('${plan.id}')">Zgjidh</button>
        </div>
      </div>
    `;
  });
}

function renderCurrent() {
  const el = document.getElementById('currentSubscription');
  if (!state.userSubscription) {
    el.innerHTML = `<p>Nuk ke abonim aktiv.</p>`;
    return;
  }
  const plan = state.plans.find(p => p.id === state.userSubscription.planId);
  el.innerHTML = `
    <div class="current-card">
      <h3>${plan.title} <span class="chip active">Active</span></h3>
      <p>${plan.monthlyQty} • ${plan.honeyType}</p>
      <p>Çmimi: $${plan.price}/muaj</p>
      <p>Nisur më: ${formatDate(state.userSubscription.startDate)}</p>
      <div class="current-actions">
        <button class="btn btn-primary" onclick="renew()">Rinovo</button>
        <button class="btn btn-secondary" onclick="changePlan()">Ndrysho</button>
        <button class="btn btn-danger" onclick="cancel()">Anulo</button>
      </div>
    </div>
  `;
}

function renderHistory() {
  const el = document.getElementById('historyList');
  if (state.payments.length === 0) {
    el.innerHTML = `<p>Nuk ka pagesa.</p>`;
    return;
  }
  el.innerHTML = state.payments.map(p => `
    <div class="payment">
      <div class="payment-left">
        <div class="pay-amount">$${p.amount}</div>
        <div class="pay-plan">${p.plan}</div>
      </div>
      <div class="payment-right">
        <div>${formatDate(p.date)}</div>
      </div>
    </div>
  `).join('');
}

function subscribe(id) {
  const plan = state.plans.find(p => p.id === id);
  state.userSubscription = { planId: id, startDate: new Date().toISOString(), status: 'active' };
  state.payments.push({ plan: plan.title, amount: plan.price, date: new Date().toISOString() });
  saveState();
  renderAll();
  alert(`U abonove me sukses në planin ${plan.title}!`);
}

function renew() {
  if (!state.userSubscription) return;
  const plan = state.plans.find(p => p.id === state.userSubscription.planId);
  state.payments.push({ plan: plan.title, amount: plan.price, date: new Date().toISOString() });
  saveState();
  renderAll();
  alert('Abonimi u rinovua!');
}

function changePlan() {
  alert('Funksioni për ndryshim plani mund të zgjerohet më vonë.');
}

function cancel() {
  state.userSubscription = null;
  saveState();
  renderAll();
  alert('Abonimi u anulua.');
}

function renderAll() {
  renderPlans();
  renderCurrent();
  renderHistory();
}

renderAll();

function logout() {
  alert('Logout demo — në backend do çaktivizohej sesioni.');
}
