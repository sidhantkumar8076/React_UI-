import Section1 from "./components/section1/section1"
import Section2 from "./components/section2/section2"


const App = () => {

  const data = [
    {
      img : 'https://i.pinimg.com/736x/fd/82/40/fd82403d23b153efd5cd5fe461ba3cc9.jpg',
      intro : 'hello this is the first card',
      tag : 'Satisfied'
    },
        {
      img : 'https://i.pinimg.com/736x/60/19/4d/60194de6aa3e71f9af2fb889a3e8b68a.jpg',
      intro : 'hello this is the second card',
      tag : 'Served'
    },
        {
      img : 'https://i.pinimg.com/1200x/1d/50/3f/1d503f48198d00dfc434c9a310bd8a8b.jpg',
      intro : 'hello this is the third card',
      tag : 'Happy'
    },
        {
      img : 'https://i.pinimg.com/1200x/12/1c/b4/121cb48ddc0dde82e1e3581770d1c18b.jpg',
      intro : 'hello this is the fourth card',
      tag : 'Unserved'
    }
  ]


  return (

    <div>
    <Section1 user = {data} />
    {/* <Section2 /> */}
    </div>
    
  )
}

export default App