function calculateGrade() {
        var score = document.getElementById("score").value;
        var grade;

        if (score >= 80 && score <= 100) {
            grade = "A+";
        } else if (score >= 70 && score < 80) {
            grade = "A";
        } else if (score >= 60 && score < 70) {
            grade = "A-";
        } else if (score >= 50 && score < 60) {
            grade = "B";
        } else if (score >= 40 && score < 50) {
            grade = "C";
        } else if (score >= 33 && score < 40) {
            grade = "D";
        } else if (score >= 0 && score < 33) {
            grade = "F";
        } else {
            grade = "F";
        }

        document.getElementById("result").innerHTML = "Your grade is: " + grade;
    }