import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
  
        return (
        <section className='App'>
       <TwitterFollowCard  isFollowing userName="Midudev" name="Miguel Duran"/>
       <TwitterFollowCard  isFollowing userName="daviid_danger" name="David Juarez"/>
       <TwitterFollowCard  isFollowing={false} userName="elonmusk" name="Elon Musk"/>
       <TwitterFollowCard  isFollowing userName="vxnder" name="Vanderhart"/>
       </section>
    )
}