// Function to inject AI icon into the LinkedIn message input field
function injectAIIcon() {
  const messageInput = document.querySelector("div.msg-form__msg-content-container");
  
  // Log the selected message input for debugging
  console.log("Message Input:", messageInput);

  if (!messageInput) return; // Ensure the input field exists

  // Set the parent container position to relative if it's not already set
  if (getComputedStyle(messageInput).position === 'static' || getComputedStyle(messageInput).position === '') {
    messageInput.style.position = "relative";
  }

  // Check if the icon is already added
  if (document.querySelector(".ai-icon")) return;

  // Create the AI Icon
  const aiIcon = document.createElement("img");
  aiIcon.src = chrome.runtime.getURL("ai-icon.png");
  aiIcon.classList.add("ai-icon");

  // Apply styles to position the icon
  aiIcon.style.position = "absolute"; 
  aiIcon.style.right = "10px"; 
  aiIcon.style.bottom = "10px"; 
  aiIcon.style.cursor = "pointer"; 
  aiIcon.style.zIndex = "1000"; // Ensure it stays above other elements

  // Append the AI Icon to the message input container
  messageInput.appendChild(aiIcon);

  // Add event listener to open the modal when the icon is clicked
  aiIcon.addEventListener("click", openModal);

  console.log("AI Icon Injected:", aiIcon); // Log the icon for debugging
}

// Function to remove AI icon when input field is unfocused
function removeAIIcon() {
  const aiIcon = document.querySelector(".ai-icon");
  if (aiIcon) {
    aiIcon.remove();
    console.log("AI Icon removed");
  }
}

// Function to open the modal (add your modal handling logic here)
function openModal() {
  // You can implement the logic to show the modal here
  alert("AI Modal should appear!");
}

// Attach event listeners to detect focus on LinkedIn message input field
document.addEventListener("focusin", (event) => {
  if (event.target.closest("div.msg-form__msg-content-container")) {
    injectAIIcon();
  }
});

document.addEventListener("focusout", (event) => {
  if (event.target.closest("div.msg-form__msg-content-container")) {
    removeAIIcon();
  }
});
