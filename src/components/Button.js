//import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

    

    return <button style={{backgroundColor: color}}
    className='btn'
    onClick={onClick}
    >
      {text}
    </button>
}

export default Button