// 16명의 플레이어 데이터 (실제 JSON 파일에서 로드될 데이터를 시뮬레이션)
const playersData = {
  P_A01: {
    name: "P_A01",
    role: "소대장",
    team: "A",
    scores: {
      mobility: 92,
      marksmanship: 88,
      situation: 45,
      mission: 95,
      physio: 72,
    },
    overall: 88,
    grade: "A",
  },
  P_A02: {
    name: "P_A02",
    role: "분대장",
    team: "A",
    scores: {
      mobility: 65,
      marksmanship: 95,
      situation: 82,
      mission: 78,
      physio: 85,
    },
    overall: 81,
    grade: "B+",
  },
  P_A03: {
    name: "P_A03",
    role: "분대원",
    team: "A",
    scores: {
      mobility: 88,
      marksmanship: 52,
      situation: 75,
      mission: 68,
      physio: 90,
    },
    overall: 75,
    grade: "B",
  },
  P_A04: {
    name: "P_A04",
    role: "분대원",
    team: "A",
    scores: {
      mobility: 35,
      marksmanship: 78,
      situation: 42,
      mission: 85,
      physio: 38,
    },
    overall: 56,
    grade: "C",
  },
  P_A05: {
    name: "P_A05",
    role: "분대장",
    team: "B",
    scores: {
      mobility: 78,
      marksmanship: 45,
      situation: 95,
      mission: 82,
      physio: 65,
    },
    overall: 73,
    grade: "B",
  },
  P_A06: {
    name: "P_A06",
    role: "분대원",
    team: "B",
    scores: {
      mobility: 95,
      marksmanship: 92,
      situation: 38,
      mission: 72,
      physio: 88,
    },
    overall: 77,
    grade: "B+",
  },
  P_A07: {
    name: "P_A07",
    role: "분대원",
    team: "B",
    scores: {
      mobility: 42,
      marksmanship: 68,
      situation: 88,
      mission: 35,
      physio: 92,
    },
    overall: 65,
    grade: "C+",
  },
  P_A08: {
    name: "P_A08",
    role: "분대원",
    team: "B",
    scores: {
      mobility: 85,
      marksmanship: 38,
      situation: 72,
      mission: 95,
      physio: 48,
    },
    overall: 68,
    grade: "B-",
  },
  P_A09: {
    name: "P_A09",
    role: "분대장",
    team: "C",
    scores: {
      mobility: 52,
      marksmanship: 88,
      situation: 65,
      mission: 42,
      physio: 95,
    },
    overall: 68,
    grade: "B-",
  },
  P_A10: {
    name: "P_A10",
    role: "분대원",
    team: "C",
    scores: {
      mobility: 72,
      marksmanship: 35,
      situation: 92,
      mission: 88,
      physio: 58,
    },
    overall: 69,
    grade: "B-",
  },
  P_A11: {
    name: "P_A11",
    role: "분대원",
    team: "C",
    scores: {
      mobility: 95,
      marksmanship: 78,
      situation: 48,
      mission: 65,
      physio: 82,
    },
    overall: 74,
    grade: "B",
  },
  P_A12: {
    name: "P_A12",
    role: "분대원",
    team: "C",
    scores: {
      mobility: 38,
      marksmanship: 92,
      situation: 85,
      mission: 52,
      physio: 45,
    },
    overall: 62,
    grade: "C+",
  },
  P_A13: {
    name: "P_A13",
    role: "분대장",
    team: "D",
    scores: {
      mobility: 68,
      marksmanship: 72,
      situation: 95,
      mission: 78,
      physio: 35,
    },
    overall: 70,
    grade: "B-",
  },
  P_A14: {
    name: "P_A14",
    role: "분대원",
    team: "D",
    scores: {
      mobility: 88,
      marksmanship: 48,
      situation: 58,
      mission: 92,
      physio: 78,
    },
    overall: 73,
    grade: "B",
  },
  P_A15: {
    name: "P_A15",
    role: "분대원",
    team: "D",
    scores: {
      mobility: 45,
      marksmanship: 85,
      situation: 72,
      mission: 38,
      physio: 95,
    },
    overall: 67,
    grade: "B-",
  },
  P_A16: {
    name: "P_A16",
    role: "분대원",
    team: "D",
    scores: {
      mobility: 25,
      marksmanship: 32,
      situation: 28,
      mission: 45,
      physio: 22,
    },
    overall: 30,
    grade: "D",
  },
};

// 팀별 평균 데이터
const teamData = {
  team_a: {
    name: "A팀",
    members: ["P_A01", "P_A02", "P_A03", "P_A04"],
    scores: {
      mobility: 70, // (92+65+88+35)/4
      marksmanship: 78, // (88+95+52+78)/4
      situation: 61, // (45+82+75+42)/4
      mission: 82, // (95+78+68+85)/4
      physio: 71, // (72+85+90+38)/4
    },
    overall: 75,
  },
  team_b: {
    name: "B팀",
    members: ["P_A05", "P_A06", "P_A07", "P_A08"],
    scores: {
      mobility: 78, // (78+95+42+85)/4
      marksmanship: 61, // (45+92+68+38)/4
      situation: 74, // (95+38+88+72)/4
      mission: 71, // (82+72+35+95)/4
      physio: 73, // (65+88+92+48)/4
    },
    overall: 71,
  },
  team_c: {
    name: "C팀",
    members: ["P_A09", "P_A10", "P_A11", "P_A12"],
    scores: {
      mobility: 64, // (52+72+95+38)/4
      marksmanship: 73, // (88+35+78+92)/4
      situation: 73, // (65+92+48+85)/4
      mission: 61, // (42+88+65+52)/4
      physio: 70, // (95+58+82+45)/4
    },
    overall: 68,
  },
  team_d: {
    name: "D팀",
    members: ["P_A13", "P_A14", "P_A15", "P_A16"],
    scores: {
      mobility: 57, // (68+88+45+25)/4
      marksmanship: 61, // (72+48+85+32)/4
      situation: 64, // (95+58+72+28)/4
      mission: 63, // (78+92+38+45)/4
      physio: 58, // (35+78+95+22)/4
    },
    overall: 61,
  },
  all_teams: {
    name: "전체 평균",
    scores: {
      mobility: 67, // 전체 16명 평균
      marksmanship: 68, // 전체 16명 평균
      situation: 68, // 전체 16명 평균
      mission: 69, // 전체 16명 평균
      physio: 68, // 전체 16명 평균
    },
    overall: 69,
  },
};

// 차트 객체들을 전역으로 저장
let radarChart, timelineChart, vitalChart;

// 등급 결정 함수
function getGradeClass(score) {
  if (score >= 85) return "rank-excellent";
  if (score >= 75) return "rank-good";
  if (score >= 65) return "rank-average";
  return "rank-poor";
}

// 등급 텍스트 결정 함수
function getGradeText(score) {
  if (score >= 85) return "우수";
  if (score >= 75) return "양호";
  if (score >= 65) return "보통";
  return "개선필요";
}

// 플레이어 선택 옵션 생성
function populatePlayerSelects() {
  const playerSelect = document.getElementById("playerSelect");
  const comparison1 = document.getElementById("comparison1");
  const comparison2 = document.getElementById("comparison2");

  // 기본 옵션 유지하고 나머지 추가
  Object.keys(playersData).forEach((playerId) => {
    const player = playersData[playerId];
    const optionText = `${player.name} (${player.role})`;

    if (playerId !== "P_A01") {
      const option1 = new Option(optionText, playerId);
      const option2 = new Option(optionText, playerId);
      const option3 = new Option(optionText, playerId);

      playerSelect.appendChild(option1);
      comparison1.appendChild(option2);
      comparison2.appendChild(option3);
    }
  });

  // 비교 선택에 팀 평균 옵션들 추가
  const teamOptions = [
    { value: "team_avg", text: "팀 평균" },
    { value: "team_a", text: "A팀 평균" },
    { value: "team_b", text: "B팀 평균" },
    { value: "team_c", text: "C팀 평균" },
    { value: "team_d", text: "D팀 평균" },
    { value: "all_teams", text: "전체 평균" },
  ];

  teamOptions.forEach((team) => {
    const option = new Option(team.text, team.value);
    comparison2.appendChild(option);
  });
}

// 팀원 카드 렌더링
function renderTeamMembers(filter = "all") {
  const container = document.getElementById("teamMembersContainer");
  container.innerHTML = "";

  let playersToShow = Object.keys(playersData);

  if (filter !== "all") {
    const teamLetter = filter.split("_")[1];
    playersToShow = playersToShow.filter(
      (id) => playersData[id].team === teamLetter.toUpperCase()
    );
  }

  playersToShow.forEach((playerId) => {
    const player = playersData[playerId];
    const memberCard = document.createElement("div");
    memberCard.className = "member-card";
    // 플레이어 번호 추출 (P_A01 -> 01, P_A10 -> 10)
    const playerNumber = playerId.replace("P_A", "");

    memberCard.innerHTML = `
            <div class="member-card-row">
              <div class="member-avatar">A${playerNumber}</div>
              <div class="member-card-main" style="flex:1">
                <div class="member-name">${player.name} ${
      playerId === "P_A01" ? "(본인)" : ""
    }</div>
              </div>
              <div class="member-score-wrap">
                <span class="rank-badge ${getGradeClass(player.overall)}">${
      player.overall
    }점</span>
              </div>
            </div>
            <div class="member-role">${player.role}</div>
          `;
    memberCard.addEventListener("click", () => selectPlayer(playerId));
    container.appendChild(memberCard);
  });
}

// 플레이어 선택 함수
function selectPlayer(playerId) {
  document.getElementById("playerSelect").value = playerId;
  document.querySelector(
    'input[name="analysisType"][value="individual"]'
  ).checked = true;
  updateAnalysis();
}

// 레이더 차트 초기화 및 업데이트
function initRadarChart() {
  const radarCtx = document.getElementById("radarChart").getContext("2d");
  radarChart = new Chart(radarCtx, {
    type: "radar",
    data: {
      labels: [
        "기동능력",
        "사격능력",
        "상황조치능력",
        "개인임무능력",
        "신체반응분석",
      ],
      datasets: [],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,

      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            showLabelBackdrop: false,
            color: "#3f4g6p",
            font: { size: 14, weight: "bold" },
            stepSize: 20,
            display: true,
          },
          grid: {
            color: "#3a3a5c",
            lineWidth: 1,
          },
          angleLines: {
            color: "#3a3a5c",
            lineWidth: 1,
          },
          pointLabels: {
            color: "#ffffff",
            font: { size: 12, weight: "600" },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#ffffff",
            font: { size: 12 },
            usePointStyle: true,
            padding: 20,
          },
        },
      },
    },
  });
  updateRadarChart();
}

// 레이더 차트 업데이트
function updateRadarChart() {
  const analysisType = document.querySelector(
    'input[name="analysisType"]:checked'
  ).value;
  let datasets = [];
  let title = "";

  if (analysisType === "individual") {
    const playerId = document.getElementById("playerSelect").value;
    const player = playersData[playerId];

    datasets.push({
      label: `${player.name} (${player.role})`,
      data: [
        player.scores.mobility,
        player.scores.marksmanship,
        player.scores.situation,
        player.scores.mission,
        player.scores.physio,
      ],
      fill: false,
      borderColor: "#4c9eff",
      backgroundColor: "#4c9eff",
      pointBackgroundColor: "#4c9eff",
      pointBorderColor: "#ffffff",
      pointHoverBackgroundColor: "#ffffff",
      pointHoverBorderColor: "#4c9eff",
      borderWidth: 4,
      pointRadius: 8,
      pointBorderWidth: 3,
    });

    // 팀 평균 추가
    const teamKey = `team_${player.team.toLowerCase()}`;
    const team = teamData[teamKey];
    datasets.push({
      label: `${team.name} 평균`,
      data: [
        team.scores.mobility,
        team.scores.marksmanship,
        team.scores.situation,
        team.scores.mission,
        team.scores.physio,
      ],
      fill: false,
      borderColor: "#4caf50",
      pointBackgroundColor: "#4caf50",
      pointBorderColor: "#ffffff",
      pointHoverBackgroundColor: "#ffffff",
      pointHoverBorderColor: "#4caf50",
      borderWidth: 3,
      pointRadius: 6,
      pointBorderWidth: 2,
    });

    title = `<svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg> 종합 능력 평가 (다각형 분석) - ${player.name}`;
  } else if (analysisType === "team") {
    const teamKey = document.getElementById("teamSelect").value;
    const team = teamData[teamKey];

    datasets.push({
      label: team.name,
      data: [
        team.scores.mobility,
        team.scores.marksmanship,
        team.scores.situation,
        team.scores.mission,
        team.scores.physio,
      ],
      fill: false,
      borderColor: "#4c9eff",
      pointBackgroundColor: "#4c9eff",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#4c9eff",
      borderWidth: 3,
      pointRadius: 6,
    });

    // 전체 평균 추가
    const allTeams = teamData.all_teams;
    datasets.push({
      label: "전체 평균",
      data: [
        allTeams.scores.mobility,
        allTeams.scores.marksmanship,
        allTeams.scores.situation,
        allTeams.scores.mission,
        allTeams.scores.physio,
      ],
      fill: false,
      borderColor: "#ff9800",
      pointBackgroundColor: "#ff9800",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#ff9800",
      borderWidth: 2,
      pointRadius: 5,
    });

    title = `<svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg> 종합 능력 평가 (다각형 분석) - ${team.name}`;
  } else if (analysisType === "comparison") {
    const comp1 = document.getElementById("comparison1").value;
    const comp2 = document.getElementById("comparison2").value;

    // 첫 번째 비교 대상
    if (playersData[comp1]) {
      const player = playersData[comp1];
      datasets.push({
        label: `${player.name} (${player.role})`,
        data: [
          player.scores.mobility,
          player.scores.marksmanship,
          player.scores.situation,
          player.scores.mission,
          player.scores.physio,
        ],
        fill: true,
        backgroundColor: "rgba(76, 158, 255, 0.15)",
        borderColor: "#4c9eff",
        pointBackgroundColor: "#4c9eff",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#4c9eff",
        borderWidth: 3,
        pointRadius: 6,
      });
    }

    // 두 번째 비교 대상
    if (comp2 === "team_avg") {
      const player1 = playersData[comp1];
      const teamKey = `team_${player1.team.toLowerCase()}`;
      const team = teamData[teamKey];
      datasets.push({
        label: `${team.name} 평균`,
        data: [
          team.scores.mobility,
          team.scores.marksmanship,
          team.scores.situation,
          team.scores.mission,
          team.scores.physio,
        ],
        fill: true,
        backgroundColor: "rgba(76, 175, 80, 0.08)",
        borderColor: "#4caf50",
        pointBackgroundColor: "#4caf50",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#4caf50",
        borderWidth: 2,
        pointRadius: 4,
      });
    } else if (teamData[comp2]) {
      const team = teamData[comp2];
      datasets.push({
        label: team.name,
        data: [
          team.scores.mobility,
          team.scores.marksmanship,
          team.scores.situation,
          team.scores.mission,
          team.scores.physio,
        ],
        fill: true,
        backgroundColor: "rgba(255, 152, 0, 0.08)",
        borderColor: "#ff9800",
        pointBackgroundColor: "#ff9800",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#ff9800",
        borderWidth: 2,
        pointRadius: 4,
      });
    } else if (playersData[comp2]) {
      const player = playersData[comp2];
      datasets.push({
        label: `${player.name} (${player.role})`,
        data: [
          player.scores.mobility,
          player.scores.marksmanship,
          player.scores.situation,
          player.scores.mission,
          player.scores.physio,
        ],
        fill: true,
        backgroundColor: "rgba(255, 152, 0, 0.08)",
        borderColor: "#ff9800",
        pointBackgroundColor: "#ff9800",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#ff9800",
        borderWidth: 2,
        pointRadius: 4,
      });
    }

    title =
      '<svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg> 종합 능력 평가 (비교 분석)';
  }

  radarChart.data.datasets = datasets;
  radarChart.update();
  document.getElementById("chartTitle").innerHTML = title;
}

// 분석 업데이트
function updateAnalysis() {
  updateRadarChart();

  const analysisType = document.querySelector(
    'input[name="analysisType"]:checked'
  ).value;

  // 컨트롤 표시/숨김
  document.getElementById("individualControl").style.display =
    analysisType === "individual" ? "block" : "none";
  document.getElementById("teamControl").style.display =
    analysisType === "team" ? "block" : "none";
  document.getElementById("comparisonControl").style.display =
    analysisType === "comparison" ? "block" : "none";
}

// 타임라인 차트 초기화
function initTimelineChart() {
  const timelineCtx = document
    .getElementById("timelineChart")
    .getContext("2d");
  timelineChart = new Chart(timelineCtx, {
    type: "line",
    data: {
      labels: [
        "00:00",
        "00:15",
        "00:30",
        "00:45",
        "01:00",
        "01:15",
        "01:30",
        "01:45",
        "02:00",
      ],
      datasets: [
        {
          label: "종합 점수",
          data: [85, 88, 87, 82, 76, 78, 82, 85, 87],
          borderColor: "#4c9eff",
          backgroundColor: "rgba(76, 158, 255, 0.1)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "스트레스 지수",
          data: [45, 48, 52, 58, 65, 78, 75, 58, 48],
          borderColor: "#ff9800",
          backgroundColor: "rgba(255, 152, 0, 0.08)",
          tension: 0.4,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: { color: "#b0b0b0" },
          grid: { color: "#3a3a5c" },
          title: {
            display: true,
            text: "훈련 시간 (2시간)",
            color: "#b0b0b0",
          },
        },
        y: {
          ticks: { color: "#b0b0b0" },
          grid: { color: "#3a3a5c" },
          title: {
            display: true,
            text: "점수",
            color: "#b0b0b0",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#ffffff",
            usePointStyle: true,
          },
        },
      },
    },
  });
}

// 생체신호 차트 초기화
function initVitalChart() {
  const vitalCtx = document.getElementById("vitalChart").getContext("2d");
  vitalChart = new Chart(vitalCtx, {
    type: "line",
    data: {
      labels: [
        "00:00",
        "00:15",
        "00:30",
        "00:45",
        "01:00",
        "01:15",
        "01:30",
        "01:45",
        "02:00",
      ],
      datasets: [
        {
          label: "심박수 (BPM)",
          data: [65, 68, 70, 85, 92, 88, 75, 72, 68],
          borderColor: "#f44336",
          backgroundColor: "rgba(244, 67, 54, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: { color: "#b0b0b0", font: { size: 10 } },
          grid: { color: "#3a3a5c" },
          title: {
            display: true,
            text: "훈련 시간",
            color: "#b0b0b0",
            font: { size: 10 },
          },
        },
        y: {
          ticks: { color: "#b0b0b0", font: { size: 10 } },
          grid: { color: "#3a3a5c" },
          title: {
            display: true,
            text: "BPM",
            color: "#b0b0b0",
            font: { size: 10 },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

// 초기화
document.addEventListener("DOMContentLoaded", function () {
  populatePlayerSelects();
  renderTeamMembers();
  initRadarChart();
  initTimelineChart();
  initVitalChart();

  // 이벤트 리스너 등록
  document
    .querySelectorAll('input[name="analysisType"]')
    .forEach((radio) => {
      radio.addEventListener("change", updateAnalysis);
    });

  document
    .getElementById("playerSelect")
    .addEventListener("change", updateRadarChart);
  document
    .getElementById("teamSelect")
    .addEventListener("change", updateRadarChart);
  document
    .getElementById("comparison1")
    .addEventListener("change", updateRadarChart);
  document
    .getElementById("comparison2")
    .addEventListener("change", updateRadarChart);

  document.getElementById("teamFilter").addEventListener("change", function () {
    renderTeamMembers(this.value);
  });
});


