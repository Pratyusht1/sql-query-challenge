document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submitButton");
  const showSolutionButton = document.getElementById("showSolutionButton");
  const resetButton = document.getElementById("resetButton");
  const solutionDiv = document.getElementById("solution");
  const dashboardLink = document.getElementById("dashboardLink");
  const funnyMessage = document.getElementById("funnyMessage");

  submitButton.addEventListener("click", checkQuery);
  showSolutionButton.addEventListener("click", showSolution);
  resetButton.addEventListener("click", resetChallenge);

  function checkQuery() {
    const submittedQuery = document.getElementById("sqlQuery").value.toLowerCase();

    if (
      submittedQuery.includes("select") &&
      submittedQuery.includes("from") &&
      submittedQuery.includes("where")
    ) {
      dashboardLink.style.display = "block";
      funnyMessage.style.display = "block";
    } else {
      alert("Your query is incorrect. Please try again.");
    }
  }

  function showSolution() {
    solutionDiv.style.display = "block";
  }

  function resetChallenge() {
    document.getElementById("sqlQuery").value = "";
    dashboardLink.style.display = "none";
    funnyMessage.style.display = "none";
    solutionDiv.style.display = "none";
  }
});
