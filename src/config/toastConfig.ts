import { ToasterProps } from "react-hot-toast";

export const toastOptions: ToasterProps = {
  position: "top-right",
  toastOptions: {
    style: {
      background: "#16191e",
      color: "#ffffff",
      border: "1px solid #1f2937",
      borderRadius: "12px",
      padding: "12px 16px",
      fontSize: "13px",
      fontWeight: "600",
    },
    success: {
      style: {
        border: "1px solid #ccff00",
        color: "#ccff00",
      },
      iconTheme: {
        primary: "#ccff00",
        secondary: "#000000",
      },
    },
    error: {
      style: {
        border: "1px solid #ef4444",
        color: "#ef4444",
      },
      iconTheme: {
        primary: "#ef4444",
        secondary: "#ffffff",
      },
    },
  },
};