const AddButton = () => {
    return (
        <div className='mb-2'>
            <button className='
                cursor-pointer bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-7 py-2 rounded flex
                items-center gap-2'
            >
                <p className='uppercase font-bold text-white tracking-tight'>
                    Add User
                </p>
            </button>
        </div>
    )
}

export default AddButton;