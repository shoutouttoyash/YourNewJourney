document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');

    // Email validation using a regular expression
    emailInput.addEventListener('input', function() {
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailInput.setCustomValidity('Enter a valid email address');
        } else {
            emailInput.setCustomValidity('');
        }
    });

    // Message length limit
    messageTextarea.addEventListener('input', function() {
        const maxLength = 500;
        const message = messageTextarea.value;
        if (message.length > maxLength) {
            messageTextarea.setCustomValidity('Message must be 500 characters or less');
        } else {
            messageTextarea.setCustomValidity('');
        }
    });

    // JavaScript for the chatbot placeholder (no actual functionality)
    const chatbotContainer = document.querySelector('.chatbot-container');
    const closeChatbot = document.getElementById('close-chatbot');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-message');
    const chatbotMessages = document.querySelector('.chatbot-messages');

    closeChatbot.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
    });

    sendButton.addEventListener('click', () => {
        const userMessage = userInput.value;
        userInput.value = '';

        // Display user message
        const userBubble = document.createElement('div');
        userBubble.classList.add('user-bubble');
        userBubble.textContent = userMessage;
        chatbotMessages.appendChild(userBubble);
    });
});