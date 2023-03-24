import Person from "./Person"
import { memo } from "react"

const List = ({people}) => {
    
  return (
    <section>
        {people.map((person)=>{
           return <Person key={person.id} {...person}/>
        })}
    </section>
  )
}

export default memo(List)