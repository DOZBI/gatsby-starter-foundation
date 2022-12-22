import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Créer votre site de présentation d'entreprise gratuit <span className="icon -love"><RiHeart2Line/></span> avec<Link to="/">www.teslo.cg</Link></p>
    </div>
  </footer>
)

export default Footer
