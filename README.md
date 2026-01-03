# 🐝 Golden Hive

**Golden Hive** is a frontend web application that simulates a full user and admin dashboard for managing honey subscriptions and user interactions.  
This project was built with **HTML, CSS, and JavaScript**, and stores data in **localStorage** for demo purposes.


## 🗂️ Repository Name
**Repository:** `golden-hive`

**Live Preview:** *(if using GitHub Pages)*  
```text
https://aulonakerqeli1-svg.github.io/golden-hive/

💡 Description
Golden Hive allows users to:
Log in as User or Admin
Manage user profile and avatar
Subscribe, renew, and cancel honey plans
View history of payments
Receive and reply to messages (UI simulation)
Admin users can view users, subscriptions, and messages

golden-hive/
│
├─ html/
│   ├─ index.html              # Homepage with video
│   ├─ login.html              # Login / Register
│   ├─ profile.html            # User profile
│   ├─ messages.html           # Messages / Inbox
│   └─ subscriptions.html      # Subscription page
│
├─ css/
│   ├─ login.css               # Login styles
│   ├─ dash.css                # Dashboard styles
│   ├─ messages.css            # Messages styles
│   ├─ profile.css             # Profile page styles
│   ├─ subscriptions.css       # Subscriptions page styles
│   └─ admin.css               # Admin panel styles
│
├─ js/
│   ├─ login.js                # Tab switching & form behavior
│   ├─ profile.js              # Profile logic (avatar & updating fields)
│   ├─ subscriptions.js        # Subscription logic & localStorage
│   └─ admin.js                # Admin panel logic
│
├─ img/                        # Image assets
├─ README.md                   # This file
└─ LICENSE                     # MIT License

🚀 Features
🔐 Authentication
Switch between User, Admin, and Register
Tab-based UI
Redirect to dashboard after login
🧑‍💼 User Dashboard
Personalized welcome
Sidebar navigation
Logout functionality
👤 Profile Management
Edit name, email, phone
Upload avatar with live preview
🍯 Subscriptions
List of honey plans
Subscribe, renew, cancel
Store payments history with localStorage
💬 Messages
Inbox UI with unread/read state
Message preview & details
Reply form (UI only)
🛠️ Admin Panel
User list with Edit / Delete
View subscriptions status
View user messages
Admin logout and section navigation

📌 Technologies Used
HTML5
CSS3
JavaScript (ES6)
LocalStorage

📋 Usage
Clone the repository:
git clone https://github.com/aulonakerqeli1-svg/golden-hive.git
Open html/login.html in a browser.
Login as User or Admin.
Explore the dashboard, profile, messages, and subscription pages.
