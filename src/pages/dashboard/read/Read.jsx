import { Table } from 'flowbite-react';
import { useLoaderData } from 'react-router-dom';

const Read = () => {
 const datas = useLoaderData();
 console.log(datas);
 return (
  <div>
   <h1 className="text-2xl text-center font-bold mb-5">To Do List</h1>
   <div className="overflow-x-auto">
    <Table hoverable>
     <Table.Head>
      <Table.HeadCell>Title</Table.HeadCell>
      <Table.HeadCell>Deadline</Table.HeadCell>
      <Table.HeadCell>Priority</Table.HeadCell>
     </Table.Head>
     {datas?.map(data => (
      <Table.Body className="divide-y" key={data.id}>
       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{data?.title}</Table.Cell>
        <Table.Cell>{data?.deadline}</Table.Cell>
        <Table.Cell>{data?.priority}</Table.Cell>
        <Table.Cell>
         <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          Edit
         </a>
        </Table.Cell>
       </Table.Row>
      </Table.Body>
     ))}
    </Table>
   </div>
  </div>
 );
};

export default Read;
