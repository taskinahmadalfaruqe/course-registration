import PropTypes from 'prop-types'

const LodeCart = ({dataForCart}) => {
    const{title}=dataForCart;
  return (
    <div>
        <div>
            <p>{title}</p>
        </div>
    </div>
  )
}

LodeCart.propTypes = {
    dataForCart: PropTypes.object.isRequired,
}

export default LodeCart