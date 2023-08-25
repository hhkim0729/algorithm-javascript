const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === Number(input[0]) + 3) {
    rl.close();
  }
});

const DIR = { U: [-1, 0], D: [1, 0], R: [0, 1], L: [0, -1] };

rl.on('close', () => {
  const N = Number(input[0]);
  const posArr = [
    input[1].split(' ').map(Number),
    input[2].split(' ').map(Number),
  ];
  const board = [];
  for (let i = 0; i < N; ++i) {
    board.push(input[i + 3].split(' '));
  }

  const result = Array(2).fill(0); // 점수 배열: 0번째는 구름이, 1번째는 플레이어
  // 구름이, 플레이어 2명에 대해 반복
  for (let i = 0; i < 2; ++i) {
    // 이동 여부를 기록할 배열
    const arr = Array(N)
      .fill(0)
      .map((_) => Array(N).fill(0));
    let [x, y] = [posArr[i][0] - 1, posArr[i][1] - 1]; // 시작 위치
    let score = 0; // 점수(이동 횟수)
    // 게임 종료까지 반복
    while (true) {
      const curr = [...board[x][y]]; // 현재 보드 칸 문자열을 배열로 변환한 값
      const [count, command] = [
        Number(curr.slice(0, -1).join('')),
        curr.at(-1),
      ];
      let flag = false; // 게임 종료 여부
      // 이동해야할 횟수만큼 반복
      for (let j = 0; j < count; ++j) {
        ++arr[x][y]; // 현재 칸 방문 표시
        ++score; // 점수 증가
        // 다음에 이동할 행, 열 찾기
        let nx = x + DIR[command][0];
        let ny = y + DIR[command][1];
        // 보드를 초과한 경우 처리
        nx = nx < 0 ? nx + N : nx % N;
        ny = ny < 0 ? ny + N : ny % N;
        [x, y] = [nx, ny]; // 다음 칸 갱신
        // 다음에 갈 칸이 이미 방문한 칸이면 게임 종료
        if (arr[x][y] === 1) {
          flag = true;
          break;
        }
      }
      if (flag) break;
    }
    result[i] = score; // 점수 저장
  }

  console.log(
    result[0] > result[1] ? `goorm ${result[0]}` : `player ${result[1]}`
  );
  process.exit();
});
