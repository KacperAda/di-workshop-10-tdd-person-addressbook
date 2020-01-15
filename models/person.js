class Person{
  constructor(firstName, surname, dob) {
    this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
    this.surname = surname
    this.dob = dob
    this.emails = []
    this.numbers = []
  }

  fullName(){
    return (this.firstName + ' ' + this.surname)
  }

  addEmail(str){
    this.emails.push(str)
  }

  addNumber(str){
    this.numbers.push(str)
  }

  returnFormattedDetails(){
    var len = this.firstName.length + this.surname.length + 1
    var dash = ''
    var emails = ''
    var numbers = ''
    var emailLen = this.emails.length
    var numberLen = this.numbers.length
    var details = ''
    for(var i = 0; i<len; i++){
      dash = dash + '-'
    }

    for(var i = 0; i<emailLen; i++){
      emails = emails + ('- '+this.emails[i] + `
` )
    }
    
    for(var i = 0; i<numberLen; i++){
      numbers = numbers + ('- '+this.numbers[i] + `
` )
    }
    
    details = (this.firstName + ' ' + this.surname + `
` + dash + `
DOB: ` + this.dob + `

Email Addresses:
` + emails + `
Phone Numbers:
` + numbers)

    return details
  }
}

module.exports = Person