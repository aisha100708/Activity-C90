function getScore() {
    score=localStorage.getItem("score");
    document.getElementById("display_score").innerHTML="Score: "+ score;
}
function back() {
    window.location="activity_1.html";
}