import { useEffect, useState } from "react";

export default function useOnline() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    updateStatus(); // Set initial state

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return isOnline;
}
