import styles from './footer.module.css';

function Footer() {
    return (
        <footer>
            <div className={styles.footercontainer}>
                <div className={styles.innerContainer}>
                    <img className="w-16 md:w-32 lg:w-48" src="/imagenes/logo.png" alt="logo" width={120} height={60} />
                    <div className={styles.container}>
                        <div className={styles.leftContainer}>
                            <h1 className={styles.princ}>Customer Support</h1>
                            <p className={styles.footer_item}>0800 123 456</p>
                            <p className={styles.footer_item}>0800 123 789</p>
                            <p className={styles.footer_item}>Mon-Fri 9:00 AM to 6:00 PM</p>
                            <p className={styles.footer_item}>Sat 9:00 AM to 1:00 PM</p>
                            <p className={styles.footer_item}>contacto@mega.com</p>
                        </div>
                        <div className={styles.rightContainer}>
                            <h1 className={styles.princ}>Phone Sales</h1>
                            <p className={styles.footer_item}>0800 154 986</p>
                            <p className={styles.footer_item}>Mon-Fri 8:00 AM to 8:00 PM</p>
                            <p className={styles.footer_item}>Sat-Sun-Holidays 9:00 AM to 1:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className={styles.legalContainer}>
                    <p className={styles.ad}>Legal Information</p>
                    <p className={styles.ad}>Privacy Policy</p>
                    <p className={styles.ad}>Terms and Conditions</p>
                    <p className={styles.ad}>Cookie Policy</p>
                    <p className={styles.ad}>© 2024 MEGA.com All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
// 