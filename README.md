## Work log

#### 01.12.2018 10:00 - 15:00 "version": "0.1.3",

    const wrapper = render(<Counter />)
    const btnTag = wrapper.getByText('0').tagName
    wrapper.debug()
    expect(btnTag).toBe('BUTTON')

  i don't know why, terminal in vscode don't show last 4 lines on test asertion properly, to show then i need to add blank 4-line console.log(`
  
  
  
  `)


  destructuring
  
  before
  const wrapper = render(<Counter />)
  const btnTag = wrapper.getByText('0').tagName

  after
  const {debug , getByTestId, getByText} = render(<Counter />)
  const btnTag = getByText('0').tagName
    

#### 01.12.2018 18:00 - 00:00 "version": "0.1.3",

testing
mocikng functions

separete test to ech functionality
add.js
add.test.js
index.js
indext.test.js


swap to react-testing-libarry
npm install --save-dev react-testing-library
vsCode emmet snippets

"emmet.includeLanguages": {
    "javascript": "javascriptreact"
}

#### 30.11.2018 18:00 - 00:00 "version": "0.1.1",

First test fianly we go to
"test": "react-scripts test",

#### 29.11.2018 13:35 - 15:00 "version": "0.1.0",

npm install
jest
parcel-bundler
styled-componets

They're in json file

"devDependencies": 
{
    "@babel/preset-env": "^7.1.6",
    "jest": "^23.6.0",
    "parcel-bundler": "^1.10.3",
    "styled-components": "^4.1.2"
  }


.bablerc 
{
  "presets": ["env"],
  "env": {
    "test": {
      "presets": ["env"]
    }
  }
}


next step after 
reac-testing-library