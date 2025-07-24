document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".card-button");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showAddedToCartMessage();
    });
  });

  function showAddedToCartMessage() {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = "Added to cart";

    messageDiv.style.position = "fixed";
    messageDiv.style.bottom = "20px";
    messageDiv.style.left = "50%";
    messageDiv.style.transform = "translateX(-50%)";
    messageDiv.style.backgroundColor = "#4CAF50";
    messageDiv.style.color = "white";
    messageDiv.style.padding = "10px 20px";
    messageDiv.style.fontFamily = "Inter";
    messageDiv.style.borderRadius = "5px";
    messageDiv.style.zIndex = "1000";
    messageDiv.style.opacity = "0";
    messageDiv.style.transition = "opacity 0.5s ease-in-out";

    document.body.appendChild(messageDiv);

    setTimeout(() => {
      messageDiv.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      messageDiv.style.opacity = "0";
      messageDiv.addEventListener(
        "transitionend",
        () => {
          messageDiv.remove();
        },
        { once: true }
      );
    }, 5000);
  }
});
