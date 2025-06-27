import Styles from "./footer.module.css"
import GitHub from "../../Assets/github-svgrepo-com.png"

export default function Footer() {
    return (
        <footer className={Styles.container}>
            {/* <p className={Styles.name}>Mathew Sanouvong </p> */}
            <a href="https://github.com/MSanouvo">
                <button className={Styles.button}>
                    <img className={Styles.image} src={GitHub} alt="" />   
                </button>
                
            </a>
        </footer>
    )
}