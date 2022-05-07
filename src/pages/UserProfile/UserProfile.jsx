import { useParams } from 'react-router-dom'
import './UserProfile.css'
import {useState, useEffect} from 'react'
import { getProfile, updateProfile, deleteProfile } from '../../utilities/users-service';

export default function UserProfile(){
    const {userid} = useParams();
    const [profile, setProfile] = useState([]);

    useEffect(()=>{
    const pullProfile = async ()=>{
        const resultProfile = await getProfile(userid)
        setProfile(resultProfile)
    }
    pullProfile()
    }, [])

    function handleChange(evt) {
        setProfile({ ...profile, [evt.target.name]: evt.target.value });
      }
      
      async function handleSubmit(evt) {
          evt.preventDefault();
          console.log(evt)
          try {
            updateProfile(userid,{profileText:evt.target.profileText.value});
          } catch(error) {
            console.log(error)
          }
        }
    function deleteThis(evt){
        try{
            deleteProfile(userid)
        }
        catch(err){
                console.log(err)
            }
        }
    return(
    <div className="homeDiv">
        <div className="chatDiv">
            <p>This is where a chat feed would go... IF I HAD ONE</p>
        </div>
        <div className="profileDiv">
            <div className="blockButton"></div>
            <div className="deleteButton">
                <button onClick={deleteThis}>Burn it all down</button>
            </div>
            <div className="reportButton"></div>
            <div className="messageButton"></div>
            <div className="username">{profile.name}</div>
            <div className="profileImage">Profile Pic</div>
            <div className="age">{profile.age}</div>
            <div className="identity">Who are you, really?</div>
            <div className="location">Where you at?</div>
            <div className="orientation">What are you into?</div>
            <div className="feed">Everything you've ever said is here</div>
            <div className="lookingFor">What do you want?</div>
            <div className="profileText">
                <form onSubmit={handleSubmit}> 
                    <label>Profile Text</label>
                    <textarea 
                    name="profileText"
                    defaultValue={profile.profileText}
                    onChange={handleChange}
                    />
                    <input type="submit" value="Submit here" />
                </form>
            </div>
            <div className="hobbies">What do you like?</div>
            <div className="links">Where else can we find you?</div>
        </div>
    </div>
)
}