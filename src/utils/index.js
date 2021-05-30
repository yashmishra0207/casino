export const displayMessage = (slots) =>
  slots.slot1 === slots.slot2 &&
  slots.slot1 === slots.slot3 &&
  slots.slot1 !== "*" &&
  slots.slot1 !== "$"
    ? slots.slot1 === 7
      ? "Jackpot 🤑"
      : "Congratulations 🎉"
    : (slots.slot1 === slots.slot2 ||
        slots.slot1 === slots.slot3 ||
        slots.slot2 === slots.slot3) &&
      Object.values(slots).indexOf("*") === -1 &&
      Object.values(slots).indexOf("$") === -1
    ? "Not Bad! 😎"
    : "Play ✨ get rich 💰";

export const playGame = (priceSetter, save, setSlots, hack) => {
  const slot1 = hack ? 7 : 1 + Math.floor(Math.random() * 8);
  const slot2 = hack ? 7 : 1 + Math.floor(Math.random() * 8);
  const slot3 = hack ? 7 : 1 + Math.floor(Math.random() * 8);

  document.getElementById("message").classList.remove("slideIn");

  document.getElementById("hack").classList.add("Mui-disabled");
  document.getElementById("play").classList.add("Mui-disabled");

  setSlots({ slot1: "$", slot2: "$", slot3: "$" });
  setTimeout(() => {
    setSlots({ slot1, slot2, slot3 });

    let grossAmount = -1;
    if (slot1 === slot2 && slot1 === slot3) {
      if (slot1 === 7) {
        grossAmount += 10;
      } else {
        grossAmount += 5;
      }
    } else if (slot1 === slot2 || slot1 === slot3 || slot2 === slot3) {
      grossAmount += 0.5;
    }

    priceSetter(grossAmount);

    save({ slot1, slot2, slot3, time: new Date().toString().slice(0, -31) });

    document.getElementById("message").classList.add("slideIn");

    document.getElementById("hack").classList.remove("Mui-disabled");
    document.getElementById("play").classList.remove("Mui-disabled");
  }, 1000);
};

export const highlightRow = (rowData) =>
  rowData.slot1 === rowData.slot2 && rowData.slot1 === rowData.slot3
    ? rowData.slot1 === 7
      ? "#ff69b4"
      : "linear-gradient(#1e90ff, #ff69b4)"
    : rowData.slot1 === rowData.slot2 ||
      rowData.slot1 === rowData.slot3 ||
      rowData.slot2 === rowData.slot3
    ? "#1e90ff"
    : "#fff";
