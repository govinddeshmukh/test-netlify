import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
export default function About() {
  return (
    <div className='p-10'>
      <Card className="mt-6 w-full">
        <CardHeader color="blue-gray" className="relative h-[25rem]">
          <img className='w-full'
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="img-blur-shadow"
            layout="fill"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis doloribus nam cupiditate veniam,
            praesentium animi molestias accusantium corrupti sunt itaque quas
            aperiam ducimus dolore facere deleniti magnam et maiores molestiae
            perferendis! Dolores perspiciatis quas vel neque voluptate ut, error
            tempore optio, debitis, expedita quis aperiam.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
