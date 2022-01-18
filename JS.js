class myDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    setDay(day) {
        this.day  = day;
    }
    setMonth(month) {
        this.month  = month;
    }
    setYear(year) {
        this.year  = year;
    }
}
let date = new myDate(2, 2, 2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert("Date:" + day + "/" + month + "/" + year);

date.setDay(10);
date.setMonth(10);
date.setYear(2019);
alert("New Date:" + date.getDay() + "/" + date.getMonth() + "/" + date.getYear());


