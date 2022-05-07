import './UserProfile.css'



export default function UserProfile(){
return(
    <div className="homeDiv">
        <div className="chatDiv">
        </div>
        <div className="profileDiv">
            <div className="blockButton"></div>
            <div className="deleteButton"></div>
            <div className="reportButton"></div>
            <div className="messageButton"></div>
            <div className="username">Username Here</div>
            <div className="profileImage">Profile Pic</div>
            <div className="age">Age is but a monitored number</div>
            <div className="identity">Who are you, really?</div>
            <div className="location">Where you at?</div>
            <div className="orientation">What are you into?</div>
            <div className="feed">Everything you've ever said is here</div>
            <div className="lookingFor">What do you want?</div>
            <div className="profileText">What makes you, you?</div>
            <div className="hobbies">What do you like?</div>
            <div className="links">Where else can we find you?</div>
        </div>
    </div>
)
}