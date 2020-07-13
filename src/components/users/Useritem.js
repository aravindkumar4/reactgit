import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

 const Useritem = ({user: { login , avatar_url , html_url }}) =>{
  
        return (
            <div>
                <img src={avatar_url} 
                className='round-img'
                style={{width: '60px'}}/>
                <span>{login}</span>
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>more</Link>
            </div>
        )
    }
Useritem.propTypes = {
    user:PropTypes.object.isRequired,

}

export default Useritem
