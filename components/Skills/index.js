import { 
  SiTypescript,
  SiAngular,
  SiNextdotjs,
  SiGit,
  SiSass,
  SiMysql,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3 } from 'react-icons/si'

const Skills = () => {

  const techs = [
    { icon: <SiHtml5 color="#e34f26" />, name: 'HTML5' },
    { icon: <SiCss3 color="#1572b6" />, name: 'CSS3' },
    { icon: <SiJavascript color="#f7df1e" />, name: 'JavaScript' },
    { icon: <SiTypescript color="#3178c6" />, name: 'TypeScript' },
    { icon: <SiReact color="#61dafb" />, name: 'React' },
    { icon: <SiNextdotjs color="black" />, name: 'Next.js' },
    { icon: <SiAngular color="#dd0031" />, name: 'Angular' },
    { icon: <SiSass color="#cc6699" />, name: 'Sass' },
    { icon: <SiGit color="#f05032" />, name: 'Git' },
    { icon: <SiMysql color="#00758f" />, name: 'MySQL' },
  ]

  return (
    <>
    <h2>Skills</h2>

    <div style={{
      maxWidth: '600px',
      padding: '20px',
    }}>
       <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'center',
    }}>
      {techs.map((tech, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            minWidth: '150px',
            fontSize: '16px',
          }}
        >
          <div style={{ fontSize: '32px' }}>{tech.icon}</div>
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
    </div>
  </>
  )
}

export default Skills
