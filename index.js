/* Your Code Here */
function createEmployeeRecord(employeeInfo) {
    const [firstName, familyName, title, payPerHour] = employeeInfo;
  
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(employees) {
    return employees.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
  
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date
    });
  
    return this;
  }
  
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
  
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date
    });
  
    return this;
  }
  
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date).hour;
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour;
  
    return (timeOut - timeIn) / 100;
  }
  
  function wagesEarnedOnDate(date) {
    const hours= hoursWorkedOnDate.call(this, date);
    return hours* this.payPerHour;
  }
  
  function allWagesFor() {
    const wagesDates = this.timeInEvents.map(function (e) {
      return e.date;
    });
  
    const toBePaid = wagesDates.reduce(function (accumulator, currentvalue) {
      return accumulator + wagesEarnedOnDate.call(this, currentvalue);
    }.bind(this), 0);
  
    return toBePaid;
  }
  
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => {
      return totalPayroll + allWagesFor.call(employee);
    }, 0);
  }
  

  
  

