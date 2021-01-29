const classA = [
    {
        name: "Tiago",
        grade: 8.2
    },
    {
        name: "Matheus",
        grade: 3.9
    },
    {
        name: "Carol",
        grade: 9
    },
    {
        name: "Valter",
        grade: 0.8
    }

]
const classB = [
    {
        name: "Vagner",
        grade: 6.8
    },
    {
        name: "Manuela",
        grade: 6.2
    },
    {
        name: "Fernanda",
        grade: 4.2
    },
    {
        name: "Pedro",
        grade: 8
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length

    return average.toFixed(2)
}

function sendMessage(average, turma) {
    if (average >= 6) {
        console.log(`${turma} average: ${average}. CONGRATULATIONS.`)
    } else {
        console.log(`${turma} average: ${average}. Try harder next time.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false;

    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
    }
}

function studentsReprovado(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, "Class A")
sendMessage(average2, "Class B")

studentsReprovado(classA)
studentsReprovado(classB)