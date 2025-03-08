function shareProfile() {
    if (navigator.share) {
        navigator.share({
            title: 'Karthik Pohane - Profile',
            text: 'Check out this awesome profile!',
            url: window.location.href
        })
        .then(() => showToast("Profile Shared Successfully!"))
        .catch((error) => console.log('Sharing failed', error));
    } else {
        navigator.clipboard.writeText(window.location.href);
        showToast("Profile link copied to clipboard!");
    }
}

function copyEmail(e) {
    e.preventDefault(); // Prevent the default link action

    const email = "kartikpohane0612@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        showToast("Email Copied!");
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.display = "block";
    toast.style.opacity = "1"; // Ensure visibility

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => { toast.style.display = "none"; }, 500); // Allow fade-out effect
    }, 3000);
}
