import AddButton from '../components/AddButton.jsx'

const Table = () => {
    return (
        <div className=''>
            <div>
                <AddButton />
            </div>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
                <div className='overflow-x-auto'>
                    <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gradient-to-r from-indigo-600 to-indigo-700'>
                            <tr className=''>
                                <th className='px-6 py-4 border border-2 text-left text-xs font-medium text-white uppercase tracking-wider'>
                                    ID
                                </th>
                                <th className='px-6 py-4 border border-2 text-left text-xs font-medium text-white uppercase tracking-wider'>
                                    First Name
                                </th>
                                <th className='px-6 py-4 border border-2 text-left text-xs font-medium text-white uppercase tracking-wider'>
                                    Last Name
                                </th>
                                <th className='px-6 py-4 border border-2 text-left text-xs font-medium text-white uppercase tracking-wider'>
                                    E-mail
                                </th>
                                <th className='px-6 py-4 border border-2 text-left text-xs font-medium text-white uppercase tracking-wider'>
                                    Phone
                                </th>
                                <th className='px-6 py-4 border border-2 text-left text-xs font-medium text-white uppercase tracking-wider'>
                                    Location
                                </th>
                                <th className='px-6 py-4 border border-2 text-left text-xs font-medium text-white uppercase tracking-wider'>
                                    Hobby
                                </th>
                                <th className='px-6 py-4 border border-2 text-left text-xs font-medium text-white uppercase tracking-wider'>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='px-6 py-4 text-left text-xs font-medium uppercase tracking-wider'>1</th>
                                <th className='px-6 py-4 text-left text-xs font-medium uppercase tracking-wider'>RJ</th>
                                <th className='px-6 py-4 text-left text-xs font-medium uppercase tracking-wider'>Bituin</th>
                                <th className='px-6 py-4 text-left text-xs font-medium uppercase tracking-wider'>rjbituin0@gmail.com</th>
                                <th className='px-6 py-4 text-left text-xs font-medium uppercase tracking-wider'>09669279654</th>
                                <th className='px-6 py-4 text-left text-xs font-medium uppercase tracking-wider'>Cainta</th>
                                <th className='px-6 py-4 text-left text-xs font-medium uppercase tracking-wider'>Coding</th>
                                <th className='px-6 py-4 text-left text-xs font-medium uppercase tracking-wider'>Buttons</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table;