import fs from 'fs'
import parsed from '../data/init_data.json'
const data = Object.entries(parsed)
const test_cases =[]
// const data =  Object.entries(JSON.parse(fs.readFileSync('../data/init_data.json')))
data.forEach(item=>test_cases.push([item[1]['choices'], item[1]['correct_answer'],true]))


describe("Initial survey questions are valid", ()=> {
  test.each(test_cases)('The answer choices %o contains the correct %o', (array, answer, expected)=>{
    expect.objectContaining(array.includes(answer))
  })
})