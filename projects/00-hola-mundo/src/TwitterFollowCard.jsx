export function TwitterFollowCard({ userName, name, isFollowing}){
  
    console.log(isFollowing)
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
         <img 
         className='tw-followCard-avatar'
         alt="Avatar Midudev"
         src={`https://unavatar.io/${userName}`}/>
         <div className='tw-followCard-infoUserName'>
             <strong>{name}</strong>
             <span
             className='tw-followCard-infoUserName'>@{userName}</span>
         </div>
        </header>
        <aside>
         <button className='tw-followCard-button'>
             Seguir
         </button>
        </aside>
     </article>
    )
}