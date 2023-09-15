import PropTypes from 'prop-types'
import { BsBook } from 'react-icons/bs';
import { TfiMoney } from 'react-icons/tfi';

const Course = ({singleCourse,handleClick}) => {
    let {cover_photo,description,title,price,timeInHours}=singleCourse;
  return (
    <div className='bg-white p-5 mb-5 rounded-md space-y-3 flex flex-col justify-between'>
        <div><img src={cover_photo} alt="Cover_Image" className='w-full'/></div>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-sm'>{description}</p>
        <div className='flex justify-between items-center flex-row'>
            <div className="money flex gap-1 items-center">
                <TfiMoney></TfiMoney>
                <p>Price: {price}</p>
            </div>
            <div className="time flex gap-1 items-center">
                <BsBook></BsBook>
                <p>Credit: {timeInHours}hr</p>
            </div>
        </div>
        <button onClick={()=>{ handleClick(singleCourse)}} className='border-2 rounded-md bg-[#2F80ED] border-[#2F80ED] w-full py-1 text-white text-[18px] font-semibold'>Select</button>
    </div>
  )
}

Course.propTypes = {
    singleCourse: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default Course