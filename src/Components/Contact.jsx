import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
    Textarea,
  } from "@material-tailwind/react";
   
  export default function Contact() {
        
    return (
        <div className="p-10 w-full h-screen flex items-center justify-center">

      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-20 place-items-center"
        >
          <Typography variant="h3" color="white">
            Contact
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Textarea label="Text..." size="lg" />
          
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="text-xl" variant="gradient" fullWidth>
                Submit
          </Button>
         
        </CardFooter>
      </Card>
              </div>
    );
  }