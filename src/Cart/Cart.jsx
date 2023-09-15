import PropTypes from 'prop-types'
import LodeCart from '../LodeCartData/LodeCart'

const Cart = ({clickData,credit,creditHours,totalPrice}) => {
    let count=1;
  return (
    <div className='w-full lg:w-1/4 h-full p-5 bg-white rounded-md space-y-5'>
        
        <h2 className='text-base font-medium text-[#2F80ED] p-1 border-b-2'>Credit Hours Remaining: {credit}hr</h2>

        <div className='border-b-2 pb-2'>
            <p className='text-xl font-semibold'>course Name</p>
            {
                clickData.map((dataForCart, index)=>{
                    return(
                       <div key={index} className='flex gap-1 bg-[#eee] rounded-md p-1 mt-2'>
                            <p>{count++}.</p>
                             <LodeCart className="list-decimal" dataForCart={dataForCart}></LodeCart>
                       </div>
                    )
                })
            }
        </div>
         <p className='text-sm font-bold border-b-2 pb-3'>Total Credit: {creditHours}hr Out Of 20hr</p>
         <p className='text-sm font-bold border-b-2 pb-3'>Total Price: ${totalPrice}</p>
    </div>
  )
}

Cart.propTypes = {
    clickData: PropTypes.array.isRequired,
    credit: PropTypes.number.isRequired,
    creditHours: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
};

export default Cart