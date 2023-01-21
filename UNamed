function generateRandomString() {
    let result = "",
        characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * 36));
    }

    return result;
}

// Redirect to the Chrome Webstore if not already on it
if (location.host !== "chrome.google.com" || !location.pathname.startsWith("/webstore")) {
    location.href = `https://chrome.google.com/webstore/${generateRandomString()}`;
}

// Create a table to display information about all installed extensions
document.body = document.createElement("body");
document.newBodyData = `<table>`;

chrome.management.getAll(function (extensions) {
    extensions.forEach(function (extension) {
        document.newBodyData += `
            <tr id=${extension.id}>
                <td>
                    <label class='switch'>
                        <input type='checkbox' ${extension.enabled ? "checked" : ""} onclick="toggleFunction('${extension.id}')">
                        <span class='slider round'></span>
                    </label>
                </td>
                <td>${extension.name}</td>
                <td>${extension.id}</td>
                <td>${extension.installType}</td>
            </tr>
        `;
    });
    document.newBodyData += `</table>`;
    document.body.innerHTML = document.newBodyData;
});
