import React from 'react'

import quill from './../src/media/quill.svg'
import newIcon from './../src/media/new.png'
import newHover from './../src/media/new-hover.png'

import './Sidebar.css'

const Sidebar = () => {
  return (
    // <div
    //   className="Sidebar"
    //   //style={styles.sidebar}
    // >
    //   <div
    //     className="logo"
    //     //style={styles.logo}
    //   >
    //     <img
    //       src={quill}
    //       alt="Noteherder"
    //       //style={styles.logoImg}
    //     />
    //   </div>

    //   <a href="/notes">
    //     <img
    //       src={newHover}
    //       alt="New note"
    //     />
    //     <img
    //       src={newIcon}
    //       alt="New note"
    //     />
    //   </a>

    //   <div className="SignOut">
    //     <button>
    //       <i className="fa fa-sign-out"></i>
    //     </button>
    //   </div>
    // </div>

    <nav className="Sidebar">
          <div className="logo">
            <img src={quill} alt="Noteherder"/>
          </div>
          <a className="new-note" href="/notes">
            <img src={newHover} alt="New note"/>
            <img className="outline" src={newIcon} alt="New note"/>
          </a>
          <div className="SignOut">
            <button>
              <i className="fa fa-sign-out"></i>
            </button>
          </div>
        </nav>

  )
}


// const styles = {
//   sidebar: {
    
//     width: '6rem',
//     backgroundColor: '#f3f3f3',
//     padding: '0.5rem 0',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   logo: {
//     fontFamily: '"Fauna One"',
//     color: '#666',
//     fontSize: '3rem',
//   },
//   logoImg: {
//     width: '3rem',
//     paddingLeft: '0.4rem',
//   },


//  'a.New-Note' :{
//   marginTop: '2rem',
//   position: 'relative',
//   width: '40px',
// },
//  button :{
//   backgroundColor: 'transparent',
//   border: '0',
//   color: '#008BF8',
//   cursor: 'pointer',
// },
//  'a img' :{
//   position: 'absolute',
//   left: '0',
//   width: '100%',
//   transition: 'opacity 0.25s ease-in-out',
// },
//  'a:hover img.outline' :{
//   opacity: '0',
// },

//  'SignOut' :{
//   position: 'absolute',
//   bottom: '1rem',
// },
//  'SignOut button' :{
//   outline: 'none',
// },
//  'SignOut button i.fa' :{
//   fontSize: '2rem',
// },
// }
export default Sidebar