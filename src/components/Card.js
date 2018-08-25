import React from 'react';

const Card = ({name, email, id}) => {
  return(
  	<div className='bg-light-green dib ma2 pa3 br3 grow bw2 shadow-5 tc'>
  	  <img src={`https://robohash.org/${id}?set=set4&size=300x300`} alt='robot'/>
  	  <div>
  	  	<h4>{name}</h4>
  	  	<h5>{email}</h5>
  	  </div>
  	</div>
  );
}

export default Card