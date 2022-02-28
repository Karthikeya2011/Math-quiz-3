function updateSorce()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "score: " + score;
}

function saveSorce()
{
    localStorage.setItem("score", score);
}

function nextPage() {
    window.location ="activity_2.html";
}