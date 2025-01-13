import React from "react";

const pattern = [
  // 첫 번째 라운드
  [
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
  ],

  // 두 번째 라운드
  [
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
  ],

  // 세 번째 라운드
  [
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
  ],

  // 네 번째 라운드
  [
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
  ],

  // 다섯 번째 라운드
  [
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
    { symbol: "○", description: "sc", color: [0, 255, 0] }, // 초록색, 짧은뜨기
    { symbol: "○", description: "sc", color: [255, 255, 255] }, // 흰색, 짧은뜨기
  ],
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-10">뜨개 도안 보기</div>
      <div className="flex flex-col divide-y divide-black border border-black">
        {pattern.map((row, rowIdx) => (
          <div className="flex divide-x divide-black">
            {row.map((col, colIdx) => (
              <div
                className="flex h-12 w-12 items-center justify-center"
                style={{ backgroundColor: `rgb(${col.color.join(",")})` }}
              >
                {col.symbol}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
