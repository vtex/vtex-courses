import coursesTemplate from '../templates/courses'
import { Course } from '../../typings/course'

export default (
    courses:Course[]
  ) =>
  `<div id="discord-container">
    <img id="discord-logo" src="https://logo-logos.com/wp-content/uploads/2018/03/Discord_icon.png" />
    <p>Ainda não entrou no nosso servidor do Discord? <a id="discord-link" href="https://discord.gg/vVhUDUS">Entre agora!</a></p>
   </div>
  
  ${coursesTemplate(courses)}
  `

