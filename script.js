
/* =========================================
   1. DATA STRUCTURE (Questions Database)
   ========================================= */
const quizData = {
  // === FRESHMAN (University) ===
  freshman: {
    sem1: {
      "Communicative English": [
        { q: "Which of these is a proper noun?", opts: ["City", "Arba Minch", "Country", "Town"], a: 1 },
        { q: "Choose the correct plural: 'Child'", opts: ["Childs", "Children", "Childrens", "Childes"], a: 1 }
      ],
      "Applied Math I": [
        { q: "Derivative of x^2?", opts: ["x", "2x", "2", "0"], a: 1 },
        { q: "Limit of 1/x as x -> infinity?", opts: ["0", "1", "Infinity", "Undefined"], a: 0 }
      ],
      "General Psychology": [
        { q: "Who is the father of Psychology?", opts: ["Freud", "Wundt", "Skinner", "Watson"], a: 1 }
      ],
      "Geography of Ethiopia": [
        { q: "Which river is the longest in Ethiopia?", opts: ["Awash", "Wabe Shebelle", "Blue Nile", "Omo"], a: 1 }
      ],
      "Logic & Critical Thinking": [
        { q: "A valid argument with true premises is?", opts: ["Sound", "Unsound", "Weak", "Strong"], a: 0 }
      ]
    },
    sem2: {
      "Emerging Technology": [
        { q: "What does AI stand for?", opts: ["All Internet", "Artificial Intelligence", "Auto Image", "None"], a: 1 }
      ],
      "Social Anthropology": [
        { q: "Study of Human societies?", opts: ["Anthropology", "Biology", "Chemistry", "Physics"], a: 0 }
      ],
      "Economics": [
        { q: "Law of Demand: Price up, Demand...?", opts: ["Up", "Down", "Stays same", "Unknown"], a: 1 }
      ]
    }
  },

  // === HIGH SCHOOL ===
  highschool: {
    // Grade 9 & 10: Direct Subjects
    "9": {
      "Mathematics": [
        { q: "Grade 9 Math: x + 5 = 10", opts: ["5", "10", "15", "0"], a: 0 },
        { q: "Square root of 144?", opts: ["10", "11", "12", "13"], a: 2 }
      ],
      "Biology": [
        { q: "Powerhouse of the cell?", opts: ["Nucleus", "Mitochondria", "Ribosome", "Wall"], a: 1 }
      ],
      "Chemistry": [
        { q: "Symbol for Gold?", opts: ["Ag", "Au", "Fe", "Pb"], a: 1 }
      ],
      "Physics": [
        { q: "Unit of Force?", opts: ["Joule", "Newton", "Watt", "Pascal"], a: 1 }
      ]
    },
    "10": {
      "Mathematics": [
        { q: "Sin(30) is?", opts: ["0.5", "1", "0", "0.866"], a: 0 },
        { q: "Log(100) base 10?", opts: ["1", "2", "3", "10"], a: 1 }
      ],
      "Biology": [
        { q: "DNA stands for?", opts: ["Deoxyribonucleic Acid", "Dual Nature Acid", "Dynamic Acid", "None"], a: 0 }
      ],
      "Chemistry": [
        { q: "PH of Water?", opts: ["5", "7", "9", "12"], a: 1 }
      ],
      "Physics": [
        { q: "V = IR is whose law?", opts: ["Newton", "Ohm", "Faraday", "Tesla"], a: 1 }
      ]
    },

    // Grade 11: Stream Specific
    "11": {
      "Natural": {
        "Mathematics": [{ q: "G11 Natural Math Q1?", opts: ["A", "B", "C", "D"], a: 0 }],
        "Physics": [{ q: "G11 Physics Q1?", opts: ["A", "B", "C", "D"], a: 0 }],
        "Chemistry": [{ q: "G11 Chemistry Q1?", opts: ["A", "B", "C", "D"], a: 0 }],
        "Biology": [{ q: "G11 Biology Q1?", opts: ["A", "B", "C", "D"], a: 0 }]
      },
      "Social": {
        "Mathematics": [{ q: "G11 Social Math Q1?", opts: ["A", "B", "C", "D"], a: 0 }],
        "Geography": [{ q: "G11 Geography Q1?", opts: ["A", "B", "C", "D"], a: 0 }],
        "History": [{ q: "G11 History Q1?", opts: ["A", "B", "C", "D"], a: 0 }],
        "Economics": [{ q: "G11 Economics Q1?", opts: ["A", "B", "C", "D"], a: 0 }]
      }
    },
    
    // === GRADE 12 (NATIONAL ENTRANCE) ===
    "12": {
      "Natural": {
        "Entrance Mathematics": [
            // --- REAL 2010 E.C. EXAM QUESTIONS TRANSCRIBED FROM PDF ---
            { 
              q: "Q2: What is the equation of the line that passes through (1, 1) and is parallel to the line 3y - x = 1?", 
              opts: ["3x - y = 2", "x + 3y = 4", "3y - x + 2 = 0", "x - 3y + 2 = 0"], 
              a: 3 // D
            },
            { 
              q: "Q3: Which of the following is an equation of the circle whose end points of a diameter are (0, -2) and (2, 2)?", 
              opts: ["x² + y² - 2x - 4 = 0", "x² + y² = 4", "(x-1)² + y² = 4", "x² + y² - 2y - 4 = 0"], 
              a: 0 // A
            },
            { 
              q: "Q5: What is the maximum value of the function f(x) = x⁴ - 2x² on [-2, 1]?", 
              opts: ["8", "12", "24", "40"], 
              a: 0 // A (at x=-2, f(-2)=16-8=8)
            },
            { 
              q: "Q12: If A is a square matrix of order 3 and det(A) = 5, then what is the value of det(A · adj(A))?", 
              opts: ["3", "5", "25", "125"], 
              a: 3 // D (5^3 = 125)
            },
            { 
              q: "Q16: What is the slope of the tangent line to the graph of f(x) = 3e^x + sin(x) + 2 at the point (0, 5)?", 
              opts: ["2", "3", "4", "5"], 
              a: 2 // C (f'(x)=3e^x + cosx -> f'(0)=3+1=4)
            },
            { 
              q: "Q27: What is the value of ∫ x√(1 - x²) dx?", 
              opts: ["½√(1 - x²) + c", "-⅓(1 - x²)^(3/2) + c", "(1 - x²)^(3/2) + c", "-2x√(1 - x²) + c"], 
              a: 1 // B (Integration by substitution)
            },
            { 
              q: "Q41: If z = (1 + √3i)(1 + i), then which one is the polar representation of z?", 
              opts: ["z = 2√2 (cos(105º) + i sin(105º))", "z = 2√2 (cos(15º) + i sin(15º))", "z = 4(cos(105º) + i sin(105º))", "z = 4(cos(75º) + i sin(75º))"], 
              a: 0 // A (arg(z1)=60, arg(z2)=45, sum=105. |z|=2*√2)
            },
            { 
              q: "Q43: Which one of the following is equal to d/dx(log₂ √6x)?", 
              opts: ["3x / 2ln(2)", "1 / (2x ln(2))", "3 / (2x ln(2))", "1 / (6x ln(2))"], 
              a: 1 // B (Chain rule)
            },
            { 
              q: "Q51: If f(x) = klnx + e^(sinx) and f '(π) = -1, then what is the value of k?", 
              opts: ["π", "2π²", "π²", "2π"], 
              a: 0 // A
            }
        ],
        "Physics": [{ q: "Real physics Q1?", opts: ["A", "B", "C", "D"], a: 1 }],
        "Chemistry": [{ q: "Real Chem Q1?", opts: ["A", "B", "C", "D"], a: 1 }]
      },
      "Social": {
        "Entrance Mathematics": [
          { q: "Statistics: Find Mean of 10, 20, 30", opts: ["10", "20", "30", "60"], a: 1 },
          { q: "Matrix: If A=[1 2], B=[3 4], A+B=?", opts: ["[4 6]", "[3 8]", "Error", "[4 8]"], a: 0 }
        ],
        "Geography": [{ q: "Capital of Ethiopia?", opts: ["Addis Ababa", "Gondar", "Mekelle", "Hawassa"], a: 0 }],
        "Economics": [{ q: "Scarcity means?", opts: ["Unlimited resources", "Limited resources", "No money", "None"], a: 1 }]
      }
    }
  }
};

/* =========================================
   2. STATE MANAGEMENT
   ========================================= */
let state = {
  page: 'home',
  path: {
    type: null, // 'freshman', 'highschool', 'entrance'
    university: null,
    semester: null,
    course: null,
    grade: null,
    stream: null 
  },
  currentQuizSet: [],
  qIndex: 0,
  score: 0,
  answers: [],
  timer: null,
  timeLeft: 60
};

/* =========================================
   3. NAVIGATION HANDLERS
   ========================================= */

function showPage(pageId) {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId + '-page');
  if(target) target.classList.add('active');
  window.scrollTo(0, 0);
}

// --- Freshman Flow ---
function startFreshmanFlow() {
  state.path.type = 'freshman';
  showPage('university');
}

function selectUniversity(uniName) {
  state.path.university = uniName;
  showPage('semester');
}

function selectSemester(sem) {
  state.path.semester = sem;
  renderCourses(sem);
  showPage('course');
}

function renderCourses(sem) {
  const courseListDiv = document.getElementById('course-list');
  courseListDiv.innerHTML = '';
  const courses = quizData.freshman[sem];
  Object.keys(courses).forEach(courseName => {
    const box = document.createElement('div');
    box.className = 'feature-box';
    box.onclick = () => selectCourse(courseName);
    const img = document.createElement('img');
    img.src = 'https://cdn-icons-png.flaticon.com/512/2641/2641443.png';
    const h3 = document.createElement('h3');
    h3.textContent = courseName;
    box.appendChild(img);
    box.appendChild(h3);
    courseListDiv.appendChild(box);
  });
}

function selectCourse(courseName) {
  state.path.course = courseName;
  state.currentQuizSet = quizData.freshman[state.path.semester][courseName];
  startQuiz();
}

// --- High School Flow ---
function startHighSchoolFlow() {
  state.path.type = 'highschool';
  showPage('grade');
}

function selectGrade(grade) {
  state.path.grade = grade;
  if (grade === '11') {
    state.path.stream = null;
    showPage('stream');
  } else {
    // Grade 9 & 10
    state.path.stream = null;
    renderHighSchoolSubjects();
    showPage('hs-subject');
  }
}

function selectStream(streamType) {
  state.path.stream = streamType;
  renderHighSchoolSubjects();
  showPage('hs-subject');
}

function renderHighSchoolSubjects() {
  const listDiv = document.getElementById('hs-subject-list');
  listDiv.innerHTML = '';
  const grade = state.path.grade;
  const stream = state.path.stream;
  let subjectsObj = {};
  
  if (grade === '11') {
    subjectsObj = quizData.highschool[grade][stream];
  } else {
    subjectsObj = quizData.highschool[grade];
  }
  
  Object.keys(subjectsObj).forEach(subName => {
    const box = document.createElement('div');
    box.className = 'feature-box';
    box.onclick = () => selectHighSchoolSubject(subName);
    const img = document.createElement('img');
    img.src = 'https://cdn-icons-png.flaticon.com/512/3389/3389081.png';
    const h3 = document.createElement('h3');
    h3.textContent = subName;
    box.appendChild(img);
    box.appendChild(h3);
    listDiv.appendChild(box);
  });
}

function selectHighSchoolSubject(subName) {
  state.path.course = subName;
  if (state.path.stream) {
    state.currentQuizSet = quizData.highschool[state.path.grade][state.path.stream][subName];
  } else {
    state.currentQuizSet = quizData.highschool[state.path.grade][subName];
  }
  startQuiz();
}

function handleSubjectBack() {
  if (state.path.grade === '11') {
    showPage('stream');
  } else {
    showPage('grade');
  }
}

// --- ENTRANCE EXAM FLOW ---
function startEntranceFlow() {
  state.path.type = 'entrance';
  state.path.grade = '12';
  showPage('entrance-stream');
}

function selectEntranceStream(streamType) {
  state.path.stream = streamType;
  renderEntranceSubjects();
  showPage('entrance-subject');
}

function renderEntranceSubjects() {
  const listDiv = document.getElementById('entrance-subject-list');
  listDiv.innerHTML = '';
  const subjectsObj = quizData.highschool['12'][state.path.stream];
  
  Object.keys(subjectsObj).forEach(subName => {
    const box = document.createElement('div');
    box.className = 'feature-box';
    box.onclick = () => selectEntranceSubject(subName);
    const img = document.createElement('img');
    img.src = 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png';
    const h3 = document.createElement('h3');
    h3.textContent = subName;
    box.appendChild(img);
    box.appendChild(h3);
    listDiv.appendChild(box);
  });
}

function selectEntranceSubject(subName) {
  state.path.course = subName;
  state.currentQuizSet = quizData.highschool['12'][state.path.stream][subName];
  startQuiz();
}

/* =========================================
   4. QUIZ ENGINE
   ========================================= */

function startQuiz() {
  if (!state.currentQuizSet || state.currentQuizSet.length === 0) {
    alert("No questions found.");
    return;
  }
  state.qIndex = 0;
  state.score = 0;
  state.answers = new Array(state.currentQuizSet.length).fill(null);
  state.timeLeft = 60 * 5; // 5 minutes for Entrance Exams
  showPage('quiz');
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const q = state.currentQuizSet[state.qIndex];
  
  let title = "Quiz";
  if(state.path.type === 'freshman') {
    title = `${state.path.university} : ${state.path.course}`;
  } else if(state.path.type === 'highschool') {
    title = `Grade ${state.path.grade} : ${state.path.course}`;
  } else if (state.path.type === 'entrance') {
    title = `Entrance Exam (${state.path.stream}) : ${state.path.course}`;
  }
  
  const titleEl = document.getElementById('quiz-title');
  if(titleEl) {
    titleEl.textContent = title;
    titleEl.style.fontSize = title.length > 25 ? "1.2rem" : "1.8rem";
  }
  
  document.getElementById('question-text').textContent = q.q;
  const container = document.getElementById('options-container');
  container.innerHTML = '';
  
  q.opts.forEach((optText, i) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.textContent = optText;
    if (state.answers[state.qIndex] === i) div.classList.add('selected');
    div.onclick = () => {
      Array.from(container.children).forEach(c => c.classList.remove('selected'));
      div.classList.add('selected');
      state.answers[state.qIndex] = i;
    };
    container.appendChild(div);
  });
  
  const pct = ((state.qIndex + 1) / state.currentQuizSet.length) * 100;
  document.getElementById('quiz-progress').style.width = pct + '%';
  document.getElementById('prev-btn').disabled = state.qIndex === 0;
  document.getElementById('next-btn').textContent = 
    (state.qIndex === state.currentQuizSet.length - 1) ? 'Finish' : 'Next';
}

function nextQuestion() {
  const total = state.currentQuizSet.length;
  if (state.qIndex < total - 1) {
    state.qIndex++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function prevQuestion() {
  if (state.qIndex > 0) {
    state.qIndex--;
    loadQuestion();
  }
}

function startTimer() {
  clearInterval(state.timer);
  const display = document.getElementById('time-left');
  display.textContent = state.timeLeft;
  state.timer = setInterval(() => {
    state.timeLeft--;
    display.textContent = state.timeLeft;
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      finishQuiz();
    }
  }, 1000);
}

function finishQuiz() {
  clearInterval(state.timer);
  state.score = 0;
  state.currentQuizSet.forEach((q, i) => {
    if (state.answers[i] === q.a) state.score++;
  });
  const pct = Math.round((state.score / state.currentQuizSet.length) * 100);
  document.getElementById('score-percentage').textContent = pct + '%';
  document.getElementById('correct-answers').textContent = state.score;
  document.getElementById('total-questions').textContent = state.currentQuizSet.length;
  showPage('results');
}

/* =========================================
   5. UI UTILITIES
   ========================================= */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(e.target.dataset.page);
  });
});

function switchAuth(type) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  document.getElementById(type + '-form').classList.add('active');
}

function toggleFaq(element) {
  element.classList.toggle('active');
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const messageText = input.value.trim();
  if (messageText === "") return;
  const chatBox = document.getElementById('chat-box');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message me';
  const now = new Date();
  msgDiv.innerHTML = `<div class="msg-user">You</div><p>${messageText}</p><div class="msg-time">${now.getHours()}:${now.getMinutes()}</div>`;
  chatBox.appendChild(msgDiv);
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
function handleEnter(e) { if (e.key === 'Enter') sendMessage(); }
