import { useSearchParams } from "react-router-dom"
import "./Home.css";
import Diya from "./diva.gif"
import diwali from "./diwali.png";
import { useState } from "react";


const GREETINGS = [
    "तेजोमय झाला आजचा प्रकाश, जुना कालचा काळोख, लुकलुकणार्‍या चांदण्याला किरणांचा सोनेरी अभिषेक, सारे रोजचे तरीही भासे नवा सहवास, सोन्यासारख्या लोकांसाठी खास, दिवाळीच्या हार्दिक शुभेच्छा!",

    "लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशा घेऊनि येवो नवी उमेद नवी आशा,सोबत आमच्या लक्ष लक्ष शुभेच्छा!",

    "हे माते तू ये कुंकवाच्या पावलांनी, नाव तुझं जपतो सदैव, मिळो आम्हा भक्तांना सुख-संपत्ती अपार, तुम्हा सर्वांना दिवाळीच्या शुभेच्छा अपरंपार.",

    " दिवाळीचा पहिला दिवा लागता दारी, सुखाचे किरण येती घरी, पुर्ण होवोत तुमच्या सर्व ईच्छा, आमच्याकडुन दिवाळीच्या हार्दिक शुभेच्छा!",

    "छत्रपती शिवरायांच्या पदस्पर्शाने पावन झालेल्या भुमीत,आई जगदंब देवीच्या क्रुपेने,तुम्हाला व तुमच्या सहपरिवाराला दिपावलीच्या हार्दिक शुभेच्छा!"
]


function Home() {
    const [searchParams] = useSearchParams();

    const [to ,setTo]=useState(searchParams.get("to"));
    const [from ,setFrom]=useState(searchParams.get("from"));
    const [greetingNumber ,setGreetingNumber]=useState( searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0);
    const [themeNumber ,setThemeNumber]=useState(searchParams.get("t"));

    return (
        <>
            <div className="">
                <div className={`greating-container ${`theme-${themeNumber}`}`}>
                    
                {/* <img src={Diya} className="card-img image"/> */}
                <div className="container">
                <img src={diwali} className="diwali-design"/>
                <img src={Diya} className="card-img image"/> 
                <img src={diwali} className="diwali-design"/>
                </div>

                    <span className="text-size">Dear {to}💖</span>
                    <p className="text-size">
                        {GREETINGS[greetingNumber] }
                    </p><br/>
                    <span className="text-card">🙏'शुभेच्छुक' {from}</span>
                </div>
                <p className="theme">{import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetingNumber}&t={themeNumber}</p>
               
               <div className="flex-container">
               <input type="text"
               placeholder="Friend Name"
               value={to}
               onChange={(e)=>{
                setTo(e.target.value)
               }}
               className="box"/>

               <input type="text"
               placeholder="Your Name"
               value={from}
               onChange={(e)=>{
                setFrom(e.target.value)
               }}
               className="box"/>

               <select value={greetingNumber} onChange={(e)=>{
setGreetingNumber(e.target.value)
               }} className="box1">
                <option value="">Greeting</option>
                <option value="1">Greeting1</option>
                <option value="2">Greeting2</option>
                <option value="3">Greeting3</option>
                <option value="4">Greeting4</option>
                <option value="5">Greeting5</option>
               </select>

               <select value={themeNumber} onChange={(e)=>{
setThemeNumber(e.target.value)
               }} className="box1">
                <option value="0">Theme</option>
                <option value="1">Theme1</option>
                <option value="2">Theme2</option>
                <option value="3">Theme3</option>
                <option value="4">Theme4</option>
                <option value="5">Theme5</option>
                <option value="6">Theme6</option>
               </select>
               </div>

            </div>
        </>
        )
    }
export default Home