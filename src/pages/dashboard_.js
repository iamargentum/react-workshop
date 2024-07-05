import styles from "./dashboard.module.css";

export default function Dashboard() {
    return (
        <div className={styles.parent}>
            {/* navbar start */}

            {/* navbar wrapper */}
            <div style={{ height: "100%", minWidth: "500px", maxWidth: "800px", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "20px" }}>
                <div
                    style={{
                        height: "100%", width: "100%", borderRadius: "20px", backgroundColor: "#2345ab"
                    }}
                >
                    {/* user wala div */}
                    <div></div>
                    {/* nav links */}
                    <ul>

                    </ul>
                </div>
            </div>

            {/* navbar end */}

            {/* main */}
            <div
                style={{
                    width: "100%", height: "100%", paddingTop: "20px", paddingBottom: "20px", paddingRight: "20px"
                }}
            >
                <div
                    style={{
                        height: "100%", width: "100%", borderRadius: "20px", backgroundColor: "#ffffff"
                    }}
                >

                </div>
            </div>
        </div>
    )
}