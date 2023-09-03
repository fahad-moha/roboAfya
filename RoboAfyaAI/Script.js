document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    // Function to add a user message to the chat interface
    function addUserMessage(message) {
        const userMessage = document.createElement("div");
        userMessage.classList.add("message", "user");
        userMessage.textContent = message;
        chatMessages.appendChild(userMessage);
    }

    // Function to add a chatbot message to the chat interface
    function addChatbotMessage(message) {
        const chatbotMessage = document.createElement("div");
        chatbotMessage.classList.add("message", "chatbot");
        chatbotMessage.textContent = message;
        chatMessages.appendChild(chatbotMessage);
    }

    // Function to handle user input and chatbot responses
    function handleUserInput(event) {
        event.preventDefault();
        const userText = userInput.value.trim();

        if (userText !== "") {
            addUserMessage(userText);
            // Simulate a chatbot response (replace with actual logic)
            addChatbotMessage("Hello! How can I assist you today?");
            userInput.value = "";
        }
    }

    // Event listener for sending a message
    sendButton.addEventListener("click", handleUserInput);

    // Event listener for pressing Enter in the input field
    userInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            handleUserInput(event);
        }
    });

    // User registration and login form handling
    const registrationForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");

    function validateRegistrationForm(event) {
        event.preventDefault();
        const username = registrationForm.username.value.trim();
        const email = registrationForm.email.value.trim();
        const password = registrationForm.password.value;

        // Simple validation (you can add more complex validation)
        if (username === "" || email === "" || password === "") {
            alert("All fields are required.");
            return;
        }

        // Simulate user registration (replace with actual logic)
        alert("You have registered successfully!");
        registrationForm.reset();
    }

    function validateLoginForm(event) {
        event.preventDefault();
        const loginUsername = loginForm['login-username'].value.trim();
        const loginPassword = loginForm['login-password'].value;

        // Simple validation (you can add more complex validation)
        if (loginUsername === "" || loginPassword === "") {
            alert("Username and password are required.");
            return;
        }

        // Simulate user login (replace with actual logic)
        alert("You have logged in successfully!");
        loginForm.reset();
    }

    // Event listeners for form submissions
    registrationForm.addEventListener("submit", validateRegistrationForm);
    loginForm.addEventListener("submit", validateLoginForm);
});
