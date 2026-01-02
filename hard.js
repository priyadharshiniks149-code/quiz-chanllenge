const params = new URLSearchParams(window.location.search);
let level = params.get("level");

if (!level || !["easy", "medium", "hard"].includes(level)) {
  level = "hard";
}



const title = document.getElementById("levelTitle");
const quesText = document.getElementById("questionText");
const buttons = document.querySelectorAll(".options button");

let qIndex = 0;
let score = 0;

title.innerText = level.toUpperCase() + " • EQ Quiz";

const questionBank = {

  easy: [
    {
      q: "If your friend is sad, what is the best first response?",
      o: ["Ignore them", "Tell them to stop being sad", "Listen to them patiently", "Make fun of them"],
      a: 2
    },
    {
      q: "Emotional intelligence mainly helps in?",
      o: ["Winning arguments", "Understanding emotions", "Scoring marks", "Being silent"],
      a: 1
    },
    {
      q: "When you feel angry, what should you do first?",
      o: ["Shout", "Break things", "Pause and breathe", "Blame others"],
      a: 2
    },
    {
      q: "Recognizing your own emotions is called?",
      o: ["Self-awareness", "Motivation", "Empathy", "Confidence"],
      a: 0
    },
    {
      q: "If someone disagrees with you, EQ suggests you should?",
      o: ["Get angry", "Listen calmly", "End friendship", "Prove them wrong"],
      a: 1
    },
    {
      q: "Empathy means?",
      o: ["Feeling superior", "Understanding others’ feelings", "Giving advice always", "Avoiding people"],
      a: 1
    },
    {
      q: "A person with high EQ usually?",
      o: ["Avoids emotions", "Controls emotions well", "Hides emotions", "Overreacts"],
      a: 1
    },
    {
      q: "When stressed, a good EQ habit is?",
      o: ["Overthinking", "Taking a short break", "Blaming others", "Quitting"],
      a: 1
    },
    {
      q: "EQ is important in relationships because?",
      o: ["It avoids feelings", "It improves understanding", "It creates distance", "It dominates others"],
      a: 1
    },
    {
      q: "Which is an emotionally mature reaction?",
      o: ["Silent treatment", "Calm communication", "Aggression", "Sarcasm"],
      a: 1
    }
  ],

  medium: [
    {
      q: "You receive criticism. What is the healthiest response?",
      o: ["Take it personally", "Ignore it", "Reflect and improve", "Get defensive"],
      a: 2
    },
    {
      q: "Self-regulation mainly refers to?",
      o: ["Suppressing emotions", "Controlling reactions", "Avoiding people", "Being emotionless"],
      a: 1
    },
    {
      q: "In a conflict, EQ helps by?",
      o: ["Winning the fight", "Understanding both sides", "Avoiding discussion", "Proving dominance"],
      a: 1
    },
    {
      q: "Motivation in EQ means?",
      o: ["Money-driven goals", "Internal drive to improve", "External pressure", "Fear-based action"],
      a: 1
    },
    {
      q: "If someone is rude to you, a high EQ response is?",
      o: ["Reply rudely", "Stay calm and respectful", "Ignore forever", "Complain immediately"],
      a: 1
    },
    {
      q: "Managing emotions helps mainly in?",
      o: ["Academic marks", "Personal & social life", "Memory", "Physical strength"],
      a: 1
    },
    {
      q: "Understanding body language relates to?",
      o: ["Logic", "Empathy", "Motivation", "Self-regulation"],
      a: 1
    },
    {
      q: "EQ improves leadership because leaders?",
      o: ["Command others", "Understand team emotions", "Avoid feedback", "Stay distant"],
      a: 1
    },
    {
      q: "Handling failure with EQ means?",
      o: ["Giving up", "Learning and moving on", "Blaming fate", "Avoiding challenges"],
      a: 1
    },
    {
      q: "Emotional balance helps in decision making by?",
      o: ["Ignoring emotions", "Combining logic and feelings", "Following impulse", "Avoiding choices"],
      a: 1
    }
  ],

  hard: [
    {
      q: "High EQ individuals usually handle stress by?",
      o: ["Suppressing emotions", "Recognizing and managing it", "Avoiding responsibility", "Escaping reality"],
      a: 1
    },
    {
      q: "Emotional intelligence differs from IQ because EQ focuses on?",
      o: ["Memory", "Emotions & relationships", "Speed", "Problem solving"],
      a: 1
    },
    {
      q: "Which situation best reflects emotional self-control?",
      o: ["Reacting instantly", "Responding thoughtfully", "Avoiding conversation", "Being passive"],
      a: 1
    },
    {
      q: "Empathy without boundaries may lead to?",
      o: ["Emotional burnout", "Better leadership", "Confidence", "Stability"],
      a: 0
    },
    {
      q: "Social awareness mainly involves?",
      o: ["Understanding group emotions", "Leading groups", "Avoiding people", "Being extrovert"],
      a: 0
    },
    {
      q: "A person with low EQ often struggles with?",
      o: ["Technical skills", "Interpersonal relationships", "Memory", "Physical health"],
      a: 1
    },
    {
      q: "EQ helps conflict resolution by?",
      o: ["Suppressing emotions", "Managing emotions constructively", "Avoiding discussion", "Dominating others"],
      a: 1
    },
    {
      q: "Which is a sign of emotional maturity?",
      o: ["Accepting responsibility", "Blaming others", "Escaping problems", "Avoiding emotions"],
      a: 0
    },
    {
      q: "Long-term EQ development requires?",
      o: ["Practice and reflection", "Instant change", "Avoiding emotions", "External validation"],
      a: 0
    },
    {
      q: "In leadership, EQ is critical because it builds?",
      o: ["Authority", "Trust and connection", "Fear", "Control"],
      a: 1
    }
  ]
};

let quiz = questionBank[level];

function loadQ() {
  let current = quiz[qIndex];
  quesText.innerText = current.q;

  buttons.forEach((btn, i) => {
    btn.innerText = current.o[i];
    btn.disabled = false;
  });
}

function selectOption(i) {
  if (i === quiz[qIndex].a) score += 10;
  buttons.forEach(btn => btn.disabled = true);
}

function nextQ() {
  qIndex++;
  if (qIndex < quiz.length) {
    loadQ();
  } else {
    showResult();
  }
}

function showResult() {
  let msg = "";

  if (score <= 30) {
    msg = "😬 Emotional awareness needs work. Start small, reflect more.";
  } else if (score <= 65) {
    msg = "🙂 You're emotionally aware, but growth is possible.";
  } else {
    msg = "🌟 Strong EQ! You understand emotions deeply.";
  }

  quesText.innerText = `Your Score: ${score}/100\n${msg}`;
  document.querySelector(".options").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
}

loadQ();
