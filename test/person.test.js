const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')

describe('Person', ()=> {
  it('Constructor initialises correctly', ()=> {
  var person = new Person('John', 'Doe', '1 Jan 1999')

  expect(person.firstName).to.equal('John')
  expect(person.surname).to.equal('Doe')
  expect(person.dob).to.equal('1 Jan 1999')

  expect(person.emails).to.deep.equal([])
  expect(person.numbers).to.deep.equal([])
  })

  it('Should capitalise first name', ()=> {
    var person = new Person('bob', 'Drifton', '12 Oct 1996')

    expect(person.firstName).to.equal('Bob')
  })

  it('Should return full name', ()=> {
    var person = new Person('freddy', 'Farlson', '25 Aug 2002')

    expect(person.fullName()).to.equal('Freddy Farlson')
  })

  it('Should add emails', ()=> {
    var person = new Person('Harry', 'Rocket', '30 June 1990')
    person.addEmail('harryrocket@gmail.com')
    person.addEmail('harry.rocket@hotmail.com')

    expect(person.emails).to.deep.equal(['harryrocket@gmail.com', 'harry.rocket@hotmail.com'])
  })

  it('Should add phone numbers', ()=> {
    var person = new Person('Dan', 'Throw', '7 Jan 1980')
    person.addNumber('07584939216')
    person.addNumber('07483492865')

    expect(person.numbers).to.deep.equal(['07584939216','07483492865'])
  })

  it('Should provide all details in multi-line string', ()=> {
    var person = new Person('Ben', 'Edge', '12 Sep 1989')
    person.addNumber('07485938274')
    person.addNumber('07839482737')
    person.addEmail('Bedger@gmail.com')
    person.addEmail('Ben.E@hotmail.com')

    expect(person.returnFormattedDetails()).to.equal(`Ben Edge
--------
DOB: 12 Sep 1989

Email Addresses:
- Bedger@gmail.com
- Ben.E@hotmail.com

Phone Numbers:
- 07485938274
- 07839482737
`)
})
})