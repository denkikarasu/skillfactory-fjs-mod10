let students = new Map([
    ["John", "Computer Science"],
    ["Mary", "Engineering"],
    ["Jane", "Fine Arts"],
    ["Fred", "Biology"]
  ]);

for (let elem of students) {
    console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
}