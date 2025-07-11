document.getElementById('Play-Button-Container').addEventListener('click', function() {
    const selectedVersion = document.getElementById('version-selection').value;
    console.log('Selected Minecraft Version:', selectedVersion);

    // Define the mapping of versions to HTML files
    const versionToFile = {
        "1.12.2": "game-files/1.12.2/",
        "1.12.2 (WASM-GC)": "game-files/1.12.2_wasm-gc/",
        "1.8.8": "game-files/1.8.8/",
        "1.8.8 Kono_Client": "game-files/1.8.8_kono-client",
        "1.8.8 (WASM-GC)": "game-files/1.8.8_wasm-gc/",
        "1.5.2": "game-files/1.5.2/",
        "Beta 1.7.3": "version-beta-1.7.3.html",
        "Beta 1.3": "game-files/beta_1.3",
        "Alpha 1.2.6": "version-alpha-1.2.6.html",
        "Indev": "version-indev.html"
    };

    // Check if the selected version exists in the mapping
    if (versionToFile[selectedVersion]) {
        // Open the corresponding HTML file
        window.location.href = versionToFile[selectedVersion];
    } else {
        // Handle the case where the version is not found in the mapping
        alert("Version not found!");
    }
});
