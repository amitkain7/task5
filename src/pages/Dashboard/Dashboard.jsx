import { Table } from '../../index';
const Dashboard = () => {
    return (
        <div className='p-4 w-[100vw] h-full flex flex-col gap-2'>
            <h1 className='text-[18px]'>Dashboard</h1>
            <Table />
        </div>
    )
}

export default Dashboard