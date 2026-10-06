const form = document.querySelector("form");

const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");


function loadSettings() {
    const cookies = document.cookie.split("; ");

    cookies.forEach(cookie => {
        const [key, value] = cookie.split("=");

        if (key === "fontsize") {
            document.documentElement.style.setProperty(
                "--fontsize",
                value
            );

            fontSizeInput.value = parseInt(value);
        }

        if (key === "fontcolor") {
            document.documentElement.style.setProperty(
                "--fontcolor",
                value
            );

            fontColorInput.value = value;
        }
    });
}


form.addEventListener("submit", () => {
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Save cookies
    document.cookie = `fontsize=${fontSize}px; max-age=31536000; path=/`;
    document.cookie = `fontcolor=${fontColor}; max-age=31536000; path=/`;

    // Apply immediately
    document.documentElement.style.setProperty(
        "--font-size",
        `${fontSize}px`
    );

    document.documentElement.style.setProperty(
        "--font-color",
        fontColor
    );
});


loadSettings();