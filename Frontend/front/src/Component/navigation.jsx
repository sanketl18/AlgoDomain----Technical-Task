import { Link } from "react-router-dom"

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          
          <h1><Link to={"/"} className="navbar-brand animate-charcter"> EasyCart.in</Link></h1>
        </div>

<div id="menu-outer">
<div className="table"  id='bs-example-navbar-collapse-1'>
    <ul id="horizontal-list" >
            
          </ul>
        </div>
        </div>
        
        </div>
    </nav>
  )
}
