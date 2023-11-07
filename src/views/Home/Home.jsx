import { useSearchParams } from "react-router-dom"
import "./Home.css";

const GREETINGS=[
    "तेजोमय झाला आजचा प्रकाश, जुना कालचा काळोख, लुकलुकणार्‍या चांदण्याला किरणांचा सोनेरी अभिषेक, सारे रोजचे तरीही भासे नवा सहवास, सोन्यासारख्या लोकांसाठी खास, दिवाळीच्या हार्दिक शुभेच्छा!",

        "लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशा घेऊनि येवो नवी उमेद नवी आशा,सोबत आमच्या लक्ष लक्ष शुभेच्छा!",

        "हे माते तू ये कुंकवाच्या पावलांनी, नाव तुझं जपतो सदैव, मिळो आम्हा भक्तांना सुख-संपत्ती अपार, तुम्हा सर्वांना दिवाळीच्या शुभेच्छा अपरंपार.",

       " दिवाळीचा पहिला दिवा लागता दारी, सुखाचे किरण येती घरी, पुर्ण होवोत तुमच्या सर्व ईच्छा, आमच्याकडुन दिवाळीच्या हार्दिक शुभेच्छा!",

        "छत्रपती शिवरायांच्या पदस्पर्शाने पावन झालेल्या भुमीत,आई जगदंब देवीच्या क्रुपेने,tतुम्हाला व तुमच्या सहपरिवाराला दिपावलीच्या हार्दिक शुभेच्छा!"
    ]


function Home() {
    const [searchParams] = useSearchParams();

    const to = searchParams.get("to");
    const from = searchParams.get("from");
    const greetingNumber=searchParams.get("g")>= GREETINGS.length ?0: searchParams.get("g")||0;

   

    return (
        <>

            <div className="greating-container">
               
                <span>Dear {to}💖</span>
                <p>
                    {GREETINGS[greetingNumber]}
                </p>

                <span className="text-card">🙏'शुभेच्छुक'{from}</span>
            </div>
        </>)
}
export default Home