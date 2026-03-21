import React from "react";

interface PhoneMockupProps {
  children?: React.ReactNode;
  /** Largura em px — altura escala em 2.1:1 (proporção iPhone). Padrão: 280 */
  width?: number;
  className?: string;
}

/**
 * Mockup de iPhone em código puro.
 * Passe o conteúdo da tela como `children` — ocupa toda a área da tela.
 * O Dynamic Island fica em z-20 no topo; use paddingTop ≈ 9% para afastar
 * conteúdo do topo e evitar sobreposição com a ilha.
 */
export default function PhoneMockup({ children, width = 280, className = "" }: PhoneMockupProps) {
  const height = Math.round(width * 2.16);
  // Raios em px absolutos para evitar distorção elíptica dos cantos
  const chassisRadius = Math.round(width * 0.155);
  const screenInset = Math.round(width * 0.028);
  const screenRadius = Math.max(chassisRadius - screenInset, 6);

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width, height }}>
      {/* Chassis titânio — gradiente sutil para dar profundidade */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius: chassisRadius,
          background: "linear-gradient(160deg, #4e4e52 0%, #1c1c1e 45%, #3a3a3c 100%)",
          boxShadow:
            "0 0 0 1.5px rgba(255,255,255,0.12), 0 0 0 1px rgba(0,0,0,0.7), 0 32px 72px rgba(0,0,0,0.55), 0 6px 20px rgba(0,0,0,0.45)"
        }}
      />

      {/* Reflexo fino no topo do chassis */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: "14%",
          right: "14%",
          height: "1.5px",
          borderRadius: "0 0 4px 4px",
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)"
        }}
      />

      {/* Vidro da tela — recuado do chassis */}
      <div className="absolute bg-black overflow-hidden" style={{ inset: screenInset, borderRadius: screenRadius }}>
        {/* Dynamic Island — flutua sobre o conteúdo */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            top: "1.5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "30%",
            height: "3.8%",
            minHeight: 10,
            borderRadius: "9999px",
            background: "#060606",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04)"
          }}
        />

        {/* Conteúdo da tela — preenchimento total */}
        <div className="absolute inset-0 overflow-hidden">{children}</div>
      </div>

      {/* Botão silencioso */}
      <div
        className="absolute"
        style={{
          left: -Math.round(width * 0.018),
          top: Math.round(height * 0.11),
          width: Math.round(width * 0.019),
          height: Math.round(height * 0.032),
          background: "linear-gradient(to right, #28282a, #3a3a3c)",
          borderRadius: "3px 0 0 3px"
        }}
      />
      {/* Volume + */}
      <div
        className="absolute"
        style={{
          left: -Math.round(width * 0.018),
          top: Math.round(height * 0.175),
          width: Math.round(width * 0.019),
          height: Math.round(height * 0.065),
          background: "linear-gradient(to right, #28282a, #3a3a3c)",
          borderRadius: "3px 0 0 3px"
        }}
      />
      {/* Volume - */}
      <div
        className="absolute"
        style={{
          left: -Math.round(width * 0.018),
          top: Math.round(height * 0.26),
          width: Math.round(width * 0.019),
          height: Math.round(height * 0.065),
          background: "linear-gradient(to right, #28282a, #3a3a3c)",
          borderRadius: "3px 0 0 3px"
        }}
      />
      {/* Power */}
      <div
        className="absolute"
        style={{
          right: -Math.round(width * 0.018),
          top: Math.round(height * 0.195),
          width: Math.round(width * 0.019),
          height: Math.round(height * 0.1),
          background: "linear-gradient(to left, #28282a, #3a3a3c)",
          borderRadius: "0 3px 3px 0"
        }}
      />
    </div>
  );
}
