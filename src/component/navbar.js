import "../css/nav.css";
export default function Navbar() {
    return(
        <>
        <div className="master">
            <div className="flex-container">
                <div className="flex-items">
                    LOGO
                </div>
                <div className="flex-items" style={{flex:0.5}}>
                </div>
                <div className="flex-items">
                    Find Doctors
                </div>
                <div className="flex-items">
                    Video consult
                </div>
                <div className="flex-items" >
                    pharma
                </div>
                <div className="flex-items" >
                    lab report
                </div>
    
            </div>
        </div>
        </>
    )
}