import React from 'React';

const Footer = ()=>{
    return <div style={{position: 'absolute ', bottom: 0}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by <a target="_blank" href="https://www.nallelyalcaraz.com">Nallely A</a>
        </div>
}

export default Footer;