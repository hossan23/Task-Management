import { useForm } from 'react-hook-form';
import { Datepicker } from 'flowbite-react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const Create = () => {
 const axiosPublic = useAxiosPublic();
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();

 const onSubmit = data => {
  console.log(data);
  axiosPublic
   .post('/datas', data)
   .then(() => {
    toast.success('Successfully Created!');
   })
   .catch(() => toast.error("This didn't work."));
 };

 //  const handleCreate = e => {
 //   e.preventDefault();
 //   const form = e.target;
 //   const title = form.title.value;
 //   const description = form.description.value;
 //   const deadline = form.deadline.value;
 //   const priority = form.priority.value;
 //   const createData = { title, description, deadline, priority };
 //   console.log(createData);
 //  };

 return (
  <div>
   <h1 className="text-2xl text-center">Create</h1>
   <form onSubmit={handleSubmit(onSubmit)} className="space-y-5  sm:w-96">
    <div>
     <label className="block text-sm font-medium text-gray-700">Title</label>
     <input type="text" {...register('title', { required: true })} name="title" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
     {errors.title && <span>This field is required</span>}
    </div>

    <div>
     <label className="block text-sm font-medium text-gray-700">Description</label>
     <input type="text" {...register('description', { required: true })} name="description" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
     {errors.description && <span>This field is required</span>}
    </div>

    {/* <div>
     <label className="block text-sm font-medium text-gray-700">Deadline</label>
     <input type="text" {...register('deadline')} name="deadline" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
    </div> */}
    <div {...register('deadline', { required: true })}>
     <Datepicker />
    </div>

    <div>
     <label className="block text-sm font-medium text-gray-700">Priority</label>
     <input type="text" {...register('priority', { required: true })} placeholder="low / moderate / high" name="priority" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
    </div>

    <div>
     <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800  focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
      Create
     </button>
    </div>
   </form>
  </div>
 );
};

export default Create;
