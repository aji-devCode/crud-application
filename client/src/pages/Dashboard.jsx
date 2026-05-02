import Table from "../components/Table.jsx";

const Dashboard = () => {
    return (
        <div className="bg-gray-200 w-full min-h-screen">
            <div className="md:max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
                <div className='mb-3'>
                    <p
                        className='font-bold text-3xl uppercase text-slate-950'>
                        User Management
                    </p>
                    <p className='font-semibold uppercase'>
                        Manage and View all User Information
                    </p>
                </div>
                {/*Table*/}
                <div>
                    <Table />
                </div>
            </div>
        </div>
    )
}
export default Dashboard;