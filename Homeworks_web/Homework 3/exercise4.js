// [Bài tập 4] Tạo một object đại diện cho một học sinh, với các thuộc tính như tên, tuổi, điểm trung bình, sau đó viết hàm để in ra thông tin của học sinh.

let student1 = {
    name: 'Le Ba Dac',
    age: 21,
    avg: 8
}

function printI4(student) {
    console.log("Ten: ", student.name);
    console.log("Tuoi: ", student.age);
    console.log("Diem trung binh: ", student.avg);
}

printI4(student1);