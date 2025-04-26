import React, { useEffect, useState } from "react";

function InstallButton() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showButton, setShowButton] = useState(false);

    // useEffect(() => {
    //     const handleBeforeInstallPrompt = (e) => {
    //         console.log("Evento beforeinstallprompt detectado"); 
    //         e.preventDefault();
    //         setDeferredPrompt(e);
    //         setShowButton(true);
    //     };

    //     window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    //     return () => {
    //         window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    //     };
    // }, []);
    
    useEffect(() => {
        if (!deferredPrompt) {
          console.log("El evento beforeinstallprompt no se ha disparado automáticamente.");
        }
      }, [deferredPrompt]);
      
    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === "accepted") {
                console.log("El usuario aceptó la instalación");
            } else {
                console.log("El usuario canceló la instalación");
            }
            console.log(`User response to the install prompt: ${outcome}`);
            setDeferredPrompt(null);
            setShowButton(false);
        }
    };

    if (!showButton) 
        return null;

    return (
        <button
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
            onClick={handleInstallClick}
        >
            Download
        </button>
    );
}

export default InstallButton;
