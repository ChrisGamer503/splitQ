import { useEffect, useState } from "react";

function TituloColor({ texto }) {
  const [ultimaPalabra, setUltimaPalabra] = useState("");

  useEffect(() => {
    if (texto) {
      const palabras = texto.split(" ");
      const quitarPalabra = palabras[palabras.length - 1];
      const quitada = texto.replace(quitarPalabra, "");
      const ultimaPalabraConEstilos = (
        <span>
          <span style={{ color: "black" }}>{quitada}</span>
          <span style={{ color: "#A297E5" }}>{quitarPalabra}</span>
        </span>
      );
      setUltimaPalabra(ultimaPalabraConEstilos);
    }
  }, [texto]);

  return <div className=" font-black text-center text-6xl sm:text-xl">{ultimaPalabra}</div>;
}

export default TituloColor;
